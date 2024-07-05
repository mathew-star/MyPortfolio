"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Profile = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
            <Image src="/img/Profile.jpg" priority quality={100} fill alt="" className="border-2 border-accent rounded-full object-contain"/>
        </div>
      </motion.div>
    </div>
  )
}

export default Profile
