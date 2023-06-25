import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineBookmark } from 'react-icons/md';

const ListingCard = (data) => {
    return (
        <>
            <div className="flex flex-col gap-4 p-5 bg-white border-2 border-gray-300 shadow-sm rounded-lg">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                        <Link href={`/profile/${data.company_name}`} className="w-max">                
                            <Image alt={ data.company_name } src={ data.avatar_url || "" } width={50} height={50} className="rounded-lg bg-gray-500"/>
                        </Link>
                        <div className="flex flex-col">
                            <div className="flex gap-2 items-center">
                                <Link href={`/job/${data.id}`} className="font-bold text-gray-600">{ data.job_role }</Link>
                                <span className="mx-2 py-[5px] px-[8px] text-xs bg-green-200 text-green-500 rounded-md">Accepted</span>
                            </div>
                            <Link href={`/profile/${data.company_name}`} className="text-gray-600">{ data.company_name }</Link>
                        </div>
                    </div>
                    <button className="p-2 rounded-md border-2 border-gray-300 bg-white" data-id={ data.id }>
                        <MdOutlineBookmark className="w-6 h-6"/>
                    </button>
                </div>
                <Link href={`/job/${data.id}`} className="w-full h-[3rem] text-wrap truncate block">
                    { data.description }
                </Link>
                <hr/>
                <div className="w-full flex gap-2 overflow-hidden">
                    {
                        data.tags.map((tag) => (
                            <Link href={`/search?tag=${tag}`} className="tag">{ tag }</Link> 
                        ))
                    }
                </div>
            </div>
        </>
    ) 
}

export default ListingCard;
