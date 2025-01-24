import "./App.css";
import { Typography } from "../src/components/atom/typography/Typography";
import { Media } from "./components/atom/media/Media";
import designSystem from "./assets/designSystem.jpg";

function App() {
  return (
    <>
      <Typography text="Design System : Media Component" classes="mb-5" />
      <hr className="mt-5 mb-5 border-tertiary" />
      <Media src={designSystem} alt={"Design System"} containerClasses = "w-[400px] h-[400]px"
      mediaClasses = "rounded object-cover" />
    </>
  );
}

export default App;
