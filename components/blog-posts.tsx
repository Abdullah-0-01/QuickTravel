import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Eye } from "lucide-react"

export function BlogPosts() {
  const posts = [
    {
      title: "10 Essential Tips for First-Time Umrah Pilgrims",
      excerpt: "Complete guide covering everything from preparation to the spiritual journey itself...",
      image: "/kaaba-makkah-background.jpg",
      category: "Religious Travel",
      author: "Ahmad Hassan",
      date: "December 15, 2024",
      readTime: "8 min read",
      views: 1234,
    },
    {
      title: "Hidden Gems of Northern Pakistan You Must Visit",
      excerpt: "Discover breathtaking locations beyond the popular tourist spots in Pakistan's north...",
      image: "/northern-pakistan-tour.jpg",
      category: "Adventure",
      author: "Fatima Khan",
      date: "December 12, 2024",
      readTime: "12 min read",
      views: 2156,
    },
    {
      title: "Dubai on a Budget: How to Experience Luxury for Less",
      excerpt: "Smart tips and tricks to enjoy Dubai's attractions without breaking the bank...",
      image: "/dubai-skyline.png",
      category: "Budget Travel",
      author: "Ali Raza",
      date: "December 10, 2024",
      readTime: "6 min read",
      views: 1876,
    },
    {
      title: "Best Time to Visit Turkey: A Season-by-Season Guide",
      excerpt: "When to visit Turkey for the best weather, fewer crowds, and amazing experiences...",
      image: "/turkey-cappadocia.png",
      category: "Travel Planning",
      author: "Sarah Ahmed",
      date: "December 8, 2024",
      readTime: "10 min read",
      views: 1543,
    },
    {
      title: "Travel Insurance: Why It's Essential for Pakistani Travelers",
      excerpt: "Understanding the importance of travel insurance and how to choose the right coverage...",
      image: "/travel-insurance-documents-and-passport.png",
      category: "Travel Tips",
      author: "Dr. Hassan Ali",
      date: "December 5, 2024",
      readTime: "7 min read",
      views: 987,
    },
    {
      title: "Photography Tips for Capturing the Perfect Travel Memories",
      excerpt: "Professional techniques to take stunning photos during your travels...",
      image: "/camera-and-travel-photography-mountains.png",
      category: "Photography",
      author: "Zara Malik",
      date: "December 3, 2024",
      readTime: "9 min read",
      views: 1432,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Latest Articles</h2>
        <Button variant="outline">View All Posts</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </CardTitle>
              <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
            </CardHeader>

            <CardContent>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {post.views}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
