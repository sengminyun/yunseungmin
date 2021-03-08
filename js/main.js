AOS.init();




window.onload = function() {
  Particles.init({
    selector: '.background',
        color: '#75A5B7',
        maxParticles: 200,
        connectParticles: true,
        responsive: [
          {
            breakpoint: 768,
            options: {
              maxParticles: 80
            }
          }, {
            breakpoint: 375,
            options: {
              maxParticles: 80
            }
          }
        ]
      });
    };
  

$('#nav-icon1').click(function(){
    $(this).toggleClass('open');
    $('#overlay').toggleClass('open')
  });
  
  $('.overlay-content a').click(function(){
    $('#nav-icon1').toggleClass('open');
    $('#overlay').toggleClass('open')
  });


  $('#slide > div:gt(0)').hide();

setInterval(function(){
    $('#slide > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slide');
},4000);



