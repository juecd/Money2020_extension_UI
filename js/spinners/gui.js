$(document).ready(function() {
  // TODO: add a list of preset spinners with examples that can be loaded as options 
  
  var spinner_large = Spinners.create('#spinner', {
          radius: 21,
          height: 10,
          width: 15,
          dashes: 100,
          opacity: 1,
          padding: 3,
          rotation: 700,
          color: '#8E22ED'
        }).center().play();
      
  var spinner_small = Spinners.create('#spinner_small', {
          radius: 10,
          height: 5,
          width: 5,
          dashes: 100,
          opacity: 1,
          padding: 3,
          rotation: 700,
          color: '#8E22ED'
        }).center().play();

  var spinner_extrasmall = Spinners.create('#spinner_extrasmall', {
          radius: 7,
          height: 3,
          width: 5,
          dashes: 100,
          opacity: 1,
          padding: 3,
          rotation: 700,
          color: '#8E22ED'
        }).center().play();
});