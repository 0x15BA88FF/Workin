import { MdSearch } from 'react-icons/md'
import ListingCard from '../components/jobCard.js'

const Page = () => {
	return (
        <>
  10          <div className="flex items-center gap-2 px-4 bg-gray-200 rounded-lg">
                <i>
                    <MdSearch className="w-6 h-6 text-gray-500"/>
                </i>
                <input type="text" placeholder="Search..." className="py-3 w-full bg-gray-200"/>
            </div>
            <p className="my-5 text-gray-600">250 Results found</p>
            <div>
                <ListingCard/>
            </div>
        </>
	)
}

export default Page;
