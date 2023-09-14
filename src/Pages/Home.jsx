import React from 'react'
import FormsLoader from '../Component/Loaders/FormsLoader'
import Hero from '../Component/Home.jsx/Hero'
import Login from './Login'
import About_point from '../Component/Home.jsx/About_point'
import Contact from '../Component/Home.jsx/Contact'
const Home = () => {
    return (
        <div className=''>
            <Hero />
            <About_point />
            <Contact/>
        </div>
    )
}

export default Home
