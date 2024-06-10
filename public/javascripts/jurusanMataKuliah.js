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