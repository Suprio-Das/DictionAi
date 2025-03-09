import React from 'react';

const Home = () => {
    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const word = form.word.value;
        console.log(word)
    }
    return (
        <div className='my-5'>
            {/* Search Bar */}
            <h1 className='text-center text-2xl font-semibold my-3'>Find Words with More Details</h1>
            <form onSubmit={handleSearch} className="space-y-4">
                <div>
                    <input
                        type="text"
                        className="input rounded-lg w-2/5 h-[50px] block mx-auto focus:border-0"
                        name="word"
                        placeholder='Search your words here...'
                        required
                    />
                </div>
                <button className="btn btn-neutral h-[50px] w-2/5 block mx-auto" type='submit'>
                    Search
                </button>
            </form>
        </div>
    );
};

export default Home;