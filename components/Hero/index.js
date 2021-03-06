import styles from '@styles/Home.module.css'
import TabsRender from '@components/tabs'
import { useEffect, useState } from 'react';

export default function Hero ({handleSearch, searchResults}) {
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <>
      <div className={`${styles.header} w-full`} />

      <div className={`${styles.headerContent} flex flex-col items-center justify-center text-center mb-10 w-full`}>
        <h1 className='text-white text-6xl leading-2 sm:leading-relaxed shadow-2'>Quality music for creators</h1>
        <h4 className='text-gray-100 text-2xl leading-2 sm:leading-relaxed'>Over 20,000 exclusive tracks. Stress-free licensing.</h4>


        <div className="relative text-gray-600 focus-within:text-gray-400 mt-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </span>
          <input 
            onChange={handleSearch}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            type="search" name="q" 
            className="searchBeats py-2 w-96 text-md text-white bg-gray-300 rounded-full pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search by genre, mood, instrument, keyword" autoComplete="off" />
          <div className={`${searchFocus && searchResults.length > 0 ? '' : 'hidden'} w-96 bg-gray-100 text-left mt-1 py-2 px-4 absolute z-50 rounded-sm max-h-72 overflow-scroll text-md`}>
            {searchResults.map((result, index) => (
              <p key={index} className='border-b-2 py-2'>{result}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}