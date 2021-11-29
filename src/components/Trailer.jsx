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
                    <h2 className="font-bold text-gray-800 text-2xl">Trailer</h2>

                    <div className="py-10">
                        <iframe title={animeInfo.title} className="mx-auto w-2/4 h-96 rounded-md" src={animeInfo.trailer_url}></iframe>
                    </div>
                </div>
            }
        
        </Fragment>
    );
}


export default Trailer;