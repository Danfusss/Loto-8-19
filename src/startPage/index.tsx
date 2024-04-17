import { Box } from "@mui/material";

import FirstField from "./FirstField";
import SecondField from "./SecondField";
import HeaderCard from "./HeaderCard";
import { useEffect, useState } from "react";
import ButtonRequest from "./ButtonRequest";
import WinTicket from "./WinTicket";

import { ResponseType } from "../type";

const StartPage = () => {
  const [numberLong, setNumberLong] = useState<number[]>([]);
  const [numberShort, setNumberShort] = useState<number[]>([]);
  const [response, setResponse] = useState<ResponseType | null>(null);

  useEffect(() => {
    console.log(response?.isTicketWon);
  }, [response]);

  return (
    <Box
      sx={{
        width: "15.4vw",
        height: "34vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "1rem",
        borderRadius: "3px",
        background: "rgb(255, 255, 255)",
      }}
    >
      {response?.isTicketWon !== true ? (
        <>
          <HeaderCard
            setNumberLong={setNumberLong}
            setNumberShort={setNumberShort}
          />
          <FirstField numberLong={numberLong} setNumberLong={setNumberLong} />
          <SecondField
            numberShort={numberShort}
            setNumberShort={setNumberShort}
          />
          <ButtonRequest
            numberLong={numberLong}
            numberShort={numberShort}
            setResponse={setResponse}
          />
        </>
      ) : (
        <WinTicket />
      )}
    </Box>
  );
};

export default StartPage;
