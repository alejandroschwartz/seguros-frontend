import React, { useState, useEffect } from 'react';

import '../styles/components/Cotizar.scss';

const Cotizar = () => {
    const url = "https://localhost:44386/api/Autos";
    const [getData, setGetData] = useState([]);
    const [getResult, setGetResult] = useState();
    const [auto, setAuto] = useState();
    const [year, setYear] = useState();
    useEffect(() => {
        fetch(url, { method: "GET" })
            .then((resp) => resp.json())
            .then((data) => { setGetData(data) });
    }, []);
    const resultado = (e) => {
        e.preventDefault();
        console.log(`${url}/${auto}/${year}`)
        fetch(`${url}/${auto}/${year}`, { method: "GET" })
            .then((resp) => resp.text())
            .then((data) => { setGetResult(data) });
    }
    const handleYear = (e) => {
        e.preventDefault()
        setYear(e.target.value)
    }
    const handleCar = (e) => {
        e.preventDefault()
        setAuto(e.target.value)
    }
    console.log(getResult)

    let unicos = [];
    getData.map((marca) => ( unicos.push(marca.marca) ));
    let sinRepetidos = unicos.filter((valorActual, indiceActual, arreglo) => {
        return arreglo.findIndex(valorDelArreglo => 
            JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)) === indiceActual
    });

    const [idArticulos, setIdArticulos] = useState(-1);
    const [autos, setAutos] = useState();
    const cargarModelos = (e) => {
        e.preventDefault();
        let option = e.target.value;
        const filteredUsers = getData.filter((user) => {
            return user.marca.toLowerCase().includes(option.toLowerCase());
        })
        setIdArticulos(0)
        setAutos(filteredUsers);
        console.log(filteredUsers);
    }

    return (
        <div className="Home" >

            <img className="Home__hero" src="" alt="" />

            <h1>Cotizar</h1>

                <form className="Cotizar__container" onSubmit={resultado} >
                    <label htmlFor="">Correo electronico</label>
                    <input 
                        className="Home__input" 
                        type="email" 
                        name="" 
                        id=""
                        placeholder="Ej: nombre@mail.com" 
                    />

                    <label htmlFor="">Patente</label>
                    <input 
                        className="Home__input" 
                        type="text" 
                        name="" 
                        id=""
                        placeholder="Ej: abc123" 
                    />

                    <label htmlFor="">Código postal</label>
                    <input 
                        className="Home__input" 
                        type="text" 
                        name="" 
                        id=""
                        placeholder="Ej: 5000" 
                    />

                    <label htmlFor="">Localidad</label>
                    <input 
                        className="Home__input" 
                        type="text" 
                        name="" 
                        id=""
                        placeholder="Ej: Córdoba" 
                    />

                    <label htmlFor="">Marca</label>
                    <select 
                        className="Home__input" 
                        name="categorias" 
                        id="selectCategoria"
                        onClick={cargarModelos} 
                    >
                        <option value={-1}>Seleccione una opción: </option>
                        {
                            sinRepetidos.map((item, i) => (
                                <option key={i} value={item}>{item}</option>
                            ))
                        }
                    </select>

                    <label htmlFor="">Modelo</label>
                    <select 
                        className="Home__input"
                        name="modelos" 
                        id="selectModelos"
                        onChange={handleCar}
                    >
                        <option value={-1}>Seleccione una opción: </option>
                        {
                            idArticulos > -1 &&
                            (
                                autos.map((item, i) => (
                                    <option key={i} value={item.id} >{item.modelo}</option>
                                )) 
                            )
                        }
                    </select>

                    <label htmlFor="">Año</label>
                    <select className="Home__input" onChange={handleYear}>
                        <option value="">Seleccionar año</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                    </select>

                    <label htmlFor="">Fecha de inicio de seguro</label>
                    <input 
                        className="Home__input" 
                        type="date" 
                        name="" 
                        id="" 
                    />

                    <input className="Hero__button" type="submit" value="Cotizar el seguro" />
                </form>

                <h1>{getResult}</h1>

        </div>
    )
};

export default Cotizar;