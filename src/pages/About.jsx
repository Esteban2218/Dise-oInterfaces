const InfoBox = ({ title, children }) => (
  <div className="infor">
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

const About = () => {
    return (
        <main className="about">
            <section className="about__info">
                <img src="https://www.marketingregistrado.com/img/noticias/big/ferrari-presento-alianza-whisky-chivas-regal.webp" alt="" />
                <div className="texto">
                    <div>
                        <InfoBox title="ORÍGENES:">
                            <p>
                                Rookie Racing nació del amor por la velocidad, el rugir de los motores y la estética única del automovilismo. 
                                Fundada por verdaderos fans, la marca comenzó como un pequeño proyecto entre apasionados de la Fórmula 1 que 
                                querían llevar la pista al diario. Con diseños inspirados en escuderías icónicas y una atención especial al detalle, 
                                Rookie Racing se convirtió rápidamente en un símbolo para quienes viven el automovilismo más allá de los domingos de carreras. 
                                Hoy, es más que una marca: es una comunidad que vibra con cada curva.
                            </p>
                        </InfoBox>
                        <br />
                        <div className="imagenes">
                            <img src="https://i.pinimg.com/736x/bf/d6/2a/bfd62a08333e1f011e325c8816f72c1b.jpg" alt="" />
                            <img src="https://i.pinimg.com/736x/60/d8/a7/60d8a783907d27136799e1de676b92c1.jpg" alt="" />
                            <img src="https://i.pinimg.com/736x/71/8f/1b/718f1bbdd03e0ded58867cf29d238c9f.jpg" alt="" />
                        </div>
                    </div>
                    
                    <div className="texto1">
                        <InfoBox title="MISIÓN:">
                            <p>
                                Crear ropa auténtica y de calidad para fans del automovilismo, fusionando estilo urbano con pasión por la velocidad. 
                                Representamos una comunidad que vive el racing como estilo de vida, con diseños inspirados en las mejores escuderías.
                            </p>
                        </InfoBox>

                        <InfoBox title="VISIÓN:">
                            <p>
                                Ser la mayor líder de moda racing en Latinoamérica, 
                                reconocida por conectar a jóvenes apasionados con 
                                prendas únicas que reflejen su amor por la Fórmula 1 y la 
                                cultura del motor. Soñamos en grande, como en la pista.
                            </p>
                        </InfoBox>

                        <InfoBox title="VALORES:">
                            <p>
                                Pasión por el automovilismo, autenticidad en cada diseño, compromiso con la calidad, conexión con nuestra comunidad, 
                                estilo con lealtad y constancia en la innovación. En Rookie Racing, no seguimos la moda: la aceleramos.
                            </p>
                        </InfoBox>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;