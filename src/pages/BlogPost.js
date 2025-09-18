import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/mockData";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div style={{ paddingTop: "5rem" }} className="py-20">
        <div className="container text-center">
          <h1 className="heading-2 mb-4">Makale Bulunamadı</h1>
          <p className="body-medium mb-8">Aradığınız makale mevcut değil.</p>
          <Link to="/blog" className="btn-primary">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Blog'a Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Header */}
      <section
        className="py-12"
        style={{ backgroundColor: "var(--bg-section)" }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 mb-8 text-sm font-medium"
              style={{ color: "var(--accent-text)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Blog'a Dön
            </Link>

            <div className="flex items-center gap-2 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "var(--accent-wash)",
                  color: "var(--accent-text)",
                }}
              >
                {post.category}
              </span>
            </div>

            <h1 className="heading-1 mb-6">{post.title}</h1>

            <div className="flex items-center justify-between mb-8">
              <div
                className="flex items-center gap-6 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  <span>Yazar: {post.author}</span>
                </div>
              </div>
              <button className="btn-secondary text-sm px-4 py-2">
                <Share2 className="w-4 h-4 mr-2" />
                Paylaş
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div
                className="body-medium"
                style={{
                  lineHeight: "1.7",
                  color: "var(--text-body)",
                }}
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/\n/g, "<br />")
                    .replace(
                      /## (.*?)<br \/>/g,
                      '<h2 class="heading-3 mt-8 mb-4" style="color: var(--text-primary)">$1</h2>'
                    )
                    .replace(
                      /### (.*?)<br \/>/g,
                      '<h3 class="heading-3 mt-6 mb-3" style="color: var(--text-primary)">$1</h3>'
                    ),
                }}
              />
            </div>

            {/* Tags */}
            <div
              className="mt-12 pt-8"
              style={{ borderTop: "1px solid var(--border-light)" }}
            >
              <h3 className="heading-3 mb-4">Etiketler</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full"
                    style={{
                      backgroundColor: "var(--accent-wash)",
                      color: "var(--accent-text)",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="mt-12 p-8 rounded-lg text-center"
              style={{ backgroundColor: "var(--bg-section)" }}
            >
              <h3 className="heading-3 mb-4">
                Kişisel Destek Almak İster misiniz?
              </h3>
              <p
                className="body-medium mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Bu konuda daha detaylı bilgi almak veya kişisel danışmanlık
                hizmeti için benimle iletişime geçebilirsiniz.
              </p>
              <Link to="/contact" className="btn-primary">
                Randevu Al
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
