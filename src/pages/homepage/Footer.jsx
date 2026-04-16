import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaI, FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col space-y-5 justify-center items-center text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">KeenKeeper</h1>
                    <p className="text-gray-200 text-sm">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <h4 className="text-lg md:text-xl font-bold">Social Links</h4>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-[#244D3F] h over:bg-[#244D3F] hover:text-white transition-all cursor-pointer border border-gray-100">
                            <TbBrandInstagramFilled />
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-[#244D3F] hover:bg-[#244D3F] hover:text-white transition-all cursor-pointer border border-gray-100">
                            <FaSquareFacebook />
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-[#244D3F] hover:bg-[#244D3F] hover:text-white transition-all cursor-pointer border border-gray-100">
                            <FaXTwitter />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-400 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} KeenKeeper. All rights reserved.
                        </p>
                        <div className="flex gap-8">
                            <span className="text-gray-400 hover:text-[#244D3F] cursor-pointer">Privacy Policy</span>
                            <span className="text-gray-400 hover:text-[#244D3F] cursor-pointer">Terms of Service</span>
                            <span className="text-gray-400 hover:text-[#244D3F] cursor-pointer">Cookies</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;