import { useState } from "react";
import emailjs from "emailjs-com";
import GenericButton from "../utilComponents/GenericButton";
import SectionContainer from "../utilComponents/SectionContainer";
import { contactData } from "./contactData";
import InputContainer from "./InputContainer";
import { formValidation } from "./formValidation";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errorsMap, setErrorsMap] = useState({
    nameError: "",
    emailError: "",
    subjectError: "",
    messageError: "",
  });

  const sanitizeInput = (str) => {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };

  const containsMaliciousPatterns = (str) => {
    const pattern = /<script|onerror|onload|javascript:|iframe|<img/gi;
    return pattern.test(str);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = formValidation({ name, email, subject, message });

    setErrorsMap(newErrors);

    const hasErrors = Object.values(newErrors).some((val) => val !== "");
    if (hasErrors) return;

    const inputs = [name, email, subject, message];

    const malicious = inputs.some((input) => containsMaliciousPatterns(input));
    if (malicious) {
      alert("Input contains forbidden characters or scripts.");
      return;
    }

    setIsSending(true);

    const templateParams = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      title: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("There was a problem. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <SectionContainer title={contactData.title} id="contact">
      <div className="w-full flex justify-center">
        {isSubmitted ? (
          <div
            className="text-center opacity-0 animate-fade-in bg-lightBlue
            h-72 w-4/5 mx-auto md:w-1/5 rounded-2xl flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
              {contactData.messageSentTitle}
            </h2>
            <p className="text-base md:text-lg text-textSecondary max-w-md mx-auto">
              {contactData.messageSentContent}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-[70%] md:w-[40%]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <InputContainer
                label={contactData.name}
                onChange={setName}
                placeholder={contactData.namePlaceHolder}
                error={errorsMap.nameError}
              />
              <InputContainer
                label={contactData.email}
                onChange={setEmail}
                placeholder={contactData.emailPlaceHolder}
                error={errorsMap.emailError}
              />
              <InputContainer
                label={contactData.subject}
                onChange={setSubject}
                placeholder={contactData.subjectPlaceHolder}
                className="md:col-span-2"
                error={errorsMap.subjectError}
              />
              <InputContainer
                label={contactData.message}
                onChange={setMessage}
                placeholder={contactData.messagePlaceHolder}
                className="md:col-span-2"
                error={errorsMap.messageError}
                isArea
              />
              <div className="md:col-span-2 flex justify-center">
                <GenericButton
                  disabled={isSending}
                  text={isSending ? contactData.sending : contactData.Send}
                  classStyle={`bg-primary text-white text-lg md:text-xl px-8 py-4 md:px-10 md:py-5 rounded-xl transition-all duration-300 -mt-5 ${
                    isSending
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:shadow-xl hover:scale-105 hover:opacity-90 shadow-lg"
                  }`}
                />
              </div>
            </div>
          </form>
        )}
      </div>
    </SectionContainer>
  );
};

export default Contact;
