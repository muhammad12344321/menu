import React from 'react';
import { CardActionArea } from '@mui/material';
import { BsCartPlus } from "react-icons/bs";
import { ProductAPI } from '../../Api/ProductApi';

export default function Recom() {
    return (
        <section className='recom'>
            <div className="container">
                <h2 className='recom_title'>Products</h2>
                <ul className='recom_wrapper'>
                    {ProductAPI.map((item) => (
                        <li className='recom_item' key={item.id}>
                            <CardActionArea>
                                <img className='item_img' src={item.image} alt={item.name} />
                                <div className="item_content">
                                    <h3 className='item_title'>{item.name}</h3>
                                    <p className="item_suptitle">{item.description}</p>
                                    <div className="item_price_cart">
                                        <p className='item_price'>
                                            Price: <span className='num'>{item.price}</span><span> сом</span>
                                        </p>
                                    </div>
                                </div>
                            </CardActionArea>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
