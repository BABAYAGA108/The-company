import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Children } from "react";
import image1 from "../../assets/images/hello and welcome.jpeg";
import image2 from "../../assets/images/number 1.jpeg";
import image3 from "../../assets/images/number 2.jpeg";
import image4 from "../../assets/images/number 3.jpeg";
import image5 from "../../assets/images/number 4.jpeg";
const imagelist={
  
  
}
const Hero =()=>{
  return (
    <section className="flex-1 mr:28 md:text-left mt:0 relative"
     data-aos="fade-up"
     data-aos-duration="1000">
      <div>
        <div>
          <p className="text-center text-2xl md:text-3xl font-bold mb-4">
            <h1 className="">about myself</h1>
          </p>
        </div>
        <div>
          <h1 className="text-x1 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            frontend developer    
          </h1>

        </div>
      </div>
    </section>
  );
}















export default    Hero;