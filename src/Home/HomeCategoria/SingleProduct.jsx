import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import SingleProductAPI from "../../Api/SingleProductAPI";

export default function SingleProduct() {
    const { id } = useParams();
    const product = SingleProductAPI.find(item => item.id === parseInt(id));
    const [count, setCount] = useState(1);

    if (!product) return <h2>Товар не найден</h2>;

    return (
        <div className="single-product">
            <div className="single-product__container">

                {/* Orqaga qaytish tugmasi yuqoriga qo'yildi */}
                <Link to="/" className="single-product__back-link">← Назад</Link>

                <img src={product.image} alt={product.name} className="single-product__image" />

                <div className="single-product__content">
                    <h2 className="single-product__title">{product.name}</h2>
                    <p className="single-product__description">{product.description}</p>

                    {product.recipe && product.recipe.length > 0 && (
                        <div className="single-product__details">
                            <h3>Состав:</h3>
                            <ul>
                                {product.recipe.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {product.details && (
                        <div className="single-product__details">
                            <h3>Описание:</h3>
                            <p>{product.details}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
