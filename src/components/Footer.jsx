import React, { Fragment } from "react";


const Footer = () => {
    return (
        <Fragment>
            
            <footer className="bg-gray-800 py-6">
                <div className="flex justify-center items-center flex-col">
                    <img className="block lg:block h-8 mb-5" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                    <p className="font-bold text-white">© Anime Finder, 2021</p>
                </div>
            </footer>

        </Fragment>
    );
}


export default Footer;