import React, { useEffect, useState } from "react";
import Enroll_heading from "./EnrollComp/Enroll_heading";
import InpBx from "@/core/Inp/InpBx";
import SelectTag from "@/core/SelectTag";
import { Button, Checkbox, useDisclosure } from "@nextui-org/react";
import { MdOutlinePhone } from "react-icons/md";
import { Controller, useForm } from "react-hook-form";
import { ErrMsg } from "@/core/ErrMsg";
import api from "@/pages/api/api";
import toast from "react-hot-toast";
import DynamicModal from "../DynamicModal/Modal";
import generateRandomNumber from "@/core/GenerateDiscount";
import dynamic from "next/dynamic";
import ScratchCardComponent from "../LandingPage/ScratchCard";

const data = {
  cd_name: "",
  phone_number: "",
  email: "",
  company: "",
  category: "",
  city: "",
  state: "",
  training_mode: "",
  branch: "",
  batch_type: "",
  want_job_placement: "",
  rate_your_relationship_manager: "",
  course_type: "",
  aggree: "",
};
export const Enroll_form = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    onOpen();
  }, []);
  const onSubmit = (formdata) => {
    // api
    //   .post("/enroll/create", formdata)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     if (err?.response?.status == 403) {
    //       toast.error(err?.response?.data?.msg);
    //     }
    //   });
  };

  return (
    <div className="mt-16">
      {/* heading  */}
      {/* <DynamicModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} /> */}
      <Enroll_heading />
      {/* form  */}
      <form onSubmit={handleSubmit(onSubmit)} className="border-gray-400 mt-10 pb-10 rounded-md border-1 my-4 large:mx-28 medium:mx-22 small:mx-18 base:mx-2 relative flex flex-col items-center justify-center">
        {/* heading  */}
        <div className="large:text-[23px] medium:text-[20px] small:text-[18px] base:text-[16px] tracking-[1px] flex gap-2 absolute -top-4 bg-white w-fit large:mx-20 medium:mx-15 small:mx-8 base:mx-2 justify-center large:px-20 medium:px-15 small:px-8 base:px-2">
          <p>
            Valid information is required to register.
            <span className="text-[#b64f4f]">required *</span>
          </p>
        </div>
        {/* inp divs  */}
        <div className="my-14 w-full flex flex-col gap-4">
          {/* one  */}
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Candidate Name</p>
            <Controller control={control} name="cd_name" render={({ field: { onChange, value } }) => <InpBx onChange={onChange} value={value} />} />
            <ErrMsg err={errors} name="cd_name" />
          </div>
          {/*  */}
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Phone Number</p>
            <Controller control={control} name="phone_number" type="number" render={({ field: { onChange, value } }) => <InpBx onChange={onChange} value={value} />} />
            <ErrMsg err={errors} name="phone_number" />
          </div>
          {/*  */}
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Email Address</p>
            <Controller control={control} name="email" type="email" render={({ field: { onChange, value } }) => <InpBx onChange={onChange} value={value} />} />
            <ErrMsg err={errors} name="email" />
          </div>
          {/*  */}
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Select Category</p>
            <Controller control={control} name="category" render={({ field: { onChange, value } }) => <InpBx onChange={onChange} value={value} />} />
            <ErrMsg err={errors} name="category" />
          </div>
          {/*  */}
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Company Name</p>
            <Controller control={control} name="company" render={({ field: { onChange, value } }) => <InpBx onChange={onChange} value={value} />} />
            <ErrMsg err={errors} name="company" />
          </div>
          {/*  */}
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">State</p>
            <Controller control={control} name="state" render={({ field: { onChange, value } }) => <InpBx onChange={onChange} value={value} />} />
            <ErrMsg err={errors} name="state" />
          </div>
          {/*  */}
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Training Mode</p>
            <Controller control={control} name="training_mode" render={({ field: { onChange, value } }) => <InpBx onChange={onChange} value={value} />} />
            <ErrMsg err={errors} name="training_mode" />
          </div>
          {/*  */}
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Branch</p>
            <Controller control={control} name="branch" render={({ field: { onChange, value } }) => <InpBx onChange={onChange} value={value} />} />
            {/* <ErrMsg err={errors} name="branch" /> */}
          </div>
          {/*  */}
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Do You Want Job Placement</p>
            <Controller control={control} name="want_job_placement" render={({ field: { onChange, value } }) => <InpBx onChange={onChange} value={value} />} />
            <ErrMsg err={errors} name="want_job_placement" />
          </div>
          {/*  */}
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Rate Your Relationship Manager</p>
            <Controller control={control} name="rate_your_relationship_manager" render={({ field: { onChange, value } }) => <InpBx onChange={onChange} value={value} />} />
            <ErrMsg err={errors} name="rate_your_relationship_manager" />
          </div>
          {/*  */}
          <div className="mx-10 flex flex-col gap-1">
            <p className="text-[14px]">Course Type</p>
            <Controller control={control} name="course_type" render={({ field: { onChange, value } }) => <InpBx onChange={onChange} value={value} />} />
            <ErrMsg err={errors} name="course_type" />
          </div>
          {/*  */}
        </div>

        <div className="flex p-3">
          <div className="w-[60%]">
            <div className="flex flex-col justify-start bg-full w-full px-10">
              <p className="text-[28px]">Declaration</p>
              <p className="text-[14px]">I Shall abide by the academic and administrative rules and regulations of Delhi Institute of Digital Marketing. By filling up this form, I certify that to the best of my knowledge and belief, the information provided in this application form is true and complete.</p>
            </div>
            <div className="flex justify-start w-full px-10 my-5">
              <Checkbox className="" radius="sm" color="danger" classNames={"focus : outline-none"} defaultSelected>
                By clicking Agree Button, you agree to the Terms and Conditions set out by this site, including our Cookie Use.
              </Checkbox>
            </div>
            {/* btn  */}
            <div className="flex justify-start w-full px-10">
              <Button type="submit" variant="bordered" className="text-white bg-[#B52828] rounded-full focus:outline-none border-red-800 font-semibold">
                Scratch Now
              </Button>
            </div>
          </div>
          <div className="border-2 w-[40%] relative overflow-hidden">
            <ScratchCardComponent />
          </div>
        </div>
      </form>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Enroll_form), { ssr: false });
