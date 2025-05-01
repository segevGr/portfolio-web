export const formValidation = ({ name, email, subject, message }) => {
  const errors = {};

  if (!name || name.trim().length === 0) {
    errors.nameError = "Please fill out your name";
  } else if (name.trim().length < 3) {
    errors.nameError = "Name must be at least 3 characters";
  }

  if (!email || email.trim().length === 0) {
    errors.emailError = "Please fill out your email address";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.emailError = "Please enter a valid email address";
  }

  if (!subject || subject.trim().length === 0) {
    errors.subjectError = "Please fill out the subject";
  } else if (subject.trim().length < 4) {
    errors.subjectError = "Subject must be at least 4 characters";
  }

  if (!message || message.trim().length === 0) {
    errors.messageError = "Please fill out the message";
  } else if (message.trim().length < 5) {
    errors.messageError = "Message must be at least 5 characters";
  }

  return errors;
};
