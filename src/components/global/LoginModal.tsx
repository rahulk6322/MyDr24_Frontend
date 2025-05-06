import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LoginComponentProps {
    onClose: () => void;
    onLoginSuccess: (phoneNumber: string) => void; // Add the success callback
}

const LoginModal: React.FC<LoginComponentProps> = ({ onClose, onLoginSuccess }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(30);
    const [loginId, setLoginId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handle Login (Generate OTP)
    const handleLogin = async () => {
        try {
            if (phoneNumber.length !== 10) {
                setErrorMessage('Phone number must be exactly 10 digits');
                return;
              }
            const formattedPhoneNumber = phoneNumber.startsWith('+91') ? phoneNumber : `+91${phoneNumber}`;

            setErrorMessage('');
            const response = await axios.post('http://localhost:4200/api/auth/generateOtp', {
                user_role: 'PATIENT',
                mobileNumber: formattedPhoneNumber,
            });

            const { loginId } = response.data.response;
            setLoginId(loginId);
            setIsOtpSent(true);
            startTimer();

            toast.success('OTP sent successfully!');
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || 'Failed to send OTP. Please try again.'
            );
            toast.error(
                error.response?.data?.message || 'Failed to send OTP. Please try again.'
            );
        }
    };

    // Handle OTP Verification
    const handleOtpVerification = async () => {
        try {
            setErrorMessage('');
            const otpValue = otp.join('');
            const response = await axios.post('http://localhost:4200/api/auth/verifyLogin', {
                otp: otpValue,
                id: loginId,
                user_role: 'PATIENT',
                externalAuthToken: '',
                ssoPlatform: '',
            });

            const { authToken, ssoUserIdentifier } = response.data.response;
            localStorage.setItem('authToken', authToken); // Store token in local storage
            localStorage.setItem('mobileNumber', ssoUserIdentifier);
            onLoginSuccess(phoneNumber); // Pass phone number to parent

            toast.success('Login successful!');
            onClose();
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || 'Invalid OTP. Please try again.'
            );
            toast.error(
                error.response?.data?.message || 'Invalid OTP. Please try again.'
            );
        }
    };

    // Start OTP resend timer
    const startTimer = () => {
        setTimer(30);
        const countdown = setInterval(() => {
            setTimer((prev) => {
                if (prev === 1) {
                    clearInterval(countdown);
                }
                return prev - 1;
            });
        }, 1000);
    };

    // Handle OTP input change
    const handleOtpChange = (index: number, value: string) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
      
        // Move cursor to the next input if a value is entered
        if (value && index < otp.length - 1) {
          const nextInput = document.getElementById(`otp-input-${index + 1}`);
          if (nextInput) nextInput.focus();
        }
      
        // Move cursor to the previous input if value is deleted
        if (!value && index > 0) {
          const prevInput = document.getElementById(`otp-input-${index - 1}`);
          if (prevInput) prevInput.focus();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="relative max-w-md rounded-[20px] min-w-[512px] min-h-[512px] bg-white px-[34px] py-[40px] shadow-lg animate-zoomIn">
                {/* Close Button */}
                <button
                    className="absolute right-4 top-4 text-gray-400"
                    onClick={onClose}
                >
                    Close
                </button>

                {/* Title */}
                <h1 className="mb-[30px] text-[28px] font-bold">Log In</h1>

                {errorMessage && (
                    <p className="text-red-500 mb-4 font-bold">{errorMessage}</p>
                )}

                {/* OTP Screen */}
                {isOtpSent ? (
                    <>
                        <h2 className="text-head font-rubik font-[600] mb-4">
                            Enter OTP
                        </h2>
                        <p className="text-title font-rubik font-[600] text-black mb-4">
                            Enter the OTP sent to you on <br />
                            <span className="text-title mr-2">{phoneNumber}</span>
                            <a
                                href="#"
                                className="text-title text-blue-500 underline"
                                onClick={() => setIsOtpSent(false)}
                            >
                                change
                            </a>
                        </p>
                        {/* OTP Inputs */}
                        <div className="flex justify-between mb-6 w-[90%]">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`otp-input-${index}`}
                                    type="text"
                                    maxLength={1}
                                    className="w-[64px] h-[64px] text-center border border-[#b7b7b7] rounded-lg focus:outline-none focus:border-blue"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                />
                            ))}
                        </div>
                        {/* Countdown Timer */}
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-black font-bold font-rubik text-subhead">
                                Didn’t receive the code?
                            </p>
                            <p
                                className={`${
                                    timer > 0
                                        ? 'text-black'
                                        : 'text-blue-500 cursor-pointer'
                                } text-subhead`}
                                onClick={() => {
                                    if (timer === 0) {
                                        handleLogin();
                                    }
                                }}
                            >
                                {timer > 0
                                    ? `00:${timer.toString().padStart(2, '0')}`
                                    : 'Resend'}
                            </p>
                        </div>
                        {/* Continue Button */}
                        <button
                            type="button"
                            className="w-full rounded-[12px] bg-green min-h-[64px] p-3 text-head text-white font-rubik font-bold"
                            onClick={handleOtpVerification}
                        >
                            Continue
                        </button>
                    </>
                ) : (
                    <>
                        {/* Phone Number Input Field */}
                        <div className="relative mb-[46px] w-full">
                            <fieldset className="w-full rounded-[12px] mb-2 border-2 border-blue text-[16px] font-medium">
                                <legend className="ml-4 font-rubik font-bold px-2 text-blue">
                                    Enter Phone Number
                                </legend>
                                <input
                                    type="tel"
                                    className="w-full rounded-lg border-none p-3 text-gray-700 outline-none focus:border-none"
                                    value={phoneNumber}
                                    onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                    }
                                />
                            </fieldset>
                            <span className="text-[14px] font-rubik font-bold text-gray-800">
                                OTP will be shared for Verification
                            </span>
                        </div>

                        {/* Login Button */}
                            <button
                                type="button"
                                className={`w-full rounded-[12px] min-h-[64px] p-3 text-head font-rubik font-bold text-white ${phoneNumber.length === 10 ? 'bg-green' : 'bg-[#BDBDBD]'}`}
                                disabled={phoneNumber.length !== 10}
                                onClick={handleLogin}
                            >
                                Login
                            </button>

                        {/* Sign-up and Terms Links */}
                        <div className="mt-[32px] text-center flex flex-col gap-[10px]">
                            <p className="font-rubik font-bold text-gray-800 text-[20px]">
                                Not registered with us?
                                <a
                                    href="#"
                                    className="text-[20px] font-rubik font-bold text-blue ml-2"
                                >
                                    Sign up.
                                </a>
                            </p>
                            <p className="text-[16px] font-rubik font-[600]">
                                By signing in you agree to our
                            </p>
                            <div>
                                <a
                                    href="#"
                                    className="text-blue font-rubik font-[600] text-[16px] mt-4 whitespace-nowrap"
                                >
                                    Terms and Conditions
                                </a>{' '}
                                and{' '}
                                <a
                                    href="#"
                                    className="font-rubik font-[600] text-blue text-[16px]"
                                >
                                    Privacy Policy
                                </a>
                                .
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* <style jsx>{` */}
            <style>{`
        @keyframes zoomIn {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-zoomIn {
          animation: zoomIn 0.2s ease-out;
        }
      `}</style>

            <ToastContainer />
        </div>
    );
};

export default LoginModal;
