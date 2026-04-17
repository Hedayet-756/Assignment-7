import React, { useContext } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { PiArchiveBold, PiBellSimpleZBold } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import { FriendContext } from '../../context/FriendContext';

const FriendDetails = () => {

    const { id: friendParamsId } = useParams();
    // console.log('friendParamsId', friendParamsId);
    const friends = useLoaderData();
    // console.log('friends', friends);
    const expectedFriend = friends.friends.find((friend) => friend.id === Number(friendParamsId));
    // console.log('expectedFriend', expectedFriend);
    const { id, name, email, picture, days_since_contact, status, tags, bio, goal, next_due_date
    } = expectedFriend;

    const { handleCall, handleText, handleVideo } = useContext(FriendContext);
    console.log('friendContext', handleCall);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-base-200 shadow-sm container mx-auto mt-8 p-8" >
            <div className='lg:col-span-1'>
                <div className="card bg-base-100 shadow-sm p-4 rounded-2xl m-2" >
                    <figure>
                        <img className='rounded-full h-[80px]'
                            src={picture}
                            alt={name} />
                    </figure>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title font-bold text-2xl">{name}</h2>
                        <p className='font-semibold text-gray-500'>{days_since_contact}d ago</p>
                    </div>

                    <div className={`font-bold flex justify-center items-center rounded-2xl mx-auto ${status === 'overdue' ? 'text-white bg-red-500' : status === 'almost due' ? 'text-white bg-yellow-500' : 'text-white bg-[#244D3F]'} px-2 py-1 rounded-lg`}>
                        <h2>
                            {status}
                        </h2>
                    </div>
                    <div className='flex justify-center items-center gap-2 my-4'>
                        {
                            tags.map((tag, index) => (
                                <div key={index} className="badge text-green-500 bg-green-200 font-bold">{tag}</div>
                            ))
                        }

                    </div>
                    <div className='space-y-3 flex flex-col text-center'>
                        <h2 className="text-gray-600">"{bio}"</h2>
                        <p className=' text-sm text-gray-500'>Email: {email}</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-3 p-4 bg-white rounded-2xl shadow-sm" >
                    <PiBellSimpleZBold />
                    <span className='font-semibold'>Snooze 2 weeks</span>
                </div>
                <div className="flex justify-center items-center gap-3 p-3 md:p-4 m-3 md:m-4 bg-white rounded-2xl shadow-sm" >
                    <PiArchiveBold />
                    <span className='font-semibold'>Archive</span>
                </div>
                <div className="flex justify-center items-center gap-3 p-3 md:p-4 m-3 md:m-4 bg-white rounded-2xl shadow-sm text-red-500" >
                    <RiDeleteBin6Line />
                    <span className='font-semibold'>Delete</span>
                </div>
            </div>

            <div className='lg:col-span-2'>
                <div className="container mx-auto my-8 bg-base-200 rounded-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h2 className="text-3xl font-bold text-[#244D3F]">{days_since_contact}</h2>
                            <p className="text-gray-500 font-medium">Days Since Contact</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h2 className="text-3xl font-bold text-[#244D3F]">30</h2>
                            <p className="text-gray-500 font-medium">Goal (Days)</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h2 className="text-3xl font-bold text-[#244D3F]">{next_due_date}</h2>
                            <p className="text-gray-500 font-medium">Next Due</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-200 shadow-sm p-3 md:p-8 rounded-2xl m-3 md:m-8" >
                    <div className='flex justify-between'>
                        <h2 className="text-gray-500 font-semibold">Relationship Goal</h2>
                        <button className='btn rounded-xl'>Edit</button>
                    </div>
                    <p className='text-gray-500'>Connect every<span className='font-bold'> 30 days</span></p>
                </div>

                <div className="p-3 md:p-4 m-3 md:m-8 bg-base-200 bg-white rounded-2xl shadow-sm" >
                    <span className='text-gray-500 font-semibold'>Quick Check-In</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-6">
                        <div onClick={() => handleCall(expectedFriend)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center gap-3">
                            <BiPhoneCall />
                            <p className="text-gray-500 font-medium">Call</p>
                        </div>

                        <div onClick={() => handleText(expectedFriend)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center gap-3">
                            <MdOutlineTextsms />
                            <p className="text-gray-500 font-medium">Text</p>
                        </div>

                        <div onClick={() => handleVideo(expectedFriend)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center gap-3">
                            <MdOutlineVideocam />
                            <p className="text-gray-500 font-medium">Video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FriendDetails;

// const { handleMarkAsRead, handlesWishList } = useContext(BookContext);
// console.log(handleMarkAsRead, handlesWishList, "BookContext");

// ;

// return (
//     <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
//         <figure className='w-full flex items-center justify-center bg-gray-100'>
//             <img src={image} alt={bookName} className='h-[400px] rounded-2xl' />
//         </figure>
//         <div className="card-body space-y-3">
//             <h2 className="card-title text-2xl">{bookName}</h2>
//             <h2 className="card-title">By: {author}</h2>
//             <p className='py-2 border-y'>{category}</p>
//             <p>Review: {review}</p>
//             <div>
//                 {
//                     tags.map((tag, index) => (
//                         <div key={index} className="badge text-green-500 bg-green-200 font-bold">{tag}</div>
//                     ))
//                 }
//             </div>

//             <div className="border-t space-y-3">
//                 <div className='flex justify-between items-center gap-2'>
//                     <span>Number of pages:</span> <span>{totalPages}</span>
//                 </div>

//                 <div className='flex justify-between items-center gap-2'>
//                     <span>publisher: </span> <span>{publisher}</span>
//                 </div>

//                 <div className='flex justify-between items-center gap-2'>
//                     <span>Year of Publishing:</span> <span>{yearOfPublishing}</span>
//                 </div>
//                 <div className='flex items-center gap-2'>
//                     <button className="btn btn-primary" onClick={() => handleMarkAsRead(expectedBook)}>Mark as Read</button>
//                     <button className="btn btn-primary" onClick={() => handlesWishList(expectedBook)}>wishlist</button>
//                 </div>

//             </div>
//         </div>
//     </div>