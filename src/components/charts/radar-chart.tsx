"use client";

import { useEffect, useRef } from "react";
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from "chart.js";
import type { PillarXP } from "@/types";
import { PILLAR_CONFIG, PILLARS } from "@/types";

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

interface RadarChartProps {
  data: PillarXP[];
}

export function RadarChart({ data }: RadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const xpByPillar = Object.fromEntries(data.map((d) => [d.pillar, d.xp]));

    chartRef.current = new Chart(canvasRef.current, {
      type: "radar",
      data: {
        labels: PILLARS.map((p) => PILLAR_CONFIG[p].label),
        datasets: [
          {
            data: PILLARS.map((p) => xpByPillar[p] || 0),
            backgroundColor: "rgba(168, 85, 247, 0.15)",
            borderColor: "rgba(168, 85, 247, 0.6)",
            borderWidth: 2,
            pointBackgroundColor: PILLARS.map((p) => PILLAR_CONFIG[p].color),
            pointBorderColor: PILLARS.map((p) => PILLAR_CONFIG[p].color),
            pointRadius: 4,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          tooltip: {
            backgroundColor: "#1a1a2e",
            titleColor: "#f0f0f5",
            bodyColor: "#8888a0",
            borderColor: "rgba(255,255,255,0.1)",
            borderWidth: 1,
            cornerRadius: 8,
          },
        },
        scales: {
          r: {
            angleLines: { color: "rgba(255,255,255,0.05)" },
            grid: { color: "rgba(255,255,255,0.05)" },
            pointLabels: {
              color: "#8888a0",
              font: { size: 11, family: "Inter" },
            },
            ticks: { display: false },
            suggestedMin: 0,
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [data]);

  return (
    <div className="w-full max-w-xs mx-auto">
      <canvas ref={canvasRef} />
    </div>
  );
}
