import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"



const HomePage = () => {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">

          <div className="flex flex-col xl:flex-row justify-center items-center xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left">
              <h1 className="h1"> Hello I'm <br /> <span>Mathew Joseph</span></h1>
            </div>
            <div>photo</div>
          </div>
        </div>
    </section >
  )
}

export default HomePage


