import React from "react";
import Enroll_heading from "./EnrollComp/Enroll_heading";
import InpBx from "@/core/Inp/InpBx";
import SelectTag from "@/core/SelectTag";
import { Button, Checkbox } from "@nextui-org/react";
import { MdOutlinePhone } from "react-icons/md";

let CategoryArr = [
  {
    name: "Job Seeker",
    value: "Job Seeker",
  },
  {
    name: "Working Professionals",
    value: "Working Professionals",
  },
  {
    name: "Entrepreneur",
    value: "Entrepreneur",
  },
  {
    name: "Businessman",
    value: "Businessman",
  },
  {
    name: "Other",
    value: "Other",
  },
];

let Training = [
  {
    name: "Online Training",
    value: "Online Training",
  },
  {
    name: "In Class Training",
    value: "In Class Training",
  },
];
let Placement = [
  {
    name: "No",
    value: "No",
  },
  {
    name: "Yes",
    value: "Yes",
  },
];
let RateArr = [
  {
    name: "Very Satisfied",
    value: "Very Satisfied",
  },
  {
    name: "Satisfied",
    value: "Satisfied",
  },
  {
    name: "Not Up to Mark",
    value: "Not Up to Mark",
  },
  {
    name: "None",
    value: "None",
  },
];
let Course = [
  {
    name: "Master In Digital Marketing",
    value: "Master In Digital Marketing",
  },
  {
    name: "Professional In Digital Marketing",
    value: "Professional In Digital Marketing",
  },
];
let Branch = [
  {
    name: "Dwarka",
    value: "Dwarka",
  },
  {
    name: "Satya Niketan",
    value: "Satya Niketan",
  },
  {
    name: "Gurgaon",
    value: "Gurgaon",
  },
  {
    name: "Preet Vihar",
    value: "Preet Vihar",
  },
  {
    name: "Noida",
    value: "Noida",
  },
  {
    name: "Pitampura",
    value: "Pitampura",
  },
  {
    name: "Kalkaji",
    value: "Kalkaji",
  },
  {
    name: "Meerut",
    value: "Meerut",
  },
  {
    name: "Mumbai",
    value: "Mumbai",
  },
  {
    name: "Online Batch",
    value: "Online Batch",
  },
];

export const Enroll_form = () => {
  return (
    <div className="mt-16">
      {/* heading  */}
      <Enroll_heading />
      {/* form  */}
      <div className="border-gray-400 mt-10 pb-10 rounded-md border-1 my-4 mx-28 relative flex flex-col items-center justify-center">
        {/* heading  */}
        <div className="text-[23px] tracking-[1px] flex gap-2 absolute -top-4 bg-white w-fit mx-20 justify-center px-28">
          <p>Valid information is required to register.</p>
          <p className="text-[#b64f4f]">required *</p>
        </div>
        {/* inp divs  */}
        <div className="my-10 w-full flex flex-col gap-4">
          {/* one  */}
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Candidate Name</p>
            <InpBx />
          </div>
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Phone Number</p>
            <InpBx />
          </div>
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Email Address</p>
            <InpBx />
          </div>
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Select Category</p>
            <SelectTag arr={CategoryArr} placeholder="Select Category" />
          </div>
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Company Name</p>
            <InpBx />
          </div>
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">State</p>
            <InpBx />
          </div>
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Training Mode</p>
            <SelectTag arr={Training} placeholder="Select Training Mode" />
          </div>
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Branch</p>
            <SelectTag arr={Branch} placeholder="Select Branch" />
          </div>
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Do You Want Job Placement</p>
            <SelectTag arr={Placement} placeholder="Select Job placement" />
          </div>
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Rate Your Relationship Manager</p>
            <SelectTag
              arr={RateArr}
              placeholder="Rate you relationship manager"
            />
          </div>
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Course Type</p>
            <SelectTag arr={Course} placeholder="Select Course Type" />
          </div>
        </div>
        <div className="flex flex-col justify-start bg-full w-full px-10">
          <p className="text-[28px]">Declaration</p>
          <p className="text-[14px]">
            I Shall abide by the academic and administrative rules and
            regulations of Delhi Institute of Digital Marketing. By filling up
            this form, I certify that to the best of my knowledge and belief,
            the information provided in this application form is true and
            complete.
          </p>
        </div>
        <div className="flex justify-start w-full px-10 my-5">
          <Checkbox
            className=""
            radius="sm"
            color="danger"
            classNames={"focus : outline-none"}
            defaultSelected
          >
            By clicking Agree Button, you agree to the Terms and Conditions set
            out by this site, including our Cookie Use.
          </Checkbox>
        </div>
        {/* btn  */}
        <div className="flex justify-start w-full px-10">
          <Button
            variant="bordered"
            className="text-white bg-[#B52828] rounded-full focus:outline-none border-red-800 font-semibold"
          >
            Proceed to Pay
          </Button>
        </div>
      </div>
    </div>
  );
};
