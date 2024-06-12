const { element } = HSTogglePassword.getInstance("#toggle-password", true);
const showBtn = document.querySelector("#show-btn");

showBtn.addEventListener("click", () => {
	element.show();
});
