function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
 return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var li = document.querySelectorAll('ul.ranked-list li')
  
  for (var i = 0; i < li.length; i++) {
    li[i].innerHTML = parseInt(i + n)
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}