import Image from "next/image"
import Link from "next/link"
import { Heart, Copy } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface CommunityCardProps {
  href: string
  title: string
  description: string
  image: string
  author: string
  likes: number
  duplicates: number
}

export function CommunityCard({
  href,
  title,
  description,
  image,
  author,
  likes,
  duplicates,
}: CommunityCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative aspect-[2/1]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <p className="text-sm text-gray-500">{author}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <Copy className="h-4 w-4" />
            <span>{duplicates}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

