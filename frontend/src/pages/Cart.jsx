import React from 'react';
import { useCart } from '../context/CartContext'; // Importamos el contexto

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, totalAmount } = useCart();

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} />
            <h5>{pizza.name}</h5>
            <p>Precio: ${pizza.price}</p>
            <p>Cantidad: {pizza.quantity}</p>
            <button onClick={() => increaseQuantity(pizza.id)}>+</button>
            <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount.toLocaleString('en-EU', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h3>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;
