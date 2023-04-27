import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function DeleteBook(){
    return(
        <>
            <Navbar />
            <Card title='Are you sure you want to delete this book?' isChange={false}/>
            <Footer content='Delete' isShow={true}/>
        </>
    )
}