// import React from "react";
// import { FaChevronRight } from "react-icons/fa";
// import { FiArrowUpRight } from "react-icons/fi";
// import { path } from "../../constant";
// import { useNavigate } from "react-router-dom";

// const BlogMain = () => {

//   const navigate = useNavigate()

//   const blog = [
//     {
//       image: "https://themesflat.co/html/ecomus/images/blog/blog-2.jpg",
//       title: "The next generation of leather alternatives",
//     },
//     {
//       image: "https://themesflat.co/html/ecomus/images/blog/blog-3.jpg",
//       title: "An Exclusive Clothing Collaboration",
//     },
//     {
//       image: "https://themesflat.co/html/ecomus/images/blog/blog-4.jpg",
//       title: "Hello Fashion by Colombian-American",
//     },
//     {
//       image: "https://themesflat.co/html/ecomus/images/blog/blog-5.jpg",
//       title: "Christine Is A True Style Icon",
//     },
//     {
//       image: "https://themesflat.co/html/ecomus/images/blog/blog-6.jpg",
//       title: "Effortlessly Blends The Carefree Style",
//     },
//     {
//       image: "https://themesflat.co/html/ecomus/images/blog/blog-7.jpg",
//       title: "The Variety Of Styles And Prices Are Endless",
//     },
//     {
//       image: "https://themesflat.co/html/ecomus/images/blog/blog-8.jpg",
//       title: "Something About This Style Of Jeans",
//     },
//     {
//       image: "https://themesflat.co/html/ecomus/images/blog/blog-9.jpg",
//       title: "One Of The Most Iconic Fashion Bloggers",
//     },
//   ];

//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-gray-50 via-red-50 to-gray-50 text-center">
//         <h2 className="text-3xl font-semibold text-black mb-2">Blog Grid</h2>
//         <p className="flex py-5 gap-5">
//           Home <FaChevronRight className="mt-1" /> Fashion
//         </p>
//       </div>
//       <div className="container mx-auto px-4 py-7">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//           {blog.map((item, index) => (
//             <div key={index} className="p-1 my-5">
//               <div onClick={(()=>navigate(path.blogdetail))} className="overflow-hidden cursor-pointer rounded-lg">
//                 <img
//                   src={item.image}
//                   alt=""
//                   className="rounded-lg transform transition-transform duration-500 hover:scale-110"
//                 />
//               </div>
//               <h2 onClick={(()=>navigate(path.blogdetail))} className="py-3 text-xl hover:text-red-500 cursor-pointer">
//                 {item.title}
//               </h2>
//               <p onClick={(()=>navigate(path.blogdetail))} className="flex cursor-pointer gap-1 underline">
//                 Read More <FiArrowUpRight className="mt-1" />
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogMain;import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../../api/blogApi";
import { FaChevronRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const BlogMain = () => {
  const navigate = useNavigate();

  // ✅ v5 style
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-gray-50 via-red-50 to-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-black mb-2">Blog Grid</h2>
        <p className="flex py-5 gap-5">
          Home <FaChevronRight className="mt-1" /> Fashion
        </p>
      </div>
      <div className="container mx-auto px-4 py-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {blogs.map((item) => (
            <div key={item._id} className="p-1 my-5">
              <div
                onClick={() => navigate(`/blogdetail/${item._id}`)}

                className="overflow-hidden cursor-pointer rounded-lg"
              >
                <img
                  src={item.images?.[0]} // ✅ अगर array है तो पहली image दिखाओ
                  alt={item.title}
                  className="rounded-lg transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h2
                onClick={() => navigate(`/blogdetail/${item._id}`)}

                className="py-3 text-xl hover:text-red-500 cursor-pointer"
              >
                {item.title}
              </h2>
              <p
                onClick={() => navigate(`/blog/${item._id}`)}
                className="flex cursor-pointer gap-1 underline"
              >
                Read More <FiArrowUpRight className="mt-1" />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
