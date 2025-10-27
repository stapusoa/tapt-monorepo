import React, { useEffect, useRef } from "react"
import './BarChart.css'

interface BarData {
  id: string;
  label: string;
  height: number; // Can be a percentage or raw value
  color: string;
}

interface BarChartProps {
  data: BarData[];
  caption: string;
  legend: { label: string; color: string }[];
}

const BarChart: React.FC<BarChartProps> = ({ data, caption, legend }) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const chart = chartRef.current

    const maxValue = Math.max(...data.map((bar) => bar.height))
    const isPercentage = maxValue <= 100

    const animateBars = () => {
      const bars = chart?.querySelectorAll<HTMLDivElement>(".bar")

      bars?.forEach((bar) => {
        const rawHeight = parseInt(bar.getAttribute("data-height") || "0", 10)
        const scaledHeight = isPercentage
          ? rawHeight
          : (rawHeight / maxValue) * 100

        const value = bar.querySelector(".bar-value")

        // Animate bar height visually
        setTimeout(() => {
          bar.style.height = `${scaledHeight}%`
        }, 500)

        // Display rawHeight as text, animated
        let currentValue = 0
        const interval = setInterval(() => {
          if (currentValue >= rawHeight) {
            clearInterval(interval)
          } else {
            currentValue++
            if (value) value.textContent = isPercentage
              ? `${currentValue}%`
              : currentValue.toString()
          }
        }, 10)


        setTimeout(() => {
          bar.style.height = `${scaledHeight}%`
        }, 500)
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateBars()
          observer.disconnect() // Stop observing after animation starts
        }
      },
      { threshold: 0.5 }
    )

    if (chart) observer.observe(chart)

    return () => {
      if (chart) observer.unobserve(chart)
    }
  }, [data])

  return (
    <div className="chart-wrapper" ref={chartRef}>
      <div className="chart-container">
        <div className="x-axis"></div>
        {data.map((bar) => (
          <div
            key={bar.id}
            className="bar"
            style={{ background: bar.color }}
            data-height={bar.height}
          >
            <span className="bar-value">0</span>
          </div>
        ))}
      </div>
      <p className="chart-caption">{caption}</p>
      <div className="chart-legend">
        {legend.map((item, index) => (
          <div className="legend-item" key={index}>
            <div
              className="legend-color"
              style={{ background: item.color }}
            ></div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BarChart