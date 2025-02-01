import { NextRequest, NextResponse } from "@/node_modules/next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!query) {
    return NextResponse.json({ error: "City query is required" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`
    );

    if (!response.ok){
        throw new Error("Failed to fetch location data");
    } 

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
