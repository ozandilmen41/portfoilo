import { posts } from "@/data/posts";
// DÜZELTME 1: Link bileşenini doğru kütüphaneden çağırdık
import Link from "next/link"; 
import { ArrowLeft } from "lucide-react"; // Geri ikonu için bunu kullanabiliriz

export default async function BlogPost({ params }: { params: { slug: string } }) {
  
  const { slug } = await params; 
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Yazı Bulunamadı
      </div>
    )
  }

  return (
    // justify-center'ı kaldırdım, yazı yukarıdan başlamalı (py-20 ile boşluk verdik)
    <main className="min-h-screen flex flex-col items-center py-20 px-6 bg-white">
      
      {/* DÜZELTME 2: href sadece "/" olmalı. Dosya yolu değil, URL yolu. */}
      <div className="w-full max-w-3xl mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Ana Sayfaya Dön
        </Link>
      </div>
      
      <article className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 pb-4">
          {post.title}
        </h1>
        
        <span className="text-gray-500 block pb-8 border-b border-gray-100">
          {post.date}
        </span>
        
        {/* whitespace-pre-wrap: Metindeki satır boşluklarını korur */}
        <div className="text-gray-700 text-lg leading-relaxed mt-8 whitespace-pre-wrap">
          {post.content}
        </div>
      </article>

    </main>
  );
}