import React from 'react';

const Home = () => {
    return (
        <div className='my-5'>
            {/* Search Bar */}
            <div className="space-y-4">
                <h1 className='text-center text-2xl font-semibold'>Find Words with More Details</h1>
                <div>
                    <input
                        type="text"
                        className="input rounded-lg w-2/5 h-[50px] block mx-auto focus:border-0"
                        name="word"
                        placeholder='Search your words here...'
                    />
                </div>
                <button className="btn btn-neutral h-[50px] w-2/5 block mx-auto">
                    Search
                </button>
            </div>
        </div>

    );
};

export default Home;