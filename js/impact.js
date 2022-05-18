import { tns } from "./node_modules/tiny-slider/src/tiny-slider"

let slider = tns({
   container : ".my-slider", // What's the slider class name
   items:2,
   axis:"horizontal",
   slideBy: 1, // How many slides are we skipping per press?
   speed: 400, //speed of slide
   nav : false,  // no dots
   controlsContainer: ".controls", //We want to use our controls rather than their
   prevButton: ".previous", //set buttons
   nextButton: ".next",
   loop:true,
   /*responsive: { //images to display based on window size
      1600: {
         items: 4, //# images
         gutter: 20 //padding between images
      },
      1024: {
         items: 3,
         gutter: 20
      },
      768: {
         items: 2,
         gutter: 20
      },
      480: {
         items: 1,
      }
   }*/
});