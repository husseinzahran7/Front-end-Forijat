import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Components
import Layout from '../components/Layout'

// Pages
import Home from './Home'
import Login from './Login'
import Cases from './Cases'


const User = () => {
    // const user = JSON.parse(localStorage.getItem('user'))
    return (
        <>
            <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Cases" element={<Cases />} />
            {/* <Route path="/cases" element={<Cases />} /> */}
            {/* <Route path="/donate" element={<Donate />} /> */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/signup" element={<Signup />} /> */}


                {/* <Route path="/services" element={user?<Services /> :<Login />} /> */}
                {/* <Route path="/update" element={user?<Update />:<Login />} /> */}
                {/* <Route path="/book" element={user? <Book />: <Login />} /> */}
                {/* <Route path="/registration" element={user? <Registration /> : <Login />} /> */}
                
                
            </Routes>
            </Layout>
            
        </>
    )
}

export default User