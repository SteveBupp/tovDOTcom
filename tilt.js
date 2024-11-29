document.addEventListener('DOMContentLoaded', () => {
    const tiltContainer = document.querySelector('.profile-container'); // Updated to profile-container
    const tiltImage = document.querySelector('.tilt-img');

    tiltContainer.addEventListener('mousemove', (e) => {
        const rect = tiltContainer.getBoundingClientRect();
        const x = e.clientX - rect.left; // X position within the element
        const y = e.clientY - rect.top;  // Y position within the element

        // Calculate the tilt angle
        const xTilt = ((x / rect.width) - 0.5) * 20; // Adjust for more/less tilt
        const yTilt = ((y / rect.height) - 0.5) * -20;

        tiltImage.style.transform = `rotateY(${xTilt}deg) rotateX(${yTilt}deg)`;
    });

    tiltContainer.addEventListener('mouseleave', () => {
        tiltImage.style.transform = 'rotateY(0deg) rotateX(0deg)'; // Reset on mouse leave
    });
});