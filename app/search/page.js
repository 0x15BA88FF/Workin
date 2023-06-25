'use client'

import { useRouter } from 'next/router';

const Search = () => {
    const router = useRouter()

    return (
        <>
            { router.query }
        </>
    )
}

export default Search;
