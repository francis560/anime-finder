import React, { Fragment } from "react";


const Header = () => {
    return (
        <Fragment>

            <div className="h-96 bg-gradient-to-r from-blue-600 to-indigo-700 flex justify-center items-center">
                
                <div className="text-center px-20 text-2xl sm:text-3xl font-bold text-white">
                    <p>Welcome to the best site to keep you informed about your favorite anime.</p>
                </div>

            </div>

        </Fragment>
    );
}


export default Header;