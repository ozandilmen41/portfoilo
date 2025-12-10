import Link from "next/link"
import { posts } from "@/data/posts"
export default function BlogList() {
    
    return (
        <div className="max-w-2xl mx-auto mt-16 px-6">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">Son Yazılar</h2>
            <div className="space-y-8">
                {posts.map((post) => (
                    <div  className= "border-b border-gray-200 pb-3" key={post.id}>
                        <Link href={`/blog/${post.slug}`} className="block group">
                            <h3 className="text-gray-900 font-semibold text-lg group-hover:text-blue-600 transition-colors">
                            {post.title}
                            </h3>
                        </Link>
                        <p className="text-gray-600">{post.excerpt}</p>
                        <span className="text-gray-500">{post.date} • {post.readTime}</span>
                    </div>
                ))}
            </div>    
        </div>
    )
}