function scene2() {
  console.log('Executing scene 2!')

  // Setup Stage
  stage = document.querySelector('#stage')
  document.querySelector('#sets')
  castle = document.querySelector('#castle')
  stageImg = stage.querySelector('#stage-img')
  castleImgSrc = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc)
  // Setup Cast

  // Character 1
  nedContainer = document.createElement('div')
  stage.append(nedContainer)
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '10%'
  nedContainer.style.height = '37%'
  nedContainer.style.top = '55%'
  nedContainer.style.left = '25%'
  nedContainer.style.border = 'none'
  nedContainer.style.background = 'none'

  ned = document.querySelector('#ned')
  nedContainer.append(ned)
  ned.style.width = '70%'
  ned.style.position = 'absolute'
  ned.style.top = 0
  ned.style.border = 'none'

  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)
  leather.style.position = 'absolute'
  leather.style.bottom = 0
  leather.style.border = 'none'
  // Character 2
  joffContainer = document.createElement('div')
  joffContainer.id = 'joff-container'
  stage.append(joffContainer)
  joffContainer.style.width = '8%'
  joffContainer.style.position = 'absolute'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '55%'
  joffContainer.style.left = '55%'

  joff = document.querySelector('#joffrey')
  joffContainer.append(joff)
  joff.style.width = '75%'
  joff.style.position = 'absolute'
  joff.style.left = '33%'

  kingWardrobe = document.querySelector('#king')
  joffContainer.append(kingWardrobe)
  kingWardrobe.style.position = 'absolute'
  kingWardrobe.style.bottom = 0
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
