<script lang="ts">
    
    import * as api from '../utils/apiHandler';
    import GeoSearchList from './GeoSearchList.svelte';
    import { onMount } from 'svelte';
    import { countryToLanguageCode } from '../utils/getLanguageCode';

    interface GeodataSearchResult {
        country: string,
        name: string,
        state: string,
        local_name: string,
        lat: number, 
        lon: number
    }

    onMount(() => {
        const searchResults = localStorage.getItem('searchResults')
        if (searchResults !== null) {
            searchResponse = JSON.parse(searchResults)
        }
    })

    let searchQuery: string = $state('');
    let searchResponse: GeodataSearchResult[] = $state([]);


    async function createObject(searchQuery: string) {
        const a = await api.geo(searchQuery)
        const b = a.map((el) => {
        const obj: GeodataSearchResult = {
            country: el.country,
            name: el.name,
            state: el.state,
            lat: el.lat,
            lon: el.lon,
            local_name: el.local_names?.[countryToLanguageCode(el.country)] ?? ''
        }
            return obj;
        })
        return b;
    }

    //to-do : vs as
    // to-do: this + .apply()

</script>

<div id="geo-search">
    
    <h1>Searchbar:</h1>
    
    <input type="text" bind:value={searchQuery}>
    <button 
    aria-label="Search location" 
    
    onclick={async () => {
        const a = await createObject(searchQuery)
        localStorage.setItem('searchResults', JSON.stringify(a))
        searchResponse = a
    }}
    >Search!</button>


    <GeoSearchList searchList={searchResponse}></GeoSearchList>
</div>
