const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="50"
    height="50"
  >
    {/* <!-- Circular badge --> */}
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="url(#gradient)"
      stroke="#38a169"
      strokeWidth="5"
    />

    {/* <!-- Checkmark --> */}
    <path
      d="M30 50 L45 65 L70 40"
      fill="none"
      stroke="white"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* <!-- Gradient --> */}
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#38a169", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#2f855a", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;
