import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';

const Friends = () => {
    const { storecall, setStoreCall, storeText, setStoreText, storeVideo, setStoreVideo, handleCall, handleText, handleVideo } = useContext(FriendContext);

    return (
        <div className='container mx-auto my-3'>
            <div className='flex justify-center my-4'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort by : {sortingType} ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType('pages')}><a>pages</a></li>
                        <li onClick={() => setSortingType('rating')}><a>rating</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList sortingType={sortingType} />
                </TabPanel>
                <TabPanel>
                    <ListedWishList sortingType={sortingType} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Friends;


// import React, { useState } from 'react';
// import { BookContext } from '../../context/BookContext';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import ListedReadList from '../../components/listedbooks/ListedReadList';
// import ListedWishList from '../../components/listedbooks/ListedWishList';

// const Books = () => {

//     const [sortingType, setSortingType] = useState("");
//     console.log(sortingType, 'sortingType')

//     return (
//         <div className='container mx-auto my-3'>
//             <div className='flex justify-center my-4'>
//                 <div className="dropdown dropdown-start">
//                     <div tabIndex={0} role="button" className="btn m-1">Sort by : {sortingType} ⬇️</div>
//                     <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
//                         <li onClick={() => setSortingType('pages')}><a>pages</a></li>
//                         <li onClick={() => setSortingType('rating')}><a>rating</a></li>
//                     </ul>
//                 </div>
//             </div>

//             <Tabs>
//                 <TabList>
//                     <Tab>Read List</Tab>
//                     <Tab>Wish List</Tab>
//                 </TabList>

//                 <TabPanel>
//                     <ListedReadList sortingType={sortingType} />
//                     </TabPanel>
//                     <TabPanel>
//                     <ListedWishList sortingType={sortingType} />
//                 </TabPanel>
//             </Tabs>
//         </div>
//     );
// };

// export default Books;