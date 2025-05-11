import axios from "axios";
import type { GeodataSearchType } from "./interface";

const APIHandler = async <T>(url: string, params: any) => { //to-do learn about 'Record' type
        const response = await axios.get(`https://api.openweathermap.org` + url, {
            params: {
                appid: '636947a0883856d33da0e2b4c126dc65',
                limit: 5,
                units: 'metric',
                ...params
            }
        });
    return response.data
}

export function weather(lat: number, lon: number) {
    return APIHandler(`/data/2.5/weather`, {
        lat,
        lon
    })
}

export function air(lat: number, lon: number) {
    return APIHandler(`/data/2.5/air_pollution`, {
        lat,
        lon
    })
}

export function geo(q: string) {
    return APIHandler(`/geo/1.0/direct`, {
        q
    }) as Promise<GeodataSearchType[]> // as Promise<GeodataSearchResult[]> 
}


