import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import AppRoutes from "./components/app-routes/app-routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
