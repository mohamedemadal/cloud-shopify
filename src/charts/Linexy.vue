<template>
  <va-card class="h-full py-[1%] px-2">
    <div class="card">
      <Chart type="bar" :data="chartData" :options="chartOptions" />
    </div>
  </va-card>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  const fetchData = () => {
    axios
      .post('https://api.dataforseo.com/v3/dataforseo_labs/google/ranked_keywords/live', {
        data: {
          target: 'dataforseo.com',
          date_from: '2020-01-01',
          date_to: '2021-01-01',
        },
      })
      .then((res) => {
        console.log(res.data.tasks[0].result[0].metrics.organic)
        console.log(chartData.value.datasets[0])
      })
  }
  onMounted(() => {
    chartData.value = setChartData()
    chartOptions.value = setChartOptions()
  })

  const chartData = ref()
  const chartOptions = ref()

  const setChartData = () => {
    return {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Sales',
          data: [540, 325, 702, 620],
          backgroundColor: ['#25B2FA'],
          // backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          // borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 1,
        },
      ],
    }
  }
  const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement)
    const textColor = documentStyle.getPropertyValue('--text-color')
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

    return {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    }
  }
</script>
