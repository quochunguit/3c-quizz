'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );





// function scrool_center_div(){
//   const slider = document.querySelector('.blk-gr3c-animation');
//   let isDown = false;
//   let startX;
//   let scrollLeft;

//   slider.addEventListener('mousedown', (e) => {
//     let rect = slider.getBoundingClientRect();
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - rect.left;
//     scrollLeft = slider.scrollLeft;
//     console.log(startX, scrollLeft);
//   });

//   slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.dataset.dragging = false;
//     slider.classList.remove('active');
//   });

//   slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.dataset.dragging = false;
//     slider.classList.remove('active');
//   });

//   slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     let rect = slider.getBoundingClientRect();
//     e.preventDefault();
//     slider.dataset.dragging = true;
//     const x = e.pageX - rect.left;
//     const walk = (x - startX);
//     slider.scrollLeft = scrollLeft - walk;
//     console.log(x, walk, slider.scrollLeft);
//   });

// }

// scrool_center_div();
// jQuery(window).resize(function () {
//   scrool_center_div();
//   animate_hl();
// });
// window.addEventListener("resize", function(event) {
//     scrool_center_div();
//     animate_hl();
// })

new WOW().init();


