function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
 return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var li = document.getElementById('ranked-list').querySelector('ol.ranked-list li')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}