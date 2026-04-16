import React from 'react';
import { Link, Links } from 'react-router';

const FriendCard = ({ friend }) => {
    return (
        <Link to={`/friendDetails/${friend.id}`} className="card bg-base-100 shadow-sm p-4 md:p-8  rounded-2xl " >
            <figure className='p-6'>
                <img className='rounded-full h-[80px]'
                    src={friend.picture}
                    alt={friend.name} />
            </figure>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title font-bold text-2xl">{friend.name}</h2>
                <p className='font-semibold text-gray-500'>{friend.days_since_contact}d ago</p>
            </div>
            <div className='flex justify-center items-center gap-2 mb-4'>
                {
                    friend.tags.map((tag, index) => (
                        <div key={index} className="badge text-green-500 bg-green-200 font-bold">{tag}</div>
                    ))
                }

            </div>
            <div className={`font-bold flex justify-center items-center rounded-2xl mx-auto ${friend.status === 'overdue' ? 'text-white bg-red-500' : friend.status === 'almost due' ? 'text-white bg-yellow-500' : 'text-white bg-[#244D3F]'} px-2 py-1 rounded-lg`}>
                <h2>
                    {friend.status}
                </h2>
            </div>
        </Link>
    );
};

export default FriendCard;



// `/friendDetails/${friend.friendId}`


// import { CiStar } from 'react-icons/ci';


// const BookCard = ({ book }) => {
//     return (
//         <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
//             <figure className='p-6'>
//                 <img className='rounded-xl h-[260px]'
//                     src={book.image}
//                     alt={book.bookName} />
//             </figure>
//             <div className="card-body">
//                 <div className='flex items-center gap-2'>
//                     {book.tags.map((tag, index) => (
//                         <div key={index} className="badge text-green-500 bg-green-200 font-bold">{tag}</div>
//                     ))}
//                 </div>
//                 <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
//                 <p className='font-semibold text-lg'>{book.author}</p>
//                 <div className="card-actions justify-between border-dashed border-gray-300 pt-4  text-xl">
//                     <div className="font-semibold">{book.category}</div>
//                     <div className="flex gap-2 items-center text-2xl">{book.rating}<CiStar /> </div>
//                 </div>
//             </div>
//         </Link>
//     );
// };

// export default BookCard;