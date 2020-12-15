import React, { useEffect, useState } from "react";
import WebDevSVG from "./svg_library/WebDevSVG";
import ProgrammerSVG from "./svg_library/ProgrammerSVG";
import DesignerSVG from "./svg_library/DesignerSVG";

const ProfileSVG = () => {
  const [profileSVG, setProfileSVG] = useState("webdev");

  useEffect(() => {
    setTimeout(() => {
      if (profileSVG === "webdev") {
        setProfileSVG("programmer");
      } else if (profileSVG === "programmer") {
        setProfileSVG("designer");
      } else if (profileSVG === "designer") {
        setProfileSVG("webdev");
      }
    }, 10000);
  }, [profileSVG]);

  if (profileSVG === "webdev") {
    return <WebDevSVG />;
  } else if (profileSVG === "programmer") {
    return <ProgrammerSVG />;
  } else if (profileSVG === "designer") {
    return <DesignerSVG />;
  }
};

export default ProfileSVG;