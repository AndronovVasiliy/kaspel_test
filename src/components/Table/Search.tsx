import React from 'react';
import style from './Tabel.module.css';

interface PropsType {
    setinputValue: React.Dispatch<React.SetStateAction<string>>
    inputValue: string
    selecthandler: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

function Search(props: PropsType) {
    return (
        <div className={style.search_form}>
            <input className={style.search_form_input} placeholder='Введите данные для поиска' onChange={(e) => props.setinputValue(e.target.value)} value={props.inputValue} />
            <label>Искать по: </label>
            <select defaultValue={'name'} onChange={(e) => props.selecthandler(e)}>
                <option value="name">Имени</option>
                <option value="phone">Телефон</option>
                <option value="email">Почте</option>
                <option value="address">Адресу</option>
            </select>
        </div>
    )
}

export default Search