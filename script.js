document.addEventListener('DOMContentLoaded', function () {
    var episodesData = [
        { title: 'Episódio 1', description: '' },
        { title: 'Episódio 2', description: '' },
        { title: 'Episódio 3', description: '' },
    
    ];

    var episodeCardsContainer = document.getElementById('episodeCards');


    function renderEpisodeCards() {
        var cardsHTML = '';

        episodesData.forEach(function (episode) {
            cardsHTML += `
                <div class="episode-card" onclick="playEpisode(this)">
                    <h3>${episode.title}</h3>
                    <p>${episode.description}</p>
                </div>
            `;
        });

        episodeCardsContainer.innerHTML = cardsHTML;
    }

    renderEpisodeCards();
});

function shareOnFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), 'facebook-share-dialog', 'width=800,height=600');
}

function shareOnTwitter() {
    window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent(document.title), 'twitter-share-dialog', 'width=800,height=600');
}

function shareOnInstagram() {
    alert('Instagram não permite compartilhamento direto via web. Use o aplicativo do Instagram.');
}

function scrollLeft() {
    document.querySelector('.movie-row__posters').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.movie-row__posters').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}

function showUnderConstruction() {
    alert('Página em construção');
}

function playEpisode(clickedEpisode) {
    var episodeCards = document.querySelectorAll('.episode-card');
    episodeCards.forEach(card => {
        card.classList.remove('selected');
    });

    clickedEpisode.classList.add('selected');

    var modal = document.getElementById('episodePlayer');
    var modalContent = modal.querySelector('.modal-content');
    var playerTitle = modalContent.querySelector('#playerTitle');
    var playerVideo = modalContent.querySelector('#playerVideo');

    playerTitle.textContent = clickedEpisode.querySelector('h3').textContent; 
    playerVideo.src = 'https://www.w3schools.com/html/mov_bbb.mp4';

    modal.style.display = 'block';
}

function closePlayer() {
    var modal = document.getElementById('episodePlayer');
    var playerVideo = modal.querySelector('#playerVideo');

    playerVideo.pause();
    playerVideo.currentTime = 0;

    modal.style.display = 'none';
}
