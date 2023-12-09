import {Image} from "react-bootstrap";
import ImageUploading from "react-images-uploading";
import React from "react";
import styles from "./ImageUploader.module.scss";

export default function ImageUploader (props) {
    const {images, onImageChange, width} = props;

    return (
      <ImageUploading
        value={images}
        onChange={onImageChange}
        maxNumber={1}
        dataURLKey="dataUrl"
      >
        {({
          onImageUpload,
        }) => (
          <div
            className={styles["image__container"]}
            onClick={onImageUpload}
          >
            <Image
              alt="Profile"
              src={images.length > 0 ? images[0].dataUrl : "/images/default-profile.png"}
              width={width || 180}
            />
          </div>
        )}
      </ImageUploading>
    );
}