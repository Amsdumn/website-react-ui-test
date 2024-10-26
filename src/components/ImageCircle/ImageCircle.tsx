import React from "react";
import styles from "./ImageCircle.module.css";

interface ImageCircleProps {
  imagePath: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

function ImageCircleComponent ({
  imagePath,
  imageAlt,
  imageWidth,
  imageHeight
} : ImageCircleProps) {
  return (
    <div style={{width: `${imageWidth}px`, height: `${imageHeight}px`}} className={styles.imageCircle}>
      <img className="object-cover" src={imagePath} width={imageWidth} height={imageHeight} alt={imageAlt} />
    </div>
  )
}

export default ImageCircleComponent;