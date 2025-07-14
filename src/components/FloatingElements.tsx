const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main floating blob - inspired by Portfolite */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
      
      {/* Secondary blob */}
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      
      {/* Smaller floating elements */}
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-bounce animation-delay-2000" />
      <div className="absolute bottom-1/3 left-1/2 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-bounce animation-delay-3000" />
      
      {/* Gradient overlay lines */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
    </div>
  );
};

export default FloatingElements;