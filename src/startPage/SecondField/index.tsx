import { Dispatch, FC, SetStateAction } from "react";

import { Box, Typography } from "@mui/material";
import SmallNumber from "../SmallNumber";

interface SecondField {
  numberShort: number[];
  setNumberShort: Dispatch<SetStateAction<number[]>>;
}

const SecondField: FC<SecondField> = ({ numberShort, setNumberShort }) => {
  return (
    <>
      <Typography
        sx={{
          width: "14vw",
          height: "2.2vh",
          fontFamily: "Roboto",
          fontSize: "1.1rem",
          fontWeight: "400",
          lineHeight: "1.25rem",
          textAlign: "left",
        }}
      >
        {"Поле 2"}
        <Typography
          display={"inline-block"}
          sx={{
            marginLeft: "1rem",
            fontFamily: "Roboto",
            fontSize: "0.88rem",
            fontWeight: "300",
            lineHeight: "1.25rem",
          }}
        >
          {"Отметьте 1 число."}
        </Typography>
      </Typography>
      <Box sx={{ width: "14.4vw", height: "6.3vh" }}>
        <SmallNumber
          numberShort={numberShort}
          setNumberShort={setNumberShort}
        />
      </Box>
    </>
  );
};

export default SecondField;
