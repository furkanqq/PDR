import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/mockData";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Hero Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-section)" }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Blog</h1>
            <p className="body-large">
              Öğrenciler ve aileler için eğitim, kariyer ve kişisel gelişim
              konularında faydalı makaleler ve rehberler.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="product-card mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div
                    className="flex items-center gap-4 mb-4 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "var(--accent-wash)",
                        color: "var(--accent-text)",
                      }}
                    >
                      ÖNE ÇIKAN
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                  </div>
                  <h2 className="heading-2 mb-4">{blogPosts[0].title}</h2>
                  <p
                    className="body-medium mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div
                      className="flex items-center gap-4 text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        <span>{blogPosts[0].category}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${blogPosts[0].id}`}
                      className="btn-primary"
                    >
                      Devamını Oku
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg"
                    alt={blogPosts[0].title}
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section
        className="py-10"
        style={{ backgroundColor: "var(--bg-section)" }}
      >
        <div className="container">
          <h2 className="heading-2 mb-12 text-center">Tüm Makaleler</h2>
          <div className="ai-grid">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="product-card h-full flex flex-col"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
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
                  <h3 className="heading-3 mb-3">{post.title}</h3>
                  <p
                    className="body-medium mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded"
                        style={{
                          backgroundColor: "var(--bg-section)",
                          color: "var(--text-muted)",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="border-t pt-4"
                  style={{ borderColor: "var(--border-light)" }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="flex items-center gap-4 text-sm"
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
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="btn-secondary text-sm px-4 py-2"
                    >
                      Oku
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
