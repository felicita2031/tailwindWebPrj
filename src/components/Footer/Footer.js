const Footer = () => {
    return (
        <>
         {/* Footer Section  */}
  <footer class="bg-black text-gega-grey">
    {/* Footer Container  */}
    <div class="container flex flex-col md:flex-row px-10 lg:px-0 pb-8">
      {/* Left  */}
      <div class="basis-1/3">
        <a href="#"
          class="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey">GEGA</a>
        <p class="text-sm mt-2">2022 ArinSOFT No &copy; COPYRIGHT</p>
      </div>
      {/* Middle  */}
      <div class="basis-1/3">
        <h2 class="mb-2 text-gega-red">LINKS</h2>
        <div class="grid grid-cols-5 gap-2 uppercase">
          <a class="col-span-2 hover:text-gega-melon duration-500" href="#">Movies</a>
          <a class="col-span-2 hover:text-gega-melon duration-500" href="#">Celebrities</a>
          <a class="col-span-2 hover:text-gega-melon duration-500" href="#">Blog</a>
          <a class="col-span-2 hover:text-gega-melon duration-500" href="#">News</a>
          <a class="col-span-2 hover:text-gega-melon duration-500" href="#">Abput</a>
        </div>
      </div>
      {/* Right  */}
      <div class="basis-1/3">
        <h2 class="mb-2 text-gega-red">FOLLOW US</h2>
        <form action="" class="flex">
          <input class="py-1 px-2 bg-transparent border border-gega-red placeholder:text-xs outline-none"
            placeholder="TYPE YOUR EMAIL" type="text"/>
          <button
            class="py-1 px-2 bg-transparent border border-gega-red bg-gega-red font-gemunu uppercase">Subscribe</button>
        </form>
      </div>
    </div>
  </footer>

        </>
    )
}
export default Footer