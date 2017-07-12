function scene3() {
  console.log('Executing scene 3!')

  // Setup Stage
  stage    = document.querySelector('#stage')
  desert   = document.querySelector('#desert')
  mySrc    = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)
  // Setup Cast

  // Character 1
  danerysContainer = document.createElement('div')
  danerysContainer.id = 'danerys-container'
  stage.append(danerysContainer)
  danerysContainer.style.width = '10%'
  danerysContainer.style.position = 'absolute'
  danerysContainer.style.height = '34%'
  danerysContainer.style.top = '55%'
  danerysContainer.style.left = '15%'

  danerys = document.querySelector('#danerys')
  danerysContainer.append(danerys)
  danerys.style.width = '48%'
  danerys.style.position = 'absolute'
  danerys.style.left = '10%'

  blueDress = document.querySelector('#blue-dress')
  danerysContainer.append(blueDress)
  blueDress.style.position = 'absolute'
  blueDress.style.bottom = 0
  // Character 2
  drogoContainer = document.createElement('div')
  drogoContainer.id = 'drogo-container'
  stage.append(drogoContainer)
  drogoContainer.style.width = '8%'
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.height = '31%'
  drogoContainer.style.top = '55%'
  drogoContainer.style.left = '60%'

  drogo = document.querySelector('#drogo')
  drogoContainer.append(drogo)
  drogo.style.width = '75%'
  drogo.style.position = 'absolute'
  drogo.style.left = '10%'

  bulkyMan = document.querySelector('#bulky-man')
  drogoContainer.append(bulkyMan)
  bulkyMan.style.position = 'absolute'
  bulkyMan.style.bottom = 0
  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
