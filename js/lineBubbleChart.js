function fnDrawLineBubbleChart (chartData) {
  var release = ["S1", "S2", "S3", "S4", "S5", "S6"]
    $('#line-bubble').highcharts({
        chart: {
            type: 'bubble-large',
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
            gridLineWidth: 1,
            tickInterval: 1,
            title: {
                text: ''
            },
            labels: {
                format: 'S {value}'
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
            title: {
                text: 'Story count'
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
            data: chartData
        }]

    });
}
