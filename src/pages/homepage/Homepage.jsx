import React from 'react';
import Banner from './Banner';
import States from '../states/States';
import AllFriends from '../friends/AllFriends';

const Homepage = () => {
    return (
        <div className='bg-base-200'>
            <Banner />
            <States />
            <AllFriends />
        </div>
    );
};

export default Homepage;