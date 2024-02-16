import React, { lazy, useEffect, useState, Suspense } from "react";
import vid1 from "./videos/vid1.mp4"
import vid2 from "./videos/vid2.mp4"
import vid3 from "./videos/vid3.mp4"
import "./App.css";

const LazyVideo = lazy(() => import("./components/Video/Video"));

const Loading = () => {
  <h1 style={{color:"#fff"}}>Loading...</h1>
}

export default function App() {
  const data = [
    {
      id:1,
      videoUrl:vid1,
      likes:40, 
      comment:10,
      share:5
    },
    {
      id:2,
      videoUrl:vid2,
      likes:45, 
      comment:25,
      share:50
    },
    {
      id:3,
      videoUrl:vid3,
      likes:400, 
      comment:100,
      share:50
    }
  ]
  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <center>
          <div className="video-container" id="video-container">
            {data.map((data) => (
              <LazyVideo
                key = {data.id}
                url = {data.videoUrl}
                likes = {data.likes}
                comment = {data.commentCount}
                share = {data.shareCount}
              />  
            ))}
          </div>
        </center>
      </div>
    </Suspense>
  );
}
