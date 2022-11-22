let refImg = document.querySelector('img')

function catWalk() {
  let pos_incr = 10
  let pos = 0
  refImg.style.position = "absolute"
  refImg.style.left = 0

  let id = setInterval(moveCat, 100)
  function moveCat() {
    if (pos > 500) {
      clearInterval(id)
    } else {
      pos += pos_incr
      refImg.style.left = pos + 'px'
    }
  }
}

catWalk()