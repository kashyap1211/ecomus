// import React from "react";
// import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
// import { FaFacebookF, FaInstagram, FaQuoteRight } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import RelatedArticles from "./RelatedArticles";

// const BlogDetail = () => {
//   return (
//     <div className="container px-4 mx-auto py-7">
//       <div className="py-5 flex justify-center gap-5">
//         <p className="uppercase border p-1 text-lg hover:border-red-600 hover:text-red-600 cursor-pointer">
//           Accessories
//         </p>
//         <p className="uppercase border p-1 text-lg hover:border-red-600 hover:text-red-600 cursor-pointer">
//           Bags
//         </p>
//       </div>
//       <div className="py-5">
//         <h2 className="text-2xl md:text-5xl text-center">
//           Something About This Style Of Jeans
//         </h2>
//         <p className="py-5 text-center font-inherit">
//           by <span className="font-bold">admin</span> on{" "}
//           <span className="font-bold"> Oct 02 </span>
//         </p>
//         <div className="flex flex-col justify-center">
//           <img
//             src="https://themesflat.co/html/ecomus/images/blog/blog-detail.jpg"
//             className="rounded-2xl"
//             alt=""
//           />
//           <div className="p-5 my-5 border-l-2">
//             <FaQuoteRight className="text-2xl text-gray-500" />
//             <p className="py-2 text-lg font-inherit">
//               Typography is the work of typesetters, compositors, typographers,
//               graphic designers, art directors, manga artists, comic book
//               artists, graffiti artists, and now—anyone who arranges words,
//               letters, numbers, and symbols for publication, display, or
//               distribution—from clerical workers and newsletter writers to
//               anyone self-publishing materials.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <div>
//               <img
//                 className="rounded-2xl"
//                 src="https://themesflat.co/html/ecomus/images/blog/blog-detail-1.jpg"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 className="rounded-2xl"
//                 src="https://themesflat.co/html/ecomus/images/blog/blog-detail-2.jpg"
//                 alt=""
//               />
//             </div>
//           </div>
//           <p className="py-5 font-inherit">
//             Pellentesque dapibus hendrerit tortor. Nam ipsum risus, rutrum
//             vitae, vestibulum eu, molestie vel, lacus. Sed libero. Phasellus
//             tempus. Etiam feugiat lorem non metus Maecenas vestibulum mollis
//             diam. Pellentesque auctor neque nec urna. Pellentesque commodo eros
//             a enim. Etiam sit amet orci eget eros faucibus tincidunt. Vestibulum
//             purus quam, scelerisque ut, mollis sed, nonummy id, metus.In hac
//             habitasse platea dictumst. Etiam ultricies nisi vel augue.
//             Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla
//             eleifend augue, ac auctor orci leo non est. Quisque rutrum. Duis
//             leo.
//           </p>
//           <p className="py-5 font-inherit">
//             Pellentesque dapibus hendrerit tortor. Nam ipsum risus, rutrum
//             vitae, vestibulum eu, molestie vel, lacus. Sed libero. Phasellus
//             tempus. Etiam feugiat lorem non metus. Morbi mattis ullamcorper
//             velit. Donec sodales sagittis magna. Curabitur a felis in nunc
//             fringilla tristique. Quisque malesuada placerat nisl. Phasellus
//             gravida semper nisi.
//           </p>
//           <p className="py-5 font-inherit">
//             Curabitur blandit mollis lacus. Phasellus nec sem in justo
//             pellentesque facilisis. Mauris turpis nunc, blandit et, volutpat
//             molestie, porta ut, ligula. Fusce ac felis sit amet ligula pharetra
//             condimentum. Integer tincidunt.
//           </p>
//           <p className="py-5 font-inherit">
//             Maecenas vestibulum mollis diam. Pellentesque auctor neque nec urna.
//             Pellentesque commodo eros a enim. Etiam sit amet orci eget eros
//             faucibus tincidunt. Vestibulum purus quam, scelerisque ut, mollis
//             sed, nonummy id, metus.In hac habitasse platea dictumst. Etiam
//             ultricies nisi vel augue. Pellentesque egestas, neque sit amet
//             convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo
//             non est. Quisque rutrum. Duis leo.
//           </p>
//         </div>
//         <div className="flex justify-between my-5">
//           <p className="uppercase border p-1 text-lg hover:border-red-600 hover:text-red-600 cursor-pointer">
//             Accessories
//           </p>
//           <div className="flex gap-2">
//             <p className="text-lg">Share:</p>
//             <div className="flex gap-2 text-lg">
//               <FaFacebookF className="mt-1" /> <FaInstagram className="mt-1" />{" "}
//               <FaXTwitter className="mt-1" />
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 py-5 border-t border-b">
//           <div className="flex gap-2">
//             <CiCircleChevLeft className="text-5xl" />
//             <div>
//               <p>PREVIOUS</p>
//               <p>Fashionista editors reveal their designer</p>
//             </div>
//           </div>
//           <div className="flex justify-end gap-2">
//             <div >
//               <p className="text-end">PREVIOUS</p>
//               <p className="text-end">Fashionista editors reveal their designer</p>
//             </div>
            
//             <CiCircleChevRight className="text-5xl" />
//           </div>
//         </div>
//       </div>
//       <RelatedArticles/>
//     </div>
//   );
// };

// export default BlogDetail;import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../../api/blogApi";
import { MdFormatQuote } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

const BlogDetail = () => {
  const { id } = useParams();

  const { data: blog, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlogById(id),
  });

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Something went wrong!</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category */}
      <div className="flex justify-center gap-3 mb-5 flex-wrap">
        {blog.categories?.map((cat, idx) => (
          <span
            key={idx}
            className="uppercase border px-3 py-1 text-xs md:text-sm rounded-lg"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-center leading-snug mb-3">
        {blog.title}
      </h1>

      {/* Author + Date */}
      <p className="text-center text-gray-500 mb-8">
        by <span className="font-semibold">{blog.author}</span> on{" "}
        <span className="font-semibold">
          {new Date(blog.date).toLocaleDateString()}
        </span>
      </p>

      {/* Main Image */}
      {blog.images && blog.images.length > 0 && (
        <img
          src={blog.images[0]}
          alt={blog.title}
          className="rounded-2xl w-full max-h-[500px] object-cover mx-auto mb-8"
        />
      )}

      {/* First Content */}
      {blog.contents && blog.contents[0] && (
        <div className="w-full mx-auto text-lg leading-relaxed mb-10">
          <blockquote className="italic border-l-4 border-gray-400 pl-4 mb-4">
            <MdFormatQuote className="text-5xl mb-5" />
            {blog.contents[0]}
          </blockquote>
        </div>
      )}

      {/* Grid Images */}
      {blog.images && blog.images.length > 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto mb-10">
          {blog.images.slice(1, 3).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${blog.title} extra ${idx}`}
              className="rounded-xl w-full h-[300px] object-cover"
            />
          ))}
        </div>
      )}

      {/* More Content */}
      {blog.contents?.slice(1).map((content, idx) => (
        <div
          key={idx}
          className="w-full mx-auto text-lg leading-relaxed mb-8"
        >
          <p>{content}</p>
        </div>
      ))}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {blog.tags?.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 border rounded-full text-sm cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Share Buttons */}
      <div className="flex items-center gap-4 mt-10">
        <span className="font-semibold">Share:</span>
        <div className="flex gap-3">
          <FaFacebook />
          <BsInstagram />
          <FaSquareXTwitter />
          
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
