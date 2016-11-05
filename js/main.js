function fnDrawChart() {
    var release = ["In Discovery", "In Invest", "Sprint Backlog", "In Sprint", "Done", "Reopened", "Rejected"]
    $('#container').highcharts({

        chart: {
            type: 'bubble',
            plotBorderWidth: 1
                //zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'EPIC Timeline View'
        },

        subtitle: {
            text: 'Source: JIRA'
        },

        xAxis: {
            gridLineWidth: 1,
            tickInterval: 1,
            startOnTick: true,
            gridLineDashStyle: 'ShortDot',
            title: {
                text: 'Epic State'
            },
            labels: {
                formatter: function() {
                    return release[this.value - 1]
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
            startOnTick: false,
            endOnTick: false,
            gridLineDashStyle: 'ShortDot',
            title: {
                text: 'Time (Days)'
            },
            labels: {
                format: '{value}'
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
            headerFormat: '<div class="tooltip">',
            pointFormat: window.tooltipTemplate,
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
            data: window.chartData
        }]

    });
}
