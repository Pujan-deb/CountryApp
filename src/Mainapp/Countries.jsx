import React from 'react'
import Country from './Country'
import '../Mainapp/index.css'
import style from '../Mainapp/Countries.module.css'
const Countries = (props) => {
    let index;
    return (
        <section className={style.countries}>
            {props.data.map((country) => {
                const countrynew = { country, id: index }
                return <Country {...countrynew} key={countrynew.id} onRemovecountry={props.onRemovecountry} />
            })}
        </section>
    )
}

export default Countries