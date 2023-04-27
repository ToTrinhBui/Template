import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function EditBook() {
    return (
        <>
            <Navbar />
            <Card title='Edit Book' isChange={true}/>
            <Footer content='Save' isShow={true}/>
        </>
    )
}