init = () => {

  const aboutChoir = document.querySelectorAll('#about-content')
  console.log(aboutChoir)

  handleMouseEnter = () => {
    console.log('mouse entering')
    // aboutChoir.innerHTML('Yoooo')
  }

  handleMouseLeave = () => {
    console.log('mouse entering')
    // aboutChoir.innerHTML('Yoooo')
  }

  displayContent = () => {
    aboutChoir.addEventListener('mouseenter', handleMouseEnter)
    aboutChoir.addEventListener('mouseleave', handleMouseLeave)
  }
}

window.addEventListener('DOMContentLoaded', init)