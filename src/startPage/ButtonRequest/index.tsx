import { Button } from "@mui/material";

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
}: {
  numberLong: number[];
  numberShort: number[];
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
        url: "https://jsonplaceholder.typicode/posts", // URL РАНДОМ
        options: {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      });
      console.log("Успешно отправлено:", response);
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
