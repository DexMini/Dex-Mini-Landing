/**
 * Logger utility for consistent application logging
 * Uses singleton pattern to ensure single instance
 */

type LogLevel = "info" | "warn" | "error"
type LogCategory = "performance" | "navigation" | "error"

interface LogEntry {
  timestamp: string
  level: LogLevel
  category: LogCategory
  message: string
  details?: Record<string, any>
}

class Logger {
  private static instance: Logger
  private logs: LogEntry[] = []
  private readonly MAX_LOGS = 1000

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  private formatMessage(
    level: LogLevel,
    category: LogCategory,
    message: string,
    details?: Record<string, any>,
  ): string {
    return `[${level.toUpperCase()}][${category}] ${message}${details ? ` | ${JSON.stringify(details)}` : ""}`
  }

  private log(level: LogLevel, category: LogCategory, message: string, details?: Record<string, any>) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      category,
      message,
      details,
    }

    this.logs.push(entry)
    if (this.logs.length > this.MAX_LOGS) {
      this.logs.shift()
    }

    // Only log in development
    if (process.env.NODE_ENV === "development") {
      const formattedMessage = this.formatMessage(level, category, message, details)
      console[level](formattedMessage)
    }
  }

  info(category: LogCategory, message: string, details?: Record<string, any>) {
    this.log("info", category, message, details)
  }

  warn(category: LogCategory, message: string, details?: Record<string, any>) {
    this.log("warn", category, message, details)
  }

  error(category: LogCategory, message: string, details?: Record<string, any>) {
    this.log("error", category, message, details)
  }

  getLogs() {
    return this.logs
  }
}

export const logger = Logger.getInstance()

