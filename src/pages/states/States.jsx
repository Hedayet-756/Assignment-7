import React from 'react';

const States = () => {
    return (
        <div className="container mx-auto my-8 bg-base-200 rounded-2xl py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                    <h2 className="text-3xl font-bold text-[#244D3F]">10</h2>
                    <p className="text-gray-500 font-medium mt-1">Total Friends</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                    <h2 className="text-3xl font-bold text-[#244D3F]">3</h2>
                    <p className="text-gray-500 font-medium mt-1">On Track</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                    <h2 className="text-3xl font-bold text-[#244D3F]">6</h2>
                    <p className="text-gray-500 font-medium mt-1">Need Attention</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                    <h2 className="text-3xl font-bold text-[#244D3F]">12</h2>
                    <p className="text-gray-500 font-medium mt-1">Interactions This Month</p>
                </div>

            </div>
        </div>
    );
};
export default States;