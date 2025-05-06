import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface FormValues {
  symptom: string;
  speciality: string;
  mobileNumber: string;
}

interface DoctorConsultationProps {
  closeModal: () => void; // Function to close the modal
}

const DoctorConsultation: React.FC<DoctorConsultationProps> = ({ closeModal }) => {
  const [formValues, setFormValues] = React.useState<FormValues>({
    symptom: '',
    speciality: '',
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    localStorage.setItem('mobileNumber', formValues.mobileNumber); // Save mobile number to localStorage
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
          {/* Symptom */}
          <div className="form-group mb-5">
            <label htmlFor="symptom" className="block mb-2 font-medium text-black">
              Tell us your symptom or health problem
            </label>
            <input
              type="text"
              id="symptom"
              name="symptom"
              value={formValues.symptom}
              onChange={handleChange}
              required
              minLength={4}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="E.g., Fever, Cold, etc."
            />
          </div>

          {/* Speciality */}
          <div className="form-group mb-5">
            <label htmlFor="speciality" className="block mb-4 font-medium text-black">
              Choose a relevant speciality
            </label>
            <div className="grid gap-4">
              {[
                { name: 'Pediatrics', description: "Specialist for children's health", price: 399 },
                { name: 'General Physician', description: 'Covers general health issues', price: 499 },
                { name: 'ENT', description: 'Specialist for ENT problems', price: 499 },
              ].map((speciality) => (
                <div
                  key={speciality.name}
                  onClick={() => setFormValues({ ...formValues, speciality: speciality.name })}
                  className={`p-4 flex justify-between items-center border ${formValues.speciality === speciality.name
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300'
                    } rounded-md cursor-pointer hover:shadow-md`}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setFormValues({ ...formValues, speciality: speciality.name });
                    }
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon/Checkmark */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${formValues.speciality === speciality.name
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                        }`}
                    >
                      {formValues.speciality === speciality.name ? '✔' : ''}
                    </div>
                    {/* Text */}
                    <div>
                      <span className="font-semibold text-lg">{speciality.name}</span>
                      <p className="text-sm text-gray-500">{speciality.description}</p>
                    </div>
                  </div>
                  {/* Price */}
                  <span className="font-medium text-blue-600">₹{speciality.price}</span>
                </div>
              ))}
            </div>
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

export default DoctorConsultation;
