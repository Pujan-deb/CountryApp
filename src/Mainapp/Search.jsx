import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const [serchtext, setserchtext] = useState("")
    const handlesearch = (e) => {
        setserchtext(e.target.value);

    }
    useEffect(() => {
        props.onsearch(serchtext);
    }, [serchtext])

    return (
        <div className='text-center'>
            <input type="text" placeholder='Serach For Country' onChange={handlesearch} value={serchtext} className='p-3 text-xl text-black border outline-none' />
        </div>
    )
}

export default Search