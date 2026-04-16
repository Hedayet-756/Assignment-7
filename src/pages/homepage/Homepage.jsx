import React from 'react';
import Banner from './Banner';
import States from '../states/States';
import AllFriends from '../friends/AllFriends';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div>
            <div className='bg-base-200'>
                <Banner />
                <States />
                <AllFriends />
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;