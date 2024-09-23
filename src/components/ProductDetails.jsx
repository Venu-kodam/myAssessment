import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { barcode } = useParams()
  const [product, setProduct] = useState(null)
  useEffect(() => {
    const fetchProductDetail = async () => {
      const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      console.log(response.data);
      setProduct(response.data.product)
    }
    fetchProductDetail()
  }, [barcode])
  if (!product) return <p>Loading...</p>
  return (
    <div className='product-container row  gap-3'>
      <div className="Product-detail-image col-md-5 col-lg-4">
        <img src={product.image_url} alt={product.product_name || 'Product Image'} className='cursor' />
      </div>
      <div className="productDetail-content my-3  col-md col-lg">
        <h2>{product.product_name || product.generic_name || 'No Name Available'}</h2>
        <p><b>Brands:</b> {product.brands}</p>
        <p><b>Quantity:</b> {product.quantity}</p>
        <p  className='heading product-detail-item'><b>Categories:</b> {product.categories_tags.map(tag => tag.split(':')[1]).join(', ') || 'No Categories Available'}</p>
          <p className='heading  product-detail-item'><b>Ingredients:</b> {product.ingredients_text|| 'No Ingredients'}</p>
        <p className='heading  product-detail-item'><b>NutriScore Grade:</b> {product.nutriscore_grade.toUpperCase() || 'N/A'}</p>
        <p className='heading  product-detail-item'><b>Energy:</b> {product.nutriments.energy} kJ</p>
        <p className='heading  product-detail-item'><b>Carbohydrates:</b> {product.nutriments.carbohydrates} g</p>
        <p className='heading  product-detail-item'><b>Proteins:</b> {product.nutriments.proteins} g</p>
        <p className='heading  product-detail-item'><b>Fats:</b> {product.nutriments.fat} g</p>
        <Link  to='/' className='btn btn-primary mx-3'>Back</Link>
      </div>
      
    </div>
  )
}

export default ProductDetails