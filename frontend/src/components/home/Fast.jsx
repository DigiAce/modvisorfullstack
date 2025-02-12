const FastModellingSection = () => {
  return (
    <section className="bg-blue-900 text-white p-8 rounded-[30px] max-w-7xl h-auto sm:h-72 mx-auto flex flex-col sm:flex-row items-center gap-8 relative z-10 top-12 mb-20 sm:mb-0 overflow-hidden">
      {/* Left Section: Logo */}
      <div className="flex-shrink-0">
        <a
          href="https://www.fast-standard.org/signatories/" // Replace with your desired URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/fastlogo.png"
            alt="FAST Logo"
            className="h-12 w-50" // Adjust size as needed
          />
        </a>
      </div>

      {/* Divider */}
      <div className="hidden sm:block border-l border-gray-300 h-32"></div>

      {/* Right Section: Content */}
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          FAST Modelling Standard Signatory
        </h2>
        <p className="text-lg leading-relaxed">
          We believe in delivering the quality in our financial models.
          Therefore, we build our models in FAST Standard, which means Flexible,
          Approximate, Structured & Transparent. It is the first financial
          modelling standard in the world accredited by the Institute of
          Chartered Accountants of England and Wales. We are proudly one of the
          FAST Signatories, and you can see us on the website of FAST Standard
          Organisation (FSO).
        </p>
      </div>
    </section>
  );
};

export default FastModellingSection;
