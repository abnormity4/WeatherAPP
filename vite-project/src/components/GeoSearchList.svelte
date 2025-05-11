<script lang="ts">
    import * as api from '../utils/apiHandler';
    import type { WeatherDataType } from '../utils/interface';
    import { weatherDataStore } from '../store/store';

    let { searchList } = $props();


    async function weatherFetch(lat: number, lon: number) {
            const a = await api.weather(lat, lon);
            const b = await api.air(lat, lon);
            return {...a, ...b};
    }

    async function createWeatherObject(lat: number, lon: number) {
        const a = await weatherFetch(lat, lon);
        const b: WeatherDataType = {
            air: {
                aqi: a.list[0].main.aqi,
                ...a.list[0].components
            },
            country: a.sys.country,
            description: a.weather[0].description,
            humidity: a.main.humidity,
            icon: a.weather[0].icon,
            id: a.weather[0].id,
            name: a.name,
            sunrise: a.sys.sunrise,
            sunset: a.sys.sunset,
            temp: a.main.temp,
            temp_feelslike: a.main.feels_like,
            wind_speed: a.wind.speed
        }
        return b
    }

    let interval: number; 

    

</script>

<div>
    {#each searchList as e} 
        <ul>
            <li>
                <p>
                    <b>{e.name}</b>{#if e.state}<span>, {e.state}</span>{/if}{#if e.local_name}<span>({e.local_name})</span>{/if}
                    <button onclick={async () => {
                        clearInterval(interval)
                        const a = async () => {
                            const a = await createWeatherObject(e.lat, e.lon)
                            weatherDataStore.set(a)
                        }
                        a();
                        interval = setInterval(a, 10 * 60 * 1000)
                    }}>+</button>
                </p>
            </li>
        </ul>
    {/each}
</div>



