import React, { useContext } from 'react'
import { DogContext } from '../App'
import { Link } from 'react-router-dom'

const About = () => {
    const [selectedDog, setSelectedDog] = useContext(DogContext)
    console.log(selectedDog)

    return (
        <div className='about'>
            <Link to="/"> <button type="button" className="back" >Home </button></Link>
            <img src={selectedDog.dog} alt='Selected dog will display here' />
        </div>
    )
}

export default About
