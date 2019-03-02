window.onload = function () {

  var CHART = window.Chart;

  init();

  function init() {
    initCharts();
  }

  function initCharts() {
    initChartGlobalSettings();
    initSkillDistricutionChart();
    initGithubCollectionChart();
  }

  function initChartGlobalSettings() {
    CHART.defaults.global.defaultFontSize = 16;
  }

  function initSkillDistricutionChart() {
    var ctx = document.getElementById('partial-skill-districution').getContext('2d');
    var myPieChart = new CHART(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [5, 10, 10, 20, 20, 10, 8, 7, 10],
          backgroundColor: [
            'rgba(255, 0, 255, .4)',
            'rgba(255, 0, 0, .4)',
            'aquamarine',
            'rgba(255, 165, 0, .4)',
            'rgba(255, 215, 0, .4)',
            'rgba(0, 255, 0, .4)',
            'rgba(0, 255, 255, .4)',
            'rgba(128, 0, 128, .4)',
            'rgba(216, 190, 216, .4)'
          ],
        }],
        labels: [
          'html',
          'css',
          'js',
          'ts',
          'react',
          'vue',
          'node',
          'python',
          'vscode'
        ],
      },
      options: {
        title: {
          display: true,
          text: '技能分布',
          fontSize: 26
        },
      }
    });
  }

  function initGithubCollectionChart() {
    var ctx = document.getElementById('partial-github-collection').getContext('2d');
    var myPieChart = new CHART(ctx, {
      type: 'bar',
      data: {
        datasets: [{
          data: [352, 1782, 182, 24, 55],
          backgroundColor: [
            'rgba(255, 215, 0, .4)',
            'rgba(0, 255, 0, .4)',
            'rgba(0, 255, 255, .4)',
            'rgba(128, 0, 128, .4)',
            'rgba(216, 190, 216, .8)'
          ],
          label: 'total',
        }],
        labels: [
          'stars',
          'contributes',
          'follows',
          'repositories',
          'issues',
        ],
      },
      options: {
        title: {
          display: true,
          text: 'github统计',
          fontSize: 26
        }
      }
    });
  }
}