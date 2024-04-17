import { Box, IconButton, Typography } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

function generateRandomArray(min: number, max: number, n: number): number[] {
  const set = new Set<number>();
  while (set.size < n) {
    set.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return Array.from(set);
}

const HeaderCard = ({
  setNumberLong,
  setNumberShort,
}: {
  setNumberLong: React.Dispatch<React.SetStateAction<number[]>>;
  setNumberShort: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  return (
    <Box
      sx={{
        width: "14.4vw",
        display: "flex",
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
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => {
          setNumberLong(generateRandomArray(1, 10, 8));
          setNumberShort(generateRandomArray(1, 2, 1));
        }}
      >
        <AutoFixHighIcon />
      </IconButton>
    </Box>
  );
};
export default HeaderCard;
