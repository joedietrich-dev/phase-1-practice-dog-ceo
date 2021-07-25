console.log('%c HI', 'color: firebrick')
let breeds;
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// fetch(imgUrl)
//   .then(res => res.json())
//   .then(data => {
//     data.message.forEach(dogImage => addDog(dogImage))
//   })
fetch(breedUrl)
  .then(res => res.json())
  .then(data => {
    breeds = Object.keys(data.message);
    breeds.forEach(breed => {
      addBreed(breed)
    })
  });

const filter = document.querySelector('#breed-dropdown');
filter.addEventListener('change', e => {
  const letter = e.target.value;
  const breedContainer = document.getElementById('dog-breeds');
  breedContainer.innerHTML = '';
  breeds.filter(breed => breed[0] === letter).forEach(breed => addBreed(breed));
})

function addDog(dogImageUrl) {
  const dogContainer = document.querySelector('#dog-image-container');
  const dogImage = document.createElement('img');
  dogImage.src = dogImageUrl;
  dogContainer.appendChild(dogImage);
}

function addBreed(dogBreed) {
  const breedContainer = document.getElementById('dog-breeds');
  const breed = document.createElement('li');
  breed.innerText = dogBreed;
  breed.addEventListener('click', (e) => {
    e.target.style.color = 'blue';
  })
  breedContainer.appendChild(breed);
}