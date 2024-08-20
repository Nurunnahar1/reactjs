import Single from "./Single";
import { blogs } from "../../data/data";
const Blog = () => {
  return (
    <>
      <div className="blog-area">
        {blogs.reverse().map((item) => {
          return (
            <Single
              key={item.id}
              title={item.title}
              desc={item.desc}
              img={item.img}
            />
          );
        })}
      </div>
    </>
  );
};
export default Blog;

