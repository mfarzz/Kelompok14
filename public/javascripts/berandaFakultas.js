const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("myModal");

openModalButton.addEventListener("click", () => {
	modal.classList.remove("hidden");
	modal.classList.add("flex");
	document.body.classList.add("overflow-hidden");
});

closeModalButton.addEventListener("click", () => {
	modal.classList.remove("flex");
	modal.classList.add("hidden");
	document.body.classList.remove("overflow-hidden");
});

function openModal(kodeProdi) {
	var modal = document.getElementById("modal" + kodeProdi);
	modal.style.display = "block";
}

// Function to close the modal
function closeModal(kodeProdi) {
	var modal = document.getElementById("modal" + kodeProdi);
	modal.style.display = "none";
}
