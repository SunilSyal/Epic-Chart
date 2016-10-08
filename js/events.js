
window.tooltipTemplate = '<p class="tooltip-heading">{point.title}</p>';
window.tooltipTemplate += '<p class="tooltip-stories"><span>{point.z}</span> Stories</p>';
window.tooltipTemplate += '<p><span class="tooltip-title">Date Created:</span> {point.creationDate} </p>';

window.chartData =  [
  { x: 1, y: 4, z: 15, url: "http://google.com", title: 'Colour swatch epic Colour swatch epic Colour swatch epic Colour swatch epic Colour swatch epic Colour swatch epic', name: '', color: 'red'  , creationDate:'20 Oct 2016'},
  { x: 2, y: 5, z: 14, url: "http://google.com", title: 'Customized shirts', color: 'red'  , creationDate:'20 Oct 2016'},
  { x: 3, y: 4, z: 15, url: "http://google.com", title: 'New core: Linting', color: 'red'  , creationDate:'20 Oct 2016'},
  { x: 4, y: 5, z: 22, url: "http://google.com", title: 'Size grid epic', color: 'red' , creationDate:'20 Oct 2016'},
  { x: 5, y: 4, z: 13, url: "http://google.com", title: 'Product image epic', color: 'red' , creationDate:'20 Oct 2016'},
  { x: 1.4, y: 3.4, z: 22, url: "http://google.com", title: 'Colour swatch epic', name: '', color: 'red'  , creationDate:'20 Oct 2016'},
  { x: 2.3, y: 6.5, z: 17, url: "http://google.com", title: 'Customized shirts', color: 'red'  , creationDate:'20 Oct 2016'},
  { x: 3.8, y: 4.1, z: 19, url: "http://google.com", title: 'New core: Linting', color: 'red'  , creationDate:'20 Oct 2016'},
  { x: 4.5, y: 7, z: 14, url: "http://google.com", title: 'Size grid epic', color: 'red' , creationDate:'20 Oct 2016'},
  { x: 4.6, y: 7.3, z: 12, url: "http://google.com", title: 'Size grid epic', color: 'red' , creationDate:'20 Oct 2016'},
  { x: 5, y: 2, z: 23, url: "http://google.com", title: 'Product image epic', color: 'red' , creationDate:'20 Oct 2016'}
];

fnAddId(window.chartData);

fnDrawChart();

$('body').on( "mouseenter", "circle", function( event ) {
  $( 'circle' ).removeClass( "darken" );
  $( 'circle' ).addClass( "lighten" );
  $( this ).removeClass( "lighten" );
  $( this ).addClass( "darken" );
});

$('body').on( "mouseleave", "circle", function( event ) {
  $( 'circle' ).removeClass( "lighten" );
  $( this ).removeClass( "darken" );
});

$('body').on( "click", "circle", function( event ) {
  fnShowEpicDetails($(event.target).attr('id'))
});

function fnAddId (objRef) {
  var len = window.chartData.length;
  for(var i =0;i <len ; i++){
    window.chartData[i].id = "id_" + i;
  }
}

function fnShowEpicDetails (id) {
  var index = id.split("id_")[1];
  $("#epic-details").hide().fadeIn(800);
  $(".epic-details__stories-count").html(window.chartData[index].z);
  $(".epic-details__title-text").html(window.chartData[index].title);
  $(".epic-details__url").html(window.chartData[index].url);
  $(".epic-details__date-created").html(window.chartData[index].creationDate);
  $(".epic-details__url").attr('href', window.chartData[index].url);
}
