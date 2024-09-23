import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Products from './Products'
import SearchBar from './SearchBar'
import Filter from './Filter'
import Pagination from './Pagination'
import Sort from './Sort'

const Home = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const [currentpage, setCurrentpage] = useState(1)
    const [postPerpage, setPostPerpage] = useState(8)

    const [sortOption, setSortOption] = useState("")

    const lastpageIndex = currentpage * postPerpage
    const firstpageIndex = lastpageIndex - postPerpage

    //api to fetch initialProducts
    const getInitialProducts = async () => {
        setLoading(true)
        try {
            const response = await axios.get('https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=food&page_size=100&json=1')
            console.log(response.data);
            setProducts(response.data.products)
        } catch (error) {
            console.log("Error fetching initial Products", error);
        }
        finally {
            setLoading(false)
        }
    }

    //api to fetch products by name
    const getSearchProductsbyName = async (query) => {
        setLoading(true)
        try {
            const response = await axios.get(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=true`)
            console.log("SearchProducts data", response.data);
            setProducts(response.data.products)
        } catch (error) {
            console.log("Error fetching Search Products", error);
        }
        finally {
            setLoading(false)
        }
    }

    //get the products by barcode
    const getProductsByBarcode = async (barcode) => {
        setLoading(true)
        try {
            const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
            console.log("SearchProducts by Barcode data", response.data);
            if (response.data.product) {
                setProducts([response.data.product])  // return as an array for consistency
            } else {
                setProducts([])
                setErrorMessage("No product found for this barcode")
            }
        } catch (error) {
            console.log("Error fetching Products by Barcode", error);
        }
        finally {
            setLoading(false)
        }
    }
    //fetch the products by category
    const getProductsByCategory = async (categoryName) => {
        setLoading(true)
        try {
            const response = await axios.get(`https://world.openfoodfacts.org/category/${categoryName}.json`)
            console.log("products by category data", response.data);
            setProducts(response.data.products)
        } catch (error) {
            console.log("Error fetching Products by category", error);
        }
        finally {
            setLoading(false)
        }
    }

    //functionality to sort products
    const sortProducts = (productsList) => {
        if (sortOption === 'name-asc') {
            return productsList.sort((a, b) => (a.product_name || "").localeCompare(b.product_name || ""))
        }
        else if (sortOption === 'name-desc') {
            return productsList.sort((a, b) => (b.product_name || "").localeCompare(a.product_name || ""))
        }
        else if (sortOption === 'nutrition-asc') {
            return productsList.sort((a, b) => (a.nutriscore_grade || "").localeCompare(b.nutriscore_grade || ""))
        }
        else if (sortOption === 'nutrition-desc') {
            return productsList.sort((a, b) => (b.nutriscore_grade || "").localeCompare(a.nutriscore_grade || ""))
        }
        return productsList
    }

    useEffect(() => {
        if (search) {
            // Check if the search query is barcode i.e numbers
            const isBarcode = /^\d+$/.test(search)
            if (isBarcode) {
                getProductsByBarcode(search)
            } else {
                getSearchProductsbyName(search)
            }
        }
        else if (category) {
            getProductsByCategory(category)
        }
        else {
            getInitialProducts()
        }
    }, [search, category])

    return (
        <div className='home'>
            <SearchBar setSearch={setSearch} setErrorMessage={setErrorMessage} />
            {loading ? (
                <div className='text-center my-3 text-white'>
                    <div className="spinner-border" role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                </div>
            ) :
                (<>
                    {errorMessage && <p>{errorMessage}</p>}
                    <div className='d-flex align-items-center justify-content-center gap-4 flex-wrap my-3'>
                        <Filter setCategory={setCategory} />
                        <Sort sortOption={sortOption} setSortOption={setSortOption}/>
                    </div>

                    <div className='row align-items-center justify-content-center flex-wrap row-gap-3'>
                        {sortProducts(products).slice(firstpageIndex, lastpageIndex).map((product, index) => (
                            <div key={index} className='col-auto col-sm-auto col-md col-lg-auto'>
                                <Products product={product} />
                            </div>
                        ))}
                    </div>
                    {products.length > 1 ?
                        <Pagination
                            totalPages={products.length} postPerpage={postPerpage}
                            currentpage={currentpage}
                            setCurrentpage={setCurrentpage}
                        />
                        : <></>}
                </>)}
        </div>
    )
}

export default Home