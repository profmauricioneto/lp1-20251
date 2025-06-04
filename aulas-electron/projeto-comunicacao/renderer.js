document.addEventListener('DOMContentLoaded', () => {
  async function updateStats() {
    try {
      const stats = await window.electron.getStats();

      // Atualiza os textos
      document.getElementById('cpu').textContent = stats.cpu;
      document.getElementById('memory').textContent = stats.memory;

      // Atualiza os gráficos
      updateChart(cpuChart, stats.cpu);
      updateChart(memoryChart, stats.memory);
    } catch (error) {
      console.error('Erro ao atualizar as estatísticas:', error);
    }
  }

  // Função para atualizar os gráficos
  function updateChart(chart, newValue) {
    chart.data.datasets[0].data.push(Number(newValue));
    if (chart.data.datasets[0].data.length > 20) {
      chart.data.datasets[0].data.shift(); // Remove o valor mais antigo
    }
    chart.update();
  }

  // Configuração inicial dos gráficos
  const cpuChart = new Chart(document.getElementById('cpuChart'), {
    type: 'line',
    data: {
      labels: Array(20).fill(''), // Labels vazias
      datasets: [{
        label: 'Uso da CPU (%)',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      }],
    },
    options: {
      responsive: true,
      scales: {
        x: { display: false },
        y: { beginAtZero: true, max: 100 },
      },
    },
  });

  const memoryChart = new Chart(document.getElementById('memoryChart'), {
    type: 'line',
    data: {
      labels: Array(20).fill(''), // Labels vazias
      datasets: [{
        label: 'Uso de Memória (%)',
        data: [],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false,
      }],
    },
    options: {
      responsive: true,
      scales: {
        x: { display: false },
        y: { beginAtZero: true, max: 100 },
      },
    },
  });

  setInterval(updateStats, 1000);
});