import React, {useEffect, useState} from 'react';
import {$authHost} from "../http";

const Basket = () => {

    const [product, setProduct] = useState({compound: '', img: '', name: "", price: 120})

    useEffect(() => {
        $authHost.get('api/basket').then((response) =>
            $authHost.get('api/dish/' + response.data.dishId)
                .then((response) => setProduct(response.data)))
    }, []);
    const addOrder = () => {
        alert("Ваш заказ принят!")
    }

    return (
        <div style={{textAlign: 'center'}}>
            <div>
                <img src={product.img} width={300} height={300}/>
                <p>Название еды: {product.name}</p>
                <p>Описание: {product.compound}</p>
                <p>Цена корзины: {product.price}</p>
                <button onClick={addOrder}>Заказать</button>
            </div>
        </div>
    );
};

export default Basket;