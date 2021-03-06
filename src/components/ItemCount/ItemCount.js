import './ItemCount.css'
import React,{useState} from 'react';

export const ItemCount = ({initial, stock, onAdd, setAddedToCart}) => {
    const [count, setCount] = useState(initial);

    const [show, setShow] = useState(true);

    const decrease = () => {
        setCount(count - 1);
    }
    
    const increase = () => {
        setCount(count + 1);
    }

    const addProduct = () => {
        onAdd(count)
        setAddedToCart(true);
    }

    if (show&&stock>0) {
    return (
        <div className="counter-container">
            <button className="minus-button" disabled={count <= 1} onClick={decrease}>-</button>
            <span> {count} </span>
            <button className="plus-button" disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <=0} onClick={addProduct}>Agregar al carrito</button>
            </div>
        </div>
    )}

    if(stock===0) {
        return (
            <p>Sin unidades disponibles</p>
        )
    }

    if (!show && stock>0) {
        return (
            <link to="../cart/cart.js"><button>Ir al carrito</button></link>
        )
    }
}

export default ItemCount;