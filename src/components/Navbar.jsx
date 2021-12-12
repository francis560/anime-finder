import React, { Fragment } from "react";


import Logo from "./Logo";


const Navbar = () => {
    return (
        <Fragment>

            <nav className="bg-gray-800">

                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="mx-auto flex-shrink-0 flex items-center">
                                <Logo />
                            </div>
                        </div>

                    </div>
                </div>

            </nav>


        </Fragment>
    );
}


export default Navbar;