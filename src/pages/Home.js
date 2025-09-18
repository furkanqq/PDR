import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Award } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: (
        <Heart className="w-8 h-8" style={{ color: "var(--accent-text)" }} />
      ),
      title: "Güvenilir Rehberlik",
      description:
        "Öğrenci ve ailelere güvenilir psikolojik danışmanlık ve rehberlik hizmeti sunuyorum.",
    },
    {
      icon: (
        <Users className="w-8 h-8" style={{ color: "var(--accent-text)" }} />
      ),
      title: "Bireysel Yaklaşım",
      description:
        "Her bireyin benzersiz ihtiyaçlarına özel çözümler ve kişiselleştirilmiş destek.",
    },
    {
      icon: (
        <Award className="w-8 h-8" style={{ color: "var(--accent-text)" }} />
      ),
      title: "Uzman Deneyim",
      description:
        "PDR mezunu olarak üniversite tercihi danışmanlığı ve eğitim rehberliği alanında deneyim.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="hero-content relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "var(--accent-wash)",
                    color: "var(--accent-text)",
                  }}
                >
                  <Heart className="w-4 h-4" />
                  Uzman Psikolojik Danışman
                </div>
                <h1 className="heading-1">
                  <span className="block">Merhaba, Ben</span>
                  <span
                    className="block"
                    style={{ color: "var(--accent-text)" }}
                  >
                    Selim İlhan
                  </span>
                </h1>
                <p
                  className="text-xl font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  Psikolojik Danışmanlık ve Rehberlik (PDR) Uzmanı
                </p>
              </div>

              <p
                className="body-large leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Öğrenciler ve aileleri için güvenilir rehberlik sunuyorum.
                Üniversite tercihi, sınav kaygısı, kariyer planlama ve kişisel
                gelişim yolculuğunuzda yanınızdayım.
              </p>

              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div
                    className="heading-2"
                    style={{ color: "var(--accent-text)" }}
                  >
                    500+
                  </div>
                  <p className="body-small">Başarılı Öğrenci</p>
                </div>
                <div className="text-center">
                  <div
                    className="heading-2"
                    style={{ color: "var(--accent-text)" }}
                  >
                    5+
                  </div>
                  <p className="body-small">Yıl Deneyim</p>
                </div>
                <div className="text-center">
                  <div
                    className="heading-2"
                    style={{ color: "var(--accent-text)" }}
                  >
                    %95
                  </div>
                  <p className="body-small">Memnuniyet</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <ArrowRight className="mr-2 w-5 h-5" />
                  Ücretsiz Görüşme
                </Link>
                <Link
                  to="/services"
                  className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  Hizmetlerimi İncele
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                <img
                  src="https://images.pexels.com/photos/7579190/pexels-photo-7579190.jpeg"
                  alt="Psikolojik danışmanlık seansı"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating achievement cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg animate-pulse">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--accent-primary)" }}
                  >
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      PDR Uzmanı
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Sertifikalı
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg animate-pulse">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--accent-strong)" }}
                  >
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      500+ Öğrenci
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Başarı Oranı
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div
          className="absolute top-20 left-20 w-72 h-72 rounded-full opacity-10"
          style={{ backgroundColor: "var(--accent-primary)" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: "var(--accent-strong)" }}
        ></div>
      </section>

      {/* Features Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-section)" }}
      >
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Neden Beni Seçmelisiniz?</h2>
            <p
              className="body-large text-center"
              style={{ color: "var(--text-secondary)" }}
            >
              Uzman yaklaşım ve güvenilir rehberlik ile yanınızda
            </p>
          </div>
          <div className="ai-grid">
            {features.map((feature, index) => (
              <div key={index} className="product-card text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="heading-3 mb-3">{feature.title}</h3>
                <p className="body-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">Destek Almaya Hazır mısınız?</h2>
            <p
              className="body-large mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Eğitim hayatınızda doğru kararlar alabilmek ve zorluklarla başa
              çıkabilmek için uzman desteği alın. İlk görüşme için hemen
              iletişime geçin.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8">
              Hemen İletişime Geç
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
