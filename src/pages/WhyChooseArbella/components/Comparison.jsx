const Comparison = () => {
  return (
    <section className="w-full bg-[#F7FDFF] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-center font-[IvyPresto_Headline] text-[#000] text-2xl md:text-3xl lg:text-4xl font-light leading-8 md:leading-[78.313px] mb-8 md:mb-16">
          LABOR COST <span className="text-[#FFA475]">COMPARISON (2025)</span>
        </h2>

        {/* Chart Image */}
        <div className="flex justify-center pl-0 md:pl-20">
          <img
            src="/assets/images/whyChooseArbella/Spendings.png"
            alt="Labor Cost Comparison Chart"
            className="w-full h-auto max-w-xs md:w-[751px] md:h-[718px] md:max-w-none md:p-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Comparison;
