    // Get modal element
    const modal = document.getElementById("orderModal");

    // Get the close button
    const closeButton = document.querySelector(".close-button");

    // Get all "Details" buttons
    const detailButtons = document.querySelectorAll(".info-button");

    // Function to show the modal
    function showModal() {
        modal.style.display = "block";
    }

    // Function to hide the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Show modal on button click
    detailButtons.forEach(button => {
        button.addEventListener("click", showModal);
    });

    // Close modal when the close button is clicked
    closeButton.addEventListener("click", closeModal);

    // Close modal when clicking outside the modal content
    window.addEventListener("click", event => {
        if (event.target == modal) {
            closeModal();
        }
    });

