import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
const UserLayout = () => {
    return (
        <div>
            <div>
                <div className="white-gradient" />
                <Header />
            </div>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default UserLayout