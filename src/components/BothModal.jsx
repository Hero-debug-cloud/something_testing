import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
// import Rightside from "../Login/rightside";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "@chakra-ui/react";
// import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

import host from "../../host";

const LoginModal = ({ open, text, done }) => {
  const notify = (message) => toast(`${message}`);
  // const router = useRouter();

  // const host = process.env.BASE_URL;
  const [show, setshow] = useState(false);
  const [otp, setotp] = useState("");
  const [number, setnumber] = useState("");

  const getOTP = async () => {
    let url = `${host}/api/job-recruiter/signin`;
    const content = {
      mobileNumber: number,
    };
    try {
      await axios
        .post(url, content)
        .then((response) => {
          notify(response.data.message);
          localStorage.setItem("Recruiter_token", response.data.token);
        })
        .catch((err) => {
          toast(`${err.response.data.message}`);
        });
    } catch (err) {
      console.log("error " + err);
    }
  };

  const handlechange = (e) => {
    setnumber(e.target.value);
  };
  const [loading, setloading] = useState(false);
  const checkOTP = async () => {
    let complete_url = `${host}/api/job-recruiter/verify-otp`;
    setloading(true);
    try {
      let token = localStorage.getItem("Recruiter_token");
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios
        .post(
          complete_url,
          {
            otp: otp,
          },
          config
        )
        .then((response) => {
          toast("Sucessfull Login");
          localStorage.setItem("expired",false);
          onClose();
          done();
        })
        .catch((err) => {
          toast(`${err.response.data.message}`);
          console.log(err);
        });
      }
     catch (err) {
      console.log("error " + err);
    }
    setloading(false);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (open) onOpen();
  }, [open]);

  const [curr, setCurr] = useState(0);
  const options = ["Login", "Signup"];

  const handleSignup = async () => {
    let signup_url = `${host}/api/job-recruiter/signup`;
    try {
      await axios
        .post(signup_url, signup)
        .then((response) => {
          toast("OTP Sent!");
          localStorage.setItem("Recruiter_token", response.data.token);
        })
        .catch((err) => {
          toast(`${err.response.data.message}`);
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const [signup, setSignup] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    company: "",
    aboutCompany: "",
  });
  const handlechange1 = (e) => {
    setSignup((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <ChakraProvider>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-center flex items-center">
            <IoMdArrowBack
              color="black"
              className="cursor-pointer"
              onClick={() => {}}
            />
            <div className="ml-5 text-center">{text}</div>
          </ModalHeader>
          {/* <Rightside /> */}
          <div className="w-[100%] p-3 z-[99999999]">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {/* Same as */}
            <ToastContainer />

            <div className="flex">
              {options.map((value, index) => {
                return (
                  <div
                    className={
                      "cursor-pointer " +
                      (index == 1 ? "ml-5 " : " ") +
                      (index == curr ? "border-b border-blue-500" : " ")
                    }
                    key={index}
                    onClick={() => setCurr(index)}
                  >
                    {value}
                  </div>
                );
              })}
            </div>

            {curr == 0 ? (
              <div className="w-[100%] flex flex-col items-end">
                <div className="w-[100%]">
                  <div className="flex flex-col items-center mt-5 relative">
                    <input
                      value={number}
                      onChange={handlechange}
                      type="text"
                      className="bg-gray-200 p-3 rounded outline-none text-black mt-3 w-[100%]"
                      placeholder="Mobile Number"
                    />
                    <div
                      className="w-[100%] text-sm text-end text-gray-400 mt-1 cursor-pointer"
                      onClick={getOTP}
                    >
                      Generate OTP
                    </div>
                    <input
                      value={otp}
                      onChange={(e) => setotp(e.target.value)}
                      type="text"
                      className="bg-gray-200 p-3 rounded outline-none text-black w-[100%] mt-4"
                      placeholder="Enter OTP"
                    />

                    <div
                      className="bg-blue-500 text-white cursor-pointer flex justify-center items-center w-[100%] p-3 rounded mt-4"
                      onClick={checkOTP}
                    >
                      {loading ? <Spinner /> : "Sign in"}
                    </div>
                    <div
                      className="bg-blue-500 text-white cursor-pointer flex justify-center items-center w-[100%] p-3 rounded mt-4"
                      onClick={() => {}}
                    >
                      Cancel
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-[100%] flex flex-col items-end">
                <div className="w-[100%]">
                  <div className="flex flex-col items-center mt-5 relative">
                    <input
                      value={signup.fullName}
                      onChange={handlechange1}
                      type="text"
                      className="bg-gray-200 p-2 rounded outline-none text-black mt-3 w-[100%]"
                      placeholder="Enter Name"
                      name="fullName"
                    />
                    <input
                      value={signup.email}
                      onChange={handlechange1}
                      type="email"
                      className="bg-gray-200 p-2 rounded outline-none text-black mt-3 w-[100%]"
                      placeholder="Enter Email"
                      name="email"
                    />
                    <input
                      value={signup.number}
                      onChange={handlechange1}
                      type="text"
                      className="bg-gray-200 p-2 rounded outline-none text-black mt-3 w-[100%]"
                      placeholder="Enter Mobile Number"
                      name="mobileNumber"
                    />
                    <input
                      value={signup.company}
                      onChange={handlechange1}
                      type="text"
                      className="bg-gray-200 p-2 rounded outline-none text-black mt-3 w-[100%]"
                      placeholder="Enter Company Name"
                      name="company"
                    />
                    <input
                      value={signup.aboutCompany}
                      onChange={handlechange1}
                      type="text"
                      className="bg-gray-200 p-2 rounded outline-none text-black mt-3 w-[100%]"
                      placeholder="Enter About Company"
                      name="aboutCompany"
                    />
                    <div
                      className="w-[100%] text-sm text-end text-gray-400 mt-1 cursor-pointer"
                      onClick={handleSignup}
                    >
                      Generate OTP
                    </div>
                    <input
                      value={otp}
                      onChange={(e) => setotp(e.target.value)}
                      type="text"
                      className="bg-gray-200 p-2 rounded outline-none text-black w-[100%] mt-4"
                      placeholder="Enter OTP"
                    />
                    <div
                      className="bg-blue-500 text-white cursor-pointer flex justify-center items-center w-[100%] p-3 rounded mt-4"
                      onClick={checkOTP}
                    >
                      {loading ? <Spinner /> : "Sign Up"}
                    </div>
                    <div
                      className="bg-blue-500 text-white cursor-pointer flex justify-center items-center w-[100%] p-3 rounded mt-4"
                      onClick={() => {}}
                    >
                      Cancel
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default LoginModal;
