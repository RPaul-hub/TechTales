import { blogs } from "../lib/placeholder-data";
import BlogCard from "../ui/blocks/blog-card";

export default function Blogs() {
    return(
        <div>
            <h1 className="text-2xl font-semi-bold my-5">Latest Articles</h1>
            {blogs.map((blog) => (
                <div key={blog.id} className="mb-4">
                    <BlogCard {...blog}/>
                </div>
            ))}
        </div>
    )
}