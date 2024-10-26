import React from "react";
import Button from "../Button";

const userDataProfile = {
  name: "Siriwat Rachanon",
  image: "/images/user-img-04.png",
  alt: "image of the user"
}

function ButtonHeaderComponent () {
  return (
    <>
      <Button
        typeButton="button"
        imagePath={userDataProfile.image}
        imageAlt={userDataProfile.alt}
        label={userDataProfile.name} 
        labelColor="#ffffff" 
        labelFontSize={16} 
        labelFontWeight={400} 
        bgColor="#1C1C29" 
        paddingX={24} 
        paddingY={16} 
        rounded={18} 
      />
      <Button
        typeButton="button"
        imagePath=""
        imageAlt="" 
        label="ออกจากระบบ" 
        labelColor="#000000" 
        labelFontSize={16} 
        labelFontWeight={400} 
        bgColor="#EFEFEF" 
        paddingX={24} 
        paddingY={18} 
        rounded={18} 
      />
    </>
  )
}

export default ButtonHeaderComponent;