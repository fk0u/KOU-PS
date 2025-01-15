// server-status.js

$(document).ready(function() {
    function loadServerStatus() {
        $.getJSON('assets/data/server-status.json', function(data) {
            var status = data.status;
            var playerCount = data.player_count;

            if (status === "online") {
                $('#status-icon').removeClass('fa-spinner fa-spin text-red-500').addClass('fa-check-circle text-green-500');
                $('#status-text').text('Server Online');
                $('#player-count').removeClass('hidden');
                $('#count').text(playerCount);
            } else {
                $('#status-icon').removeClass('fa-spinner fa-spin text-green-500').addClass('fa-times-circle text-red-500');
                $('#status-text').text('Server Offline');
                $('#player-count').addClass('hidden');
            }
        }).fail(function() {
            $('#status-icon').removeClass('fa-spinner fa-spin').addClass('fa-exclamation-triangle text-yellow-500');
            $('#status-text').text('Gagal memuat status server.');
            $('#player-count').addClass('hidden');
        });
    }

    // Load server status on page load
    loadServerStatus();

    // Refresh server status every 60 seconds
    setInterval(loadServerStatus, 60000);
});
