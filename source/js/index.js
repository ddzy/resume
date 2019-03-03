window.onload = function () {

  var G2 = window.G2;

  init();

  function init() {
    initCharts();
  }

  function initCharts() {
    initSkillDistricutionChart();
    initGithubCollectionChart();
    // initLeetcodePrograssChart();
  }

  function initSkillDistricutionChart() {
    var data = [
      {
        type: 'html',
        value: 5
      },
      {
        type: 'css',
        value: 10
      },
      {
        type: 'js',
        value: 10
      },
      {
        type: 'ts',
        value: 20
      },
      {
        type: 'react',
        value: 20
      },
      {
        type: 'vue',
        value: 5
      },
      {
        type: 'node',
        value: 8
      },
      {
        type: 'python',
        value: 7
      },
      {
        type: 'vscode',
        value: 15
      }
    ];

    function getPoint(p0, p1, ratio) {
      return {
        x: (1 - ratio) * p0.x + ratio * p1.x,
        y: (1 - ratio) * p0.y + ratio * p1.y
      };
    }

    var pointRatio = 0.7;
    var sliceNumber = 0.005;

    G2.Shape.registerShape('interval', 'platelet', {
      draw: function draw(cfg, container) {
        cfg.points[1].y = cfg.points[1].y - sliceNumber;
        cfg.points[2].y = cfg.points[2].y - sliceNumber;
        var centerPoint = {
          x: cfg.points[3].x,
          y: (cfg.points[2].y + cfg.points[3].y) / 2
        };
        centerPoint = this.parsePoint(centerPoint);
        var points = this.parsePoints(cfg.points);
        var path = [];
        var tmpPoint1 = getPoint(points[0], points[3], pointRatio);
        var tmpPoint2 = getPoint(points[1], points[2], pointRatio);
        path.push(['M', points[0].x, points[0].y]);
        path.push(['L', tmpPoint1.x, tmpPoint1.y]);
        path.push(['Q', points[3].x, points[3].y, centerPoint.x, centerPoint.y]);
        path.push(['Q', points[2].x, points[2].y, tmpPoint2.x, tmpPoint2.y]);
        path.push(['L', points[1].x, points[1].y]);
        path.push(['z']);
        return container.addShape('path', {
          attrs: {
            fill: cfg.color,
            path: path
          }
        });
      }
    });

    var chart = new G2.Chart({
      container: 'partial-skill-districution',
      forceFit: true,
      padding: [120, 0]
    });

    chart.tooltip({
      showTitle: false
    });
    chart.source(data);
    chart.coord('theta');
    chart.intervalStack().position('value').color('type').shape('platelet').label('type');
    chart.guide().text({
      content: '技能分布',
      top: true,
      position: ['50%', '-30%'],
      style: {
        fill: '#666',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
      },
    });

    chart.render();
  }

  function initGithubCollectionChart() {
    var data = [
      {
        name: 'stars',
        vote: 352
      },
      {
        name: 'contributes',
        vote: 1782
      },
      {
        name: 'follows',
        vote: 182
      },
      {
        name: 'repositories',
        vote: 24
      },
      {
        name: 'issues',
        vote: 55
      },
    ];

    var chart = new G2.Chart({
      container: 'partial-github-collection',
      forceFit: true,
      padding: [120, 100, 120, 100]
    });
    chart.source(data, {
      vote: {
        min: 0
      }
    });
    chart.axis('vote', {
      labels: null,
      title: null,
      line: null,
      tickLine: null
    });
    chart.interval().position('name*vote').color('name').label('vote');
    chart.guide().text({
      content: 'github统计',
      top: true,
      position: ['50%', '-30%'],
      style: {
        fill: '#666',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
      },
    });

    chart.render();
  }

  function initLeetcodePrograssChart() {
    var ctx = document.getElementById('partial-leetcode-prograss').getContext('2d');
    var myPieChart = new CHART(ctx, {
      type: 'pie',
      data: {
        datasets: [{
          data: [60, 2, 0],
          backgroundColor: [
            'rgba(0, 255, 0, .4)',
            'rgba(128, 0, 128, .4)',
            'rgba(216, 190, 216, .4)'
          ],
        }],
        labels: [
          'easy',
          'medium',
          'hard'
        ]
      },
      options: {
        title: {
          display: true,
          text: 'leetcode进度',
          fontSize: 26
        },
        responsive: true
      }
    });
  }
}