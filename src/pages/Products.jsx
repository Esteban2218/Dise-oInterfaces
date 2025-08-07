import React from "react";

// Importa las imágenes de los productos
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.png';
import p9 from '../assets/p9.png';

const Products = () => {
    return (
        <main>
            <section className="searchBar">
                <div className="searchInputGroup">
                    <input type="text" placeholder="Buscas algo..." />
                    <i className="fas fa-search search-icon"></i>
                    <h1>NUESTROS PRODUCTOS</h1>
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
                    {/* Producto 1 */}
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
                        </div>
                    </div>

                    {/* Producto 2 */}
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
                        </div>
                    </div>

                    {/* Producto 3 */}
                    <div className="productCard">
                        <img src={p3} alt="Camiseta McLaren" className="product-card-image" />
                        <div className="productCardContent">
                            <h3>Camiseta McLaren</h3>
                            <div className="productDetails">
                                <ul>
                                    <li><b>Tallas:</b> S, M, L</li>
                                    <li><b>Colores Disponibles:</b> Blanco, Gris claro, Negro</li>
                                    <li><b>Precio:</b> $15.00</li>
                                    <li><b>Disponibilidad:</b> En stock</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Producto 4 */}
                    <div className="productCard">
                        <img src={p4} alt="Llavero Red Bull Racing" className="product-card-image" />
                        <div className="productCardContent">
                            <h3>Llavero Red Bull Racing</h3>
                            <div className="productDetails">
                                <ul>
                                    <li><b>Tamaño:</b> 7cm x 5cm</li>
                                    <li><b>Colores Disponibles:</b> Rojo, Azul, Negro, Plateado</li>
                                    <li><b>Precio:</b> $7.00</li>
                                    <li><b>Disponibilidad:</b> En stock</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Producto 5 */}
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
                        </div>
                    </div>

                    {/* Producto 6 */}
                    <div className="productCard">
                        <img src={p6} alt="Top Ferrari" className="product-card-image" />
                        <div className="productCardContent">
                            <h3>Top Ferrari</h3>
                            <div className="productDetails">
                                <ul>
                                    <li><b>Tallas:</b> XS, S, M</li>
                                    <li><b>Colores Disponibles:</b> Rojo, Blanco, Negro, Azul</li>
                                    <li><b>Precio:</b> $14.99</li>
                                    <li><b>Disponibilidad:</b> En stock</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Producto 7 */}
                    <div className="productCard">
                        <img src={p7} alt="Hoodie Piloto" className="product-card-image" />
                        <div className="productCardContent">
                            <h3>Hoodies Pilotos</h3>
                            <div className="productDetails">
                                <ul>
                                    <li><b>Tallas:</b> S, M, L, XL</li>
                                    <li><b>Colores Disponibles:</b> Negro, Azul Marino, Gris Claro</li>
                                    <li><b>Precio:</b> $15.00</li>
                                    <li><b>Disponibilidad:</b> En stock</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Producto 8 */}
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
                        </div>
                    </div>

                    {/* Producto 9 */}
                    <div className="productCard">
                        <img src={p9} alt="Tote Bag F1 Style" className="product-card-image" />
                        <div className="productCardContent">
                            <h3>Tote Bag F1 Style</h3>
                            <div className="productDetails">
                                <ul>
                                    <li><b>Tamaño:</b> 22 cm ancho X 27 cm alto</li>
                                    <li><b>Colores Disponibles:</b> Beige, Blanco, Gris Claro</li>
                                    <li><b>Precio:</b> $10.50</li>
                                    <li><b>Disponibilidad:</b> En stock</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="view-more-button-container">
                    <button className="view-more-button">Ver más &gt;</button>
                </div>
            </section>
        </main>
    );
};

export default Products;