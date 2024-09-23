import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Filter = ({setCategory }) => {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`https://world.openfoodfacts.org/categories.json`)
                console.log(response.data.tags);
                setCategories(response.data.tags)
            }
            catch (error) {
                console.log("Error fetching categories", error);
            }
        }
        fetchCategories()
    }, [])

    const handleCategoryChange=(e)=>{
        const selected = e.target.value
        setSelectedCategory(selected)
        setCategory(selected)
    }
    return (
        <select className='my-2 filter cursor px-2' value={selectedCategory} onChange={handleCategoryChange}
        style={{borderRadius:'5px'}}>
            <option value="">All Categories</option>
            {categories.map((category, index) => (
                <option key={index} className='cursor' >{category.name}</option>
            ))}
        </select>
    )
}

export default Filter