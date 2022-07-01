const VercelSvg = (p: JSX.IntrinsicElements['svg']) => (
  <svg
    data-testid="dashboard-logo"
    height="48"
    viewBox="0 0 75 65"
    fill="currentColor"
    aria-label="Vercel Logo"
    {...p}
  >
    <path d="M37.59.25l36.95 64H.64l36.95-64z" />
  </svg>
)

export default VercelSvg
