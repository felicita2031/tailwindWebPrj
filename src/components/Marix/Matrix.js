const Matrix = () => {
    return (
        <>
           {/* Matrix Section */}
  <section className="bg-gega-white">
    {/* Matris section container */}
    <div className="container flex items-center justify-center relative pl-10 lg:pl-0">
      {/* Left Content */}
      <div className="hidden md:block md:basis-1/3 lg:basis-1/2">
        <img src={`${process.env.PUBLIC_URL}/images/matrix.png`} alt="" class="lg:absolute lg:bottom-0"/>
      </div>
      {/* Right Content */}
      <div className="md:basis-2/3 lg:basis-1/2">
        {/* Right content container */}
        <div className="flex flex-col justify-center py-10 w-3/4 md:w-full">
          <h3 className="tracking-wider text-gega-melon">ACTION, DRAMA, THRILLER</h3>
          <h2 className="mb-2">Matrix Reloaded</h2>
          <p className="text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus unde repellat impedit
            consequatur soluta
            obcaecati totam animi excepturi est vero?</p>
          <h3 className="tracking-wider text-gega-red">8 wins 34 nominations</h3>
        </div>
      </div>

      {/* Oldie */}
      <div
        className="left-10 absolute -top-12 lg:left-0 w-24 h-24 bg-gega-melon rounded-full text-center flex items-center">
        <p className="font-gemunu uppercase font-bold text-xl text-gega-red -rotate-45">Oldie & Goldie</p>
      </div>
    </div>
  </section>

        </>
    )
}
export default Matrix 