import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";


import Spinner from "./Spinner";


const Content = () => {

    useEffect(() => {
        Axios.get("https://api.jikan.moe/v4/top/anime").then(res => {
            setAnimeList(res.data.top);
            setLoading(false);
        }).catch(err => console.error(err));
    }, []);

    const animeSearch = (event) => {
        if (event.key === "Enter") {
            setLoading(true);
            Axios.get(`https://api.jikan.moe/v4/anime?q=${animeName}`).then(res => {
                setAnimeList(res.data.results);
                setLoading(false);
            }).catch(err => console.error(err));
        }
    }
    
    const [animeList, setAnimeList] = useState([]);
    const [animeName, setAnimeName] = useState('');
    const [loading, setLoading] = useState(true);

    return (
        <Fragment>

            <div className="flex justify-center items-center">
                <input onChange={(event) => setAnimeName(event.target.value)} onKeyPress={(event) => animeSearch(event)} className="p-4 w-4/5 sm:w-3/5 focus:outline-none filter drop-shadow-lg transform -translate-y-7 rounded-md" placeholder="Search" autoComplete="false" type="text" />
            </div>

            {
                loading 
                ?
                <Spinner /> 
                :
                <div className="flex flex-wrap items-start justify-center items-center my-14">
                    
                    {
                        animeList.map((data, key) => 
                            <div
                                key={key}
                                className="w-2/5 px-4 py-5 sm:w-3/12 lg:w-1/6 m-3 text-center rounded-md border-2 border-gray-200"
                                style={{ minHeight: '350px' }}>
                                <div className="">
                                    <Link to={`/anime/${data.mal_id}`}>
                                        <div  style={{ minHeight: '190px', display: 'flex', alignItems:'center', justifyContent:'center' }}>
                                            <img
                                            loading="lazy"
                                            className="mx-auto w-3/4 rounded-md"
                                            src={data.image_url}
                                            alt={`Portada ${data.title}`} />
                                        </div>
                                    </Link>
                                    <p className="line-clamp my-5 font-medium text-gray-700" style={{minHeight:"50px"}}>{data.title}</p>
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
