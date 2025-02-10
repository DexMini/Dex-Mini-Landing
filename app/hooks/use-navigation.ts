'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { logger } from '@/app/utils/logger'
import { routes, type RouteKey } from '@/app/utils/routes'

export function useNavigation() {
  const router = useRouter()
  const currentPath = usePathname()

  const navigate = useCallback((
    routeKey: RouteKey,
    options?: { 
      params?: Record<string, string>
      replace?: boolean 
    }
  ) => {
    const startTime = performance.now()
    const path = routes[routeKey]
    
    logger.trackRouteChange(currentPath, path)
    
    const url = new URL(path, window.location.origin)
    if (options?.params) {
      Object.entries(options.params).forEach(([key, value]) => {
        url.searchParams.set(key, value)
      })
    }
    
    if (options?.replace) {
      router.replace(url.pathname + url.search)
    } else {
      router.push(url.pathname + url.search)
    }
    
    const duration = performance.now() - startTime
    logger.info('performance', 'Navigation completed', {
      from: currentPath,
      to: path,
      duration: `${duration.toFixed(2)}ms`,
    })
  }, [router, currentPath])

  return { navigate, currentPath }
}

