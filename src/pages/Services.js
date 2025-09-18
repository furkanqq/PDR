import React from "react";
import { services } from "../data/mockData";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Hero Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-section)" }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Hizmetlerim</h1>
            <p className="body-large">
              Öğrenciler ve aileleri için kapsamlı psikolojik danışmanlık ve
              rehberlik hizmetleri. Her bireyin ihtiyacına özel çözümler
              sunuyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="ai-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className="product-card h-full flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="heading-3 mb-4">{service.title}</h3>
                  <p
                    className="body-medium mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: "var(--accent-primary)" }}
                        ></div>
                        <span className="body-small">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="border-t"
                  style={{ borderColor: "var(--border-light)" }}
                >
                  <div className="pt-4 flex justify-between items-center">
                    <div
                      className="flex items-center gap-4 text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        <span>{service.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="heading-2 mb-6">Hangi Hizmete İhtiyacınız Var?</h2>
            <p
              className="body-large mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Size en uygun hizmeti belirlemek ve detaylı bilgi almak için
              benimle iletişime geçin.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8">
              Ücretsiz Ön Görüşme
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
