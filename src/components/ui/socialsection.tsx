import React from 'react';
import SocialButton from './socialbutton';

const SocialsSection = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <SocialButton
        link="mailto:your.email@example.com"
        icon="./images/gmail.png"
        iconFilled="./images/gmail-filled.png"
        alt="Gmail"
      />
      <SocialButton
        link="https://www.linkedin.com/in/yourprofile"
        icon="./images/linkedin.png"
        iconFilled="./images/linkedin-filled.png"
        alt="LinkedIn"
      />
      <SocialButton
        link="https://github.com/yourusername"
        icon="./images/github.png"
        iconFilled="./images/github-filled.png"
        alt="GitHub"
      />
    </div>
  );
};

export default SocialsSection;
