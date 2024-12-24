import { createSignal, createEffect, onCleanup } from 'solid-js';

export default function AnimatedCounter(props) {
  const {
    target = 0,  // Set default to 0 if `target` is not passed
    duration = 5000,
    prefix = '',
    suffix = '+',
    className = ''
  } = props;

  const [count, setCount] = createSignal(0);

  // This effect is run every time the target changes
  createEffect(() => {
    if (target === undefined || target <= 0) {
      return; // Do nothing if the target is not valid
    }

    const startTime = performance.now();
    let animationFrame;

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out quad)
      const easedProgress = progress * (2 - progress);

      // Calculate current count based on the eased progress
      const currentCount = Math.round(easedProgress * target);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    // Cleanup function to cancel animation if component unmounts
    onCleanup(() => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    });
  });

  return (
    <div class={`inline-block ${className}`}>
      <span class="tabular-nums">
        {prefix}{count().toLocaleString()}{suffix}
      </span>
    </div>
  );
}
