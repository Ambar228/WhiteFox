import React, {useEffect, useState} from 'react';
import {$authHost} from "../http";

const Basket = () => {

    const [products, setProduct] = useState([{compound: '', img: '', name: "", price: 120}])

    useEffect(() => {
        $authHost.get('api/basket').then((response) =>
            setProduct(response.data))
    }, []);
    const addOrder = () => {
        alert("Ваш заказ принят!")
    }

    const sumOfBasket = products.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <div style={{textAlign: 'center'}}>
            {products.map(product =>
                <div>
                    <img src={product.img} width={300} height={300}/>
                    <p>Название еды: {product.name}</p>
                    <p>Описание: {product.compound}</p>
                    <p>Цена: {product.price}</p>
                    <button onClick={addOrder}>Заказать</button>
                </div>
            )
            }
            <p style={{padding: 20, fontSize: 36, color: 'red'}}>Цена корзины: {sumOfBasket}</p>
        </div>
    );
};

export default Basket;