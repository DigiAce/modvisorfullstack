import Banner from "../components/blog/Banner";
import BlogCard from "../components/blog/BlogCard";

function App() {
  return (
    <div className="mx-auto">
      {/* Banner component */}
      <Banner />

      {/* BlogCard component already handles blog data mapping */}
      <div className="blog-cards">
        <BlogCard />{" "}
        {/* BlogCard is already mapped dynamically from blogData */}
      </div>
    </div>
  );
}

export default App;
