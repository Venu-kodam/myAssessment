import React from 'react'

const Sort = ({sortOption,setSortOption}) => {
    return (
        <div className='sort-options'>
            <select id="sort" className='my-2 px-2 cursor'
                value={sortOption} onChange={(e) => setSortOption(e.target.value)}
                style={{ borderRadius: '5px' }}>
                <option value="">Sort by</option>
                <option value="name-asc" className='cursor'>Name (A-Z)</option>
                <option value="name-desc" className='cursor'>Name (Z-A)</option>
                <option value="nutrition-asc" className='cursor'>Nutrition Grade (A-E)</option>
                <option value="nutrition-desc" className='cursor'>Nutrition Grade (E-A)</option>
            </select>
        </div>
    )
}

export default Sort