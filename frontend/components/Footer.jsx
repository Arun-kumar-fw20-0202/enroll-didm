import Link from "next/link";
import React from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { CiMail } from "react-icons/ci";

const explore = [
  {
    id: 1,
    name: "Wow Talkx",
    redirect: "#",
  },
  {
    id: 2,
    name: "Wow Talk Fellows",
    redirect: "#",
  },
  {
    id: 3,
    name: "Wow Talk Ed",
    redirect: "#",
  },
  {
    id: 4,
    name: "Wow Talk Translators",
    redirect: "#",
  },
  {
    id: 5,
    name: "Wow Talk Institute",
    redirect: "#",
  },
  {
    id: 6,
    name: "The Audacious Project",
    redirect: "#",
  },
  {
    id: 7,
    name: "Wow Talk@work",
    redirect: "#",
  },
  {
    id: 8,
    name: "Podcast",
    redirect: "#",
  },
  {
    id: 9,
    name: "Wow Talk Blog",
    redirect: "#",
  },
  {
    id: 10,
    name: "More ways to get Wow Talk",
    redirect: "#",
  },
];
const ourCommunity = [
  {
    id: 1,
    name: "Wow Talk Speakets",
    redirect: "#",
  },
  {
    id: 2,
    name: "Wow Talk Fellows",
    redirect: "#",
  },
  {
    id: 3,
    name: "Wow Talk Translators",
    redirect: "#",
  },
  {
    id: 4,
    name: "Wow Talk Organizers",
    redirect: "#",
  },
  {
    id: 5,
    name: "Wow Talk Community",
    redirect: "#",
  },
];
const redirects = [
  {
    id: 1,
    name: "Wow Talks Usage Policy",
    redirect: "#",
  },
  {
    id: 2,
    name: "Privacy Policy",
    redirect: "#",
  },
  {
    id: 3,
    name: "Advertising / Partnership",
    redirect: "#",
  },
  {
    id: 4,
    name: "Press",
    redirect: "#",
  },
  {
    id: 5,
    name: "Terms of Use",
    redirect: "#",
  },
];

const follow = [
  {
    id: 1,
    link: "https://www.facebook.com/delhiinstituteofdigitalmarketing",
    icon: FaFacebookF,
  },
  {
    id: 2,
    link: "https://www.instagram.com/didm.in",
    icon: FaInstagram,
  },
  {
    id: 3,
    link: "https://www.youtube.com/channel/UCEp9cnHWQLx6rEqqiiFgD6A/videos",
    icon: FaYoutube,
  },
];

const impLink = [
  { text: "Digital Marketing Course", link: "/courses/digital-marketing" },
  { text: "DIDM Trainee Review", link: "/trainee-review" },
  { text: "DIDM Placement", link: "/placement" },
  { text: "Batch Images", link: "/batch-images" },
  { text: "Enrollments", link: "/enrollments" },
  { text: "Who we are", link: "/about-us" },
  { text: "Terms & Conditions", link: "/terms" },
  { text: "Privacy Policy", link: "/privacy-policy" },
  { text: "Refund & Cancellation", link: "/refund-cancellation" },
];

const Footer = () => {
  return (
    <div className="bg-[#b52828] ">
      <div className=" max-w-screen-2xl text-white flex flex-col base:gap-10 medium:gap-16 m-auto base:p-4 medium:p-12 base:py-10 medium:py-12">
        <div className="px-4 flex flex-col gap-3 ">
          {/* <div>
            <h2 className="text-2xl font-bold">Training Centers :</h2>
          </div> */}
          <div className="w-full flex flex-wrap base:gap-6 large:gap-0 justify-between">
            <div className=" flex base:flex-col small:flex-row base:w-full large:w-[20%] base:gap-10 small:gap-16 medium:gap-20 large:gap-5">
              <div className="large:w-[full] text-[13px] flex flex-col gap-3">
                <p className="font-bold mb-2">Training Centers :</p>
                <p>Dwarka | Gurugram | Kalkaji | Pitampura | Preet Vihar | Rajouri Garden | South Campus | Noida | Meerut | Mumbai | GOA | Varanasi | Jaipur | Srinagar J&K</p>

                <p className="font-bold mb-2">Business Hours</p>
                <p>Monday – Friday : 9am to 9pm Saturday & Sunday : 9am to 7pm</p>
              </div>
            </div>
            <div className="large:w-[30%]  text-[13px] flex flex-col gap-3">
              <p className="font-bold mb-2">Training Centers :</p>
              <p>Delhi Institute of Digital Marketing makes our candidates gratifying when it comes to infusing skills with practical knowledge and recent trends in the industry. We are a reputed and the best digital marketing institute in Delhi/NCR & across India. By MSME | ISO Certified.</p>
            </div>
            {/* input with suscribe button */}
            {/* <div className="base:w-full large:w-[30%] text-[13px] flex flex-col gap-3 ">
              <p className="font-bold mb-2">Newsletters</p>
              <div className="flex gap-2 items-center">
                <div>
                  <CiMail size={25} />
                </div>
                <div>Get the latest talks</div>
              </div>
              <p>Get a daily email featuring the latest talk, plus a quick mix of trending content.</p>
              <div className="flex base:w-full small:w-[60%] large:w-full justify-between  bg-white rounded-sm">
                <input className="w-full px-3 outline-none text-black" placeholder="What's your email?" />
                <button className="bg-black px-4 py-2 transition-all duration-300 hover:bg-[#4f4f4f]">Subscribe</button>
              </div>
              <p className="text-[#d8d8d8] text-[12px] ">
                By subscribing, you understand and agree that we will store, process and manage your personal information according to our{" "}
                <span>
                  <Link className="underline" href={"#"}>
                    {" "}
                    Privacy Policy
                  </Link>
                </span>
              </p>
            </div> */}

            <div className="base:w-full large:w-[20%]  text-[13px] flex flex-col gap-3 ">
              <div className="large:w-[100%] text-[13px] flex flex-col gap-3">
                <p className="font-bold mb-2">Important Links</p>
                {impLink?.map((ele, i) => (
                  <Link key={i} href="#" className="flex gap-2">
                    <MdOutlineKeyboardArrowRight size={18} />
                    {ele?.text}
                  </Link>
                ))}
              </div>
            </div>

            <div className="base:w-full large:w-[20%]  text-[13px] flex flex-col gap-3 ">
              <div className="font-bold mb-2 flex items-center transition-all duration-300 hover:text-[#9c9c9c]">
                <p>Corporate Office :</p>
              </div>
              <div className="flex items-center gap-3">
                <p>
                  <CiLocationOn />
                </p>
                <p>Plot No-12, 3rd Floor, Satya Niketan, Near Moti Bagh - South Delhi, Opp. Venketeshwar College, New Delhi-110021</p>
              </div>
              <div className="flex items-center gap-3">
                <p>
                  <CiPhone />
                </p>
                <p> +91 8800505151</p>
              </div>
              <div className="flex items-center gap-3">
                <p>
                  <CiMail />
                </p>
                <p> info@didm.in</p>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <p className="font-bold">Subscribe & Follow us :</p>
                <div className="flex gap-3">
                  {follow.map((el) => (
                    <Link target="_blank" key={el.id} className="bg-white rounded-full p-2" href={el.link}>
                      <el.icon size={15} color="black"></el.icon>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="-t-1 my-5"></div>
          <div className="text-center flex base:flex-col large:flex-row base:gap-5 large:gap-20 ">
            {/* <div className="base:w-full large:w-[70%]"></div> */}
            <div className=" text-center w-full  flex text-[#c7c7c7] text-[12px] ">
              <p className="w-full">Copyright ©2023 All rights reserved | Website Design and Developed by Online Strikers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
