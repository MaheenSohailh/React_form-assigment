import React from "react";
import jsPDF from "jspdf";

const Step4 = ({ formData }) => {
    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text("My Details", 20, 20);

        doc.setFontSize(12);
        doc.text(`Name: ${formData.name}`, 20, 40);
        doc.text(`Full Name: ${formData.fullname}`, 20, 50);
        doc.text(`Email: ${formData.email}`, 20, 60);
        doc.text(`Address: ${formData.phone}`, 20, 70);
        doc.text(`City: ${formData.address}`, 20, 80);
        doc.text(`Phone: ${formData.city}`, 20, 90);
        doc.text(`Qualification: ${formData.qualification}`, 20, 100);
        doc.text(`Age: ${formData.age}`, 20, 110);
        doc.text(`Gender: ${formData.gender}`, 20, 120);

        doc.save("form-data.pdf");
    };

    return (
        <section className="d-flex justify-content-center">
            <div className="card p-5 pt-4" style={{ width: "30rem" }}>
                <h1 className="pb-3 text-center">Review</h1>
                <p><b>Name :</b> {formData.name}</p>
                <p><b>Full Name :</b> {formData.fullname}</p>
                <p><b>Email :</b> {formData.email}</p>
                <p><b>Address :</b> {formData.address}</p>
                <p><b>City :</b> {formData.city}</p>
                <p><b>Phone :</b> {formData.phone}</p>
                <p><b>Qualification :</b> {formData.qualification}</p>
                <p><b>Age :</b> {formData.age}</p>
                <p><b>Gender :</b> {formData.gender}</p>

                <div className="d-flex justify-content-between mt-3">
                    <button className="btn next" onClick={() => window.location.reload()}>
                        Refresh
                    </button>
                    <button className="btn back" onClick={handleDownloadPDF}>
                        Download PDF
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Step4;
