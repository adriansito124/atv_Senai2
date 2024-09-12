import { useState, useEffect } from 'react'
import { CardApi } from './components/CardApi'
import { CardProdutos } from './components/CardProdutos'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { Tilt } from 'react-tilt'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Importa Marker e Popup
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const position = [-25.4249407, -49.2723473]
  const grafico = [{name: 'Adrian', uv: 1.90, amt: 2}, {name: 'Lorena', uv: 1.72, amt: 2}, {name: 'Yasmin', uv: 1.65, amt: 2}, {name: 'Marcio', uv: 1.95, amt: 2}, {name: 'Flavia', uv: 1.68, amt: 2}, {name: 'Vô', uv: 1.78, amt: 2}];
  const grafico2 = [{name: 'Adrian', uv: 18, amt: 100}, {name: 'Lorena', uv: 19, amt: 100}, {name: 'Yasmin', uv: 15, amt: 100}, {name: 'Marcio', uv: 55, amt: 100}, {name: 'Flavia', uv: 46, amt: 100}, {name: 'Vô', uv: 82, amt: 100}];

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  useEffect(() => {
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        console.log("Esta pagina nao contem este personagem")
        alert("Esta pagina não contem este personagem")
      }
      console.error(error)
    })
  }, [page, name])

  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
      <button onClick={() => setShow("graph")}>Graficos</button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.organ}>
            {produtos.map((item) => {
              return(
                <CardProdutos name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status}/>
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
          <h2>Rick and Morty API</h2>
            <div className={style.inputz}>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
               <input type="text" placeholder="Nome" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className={style.organizar}>
            {data.map((item) => { 
             return(
              <div key={item.id} className={style.centrelizarr}>
                <CardApi name={item.name} desc={item.species} value={item.gender} image={item.image} status={item.status} type={item.type}/>
                {<button onClick={() => {}}>Info</button>}
              </div>
              )
           })}
            </div>
       </>
      }
     {show === "map" &&
        <>
            <h2>Mapa</h2>
              
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "500px", height:"500px"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Mapa</a> top'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Senai Centro
            </Popup>
          </Marker>
        </MapContainer>
       
         </>
      }
      {show === "graph" &&
        <>
          <h2>Graficos</h2>
          <div className={style.organizar}>
              <div className={style.centrelizarr}>
                <h3>Altura</h3>
                <LineChart width={500} height={300} data={grafico}>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
              </div>

              <div className={style.centrelizarr}>
                <h3>Idade</h3>
                <LineChart width={500} height={300} data={grafico2}>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
              </div>
              {/* <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
                <div>👽</div>
              </Tilt> */}
          </div>
        </>
      }
    </div>
    </>
  )
}

export default App
