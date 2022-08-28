const activeItem = (selector) => {
  const items = document.querySelectorAll(selector);

  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((item) => item.classList.remove("active"));

      item.classList.add("active");
    });
  });
};

activeItem(".nav-link");
activeItem(".pricing-item");
activeItem(".help-item");
