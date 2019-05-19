;(function(document, window) {
  let ticking = false
  const towerTop = document
    .getElementById('tower-art')
    .innerHTML.split('')
    .slice(0, 92)
    .join('')
  const floor = '           [|]'

  window.addEventListener('scroll', function(e) {
    if (!ticking && window.scrollY === 0) {
      window.requestAnimationFrame(function() {
        build()
        scrollDownPartway()
        ticking = false
      })

      ticking = true
    }
  })

  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight)
  }

  function scrollDownPartway() {
    window.scrollTo(0, window.innerHeight - 800)
  }

  function build() {
    const towerEl = document.getElementById('tower-art')
    const towerBase = towerEl.innerHTML
      .split('')
      .slice(91)
      .join('')
    const tallerTower = towerTop + floor + towerBase
    towerEl.innerHTML = tallerTower
  }

  window.onload = scrollToBottom
})(document, window)
