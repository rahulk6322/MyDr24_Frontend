import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface FormValues {
  speciality: string;
  patientName: string;
  age: string;
  gender: string;
  mobileNumber: string;
}

interface SpecialtiesDoctorConsultationModalProps {
  closeModal: () => void; // Function to close the modal
  speciality: string; // Pass the selected speciality
}

const SpecialtiesDoctorConsultation: React.FC<SpecialtiesDoctorConsultationModalProps> = ({ closeModal, speciality }) => {
  const [formValues, setFormValues] = React.useState<FormValues>({
    speciality: speciality, // Set speciality from props
    patientName: '',
    age: '',
    gender: '',
    mobileNumber: '',
  });

  const [isMobileDisabled, setIsMobileDisabled] = React.useState<boolean>(false);

  // Fetch mobile number from localStorage when the component mounts
  React.useEffect(() => {
    const storedMobileNumber = localStorage.getItem('mobileNumber');
    if (storedMobileNumber) {
      setFormValues((prev) => ({ ...prev, mobileNumber: storedMobileNumber }));
      setIsMobileDisabled(true); // Disable input if mobile number is found
    }
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlePhoneChange = (value: string) => {
    setFormValues({ ...formValues, mobileNumber: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formValues.mobileNumber.match(/^\+?\d{10,}$/)) {
      alert('Please enter a valid mobile number with country code.');
      return;
    }

    console.log('Form submitted:', formValues);

    // Save the mobile number to localStorage
    localStorage.setItem('mobileNumber', formValues.mobileNumber);

    closeModal(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-black">Consult with a Doctor</h2>
        <form onSubmit={handleSubmit}>
          {/* Speciality */}
          <div className="form-group mb-5">
            <label htmlFor="speciality" className="block mb-2 font-medium text-black">
              Speciality
            </label>
            <div className="flex items-center p-3 border border-gray-300 rounded-md bg-gray-50">
              <div className="flex items-center">
                <span className="mr-2 text-blue-600 font-semibold">&#x2714;</span>
                <span className="font-medium text-gray-700">{formValues.speciality}</span>
              </div>
              <span className="ml-auto text-gray-500">₹499</span>
            </div>
          </div>

          {/* Patient Name */}
          <div className="form-group mb-5">
            <label htmlFor="patientName" className="block mb-2 font-medium text-black">
              Patient Name
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formValues.patientName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter patient's name"
            />
          </div>

          {/* Age */}
          <div className="form-group mb-5">
            <label htmlFor="age" className="block mb-2 font-medium text-black">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formValues.age}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter Age"
            />
          </div>

          {/* Gender */}
          <div className="form-group mb-5">
            <label htmlFor="gender" className="block mb-2 font-medium text-black">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formValues.gender}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-gray-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Mobile Number */}
          <div className="form-group mb-5">
            <label htmlFor="mobileNumber" className="block mb-2 font-medium text-black">
              Mobile Number
            </label>
            <PhoneInput
              country={'in'}
              value={formValues.mobileNumber}
              onChange={handlePhoneChange}
              inputClass="w-full h-full border border-gray-300 rounded-md text-black px-3 focus:outline-none focus:ring focus:ring-blue-500"
              buttonClass="border border-gray-300 rounded-l-md"
              placeholder="Enter mobile number"
              containerStyle={{
                width: '112%',
                height: '48px', // Ensures consistent height with other inputs
              }}
              inputStyle={{
                width: 'calc(100% - 50px)', // Adjust width to align with button
                height: '100%', // Full height to match other inputs
                borderRadius: '0px 4px 4px 0px', // Matches the rounded edges
              }}
              buttonStyle={{
                height: '100%', // Full height for consistency
                borderRadius: '4px 0px 0px 4px', // Matches the rounded edges
                borderRight: 'none', // Removes double border with input
              }}
              disabled={isMobileDisabled} // Disable input if mobile number is already set
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpecialtiesDoctorConsultation;
