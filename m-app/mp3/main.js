document.addEventListener('DOMContentLoaded', () => {
    // Example function to load trending music
    function loadTrendingMusic() {
        const trendingSection = document.querySelector('.trending .items');
        
        // Example data, replace with actual data fetching logic
        const trendingMusic = [
            { title: 'Album 1', image: 'imgs/note.png.png' },
            { title: 'Album 2', image: 'assets/images/album2.jpg' }
        ];

        trendingMusic.forEach(music => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <img class="music-note" src="${music.image}" alt="${music.title}" style="border-radius: 10px;">
                <h3>${music.title}</h3>
                <button>Play</button>
            `;
            trendingSection.appendChild(item);
        });
    }

    // Example function to load featured artists
    function loadFeaturedArtists() {
        const featuredSection = document.querySelector('.featured-artists .items');
        
        // Example data, replace with actual data fetching logic
        const featuredArtists = [
            { name: 'Artist 1', image: 'assets/images/artist1.jpg' },
            { name: 'Artist 2', image: 'assets/images/artist2.jpg' }
        ];

        featuredArtists.forEach(artist => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <img src="${artist.image}" alt="${artist.name}">
                <h3>${artist.name}</h3>
                <button>View Profile</button>
            `;
            featuredSection.appendChild(item);
        });
    }

    // Example function to load new releases
    function loadNewReleases() {
        const newReleasesSection = document.querySelector('.new-releases .items');
        
        // Example data, replace with actual data fetching logic
        const newReleases = [
            { title: 'Album 3', image: 'assets/images/album3.jpg' },
            { title: 'Album 4', image: 'assets/images/album4.jpg' }
        ];

        newReleases.forEach(album => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <img src="${album.image}" alt="${album.title}" style="border-radius: 10px;">
                <h3>${album.title}</h3>
                <button>Play</button>
            `;
            newReleasesSection.appendChild(item);
        });
    }

    // Call the functions to load content
    loadTrendingMusic();
    loadFeaturedArtists();
    loadNewReleases();
});
