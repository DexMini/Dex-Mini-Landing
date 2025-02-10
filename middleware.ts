import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { logger } from "@/app/utils/logger"

export function middleware(request: NextRequest) {
  const startTime = performance.now()
  const requestUrl = new URL(request.url)

  // Log the incoming request
  logger.info("navigation", "Incoming request", {
    path: requestUrl.pathname,
    query: Object.fromEntries(requestUrl.searchParams),
  })

  const response = NextResponse.next()

  // Log response timing
  const duration = performance.now() - startTime
  logger.info("performance", "Request completed", {
    path: requestUrl.pathname,
    duration: `${duration.toFixed(2)}ms`,
  })

  return response
}

export const config = {
  matcher: ["/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)"],
}

