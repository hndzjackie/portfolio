"use client";

import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject:string;
    message:string;
  };

function ContactMe() {
    const { register, handleSubmit, } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:jacklyn.hndz1998@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 md:py-24 max-w-7xl px-4 sm:px-10 mx-auto">
      <h3 className="text-center w-full uppercase tracking-[15px] sm:tracking-[20px] text-[#6589c0] text-xl sm:text-2xl mb-8 sm:mb-12 flex-shrink-0">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-6 sm:space-y-8 w-full max-w-2xl">
        <h4 className="text-2xl sm:text-4xl font-semibold text-center px-2">
          Get in touch or just say hello.{" "}
          <span className="decoration-[#F7AB0A] underline">Let&apos;s Talk.</span>
        </h4>

            <div className="space-y-6 sm:space-y-10">
                <div className="flex items-center space-x-3 sm:space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#F7AB0A] h-6 w-6 sm:h-7 sm:w-7 animate-pulse flex-shrink-0" />
                    <p className="text-base sm:text-2xl break-all">jacklyn.hndz1998@gmail.com</p>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-5 justify-center">
                    <MapPinIcon className="text-[#F7AB0A] h-6 w-6 sm:h-7 sm:w-7 animate-pulse flex-shrink-0" />
                    <p className="text-base sm:text-2xl">Bay Area, CA</p>
                </div>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-2 w-full max-w-lg mx-auto px-2 sm:px-0"
            >
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <input
                        {...register("name")}
                        placeholder="Name"
                        className="contactInput w-full"
                        type="text"
                    />
                    <input
                        {...register("email")}
                        placeholder="Email"
                        className="contactInput w-full"
                        type="email"
                    />
                </div>

                <input
                    {...register("subject")}
                    placeholder="Subject"
                    className="contactInput w-full"
                    type="text"
                />

                <textarea
                    {...register("message")}
                    placeholder="Message"
                    className="contactInput w-full"
                />
                <button
                    type="submit"
                    className="bg-[#F7AB0A] py-4 sm:py-5 px-10 rounded-md text-[#123568] font-bold text-base sm:text-lg">
                    Submit
                </button>
            </form>
        </div>
    </div>
  );
}

export default ContactMe