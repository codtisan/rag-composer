import * as echarts from "echarts";

export const ModelUsageChartSample = {
  title: {
    text: "Model Usage",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    data: ["Gemini", "Qwen3", "Deepseek", "Claude", "GPT", "Llama4", "Gemma3"],
    name: "Models",
  },
  yAxis: {
    type: "value",
    name: "Token",
  },
  series: [
    {
      name: "Sales",
      type: "bar",
      data: [
        { value: 65, itemStyle: { color: "#5470C6" } },
        { value: 59, itemStyle: { color: "#91CC75" } },
        { value: 80, itemStyle: { color: "#EE6666" } },
        { value: 81, itemStyle: { color: "#FAC858" } },
        { value: 56, itemStyle: { color: "#73C0DE" } },
        { value: 72, itemStyle: { color: "#3BA272" } },
        { value: 68, itemStyle: { color: "#FC8452" } },
      ],
      barWidth: "30%",
    },
  ],
};

export const ModelCostChartSample = {
  title: {
    text: "Model Cost",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    data: ["Gemini", "Qwen3", "Deepseek", "Claude", "GPT", "Llama4", "Gemma3"],
    name: "Models",
  },
  yAxis: {
    type: "value",
    name: "USD",
  },
  series: [
    {
      name: "Sales",
      type: "bar",
      data: [
        { value: 65, itemStyle: { color: "#5470C6" } },
        { value: 59, itemStyle: { color: "#91CC75" } },
        { value: 80, itemStyle: { color: "#EE6666" } },
        { value: 81, itemStyle: { color: "#FAC858" } },
        { value: 56, itemStyle: { color: "#73C0DE" } },
        { value: 72, itemStyle: { color: "#3BA272" } },
        { value: 68, itemStyle: { color: "#FC8452" } },
      ],
      barWidth: "30%",
    },
  ],
};

export const RequestChartSample = {
  title: {
    text: "Request",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    name: "Request",
  },
  series: [
    {
      data: [500, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      emphasis: {
        focus: "series",
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(128, 255, 165)",
          },
          {
            offset: 1,
            color: "rgb(1, 191, 236)",
          },
        ]),
      },
    },
  ],
};

export const LatencyChartSample = {
  title: {
    text: "Latency",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    name: "Latency (ms)",
  },
  series: [
    {
      data: [500, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      emphasis: {
        focus: "series",
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(128, 255, 165)",
          },
          {
            offset: 1,
            color: "rgb(1, 191, 236)",
          },
        ]),
      },
    },
  ],
};
