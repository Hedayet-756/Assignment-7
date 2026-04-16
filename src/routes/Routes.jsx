import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import Homepage from '../pages/homepage/Homepage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
        ],
        errorElement: <ErrorPage />
    },
    // {
    //     path: "/books",
    //     element: <Books />
    // }
])