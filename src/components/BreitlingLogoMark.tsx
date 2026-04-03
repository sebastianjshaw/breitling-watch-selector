export function BreitlingLogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M24 4L28 12H20L24 4Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M8 18L16 14L14 22L8 18Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M40 18L32 14L34 22L40 18Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M24 44C33.941 44 42 35.941 42 26C42 16.059 33.941 8 24 8C14.059 8 6 16.059 6 26C6 35.941 14.059 44 24 44Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M24 14V26L30 30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
