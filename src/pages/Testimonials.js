import React from "react";
import { testimonials } from "../data/mockData";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? "fill-current" : ""}`}
        style={{ color: "var(--accent-primary)" }}
      />
    ));
  };

  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Hero Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-section)" }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Müşteri Yorumları</h1>
            <p className="body-large">
              Danışmanlık hizmeti aldığım öğrenci ve ailelerden gelen gerçek
              geri bildirimler. Sizin de başarı hikayenizin parçası olmaktan
              mutluluk duyarım.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="product-card">
              <div
                className="heading-1 mb-2"
                style={{ color: "var(--accent-text)" }}
              >
                500+
              </div>
              <p className="body-medium">Başarılı Öğrenci</p>
            </div>
            <div className="product-card">
              <div
                className="heading-1 mb-2"
                style={{ color: "var(--accent-text)" }}
              >
                5.0
              </div>
              <div className="flex justify-center mb-2">{renderStars(5)}</div>
              <p className="body-medium">Ortalama Puan</p>
            </div>
            <div className="product-card">
              <div
                className="heading-1 mb-2"
                style={{ color: "var(--accent-text)" }}
              >
                95%
              </div>
              <p className="body-medium">Müşteri Memnuniyeti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-20">
        <div className="container">
          <div className="ai-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="product-card relative">
                <Quote
                  className="absolute top-4 right-4 w-8 h-8 opacity-20"
                  style={{ color: "var(--accent-primary)" }}
                />

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {testimonial.date}
                    </span>
                  </div>
                </div>

                <blockquote
                  className="body-medium italic mb-6"
                  style={{ color: "var(--text-body)" }}
                >
                  "{testimonial.content}"
                </blockquote>

                <div
                  className="border-t pt-4"
                  style={{ borderColor: "var(--border-light)" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white"
                      style={{ backgroundColor: "var(--accent-primary)" }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4
                        className="font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="heading-2 mb-6">Siz de Başarı Hikayenizi Yazın</h2>
            <p
              className="body-large mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Psikolojik danışmanlık ve rehberlik hizmeti alarak eğitim
              hayatınızda doğru adımları atın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Ücretsiz Görüşme
              </a>
              <a href="/services" className="btn-secondary">
                Hizmetlerim
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
