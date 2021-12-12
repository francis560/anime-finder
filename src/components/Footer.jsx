import React, { Fragment } from "react";


import Logo from "./Logo";


const Footer = () => {
    return (
        <Fragment>
            
            <footer className="bg-gray-800 py-6">
                <div className="flex justify-center items-center flex-col">
                    <Logo />
                    <p className="font-bold mt-5 text-white">© Anime Finder, 2021</p>
                </div>
            </footer>

        </Fragment>
    );
}


export default Footer;