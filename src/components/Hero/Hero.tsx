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
    <section
      className="flex-1 mr:28 md:text-left mt:0 relative"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
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

          <p className="text-center text-lg md:text-xl mb-6">
            <a href="">
              <img
                src={image1}
                alt="Image 1"
                className="w-40 h-48 h object-cover mx-auto mb-4"
              />
            </a>
            I am a frontend developer with a passion for creating beautiful and
            functional user interfaces. I have experience in HTML, CSS, and
            JavaScript, react, and and I am always eager to learn new
            technologies and improve my skills.
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://x.com/kalu_honour"
              className="text-2xl text-blue-500 hover:text-blue-700 transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              className="text-2xl text-pink-500 hover:text-pink-700 transition-colors"
              aria-label="Instagram"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              className="text-2xl text-blue-500 hover:text-blue-700 transition-colors"
              aria-label="Twitter"
            >
              <MdAttachEmail />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              className="text-2xl text-blue-500 hover:text-blue-700 transition-colors"
              aria-label="Twitter"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              className="text-2xl text-blue-500 hover:text-blue-700 transition-colors"
              aria-label="Twitter"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}















export default    Hero;