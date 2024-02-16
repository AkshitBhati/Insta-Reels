import React, { useRef, useState, useEffect } from "react";
import "./Video.css";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import NavigateFooter from "../NavigateFooter/NavigateFooter";

export default function Video({ url, username, likes, comment, share }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const vidRef = useRef();

  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      vidRef.current.play();
      setIsVideoPlaying(true);
    }
  };

 useEffect(() => {
    const scroll = document.getElementById("video-container");

    if (scroll) {
      scroll.addEventListener("scroll", () => {
        vidRef.current.pause();
      });
    }
  }, []);
  return (
    <div className="video-cards">
      {/* <Header /> */}
      <video
        onClick={onVideoClick}
        className="video-player"
        ref={vidRef}
        src={url}
        loop
      />
      <div className="sidebar">
        <Sidebar likes={likes} comments={comment} share={share} />
      </div>
      
    
    </div>
  );
}
