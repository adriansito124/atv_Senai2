import style from "../../App.module.css"
import produtos from "../../constants/produtos.json"

import { CardProdutos } from "../../components/CardProdutos"
import { useState } from "react"

export const Products = () => {


  return (
    <>


      <h2>Showroom de produtos</h2>
      <div className={style.organ}>
        {produtos.map((item) => {
          return (
            <CardProdutos name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status} />
          )
        })}
      </div>
    </>
  )
}