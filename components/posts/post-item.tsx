import { Posts } from '@/.contentlayer/generated'
import PostPreview from './post-preview'
import { Heading } from '../styledcomps/heading'

export default function PostItem({ posts }: any) {
  return (
    <section>
      <Heading size="xl" variant="sectiontitle">
        Blog Posts
      </Heading> 
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post: Posts) => (
          <div className=" mb-5" key={post.slug}>
          <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt} _id={''} _raw={{
                sourceFilePath: '',
                sourceFileName: '',
                sourceFileDir: '',
                contentType: 'data',
                flattenedPath: ''
              }} type={'Posts'} body={{
                raw: '',
                code: ''
              }}          />
          </div>
        ))}
      </div>
    </section>
  )
}
