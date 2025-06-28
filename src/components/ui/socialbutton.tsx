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
      className="group relative w-10 h-10 rounded-md flex justify-center items-center transition-transform duration-300 hover:scale-110"
    >
      <div className="absolute inset-0 bg-[#2F756F] rounded-md transition-opacity duration-300 group-hover:opacity-30"></div>

      <img
        src={icon}
        alt={`${alt} icon`}
        className="absolute w-[30px] h-[30px] transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-10"
      />
      <img
        src={iconFilled}
        alt={`${alt} filled icon`}
        className="absolute w-[30px] h-[30px] transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
      />
    </a>
  );
};

export default SocialButton;
