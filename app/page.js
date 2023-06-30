"use client"
import { useState, useEffect } from 'react'
import ListingCard from './components/jobCard.js';
import FilterNav from './components/filterNav.js';
import SearchBox from './components/searchBox.js';

const Page = () => {
    const [jobsData, setJobsData] = useState(null)
    const [isJobsDataLoading, setJobsDataLoading] = useState(true)
    
    const [profileData, setProfileData] = useState(null)
    const [isProfileDataLoading, setProfileDataLoading] = useState(true)

    useEffect(() => {
        fetch(`/api/profiles/649d4fcecbe80beee7904b58`)
            .then((res) => res.json())
            .then((data) => {
                setProfileData(data)
                setProfileDataLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch('/api/jobs')
            .then((res) => res.json())
            .then((data) => {
                setJobsData(data)
                setJobsDataLoading(false)
            })
    }, [])

    return (
        <div className="container mx-auto flex gap-4">
            <FilterNav/>
            <div className="listing">
                <SearchBox/>
                    {
                        isJobsDataLoading?
                                <div className='flex justify-center'>
                                    <p className='mt-20'>Loading...</p>
                                </div>
                        : jobsData?
                            <>
                                    <p className="my-5 text-gray-600">{ jobsData.length } Result(s) found</p>
                                    <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-4">
                                    {
                                        jobsData.map((jobData) => (
                                            <ListingCard key={ jobData.id } jobData={ jobData } profileData={ profileData }/> 
                                        ))
                                        }
                                    </div>  
                                </>
                        :
                            <p className="my-5 text-gray-600">0 results found</p>
                    }
            </div>
        </div>
	)
}

export default Page;
