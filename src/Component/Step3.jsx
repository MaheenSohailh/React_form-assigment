import React from "react";

const Step3 = ({ nextStep, prevStep, handleChange, formData }) => {
    return (
        <>
            <div className="d-flex justify-content-center p-5">
                <div className="card p-5" style={{ width: "30rem" }}>
                    <h1 className="pb-3">Education</h1>

                    <input
                        className="form-control mb-3"
                        name="qualification"
                        placeholder="Qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                    />

                    <div className="mb-3">
                        <label className="me-3">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === "Male"}
                                onChange={handleChange}
                            /> Male
                        </label>

                        <label className="me-3">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === "Female"}
                                onChange={handleChange}
                            /> Female
                        </label>
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                        <button className="btn back " onClick={prevStep}>
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

export default Step3;
