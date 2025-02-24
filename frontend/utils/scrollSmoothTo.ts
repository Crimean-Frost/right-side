export default (targetPosition: number, duration: number) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    let isAnimating = true;

    const preventScroll = (e: Event) => {
        if (isAnimating) {
            e.preventDefault();
        }
    }

    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });

    function animation(currentTime: number) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, startPosition + distance * progress);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        } else {
            isAnimating = false;
            document.removeEventListener('wheel', preventScroll);
            document.removeEventListener('touchmove', preventScroll);
        }
    }

    requestAnimationFrame(animation);
}