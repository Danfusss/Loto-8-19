import { Box } from "@mui/material";
import StartPage from "./startPage";

function App() {
  return (
    <Box
      sx={{
        width: "16.8vw",
        height: "55vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background:
          "linear-gradient(180.00deg, rgb(69, 104, 220),rgb(176, 106, 179) 100%),rgb(239, 142, 72)",
      }}
    >
      <StartPage />
    </Box>
  );
}

export default App;
