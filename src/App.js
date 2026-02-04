import { useState } from "react";
import './App.css';
import Step1 from "./Component/Step1";
import Step2 from "./Component/Step2";
import Step3 from "./Component/Step3";
import Step4 from "./Component/Step4";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    fullname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    qulification: "",
    age: ""
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      {step === 1 && (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      )}
      {step === 2 && (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      )}
      {step === 3 && (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      )}
      {step === 4 && (
        <Step4
          prevStep={prevStep}
          formData={formData}
        />
      )}
    </div>
  );
}

export default App;
