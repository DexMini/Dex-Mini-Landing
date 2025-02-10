type PerformanceMetric = {
  component: string;
  action: string;
  startTime: number;
  duration?: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private static instance: PerformanceMonitor;

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  start(component: string, action: string): () => void {
    const metric: PerformanceMetric = {
      component,
      action,
      startTime: performance.now()
    };
    this.metrics.push(metric);

    return () => {
      metric.duration = performance.now() - metric.startTime;
      console.log(
        `%c[Performance] ${component} - ${action}: ${metric.duration.toFixed(2)}ms`,
        'color: #0ea5e9'
      );
    };
  }

  getMetrics() {
    return this.metrics;
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance();

