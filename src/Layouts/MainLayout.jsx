import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <>
            <header className='w-full mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='w-full mx-auto bg-base-300 min-h-[calc(100vh-48px)]'>
                <Outlet></Outlet>
            </main>
            <footer className='w-full mx-auto bg-black'>
                <Footer></Footer>
            </footer>
            
        </>
    );
};

export default MainLayout;