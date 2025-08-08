import "../assets/css/About.css"
import img1 from "../assets/q1.png"
import img2 from "../assets/q2.png"
import img3 from "../assets/q3.png"

const InfoBox = ({ title, children }) => (
    <div classNameName="infor">
        <h3>{title}</h3>
        <div>{children}</div>
    </div>
);


const About = () => {
    return (
        <>
            <main>
                <section className="about" id="about">
                </section>
                <section className="about-us-content">
                    <div className="about-us-grid">
                        <div>
                            <div className="about-us-item_origin-box">
                                <h3>ORÍGENES:</h3>
                                <p>• Rookie Racing nació del amor por la velocidad, el rugir de los motores y la estética única
                                    del automovilismo. Fundada por verdaderos fans, la marca comenzó como un pequeño proyecto
                                    entre apasionados de la Formula 1. Que querían llevar la pista al estilo diario. Con diseños
                                    inspirados en escuderías icónicas y una atención especial al detalle, Rookie Racing se
                                    convirtió rápidamente en un símbolo para quienes sienten el automovilismo más allá de los
                                    autódromos de carrera. Hoy, es más que una marca: es una comunidad que vibra con cada curva.
                                </p>
                            </div>
                            <div className="about-us-images">
                                <img src={img1} alt="Piloto con bandera" className="about-image-small" />
                                <img src={img2} alt="Monoplaza en lluvia" className="about-image-medium" />
                                <img src={img3} alt="Fuegos artificiales en carrera" className="about-image-small" />
                            </div>
                        </div>

                        <div className="about-us-item mission-vision-values">
                            <div className="box">
                                <h3>MISIÓN:</h3>
                                <ul className="list">
                                    <li>Crear ropa auténtica y de calidad para fans del automovilismo, fusionando estilo urbano
                                        con pasión por la velocidad. Representamos una comunidad que vive el racing como estilo
                                        de vida, con diseños inspirados en las mejores escuderías.</li>
                                </ul>
                            </div>
                            <div className="box">
                                <h3>VISIÓN:</h3>
                                <ul className="list">
                                    <li>Ser la marca líder de moda racing en Latinoamérica, reconocida por conectar a jóvenes
                                        apasionados con prendas únicas que reflejan su amor por la Formula 1 y la cultura del
                                        motor. Soñamos en grande, como en la pista.</li>
                                </ul>
                            </div>
                            <div className="box">
                                <h3>VALORES:</h3>
                                <ul className="list">
                                    <li>Pasión por el automovilismo, autenticidad en cada diseño, compromiso con la calidad,
                                        conexión con nuestra comunidad, estilo con identidad y constante innovación. En Rookie
                                        Racing, no seguimos la moda: la aceleramos.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About