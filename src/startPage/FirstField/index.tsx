import { Box, Typography } from "@mui/material";
import NumberLong from "../numberLong";
import { FC } from "react";

interface FirstField {
  numberLong: number[];
  setNumberLong: React.Dispatch<React.SetStateAction<number[]>>;
}

const FirstField: FC<FirstField> = ({ numberLong, setNumberLong }) => {
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
        {"Поле 1"}
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
          {"Отметьте 8 чисел."}
        </Typography>
      </Typography>
      <Box>
        <NumberLong numberLong={numberLong} setNumberLong={setNumberLong} />
      </Box>
    </>
  );
};

export default FirstField;
