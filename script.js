document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;
    console.log(`Booking Form Submitted:\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}`);
    alert('Your booking request has been submitted!');
});
