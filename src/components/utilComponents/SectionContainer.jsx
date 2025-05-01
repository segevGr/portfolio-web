import FadeOnScroll from "./FadeOnScroll";

const SectionContainer = ({ children, title, additionalStyle = "" }) => {
  return (
    <section
      className={`flex flex-col items-center my-5 md:mt-20 relative ${additionalStyle}`}
    >
      <FadeOnScroll>
        <h2 className="text-[25px] md:text-[35px] font-bold mb-10 text-primary">
          {title}
        </h2>
      </FadeOnScroll>
      {children}
    </section>
  );
};

export default SectionContainer;
