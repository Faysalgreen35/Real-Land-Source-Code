import { Link, NavLink } from "react-router-dom";
import Logo from '../../../src/assets/house.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    console.log('wait for usersss')

    const handleSigOut = () => {
        logout()
            .then()
            .catch()
    }

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        {
            user && <>
                <li><NavLink to='/updateprofile'>Update Profile</NavLink></li>
                <li><NavLink to='/userprofile'>User Profile</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <Link to='/'>
                    <div className="flex">
                        <img className="w-10" src={Logo} alt="" />
                        <a href="/" className="btn btn-ghost text-4xl font-jacquard">Real Land</a>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 z-50">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div className="flex">
                        <div className="dropdown dropdown-left  dropdown-hover">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="User Avatar" src={user.photoURL} />
                                </div>
                            </div>
                           
                              <ul tabIndex={0} className="mt-12 lg:z-[1] p-2 shadow menu menu-sm dropdown-content  bg-base-100 rounded-box w-64 lg:w-80 overflow-hidden ">
                                <li>
                                    <a href="/userprofile" className="justify-between text-green-500">
                                        User Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a><span className="font-bold">Name: </span>{user.displayName}</a></li>
                                <li><a><span className="font-bold">Email: </span> {user.email}</a></li>
                            </ul>
                        </div>
                        <button onClick={handleSigOut} className="btn btn-primary">Sign Out</button>
                    </div>
                    :
                    <Link to='/login'>
                        <button className="btn btn-primary">Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;

// import { Link, NavLink } from "react-router-dom";
// import Logo from '../../../src/assets/house.png'
// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";

// const Navbar = () => {
//     const { user, logout } = useContext(AuthContext);
//     console.log('wait for usersss',)

//     const handleSigOut = () => {
//         logout()
//             .then()
//             .catch()
//     }

//     const navlinks = <>
//         <li><NavLink to='/'>Home</NavLink></li>




//         <li><NavLink to='/blog'>Blog</NavLink></li>
        
//         {
//             user && <>
//                 <li><NavLink to='/updateprofile'>Update Profile</NavLink></li>

//                 <li><NavLink to='/userprofile'>User profile</NavLink></li>

//             </>
//         }

//     </>
//     return (
//         <div className="navbar bg-base-100  z-50">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </div>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                         {navlinks}
//                     </ul>
//                 </div>
//                <Link to='/'>
//                <div className="flex">
//                     <img className="w-10" src={Logo} alt="" />
//                     <a href="/"  className="btn btn-ghost text-4xl font-jacquard">Real Land</a>
                    
//                 </div>
//                </Link>
//             </div>
//             <div className="navbar-center hidden lg:flex z-50">
//                 <ul className="menu menu-horizontal px-1 z-50">
//                     {navlinks}
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                     <div className="w-10 rounded-full">

//                     </div>
//                 </div> */}
//                 {
//                     user ?
//                         <div className="  flex">

//                             <div className="  dropdown  dropdown-hover">
//                                 <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                                     <div className="w-10 rounded-full">
//                                         <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
//                                     </div>
//                                 </div>
//                                 <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52  ">
//                                     <li>
//                                         <a href="/userprofile" className="justify-between text-green-500">
//                                             User Profile


//                                             <span className="badge">New</span>
//                                         </a>
//                                     </li>
//                                     <li><a>Name: {user.displayName}</a></li>
//                                     <li><a> Email: {user.email}</a></li>
//                                 </ul>

//                             </div>
//                             <button onClick={handleSigOut} className="btn btn-primary"> Sign Out</button>
//                         </div>

//                         :
//                         <Link to='/login'>
//                             <button className="btn btn-primary">Login</button>
//                         </Link>
//                 }


//             </div>
//         </div>
//     );
// };

// export default Navbar;