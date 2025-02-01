"use client";

import { useWeatherQuery } from "@/hooks/useWeatherQuery";
import { Variant } from "@/types";
import React from "react";
import { VariantA } from "./variants/VariantA";
import { VariantB } from "./variants/VariantB";


type Props = {
  city: string;
  variant: Variant;
};

export function WeatherDisplay({ city,variant }: Props) {
  const { weather, loading, error } = useWeatherQuery(city);

  if (loading)
    return (
      <div className="w-full h-64 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="w-full p-6 bg-red-50 dark:bg-red-900/20 rounded-xl shadow-lg">
        <div className="text-red-500 dark:text-red-400 text-center">
          <span className="font-semibold">Error:</span> {error}
        </div>
      </div>
    );

  if (!weather) return null;

  return variant === "A" ? (
    <VariantA city={city} weather={weather} />
  ) : (
    <VariantB city={city} weather={weather} />
  );
  
}
