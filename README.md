# myCarousel
==============================

This is a jQuery plugin used to create a responsive infinite image carousel.

## Demo
[myCarousel Demo](http://georgeholmesii.com/myCarousel-demo)

## Setup
[Setup](https://github.com/gholme4/mycarousel-responsive-carousel/wiki/Setup)

## Developer Site
[George Holmes II](http://georgeholmesii.com/)

## General Notes
For the best experience make sure the number of images you have in the carousel is at least two more than the number you have set for `numberVisibleItems`. If you would like to improve this code or have any suggestions let me know. Thanks.

## Properties

### numberVisibleItems: *integer* - default:5
`numberVisibleItems` determines how many images will be visible in the carousel at a time.

### animationSpeed: *integer* - default:500
`animationSpeed` determines the amount of time (milliseconds) that passes during one slide transition.

### carouselSpeed: *integer* - default:3000
`carouselSpeed` determines the amount of time (milliseconds) between slide transitions.

### automaticPlay: *boolean* - default:true
`automaticPlay` if true will cause the carousel to play continuously without user interaction.

### pauseOnHover: *boolean* - default:true
`pauseOnHover` if true will cause the carousel to stop playing when the mouse hovers over in image in the carousel.

### easing: *string* - default:swing
`easing` controls how the sliding animation progresses over time by manipulating its acceleration. Take a look at [jQuery easing](http://jqueryui.com/demos/effect/easing.html) for all possible values for this option.

