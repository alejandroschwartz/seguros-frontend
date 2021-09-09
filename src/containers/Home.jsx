import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Home.scss';

const Home = () => {
    return (
        <div className="Home" >

            <div className="Hero" >
                <div className="Hero__container" >
                    <h1 className="Hero__title" >Contrata tu seguro <br /> <strong>100% online.</strong></h1>
                    <Link to="/cotizar" className="Hero__button" >
                        Cotizar
                    </Link>
                </div>
                <div className="Hero__container" >
                    <img className="Hero__image" src="../styles/images/hero.png" alt="" />
                </div>
            </div>

            <h1>Nuestros <strong>productos</strong></h1>

            <div className="Home__product--container">
                <Link to="/cotizar" className="Home__product link">
                    <i className="fas fa-car"></i>
                    <p>Autos</p>
                </Link>
                <Link to="/cotizar" className="Home__product link">
                    <i className="fas fa-motorcycle"></i>
                    <p>Motos</p>
                </Link>
                <Link to="/cotizar" className="Home__product link">
                    <i className="fas fa-home"></i>
                    <p>Hogar</p>
                </Link>
                <Link to="/cotizar" className="Home__product link">
                    <i className="fas fa-heartbeat"></i>
                    <p>Personales</p>
                </Link>
            </div>

            <h1>Elegimos estar <strong>cerca tuyo.</strong></h1>

            <div className="Home__container" >

                <div className="Item">
                    <div className="Item__container" >
                        <img 
                            className="Item__image" 
                            src="../styles/images/bicicletas.jpg" 
                        />
                    </div>
                    <div className="Item__text" >
                        <h2 className="Item__title" >
                            Sorteo Mes de las Infancias
                        </h2>
                        <p>
                            BASES Y CONDICIONES DE PARTICIPACIÓN EN EL SORTEO MES DE LAS INFANCIAS. <br />
                            1. ORGANIZADORA <br />
                            El presente sorteo es promovido y organizado por la empresa Caruso Compañía Argentina de Seguros SA, para sus asegurados (Titulares y Adherentes). <br />
                            2. CONDICIONES PARA SER PARTICIPANTE <br />
                            La participación en el SORTEO es libre, gratuita. Podrán participar en el SORTEO todas las personas físicas mayores de 18 años de edad que obren en la base de datos de la compañía como asegurados (Titulares y Adherentes).
                        </p>
                    </div>
                </div>

                <div className="Item">
                    <div className="Item__container" >
                        <img 
                            className="Item__image" 
                            src="../styles/images/jokey.png" 
                        />
                    </div>
                    <div className="Item__text" >
                        <h2 className="Item__title" >
                            Nuestra compañía apuesta al deporte, apoyando a la institución que es sinónimo de tradición deportiva en el país
                        </h2>
                        <p>
                            El pasado viernes se presentó la indumentaria de diferentes disciplinas del Jockey Club Córdoba, donde estará presente Caruso Seguros. Así dimos comienzo a un camino que comienza a unirnos por los próximos dos años, en los que seremos de sponsor exclusivo en la categoría seguros. <br />
                            Además, nos comprometimos a desarrollar acciones conjuntas, activaciones promocionales y el acceso de los socios del Jockey Club a beneficios exclusivos en la contratación de nuestros productos.
                        </p>
                    </div>
                </div>

                <div className="Item">
                    <div className="Item__container" >
                        <img 
                            className="Item__image" 
                            src="../styles/images/nuevo-año.png" 
                        />
                    </div>
                    <div className="Item__text" >
                        <h2 className="Item__title" >
                            Hablamos con la revista Estrategas del seguro y la banca sobre nuestros planes
                        </h2>
                        <p>
                            Diego Liksenberg, gerente de Administración & Finanzas, y Paola Grosso, gerente de Marketing, adelantaron las propuestas y beneficios exclusivos para nuestros clientes, con el lanzamiento del e-commerce como una de las principales innovaciones del 2021. <br />
                            La clave para la particular dinámica de este año será priorizar la satisfacción de nuestros asegurados, profundizando nuestro excelente servicio al cliente. Por otro lado, realizaremos importantes inversiones tecnológicas que optimizará la atención al cliente, que obtendrá respuestas a sus inquietudes en tiempo real.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default Home;