import React from 'react';


import Principal from "../../assets/Principal.png";
import "../../assets/css/Landing.css";
import img2 from "../../assets/Img1.png";
import img3 from "../../assets/Img2.png";
import img4 from '../../assets/Img3.png';
import img5 from '../../assets/Img4.png';
import tend1 from '../../assets/Tend1.png';
import tend2 from '../../assets/Tend2.png';
import tend3 from '../../assets/Tend3.png';
import tend4 from '../../assets/Tend4.png';

export const Main = () => {
    return (
        <main>

            <section className="hero" id="inicio">
                <div className="hero-content">
                    <h1 className="hero-title">Rookie Racing. Donde <br /> la pista inspira cada <br /> costura.</h1>
                    <p className="hero-description">Minimalismo, velocidad y esencia. Rookie Racing. <br /> Solo prenda.</p>
                </div>
            </section>


            <section className="productShowcase">
                <img src={img2} className="productItem" alt="McLaren Shirt" />
                <img src={img3} className="productItem1" alt="Graphic Tee" />
                <img src={img4} className="productItem" alt="Black Shirt" />
                <img src={img5} className="productItem1" alt="Dark Hoodie" />
                <img src={Principal} className="productItem" alt="Red Hoodie" />
            </section>


            <section className="trendingProducts" id="productos">
                <h2>PRODUCTOS EN TENDENCIA</h2>
                <div className="trendingGrid">

                    <div className="trendingCard">
                        <img src={tend1} alt="Chaqueta" />
                        <h3>CHAQUETAS</h3>
                        <ul>
                            <li>Chaquetas deportivas de diseño inspirado en carreras.</li>
                        </ul>
                    </div>


                    <div className="trendingCard">
                        <img src={tend2} alt="Gorra" />
                        <h3>GORRA</h3>
                        <ul>
                            <li>Gorra de diseño minimalista y branding racing.</li>
                        </ul>
                    </div>


                    <div className="trendingCard">
                        <img src={tend3} alt="Hoodie" />
                        <h3>HOODIES</h3>
                        <ul>
                            <li>Hoodies con concepto de estilo deportivo y urbano.</li>
                        </ul>
                    </div>


                    <div className="trendingCard">
                        <img src={tend4} alt="Accesorios" />
                        <h3>ACCESORIOS</h3>
                        <ul>
                            <li>Llaveros con diseños de carreras y funcionales.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;