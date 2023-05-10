import { useState, useEffect } from 'react'

import { fetchDataFromApi } from '../utils/api'

const App = () => {

    useEffect(() => {
        apiTesting();
    }, [])

    const apiTesting = () => {
        fetchDataFromApi('/movie/popular')
            .then(res => {
                console.log(res);
            })
    }

    return (
        <main>
            <h1>Hello World!</h1>
        </main>
    )
}

export default App