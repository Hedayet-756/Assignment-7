import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-4 container mx-auto text-center">
                <div>
                    <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                    <p className="py-6">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                        relationships that matter most.</p>
                    <button className="btn text-xl font-light text-white  bg-[#244D3F] mt-4"> <strong>+</strong> Add a Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;