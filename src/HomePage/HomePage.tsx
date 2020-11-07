import React, { useState } from 'react'
import Header from '../_components/Header'
import ProductList from '../_components/ProductList'

function HomePage() {
    const [searchString, setSearchString] = useState("")

    return (
        <div>
            <Header
                withSearchBar = {true}
                searchString = {searchString}
                setSearchString = {setSearchString}
            />
            <ProductList
                searchString = {searchString}
            />
        </div>
    )
}

export default HomePage