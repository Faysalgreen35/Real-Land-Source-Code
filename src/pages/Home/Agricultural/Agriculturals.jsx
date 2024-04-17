import { useEffect, useState } from "react";
import Agricultural from "./Agricultural/Agricultural";
import { PropTypes } from 'prop-types';
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

 

const Agriculturals = () => {

    
    const [agriculturals, setAgriculturals]= useState([])

    useEffect(()=>{
        fetch('agricultural.json')
        .then(response => response.json())
        .then(data => setAgriculturals(data))
    }, [])
    return (
        <div className='  md:max-w-6xl mx-auto '>
        <div className='text-center'>
        <h3 className='text-4xl m-8 font-mono'>Agricultural Land</h3>
       
        <div className="flex   ">
            <button className="btn-green-500  btn">Agricultural Land News</button>
            <Marquee  pauseOnHover="true" speed={200}> 
                <Link className="mr-12" to='/'>
                Unlock the potential of agricultural land with our expert services. From soil enrichment to precision farming, we maximize yields sustainably. Boost productivity and profitability today!

                </Link>
                <Link className="mr-12" to='/'>
                Agricultural land serves as the bedrock of food production, playing a pivotal role in sustaining human life and supporting ecosystems worldwide. 

                </Link>
                <Link className="mr-12" to='/'>
                Comprising vast expanses of fields, pastures, and orchards, agricultural land facilitates the cultivation of crops and the rearing of livestock, essential for meeting the dietary needs of populations globally.

                </Link>
                <Link className="mr-12" to='/'>
                Beyond mere sustenance, agricultural land represents a nexus of environmental, economic, and social significance. It acts as a carbon sink, sequestering atmospheric carbon dioxide and mitigating climate change. Additionally, it fosters biodiversity, providing habitats for various plant and animal species crucial for ecosystem stability.

                </Link>
            </Marquee>
        </div>

        
        </div>
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12 mx-auto'>
       
       { agriculturals.slice(0,3).map((agricultural, idx) => <Agricultural
        key={idx}
        agricultural={agricultural}
        
        ></Agricultural>)}
       </div>
    </div>
    );
};

export default Agriculturals;

Agricultural.propTypes = {
    agricultural:PropTypes.obj,
     
}