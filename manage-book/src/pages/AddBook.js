import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function AddBook() {
    return (
        <>
            <Navbar />
            <Card title='Add Book' isChange={true}/>
            <Footer content='Save' isShow={true}/>
        </>
    )
}