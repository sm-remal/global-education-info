import React from 'react';
import Container from '../../Container/Container';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <>
            <Container>
                <h1>Navbar</h1>
                <Link to={"/login"} className='btn'>LogIn</Link>
            </Container>
            
        </>
    );
};

export default Navbar;