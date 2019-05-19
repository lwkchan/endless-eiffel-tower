;(function(document, window) {
  let scrollPosition = 0
  let ticking = false
  let towerTop = document
    .getElementById('tower-art')
    .innerHTML.split('')
    .slice(0, 92)
    .join('')
  let floor = '           [|]'

  function build() {
    const towerEl = document.getElementById('tower-art')
    const towerBase = towerEl.innerHTML
      .split('')
      .slice(91)
      .join('')
    const tallerTower = towerTop + floor + towerBase
    towerEl.innerHTML = tallerTower
  }

  window.addEventListener('scroll', function(e) {
    scrollPosition = window.scrollY

    if (!ticking && scrollPosition === 0) {
      window.requestAnimationFrame(function() {
        build()
        window.scrollTo(0, window.innerHeight - 800)
        ticking = false
      })

      ticking = true
    }
  })
  let scrollToBottom = function() {
    window.scrollTo(0, document.body.scrollHeight)
  }
  window.onload = scrollToBottom
})(document, window)
