import React, { use } from 'react';
import FriendCard from '../../components/UI/FriendCard';

const friendsPromise = fetch('/friends.json').then(res => res.json());

const AllFriends = () => {
    const friends = use(friendsPromise);
    // console.log('friends', friends);
    return (
        <div className='my-12 container bg-base-200 mx-auto'>
            <h2 className='font-bold text-3xl text-start mb-6'>Your Friends</h2>
            <div className='grid gird cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    friends.friends.map((friend, index) => {
                        return (
                            <FriendCard key={index} friend={friend}></FriendCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllFriends;





//     const books = use(booksProminse);
//     console.log('books', books)
//     return (
//         <div className='my-12 container mx-auto'>
//             <h2 className='font-bold text-3xl text-center mb-6'>Books</h2>
//             <div className='grid gird cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
//                 {
//                     books.map((book, index) => {
//                         return (
//                             <BookCard key={index} book={book}></BookCard>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     );
// };

// export default AllBooks;