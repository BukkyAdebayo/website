(function( $ ){ $.fn.linkOnclick = function(objectPosition) { this.click(function(event) { $('html, body').animate({  scrollTop: objectPosition }, { complete: function() { $(this).stop(true, true);  } }); }); return false; }; })( jQuery );

$(document).ready(function() {
	function scrollToLocation(location) {$("html, body").animate({scrollTop: location}, 500);}

  var recycle = $('.recycle-link'), logo = $('#scroll-top'), recycle_section = $('.recycle-section').offset(), gotopBtn = $('#gotop'), positionsBtn = $('.positions-btn');

  //scroll top for wecyclers logo. rather than do home that would just take you to the top of the page
  logo.linkOnclick(0);

  // show gotop button is current scrolled section is greater than 500
  $(window).scroll(function(){if ($(window).scrollTop()>500) {gotopBtn.css({display:"block"});} else {gotopBtn.css({display:"none"});}});
  // go to top button currently only for join us page
  gotopBtn.linkOnclick(0);
  
  //if the page currently visited is the home page the on clicking the recycle button should take you down the page
  //else navigate to the recycle page
  if (recycle_section) {
    // i a minusing ~65 cos give or take our fixed header element would be about that height so just to accomodate that
    // would have to change from time to time cos i am using a fixed value
    var pos = recycle_section.top - 65;
    recycle.linkOnclick(pos);
  } else {
    recycle.click(function() {
      var hostAddress = top.location.host.toString(); 
      window.location = 'http://' + hostAddress + '/recycle.html';
    });
  }

  //disables carousel auto slider
  $('.carousel').carousel({ interval: false })

  positionsBtn.click(function() {
    var id = this.name, position = $('#'+id).offset().top - 70;
    scrollToLocation(position);
  });


  // $('#the-team .person span').hover(
  //   function() { $( this ).fadeOut( 100 ); },
  //   function() { $( this ).fadeIn( 500 ); }
  // );

  $('#the-team .person').click(function() {
    // var that = this;
    // alert(that);
    $('#bilikiss').modal('show')
  });

});


  
