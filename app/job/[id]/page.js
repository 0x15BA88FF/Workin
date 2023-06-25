import Image from 'next/image';

const Job = () => {
    return (
        <div>
            <div className="left-0 p-6 w-screen h-60 bg-gray-400 border-b-2 border-b-gray-300">
                <Image alt="" src="/logo.png" width={80} height={80} className="relative top-[90%] mt-auto rounded-lg bg-gray-500"/>
            </div>
            <div className="mt-8 p-6 flex flex-col gap-2">
                <p className="text-medium">Kyperware</p>
                <h1 className="text-2xl font-medium">Full-stack Developer</h1>
                <h2 className="mt-2 font-bold">Description</h2>
                <p> 
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                </p>
            </div>
            <div className="w-screen px-4 py-8 bg-white border-t-2 border-b-gray-300">
                <button className="w-full py-4 rounded-lg bg-blue-500">Apply</button>
            </div>
        </div>
    )
}

export default Job;
