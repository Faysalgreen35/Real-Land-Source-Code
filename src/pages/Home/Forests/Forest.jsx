 

import { PropTypes } from 'prop-types';
import { CiBookmark, CiLocationOn, CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
// import { FaFireAlt } from 'react-icons/fa';

const Forest = ({ agricultural }) => {

    const { estate_title, id, description, price, status, area, location, facilities, image_url } = agricultural;

    return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-300">

            <div className="relative">
                <img className="w-full h-48 object-cover object-center" src={image_url} alt={estate_title} />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white py-2 px-4 flex">
                    <p className="text-lg font-semibold flex">{price} </p>
                    <p className="text-lg font-semibold flex"><span className='ml-44'><CiBookmark></CiBookmark></span></p>
                    <p className="text-lg font-semibold flex"><span className='ml-8'><CiSearch></CiSearch></span></p>
                </div>
            </div>
            <div className="px-6 py-4  border-b-2">
                <h2 className="font-semibold text-xl mb-2">{estate_title}</h2>
                <p className="text-gray-700 text-base mb-4">{description}</p>
                <div className="flex justify-between items-center mb-2  border-b-2">
                    <span className='font-playfair font-bold'>Status:</span>
                    <p className={`text-lg font-semibold ${status === 'sale' ? 'text-green-500' : 'text-red-500'}`}> {status}</p>
                </div>
                <div className="flex justify-between items-center mb-2 border-b-2">
                    <p className="text-gray-70 mb-4">Area: {area}</p>
                    <p className="text-gray-700 flex items-center mb-4"><span><CiLocationOn></CiLocationOn></span> Location: {location}</p>
                </div>
                <div className="flex flex-wrap  mb-4">
                    <p className="text-gray-700 font-bold font-inter ">Facilities:</p>
                    <div className='flex'>

                        {facilities.map((facility, index) => (
                            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-2 mt-1 border-b-2">{facility}</span>
                        ))}
                    </div>
                </div>
            </div>
            <Link className="text-blue-500" to={`/forest/${id}`}>
                <div className="px-6 pt-4 pb-2">

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View Property
                    </button>
                </div>

            </Link>

        </div>
    );
};

export default Forest;


Forest.propTypes = {
    agricultural: PropTypes.func,

}