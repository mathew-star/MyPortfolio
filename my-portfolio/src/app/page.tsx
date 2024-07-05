import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import TypingAnimation from "@/components/magicui/typing-animation";
import Social from "@/components/Social";
import Profile from "@/components/Profile";




const HomePage = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto h-full">

          <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <h1 className="h1"> Hello I'm <br /> <span>
              <TypingAnimation
      className="text-4xl xl:text-left xl:text-6xl font-bold text-accent dark:text-white"
      texts={["Mathew Joseph", "Software Developer"]}
      duration={150} // Adjust duration if needed
      delayBetweenTexts={2000} // Adjust delay between texts if needed
    />
              </span>
    </h1>
          <div className="flex flex-col xl:flex-row items-center gap-8 mt-6">
          <a href="/Mathew_Joseph_Resume (1).pdf" download className="no-underline">
                <Button variant="outline" size="lg" className="uppercase flex items-center">
                  <span>Resume</span>
                  <FiDownload className="ml-2" />
                </Button>
              </a>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
            </div>
            <div>
              <div className="order-1 xl:order-none mb-8 xl:mb-0">
                <Profile />
              </div>
            </div>
          </div>
        </div>
    </section >
  )
}

export default HomePage


