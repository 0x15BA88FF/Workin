"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { BsBookmarkDash, BsBookmarkDashFill } from 'react-icons/bs';

const ListingCard = (props) => {
    const [companyData, setCompanyData] = useState(null)
    const [isCompanyDataLoading, setCompanyDataLoading] = useState(true)

    useEffect(() => {
        console.log(`/api/companies/${props.jobData.author_id}`)
        fetch(`/api/companies/${props.jobData.author_id}`)
            .then((res) => res.json())
            .then((data) => {
                setCompanyData(data)
                setCompanyDataLoading(false)
            })
    }, [, props.jobData.author_id])

    return (
        <>
            <div className="flex flex-col gap-4 p-5 bg-white border-2 border-gray-300 shadow-sm rounded-lg">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                        <Link href={`/profile/${props.jobData._id}`} className="w-max" passHref>                
                            <Image alt={ props.jobData.company_name } src={ props.jobData.avatar_url || "/logo.png" } width={50} height={50} className="rounded-lg bg-gray-500"/>
                        </Link>
                        <div className="flex flex-col">
                            <div className="flex gap-2 items-center">
                                <Link href={`/job/${props.jobData._id}`} className="font-bold text-gray-600">{ props.jobData.title }</Link>
                                {
                                    props.profileData.applied_jobs.includes(props.jobData._id)?
                                        <span className="mx-2 py-[5px] px-[8px] text-xs bg-green-200 text-green-500 rounded-md">Applied</span>
                                    :
                                        <></>
                                }
                            </div>
                            { 
                                isCompanyDataLoading?
                                    <p>Loading...</p>
                                :
                                    <Link href={`/companies/${companyData._id }`} className="text-gray-600">
                                        { companyData.name }
                                    </Link>
                            }
                        </div>
                    </div>
                    <button className="p-2 rounded-md border-2 border-gray-300 bg-white" data-id={ props.jobData._id }>
                        {
                            props.profileData.saved_jobs.includes(props.jobData._id)?
                                <BsBookmarkDashFill className="w-6 h-6"/>
                            :
                                <BsBookmarkDash className="w-6 h-6"/>
                        }
                    </button>
                </div>
                <Link href={`/job/${props.jobData._id}`} className="w-full h-[3rem] text-wrap truncate block">
                    { props.jobData.description }
                </Link>
                <hr/>
                <div className="w-full flex gap-2 overflow-hidden">
                    {
                        <>
                            <Link href={`/search?type=${props.jobData.type}`} key={ props.jobData.type } className="tag">{ props.jobData.type }</Link>
                            <Link href={`/search?site=${props.jobData.site}`} key={ props.jobData.site } className="tag">{ props.jobData.site }</Link>
                            <Link href={`/search?salary=${props.jobData.salary}`} key={ props.jobData.salary } className="tag">${ props.jobData.salary }</Link>
                            <Link href={`/search?location=${props.jobData.location}`} key={ props.jobData.location } className="tag">{ props.jobData.location }</Link>
                        </>
                    }
                </div>
            </div>
        </>
    ) 
}

export default ListingCard;
