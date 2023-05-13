import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from "../store/homeSlice";
import { fetchDataFromApi } from '../utils/api'



const App = () => {

    const dispatch = useDispatch();
    const { url } = useSelector((state) => state.home);
    console.log(url);

    useEffect(() => {
        apiTesting();
    }, [])

    const apiTesting = () => {
        fetchDataFromApi('/movie/popular')
            .then(res => {
                console.log(res);
                dispatch(getApiConfiguration(res));
            })
    }

    return (
        <main>
            <h1>Hello World!!! {url?.total_pages}</h1>
        </main>
    )
}

export default App