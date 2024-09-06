/* eslint-disable react/prop-types */
import style from './Card.module.css'

export const Card = (props) => {
  
  return(
      <div className={style.corFundo}>
        <div className={style.alinhaa}>
          <h1>{props.name}</h1>
          <h1>-</h1>
          <h2>{props.desc}</h2>
        </div>
          <img src={props.image} alt={props.name} width={150} height={"auto"}/>

          <div className={style.espasso}>
              <div className={style.alinhaa}>
                  <p>Preço: </p>
                  <p>R$ {props.value}</p>
              </div>
              <div className={props.status ? style.bolinha : style.vermelho }>
              </div>
          </div>
      </div>
  )
}