"use client";
import React from "react";
import styles from "./video.module.css";
import "next-cloudinary/dist/cld-video-player.css";
import AfricaMap from "./AfricaMap";
import { CldVideoPlayer } from "next-cloudinary";

const VideoAndMap = () => {
  return (
    <div className="flex relative mb-4 mt-10">
      <div className={styles.container}>
        <p className={styles.text}>
          Hi, I’m Gustavo, one of the CEOs at GRITO TALENT AGENCY
        </p>
        <CldVideoPlayer
          id=""
          width="321"
          height="280"
          logo={false}
          autoPlay="on-scroll"
          colors={{
            accent: "#ff0000",
            text: "#fff",
          }}
          transformation={{
            gravity: "center",
            width: 350,
            height: 400,
            quality: "auto:best",
          }}
          src="f6yucyok5mgf5aaocywa"
        />
      </div>
      <AfricaMap />
    </div>
  );
};

export default VideoAndMap;
