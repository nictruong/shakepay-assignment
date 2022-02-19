export const getTransactions = async () => {
  const response = await fetch(
    "https://shakepay.github.io/programming-exercise/web/transaction_history.json"
  );

  return response.json();
};

export const getRates = async () => {
  const response = await fetch(
    "https://shakepay.github.io/programming-exercise/web/rates.json"
  );

  return response.json();
};
