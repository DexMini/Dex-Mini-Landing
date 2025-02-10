export const routes = {
  home: "/",
} as const

export type AppRoutes = typeof routes
export type RouteKey = keyof typeof routes

export function getRoute(key: RouteKey): string {
  return routes[key]
}

export function createUrl(path: string, params?: Record<string, string>) {
  const baseUrl = "https://dexmini.com"
  const url = new URL(path, baseUrl)

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value)
    })
  }

  return url.toString()
}

