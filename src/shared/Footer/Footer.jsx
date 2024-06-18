import { FaFacebook, FaYoutube } from 'react-icons/fa';
import Logo from '../../../src/assets/house.png'


import { FaGoogle } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gray-800   text-white ">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Properties</h6>
          <a className="link link-hover">Agricultural Land</a>
          <a className="link link-hover">Ranches</a>
          <a className="link link-hover">Farms</a>
          <a className="link link-hover">Vineyards</a>
          <a className="link link-hover">Forests</a>
          <a className="link link-hover">Plantations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t  bg-gray-800   text-white  border-base-300">
        <aside className="items-center grid-flow-col">

          <p className='flex'><span><img className='w-12 h-12' src={Logo} alt="" /></span>
            Real Land Industries Ltd. <br /> Providing reliable tech since
            1992
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a className='text-2xl'>
              <FaGoogle></FaGoogle>
            </a>
            <a className='text-2xl'>
              <FaYoutube></FaYoutube>
            </a>
            <a className='text-2xl'>
              <FaFacebook></FaFacebook>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
 