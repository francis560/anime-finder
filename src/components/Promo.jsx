import React, { Fragment, useState, useEffect } from "react";
import Slider from "react-slick";
import Axios from "axios";


const Promo = ({id}) => {

    useEffect(() => {
        Axios.get(`https://api.jikan.moe/v3/anime/${id}/videos`).then(res => setPromoVideo(res.data.promo)).catch(err => console.error(err));
    }, []);

    const [promoVideo, setPromoVideo] = useState([]);
    
    var slideCount = 3;
    if(promoVideo.length === 2) {
        slideCount = 2;
    } else if (promoVideo.length === 1) {
        slideCount = 1;
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "25px",
        lazyLoad: "ondemand",
        slidesToShow: slideCount,
        dots: false,
        speed: 500,
        responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "0px"
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: slideCount,
                slidesToScroll: slideCount,
                centerPadding: "0px",
                initialSlide: slideCount
              }
            }
        ]
    };

    return (
        <Fragment>

            {
                promoVideo.length < 1
                ?
                null
                :
                <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 py-8">
                
                    <p className="font-bold text-white text-2xl">Promo</p>

                    <div className="py-8 px-8">
                        
                        <Slider {...settings}>
                            
                            {
                                promoVideo.map((data, key) => 
                                    <div key={key} className="sm:p-2">
                                        <iframe title={data.title} className="mx-auto rounded-md w-full h-64" src={data.video_url}></iframe>
                                    </div>
                                )
                            }

                        </Slider>

                    </div>
                    
                </div>
            }


        </Fragment>
    );
}


export default Promo;