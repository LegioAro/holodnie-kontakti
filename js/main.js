const swiper = new Swiper('.swiper-1', {
  slidesPerView: 3,
  spaceBetween: 40,
  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 1.5,
    },
    480: {
      spaceBetween: 30,
      slidesPerView: 1.8,
    },
    650: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
  },
});

const swiper2 = new Swiper('.swiper-2', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.slider__arrow--r',
    prevEl: '.slider__arrow--l',
  },
  pagination: {
    el: '.slider__dots',
    bulletClass: 'slider__dot',
    type: 'bullets',
    clickable: true,
    bulletActiveClass: 'slider__dot--active',
  },
});

function isTimer() {
  const minutesDeadline = new Date(2023, 5, 30, 23, 59);

  let timerHours = document.querySelector('[data-timer-hour]');
  let timerMinuts = document.querySelector('[data-timer-min]');
  let timerSeconds = document.querySelector('[data-timer-sec]');

  let timerHoursItems = timerHours.querySelectorAll('.timer__item-num');
  let timerMinutesItems = timerMinuts.querySelectorAll('.timer__item-num');
  let timerSecondsItems = timerSeconds.querySelectorAll('.timer__item-num');

  let timerId = null;

  function countdownTimer() {
    const diff = minutesDeadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }

    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    let hoursString = hours < 10 ? '0' + hours : String(hours);
    let minutesString = minutes < 10 ? '0' + minutes : String(minutes);
    let secondsString = seconds < 10 ? '0' + seconds : String(seconds);

    let hoursArr = hoursString.split('');
    let minutesArr = minutesString.split('');
    let secondsArr = secondsString.split('');

    for (let i = 0; i < timerHoursItems.length; i++) {
      timerHoursItems[i].innerHTML = hoursArr[i];
    }
    for (let i = 0; i < timerMinutesItems.length; i++) {
      timerMinutesItems[i].innerHTML = minutesArr[i];
    }
    for (let i = 0; i < timerSecondsItems.length; i++) {
      timerSecondsItems[i].innerHTML = secondsArr[i];
    }
  }

  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
}

isTimer();

isResize('.who__img', '.who__wrapper', '.who__mob', 768);

window.addEventListener('resize', () => {
  isResize('.who__img', '.who__wrapper', '.who__mob', 768);
});

//smooth

const scrollSmoothLinck = document.querySelectorAll('*[data-scroll-smooth]');

for (let elem of scrollSmoothLinck) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();

    let blockID = elem.getAttribute('data-scroll-smooth');
    let top = document.getElementById(blockID).getBoundingClientRect().top;

    document.querySelector('html,body').scrollTo({
      top: top + window.pageYOffset - 100,
      behavior: 'smooth',
    });
  });
}

//modal

function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
        }
      });
    }
  }
}

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
      });
    }
  }
}

isModal();
isModalClose();
