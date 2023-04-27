import React from 'react';

export default function Card(props) {
    return (
        <>
            <div className="container">
                <div className="heading">
                    <h5>EXPLORE YOUR BOOK WORLD</h5>
                    <h2>{props.title}</h2>
                </div>
                <div className='card'>
                    <div className='left'>
                        <div>
                            <label>Tiêu đề <span>*</span>:</label>
                            {props.isChange ? <input placeholder='Tiêu đề' /> : <p>{props.title}</p>}
                        </div>
                        <div>
                            <label>Tác giả <span>*</span>:</label>
                            {props.isChange ? <input placeholder='Tác giả' /> : <p>{props.author}</p>}
                        </div>
                        <div className='big'>
                            <label>Mô tả về sách:</label>
                            {props.isChange ? <input placeholder='Mô tả về sách' /> : <p>{props.description}</p>}
                        </div>
                        <div>
                            <label>Ngày phát hành <span>*</span>:</label>
                            {props.isChange ? <input placeholder='Ngày phát hành' /> : <p>{props.releaseDate}</p>}
                        </div>
                        <div>
                            <label>Số trang:</label>
                            {props.isChange ? <input placeholder='Số trang' /> : <p>{props.pages}</p>}
                        </div>
                        <div>
                            <label>Thể loại:</label>
                            {props.isChange ? (
                                <input list="category" placeholder='Thể loại' />
                            ) : <p>{props.category}</p>}
                            <datalist id="category">
                                <option value="Novel" />
                                <option value="Fiction" />
                                <option value="Comic" />
                                <option value="Poem" />
                                <option value="Non-fiction" />
                            </datalist>
                        </div>
                    </div>
                    <div className='right'>
                        {props.isChange && <button className='upload'>Upload</button>}
                        <input className='up-img' />
                    </div>
                </div>
            </div>
        </>
    )
}
