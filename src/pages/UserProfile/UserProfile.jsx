import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const { user } = useContext(AuthContext);




    return (

        <div className="md:max-w-2xl mx-auto mt-8 p-12 text-center bg-gray-300 shadow-xl mb-12 ">
            <Helmet>
                <title className="font-jacquard">Real Land | UserProfile</title>
            </Helmet>
            <h2 className="text-2xl font-bold mb-4 font-playfair ">User Profile</h2>
           

           
            <div className="card card-compact  bg-base-100 shadow-xl lg:w-96  mx-auto">
                <figure><img className="w-full" src={user.photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className="font-mono text-3xl ml-2">Email:</span> {user.email}</h2>
                    <h2 className="card-title"><span className="font-mono text-3xl ml-2">Name:</span> {user.displayName}</h2>
                    
                    <div className="card-actions justify-end">
                    <Link className=" " to='/updateprofile'>
                    <button className="btn btn-primary">Update Now</button>
                    </Link>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default UserProfile;



