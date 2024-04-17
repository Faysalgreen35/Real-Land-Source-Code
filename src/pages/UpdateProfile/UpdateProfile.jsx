
// import { useContext, useState } from "react";
// import { updateProfile } from "firebase/auth";
// import { AuthContext } from "../../providers/AuthProvider";
// import { Helmet } from "react-helmet-async";

// const UpdateProfile = () => {
//     const { user } = useContext(AuthContext);
//     const [name, setName] = useState(user.displayName || "");
//     const [photoURL, setPhotoURL] = useState(user.photoURL || "");
//     const [saving, setSaving] = useState(false);

//     const handleSaveChanges = async () => {
//         try {
//             setSaving(true);
//             await updateProfile(user, { displayName: name, photoURL: photoURL });
//             alert("Profile updated successfully!");
//         } catch (error) {
//             console.error("Error updating profile:", error);
//             alert("Failed to update profile. Please try again.");
//         } finally {
//             setSaving(false);
//         }
//     };

//     return (
//         // <div className="md:max-w-2xl p-12 mx-auto mt-8 bg-gray-400  shadow-xl mb-12">
//         <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>

//             <Helmet>
//                 <title className="font-jacquard">Real Land | UpdateProfile</title>
//             </Helmet>
            
//             <form className="bg-base-200 px-12">
//             <h2 className="text-2xl font-bold mb-4 bg-base-200 px-12 py-4">Update Profile</h2>
//                 <div className="mb-4">
//                     <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
//                         Name:
//                     </label>
//                     <input
//                         id="name"
//                         type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className="border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="photoURL" className="block text-gray-700 font-bold mb-2">
//                         Photo URL:
//                     </label>
//                     <input
//                         id="photoURL"
//                         type="text"
//                         value={photoURL}
//                         onChange={(e) => setPhotoURL(e.target.value)}
//                         className="border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
//                     />
//                 </div>
//                 <button
//                     type="button"
//                     onClick={handleSaveChanges}
//                     disabled={saving}
//                     className={`bg-blue-500 text-white mb-12 px-4 py-2 rounded focus:outline-none ${saving ? "opacity-50 cursor-not-allowed" : ""
//                         }`}
//                 >
//                     {saving ? "Saving..." : "Save Changes"}
//                 </button>
//             </form>
//         </div>

//     );
// };
 

// export default UpdateProfile;

import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName || "");
    const [photoURL, setPhotoURL] = useState(user.photoURL || "");
    const [nameEditing, setNameEditing] = useState(false);
    const [photoURLEditing, setPhotoURLEditing] = useState(false);
    const [saving, setSaving] = useState(false);

    const handleSaveChanges = async () => {
        try {
            setSaving(true);
            await updateProfile(user, { displayName: name, photoURL: photoURL });
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    return (
        // <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
           
        <div className="hero min-h-screen bg-base-200 shadow-2xl" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
           
           <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
                <Helmet>
                    <title>Real Land | Update Profile</title>
                </Helmet>
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Update Profile</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            readOnly={!nameEditing}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                            type="button"
                            onClick={() => setNameEditing(!nameEditing)}
                            className="mt-2 w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {nameEditing ? "Done Editing Name" : "Edit Name"}
                        </button>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">Photo URL</label>
                        <input
                            id="photoURL"
                            type="text"
                            value={photoURL}
                            readOnly={!photoURLEditing}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                            type="button"
                            onClick={() => setPhotoURLEditing(!photoURLEditing)}
                            className="mt-2 w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {photoURLEditing ? "Done Editing Photo URL" : "Edit Photo URL"}
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={handleSaveChanges}
                            disabled={saving}
                            className={`w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                                saving ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            }`}
                        >
                            {saving ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
