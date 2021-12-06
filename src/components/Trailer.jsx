import React, { Fragment } from "react";


const Trailer = ({animeInfo}) => {
    return (
        <Fragment>
            
            {
                animeInfo.trailer_url === null
                ?
                null
                :
                <div className="my-10 text-center">
                    <h2 className="font-bold text-gray-800 sm:text-3xl md:text-2xl text-2xl">Trailer</h2>

                    <div className="py-10">
                        <iframe title={animeInfo.title} className="mx-auto w-full px-5 h-80 sm:w-4/5 md:w-3/4 md:96 lg:w-2/4 rounded-md" src={animeInfo.trailer_url}></iframe>
                    </div>
                </div>
            }
        
        </Fragment>
    );
}


export default Trailer;