// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("__session")?.value;
    const isProtected = req.nextUrl.pathname.startsWith("/dashboard");

    if (isProtected && !token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}
