import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {


    const [storecall, setStoreCall] = useState([]);
    const [storeText, setStoreText] = useState([]);
    const [storeVideo, setStoreVideo] = useState([]);


    const handleCall = (friend) => {
        setStoreCall([...storecall, friend]);
        toast.success(`Calling ${friend.name}...`);
    }

    const handleText = (friend) => {
        setStoreText([...storeText, friend]);
        toast.success(`Texting  ${friend.name}...`);
    }

    const handleVideo = (friend) => {
        setStoreVideo([...storeVideo, friend]);
        toast.success(`Video calling ${friend.name}...`);
    }

    const data = {
        storecall, setStoreCall, storeText, setStoreText, storeVideo, setStoreVideo, handleCall, handleText, handleVideo
    };

    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendProvider;