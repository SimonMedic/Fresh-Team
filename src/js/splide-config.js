document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#splide', {
      type       : 'slide',
      perPage:  3,
      gap        : 28,
      pagination : false,
      arrows     : false,
    });

    splide.mount(); 
    

  });