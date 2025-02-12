import blogData from "../../data/blogData";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4 container">
      {blogData.map((blog) => (
        <Link
          key={blog.id}
          to={`/blog/full/${blog.id}`} // Link to BlogFullPage with dynamic blog id
          className="flex bg-textColor transition hover:shadow-xl"
        >
          {/* Date Section */}
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime={blog.date}
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-white"
            >
              <span>{blog.year}</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>{blog.day}</span>
            </time>
          </div>

          {/* Image Section */}
          <div className="hidden sm:block sm:basis-56">
            <img
              alt={blog.title}
              src={blog.image}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <h3 className="font-bold uppercase text-white">{blog.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white">
                {blog.description}
              </p>
            </div>

            {/* Read Blog Button */}
            <div className="sm:flex sm:items-end sm:justify-end">
              <span className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                Read Blog
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
