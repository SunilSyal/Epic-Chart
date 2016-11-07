fnInit();

var epics = ["Apple Pay - Web", "Memory Upgrade - Inventory Grid (Peak Prep)  ", "Endeca  as independent component", "ANOTHER DUMMY", "Apple Pay - Native", "Sprint-2_Release Level Activities", "Search API V2", "DUMMY STORY FOR TESTING", "Product V2 Changes", "64 bit Upgrade", "Technical Debt", "Emptying Basket  (Peak Prep)", "MPulse Performance tracking", "Wine Sub Grooming", "Wine Club", "CFTO Search Enhancements", "Site Responsive", "Technical Debt", "Generic Functional Scope", "Technical Debt", "STABILISE: Peak Optimisations", "Tech Debts", "Gated Priority Access", "Technical Debt Backlog", "Checkout Simplificatio- Mobile", "SEO Stories", "Spotlights on .com", "ApplePay Native ", "API-Content Preview time machine", "EPIC : M2M", "Delivery Actions", "Checkout Simplification - Express Checkout", "AEM content within Sparks Hub", "Order Calculate(Pre Peak)", "Peak Prep", "Email Preferences for Sparks", "Sparks", "Remove Keyhole", "C&P | SIMPLIFY | Retain in Express Checkout", "Gift Card Balance Journey", "Simplified Checkout - Express Checkout", "API- numbered cakes feature in Cart API", "Memory Upgrade - Dyna cache Grid (Peak Prep)", "CFTO Support", "ApplePay Spy Glass"];

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
    //$.getJSON("mock/epic.json", function(data) {
    $.getJSON("https://msepictracker.herokuapp.com/epictracker/epics", function(data) {
        console.log('-----', data);

        window.chartData = filterData(data.data);
        fnAddId(window.chartData);
        fnDrawChart();
    });
}

function fnLoadEpicData() {
    $("#epic-story-details").hide();
    $("#epic-details").fadeIn(800);
    $.getJSON("mock/epicDetails.json", function(data) {
        fnDrawLineBubbleChart(data.data);
        fnChangeTitle();
    });
}

function fnLoadEpicStoryData() {
    $("#epic-details").hide();
    $("#epic-story-details").fadeIn(800);
    setTimeout(dealyedLoad, 3000);
}

function filterData(arr) {
    var filteredArr = arr.filter(function(item) {
        return item !== null;
    })

    return filteredArr;
}

function dealyedLoad() {
    $.getJSON("https://msepictracker.herokuapp.com/epictracker/stories", function(data) {
        //$.getJSON("mock/epicStoryDetails.json", function(data) {
        console.log(data)
        var chartData = {
            'epics': data.epics,
            'data': filterData(data.data)
        }
        fnDrawEpicStoryLineBubbleChart(chartData);
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

    $('body').on("click", "#container circle", function(event) {
        //fnShowEpicDetails($(event.target).attr('id'));
        //fnLoadEpicData();
    });

    $('.epic-link').on("click", function(event) {
        //fnShowEpicStoryDetails($(event.target).attr('id'));
        fnLoadEpicStoryData();
    });

    $('.epic-link').click();
}

function fnAddId(objRef) {
    var len = window.chartData.length;
    for (var i = 0; i < len; i++) {
        window.chartData[i].id = "id_" + i;
    }
}

function fnChangeTitle() {
    $("#epic-details .highcharts-yaxis-labels tspan").html("Story Count");
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
