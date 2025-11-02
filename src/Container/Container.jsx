import React from 'react';

const Container = ({childer,className}) => {
    return <section className={`${className} max-w-7xl mx-auto px-5`}>{childer}</section>;
};

export default Container;