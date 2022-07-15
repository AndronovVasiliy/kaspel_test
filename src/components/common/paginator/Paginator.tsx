import React, { useState } from 'react'
import style from './Paginator.module.css'

interface PropsType {
  setSelectPage: React.Dispatch<React.SetStateAction<number>>
  totalItem: number
  selectPage: number
}

function Paginator(props: PropsType) {

  const [portionNumber, setportionNumber] = useState(1)
  const portionSize = 5
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  let pagesCount = Math.ceil(props.totalItem / 20)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <ul className={style.pafinator}>
      {portionNumber > 1 && <li className={style.paginator_item} onClick = {() => setportionNumber(portionNumber - 1)}>{`<<`}</li>}
      {pages
      .filter(item => item >= leftPortionPageNumber && item <= rightPortionPageNumber)
      .map(i => <li className={props.selectPage + 1 === i ? style.paginator_item + ' ' + style.paginator_item__active : style.paginator_item} onClick={() => props.setSelectPage(i - 1)} key={i}>{i}</li>)}
      {pagesCount > portionNumber * portionSize && <li className={style.paginator_item} onClick = {() => setportionNumber(portionNumber + 1)}>{`>>`}</li>}
    </ul>
  )
}

export default Paginator