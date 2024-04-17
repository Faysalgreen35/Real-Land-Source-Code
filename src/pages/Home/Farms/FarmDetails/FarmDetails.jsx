
 

import { CiLocationOn } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";

const FarmDetails = () => {
    const Agricultural = useLoaderData();
    // console.log('news of ', news)
    const { id } = useParams();

    const intNewsId = parseInt(id);
    console.log('news intNewsId of ', intNewsId)

    const agriculturalDetails = Agricultural.find(agriculturalDetails => agriculturalDetails.id === intNewsId);

    // console.log(agriculturalDetails);

    return (
        <div>



            <div className="bg-gray-400">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={agriculturalDetails.image_url} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={agriculturalDetails.image_url} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={agriculturalDetails.image_url} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={agriculturalDetails.image_url} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen  ">
                    <div className="hero-content flex-col  ">

                        <div>
                            <h2 className="  lg:text-5xl font-bold  mb-2"><span>Segment Name:</span> {agriculturalDetails.segment_name}</h2>
                            <h2 className="  lg:text-5xl font-bold  mb-2"><span>Estate Title:  </span>{agriculturalDetails.estate_title}</h2>
                            <p className="text-gray-700  py-6 text-base mb-4">{agriculturalDetails.description}</p>
                            <p className="text-gray-70  lg:text-5xl mb-4"> Area: {agriculturalDetails.area}</p>
                            <p className="text-gray-700 lg:text-5xl flex  items-center mb-4"><span><CiLocationOn></CiLocationOn></span> Location: {agriculturalDetails.location}</p>


                            <div className='flex flex-col lg:flex-row lg:text-5xl'>
                                <p className="text-gray-700 font-bold font-inter ">Facilities:</p>
                                {agriculturalDetails.facilities.map((facility, index) => (
                                    <span key={index} className="inline-block text-2xl bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 ml-2 mt-1 border-b-2">{facility}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default FarmDetails;
