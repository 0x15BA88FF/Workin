"use client"
import { useState, useEffect } from 'react'
import ListingCard from '../components/jobCard.js';
import FilterNav from '../components/filterNav.js';
import SearchBox from '../components/searchBox.js';

const Page = () => {
    const [jobData, setJobData] = useState(null)
    const [isJobDataLoading, setJobDataLoading] = useState(true)

    useEffect(() => {
        fetch('/api/jobs')
            .then((res) => res.json())
            .then((data) => {
                setJobData(data)
                setJobDataLoading(false)
            })
    }, [])

    return (
        <div className="flex my-4 gap-4">
            <FilterNav/>
            <div className="md:right-Listing">
                <SearchBox/>
                    {
                        isJobDataLoading?
                                <>Loading...</>
                        : jobData?
                        <>
                                <p className="my-5 text-gray-600">{ jobData.length } Result(s) found</p>
                                <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-4">
                                {
                                    jobData.map((job) => (
                                        <ListingCard key={ job.id } data={ job }/> 
                                        ))
                                    }
                                </div>  
                            </>
                        :
                        <>No data found</>
                    }
            </div>
        </div>
	)
}

export default Page;
