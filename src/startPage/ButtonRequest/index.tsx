import { Button } from "@mui/material";

import { ResponseType } from "../../type";

interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}
interface FetchWithRetryParams {
  url: string;
  options: FetchOptions;
  retries?: number;
}
const fetchWithRetry = async ({
  url,
  options,
  retries = 3,
}: FetchWithRetryParams) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Ошибка ответа сервера");
    }
    return response.json();
  } catch (error) {
    if (retries === 1) throw error;
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Задержка 2 секунды перед повторной попыткой
    return fetchWithRetry({ url, options, retries: retries - 1 });
  }
};

const ButtonRequest = ({
  numberLong,
  numberShort,
  setResponse,
}: {
  numberLong: number[];
  numberShort: number[];
  setResponse: React.Dispatch<React.SetStateAction<ResponseType | null>>;
}) => {
  const handleSubmit = async () => {
    const data = {
      selectedNumber: {
        firstField: numberLong,
        secondField: numberShort,
      },
      isTicketWon: true, // Логика выйгрыша
    };

    try {
      const response = await fetchWithRetry({
        url: "https://jsonplaceholder.typicode.com/posts", // URL РАНДОМ
        options: {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      });
      setResponse(response);
      console.log("Успешно отправлено:", response);
      return response;
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Не удалось отправить данные. Пожалуйста, попробуйте еще раз.");
    }
  };

  return (
    <Button
      onClick={handleSubmit}
      sx={{
        width: "9.3vw",
        height: "4vh",
        marginBottom: "0.5rem",
        border: "1px solid rgb(0, 0, 0)",
        borderRadius: "40px",
        color: "black",
        opacity: "0.16",
        fontFamily: "Roboto",
        fontSize: "0.88rem",
        fontWeight: "400",
        lineHeight: "5rem",
        textTransform: "none",
      }}
    >
      {"Показать результат"}
    </Button>
  );
};

export default ButtonRequest;
