import { useState, useEffect, FC } from "react";

import { Box } from "@mui/material";

import { numberLong } from "../../type";

const number = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
];

const defaultStyle = {
  width: "2vw",
  height: "3.5vh",
  border: "1px solid rgb(221, 221, 221)",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
};

const selectedStyle = {
  ...defaultStyle,
  width: "1.8vw",
  height: "3.3vh",
  background: "rgb(255, 210, 5)",
};

const NumberLong: FC<numberLong> = ({ numberLong, setNumberLong }) => {
  const [styles, setStyles] = useState(Array(number.length).fill(defaultStyle));

  useEffect(() => {
    console.log(numberLong);
    const newStyles = number.map((item) => {
      const numericValue = parseInt(item, 10);
      return numberLong.includes(numericValue) ? selectedStyle : defaultStyle;
    });
    setStyles(newStyles);
  }, [numberLong]);

  const changeStyle = (dataValue: string) => {
    const numericValue = parseInt(dataValue, 10);

    setNumberLong((prevSelectedIndexes) => {
      if (prevSelectedIndexes.includes(numericValue)) {
        return prevSelectedIndexes.filter((i) => i !== numericValue);
      } else if (prevSelectedIndexes.length < 8) {
        return [...prevSelectedIndexes, numericValue];
      } else {
        alert("Вы можете выбрать только 8 цифр.");
        return prevSelectedIndexes;
      }
    });
  };

  return (
    <Box
      sx={{
        width: "14.8vw",
        height: "11vh",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {number.map((item, index) => {
        return (
          <Box
            data-value={item}
            sx={styles[index]}
            key={index}
            onClick={() => changeStyle(item)}
          >
            {item}
          </Box>
        );
      })}
    </Box>
  );
};

export default NumberLong;
