import React from 'react';
import { CardActionArea } from '@mui/material';
import { BsCartPlus, BsCartDash } from "react-icons/bs";

export default function Item({ item }) {
    return (
        <li className='recom_item'>
            <CardActionArea>
                <img className='item_img' src={item.foto} alt={item.title} />

                <div className="item_content">
                    <h3 className='item_title'>{item.title}</h3>
                    <p className="item_suptitle">{item.suptitle}</p>

                    <div className="item_price_cart">
                        <p className='item_price'>Price: <span className='num'>{item.price}</span><span>сом</span></p>

                        <div className='item_cart'>
                            <BsCartPlus />
                        </div>
                    </div>
                </div>
            </CardActionArea>
        </li>
    )
}
