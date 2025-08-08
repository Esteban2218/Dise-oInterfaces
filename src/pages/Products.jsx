import React, { useState } from 'react';
import { BsBag, BsShop } from "react-icons/bs";
import "../assets/css/Products.css"
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.png';
import p9 from '../assets/p9.png';
import { FaShoppingCart } from "react-icons/fa";

const Products = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const productExists = prevCart.find(item => item.id === product.id);
            if (productExists) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId); 
        } else {
            setCart((prevCart) =>
                prevCart.map(item =>
                    item.id === productId ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };
    
    // Calcula el número total de artículos y el precio total
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <main>
            <section className="searchBar">
                <div className="searchInputGroup">
                    <input type="text" placeholder="Buscas algo..." />
                    <i className="fas fa-search search-icon"></i>
                    <h1>NUESTROS PRODUCTOS</h1>
                </div>
                
                {/* Contenedor del ícono de la tienda y el total */}
                <div className="cart-summary-container">
                    <div className="cart-icon-wrapper">
                        <BsShop className="shop-icon" />
                        <span className="item-count">{totalItems}</span>
                    </div>
                    <div className="total-price-wrapper">
                        <span>Total: ${totalPrice.toFixed(2)}</span>
                    </div>
                </div>

                <div className="categoryButtons">
                    <button>McLaren</button>
                    <button>Ferrari</button>
                    <button className="active">Jacket</button>
                    <button>Hoodies</button>
                    <button>Red Bull</button>
                    <button>Pantalón</button>
                    <button>Gorras</button>
                    <button>Accesorios</button>
                </div>
            </section>

            <section className="productsGridContainer">
                <div className="productsGrid">
                    {/* ... (Tus productos del 1 al 9 van aquí) ... */}
                    <div className="productCard">
                        <img src={p1} alt="Camiseta Ferrari" className="product-card-image" />
                        <div className="productCardContent">
                            <h3>Camiseta Ferrari</h3>
                            <div className="productDetails">
                                <ul>
                                    <li><b>Tallas:</b> S, M, L</li>
                                    <li><b>Colores Disponibles:</b> Negro, Rojo</li>
                                    <li><b>Precio:</b> $24.99</li>
                                    <li><b>Disponibilidad:</b> En stock</li>
                                </ul>
                            </div>
                            <FaShoppingCart className="cart" onClick={() => addToCart({ id: 1, name: "Camiseta Ferrari", price: 24.99 })} />
                        </div>
                    </div>
                    
                    <div className="productCard">
                        <img src={p2} alt="Jacket Mercedes" className="product-card-image" />
                        <div className="productCardContent">
                            <h3>Jacket Mercedes</h3>
                            <div className="productDetails">
                                <ul>
                                    <li><b>Tallas:</b> M, L, XL, XXL</li>
                                    <li><b>Colores Disponibles:</b> Negro, Gris, Blanco</li>
                                    <li><b>Precio:</b> $30.90</li>
                                    <li><b>Disponibilidad:</b> En stock</li>
                                </ul>
                            </div>
                            <FaShoppingCart className="cart" onClick={() => addToCart({ id: 2, name: "Jacket Mercedes", price: 30.90 })} />
                        </div>
                    </div>
                    
                    <div className="productCard">
                        <img src={p3} alt="Camiseta McLaren" className="product-card-image" />
                        <div className="productCardContent">
                            <h3>Camiseta McLaren</h3>
                            <div className="productDetails">
                                <ul>
                                    <li><b>Tallas:</b> S, M, L</li>
                                    <li><b>Colores Disponibles:</b> Blanco, Gris claro</li>
                                    <li><b>Precio:</b> $15.00</li>
                                    <li><b>Disponibilidad:</b> En stock</li>
                                </ul>
                            </div>
                            <FaShoppingCart className="cart" onClick={() => addToCart({ id: 3, name: "Camiseta McLaren", price: 15.00 })}/>
                        </div>
                    </div>

                    <div className="productCard">
                        <img src={p4} alt="Llavero Red Bull Racing" className="product-card-image" />
                        <div className="productCardContent">
                            <h3>Llavero Red Bull Racing</h3>
                            <div className="productDetails">
                                <ul>
                                    <li><b>Tamaño:</b> 7cm x 5cm</li>
                                    <li><b>Colores Disponibles:</b> Rojo, Azul, Negro</li>
                                    <li><b>Precio:</b> $7.00</li>
                                    <li><b>Disponibilidad:</b> En stock</li>
                                </ul>
                            </div>
                            <FaShoppingCart className="cart" onClick={() => addToCart({ id: 4, name: "Llavero Red Bull Racing", price: 7.00 })}/>
                        </div>
                    </div>

                    <div className="productCard">
                        <img src={p5} alt="Jacket Porsche" className="product-card-image" />
                        <div className="productCardContent">
                            <h3>Jacket Porsche</h3>
                            <div className="productDetails">
                                <ul>
                                    <li><b>Tallas:</b> S, M, L</li>
                                    <li><b>Colores Disponibles:</b> Negro, Azul Marino</li>
                                    <li><b>Precio:</b> $28.90</li>
                                    <li><b>Disponibilidad:</b> En stock</li>
                                </ul>
                            </div>
                            <FaShoppingCart className="cart" onClick={() => addToCart({ id: 5, name: "Jacket Porsche", price: 28.90 })}/>
                        </div>
                    </div>

                    <div className="productCard">
                        <img src={p6} alt="Top Ferrari" className="product-card-image" />
                        <div className="productCardContent">
                            <h3>Top Ferrari</h3>
                            <div className="productDetails">
                                <ul>
                                    <li><b>Tallas:</b> XS, S, M</li>
                                    <li><b>Colores Disponibles:</b> Rojo, Blanco, Negro</li>
                                    <li><b>Precio:</b> $14.99</li>
                                    <li><b>Disponibilidad:</b> En stock</li>
                                </ul>
                            </div>
                            <FaShoppingCart className="cart" onClick={() => addToCart({ id: 6, name: "Top Ferrari", price: 14.99 })}/>
                        </div>
                    </div>
                    
                    <div className="productCard">
                        <img src={p7} alt="Hoodie Piloto" className="product-card-image" />
                        <div className="productCardContent">
                            <h3>Hoodies Pilotos</h3>
                            <div className="productDetails">
                                <ul>
                                    <li><b>Tallas:</b> S, M, L, XL</li>
                                    <li><b>Colores Disponibles:</b> Negro, Azul Marino</li>
                                    <li><b>Precio:</b> $15.00</li>
                                    <li><b>Disponibilidad:</b> En stock</li>
                                </ul>
                            </div>
                            <FaShoppingCart className="cart" onClick={() => addToCart({ id: 7, name: "Hoodies Pilotos", price: 15.00 })}/>
                        </div>
                    </div>

                    <div className="productCard">
                        <img src={p8} alt="Pulsera Accesorios" className="product-card-image" />
                        <div className="productCardContent">
                            <h3>Pulsera Accesorios</h3>
                            <div className="productDetails">
                                <ul>
                                    <li><b>Tamaño:</b> Ajustable</li>
                                    <li><b>Colores Disponibles:</b> Plata, Oro Rosa</li>
                                    <li><b>Precio:</b> $15.50</li>
                                    <li><b>Disponibilidad:</b> En stock</li>
                                </ul>
                            </div>
                            <FaShoppingCart className="cart" onClick={() => addToCart({ id: 8, name: "Pulsera Accesorios", price: 15.50 })}/>
                        </div>
                    </div>

                    <div className="productCard">
                        <img src={p9} alt="Tote Bag F1 Style" className="product-card-image" />
                        <div className="productCardContent">
                            <h3>Tote Bag F1 Style</h3>
                            <div className="productDetails">
                                <ul>
                                    <li><b>Tamaño:</b> 22 cm ancho X 27 cm alto</li>
                                    <li><b>Colores Disponibles:</b> Beige, Blanco, Gris</li>
                                    <li><b>Precio:</b> $10.50</li>
                                    <li><b>Disponibilidad:</b> En stock</li>
                                </ul>
                            </div>
                            <FaShoppingCart className="cart" onClick={() => addToCart({ id: 9, name: "Tote Bage F1 Style", price: 10.50 })}/>
                        </div>
                    </div>
                </div>

                <div className="cart-c">
                    <h2>Carrito de Compras</h2>
                    {cart.length === 0 ? (
                        <p>No hay productos en tu carrito.</p>
                    ) : (
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id}>
                                    <span>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</span>
                                    <div className="cart-controls">
                                        <button className = "btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        <button className = "btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <button className = "btn" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                                    </div>
                                </li>
                            ))}
                            <li className="cart-total">
                                <h3>Total a Pagar: ${totalPrice.toFixed(2)}</h3>
                            </li>
                        </ul>
                    )}
                </div>

                <div className="view-more-button-container">
                    <button className="view-more-button">Ver más &gt;</button>
                </div>
            </section>
        </main>
    );
};

export default Products;