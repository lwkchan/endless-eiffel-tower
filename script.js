;(function(document) {
  // all your code here
  let foo = function() {
    let el = document.getElementById('main')
    el.innerText = 'Now you are different'
  }
  window.onload = foo
  // ...
})(document)
