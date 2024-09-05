import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const { totalAmount } = useCart();

  try {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mía</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">🍕 Home</Link>
            </li>
            <li className="nav-item">
              {token ? <Link className="nav-link" to="/profile">🔓 Profile</Link> : <Link className="nav-link" to="/login">🔐 Login</Link>}
            </li>
            <li className="nav-item">
              {token ? <Link className="nav-link" to="/logout">🔒 Logout</Link> : <Link className="nav-link" to="/register">🔐 Register</Link>}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Profile">🙋‍♂️ Perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">🛒 Total: ${totalAmount.toLocaleString()}</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  } catch (error) {
    console.error("Error in Navigation component:", error);
    return <div>Error occurred while rendering the navigation</div>;
  }
};

export default Navbar;
