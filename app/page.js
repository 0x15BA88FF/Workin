import Image from 'next/image';
import Link from 'next/link';
import ListingCard from '../components/jobCard.js';
import FilterNav from '../components/filterNav.js';
import SearchBox from '../components/searchBox.js';


const Page = () => {
    const jobData = {
        "jobs" : [
                {
                    "id": "85am3ds8",
                    "avatar_url": "/logo.png",
                    "company_name": "Kyperware",
                    "job_role": "Full-stack web developer",
                    "description": "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
                    "tags": [
                        "Full-time",
                        "Remote",
                        "$50000",
                        "Ghana"
                    ]
                }
            ]
    }

    return (
        <div className="flex my-4 gap-4 p-6">
            <FilterNav/>
            <div className="md:right-Listing">
                <SearchBox/>
                <p className="my-5 text-gray-600">{ jobData.jobs.length } Result(s) found</p>
                <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-4">
                    {
                        jobData.jobs.map((job) => (
                            <ListingCard { ...job }/> 
                        ))
                    }
                </div>
            </div>
        </div>
	)
}

export default Page;
