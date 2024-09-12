import { useState, useEffect } from 'react'
import { CardApi } from './components/CardApi'
import { CardProdutos } from './components/CardProdutos'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Importa Marker e Popup
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";



function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const position = [-25.4249407, -49.2723473]

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
              <div key={item.id}>
                <CardApi name={item.name} desc={item.species} value={item.gender} image={item.image} status={item.status} type={item.type}/>
                {/* <button onClick={() => {}}>Info</button> */}
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
    </div>
    </>
  )
}

export default App
