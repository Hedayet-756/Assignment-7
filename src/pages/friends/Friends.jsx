import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendContext';

const Friends = () => {
    const { storecall, storeText, storeVideo } = useContext(FriendContext);
    // console.log('storecall', storecall);
    // console.log('storeText', storeText);
    // console.log('storeVideo', storeVideo);

    const [filter, setFilter] = useState('Filter timeline');

    const combinedTimeline = [
        ...storecall.map(item => ({ ...item, type: 'Call', icon: '📞' })),
        ...storeText.map(item => ({ ...item, type: 'Text', icon: '💬' })),
        ...storeVideo.map(item => ({ ...item, type: 'Video', icon: '📹' }))
    ];
    // console.log('combinedTimeline', combinedTimeline);

    const sortedTimeline = combinedTimeline.sort((a, b) => {
        const dateA = new Date(a.next_due_date || new Date());
        const dateB = new Date(b.next_due_date || new Date());
        return dateB - dateA;
    });

    const filteredTimeline = sortedTimeline.filter(item => {
        if (filter === 'Filter timeline') return true;
        return item.type === filter;
    });



    return (
        <div className='bg-base-200 min-h-screen py-8'>
            <div className='container mx-auto my-6 px-4 max-w-2xl bg-base-100 rounded-2xl shadow-sm p-6'>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Timeline</h2>
                <div className='flex justify-start my-4'>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} className="bg-gray-50 border border-gray-200 text-gray-600 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-blue-400 cursor-pointer text-sm">
                        <option>Filter timeline</option>
                        <option>Text</option>
                        <option>Video</option>
                        <option>Call</option>
                    </select>
                </div>

                <div className="flex flex-col gap-4">
                    {filteredTimeline.length > 0 ? (
                        filteredTimeline.map((item, index) => (
                            <div key={index} className="w-full bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-center gap-4">
                                <div className={`text-2xl ${item.type === 'Text' ? 'text-gray-400' : ''}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-base font-semibold text-gray-700 leading-tight">
                                        {item.type} <span className="text-gray-400 font-normal text-sm ml-1">with {item.name}</span>
                                    </p>
                                    <p className="text-gray-400 text-xs mt-1">
                                        {new Date(item.date || new Date()).toLocaleString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-gray-500 text-sm'>Your recent communications will appear here.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Friends;
