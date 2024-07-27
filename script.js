document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(`Contact Form Submitted:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    alert('Thank you for contacting us!');
});

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;
    console.log(`Booking Form Submitted:\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}`);
    alert('Your booking request has been submitted!');
});
