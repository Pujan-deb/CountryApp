import React, { useState, useEffect } from 'react'
import Countries from './Countries';
import Search from './Search';

export default function Countryapp() {
    const url = "https://restcountries.com/v3.1/all";
    const [isLoading, setisLoading] = useState(true);
    const [error, seterror] = useState(true);
    const [countries, setcountries] = useState([]);
    const [Filteredcountries, setFilteredcountries] = useState(countries);

    const fetchdata = async (url) => {
        setisLoading(true);

        try {
            const response = await fetch(url);
            const data = await response.json();
            setcountries(data);
            setFilteredcountries(data);
            seterror(null);
            setisLoading(false);
        } catch (error) {
            seterror(error);
            setisLoading(true);
        }
    }

    useEffect(() => {
        fetchdata(url);
    }, [])
    const handleremovect = (nameofct) => {
        const Filter = Filteredcountries.filter((country) => country.name.common != nameofct);
        setFilteredcountries(Filter);
    }
    const SearchCountries = (searchvalue) => {
        let ctvalue = searchvalue.toLowerCase();
        const newcountries = countries.filter((country) => {
            const countryname = country.name.common.toLowerCase();
            return countryname.startsWith(ctvalue);
        })
        setFilteredcountries(newcountries);
    }
    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            <p className='text-center text-3xl text-pink-500 capitalize'>Description of all countries</p>
            <Search onsearch={SearchCountries} />
            {countries && <Countries data={Filteredcountries} onRemovecountry={handleremovect} />}
        </>
    )
}
