import React from 'react';

interface SocialButtonProps {
  link: string;
  icon: string;
  iconFilled: string;
  alt: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ link, icon, iconFilled, alt }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-10 h-10 bg-[#2F756F] rounded-md flex justify-center items-center transition-all duration-300 hover:opacity-20"
    >
      <img
        src={icon}
        alt={`${alt} icon`}
        className="absolute w-[30px] h-[30px] transition-opacity duration-300 opacity-100 group-hover:opacity-0"
      />
      <img
        src={iconFilled}
        alt={`${alt} filled icon`}
        className="absolute w-[30px] h-[30px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      />
    </a>
  );
};

export default SocialButton;

