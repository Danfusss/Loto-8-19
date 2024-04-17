import { Box, Typography } from "@mui/material";

const WinTicket = () => {
  return (
    <Box
      sx={{
        width: "14.4vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          width: "14vw",
          height: "2.2vh",
          fontFamily: "Roboto",
          fontSize: "1.14rem",
          fontWeight: "400",
          lineHeight: "1.25rem",
          textAlign: "left",
        }}
      >
        {"Билет 1"}
      </Typography>
      <Typography
        sx={{
          width: "14vw",
          height: "2.2vh",
          fontFamily: "Roboto",
          fontSize: "1.14rem",
          fontWeight: "400",
          lineHeight: "1.25rem",
          textAlign: "left",
        }}
      >
        {"Ого, вы выиграли! Поздравляем!"}
      </Typography>
    </Box>
  );
};

export default WinTicket;
