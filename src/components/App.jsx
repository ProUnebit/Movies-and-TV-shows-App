import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from "../store/homeSlice";
import { fetchDataFromApi } from '../utils/api'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from '../pages/home/Home'
import Details from '../pages/details/Details'
import SearchResult from '../pages/searchResult/SearchResult'
import Explore from '../pages/explore/Explore'
import PageNotFound from '../pages/404/PageNotFound'




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