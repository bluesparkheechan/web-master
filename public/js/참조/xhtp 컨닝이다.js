    let = [
      ['', '']
    ] //1. 변수선언

    const xhtp = new XMLHttpRequest();
    xhtp.open('', 'http://localhost:3000/points');
    xhtp.send()
    xhtp.onload = function () {
      let result = JSON.parse(xhtp.responseText); // 사용자별 포인트 결과.
      result.forEach((item) => {
        chartData.push([item.id, item.point])
      });

      console.log(chartData);

      google.charts.load('current', {
        'packages': ['corechart']
      });
      google.charts.setOnLoadCallback(drawChart);
    }
    // xhtp open , send, onload