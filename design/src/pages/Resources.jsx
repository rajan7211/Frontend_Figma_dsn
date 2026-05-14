import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Resources.css";

function Resources() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },

    validationSchema: yup.object({
      fullName: yup
        .string()
        .min(3, "Minimum 3 characters required")
        .required("Full name is required"),

      email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),

      message: yup
        .string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);

      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 2000,
      });

      resetForm();
    },
  });

  return (
    <div className="resource-page">
      <div className="back-button">
        <Link to="/" className="back-btn">
          Back to Home
        </Link>
      </div>

      <h1>Welcome to Resource Page</h1>

      <form onSubmit={formik.handleSubmit} className="resource-form">
        
        {/* FULL NAME */}
        <div className="form-group">
          <label>Full Name</label>

          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.fullName && formik.errors.fullName && (
            <p className="error-text">
              {formik.errors.fullName}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.email && formik.errors.email && (
            <p className="error-text">
              {formik.errors.email}
            </p>
          )}
        </div>

        {/* MESSAGE */}
        <div className="form-group">
          <label>Message</label>

          <textarea
            name="message"
            placeholder="Enter your message here"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.message && formik.errors.message && (
            <p className="error-text">
              {formik.errors.message}
            </p>
          )}
        </div>

        {/* BUTTON */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Resources;



