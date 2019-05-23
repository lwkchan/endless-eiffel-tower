;(function(document, window) {
  const towerEl = document.getElementById('tower-art')
  let ticking = false

  const towerTop = document
    .getElementById('tower-art')
    .innerHTML.split('')
    .slice(0, 92)
    .join('')
  const floor = '           [|]'

  window.addEventListener('scroll', function(e) {
    console.log('scrolling')
    if (!ticking && window.scrollY === 0) {
      console.log('abbout to do it')
      window.requestAnimationFrame(function() {
        console.log('building')
        build()
        console.log('scrolling down part way')
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
    window.scrollTo(0, towerEl.clientHeight * 0.05)
  }

  function build() {
    const towerBase = towerEl.innerHTML
      .split('')
      .slice(91)
      .join('')
    const tallerTower = towerTop + floor + towerBase
    towerEl.innerHTML = tallerTower
  }

  window.onload = scrollToBottom
})(document, window)
