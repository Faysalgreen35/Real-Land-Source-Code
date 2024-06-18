

const NewsLetter = () => {
    return (
        <div>
            <div className="diff aspect-[16/9]">
                <div className="diff-item-1">
                    <div className="bg-primary text-primary-content text-5xl font-black grid place-content-center">Subscribe To Our Newsletter!</div>
                </div>
                <div className="diff-item-2">
                    <div className="bg-base-200 text-5xl font-black grid place-content-center">Subscribe To Our Newsletter!</div>
                    
                </div>
                <div className="diff-resizer">
                
                </div>
                 
            </div>
            
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/mG6jkSZ/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Build a Perfect Website with </h1>
                        <h1 className="mb-5 text-4xl font-bold">Real Land </h1>
                        <button className="btn btn-primary">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;