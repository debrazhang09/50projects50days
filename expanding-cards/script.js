const cards = document.querySelectorAll('.panel');
cards.forEach((card) => {
  card.addEventListener('click', () => {
    cards.forEach((c) => {
      c.classList.remove('active');
    })
    card.classList.add('active');
  })
})