const Movies = () => {
    return (
        <>
    {/* -Movies Section  */}
  <section class="py-24 bg-black">
    {/* Movies Content  */}
    <div class="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
     {/* Left Content */}
      <div class="basis-2/3">
        {/* Titles */}
        <div class="flex space-x-2 divide-x divide-gega-red divide-opacity-50 mb-8 pl-10 lg:pl-0">
          <h2 class="text-gega-red"><a href="#">Latest</a></h2>
          <h2 class="text-gega-grey pl-2 hover:text-gega-red duration-500"><a href="#">Popular</a></h2>
          <h2 class="text-gega-grey pl-2 hover:text-gega-red duration-500"><a href="#">Best</a></h2>
        </div>
        {/* Images Container */}
        <div class="flex flex-wrap">
          {/* Image 1 */}
          <div class="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
            {/* Image */}
            <img src={`${process.env.PUBLIC_URL}/images/mv1.jpg`} class="group-hover:scale-110 group-hover:opacity-50 duration-500"/>
            {/* Image Detail Container */}
            <div class="absolute px-6 bottom-8">
              <h3 class="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
              <p class="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem
                ipsum dolor sit amet
                consectetur adipisicing elit. Praesentium,
                impedit.</p>
              {/* Icons Container */}
              <div
                class="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-play"></i></a>
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          {/* Image 2 */}
          <div class="group relative overflow-hidden basis-1/3 md:basis-1/4  lg:basis-1/3">
            {/* Image */}
            <img src={`${process.env.PUBLIC_URL}/images/mv6.jpg`} class="group-hover:scale-110 group-hover:opacity-50 duration-500"/>
            {/* Image Detail Container */}
            <div class="absolute px-6 bottom-8">
              <h3 class="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
              <p class="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem
                ipsum dolor sit amet
                consectetur adipisicing elit. Praesentium,
                impedit.</p>
              {/* Icons Container */}
              <div
                class="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-play"></i></a>
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          {/* Image 3 */}
          <div class="group relative overflow-hidden basis-1/3 md:basis-1/4  lg:basis-1/3">
            {/* Image */}
            <img src="./images/mv2.jpg" class="group-hover:scale-110 group-hover:opacity-50 duration-500"/>
            {/* Image Detail Container */}
            <div class="absolute px-6 bottom-8">
              <h3 class="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
              <p class="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem
                ipsum dolor sit amet
                consectetur adipisicing elit. Praesentium,
                impedit.</p>
              {/* Icons Container */}
              <div
                class="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-play"></i></a>
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          {/* Image 4 */}
          <div class="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
            {/* Image */}
            <img src={`${process.env.PUBLIC_URL}/images/mv3.jpg`} class="group-hover:scale-110 group-hover:opacity-50 duration-500"/>
            {/* Image Detail Container */}
            <div class="absolute px-6 bottom-8">
              <h3 class="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
              <p class="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem
                ipsum dolor sit amet
                consectetur adipisicing elit. Praesentium,
                impedit.</p>
              {/* Icons Container */}
              <div
                class="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-play"></i></a>
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          {/* Image 5 */}
          <div class="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
            {/* Image */}
            <img src={`${process.env.PUBLIC_URL}/images/mv4.jpg`} class="group-hover:scale-110 group-hover:opacity-50 duration-500"/>
            {/* Image Detail Container */}
            <div class="absolute px-6 bottom-8">
              <h3 class="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
              <p class="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem
                ipsum dolor sit amet
                consectetur adipisicing elit. Praesentium,
                impedit.</p>
              {/* Icons Container */}
              <div
                class="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-play"></i></a>
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          {/* Image 6 */}
          <div class="group relative overflow-hidden basis-1/3 md:basis-1/4  lg:basis-1/3">
            {/* Image */}
            <img src={`${process.env.PUBLIC_URL}/images/mv5.jpg`} class="group-hover:scale-110 group-hover:opacity-50 duration-500"/>
            {/* Image Detail Container */}
            <div class="absolute px-6 bottom-8">
              <h3 class="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
              <p class="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem
                ipsum dolor sit amet
                consectetur adipisicing elit. Praesentium,
                impedit.</p>
              {/* Icons Container */}
              <div
                class="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-play"></i></a>
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          {/* Image 7 */}
          <div class="group relative overflow-hidden basis-1/3 md:basis-1/4  lg:basis-1/3 hidden md:block lg:hidden">
            {/* Image */}
            <img src={`${process.env.PUBLIC_URL}/images/mv1.jpg`} class="group-hover:scale-110 group-hover:opacity-50 duration-500"/>
            {/* Image Detail Container */}
            <div class="absolute px-6 bottom-8">
              <h3 class="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
              <p class="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem
                ipsum dolor sit amet
                consectetur adipisicing elit. Praesentium,
                impedit.</p>
              {/* Icons Container */}
              <div
                class="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-play"></i></a>
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          {/* Image 8 */}
          <div class="group relative overflow-hidden basis-1/3 md:basis-1/4  lg:basis-1/3  hidden md:block lg:hidden">
            {/* Image */}
            <img src={`${process.env.PUBLIC_URL}/images/mv2.jpg`} class="group-hover:scale-110 group-hover:opacity-50 duration-500"/>
            {/* Image Detail Container */}
            <div class="absolute px-6 bottom-8">
              <h3 class="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
              <p class="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem
                ipsum dolor sit amet
                consectetur adipisicing elit. Praesentium,
                impedit.</p>
              {/* Icons Container */}
              <div
                class="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-play"></i></a>
                <a class="hover:text-gega-red" href="#"><i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Content */}
      <div class="basis-1/3 pl-10 lg:pl-0">
        {/* Title */}
        <h2 class="text-gega-grey mb-8">Hot News</h2>
        {/* News Container */}
        <div
          class="flex flex-row lg:flex-col lg:h-full lg:pb-16 justify-start lg:justify-between flex-wrap lg:flex-nowrap space-y-4">
          {/* Item */}
          <div class="flex items-center group basis-3/4 md:basis-1/2">
            {/* News Image Container */}
            <div class="basis-1/3 h-full">
              <img src={`${process.env.PUBLIC_URL}/images/new1.jpg`} class="h-full w-full object-cover" alt=""/>
            </div>
            {/* Item Dteail */}
            <div
              class="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, delectus.</p>
              <p class="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022</p>
            </div>
          </div>
          {/* Item */}
          <div class="flex items-center group basis-3/4 md:basis-1/2">
            {/* News Image Container */}
            <div class="basis-1/3 h-full">
              <img src={`${process.env.PUBLIC_URL}/images/new1.jpg`} class="h-full w-full object-cover" alt=""/>
            </div>
            {/* Item Dteail */}
            <div
              class="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, delectus.</p>
              <p class="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022</p>
            </div>
          </div>
          {/* Item */}
          <div class="flex items-center group basis-3/4 md:basis-1/2">
            {/* News Image Container */}
            <div class="basis-1/3 h-full">
              <img src={`${process.env.PUBLIC_URL}/images/new1.jpg`} class="h-full w-full object-cover" alt=""/>
            </div>
            {/* Item Dteail */}
            <div
              class="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, delectus.</p>
              <p class="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022</p>
            </div>
          </div>
          {/* Item */}
          <div class="flex items-center group basis-3/4 md:basis-1/2">
            {/* News Image Container */}
            <div class="basis-1/3 h-full">
              <img src={`${process.env.PUBLIC_URL}/images/new1.jpg`} class="h-full w-full object-cover" alt=""/>
            </div>
            {/* Item Dteail */}
            <div
              class="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, delectus.</p>
              <p class="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022</p>
            </div>
          </div>
          {/* Item */}
          <div class="flex items-center group  basis-3/4 md:basis-1/2 md:hidden lg:flex">
            {/* News Image Container */}
            <div class="basis-1/3 h-full">
              <img src={`${process.env.PUBLIC_URL}/images/new1.jpg`} class="h-full w-full object-cover" alt=""/>
            </div>
            {/* Item Dteail */}
            <div
              class="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, delectus.</p>
              <p class="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


        </>
    )
}
export default Movies 