window.onload = function(){
  let lang = document.documentElement.lang;
  let p = document.createElement('p');

  switch(lang) {
    case 'en-US':
      p.innerText = 'JavaScript Showtime!';
      break;
    case 'ru-RU':
      p.innerText = 'Настало время JavaScript!';
      break;
    default:
      break;
  }

  setTimeout( function() {
    document.body.appendChild(p);
  }, 2000);
  setTimeout( function() {
    p.classList.add('banner');
  }, 4000);
}
