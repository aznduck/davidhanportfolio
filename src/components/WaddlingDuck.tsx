import { profile } from '../content'

// Crosses the bottom of the screen once, then unmounts via onDone.
export default function WaddlingDuck({ onDone }: { onDone: () => void }) {
  return (
    <div
      aria-hidden
      onAnimationEnd={onDone}
      className="pointer-events-none fixed bottom-6 left-0 z-30 flex flex-col items-center [animation:waddle_4s_linear_forwards]"
    >
      <span className="mb-1 rounded-full bg-accent px-2 py-0.5 font-mono text-xs font-medium text-bg">quack!</span>
      <img src={profile.duck} alt="" className="h-12 w-12" />
    </div>
  )
}
