import React, { Fragment } from "react";


const Navbar = () => {
    return (
        <Fragment>

            <nav className="bg-gray-800">

                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                            </div>
                        </div>
                        
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                                <span className="sr-only">View notifications</span>

                                <i className="far fa-heart text-xl"></i>
                            </button>
                        </div>

                    </div>
                </div>

            </nav>


        </Fragment>
    );
}


export default Navbar;