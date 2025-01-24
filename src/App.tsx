import "./App.css";
import { Typography } from "../src/components/atom/typography/Typography";
import { Media } from "./components/atom/media/Media";


function App() {
  
  return (
    <>
      <Typography text="Design System : Media Component" classes="mb-5" />
      <hr className="mt-5 mb-5 border-tertiary" />
      <Media/>
    </>
  );
}

export default App;
