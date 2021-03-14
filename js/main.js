const bookingButton = document.querySelector(".hotels-booking-button");
const bookingForm = document.querySelector(".booking-form");

const checkInDate = bookingForm.querySelector("[name=check-in-date]");
const checkOutDate = bookingForm.querySelector("[name=check-out-date]");
const adultsNumber = bookingForm.querySelector("[name=adults]");
const childrenNumber = bookingForm.querySelector("[name=children]");

bookingForm.classList.remove("booking-form-show");

bookingButton.onclick = function() {
  bookingForm.classList.toggle("booking-form-show");
  checkInDate.focus();
};

bookingForm.addEventListener("submit", function(evt) {
  if (!checkInDate.value || !checkOutDate.value || !adultsNumber.value || !childrenNumber.value) {
    evt.preventDefault();
    bookingForm.classList.remove("booking-form-error");
    bookingForm.offsetWidth;
    bookingForm.classList.add("booking-form-error");
  }
});
