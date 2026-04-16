import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {

    const { id: friendParamsId } = useParams();
    // console.log('friendParamsId', friendParamsId);
    const friends = useLoaderData();
    // console.log('friends', friends);
    const expectedFriend = friends.friends.find((friend) => friend.id === Number(friendParamsId));
    // console.log('expectedFriend', expectedFriend);
    //     const { id, name, email, picture, days_since_contact, status, tags, bio, goal, next-due_date
    // } = expectedFriend;

    return (
        <div>

        </div>
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