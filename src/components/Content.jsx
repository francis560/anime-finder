import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";


import Spinner from "./Spinner";


const Content = () => {

    useEffect(() => {
        Axios.get("https://api.jikan.moe/v3/top/anime/1/upcoming").then(res => {
            setLoading(false);
            setAnimeList(res.data.top);
        }).catch(err => console.error(err));
    }, []);

    const animeSearch = (event) => {
        if (event.key === "Enter") {
            setLoading(true);
            Axios.get(`https://api.jikan.moe/v3/search/anime?q=${animeName}`).then(res => {
                setLoading(false);
                setAnimeList(res.data.results);
            }).catch(err => console.error(err));
        }
    }
    
    const [animeList, setAnimeList] = useState([]);
    const [animeName, setAnimeName] = useState('');
    const [loading, setLoading] = useState(true);

    return (
        <Fragment>

            <div className="flex justify-center items-center">
                <input onChange={(event) => setAnimeName(event.target.value)} onKeyPress={(event) => animeSearch(event)} className="p-4 w-1/2 focus:outline-none filter drop-shadow-lg transform -translate-y-7 rounded-md" placeholder="Search" autoComplete="false" type="text" />
            </div>

            {
                loading 
                ?
                <Spinner /> 
                :
                <div className="grid items-start grid-cols-6 gap-8 gap-y-14 p-16 my-14">
                    
                    {
                        animeList.map((data, key) => 
                            <div key={key} className="px-6 text-center rounded-md border-2 border-gray-200">
                                <div className="transform -translate-y-8">
                                    <img className="rounded-md" src={data.image_url} alt="Portada" />
                                    <p className="line-clamp my-5 font-medium text-gray-700">{data.title}</p>
                                    <Link to={`/anime/${data.mal_id}`} className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:opacity-80 font-medium py-2 px-10 rounded-md text-white">View</Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            }

        </Fragment>
    );
}


export default Content;