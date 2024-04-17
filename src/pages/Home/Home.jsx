import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Agriculturals from "./Agricultural/Agriculturals";
import Farms from "./Farms/Farms";
import Forests from "./Forests/Forests";
import Plantations from "./Plantations/Plantations";
import Ranches from "./Ranches/Ranches";
import Vineyards from "./Vineyards/Vineyards";
import NewsLetter from "./NewsLetter/NewsLetter";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title className="font-jacquard">Real Land | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="mt-12 text-center mx-auto  ">
                <h1 className="text-center font-inter font-bold text-5xl">Discover The Latest Properties</h1>
                <p className="text-center font-inter font-bold text-gray-400 mt-12 text-2xl">Find a property that is  right for you.</p>
            </div>
            <div role="tablist" className="hidden lg:block tabs lg:tabs-lifted lg:tabs-lg mt-12 uppercase font-bold font-playfair text-center lg:px-24">

                <a role="tab" className="tab tab-active">agricultural land</a>
                <a role="tab" className="tab ">ranches</a>
                <a role="tab" className="tab tab-active">farms</a>
                <a role="tab" className="tab ">vineyards</a>
                <a role="tab" className="tab tab-active">forests</a>
                <a role="tab" className="tab">Plantations</a>
            </div>
            <Agriculturals></Agriculturals>
            <Farms></Farms>
            <Forests></Forests>
            <Plantations></Plantations>
            <Ranches></Ranches>
            <Vineyards></Vineyards>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;