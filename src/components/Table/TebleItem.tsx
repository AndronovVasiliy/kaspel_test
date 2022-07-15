import React from 'react'
import { UserType } from './Table'
import style from './Tabel.module.css'

function TebleItem(props: UserType) {
  return (
    <tr>
      <td className={style.td_item_cart}>{props.name}</td>
      <td className={style.td_item_cart}>{props.phone}</td>
      <td className={style.td_item_cart}>{props.email}</td>
      <td className={style.td_item_cart}>{props.address}</td>
    </tr>
  )
}

export default TebleItem