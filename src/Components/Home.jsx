import React, { useEffect, useState } from 'react';

const Home = () => {
    const [meaning, setMeaning] = useState(null);
    const [word, setWord] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchedWord = form.word.value.trim().toLowerCase();
        if (searchedWord) {
            setWord(searchedWord);
        }
    };

    useEffect(() => {
        if (!word) return;

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setMeaning(data[0]);
                } else {
                    setMeaning(null);
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [word]);

    return (
        <div className='my-5'>
            {/* Search Bar */}
            <h1 className='text-center text-2xl font-semibold my-3'>Find Words with More Details</h1>
            <form onSubmit={handleSearch} className="space-y-4">
                <div>
                    <input
                        type="text"
                        className="input rounded-lg lg:w-2/5 w-full h-[50px] block mx-auto focus:border-0"
                        name="word"
                        placeholder='Search your words here...'
                        required
                    />
                </div>
                <button className="btn btn-neutral h-[50px] lg:w-2/5 w-full block mx-auto" type='submit'>
                    Search
                </button>
            </form>
            {/* Word Details */}
            {
                meaning ? (
                    <div className='my-11'>
                        <h1 className='text-xl'><span className='font-semibold'>Searched Word: </span>{meaning.word}</h1>
                        <h2 className='text-lg'><span className='font-semibold'>Phonetic: </span>{meaning.phonetic || "Not Found"}</h2>
                        <h2 className='text-xl font-semibold mb-2'>Listen: </h2>
                        {meaning.phonetics?.length > 0 && meaning.phonetics[0].audio && (
                            <audio controls>
                                <source src={meaning.phonetics[0].audio} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        )}
                        <h3 className='text-lg font-semibold mt-3'>Meanings:</h3>
                        <ul className='list-disc pl-5'>
                            {meaning.meanings?.map((m, index) => (
                                <li key={index}>
                                    <strong>{m.partOfSpeech}</strong>: {m.definitions[0]?.definition}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div>
                        <p className='text-center my-11 text-2xl'>Search a word for meaning...</p>
                    </div>
                )
            }
        </div>
    );
};

export default Home;
