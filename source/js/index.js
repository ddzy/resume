window.onload = function () {

  var G2 = window.G2;

  init();

  function init() {
    initCharts();
  }

  function initCharts() {
    initSkillDistricutionChart();
    initGithubCollectionChart();
    initLeetcodePrograssChart();
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
    chart
      .intervalStack()
      .position('value')
      .color('type')
      .shape('platelet')
      .label('type');
    chart
      .guide()
      .text({
        content: '技能分布',
        top: true,
        position: ['50%', '-30%'],
        style: {
          fill: '#666',
          fontSize: 24,
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
    chart
      .source(data, {
        vote: {
          min: 0
        }
      });
    chart
      .axis('vote', {
        labels: null,
        title: null,
        line: null,
        tickLine: null
      });
    chart
      .interval()
      .position('name*vote')
      .color('name')
      .label('vote');
    chart
      .guide()
      .text({
        content: 'github统计',
        top: true,
        position: ['50%', '-30%'],
        style: {
          fill: '#666',
          fontSize: 24,
          textAlign: 'center',
          fontWeight: 'bold'
        },
      });

    chart.render();
  }

  function initLeetcodePrograssChart() {
    var data = [{
      item: 'easy',
      count: 60,
      percent: 0.06
    }, {
      item: 'medium',
      count: 2,
      percent: 0.002
    }, {
      item: 'hard',
      count: 0,
      percent: 0
    }];
    var chart = new G2.Chart({
      container: 'partial-leetcode-prograss',
      forceFit: true,
      padding: [160, 60, 50]
    });
    chart.source(data, {
      percent: {
        formatter: function formatter(val) {
          val = val * 100 + '%';
          return val;
        }
      }
    });
    chart.coord('theta', {
      radius: 0.75,
      innerRadius: 0.6
    });
    chart.tooltip({
      showTitle: false,
    });
    // 辅助文本
    chart
      .guide()
      .html({
        position: ['50%', '50%'],
        html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">总数<br><span style="color:#8c8c8c;font-size:20px">998</span>道</div>',
        alignX: 'middle',
        alignY: 'middle'
      });
    chart
      .guide()
      .text({
        content: 'leetcode进度',
        top: true,
        position: ['50%', '-30%'],
        style: {
          fill: '#666',
          fontSize: 24,
          textAlign: 'center',
          fontWeight: 'bold'
        },
      });

    var interval = chart
      .intervalStack()
      .position('percent')
      .color('item')
      .label('percent', {
        formatter: function formatter(val, item) {
          return item._origin.item + ': ' + val;
        }
      })
      .tooltip('item*percent', function (item, percent) {
        return {
          name: item,
          value: percent * 1000
        };
      })
      .style({
        lineWidth: 1,
        stroke: '#fff'
      });

    chart.render();
  }
}