import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function DetailBook() {
    return (
        <>
            <Navbar />
            <Card title='Detail Book' isChange={false} />
            <Footer content='Edit' isShow={true}/>
        </>
    )
}