import Link from 'next/link'
import { usePostStore } from '../../../../store/postStore'

export default async function Post({ params }: { params: { id: string } }) {
  const post = usePostStore.getState().posts.find(post => post.id === params.id)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gray-100">
      {post ? (
        <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Post Details
          </h2>
          <p className="text-sm text-gray-600 mb-1">ID: {post.id}</p>
          <p className="text-lg text-gray-800 mb-4">{post.title}</p>
          <Link
            href={'/'}
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Voltar
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            Not Found
          </h1>
          <Link
            href={'/'}
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Voltar
          </Link>
        </div>
      )}
    </main>
  )
}
