const filterButtons = document.querySelectorAll(
  ".container__filter--buttons button"
);
const filterableCards = document.querySelectorAll(".card .filterable__cards");

// IPO
const ipoteka = document.querySelector(".ipo");
const containerHover = document.querySelector(".container__hover");

ipoteka.addEventListener("mouseover", () => {
  containerHover.classList.add("show");
  document.body.classList.add("show-overlay");

  timeoutId = setTimeout(() => {
    containerHover.classList.remove("show");
    document.body.classList.remove("show-overlay");
  }, 10000);
});

ipoteka.addEventListener("mouseout", () => {
  containerHover.classList.remove("show");
  document.body.classList.remove("show-overlay");
  clearTimeout(timeoutId);
});

// Filter

const filterCards = (e) => {
  document.querySelector(".activee").classList.remove("activee");
  e.target.classList.add("activee");

  filterableCards.forEach((card) => {
    card.classList.add("hide");
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelectorAll(".container__carousel--list");
  let currentIndex = 0;

  function showItem(index) {
    carouselItems.forEach((item) => {
      item.classList.remove("active");
    });

    carouselItems[index].classList.add("active");
  }

  showItem(currentIndex);

  const interval = setInterval(function () {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showItem(currentIndex);
  }, 3000);
});

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);
