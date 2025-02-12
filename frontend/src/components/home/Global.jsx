const Global = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-6 sm:px-12 lg:px-20"
      style={{
        backgroundImage: "url('/img/globe-1.jpg')", // Replace with your image path
      }}
    >
      {/* Tint Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-0"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center sm:text-left space-y-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-center">
          Our Global Footprint
        </h2>
        <p className="text-lg sm:text-2xl leading-relaxed">
          Our team brings expertise from around the world — serving clients in
          the{" "}
          <span className="text-[#ffc541] font-bold">
            United Kingdom, Australia, Singapore, India, the United States, the
            Middle East, and South Africa.
          </span>{" "}
          This diverse experience allows us to adapt financial modelling
          solutions to specific market needs, helping businesses succeed no
          matter where they are located. With global insights and local
          expertise, we ensure your financial strategies are impactful and
          relevant worldwide.
        </p>
        <p className="text-lg sm:text-2xl leading-relaxed">
          So, whether you're looking for a custom model build, an in-depth model
          review, or specialized training, we’ve got you covered. At ModVisor,
          you're always ahead of the game, delivering clear, precise models and
          insights that empower you to make confident, informed decisions.
        </p>
      </div>
    </section>
  );
};

export default Global;
