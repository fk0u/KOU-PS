$(document).ready(function() {
    // Mengambil isi hosts.txt dan menampilkannya di textarea
    $.ajax({
        url: 'assets/files/hosts.txt',
        dataType: 'text',
    }).done(function(data) {
        $('#hosts-preview').val(data);
    }).fail(function() {
        $('#hosts-preview').val('Gagal memuat hosts.txt.');
    });

    // Copy Host Button
    $('#copy-host').click(async function() {
        try {
            const hostsUrl = 'https://gtps.kou.my.id/assets/files/hosts.txt';
            await navigator.clipboard.writeText(hostsUrl);
            Swal.fire({
                title: 'Berhasil!',
                text: 'URL hosts.txt telah disalin ke clipboard.',
                icon: 'success',
                background: '#2d3748',
                color: '#fff',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
        } catch (err) {
            Swal.fire({
                title: 'Gagal!',
                text: 'Tidak dapat menyalin host.',
                icon: 'error',
                background: '#2d3748',
                color: '#fff',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
        }
    });

    // Copy TextArea to Clipboard
    $('#copy-textarea').click(function() {
        var hostsText = $('#hosts-preview').val();
        navigator.clipboard.writeText(hostsText).then(function() {
            Swal.fire({
                title: 'Berhasil!',
                text: 'Isi hosts.txt telah disalin ke clipboard.',
                icon: 'success',
                background: '#2d3748',
                color: '#fff'
            });
        }, function(err) {
            Swal.fire({
                title: 'Gagal!',
                text: 'Tidak dapat menyalin isi hosts.txt.',
                icon: 'error',
                background: '#2d3748',
                color: '#fff'
            });
        });
    });
});
