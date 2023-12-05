// components/TrainingBox.js
import Image from "next/image";
import { MdFace } from "react-icons/md";

const TrainingBox = () => {
  const trainingData = [
    {
      title: "Training Mode",
      content: "In Class | Online",
    },
    {
      title: "Training Session",
      content: "Recording (LMS) & Live Session",
    },
    {
      title: "Practical Exposure",
      content: "02 Months Internship",
    },
    {
      title: "Course Duration",
      content: "3 | 5 Months",
    },
    {
      title: "Practical Learning",
      content: "Assignment | Case Studies",
    },
    {
      title: "Placement Session",
      content: "Job Preparation & Placements",
    },
  ];

  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-[#af0606]">
      <div className="base:w-full medium:w-[70%] h-full p-8 flex medium:flex-row base:flex-col bg-[#b80a0a] text-[#fff] shadow-md ">
        {/* Left Side */}
        <div className="base:w-full medium:w-[60%] base:p-1 medium:p-4">
          <h1 className="base:text-[26px] medium:text-3xl font-bold">Training Specification</h1>
          <div className="grid medium:grid-cols-2 base:grid-cols-1">
            {trainingData?.map((ele, i) => (
              <div key={i} className="mt-4 flex items-center gap-3">
                <div>
                  <MdFace />
                </div>
                <div>
                  <h3 className="medium:text-xl base:text-md font-bold">{ele.title}</h3>
                  <p className="medium:text-[20px] base:text-[15px] text-gray-300">{ele.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="medium:w-[50%] base:w-full medium:p-4 base:p-1 medium:mt-0 base:mt-5 text-center">
          <h1 className="base:text-[26px] medium:text-3xl font-bold">WHY CHOOSE DIDM</h1>
          <div className="mt-4 h-[80%] ">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/VwomfkFDvH4?si=UO4UZzsGZX4rj8QU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingBox;
