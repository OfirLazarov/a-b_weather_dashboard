import { Variant } from "@/types";

export const getVariant = () => {
    const storedVariant = localStorage.getItem("variant"); //decided to use local storage because it keeps the data even if you close the browser and across different sessions.
  
    if (storedVariant) {
      return storedVariant as Variant; 
    } else {
      const randomVariant = Math.random() > 0.5 ? "A" : "B";
      localStorage.setItem("variant", randomVariant);
      return randomVariant;
    }
};
  