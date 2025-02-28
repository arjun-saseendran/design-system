import "./App.css";
import { Typography } from "../src/components/atom/typography/Typography";
import { Media } from "./components/atom/media/Media";
import designSystem from "./assets/designSystem.jpg";
import tenSeconds from "./assets/tenSeconds.mp4";
import { Card } from "./components/molecule/Card";
import { CardVariants } from "./pages/card/CardVariants";

function App() {
  return (
    <>
      <Typography
        text="Design System : Media Component"
        classes="mb-8 text-[30px] font-bold text-black"
      />

      <Typography
        text="Design System : Media Component: Video"
        classes="mt-4 text-[18px] font-bold text-black"
      />
      <hr className="mt-10 mb-5 border-tertiary" />
      <Media
        type="video"
        src={tenSeconds}
        alt={"Ten Seconds"}
        containerClasses="w-[400px] h-[400]px"
        mediaClasses="rounded object-cover"
        autoPlay
        muted
      />
      <Typography
        text="Design System : Media Component: Image"
        classes="mt-4 text-[18px] font-bold text-black"
      />
      <hr className="mt-10 mb-5 border-tertiary" />
      <Media
        type="image"
        src={designSystem}
        alt={"Design System"}
        containerClasses=""
        mediaClasses="rounded object-cover"
      />
      <CardVariants />
    </>
  );
}

export default App;
