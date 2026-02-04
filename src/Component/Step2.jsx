import React from "react";

const Step2 = ({ nextStep, prevStep, handleChange, formData }) => {
    return (
        <>
            <div className="d-flex justify-content-center p-5">
                <div className="card p-5" style={{ width: "30rem" }}>
                    <h1 className="pb-3">Contact Info</h1>

                    <input
                        className="form-control mb-3"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                    />

                    <div className="d-flex justify-content-between mt-3">
                        <button className="btn back" onClick={prevStep}>
                            Back
                        </button>
                        <button className="btn next" onClick={nextStep}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step2;
