import React from 'react'
import PropTypes from 'prop-types'
import style from '../Mainapp/Countries.module.css'
const Country = (props) => {
    const { country } = props;
    const { name, flags, capital, population, area, region } = country;
    const handleremove = (countryname) => {
        props.onRemovecountry(countryname);
    }
    return (
        <section className='grid cols-2 capitalize' id='maindiv'>
            <div className='border-2 text-center p-3 shadow-2xl rounded cursor-pointer text-white'>
                <img src={flags.png} alt={name.common} className='h-64 w-full' />
                <h3>Country name: <span className='text-indigo-500'>{name.common}</span> </h3>
                <h3 >Capital: <span className='text-sky-500'>{capital}</span></h3>
                <h3>population: <span className='text-yellow-500'>{population}</span></h3>
                <h3>Country area: <span className="text-red-500">{area}</span> </h3>
                <h3>Region: <span className="text-pink-500">{region}</span> </h3>
                <input type="button" value="Remove Country" onClick={() => handleremove(name.common)} className='p-1 rounded cursor-pointer  bg-indigo-500 text-black text-xl' />
            </div>
        </section>

    )
}



export default Country
