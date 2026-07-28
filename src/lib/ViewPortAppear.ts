export function inViewport(node: HTMLElement) {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                node.classList.add("object-show");
                observer.unobserve(node); // Animate only once
            }
        },
        {
            threshold: 0.2,
        }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        },
    };
}
