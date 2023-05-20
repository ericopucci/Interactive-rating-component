'use strict';

window.addEventListener('load', () => {
  const ratingsList = document.querySelector('.rating-values');
  const ratings = ratingsList.querySelectorAll('li');
  const submitButton = document.querySelector('.submit-button');

  submitButton.addEventListener('click', (e) => {
    const selectedRating = document.querySelector('li.clicked');
    const ratingState = document.querySelector('.rating-container');
    const thankyouState = document.querySelector('.thnkyou-container');

    if (selectedRating == null) {
      alert('Please select a rating!');
      return;
    }

    const thankyouSelected = document.querySelector('.thnkyou-selected'); 
    thankyouSelected.innerHTML = `You selected ${selectedRating.innerHTML} out of 5`;

    e.target.classList.add('clicked');

    ratingState.style.display = 'none';

    thankyouState.style.opacity = '1';
    thankyouState.style.height = 'auto';
  });

  for (let rating of ratings) {
    rating.addEventListener('click', (e) => {
      e.target.classList.add('clicked');
      removeClicked(e.target, ratings);
    });
  }
});

function removeClicked(e, ratings) {
  for (let rating of ratings)
    if (rating != e) rating.classList.remove('clicked');
}
