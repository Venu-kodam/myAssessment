import React, { useState } from 'react'

const SearchBar = ({setSearch,setErrorMessage}) => {
    const [input, setInput] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSearch(input)
        setInput("")
    }
    return (
        <div className='input-item row flex-wrap justify-content-center align-items-center gap-3 my-4'>
            <form className='input-box d-flex align-items-center justify-space-between col-7 col col-sm-8 col-md-10 col-lg-10' onSubmit={handleSubmit}>
                <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Search for Food Products by name or Barcode' />
                <button type='submit' className='search bg-transparent fs-5'><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    )
}

export default SearchBar