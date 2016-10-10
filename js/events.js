fnInit();

function fnInit() {
    fnDefineTemplates();
    fnLoadData();
    fnDefineEvents();
}

function fnDefineTemplates() {
    window.tooltipTemplate = '<p class="tooltip-heading">{point.title}</p>';
    window.tooltipTemplate += '<p class="tooltip-stories"><span>{point.z}</span> Stories</p>';
    window.tooltipTemplate += '<p><span class="tooltip-title">Date Created:</span> {point.creationDate} </p>';
}

function fnLoadData() {
    $.getJSON("mock/epic.json", function(data) {
        window.chartData = data.data;
        fnAddId(window.chartData);
        fnDrawChart();
    });
}

function fnLoadEpicData() {
    $.getJSON("mock/epicDetails.json", function(data) {
        fnDrawLineBubbleChart(data.data);
    });
}


function fnDefineEvents() {
    $('body').on("mouseenter", "circle", function(event) {
        $('circle').removeClass("darken");
        $('circle').addClass("lighten");
        $(this).removeClass("lighten");
        $(this).addClass("darken");
    });

    $('body').on("mouseleave", "circle", function(event) {
        $('circle').removeClass("lighten");
        $(this).removeClass("darken");
    });

    $('body').on("click", "circle", function(event) {
        fnShowEpicDetails($(event.target).attr('id'));
        fnLoadEpicData();
    });
}

function fnAddId(objRef) {
    var len = window.chartData.length;
    for (var i = 0; i < len; i++) {
        window.chartData[i].id = "id_" + i;
    }
}

function fnShowEpicDetails(id) {
    var index = id.split("id_")[1];
    $("#epic-details").hide().fadeIn(800);
    $(".epic-details__stories-count").html(window.chartData[index].z);
    $(".epic-details__title-text").html(window.chartData[index].title);
    $(".epic-details__url").html(window.chartData[index].url);
    $(".epic-details__date-created").html(window.chartData[index].creationDate);
    $(".epic-details__url").attr('href', window.chartData[index].url);
}
