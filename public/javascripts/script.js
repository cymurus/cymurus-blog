window.onload = function() {
  /* about top backer */
  var tb = document.getElementById('top-backer');
  var timer = null;
  var userStop = false;

  checkScrollTop();

  window.onscroll = function(e) {
    if(userStop) {
      clearInterval(timer);
    }
    userStop = true;
    checkScrollTop();
  };

  tb.onclick = function() {
    timer = setInterval(function() {
      var top = document.documentElement.scrollTop || document.body.scrollTop;
      var speed = Math.ceil(top * 0.3);
      document.documentElement.scrollTop = document.body.scrollTop -= speed;
      userStop = false;
      if(top == 0) {
    checkScrollTop();
        clearInterval(timer);
      }
    }, 30);
  };

  function checkScrollTop() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    tb.style.display = top > 374 ? 'block' : 'none';
  }

  /* about about */
  var about = document.querySelector('.nav-item:last-child');
  about.onclick = function() {
    fetch('/me').then(function(res) {
      return res.text();
    })
    .then(function(data) {

    });
  };
};