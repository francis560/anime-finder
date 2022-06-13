import React, { Fragment } from "react";


const Info = ({animeInfo}) => {
    return (
        <Fragment>

            <h2 className="text-center md:text-left text-white font-bold text-3xl">{animeInfo.title}</h2>

            <div className="flex md:justify-start justify-center items-center mt-5">
                <p className="text-gray-50 bg-gray-800 py-1 px-2 mr-1 rounded-md font-medium">{animeInfo.title_english}</p>
                <p className="text-gray-50 bg-gray-800 py-1 px-2 ml-2 rounded-md font-medium">{animeInfo.title_japanese}</p>
            </div>

            <div className="flex md:flex-row flex-col my-8 md:mt-5">
                <div className="flex md:mx-0 md:mb-0 mx-auto mb-4 md:mr-4">
                    <p className="text-white font-bold my-auto mr-2">Studios:</p>

                    {
                        animeInfo.studios.map((data, key) => 
                            <p key={key} className="text-gray-50 bg-gray-800 py-1 px-2 mr-1 rounded-md font-medium">{data.name}</p>
                        )
                    }
                </div>

                <div className="flex md:mx-0 mx-auto">
                    <p className="text-white font-bold my-auto md:mr-2">Demographics:</p>

                    {
                        animeInfo.demographics.map((data, key) => 
                            <p key={key} className="text-gray-50 bg-gray-800 py-1 px-2 mr-1 rounded-md font-medium">{data.name}</p>
                        )
                    }
                </div>
            </div>

            <div className="flex md:justify-start justify-center items-center mt-4">
                <p className="text-white font-bold my-auto mr-2">Themes:</p>

                {
                    animeInfo.themes.map((data, key) => 
                        <p key={key} className="text-gray-50 bg-gray-800 py-1 px-2 mr-2 rounded-md font-medium">{data.name}</p>
                    )
                }
            </div>
            
            <div className="flex md:flex-row flex-col mt-5">
                <div className="flex md:mx-0 md:mb-0 mx-auto mb-4 md:mr-4">
                    <p className="text-white font-bold my-auto mr-2">Score:</p>

                    <p className="text-gray-50 bg-gray-800 py-1 px-2 mr-1 rounded-md font-medium">{animeInfo.score || 'not score, yet'}</p>
                </div>

                <div className="flex md:mx-0 mx-auto">
                    <p className="text-white font-bold my-auto mr-2">Aired:</p>

                    <p className="text-gray-50 bg-gray-800 py-1 px-2 mr-1 rounded-md font-medium">{animeInfo.aired.string}</p>
                </div>
            </div>
            
            <div className="flex mt-10">
                {
                    animeInfo.airing 
                    ? 
                    <div className="mx-auto md:mx-0 md:mr-3 bg-gradient-to-r from-green-500 to-green-600 rounded-md py-2 px-6 text-center">
                        <p className="text-white font-medium"><i className="fas fa-tv mr-2"></i>{animeInfo.status}</p>
                    </div>
                    : 
                    <div className="mx-auto md:mx-0 md:mr-3 bg-gradient-to-r from-red-500 to-red-600 rounded-md py-2 px-6 text-center">
                        <p className="text-white font-medium"><i className="fas fa-tv mr-2"></i>{animeInfo.status}</p>
                    </div>
                }

                {/* <button className="rounded-md border-2 border-green-500 text-green-500 font-medium py-2 px-6"><i class="fas fa-heart mr-2"></i>Add to favorites</button> */}
                {/* <button className="rounded-md bg-gradient-to-r from-green-500 to-green-600 text-white font-medium py-2 px-6"><i class="fas fa-heart mr-2"></i>Add to favorites</button> */}
            </div>


        </Fragment>
    );
}


export default Info;