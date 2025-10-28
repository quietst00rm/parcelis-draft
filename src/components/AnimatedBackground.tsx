export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated geometric shapes */}
      <svg
        className="absolute top-20 right-10 w-32 h-32 opacity-10 animate-float-1"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
      </svg>
      
      <svg
        className="absolute top-1/3 left-10 w-24 h-24 opacity-10 animate-float-2"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon points="50,10 90,90 10,90" stroke="white" strokeWidth="2" />
      </svg>
      
      <svg
        className="absolute bottom-1/4 right-1/4 w-28 h-28 opacity-10 animate-float-3"
        viewBox="0 0 100 100"
        fill="none"
      >
        <rect x="20" y="20" width="60" height="60" stroke="white" strokeWidth="2" />
      </svg>

      {/* Flowing lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.05]"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 400 Q300 200 600 400 T1300 400"
          stroke="white"
          strokeWidth="2"
          className="animate-flow-1"
        />
        <path
          d="M-100 450 Q300 250 600 450 T1300 450"
          stroke="white"
          strokeWidth="2"
          className="animate-flow-2"
        />
      </svg>
    </div>
  );
};
