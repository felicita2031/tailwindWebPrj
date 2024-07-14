const Post = () => {
    return (
        <>
             {/* Post Section  */}
  <section class="py-24 bg-black text-gega-grey">
    {/* Container  */}
    <div class="container px-10 lg:px-0">
      {/* Title  */}
      <h2 class="text-gega-red"><a href="#">Popular Posts</a></h2>

      {/* Grid Area  */}
      <div class="grid grid-cols-6 gap-10">
        {/* Item 1  */}
        <div class="col-span-6 md:col-span-3 border border-gega-red">
          {/* Item 1 Header  */}
          <div class="border-b border-gega-red p-4 flex items-center justify-between">
            <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
            <img src={`${process.env.PUBLIC_URL}/images/userava1.jpg`} alt="" class="rounded-full"/>
          </div>
          {/* Item 1 Para  */}
          <p class="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
            temporibus dolorem nihil
            excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
          {/* Item 1 Footer  */}
          <div
            class="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
            <p>ON DEC 17, 2022</p>
            <div class="flex items-center justify-center space-x-1">
              <i class="fa-regular fa-comment"></i>
              <p>12</p>
              <i class="fa-regular fa-heart"></i>
              <p>09</p>
            </div>
          </div>
        </div>

        {/* Item 2  */}
        <div class="col-span-6 md:col-span-3 border border-gega-red">
          {/* Item 1 Header  */}
          <div class="border-b border-gega-red p-4 flex items-center justify-between">
            <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
            <img src={`${process.env.PUBLIC_URL}/images/userava1.jpg`} alt="" class="rounded-full"/>
          </div>
          {/* Item 1 Para  */}
          <p class="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
            temporibus dolorem nihil
            excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
          {/* Item 1 Footer  */}
          <div
            class="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
            <p>ON DEC 17, 2022</p>
            <div class="flex items-center justify-center space-x-1">
              <i class="fa-regular fa-comment"></i>
              <p>12</p>
              <i class="fa-regular fa-heart"></i>
              <p>09</p>
            </div>
          </div>
        </div>

        {/* Item 3  */}
        <div class="col-span-6 md:col-span-3 lg:col-span-2 border border-gega-red">
          {/* Item 1 Header  */}
          <div class="border-b border-gega-red p-4 flex items-center justify-between">
            <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
            <img src={`${process.env.PUBLIC_URL}/images/userava1.jpg`} alt="" class="rounded-full"/>
          </div>
          {/* Item 1 Para  */}
          <p class="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
            temporibus dolorem nihil
            excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
          {/* Item 1 Footer  */}
          <div
            class="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
            <p>ON DEC 17, 2022</p>
            <div class="flex items-center justify-center space-x-1">
              <i class="fa-regular fa-comment"></i>
              <p>12</p>
              <i class="fa-regular fa-heart"></i>
              <p>09</p>
            </div>
          </div>
        </div>

        {/* Item 4  */}
        <div class="col-span-6 md:col-span-3 lg:col-span-2 border border-gega-red">
          {/* Item 1 Header  */}
          <div class="border-b border-gega-red p-4 flex items-center justify-between">
            <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
            <img src={`${process.env.PUBLIC_URL}/images/userava1.jpg`} alt="" class="rounded-full"/>
          </div>
          {/* Item 1 Para  */}
          <p class="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
            temporibus dolorem nihil
            excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
          {/* Item 1 Footer  */}
          <div
            class="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
            <p>ON DEC 17, 2022</p>
            <div class="flex items-center justify-center space-x-1">
              <i class="fa-regular fa-comment"></i>
              <p>12</p>
              <i class="fa-regular fa-heart"></i>
              <p>09</p>
            </div>
          </div>
        </div>

        {/* Item 5  */}
        <div class="hidden lg:block lg:col-span-2 border border-gega-red">
          {/* Item 1 Header  */}
          <div class="border-b border-gega-red p-4 flex items-center justify-between">
            <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
            <img src={`${process.env.PUBLIC_URL}/images/userava1.jpg`} alt="" class="rounded-full"/>
          </div>
          {/* Item 1 Para  */}
          <p class="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
            temporibus dolorem nihil
            excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
          {/* Item 1 Footer  */}
          <div
            class="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
            <p>ON DEC 17, 2022</p>
            <div class="flex items-center justify-center space-x-1">
              <i class="fa-regular fa-comment"></i>
              <p>12</p>
              <i class="fa-regular fa-heart"></i>
              <p>09</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
        </>
    )
}
export default Post