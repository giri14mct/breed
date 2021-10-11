import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DogList from './DogList'

const url = 'https://dog.ceo/api/breeds/image/random/10';

const Home = () => {
    const [dogsdata, setDogsData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await axios.get(url)
            setDogsData(result.data.message)
        }
        fetchApi()
    }, [])

    return (
        <>
            <h1 className='title'>Welocome to Dog Breed page</h1>
            <div className='container'>
                {dogsdata.map((data, i) => {
                    return <DogList key={i} dogImg={data} />
                })}
            </div>
        </>
    )
}

export default Home
