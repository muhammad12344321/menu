import React, { useState } from "react";
import { ProductAPI } from "../../Api/ProductApi";
import { CardActionArea } from "@mui/material";
import {Link} from "react-router-dom";


export default function HomeCategoria({ query }) {
  const categories = ["Все", "Фастфуд", "Напитки", "Традиционная еда"];
  const [selectedCategory, setSelectedCategory] = useState("Все");


  const filteredByCategory = selectedCategory === "Все"
    ? ProductAPI
    : ProductAPI.filter(product =>
      product.category && product.category.toLowerCase() === selectedCategory.toLowerCase()
    );


  const finalFiltered = filteredByCategory.filter(product =>
    product.name && product.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <section className="categoria">
      <div className="container">
        <div className="categoria__titles">
          <h2>Категории</h2>
        </div>

        <div className="categoria__wrapper">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`categoria__button ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>



        <ul className="recom_wrapper">
          {finalFiltered.length > 0 ? finalFiltered.map(product => (
            <li key={product.id} className="recom_item">
              <CardActionArea component={Link} to={`/product/${product.id}`}>
                <img className="item_img" src={product.image} alt={product.name} />
                <div className="item_content">
                  <h3 className="item_title">{product.name}</h3>
                  <p className="item_suptitle">{product.description}</p>
                  <div className="item_price_cart">
                    <p className="item_price">
                      Цена: <span className="num">{product.price}</span> сом
                    </p>
                  </div>
                </div>
              </CardActionArea>
            </li>
          )) : (
            <p>Товар отсутствует</p>
          )}
        </ul>
      </div>
    </section>
  );
}
