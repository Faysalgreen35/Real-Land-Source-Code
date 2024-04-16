import { useContext } from "react";  
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
    const { user } = useContext(AuthContext); 
     

    

    return (
       
        <div className="md:max-w-2xl mx-auto mt-8 p-12 text-center bg-gray-300 shadow-xl mb-12 ">
            <Helmet>
            <title className="font-jacquard">Real Land | UserProfile</title>
            </Helmet>
        <h2 className="text-2xl font-bold mb-4 font-playfair ">User Profile</h2>
        <div className="mb-4">
             
             <img src={user.photoURL} alt="User's Profile" className=" " />
         </div>
        <div className="mb-4">
            <p className="font-bold">Name:</p>
            <p>{user.displayName}</p>
        </div>
       
        <div className="mb-4">
            <p className="font-bold">Email:</p>
            <p>{user.email}</p>
        </div>
         
    </div>
    );
};

export default UserProfile;
