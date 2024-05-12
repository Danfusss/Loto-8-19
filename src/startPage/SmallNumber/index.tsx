import { useState, useEffect, FC } from "react";

import { Box } from "@mui/material";

import { numberShort } from "../../type";

const number = Array.from({ length: 2 }, (_, i) => i + 1).map(String);

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

const SmallNumber: FC<numberShort> = ({ numberShort, setNumberShort }) => {
  const [styles, setStyles] = useState(Array(number.length).fill(defaultStyle));

  useEffect(() => {
    console.log(numberShort);
    const newStyles = number.map((item) => {
      const numericValue = parseInt(item, 10);
      return numberShort.includes(numericValue) ? selectedStyle : defaultStyle;
    });
    setStyles(newStyles);
  }, [numberShort]);

  const changeStyle = (dataValue: string) => {
    const numericValue = parseInt(dataValue, 10);

    setNumberShort((prevSelectedIndexes) => {
      if (prevSelectedIndexes.includes(numericValue)) {
        return prevSelectedIndexes.filter((i) => i !== numericValue);
      } else if (prevSelectedIndexes.length < 1) {
        return [...prevSelectedIndexes, numericValue];
      } else {
        alert("Вы можете выбрать только 1 цифру.");
        return prevSelectedIndexes;
      }
    });
  };

  return (
    <Box
      sx={{
        width: "14.8vw",
        height: "5vh",
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

export default SmallNumber;
