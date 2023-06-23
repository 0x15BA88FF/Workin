const ListingCard = (data) => {
    return (
        <>
            <div className="flex flex-col gap-4 p-5 bg-white shadow-sm rounded-lg">
                <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                        <div className="flex flex-col">
                            <p className="text-lg font-bold text-gray-600">Google Inc</p>
                            <p className="text-gray-600">Senior web developer</p>
                        </div>
                    </div>
                    <span className="py-2 px-4 bg-green-200 text-green-500 rounded-full">Accepted</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>
                <hr/>
                <div className="flex gap-2">
                     <span className="py-2 px-4 bg-gray-200 text-gray-500 rounded-full">Full-Time</span>
                     <span className="py-2 px-4 bg-gray-200 text-gray-500 rounded-full">Remote</span>
                     <span className="py-2 px-4 bg-gray-200 text-gray-500 rounded-full">$50,000</span>
                     <span className="py-2 px-4 bg-gray-200 text-gray-500 rounded-full">Califonia</span> 
                </div>
            </div>
        </>
    ) 
}

export default ListingCard;
