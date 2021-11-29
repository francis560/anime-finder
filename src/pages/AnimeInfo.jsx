import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";


import Info from "../components/Info";
import Synopsis from "../components/Synopsis";
import Trailer from "../components/Trailer";
import Promo from "../components/Promo";


const AnimeInfo = () => {

    useEffect(() => {
        Axios.get(`https://api.jikan.moe/v3/anime/${id}`).then(res => setAnimeInfo(res.data)).catch(err => console.error(err));
    }, []);

    const [animeInfo, setAnimeInfo] = useState({studios: [], genres: [], demographics: [], themes: [], aired: []});

    let { id } = useParams();

    return (
        <div>
            
            <div className="flex py-10 px-16 bg-gradient-to-r from-blue-600 to-indigo-700">

                <div className="p-2 bg-white rounded-md">
                    <img className="rounded-md" width="220px" src={animeInfo.image_url} alt="Portada" />
                </div>

                <div className="ml-12">
                    <Info animeInfo={animeInfo} />
                </div>

            </div>

            <div className="py-4">
                <div className="bg-white text-center mx-auto p-4 rounded-md w-4/5">
                    <Synopsis animeInfo={animeInfo} />
                </div>
            </div>

            <Trailer animeInfo={animeInfo} />
            
            <Promo id={id} />

        </div>
    );
}


export default AnimeInfo;