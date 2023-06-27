"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineBookmark } from 'react-icons/md';

const ListingCard = (props) => {
    const [profileData, setProfileData] = useState(null)
    const [isProfileDataLoading, setProfileDataLoading] = useState(true)

    useEffect(() => {
        fetch(`/api/profiles/${props.data.author_id}`)
            .then((res) => res.json())
            .then((data) => {
                setProfileData(data)
                setProfileDataLoading(false)
            })
    }, [])

    return (
        <>
            <div className="flex flex-col gap-4 p-5 bg-white border-2 border-gray-300 shadow-sm rounded-lg">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                        <Link href={`/profile/${props.data.company_name}`} className="w-max" passHref>                
                            <Image alt={ props.data.company_name } src={ props.data.avatar_url || "/logo.png" } width={50} height={50} className="rounded-lg bg-gray-500"/>
                        </Link>
                        <div className="flex flex-col">
                            <div className="flex gap-2 items-center">
                                <Link href={`/job/${props.data._id}`} className="font-bold text-gray-600">{ props.data.title }</Link>
                                <span className="mx-2 py-[5px] px-[8px] text-xs bg-green-200 text-green-500 rounded-md">Accepted</span>
                            </div>
                            { 
                                isProfileDataLoading?
                                    <p>Loading...</p>
                                :
                                    <Link href={`/profile/${props.data.profileData._id }`} className="text-gray-600">
                                                { profileData.name }
                                    </Link>
                            }
                        </div>
                    </div>
                    <button className="p-2 rounded-md border-2 border-gray-300 bg-white" data-id={ props.data._id }>
                        <MdOutlineBookmark className="w-6 h-6"/>
                    </button>
                </div>
                <Link href={`/job/${props.data._id}`} className="w-full h-[3rem] text-wrap truncate block">
                    { props.data.description }
                </Link>
                <hr/>
                <div className="w-full flex gap-2 overflow-hidden">
                    {
                        <>
                            <Link href={`/search?tag=${props.data.type}`} key={ props.data.type } className="tag">{ props.data.type }</Link>
                            <Link href={`/search?tag=${props.data.site}`} key={ props.data.site } className="tag">{ props.data.site }</Link>
                            <Link href={`/search?tag=${props.data.salary}`} key={ props.data.salary } className="tag">${ props.data.salary.$numberDecimal }</Link>
                            <Link href={`/search?tag=${props.data.location}`} key={ props.data.location } className="tag">{ props.data.location }</Link>
                        </>
                    }
                </div>
            </div>
        </>
    ) 
}

export default ListingCard;
