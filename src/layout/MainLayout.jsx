import React from 'react';
import NavBar from '../components/navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../pages/homepage/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;