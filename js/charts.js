google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Date', 'This Month', 'Previous Month'],
          ['Apr 01',  100,      40],
          ['Apr 02',  117,      46],
          ['Apr 03',  66,       112],
          ['Apr 04',  103,      54],
          ['Apr 05',  100,      40],
          ['Apr 06',  117,      46],
          ['Apr 07',  66,       112],
          ['Apr 08',  103,      54]
        ]);

        var options = {
          title: '',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }