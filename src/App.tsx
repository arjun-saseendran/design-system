import "./App.css";
import { Typography } from "./components/atom/typography/Typography";

function App() {
  return (
    <>
      <Typography
        tag="h1"
        text="Welcome to Design System"
        className="title"
        role="heading"
        ariaLabel="Welcome to Design System"
        ariaLabelledBy="title"
      >
        <span style={{ font: "bold" }}>'Hello design system'</span>
      </Typography>
      <Typography tag="h2" text="This is for typography" />
    </>
  );
}

export default App;
