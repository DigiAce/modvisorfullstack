import { useParams } from "react-router-dom"; // Import useParams
import { blogDataFull } from "../data/blogFullContent";

const BlogFullPage = () => {
  const { id } = useParams(); // Get the blog id from the URL parameters

  // Find the blog that matches the `id`
  const blog = blogDataFull.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <p className="text-center text-gray-600">Blog not found!</p>;
  }

  return (
    <div className="">
      {/* Dynamic Banner Section */}
      {blog.bannerImageUrl && (
        <div
          className="w-full h-64 md:h-96 bg-cover bg-center mb-6"
          style={{
            backgroundImage: `url(${blog.bannerImageUrl})`,
          }}
        >
          <div className="w-full h-full bg-black/40 flex items-center justify-center text-white rounded-lg">
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              {blog.title}
            </h1>
          </div>
        </div>
      )}

      <div className="mx-auto p-12">
        {/* Header Section */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-600">
            Posted on: <span className="font-medium">{blog.date}</span>
            <span className="font-medium">{blog.author}</span>
          </p>
        </header>

        {/* Social Media Sharing */}
        {/* <div className="flex gap-4 mb-6 text-gray-600">
          <button className="hover:text-blue-600">Facebook</button>
          <button className="hover:text-blue-400">Twitter</button>
          <button className="hover:text-blue-500">LinkedIn</button>
        </div> */}

        {/* Image Section */}
        {blog.imageUrl && (
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-32 h-32 rounded-md mb-6"
          />
        )}

        {/* Content Section */}
        <div className="text-gray-800">
          {blog.content?.map((section, index) => (
            <section key={index} className="mb-6">
              <h2 className="text-xl font-bold mb-3">{section.heading}</h2>
              {section.description && (
                <p className="mb-3 text-sm leading-relaxed">
                  {section.description}
                </p>
              )}
              {section.points && (
                <ul className="list-disc pl-6 text-sm">
                  {section.points.map((point, i) => (
                    <li key={i} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {section.steps && (
                <ol className="list-decimal pl-6 text-sm">
                  {section.steps.map((step, i) => (
                    <li key={i} className="mb-2">
                      {step}
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </div>

        {/* Conclusion Section */}
        <footer className="mt-6">
          <h3 className="text-lg font-bold">Conclusion</h3>
          <p className="text-sm leading-relaxed text-gray-700">
            {blog.conclusion?.description}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BlogFullPage;
