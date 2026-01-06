"use client";

import React from "react";
import ReactECharts from "echarts-for-react";

export default function ExpensePieChart() {
  const option = {
    color: ["#2E3A59", "#FF8A00", "#FF00FF", "#1E40FF"],
    tooltip: {
      trigger: "item",
      formatter: "{b}<br/>{c}%",
    },
    series: [
      {
        name: "Expenses",
        type: "pie",
        radius: ["40%", "70%"],
        center: ["50%", "50%"],
        padAngle: 6,
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "inside",
          formatter: "{d}%\n{b}",
          fontSize: 10,
          fontWeight: "bold",
          color: "#fff",
          lineHeight: 18,
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 30, name: "Entertainment" },
          { value: 15, name: "Bill Expense" },
          { value: 20, name: "Investment" },
          { value: 35, name: "Others" },
        ],
        emphasis: {
          scale: false,
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 400 }} />;
}
