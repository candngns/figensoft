const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Burada mesajı işlemek veya göndermek için gerekli kodları yazabilirsiniz.
    // Örnek olarak, konsola log olarak yazdırabiliriz:
    console.log("Gönderilen bilgiler:");
    console.log("Ad: ", name);
    console.log("E-posta: ", email);
    console.log("Mesaj: ", message);

    // Formu temizleyelim:
    contactForm.reset();
});