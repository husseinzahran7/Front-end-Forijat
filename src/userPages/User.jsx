import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

// Components
import Layout from '../components/Layout'

// Pages
import Home from './Home'
import Login from './Login'
import Cases from './Cases'
import About from './About'
import Signup from './Signup'
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfService from './TermsOfService'
import DonationPage from './Donate'
import ForgotPassword from './ForgotPassword'
import Checkout from './Checkout'
import ComingSoonPage from './subscription'
import Profile from './Profile'
// import ResetPasswordNew from './ResetPasswordNew'
// import ResetPasswordVerification from './ResetPasswordVerification'




const User = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <>
            <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Cases" element={<Cases />} />
                <Route path="/about" element={<About />} />
                <Route path="/Signup" element={<Signup/>} />
                <Route path="/privacy" element={<PrivacyPolicy/>} />
                <Route path="/TermsOfService" element={<TermsOfService/>} />
                <Route path="/Donate/*" element={user?(<DonationPage/>) :(<Navigate to="/login" state={{ from: useLocation() }} replace />)} />

                <Route path="/ForgotPassword" element={<ForgotPassword/>} />
                {/* <Route path="/verify-reset-code" element={<ResetPasswordNew/>} /> */}
                {/* <Route path="/reset-password" element={<ResetPasswordVerification/>} /> */}

                {/* add login validation to the checkout page */}
            {/* <Route path="/Checkout" element={ user ? <Checkout/> : <Login/> } /> */}
                <Route path="/Checkout" element={ user ? (<Checkout/>) :( <Navigate to="/login" state={{ from: useLocation() }} replace />) } />
                <Route path="/Checkout" element= {<Checkout/>} />

                <Route path="/subscription" element={<ComingSoonPage/>} />
                <Route path="/Profile" element={<Profile/>} />
                
                
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
