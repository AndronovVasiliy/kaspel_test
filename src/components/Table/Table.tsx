import React, { useEffect, useState } from 'react'
import { data } from '../../data/data'
import TebleItem from './TebleItem';
import style from './Tabel.module.css'
import Search from './Search';
import Paginator from '../common/paginator/Paginator';

export interface UserType {
    guid: string;
    name: string;
    phone: string;
    email: string;
    address: string;
}

function Table() {

    const [users, setUsers] = useState<UserType[]>([])
    const [totalItem, settotalItem] = useState(0)
    const [inputValue, setinputValue] = useState('')
    const [seclect, setSeclect] = useState<keyof UserType>('name')
    const [selectPage, setSelectPage] = useState(0)

    useEffect(() => {
        setUsers(data)
    }, [])

    useEffect(() => {
        let searchParams = data.filter(i => i[seclect].toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
        setUsers(searchParams)
        settotalItem(searchParams.length)
    }, [seclect, inputValue])

    const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {

        switch (+e.currentTarget.id) {
            case 1:
                setUsers([...users.sort((a, b) => a.name.localeCompare(b.name))])
                break;
            case 2:
                setUsers([...users.sort((a, b) => a.phone.localeCompare(b.phone))])
                break;
            case 3:
                setUsers([...users.sort((a, b) => a.email.localeCompare(b.email))])
                break;
            case 4:
                setUsers([...users.sort((a, b) => a.address.localeCompare(b.address))])
                break;
            default:
                break;
        }
    }

    const selecthandler = (event: React.ChangeEvent<HTMLSelectElement>) => {

        switch (event.target.value) {
            case 'name':
                setSeclect('name')
                break;
            case 'phone':
                setSeclect('phone')
                break;
            case 'email':
                setSeclect('email')
                break;
            case 'address':
                setSeclect('address')
                break;
            default:
                break;
        }
    }

    return (
        <div >
            <Search
                setinputValue={setinputValue}
                inputValue={inputValue}
                selecthandler={selecthandler}
            />
            <table className={style.tabel_users}>
                <thead>
                    <tr>
                        <th id='1' onClick={(e) => onClick(e)} className={style.tabele_users__name_column}>Имя</th>
                        <th id='2' onClick={(e) => onClick(e)} className={style.tabele_users__name_column}>Номер телефона</th>
                        <th id='3' onClick={(e) => onClick(e)} className={style.tabele_users__name_column}>email</th>
                        <th id='4' onClick={(e) => onClick(e)} className={style.tabele_users__name_column}>Адрес</th>
                    </tr>
                </thead>
                <tbody>
                    {users
                        .slice(selectPage * 20, selectPage * 20 + 20)
                        .filter(i => i[seclect].toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
                        .map((item) => <TebleItem key={item.guid}{...item} />)}
                </tbody>
            </table>
            <Paginator setSelectPage = {setSelectPage} selectPage = {selectPage} totalItem = {totalItem}/>
        </div>
    )
};

export default Table;