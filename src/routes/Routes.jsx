import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import Homepage from '../pages/homepage/Homepage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AllFriends from '../pages/friends/AllFriends';
import FriendDetails from '../pages/friendDetails/FriendDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "/friends",
                element: <AllFriends />,
            },
            {
                path: "/friendDetails/:id",
                element: <FriendDetails />,
                loader: () => fetch('/friends.json')
            },
        ],
        errorElement: <ErrorPage />
    },
    // {
    //     path: "/books",
    //     element: <Books />
    // }
])