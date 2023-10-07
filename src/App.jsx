import "./App.css";
import DisplayTap from "./components/displayTap";
import { Box } from "@chakra-ui/react";
import KanBenBoard from "./components/kanbenBoard";

function App() {
  return (
    <Box className="App bg-light-gray">
      <DisplayTap />
      <KanBenBoard />
    </Box>
  );
}

export default App;
