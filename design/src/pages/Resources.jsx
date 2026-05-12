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
      fullName: yup.string()
        .min(3, "minimum 3 character")
        .required("full name is required"),

      email: yup.string()
        .email("invalid email address")
        .required("Email is required"),

      message: yup.string()
        .min(10, "message must be at least 10 charater")
        .required("message is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);

      (toast.success("form submitted successfullty!"),
        {
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
        <div className="form-group">
          <label> Full Name</label>

          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fullName && 
          formik.errors.fullName && (
            <p className="error-text">
              {formik.errors.fullName}
              </p>
          )}
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.email && formik.errors.email && (
            <P className="error-text">{formik.errors.email}</P>
          )}
        </div>

        <div className="form-group">
          <label>Message</label>

          <textarea
            name="message"
            placeholder="Enter your message here"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <p className="error-text">{formik.errors.message}</p>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Resources;

















