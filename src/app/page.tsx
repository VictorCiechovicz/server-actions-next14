import { submitForm } from '../../actions/postActions'
import { usePostStore } from '../../store/postStore'

export default async function Home() {
  const posts = usePostStore.getState().posts

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gray-100">
      <div className="w-full max-w-xs">
        <form
          action={submitForm}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <input
              type="text"
              name="title"
              required
              placeholder="Title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
      {posts.map(post => (
        <div
          key={post.id}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <p className="text-sm text-gray-600">ID: {post.id}</p>
          <p className="text-lg text-gray-800">{post.title}</p>
        </div>
      ))}
    </main>
  )
}
