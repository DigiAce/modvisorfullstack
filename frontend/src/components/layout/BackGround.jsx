const Background = ({ children, backgroundImageUrl }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full min-h-screen"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
