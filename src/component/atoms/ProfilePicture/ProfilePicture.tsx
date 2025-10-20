import React from "react";
import { IMAGES } from "../../../constant/images";

function ProfilePicture() {
  return (
    <div className="rounded-full w-56 h-56 border-4 border-blueLocus">
      <img
        className="w-full h-full rounded-full"
        src={IMAGES.myPic}
        alt=""
      />
    </div>
  );
}

export default ProfilePicture;
