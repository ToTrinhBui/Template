import React from "react";
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className="container">
            <div className="title">
                <div className="flex1">
                    <div className="heading">
                        <h5>EXPLORE YOUR BOOK WORLD</h5>
                        <h2>Book List</h2>
                    </div>
                    <Link to='/add'><p className="inputAdd">Add book</p></Link>
                </div>
            </div>
            <div className="main">
                <table>
                    <thead>
                        <tr>
                            <th >ID</th>
                            <th >Book Name</th>
                            <th >Author</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>author</td>
                            <td className="link" ><Link to='/view' >View</Link></td >
                            <td className="link"><Link to='/delete' >Delete</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}