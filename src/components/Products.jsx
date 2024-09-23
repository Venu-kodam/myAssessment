import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Products = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div className="product-item card p-3 cursor" style={{ borderRadius: '20px' }} onClick={()=>navigate(`/product/${product._id}`)}>
            <img src={product.image_url} alt={product.product_name || 'Product Image'} className='cursor' />
            <div className="product-content">
                <h6 className='fw-bolder my-2 product-content-name ' style={{ textTransform: 'lowercase' }}>{product.product_name || product.generic_name || 'No Name Available'}</h6>
                <p className='heading '><b>Categories:</b> {product.categories_tags.slice(0, 2).map(tag => tag.split(':')[1]).join(', ') || 'No Categories Available'}</p>
                <p className='heading'><b>Ingredients:</b> {product.ingredients_tags &&
                    product.ingredients_tags.slice(0, 2).map(tag => tag.split(':')[1]).join(', ') || 'No Ingredients'}</p>
                <p className='heading'><b>NutriScore Grade:</b> {product.nutriscore_grade.toUpperCase()}</p>
            </div>
        </div>
    )
}

export default Products