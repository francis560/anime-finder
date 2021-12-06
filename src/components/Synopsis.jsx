import React, { Fragment } from "react";


const Synopsis = ({animeInfo}) => {
    return (
        <Fragment>

            <h2 className="font-bold text-gray-800 text-2xl mb-5">Synopsis</h2>

            <div>
                <div className="flex flex-wrap items-center justify-center">
                    {
                        animeInfo.genres.map((data, key) => 
                            <p key={key} className="text-gray-50 bg-gray-800 py-1 px-4 opacity-60 m-1 rounded-md font-medium">{data.name}</p>
                        )
                    }
                </div>

                <p className="mt-4 text-gray-600 font-medium">{animeInfo.synopsis}</p>
            </div>

        </Fragment>
    );
}


export default Synopsis;