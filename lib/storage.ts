import { City } from "@/types";

export const addToRecentCities = (cities:City[],cityName: string) => {
  const cityIndex = cities.findIndex((city) => city.name === cityName);
  let updatedCities = [...cities];

  if (cityIndex !== -1) {
    updatedCities.splice(cityIndex, 1);
  }

  updatedCities.unshift({
    name: cityName,
    lastViewed: Date.now(),
    isFavorite: false,
  });

  return updatedCities.slice(0, 5);;
};
