import React from "react";

const Step1 = ({ nextStep, handleChange, formData }) => {
    return (
        <div className="d-flex justify-content-center p-5">
            <div className="card p-5" style={{ width: "30rem" }}>
                <h1 className="pb-3">Personal Info</h1>

                <input
                    className="form-control mb-3"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    name="fullname"
                    placeholder="Full Name"
                    value={formData.fullname}
                    onChange={handleChange}
                />

                <button className="btn next w-75 mx-auto mt-3" onClick={nextStep}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step1;