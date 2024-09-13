import style from '../Card.module.css'

export const CardProdutos = ({ name, desc, value, image, key, status }) => {

  return (
      <div className={style.corFundo}>
        <div className={style.alinhaa}>
          <h1>{name}</h1>
          <h1>-</h1>
          <h2>{desc}</h2>
        </div>
        <img src={image} alt={name} width={150} height={"auto"} />

        <div className={style.espasso}>
          <div className={style.alinhaa}>
            <p>Preço: </p>
            <p>R$ {value}</p>
          </div>
          <div className={status ? style.bolinha : style.vermelho}>
          </div>
        </div>
      </div>
  )
}