import React, { Suspense } from 'react';
import Banner from './Banner';
import States from '../states/States';
import AllFriends from '../friends/AllFriends';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div className='bg-base-200'>
            <Banner />
            <States />
            <Suspense fallback={<div className="text-center font-bold text-4xl text-[#244D3F] py-8">Loading friends...</div>}>
                <AllFriends />
            </Suspense>
        </div>
    );
};

export default Homepage;