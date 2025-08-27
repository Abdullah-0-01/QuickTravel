import { BlogHero } from "@/components/blog-hero"
import { BlogPosts } from "@/components/blog-posts"
import { BlogCategories } from "@/components/blog-categories"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <BlogHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogPosts />
          </div>
          <div className="lg:col-span-1">
            <BlogCategories />
          </div>
        </div>
      </div>
    </div>
  )
}
