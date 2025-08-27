import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Tag } from "lucide-react"

export function BlogCategories() {
  const categories = [
    { name: "Religious Travel", count: 15 },
    { name: "Adventure", count: 23 },
    { name: "Budget Travel", count: 18 },
    { name: "Travel Planning", count: 31 },
    { name: "Travel Tips", count: 27 },
    { name: "Photography", count: 12 },
    { name: "Food & Culture", count: 19 },
    { name: "Safety & Health", count: 14 },
  ]

  const popularTags = [
    "Northern Pakistan",
    "Dubai",
    "Turkey",
    "Umrah",
    "Budget Travel",
    "Photography",
    "Travel Insurance",
    "Visa Guide",
    "Adventure",
    "Cultural Tours",
    "Family Travel",
    "Solo Travel",
  ]

  const recentPosts = [
    {
      title: "Essential Packing List for Umrah",
      date: "Dec 15, 2024",
    },
    {
      title: "Best Hotels in Hunza Valley",
      date: "Dec 12, 2024",
    },
    {
      title: "Dubai Metro Guide for Tourists",
      date: "Dec 10, 2024",
    },
    {
      title: "Turkish Cuisine Must-Try Dishes",
      date: "Dec 8, 2024",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input placeholder="Search blog posts..." />
            <Button size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <span className="text-sm hover:text-primary cursor-pointer transition-colors">{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Tag className="h-4 w-4" />
            Popular Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentPosts.map((post, index) => (
              <div key={index} className="pb-3 border-b border-border last:border-0">
                <h4 className="text-sm font-medium hover:text-primary cursor-pointer transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
