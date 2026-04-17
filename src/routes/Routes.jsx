import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import Homepage from '../pages/homepage/Homepage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import FriendDetails from '../pages/friendDetails/FriendDetails';
import AllFriends from '../pages/friends/AllFriends';
import Friends from '../pages/friends/Friends';
import Charts from '../routes/charts/Charts';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/friends",
                element: <Friends />,
            },
            {
                path: "/charts",
                element: <Charts />,
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