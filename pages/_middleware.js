import { NextResponse } from "next/server";

export function middleware(req) {
  const { token } = req.cookies;
  const baseUrl = "http://localhost:3000"
  const url = req.url;
  if (token && url == `${baseUrl}/login`) {
    return NextResponse.redirect('/');
  } else if (token && url == `${baseUrl}/register`) {
    return NextResponse.redirect('/')
  } else if (!token && url === "http://localhost:3000/") {
    return NextResponse.redirect('/login');
  }
}
