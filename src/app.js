//menu icon toggle on small screen

const pan = document.getElementById('pan');
const menu = document.getElementById('menu');
const bars = pan.querySelectorAll('div');

pan.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  const menuIsOpen = !menu.classList.contains('hidden');

  // Animate hamburger into X
  bars[0].classList.toggle('rotate-45');
  bars[0].classList.toggle('translate-y-[7px]');
  bars[1].classList.toggle('opacity-0');
  bars[2].classList.toggle('-rotate-45');
  bars[2].classList.toggle('-translate-y-[7px]');

  // Change bar color when menu is open (to white)
  bars.forEach(bar => {
    bar.style.backgroundColor = menuIsOpen ? 'white' : 'black';
  });
});

// Close menu on link click
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.add('hidden');
    bars[0].classList.remove('rotate-45', 'translate-y-[7px]');
    bars[1].classList.remove('opacity-0');
    bars[2].classList.remove('-rotate-45', '-translate-y-[7px]');
    bars.forEach(bar => bar.style.backgroundColor = 'black');
  });
});

// const pan = document.querySelector('#pan')
// const menu = document.querySelector('#menu')

// pan.addEventListener('click', () => {
//   menu.classList.toggle('hidden')
//   pan.classList.toggle('bg-white')
// })



//line of code that controls the auto typing effect on the hero section
const texts = ["Developer", "Designer", "Authour"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("auto").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500); // Pause before next word
  } else {
    setTimeout(type, 120); // Typing speed
  }
})();


// line of code that controls read more button
// Select all buttons
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('div'); // find the current card
    const extraText = card.querySelector('.extra-text');
    const isHidden = extraText.classList.contains('hidden');

    // Toggle visibility
    extraText.classList.toggle('hidden', !isHidden);

    // Update button text
    button.textContent = isHidden ? 'Read less' : 'Read more';
  });
});



//line of code that controls the submit button in the contact form
async function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const successMsg = document.getElementById('successMsg');
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      successMsg.classList.remove('hidden');
      form.reset();
    } else {
      alert('❌ Something went wrong. Please try again.');
    }
  } catch (error) {
    alert('⚠️ Network error. Please check your connection.');
  }
}