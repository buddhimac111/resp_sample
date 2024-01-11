const ProgressTracker = () => {
    return (
        <>
            <div className="w-full mx-auto my-6 pb-4">
                <div className="flex pb-3">
                    <div className="flex-1">
                    </div>
                    <div className="w-1/6 align-center items-center align-middle content-center flex">
                        <div className="w-full bg-[#f27c37] rounded items-center align-middle align-center flex-1">
                            <div className="bg-[#f27c37] text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{ width: "0%" }}></div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-10 h-10 border-2 bg-[#f27c37] border-[#f27c37] mx-auto rounded-full text-lg flex items-center">
                            <span className="text-grey-darker text-center w-full text-white">1</span>
                        </div>
                    </div>
                    <div className="w-1/6 align-center items-center align-middle content-center flex">
                        <div className="w-full bg-[#f27c37] rounded items-center align-middle align-center flex-1">
                            <div className="bg-[#f27c37] text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{ width: "0%" }}></div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="w-10 h-10 border-2 border-[#f27c37] mx-auto rounded-full text-lg flex items-center">
                            <span className="text-grey-darker text-center w-full text-[#f27c37]">2</span>
                        </div>
                    </div>
                    <div className="w-1/6 align-center items-center align-middle content-center flex">
                        <div className="w-full bg-[#f27c37] rounded items-center align-middle align-center flex-1">
                            <div className="bg-[#f27c37] text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{ width: "0%" }}></div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="w-10 h-10 border-2 border-[#f27c37] mx-auto rounded-full text-lg flex items-center">
                            <span className="text-grey-darker text-center w-full text-[#f27c37]">3</span>
                        </div>
                    </div>
                    <div className="w-1/6 align-center items-center align-middle content-center flex">
                        <div className="w-full bg-[#f27c37] rounded items-center align-middle align-center flex-1">
                            <div className="bg-[#f27c37] text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{ width: "0%" }}></div>
                        </div>
                    </div>

                    <div className="flex-1">
                    </div>
                </div>
                <div className="pl-40 flex text-md text-center">
                    <div className="w-1/4">
                        Login Details
                    </div>

                    <div className="pl-12 w-1/4">
                        Restaurant Information
                    </div>

                    <div className="pl-20 w-1/4">
                        Ownership Details
                    </div>

                </div>
            </div>
        </>
    );
}

export default ProgressTracker;