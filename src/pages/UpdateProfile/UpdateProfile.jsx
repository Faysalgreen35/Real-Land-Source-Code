 
import { useContext, useState } from "react"; 
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName || "");
    const [photoURL, setPhotoURL] = useState(user.photoURL || "");
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
        <div className="md:max-w-2xl p-12 mx-auto mt-8 bg-gray-400  shadow-xl mb-12">
            <Helmet>
            <title className="font-jacquard">Real Land | UpdateProfile</title>
            </Helmet>
    <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
    <form>
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name:
            </label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="photoURL" className="block text-gray-700 font-bold mb-2">
                Photo URL:
            </label>
            <input
                id="photoURL"
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            />
        </div>
        <button
            type="button"
            onClick={handleSaveChanges}
            disabled={saving}
            className={`bg-blue-500 text-white mb-12 px-4 py-2 rounded focus:outline-none ${
                saving ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
            {saving ? "Saving..." : "Save Changes"}
        </button>
    </form>
</div>

    );
};

export default UpdateProfile;
