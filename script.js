document.addEventListener("DOMContentLoaded", function () {
    const joinButton = document.getElementById("joinButton");
    const orderButton = document.getElementById("orderButton");

    // Link Grup WhatsApp
    const groupLink = "https://chat.whatsapp.com/XXXXXXX";
    
    // Nomor WhatsApp Louis
    const louisWhatsApp = "6287717274346";

    joinButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = groupLink;
    });

    orderButton.addEventListener("click", function () {
        // Ambil pilihan rank atau GMC Trial yang dipilih
        const selectedRank = document.querySelector('input[name="rank"]:checked');
        
        if (selectedRank) {
            const rankName = selectedRank.value;
            const message = `buyrank saya ingin membeli rank ${rankName} `;

            // Format link WhatsApp
            const waLink = `https://wa.me/${louisWhatsApp}?text=${encodeURIComponent(message)}`;

            // Arahkan ke WhatsApp
            window.location.href = waLink;
        } else {
            alert("Silakan pilih rank atau GMC Trial terlebih dahulu!");
        }
    });
});
