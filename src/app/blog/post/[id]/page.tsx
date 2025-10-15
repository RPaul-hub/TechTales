import { blogs } from "../../../lib/placeholder-data";
import BlogCard from "../../../ui/blocks/blog-card";

export default function Blogs({ params }: { params: { id: number } }) {
    const post = blogs.find((posts) => posts.id === Number(params.id));
    if (!post) {
        return (
            <div>
                <h1 className="font-bold text-3xl mb-3">Blog Details</h1>
                <p>Blog post not found.</p>
            </div>
        );
    }
    return(
        <div>
            <h1 className="font-bold text-3xl mb-3">Blog Details</h1>
            <BlogCard {...post}/>
        </div>
    )
}
