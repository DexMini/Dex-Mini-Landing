type LogLevel = "info" | "warn" | "error" | "debug"

class Logger {
  private isDevelopment = process.env.NODE_ENV === "development"

  private formatMessage(level: LogLevel, message: string, meta?: any) {
    const timestamp = new Date().toISOString()
    return `[${timestamp}] [${level.toUpperCase()}] ${message} ${meta ? JSON.stringify(meta) : ""
      }`
  }

  info(message: string, meta?: any) {
    if (this.isDevelopment) {
      console.log(this.formatMessage("info", message, meta))
    }
  }

  warn(message: string, meta?: any) {
    if (this.isDevelopment) {
      console.warn(this.formatMessage("warn", message, meta))
    }
  }

  error(message: string, meta?: any) {
    console.error(this.formatMessage("error", message, meta))
  }

  debug(message: string, meta?: any) {
    if (this.isDevelopment) {
      console.debug(this.formatMessage("debug", message, meta))
    }
  }
}

export const logger = new Logger() 