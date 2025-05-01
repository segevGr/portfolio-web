import FadeOnScroll from "./FadeOnScroll";

const GenericButton = ({ text, classStyle = "", disabled = false }) => {
  return (
    <FadeOnScroll>
      <button disabled={disabled} type="submit" className={classStyle}>
        {text}
      </button>
    </FadeOnScroll>
  );
};

export default GenericButton;
