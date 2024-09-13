import { useState, useEffect } from "react";
import { api } from "../../api/rmApi";
import { CardApi } from "../../components/CardApi";
import style from "../../App.module.css";

import { Tilt } from 'react-tilt' //-> npm install react-tilt react react-dom

import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time-> npm install react-draggable


const defaultOptions = {
  reverse:        false,  // reverse the tilt direction
  max:            35,     // max tilt rotation (degrees)
  perspective:    1500,   // Transform perspective, the lower the more extreme the tilt gets.
  scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed:          1,   // Speed of the enter/exit transition
  transition:     true,   // Set a transition on enter/exit.
  axis:           null,   // What axis should be disabled. Can be X or Y.
  reset:          true,    // If the tilt effect has to be reset on exit.
  easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export const Api = () => {

  const [page, setPage] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if (!response.data.results) {
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if (error.response.status === 404) {
        console.log("Esta pagina nao contem este personagem")
        alert("Esta pagina não contem este personagem")
      }
      console.error(error)
    })
  }, [page, name])


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (id) => {
    
    api.get(`/character/${id}`).then((response) => {
      if (!response.data) {
        return;
      }
      setCharacter(response.data);
    }).catch((error) => {
      if (error.response.status === 404) {
        console.log("Esta pagina nao contem este personagem")
        alert("Esta pagina não contem este personagem")
      }
      console.error(error)
      return;
    })

    setIsModalOpen(true);
  }

  return (
    <>

      {
        isModalOpen &&
        <Draggable>
          <div style={{ position: "fixed", top: "calc(50% - 210px)", left: "calc(50% - 140px)", zIndex: "100" }}>
            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <div style={{ height: "420px", width: "280px", backgroundColor: "#1c1c1c", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: "700" }}>{character?.name} - {character?.status}</span>
                <img src={character?.image} alt="" />
                <span style={{ fontSize: "1.1rem", fontWeight: "700" }}>{character?.species} {character?.gender}</span>
                <span>From: {character?.origin?.name}</span>
                <button onClick={() => setIsModalOpen(false)}>OK</button>
              </div>
            </Tilt>
          </div>
        </Draggable>
      }


      <h2>Rick and Morty API</h2>
      <div className={style.inputz}>
        <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)} />
        <input type="text" placeholder="Nome" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div className={style.organizar}>
        {data.map((item) => {
          return (
            <div key={item.id} className={style.centrelizarr}>
              <CardApi name={item.name} desc={item.species} value={item.gender} image={item.image} status={item.status} type={item.type} />
              {<button onClick={() => handleClick(item.id)}>Info</button>}
            </div>
          )
        })}
      </div>
    </>
  )
}