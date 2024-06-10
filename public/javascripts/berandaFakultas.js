const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModals");
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

document.getElementById("keluarBtn").addEventListener("click", function () {
	fetch("/auth/logout", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ logout: true }),
	})
		.then((response) => {
			if (response.ok) {
				alert("Anda berhasil logout");
				window.location.href = "/login";
			} else {
				alert("Logout failed");
			}
		})
		.catch((error) => {
			console.error("Error:", error);
		});
});
