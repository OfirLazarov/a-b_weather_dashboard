"use client";

import { WeatherProps } from "@/types";
import { CloudRain, Droplets, Wind } from "lucide-react";
import React from "react";
import { WeatherIcon } from "../WeatherIcon";

export const VariantA = ({ city, weather }: WeatherProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
      <div className="flex flex-col gap-6">
        <div>
        <div className="flex items-center justify-between gap-3 mb-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
              {city}
            </h2>
            <span className="px-2 py-1 text-sm border border-gray-200 dark:border-gray-600 text-blue-700 dark:text-blue-300 bg-gray-100 dark:bg-gray-700 rounded-full">
              Celsius
            </span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <WeatherIcon description={weather.description} />
            <div>
              <p className="text-8xl font-bold text-blue-600">
                {Math.round(weather.temperature)}{" "}
                <span className="text-4xl text-blue-400 relative">
                  <span className="absolute left-[-15px] text-7xl">°</span>C
                </span>
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 capitalize">
                {weather.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg flex items-center">
            <div className="flex-shrink-0">
              <Droplets className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <div className="text-gray-600 dark:text-gray-400 mb-1">Humidity</div>
              <div className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {weather.humidity}%
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg flex items-center">
            <div className="flex-shrink-0">
              <Wind className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <div className="text-gray-600 dark:text-gray-400 mb-1">Wind Speed</div>
              <div className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {weather.windSpeed} m/s
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg flex items-center">
            <div className="flex-shrink-0">
              <CloudRain className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <div className="text-gray-600 dark:text-gray-400 mb-1">Feels Like</div>
              <div className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {weather.feelsLike}°C
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
};
