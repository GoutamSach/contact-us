import React from "react";
import send from "../src/images/send logo.png";

function ContactUs() {
  return (
    <div className="  flex justify-center mt-8 ">
      <div className=" overflow-hidden relative  w-[1196px] h-[667px] flex  justify-start  bg-white  ">
        <div className=" relative overflow-hidden ml-2.5 w-[491px] h-[647px] bg-black rounded-xl mt-2">
          <div className=" z-10 bg-opacity-50 w-[238px] h-[238px] rounded-full absolute  bottom-[120px] right-[120px]  bg-[#484848]" />

          <div className="w-[369px] h-[369px] rounded-full absolute -bottom-[50px] -right-[50px]  bg-[#212121]" />
          <div className="pt-10 pl-10 ">
            <h1 className="text-white text-[32px] font-poppins font-semibold ">
              Contact Information
            </h1>
            <p class="text-[#C8C8C8] pt-2  text-lg font-normal font-['Poppins']">
              Say something to start a conversation!
            </p>
          </div>
        </div>
        <form className=" relative">
          <div className="  font-['Poppins'] pl-[50px] pt-[50px]">
            <div className=" flex flex-row ">
              <div className="">
                <p className="text-[#000000] text-sm font-medium   py-2">
                  First Name
                </p>
                <input
                  required
                  type="name"
                  placeholder="John"
                  className="text-[#000000] focus:outline-none pb-2 text-sm border-b-2 w-[278px] border-gray-400 "
                />
              </div>
              <div className="pl-[40px]">
                <p className="text-[#000000] text-sm font-medium   py-2">
                  Last Name
                </p>
                <input
                  required
                  type="name"
                  placeholder="Doe"
                  className="text-[#000000] focus:outline-none pb-2 text-sm border-b-2 w-[278px] border-gray-400 "
                />
              </div>
            </div>
            <div className=" flex flex-row pt-[50px] ">
              <div className="">
                <p className="text-[#000000] focus:outline-none text-sm font-medium  leading-tight py-2">
                  Email
                </p>
                <input
                  type="email"
                  placeholder="Email"
                  className="text-[#000000] focus:outline-none pb-2 text-sm border-b-2 w-[606px] border-gray-400 "
                />
              </div>
            </div>{" "}
            <div className=" flex flex-row pt-[50px] ">
              <div className="">
                <p className="text-[#000000] focus:outline-none text-sm font-medium   py-2">
                  Message
                </p>
                <textarea
                  rows="5"
                  required
                  type=" text"
                  placeholder="Write your message..."
                  className="text-[#000000] focus:outline-none pb-2 text-sm border-2 w-[606px] border-gray-400 rounded-sm "
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-[214px] h-[54px] mt-[50px] absolute right-0 px-12 py-[15px] bg-black text-white font-poppins rounded-md"
          >
            {" "}
            Send Message
          </button>
        </form>
        <img src={send} alt="send" className=" absolute -bottom-14 right-28" />
      </div>
    </div>
  );
}

export default ContactUs;
