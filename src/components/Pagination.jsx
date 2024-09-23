import React from 'react'

const Pagination = ({ totalPages, postPerpage, currentpage, setCurrentpage }) => {
    let pages = []
    for (let i = 1; i <= Math.ceil(totalPages / postPerpage); i++) {
        pages.push(i);
    }

    const selectPageHandler=(selectedPage)=>{
        if(selectedPage>=1 && selectedPage<=(totalPages/postPerpage)+1 && selectedPage!=currentpage){
            setCurrentpage(selectedPage)
        }
        
    }
    return (
        <>
            <div className='pagination d-flex align-items-center justify-content-center py-5 flex-wrap'>
                <button className='btn left pagination-btn ms-2' onClick={() => selectPageHandler(currentpage-1)}><i className='fa-solid fa-circle-left fs-5'></i></button>
                {pages.map((page, index) => (
                    <button key={index} className={`btn pagination-btn ms-2 ${page == currentpage && 'active'}`} onClick={() => selectPageHandler(page)}>{page}</button>
                ))}
                <button className='btn right pagination-btn ms-2' onClick={() => selectPageHandler(currentpage+1)}><i className='fa-solid fa-circle-right fs-5'></i></button>
            </div>
        </>
    )
}

export default Pagination