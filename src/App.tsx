import "./App.css";
import { Button } from "./components/button/Button";
import viteLogo from "/vite.svg";
import { Typography } from "../src/components/atom/typography/Typography";

function App() {
  const handleClick = () => {
    alert("hello world!");
  };
  return (
    <>
      <Typography
        text="Button component with icon at right side"
        classes="mb-5"
      />
      <Button
        type="button"
        classes="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
        autoFocus
        onClick={handleClick}
      >
        Sample
        <img src={viteLogo} className="w-5 h-5" alt="vite logo" />
      </Button>
      <hr className="my-5" />
      <Typography
        text="Button component with icon at left side"
        classes="mb-5"
      />
      <Button
        type="button"
        classes="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
        disabled
        autoFocus
      >
        <img src={viteLogo} className="w-5 h-5" alt="vite logo" />
        hello
      </Button>
      <hr className="my-5" />
    </>
  );
}

export default App;
