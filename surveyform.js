// JavaScript code to handle form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('tech-usage-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Collect selected values from the form
        const osPreference = document.querySelector('input[name="os-preference"]:checked');
        const socialMedia = Array.from(document.querySelectorAll('input[name="social-media"]:checked')).map(input => input.value);

        // You can collect more form data here as needed

        // Display a confirmation message
        const confirmationMessage = document.createElement('p');
        confirmationMessage.textContent = 'Thank you for completing the survey!';

        // Append the confirmation message to the form
        form.appendChild(confirmationMessage);

        // Optionally, you can send the form data to a server for further processing here

        // Reset the form (comment this out if you want to keep the form data)
        form.reset();
    });
});

