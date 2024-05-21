var loadFile = function(event) {
    var output = document.getElementById('profileImg');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
};

function openModal() {
    document.getElementById("editModal").style.display = "block";
}

function closeModal() {
    document.getElementById("editModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("editModal")) {
        closeModal();
    }
}

document.getElementById("editForm").onsubmit = function(event) {
  event.preventDefault();
    // Here you can add AJAX request to save the edited information
  closeModal();
}