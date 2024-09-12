import style from '../Card.module.css'

import { Tilt } from 'react-tilt' //-> npm install react-tilt react react-dom

import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time-> npm install react-draggable


const defaultOptions = {
  reverse:        false,  // reverse the tilt direction
  max:            35,     // max tilt rotation (degrees)
  perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed:          1,   // Speed of the enter/exit transition
  transition:     true,   // Set a transition on enter/exit.
  axis:           null,   // What axis should be disabled. Can be X or Y.
  reset:          true,    // If the tilt effect has to be reset on exit.
  easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export const CardProdutos = ({ name, desc, value, image, key, status }) => {
  
  return(
    <Draggable>
      <div>
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
        <div className={style.corFundo}>
          <div className={style.alinhaa}>
            <h1>{name}</h1>
            <h1>-</h1>
            <h2>{desc}</h2>
          </div>
            <img src={image} alt={name} width={150} height={"auto"}/>

            <div className={style.espasso}>
                <div className={style.alinhaa}>
                    <p>Preço: </p>
                    <p>R$ {value}</p>
                </div>
                <div className={status ? style.bolinha : style.vermelho }>
                </div>
            </div>
        </div>
        </Tilt>
        </div>
      </Draggable>
  )
}