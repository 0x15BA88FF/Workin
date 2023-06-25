'use client'

import { useState } from 'react';
import { MdSearch } from 'react-icons/md'

const SearchBox = () => {
    const [ isFilterDisplayed, setIsFilterDiplayed ] = useState(false)

    const toogleFilters = () => { setIsFilterDiplayed(!isFilterDisplayed) }

    return (
        <>
            <div className="searchbox flex items-center gap-2 px-2 py-2 bg-white border-2 border-gray-300 rounded-lg">
                <i>
                    <MdSearch className="ml-2 w-6 h-6 text-gray-500"/>
                </i>
                <input type="text" placeholder="Search..." className="pl-2 py-2 w-full bg-white"/>
                <button onClick={ () => toogleFilters() } className="h-full py-2 px-4 bg-blue-500 text-white rounded-md md:hidden">Filters</button>
            </div>
            <div className={`flex-col left-0 top-0 bg-white fixed z-20 w-screen h-screen overflow-scroll md:hidden ${ isFilterDisplayed? "flex" : "hidden" }`} >
                <button onClick={ () => toogleFilters() }>Close</button> 
            </div>
        </>
    )
}

export default SearchBox;
