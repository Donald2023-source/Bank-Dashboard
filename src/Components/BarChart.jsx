"use client";

import React from "react";
import ReactECharts from "echarts-for-react";

export default function BarChart({ categories, profitData, expensesData }) {
  const option = {
    color: ["#1814F3", "#16DBCC"],
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      formatter: (params) => {
        let result = `${params[0].axisValue}<br/>`;
        params.forEach((item) => {
          result += `${item.marker} ${
            item.seriesName
          }: ₦${item.value.toLocaleString()}<br/>`;
        });
        return result;
      },
    },
    legend: {
      data: ["Profit", "Expenses"],
      top: 0,
    },
    grid: {
      left: "5%",
      right: "5%",
      bottom: "10%",
      top: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: categories,
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#E5E9F2",
        },
      },
      axisLabel: {
        formatter: (value) => `${value / 1000}K`,
      },
    },
    series: [
      {
        name: "Profit",
        type: "bar",
        barGap: "60%",
        barWidth: 16,
        data: profitData.map((val) => ({
          value: val,
          itemStyle: {
            borderRadius: [10],
          },
        })),
      },
      {
        name: "Expenses",
        type: "bar",
        barWidth: 16,
        data: expensesData.map((val) => ({
          value: val,
          itemStyle: {
            borderRadius: [10],
          },
        })),
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 400 }} />;
}
