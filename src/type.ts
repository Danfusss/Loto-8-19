export interface numberLong {
  numberLong: number[];
  setNumberLong: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface numberShort {
  numberShort: number[];
  setNumberShort: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface ResponseType {
  isTicketWon: boolean;
  selectedNumber: Array<number>;
}
