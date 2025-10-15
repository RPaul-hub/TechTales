import Link from "next/link"

export default function BlogCard({id, title, user, date, content}: {id: number, title: string, user: string, date: string, content: string}) {
    return (
        <div key = {id} className="border p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-shadow duration-300">
            <Link href={`/blog/post/${id}`}>
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
            </Link>
            <p className="text-gray-600 text-sm mb-4">By {user} on {new Date(date).toLocaleDateString()}</p>
            <p className="text-gray-800">{content}</p>
        </div>
    )
}