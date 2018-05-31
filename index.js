function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var nodes = document.getElementById('nested')
  return nodes.getElementsByClassName('.target')
}