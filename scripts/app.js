init = () => {

  const aboutChoir = document.querySelectorAll('#about-content')

  displayContent = event => {
    aboutChoir.innerHTML = 'Yoooo'
  }

  handleClick = () => {
    document.addEventListener('click', displayContent())
  }
}

window.addEventListener('DOMContentLoaded', init)