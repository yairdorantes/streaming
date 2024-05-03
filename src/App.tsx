import { useRef, useState } from "react";
import "./App.css";
import video from "./videoplayback.mp4";
import { Button, Progress } from "@mantine/core";
function App() {
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const handleSeek = (event: React.MouseEvent<HTMLInputElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    console.log(rect);
    const offsetX = event.clientX - rect.left;
    console.log(offsetX);
    const percentage = offsetX / rect.width;
    console.log(percentage * 100);
    setCurrentTime(percentage * 100);

    const seekTime = duration * percentage;
    console.log(seekTime);
  };
  return (
    <>
      <div className="relative bg-slate-400 ">
        <div>{currentTime}</div>
        <video ref={videoRef} className="h-auto w-full" src={video}></video>
        <div className="absolute top-0 w-full  h-full">
          <div className="absolute bottom-0">
            <Button
              onClick={() => {
                videoRef.current?.play();
              }}
              className=""
            >
              *
            </Button>
          </div>
          <Progress
            className="w-full"
            onClick={handleSeek}
            value={currentTime}
          />
        </div>
      </div>
    </>
  );
}

export default App;
