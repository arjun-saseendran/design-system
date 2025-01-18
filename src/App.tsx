import "./App.css";
import { Button } from "./components/button/Button";
import viteLogo from "/vite.svg";
import { Typography } from "../src/components/atom/typography/Typography";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const handleClick = () => {
    setIsLoading(true)
  };
  return (
    <>
      <Typography
        text="Button component with icon at right side"
        classes="mb-5"
      />
      <Button
        variant="secondary"
        variantType="outline"
        type="button"
        classes="test"
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
        variant="tertiary"
        variantType="solid"
        isLoading={isLoading}
        onClick={handleClick}
      >
        <img src={viteLogo} className="w-5 h-5" alt="vite logo" />
        Payment
      </Button>
      <hr className="my-5" />
    </>
  );
}

export default App;
