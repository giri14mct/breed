import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DogContext } from '../App'

const DogList = (props) => {

    const [selectedDog, setSelectedDog] = useContext(DogContext)

    const aboutDisplayer = () => {
        setSelectedDog({ dog: props.dogImg })
    }

    return (
        <Link to='/About' onClick={aboutDisplayer} className="dogs">
            <img src={props.dogImg} alt="DoImages" />
        </Link>

    )
}

export default DogList
