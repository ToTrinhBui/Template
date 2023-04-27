import React from "react";
import { Link } from 'react-router-dom';

export default function Footer(props) {
    return (
        <footer>
            {props.isShow && props.content !== 'Edit' ? (
                <button className="submit">{props.content}</button>
            ) : (
                props.content === 'Edit' && (
                    <Link to='/edit'><button className="submit">{props.content}</button></Link>
                )
            )}
            <div className="grid">
                <div >
                    <h3>Môn học</h3>
                    <p>Input</p>
                </div>

                <div >
                    <h3>Giảng viên hướng dẫn</h3>
                    <p>Input</p>
                </div>

                <div >
                    <h3>Sinh viên thực hiện</h3>
                    <p>Input</p>
                </div>

                <div >
                    <h3>Mã sinh viên</h3>
                    <p>B19DCCN</p>
                </div>
            </div>
        </footer>
    )
}