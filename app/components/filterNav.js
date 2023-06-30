const FilterNav = () => {
    return (
        <nav className="h-max w-[300px] p-4 hidden rounded-md bg-white border-2 border-gray-300 md:block">
            <form className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <p className="text-xl font-medium">Filter</p>
                    <input type="reset" className="text-red-500 bg-white border-none" value="Clear all"/>
                </div>
                <hr/>
                <p className="text-xl font-medium">Location</p>
                <select className="py-2 px-4 rounded-md border-gray-300 border-2">
                    <option>Accra, Ghana</option>
                </select>
                <hr/>
                <p className="text-xl font-medium">Job Type</p>
                <div className="flex items-center gap-2">
                    <input className="w-4 h-4" type="checkbox" id="full-time"/>
                    <label htmlFor="full-time">Full time</label>
                </div>
                <div className="flex items-center gap-2">
                    <input className="w-4 h-4" type="checkbox" id="part-time"/>
                    <label htmlFor="part-time">Part time</label>
                </div>
                <div className="flex items-center gap-2">
                    <input className="w-4 h-4" type="checkbox" id="internship"/>
                    <label htmlFor="internship">Internship</label>
                </div>
                <div className="flex items-center gap-2">
                    <input className="w-4 h-4" type="checkbox" id="freelance"/>
                    <label htmlFor="freelance">Freelance</label>
                </div>
                <hr/>
                <p className="text-xl font-medium">Work Site</p>
                <div className="flex items-center gap-2">
                    <input className="w-4 h-4" type="checkbox" id="on-site"/>
                    <label htmlFor="on-site">On-site</label>
                </div>
                <div className="flex items-center gap-2">
                    <input className="w-4 h-4" type="checkbox" id="remote"/>
                    <label htmlFor="remote">Remote</label>
                </div>
                <div className="flex items-center gap-2">
                    <input className="w-4 h-4" type="checkbox" id="hybrid"/>
                    <label htmlFor="hybrid">Hybrid</label>
                </div>
                <hr/>
                <p className="text-xl font-medium">Salary Range</p>
                <div className="flex items-center gap-2">
                    <input className="w-4 h-4" type="radio" id="1000"/>
                    <label htmlFor="1000">Under $1000</label>
                </div>
                <div className="flex items-center gap-2">
                    <input className="w-4 h-4" type="radio" id="1000-2500"/>
                    <label htmlFor="1000-2500">$1000 to 2500</label>
                </div>
                <div className="flex items-center gap-2">
                    <input className="w-4 h-4" type="radio" id="custom"/>
                    <label htmlFor="custom">Custom</label>
                </div>
                <div className="flex gap-2 items-center">
                    <label htmlFor="from">From</label>
                    <input type="number" id="from" className="py-2 px-4 w-20 border-2 border-gray-300 rounded-lg"/>
                    <label htmlFor="to">To</label>
                    <input type="number" id="to" className="py-2 px-4 w-20 border-2 border-gray-300 rounded-lg"/>
                </div>
                <hr/>
                <p className="text-xl font-medium">Job Category</p>
                <select className="py-2 px-4 rounded-md border-gray-300 border-2">
                    <option>Accra, Ghana</option>
                </select>
                <button className="py-2 px-4 bg-blue-500 text-white rounded-md">Filter</button>
        </form>
        </nav>
    )
}

export default FilterNav
