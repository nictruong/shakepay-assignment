import { useQuery } from "react-query";
import { getRates } from "../api/api";

export const useRates = () => {
  const ratesData = useQuery("rates", getRates);

  return ratesData;
};
