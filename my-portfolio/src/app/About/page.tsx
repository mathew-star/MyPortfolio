
import Social from "@/components/Social";
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "tailwindcss",
  "fastapi",
  "mysql",
  'redux',
  "react",
  "html5",
  "css3",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "django",
  "github",
  "visualstudiocode",
  "figma",
  "redis",
  "djangorest",
  "vim",
  "bootstrap",
  "mongodb"
];

const About = () => {
  return (
    <div className="mx-auto px-8">
      <div className="flex flex-col xl:flex-row justify-between  items-center xl:pt-12 xl:pb-24 space-y-8 xl:space-y-0 xl:space-x-8">
        <div className="text-center xl:text-left ">
          <p className="text-4xl">About me .</p>
          
          <p className="text-xl mt-5 leading-relaxed  text-white dark:text-gray-300">
            
          Hello! I am Mathew, a dedicated tech enthusiast with a Bachelors degree in Mechanical Engineering. Driven by an insatiable curiosity and a deep passion for the IT field.
           <br />I am a passionate and dedicated Software Developer 
            with extensive experience in building <br /> high-quality web applications. 
             I am continuously learning and exploring new technologies <br /> to stay updated with industry trends. 
             Let us build something amazing together!
          </p>

          <blockquote className="text-lg mt-5 italic text-accent dark:text-gray-400 mb-4">
            The only way to do great work is to love what you do. - Steve Jobs
          </blockquote>


          <div className="mb-8 text-center xl:mb-0  ">
              <Social containerStyles="flex gap-6" iconStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>
        </div>
        <div className="relative flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
    </div>
    </div>
  )
}

export default About
