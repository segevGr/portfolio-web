import SocialIcons from "./SocialIcons";
import GenericButton from "../utilComponents/GenericButton";
import FadeOnScroll from "../utilComponents/FadeOnScroll";
import { heroText } from "./heroText";
import "../../App.css";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-20 lg:px-36 py-12">
      <FadeOnScroll>
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-8 lg:mt-0">
          <div className="flex flex-row space-x-2 mb-4">
            <h3 className="text-[18px] md:text-[20px]">{heroText.hey[0]}</h3>
            <h3 className="text-[18px] md:text-[20px] text-secondary">
              {heroText.hey[1]}
            </h3>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-poppins stroke-text mb-6">
            {heroText.name}
          </h1>
          <div className="">
            <p className="mb-1 font-medium text-[23px] mb:text-2xl text-secondary">
              {heroText.title}
            </p>
            <div className="space-y-1">
              {heroText.paragraphs.map((text, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed opacity-0 animate-fade-in text-textSecondary"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
          <div>
            <SocialIcons />
          </div>
          <div className="flex flex-col items-center gap-4 mt-6">
            <a href="/Segev Grotas - CV.pdf" download="Segev Grotas - CV.pdf">
              <GenericButton
                text={heroText.buttons.CV}
                classStyle="bg-primary text-white text-lg md:text-xl px-8 py-4 md:px-10 md:py-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:opacity-90 transition-all duration-300"
              />
            </a>

            <a
              href="/Certificate of Excellence.pdf"
              download="Certificate of Excellence.pdf"
            >
              <GenericButton
                text={heroText.buttons.Certificate}
                classStyle="border-2 borderColor-secondary text-secondary text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-sm hover:scale-105 hover:bg-opacity-20 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </FadeOnScroll>

      <FadeOnScroll>
        <div className="flex-1 flex items-center justify-end">
          <div className="bg-lightBlue w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/Segev.PNG`}
              alt="Segev"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </FadeOnScroll>
    </div>
  );
};

export default Hero;
