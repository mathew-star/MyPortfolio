import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

interface SocialItem {
  icon: JSX.Element;
  path: string;
}

const social: SocialItem[] = [
  { icon: <FaGithub />, path: "https://github.com/mathew-star" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mathew-joseph-434729192/" },
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
