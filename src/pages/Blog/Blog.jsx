


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
        });
    }, []);

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <Helmet>
                <title>Real Land |Blog</title>
            </Helmet>
            <div className="mb-8" data-aos="fade-up">
                <div className="card card-compact w-full   bg-base-100 shadow-xl">
                    <figure><img src="https://media.istockphoto.com/id/1148812518/photo/concept-of-selling-a-house-a-hand-is-holding-a-model-house-above-green-meadow.jpg?s=612x612&w=0&k=20&c=cz8FLYjnb18uEE-C3o8_XHfx1fCJB3YnnbFZK3Gv0jE=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Buying a Land!</h2>
                        <p>There are cracks in the foundation. Nothing structural. Nothing that’s going to threaten the stability of the home, but they’re there. Nooks, crannies and holes through which seeps an invisible threat. Colorless, odorless and undetectable by your average human, it is nonetheless the second leading cause of lung cancer in the United States.

                            Radon gas – even the name sounds ominous, evoking images of radiation and nuclear devastation. Radon gas is created when uranium in the soil decays. The gas then seeps through any access point into a home. Common entry points are cracks in the foundation, poorly sealed pipes, drainage or any other loose point. Once in the home, the gas can collect in certain areas – especially basements and other low-lying, closed areas – and build up over time to dangerous levels. The Environmental Protection Agency of the US Government has set a threshold of 4 pico curies per liter as the safe level. As humans are exposed to the gas over a period of years, it can have a significant and detrimental effect.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                 
            </div>

            <div className="mb-8" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-6">Related Posts</h2>
                {/* Content for Related Posts section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-6 font-playfair" >
                        <img src="https://media.istockphoto.com/id/1205274326/photo/male-hand-showing-offering-a-new-dream-house-at-the-empty-field-with-copy-space.jpg?s=612x612&w=0&k=20&c=FoSq0uugQxhoCcML1pCdrXAuLzKHosgQXz4w4Z6nT3Q=" alt="" />
                        <h3 className="text-xl font-bold mb-2">Golden Harvest Farm </h3>
                        <p className="text-gray-700 mb-4">Highly productive farm with fertile fields and modern agricultural infrastructure...</p>
                        <a href="#" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 font-inter">
                        <img src="https://media.istockphoto.com/id/958326808/photo/house-project-on-the-meadow-concept-of-dreams-about-a-new-home-contours-of-the-house-in-3d-on.jpg?s=612x612&w=0&k=20&c=ByISs4wcg4NE5SpTbF9E9UfRZr5V8LgQoZZHikDm0UE=" alt="" />
                        <h3 className="text-xl font-semibold mb-2">Misty Pines Forest Reserve Post </h3>
                        <p className="text-gray-700 mb-4">Scenic forest reserve with misty mornings and breathtaking vistas of rolling hills....</p>
                        <a href="#" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <img src="https://media.istockphoto.com/id/473874474/photo/hand-hold-house.jpg?s=612x612&w=0&k=20&c=xMcQ9KpeEom4FzqH6UrTyGQ6BPgE8NU70S85KEbrFfs=" alt="" />
                        <h3 className="text-xl font-semibold mb-2">Sunset Vineyard Estates Post </h3>
                        <p className="text-gray-700 mb-4">Stunning vineyard estate with meticulously tended grapevines and a luxurious winery...</p>
                        <a href="#" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-6">Leave a Reply</h2>
                {/* Content for Leave a Reply section */}
                <form className='bg-gray-200 px-12 py-12 shadow-2xl'>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name:</label>
                        <input type="text" id="name" name="name" className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input type="email" id="email" name="email" className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700">Message:</label>
                        <textarea id="message" name="message" rows="4" className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Blog;
