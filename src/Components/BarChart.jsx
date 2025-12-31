var series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: "bar",
    stack: "a",
    name: "a",
  },
  {
    data: [10, 46, 64, "-", 0, "-", 0],
    type: "bar",
    stack: "a",
    name: "b",
  },
  {
    data: [30, "-", 0, 20, 10, "-", 0],
    type: "bar",
    stack: "a",
    name: "c",
  },
  {
    data: [30, "-", 0, 20, 10, "-", 0],
    type: "bar",
    stack: "b",
    name: "d",
  },
  {
    data: [10, 20, 150, 0, "-", 50, 10],
    type: "bar",
    stack: "b",
    name: "e",
  },
];

/* -------- Stack rounding logic -------- */
const stackInfo = {};

for (let i = 0; i < series[0].data.length; i++) {
  for (let j = 0; j < series.length; j++) {
    const stackName = series[j].stack;
    if (!stackName) continue;

    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: [],
      };
    }

    const data = series[j].data[i];
    if (data && data !== "-") {
      if (stackInfo[stackName].stackStart[i] == null) {
        stackInfo[stackName].stackStart[i] = j;
      }
      stackInfo[stackName].stackEnd[i] = j;
    }
  }
}

for (let i = 0; i < series.length; i++) {
  const info = stackInfo[series[i].stack];
  const data = series[i].data;

  for (let j = 0; j < data.length; j++) {
    const isEnd = info.stackEnd[j] === i;
    const topRadius = isEnd ? 20 : 0;

    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topRadius, topRadius, 0, 0],
        borderWidth: 0,
        color: series[i].stack === "a" ? "#1814F3" : "#16DBCC",
      },
    };
  }
}

option = {
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "shadow" },
  },
  grid: {
    left: "3%",
    right: "3%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisTick: { show: false },
  },
  yAxis: {
    type: "value",
  },
  series,
};

myChart.setOption(option);
