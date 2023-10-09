import "./App.css";
import DisplayTap from "./components/displayTap";
import { Box } from "@chakra-ui/react";
import KanBenBoard from "./components/kanbenBoard";

function App() {
  return (
    <Box className="App">
      <DisplayTap />
      <KanBenBoard />
    </Box>
  );
}

export default App;
