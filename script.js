document.addEventListener('DOMContentLoaded', (event) => {
    const hoverImage = document.getElementById('hoverImage');
    const hoverSound = document.getElementById('hoverSound');

    // Static image and GIF paths
    const staticImageSrc = './access/images/aesthetic-pingu-meme-desktop-wallpaper.jpg';
    const gifImageSrc = './121_Noot_noot.gif';

    hoverImage.addEventListener('click', () => {
        hoverImage.src = gifImageSrc;
        hoverSound.play().catch(error => {
                    console.error("Sound play prevented by browser: ", error);
                });;
    });

    hoverImage.addEventListener('mouseout', () => {
        hoverImage.src = staticImageSrc;
        hoverSound.pause();
        hoverSound.currentTime = 0; // Reset the sound to the beginning
    });
});