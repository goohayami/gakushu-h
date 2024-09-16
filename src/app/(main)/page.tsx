import Image from "next/image";
import Video from "next-video";
import myVideo from "/videos/20240915-210856.mp4";

export default function Home() {
  return (
    <div>
      <div>
        <h1>main</h1>
        <Video src={myVideo} />
      </div>
    </div>
  );
}
