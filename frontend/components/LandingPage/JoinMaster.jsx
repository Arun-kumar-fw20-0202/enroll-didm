// pages/index.js
import Image from "next/image";

const JoinMaster = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8" style={{ background: "url(/landing/banenr.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="text-center flex items-center flex-col medium:w-[80%] base:w-[95%] text-white gap-y-6">
        <div className=" h-auto w-[80%] flex justify-center">
          <Image src="https://ads.didm.co.in/wp-content/uploads/2023/11/Untitled-1-300x76.png" alt="Logo" width={300} height={76} />
        </div>
        <div>
          <h3 className="medium:text-3xl base:text-[18px] font-bold mt-4 ">Exclusive Limited-Time Discount Enrollment!</h3>
          <h1 className="medium:text-6xl base:text-[20px] font-extrabold mt-4">
            {"JOIN MASTER'S COURSE NOW AND GET UP TO"} <br /> {"30% OFF!"}
          </h1>
          <p className=" medium:text-xl base:text-md mt-4">Rated 4.9/5.0 (4500+ Reviews)</p>
          <p className=" medium:text-lg base:text-md mt-4">{"Certified Professional Trainers | Work on 5+ Live Projects | 100% Placement Assistance | Agency Style Learning | Guaranteed Paid Internship | 50+ Modules | 20+ Globlized Certifications"}</p>
          <p className=" medium:text-xl base:text-md mt-4">{"Welcome to Delhi Institute of Digital Marketing — where opportunities meet affordability! We’re thrilled to announce our Exclusive Limited-Time Discount Enrollment, designed just for you. Seize the moment, because this offer is too good to miss!"}</p>
        </div>
        <div className="relative w-full">
          <Image
            src="/landing/offer.png"
            alt="Promo Banner"
            layout="responsive"
            width={200}
            height={133} // You may need to adjust this based on the image aspect ratio
            className="w-full h-auto object-cover md:w-[66.66%] lg:w-[50%] xl:w-[33.33%]"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinMaster;
