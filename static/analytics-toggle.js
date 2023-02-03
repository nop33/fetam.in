// Created as a separate script to avoid inline scripts due to CSP
if (window.location.host === 'fetam.in') {
  const s = document.createElement(`script`)
  s.setAttribute('type', 'text/javascript')
  s.setAttribute('async', '')
  s.setAttribute('src', 'https://gc.zgo.at/count.js')
  s.setAttribute('data-goatcounter', 'https://fetamin.goatcounter.com/count')
  document.body.appendChild(s)
}
