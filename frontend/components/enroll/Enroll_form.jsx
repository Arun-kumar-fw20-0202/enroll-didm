import React, { useEffect, useState } from "react";
import Enroll_heading from "./EnrollComp/Enroll_heading";
import InpBx from "@/core/Inp/InpBx";
import { Button, Checkbox, Spinner, useDisclosure } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import DynamicModal from "../DynamicModal/Modal";
import dynamic from "next/dynamic";
import ErrMsg from "@/core/ErrMsg";
import SelectTag from "@/core/SelectTag";
import {
  branchArr,
  branchType,
  category,
  courseType,
  placementArr,
  relationArr,
  trainingMode,
} from "./EnrollComp/dummy";
import ScratchCardComponent from "../LandingPage/ScratchCard";
import useAddFormData from "@/libs/Murations/useAddFormData";
import ScratchCard from "../ScratchCard/Scratch1";
import Head from "next/head";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/router";
import { baseURL } from "@/pages/api/api";

export const Enroll_form = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { mutate: addData, isPending: loading, data, error } = useAddFormData();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formdata) => {
    formdata = {
      ...formdata,
      category: formdata.category.value,
      training_mode: formdata.training_mode.value,
      branch: formdata.branch.value,
      batch_type: formdata.batch_type.value,
      course_type: formdata.course_type.value,
      rate_your_relationship_manager:
        formdata.rate_your_relationship_manager.value, //
      training_mode: formdata.training_mode.value,
      want_job_placement: formdata.want_job_placement.value,
    };
    addData(formdata);
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  let currency = "INR";
  let receiptId = "qwsaq2";

  const makePayment = async () => {
    let status;
    let courseFee;
    let amount;
    const sendObj = {
      userId: data?.data?._id,
    };
    try {
      const checkPaymentStatus = await axios.post(
        "http://localhost:8080/checkpayment",
        sendObj
      );
      console.log(
        "response after check payment",
        checkPaymentStatus?.data?.status
      );
      currency = "INR";
      receiptId = "qwsaq2";
      amount = Number(checkPaymentStatus?.data?.amountFee);
      status = true;
    } catch (error) {
      console.log("errrr", error.response);
      console.log("err", error?.response?.data?.status);
      status = false;
      toast.error(error?.response?.data?.message);
    }
    if (status) {
      const res = await initializeRazorpay();

      if (!res) {
        alert("Razorpay SDK Failed to load");
        return;
      }
      try {
        let obj = {
          userId: data?.data?._id,
        };
        const datapay = await fetch("http://localhost:8080/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        })
          .then((t) => t.json())
          .catch((err) => toast.error(err?.response?.data?.message));
        var options = {
          key: "rzp_test_thhLCCjTJvKt4l",
          name: "DIDM",
          currency: currency,
          amount: amount,
          order_id: datapay.id,
          description: "Payment",
          image: "https://i.ibb.co/Y0GR2SN/didmfavicon.png",
          handler: async function (response) {
            let obj = {
              userId: data?.data?._id,
              paid_amount: amount,
              course_amount: courseFee,
              paymentId: response.razorpay_payment_id,
            };

            console.log("user id in forntend", data?.data?._id);
            console.log("response from callback", response);
            try {
              const res = await axios.post(
                "http://localhost:8080/payment",
                obj
              );
              const resData = await res.data;
              toast.success(resData?.message);
              router.replace("/");
            } catch (error) {
              toast.error(err?.response?.data?.message);
            }
          },
          prefill: {
            name: "DIDM",
            email: "info@didm.in",
            contact: "8800505151",
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        return toast.error(error?.response?.data?.message);
      }
    }
  };
  return (
    <>
      <Head>
        <title>{"Enroll Form"}</title>
      </Head>
      <div className="mt-16">
        {/* heading  */}
        <DynamicModal
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
        />
        <Enroll_heading />
        {/* form  */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-gray-400 mt-10 pb-10 rounded-md border-1 my-4 large:mx-28 medium:mx-22 small:mx-18 base:mx-2 relative flex flex-col items-center justify-center"
        >
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
              <Controller
                name="cd_name"
                control={control}
                rules={{
                  required: "Candidate name is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <InpBx
                    disabled={data?.data}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              {/* <p>error hai is field mein</p> */}
              <ErrMsg err={errors} name="cd_name" />
            </div>
            {/*  */}
            <div className="mx-10 flex flex-col gap-1">
              <p className="text-[14px]">Phone Number</p>
              <Controller
                control={control}
                name="phone_number"
                rules={{
                  required: "phone number is required",
                }}
                type="number"
                render={({ field: { onChange, value } }) => (
                  <InpBx
                    disabled={data?.data}
                    type="number"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <ErrMsg err={errors} name="phone_number" />
            </div>
            {/*  */}
            <div className="mx-10 flex flex-col gap-1">
              <p className="text-[14px]">Email Address</p>
              <Controller
                control={control}
                name="email"
                type="email"
                rules={{
                  required: "email is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <InpBx
                    disabled={data?.data}
                    type="email"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <ErrMsg err={errors} name="email" />
            </div>
            {/*  */}
            <div className="mx-10 flex flex-col gap-1">
              <p className="text-[14px]">Select Category</p>
              <Controller
                control={control}
                name="category"
                rules={{
                  required: "Category name is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <SelectTag
                    disabled={data?.data}
                    arr={category}
                    placeholder="Select the category"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <ErrMsg err={errors} name="category" />
            </div>
            {/*  */}
            <div className="mx-10 flex flex-col gap-1">
              <p className="text-[14px]">Company Name</p>
              <Controller
                control={control}
                name="company"
                rules={{
                  required: "Company is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <InpBx
                    disabled={data?.data}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <ErrMsg err={errors} name="company" />
            </div>
            <div className="mx-10 flex flex-col gap-1">
              <p className="text-[14px]">City Name</p>
              <Controller
                control={control}
                name="cityname"
                rules={{
                  required: "City Name is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <InpBx
                    disabled={data?.data}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <ErrMsg err={errors} name="cityname" />
            </div>
            {/*  */}
            <div className="mx-10 flex flex-col gap-1">
              <p className="text-[14px]">State</p>
              <Controller
                control={control}
                name="state"
                rules={{
                  required: "State is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <InpBx
                    disabled={data?.data}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <ErrMsg err={errors} name="state" />
            </div>
            {/*  */}
            <div className="mx-10 flex flex-col gap-1">
              <p className="text-[14px]">Training Mode</p>
              <Controller
                control={control}
                name="training_mode"
                rules={{
                  required: "Training mode is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <SelectTag
                    disabled={data?.data}
                    arr={trainingMode}
                    placeholder="Select training mode"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <ErrMsg err={errors} name="training_mode" />
            </div>
            {/*  */}
            <div className="mx-10 flex flex-col gap-1">
              <p className="text-[14px]">Branch</p>
              <Controller
                control={control}
                name="branch"
                rules={{
                  required: "Branch is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <SelectTag
                    disabled={data?.data}
                    arr={branchArr}
                    placeholder="Select branch"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <ErrMsg err={errors} name="branch" />
            </div>
            <div className="mx-10 flex flex-col gap-1">
              <p className="text-[14px]">Branch Type</p>
              <Controller
                control={control}
                name="batch_type"
                rules={{
                  required: "Branch type is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <SelectTag
                    disabled={data?.data}
                    arr={branchType}
                    placeholder="Select branch"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <ErrMsg err={errors} name="batch_type" />
            </div>
            {/*  */}
            <div className="mx-10 flex flex-col gap-1">
              <p className="text-[14px]">Do You Want Job Placement</p>
              <Controller
                control={control}
                name="want_job_placement"
                rules={{
                  required: "This field is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <SelectTag
                    disabled={data?.data}
                    arr={placementArr}
                    placeholder="Select This field"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <ErrMsg err={errors} name="want_job_placement" />
            </div>
            {/*  */}
            <div className="mx-10 flex flex-col gap-1">
              <p className="text-[14px]">Rate Your Relationship Manager</p>
              <Controller
                control={control}
                rules={{
                  required: "This field is required",
                }}
                name="rate_your_relationship_manager"
                render={({ field: { onChange, value } }) => (
                  <SelectTag
                    disabled={data?.data}
                    arr={relationArr}
                    placeholder="Select Relationship manager"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <ErrMsg err={errors} name="rate_your_relationship_manager" />
            </div>
            {/*  */}
            <div className="mx-10 flex flex-col gap-1">
              <p className="text-[14px]">Course Type</p>
              <Controller
                control={control}
                name="course_type"
                rules={{
                  required: "Course type is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <SelectTag
                    disabled={data?.data}
                    arr={courseType}
                    placeholder="Select the course type"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <ErrMsg err={errors} name="course_type" />
            </div>
            {/*  */}
          </div>

          <div className="flex gap-3 flex-col small:flex-col medium::flex-row large:flex-row px-5 ">
            <div className="w-full min-w-[60%] max-w-[calc(full-60%)]">
              <div className="flex flex-col justify-start bg-full w-full px-10">
                <p className="text-[28px]">Declaration</p>
                <p className="text-[14px]">
                  I shall abide by the academic and administrative rules and
                  regulations of Delhi Institute of Digital Marketing. By
                  filling up this form, I certify that to the best of my
                  knowledge and belief, the information provided in this
                  application form is true and complete.
                </p>
              </div>
              <div className="flex justify-start w-full px-10 my-5">
                <Checkbox
                  className=""
                  radius="sm"
                  color="danger"
                  classNames="focus:outline-none"
                  defaultSelected
                >
                  By clicking the Agree button, you agree to the Terms and
                  Conditions set out by this site, including our Cookie Use.
                </Checkbox>
              </div>
              {/* btn */}
              <div
                disabled={data || error}
                className="flex justify-start w-full px-10"
              >
                <Button
                  type="submit"
                  variant="bordered"
                  className="text-white bg-[#B52828] rounded-full focus:outline-none border-red-800 font-semibold"
                >
                  {loading ? <Spinner /> : "Scratch Now"}
                </Button>
              </div>
            </div>
            {data?.data?.discount && (
              <div className="w-full min-w-[40%] border flex justify-center flex-col  border-gray-300 p-3 ">
                {/* <ScratchCardComponent discount={data?.data?.discount} /> */}
                <ScratchCard discount={data?.data?.discount} />

                <div className="mt-4">
                  <Button onClick={makePayment}>Pay Now</Button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Enroll_form), { ssr: false });
