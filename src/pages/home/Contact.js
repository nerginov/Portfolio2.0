import styles from "./Contact.module.scss";
import linkedIn from "../../assets/LinkedIn.svg";
import send from "../../assets/send.svg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useEffect, useState } from "react";
import axios from "axios";
import ThickIcon from "../../components/ThickIcon";
import useWindowResize from "../../hooks/useWindowResize";
const Contact = () => {
  const windowWidth = useWindowResize();
  const [ref, isVisible] = useIntersectionObserver();

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    subject: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    subject: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission
  const [isSuccessful, setIsSuccessful] = useState(false); // State to track successful form submission

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Check if there is an error for the field
    if (errors[name]) {
      // Clear the error message for the field when the user changes its value
      setErrors({ ...errors, [name]: "" });
    }
  };

  const submitFormData = (e) => {
    e.preventDefault();

    // Prevent multiple submissions while waiting for backend response
    if (isSubmitting) return;
    setIsSubmitting(true); // Set isSubmitting to true when form is being submitted

    //validate name,lastname,subject
    function validateFormFields(value) {
      return value.trim().length > 0;
    }
    //validate Email
    function validateEmail(email) {
      const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regExp.test(email);
    }

    // Function to validate form data before submitting
    const validateFormData = () => {
      // Initialize errors object
      const newErrors = {
        name: "",
        lastName: "",
        email: "",
        subject: "",
      };

      // Validate each field
      if (!validateFormFields(formData.name)) {
        newErrors.name = "Invalid Name";
      }
      if (!validateFormFields(formData.lastName)) {
        newErrors.lastName = "Invalid Last Name";
      }
      if (!validateFormFields(formData.subject)) {
        newErrors.subject = "Message should not be empty";
      }
      if (!validateEmail(formData.email)) {
        newErrors.email = "Invalid Email";
      }
      // Check if there are any errors
      const hasErrors = Object.values(newErrors).some((error) => error !== "");
      // If no errors, submit the form
      if (!hasErrors) {
        console.log("Form data submitted successfully:", formData);
        sendEmail(); // Call sendEmail function after successful form submission
      } else {
        console.log("Validation failed for fields:", newErrors);
        setIsSubmitting(false); // reset submiting on errors
        // Update errors state
        setErrors(newErrors);
      }
    };

    validateFormData(); // Call the validateFormData function
  };

  //post req to backend
  const sendEmail = async () => {
    try {
      const response = await axios.post(
        "https://portfolio-api-claa.onrender.com/api/contact/submit",
        formData
      );
      console.log("Form data submitted successfully:", formData);
      // Reset isSubmitting state after successful form submission
      setIsSubmitting(false);
      // Reset form data and errors after successful submission
      setFormData({
        name: "",
        lastName: "",
        email: "",
        subject: "",
      });
      setErrors({
        name: "",
        lastName: "",
        email: "",
        subject: "",
      });
      //set isSuccessful state(true) to show green thick, and remove it after 1500ms
      setIsSuccessful(true);
      setTimeout(() => setIsSuccessful(false), 1500);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        const errorMessage = error.response.data.message;
        alert(`Error: Too many requests. Please try again later.`); //error message on too many requsts
      } else {
        // For other types of errors, display a generic message
        alert("An error occurred. Please try again.");
      }
      setIsSubmitting(false); // Reset isSubmitting state after error
    }
  };
  useEffect(() => {
    // Clean up setTimeout when the component unmounts
    return () => clearTimeout();
  }, []);

  return (
    <section
      className={`${styles.contact} ${
        isVisible ? styles.intersectedContact : ""
      }`}
      id="contact"
      ref={ref}
      aria-label="contact-section"
    >
      {windowWidth > 767 && (
        <div className={styles["contact-left"]}>
          <h2>Dont Hesitate, Get In Touch!</h2>
          <p>
            Feel free to reach out to me! I'm always open to connect with you on
            any topic that piques your interest. Whether it's exploring new
            professional opportunities, inquiries, suggestions, or simply
            engaging in meaningful conversations, I'm all ears! <br />
            <br />
            Looking forward to connecting with you soon! <br />
            <br />
            Warm regards, <br />
            Soner Hyuseinov
            <br />
            <br />
            <br />
            Alternatively you may prefer to connect with me via:
          </p>
          <a
            href="https://www.linkedin.com/in/soner-hyuseinov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn} alt="linkedIn-logo" />
          </a>
        </div>
      )}
      <div className={styles["contact-right"]}>
        <h2>Contact Me</h2>
        {windowWidth < 768 && (
          <p>
            Feel free to reach out to me! I'm open to connecting with you on any
            topic—be it professional opportunities, inquiries, suggestions, or
            meaningful conversations; I'm all ears
          </p>
        )}
        <p></p>
        <form action="submit">
          <div className={styles["input-container"]}>
            <label htmlFor={styles.name}>Name:</label>
            <input
              onChange={(e) => {
                handleFormDataChange(e);
              }}
              name="name"
              value={formData.name}
              required
              placeholder="Name"
              type="text"
              id={styles.name}
              className={`${styles["form-control"]} ${
                errors.name ? styles["error-shadow"] : ""
              }`}
              style={{
                borderColor: errors.name ? "rgba(211, 47, 47, 0.45)" : "",
              }}
            />
            {errors.name && (
              <span className={styles.error} role="alert" aria-live="polite">
                {errors.name}
              </span>
            )}
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor={styles.lastName}>Last Name:</label>
            <input
              onChange={(e) => {
                handleFormDataChange(e);
              }}
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              type="text"
              id={styles.lastName}
              className={`${styles["form-control"]}  ${
                errors.lastName ? styles["error-shadow"] : ""
              }`}
              required
              style={{
                borderColor: errors.lastName ? "rgba(211, 47, 47, 0.45)" : "",
              }}
            />
            {errors.lastName && (
              <span className={styles.error} role="alert" aria-live="polite">
                {errors.lastName}
              </span>
            )}
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor={styles.email}>Email:</label>
            <input
              onChange={(e) => {
                handleFormDataChange(e);
              }}
              name="email"
              value={formData.email}
              placeholder="Email"
              type="text"
              id={styles.email}
              className={`${styles["form-control"]}  ${
                errors.email ? styles["error-shadow"] : ""
              }`}
              required
              style={{
                borderColor: errors.email ? "rgba(211, 47, 47, 0.45)" : "",
              }}
            />
            {errors.email && (
              <span className={styles.error} role="alert" aria-live="polite">
                {errors.email}
              </span>
            )}
          </div>
          <div className={styles["subject-container"]}>
            <label htmlFor={styles.subject}>Message:</label>
            <textarea
              onChange={(e) => {
                handleFormDataChange(e);
              }}
              name="subject"
              id={styles.subject}
              className={errors.subject ? styles["error-shadow"] : ""}
              cols="30"
              rows="10"
              placeholder="Type your message here..."
              value={formData.subject}
              required
              style={{
                borderColor: errors.subject ? "rgba(211, 47, 47, 0.45)" : "",
              }}
            ></textarea>
            {errors.subject && (
              <span className={styles.error} role="alert" aria-live="polite">
                {errors.subject}
              </span>
            )}
          </div>
          <button
            onClick={(e) => {
              submitFormData(e);
            }}
            className={styles.button}
            aria-label="Submits the contact form"
          >
            {isSuccessful ? (
              <ThickIcon />
            ) : isSubmitting ? (
              <div className={styles.spinner}></div>
            ) : (
              <>
                <img src={send} alt="Send-icon" />
                <span>SEND</span>
              </>
            )}{" "}
            {/*on successful submiting show green thick, during submiting show spinner, else show initial img and text*/}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
