import React from "react";
import { motion } from "framer-motion";
import ProfileSVG from "./ProfileSVG";

import Navbar from "./Navbar";

const Profile = () => {
  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        id="profile_background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        alt="profile background"
        src="./images/greg-rakozy-oMpAz-DN-9I-unsplash.jpg"
      />
      <Navbar />
      {/* <motion.div
        id="profile_pic-container"
        initial={{ opacity: 0, x: 250, scale: 1 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0, duration: 2 }}
      >
        <motion.img
          initial={{ opacity: 0, x: 250, scale: 1 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1, duration: 2 }}
          src="/images/51563575.jpg"
        />
      </motion.div> */}
      <motion.section
        initial={{ opacity: 0, y: -450, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 4 }}
      >
        <p>Hello. My name is </p>
        <h1>Nolan Crenshaw</h1>
        <div>
          <h2>I am a </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            id="profile_svg"
          >
            <ProfileSVG />
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Profile;
