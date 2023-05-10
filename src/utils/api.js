import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDk3NTRjZGUwNGE1Nzc4MTUyOGNjM2ZkMDg0OWZkZiIsInN1YiI6IjY0MmIxYzE2ZmM2NTM4MDA5NTFhODAwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BjJoOoilkrhr1QylO7-wCp4juMJRXnpi0HvexAJvtuk';

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });

        return data;

    } catch (err) {

        console.log(err);

        return err;
    }
};