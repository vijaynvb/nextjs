type CardProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export default function Card({ children, className = '' }: CardProps) {
    return (<>
        {/* Hello world */}
        <div className={`bg-white rounded-xl shadow-md relative ${className}`}>
          <div className="p-4">
            <div className="mb-6">
              <div className="text-gray-600 my-2">Due: 2025-03-10</div>
              <h3 className="text-xl font-bold">HTML</h3>
            </div>
            <div className="mb-5">
              Master the basics of HTML, including elements, attributes, and page
              structuring.
            </div>
            {children}
            <div className="flex flex-col lg:flex-row justify-between mb-4">
              <div className="text-orange-700 mb-3">
                <h3 className="text-green-500 mb-2">Status: In Progress</h3>
              </div>
              <a
                href="Blog.html"
                className="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
}  

{/* <div class="bg-white rounded-xl shadow-md relative">
        <div class="p-4">
          <div class="mb-6">
            <div class="text-gray-600 my-2">Due: 2025-03-10</div>
            <h3 class="text-xl font-bold">HTML</h3>
          </div>
          <div class="mb-5">
            Master the basics of HTML, including elements, attributes, and page structuring.
          </div>
          <div class="flex flex-col lg:flex-row justify-between mb-4">
            <div class="text-orange-700 mb-3">
              <h3 class="text-green-500 mb-2">Status: In Progress</h3>
            </div>
            <a href="Blog.html" class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">
              Read More
            </a>
          </div>
        </div>
      </div> */}


