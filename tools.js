let torrentsTr = Array.from(document.querySelectorAll("tr.forum_header_border[name=hover]"))

if (torrentsTr.length > 0) {
  torrentsTr = torrentsTr.sort((a, b) => {
    let aName = a.querySelector("td:nth-child(2) > a").innerHTML
    let bName = b.querySelector("td:nth-child(2) > a").innerHTML

    return aName.localeCompare(bName)
  })

  let parent = torrentsTr[0].parentNode

  torrentsTr.forEach(node => {
    parent.removeChild(node)
  })
  torrentsTr.forEach(node =>
    parent.appendChild(node)
  )
}
