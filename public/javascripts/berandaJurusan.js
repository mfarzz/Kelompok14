document.getElementById('keluarBtn').addEventListener('click', function () {
    fetch('/auth/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ logout: true })
    })
        .then(response => {
            if (response.ok) {
                alert('Anda berhasil logout');
                window.location.href = '/login'; 
            } else {
                alert('Logout failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.getElementById('upload-input').addEventListener('change', function() {
    var form = document.getElementById('uploadForm');
    if (this.files.length > 0) {
        form.submit();
        form.style.pointerEvents = 'none';
        form.style.opacity = '0.5';
    }
});