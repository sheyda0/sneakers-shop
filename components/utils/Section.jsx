const Section = ({ children, cln }) => {
  return (
    <section
      className={`my-[3rem] lg:my-[5rem] px-[1rem] lg:px-[2rem] 3xl:max-w-[1600px] 2xl:max-w-[1400px] xl:max-w-[1280px] mx-auto ${cln}`}
    >
      {children}
    </section>
  );
};

export default Section;
