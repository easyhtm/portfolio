ocument.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // You can add your contact form submission logic here
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // You can also send this data to a server for processing.
});