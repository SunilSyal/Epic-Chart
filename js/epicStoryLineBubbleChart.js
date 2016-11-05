function fnDrawEpicStoryLineBubbleChart(chartData) {
    var release = chartData.epics;
    var names = ["Analysis", "Development", "Pulp", "SIT", "Rejected", "Reopned", "Ready"]

    $('.bubble-chart-medium').height('1200px')
    $('#epic-story-bubble').highcharts({

        chart: {
            type: 'bubble-xtra-large',
            plotBorderWidth: 1
                //zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },

        xAxis: {
            opposite: true,
            gridLineWidth: 1,
            tickInterval: 1,
            gridLineDashStyle: 'ShortDot',
            title: {
                text: ''
            },
            labels: {
              formatter: function() {
                  return names[this.value]
              }
            },
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 65,
                label: {
                    rotation: 0,
                    y: 15,
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe fat intake 65g/day'
                },
                zIndex: 3
            }]
        },

        yAxis: {
            reversed: true,
            startOnTick: false,
            tickInterval: 1,
            endOnTick: false,
            gridLineDashStyle: 'ShortDot',
            title: {
                text: 'Story count'
            },
            labels: {
                formatter: function() {
                    return release[this.value - 1]
                }
            },
            maxPadding: 0.2,
            plotLines: [{
                color: 'white',
                dashStyle: 'dot',
                width: 2,
                value: 50,
                label: {
                    align: 'right',
                    style: {
                        fontStyle: 'italic'
                    },
                    text: '',
                    x: -10
                },
                zIndex: 3
            }]
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<div class="tooltip tooltip-noborder">',
            pointFormat: '<p class="tooltip-stories"><span>{point.z}</span></p>',
            footerFormat: '</div>',
            followPointer: false
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        //x - state, y - time, z - no. of stories

        series: [{
            data: chartData.data
        }]

    });
}
