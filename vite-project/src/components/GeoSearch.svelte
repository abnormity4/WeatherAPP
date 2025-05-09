<script lang="ts">
    
    import * as api from '../utils/apiHandler';
    import GeoSearchList from './GeoSearchList.svelte';

    let searchQuery: string = $state('');
    let searchResponse = $state([]);

    async function searchLocation() {
        const res = await api.geo(searchQuery)
        searchResponse = res
    }

</script>

<div>
    
    <h1>Searchbar:</h1>
    
    <input type="text" bind:value={searchQuery}>
    <button 
    aria-label="Search location" 
    onclick={() => searchLocation()}
    >Search!</button>


    <GeoSearchList searchList={searchResponse}></GeoSearchList>
</div>
