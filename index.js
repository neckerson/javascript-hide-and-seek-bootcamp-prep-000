function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
 return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('li ul li:nth-child(3) h1 a')
}