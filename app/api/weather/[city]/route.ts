import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: { params: { city: string } }) {
  const { city } =  await context.params;  
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!city) {
    return NextResponse.json({ error: "City name is required" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();
    const formattedData = {
      temperature: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      feelsLike: data.main.feels_like,
      description: data.weather[0].description,
    };

    return NextResponse.json(formattedData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}