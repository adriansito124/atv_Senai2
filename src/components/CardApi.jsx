import style from '../Api.module.css'

export const CardApi = (props) => {
  
  return(
    <div>
          <h1>{props.name}</h1>
          <h2>{props.desc}</h2>
          <p>{props.value}</p>
          <img src={props.image} alt={props.name} width={150} height={"auto"}/>
      </div>
  )
}