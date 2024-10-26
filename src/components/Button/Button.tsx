import React from "react";
import styles from "./Button.module.css";
import ImageCircle from "../ImageCircle"
import { 
  ArrowDown2
} from 'iconsax-react';

interface ButtonProps {
  paddingY: number;
  paddingX: number;
  rounded: number;
  bgColor: string;
  label: string;
  labelColor: string;
  labelFontSize: number;
  labelFontWeight: number | string;
  imagePath: string;
  imageAlt: string;
  typeButton: "button" | "submit" | "reset" | undefined;
}

function ButtonComponent ({
  label,
  paddingX,
  paddingY,
  rounded,
  bgColor,
  labelColor,
  labelFontSize,
  labelFontWeight,
  imageAlt,
  imagePath,
  typeButton
} : ButtonProps) {
  return (
    <button 
    type={typeButton}
    className={styles.button} 
    style={{
      padding: `${paddingY}px ${paddingX}px`, 
      borderRadius: `${typeButton === 'submit' ? `0 ${rounded}px ${rounded}px 0` : `${rounded}px`}`,
      backgroundColor: `${bgColor}`,
    }}>
      {imagePath !== '' && (
      <ImageCircle 
        imagePath={imagePath} 
        imageWidth={30} 
        imageHeight={30} 
        imageAlt={imageAlt} 
      />
      )}
      <div style={{
        color: `${labelColor}`,
        fontSize: `${labelFontSize}px`,
        fontWeight: `${labelFontWeight}`,
      }}>
        {label}
      </div>
      {imagePath !== '' && (
      <div className="hidden lg:block">
        <ArrowDown2
          size="24"
          color={labelColor}
          variant="Outline"
        />
      </div>
      )}
    </button>
  )
}

export default ButtonComponent;