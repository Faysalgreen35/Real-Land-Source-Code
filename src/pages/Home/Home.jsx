import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

 

const Home = () => {
    return (
        <div>
             <Helmet>
            <title className="font-jacquard">Real Land | Home</title>
            </Helmet>
            <Banner></Banner>
            <h2 className="font-jacquard text-5xl font-bold">This is our Home</h2>
        </div>
    );
};

export default Home;