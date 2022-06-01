window.addEventListener('DOMContentLoaded', function () { 
    const tabs = require('./modules/tabs'),
          timer = require('./modules/timer'),
          calculator = require('./modules/calculator'),
          modal = require('./modules/modal'),
          forms = require('./modules/forms'),
          cards = require('./modules/cards'),
          slider = require('./modules/slider');

         tabs();
         modal();
         forms();
         cards();
         slider();
         timer();
         calculator();



 
});