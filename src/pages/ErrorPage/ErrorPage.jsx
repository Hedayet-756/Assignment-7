import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-4">

            <div className="text-center max-w-md">

                {/* Big 404 */}
                <h1 className="text-8xl font-extrabold text-indigo-600 drop-shadow-lg">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl font-semibold mt-4 text-gray-800">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="text-gray-500 mt-2">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    <Link
                        to="/"
                        className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300 shadow-md"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300"
                    >
                        Go Back
                    </button>
                </div>

                {/* Decorative blur circles */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-300 rounded-full blur-3xl opacity-30"></div>

            </div>
        </div>
    );
};

export default ErrorPage;