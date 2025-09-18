import React from "react";
import { Link } from "react-router-dom";
import { contactInfo } from "../data/mockData";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  Heart,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { path: "/", label: "Ana Sayfa" },
    { path: "/about", label: "Hakkımda" },
    { path: "/services", label: "Hizmetler" },
    { path: "/blog", label: "Blog" },
    { path: "/testimonials", label: "Müşteri Yorumları" },
    { path: "/contact", label: "İletişim" },
  ];

  const services = [
    "Üniversite Tercihi Danışmanlığı",
    "Bireysel Psikolojik Danışmanlık",
    "Kariyer Rehberliği",
    "Aile Danışmanlığı",
    "Sınav Kaygısı Desteği",
    "Online Danışmanlık",
  ];

  return (
    <footer className="relative">
      {/* CTA Section */}
      <div className="py-20" style={{ backgroundColor: "var(--bg-section)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: "var(--accent-wash)",
                color: "var(--accent-text)",
              }}
            >
              <Heart className="w-4 h-4" />
              Uzman Rehberlik
            </div>
            <h2 className="heading-2 mb-6">
              Başarı Yolculuğunuza Başlamaya Hazır mısınız?
            </h2>
            <p
              className="body-large mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Eğitim hayatınızda doğru kararlar alabilmek ve hedeflerinize
              ulaşmak için profesyonel destek alın. İlk görüşme ücretsizdir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                <ArrowRight className="mr-2 w-5 h-5" />
                Ücretsiz Görüşme Başlat
              </Link>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(
                  /\s/g,
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp'dan Yaz
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div
        style={{ backgroundColor: "var(--text-primary)" }}
        className="text-white py-20"
      >
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Selim İlhan</h3>
                  <p className="text-sm opacity-80">Psikolojik Danışman</p>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                PDR uzmanı olarak öğrenciler ve ailelere güvenilir rehberlik
                hizmeti sunuyorum. Eğitim yolculuğunuzda yanınızdayım.
              </p>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(
                    /\s/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Hızlı Erişim
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm opacity-80 hover:opacity-100 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Hizmetlerim
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-sm opacity-80 block leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                İletişim Bilgileri
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone
                    className="w-5 h-5 mt-0.5"
                    style={{ color: "var(--accent-primary)" }}
                  />
                  <div>
                    <p className="text-sm font-medium text-white">Telefon</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail
                    className="w-5 h-5 mt-0.5"
                    style={{ color: "var(--accent-primary)" }}
                  />
                  <div>
                    <p className="text-sm font-medium text-white">E-posta</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 mt-0.5"
                    style={{ color: "var(--accent-primary)" }}
                  />
                  <div>
                    <p className="text-sm font-medium text-white">Konum</p>
                    <span className="text-sm opacity-80">
                      {contactInfo.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div
                className="mt-6 p-4 rounded-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <h5 className="text-sm font-semibold text-white mb-3">
                  Çalışma Saatleri
                </h5>
                <div className="space-y-1 text-xs opacity-80">
                  <div className="flex justify-between">
                    <span>Pazartesi - Cuma:</span>
                    <span>{contactInfo.workingHours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cumartesi:</span>
                    <span>{contactInfo.workingHours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pazar:</span>
                    <span>{contactInfo.workingHours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm opacity-60 text-center md:text-left">
                © {new Date().getFullYear()} Selim İlhan - Psikolojik Danışman.
                Tüm hakları saklıdır.
                <span className="inline-flex items-center gap-1 ml-2">
                  Sevgiyle hazırlandı{" "}
                  <Heart
                    className="w-3 h-3"
                    style={{ color: "var(--accent-primary)" }}
                  />
                </span>
              </p>
              <div className="flex gap-6">
                <Link
                  to="/privacy"
                  className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                >
                  Gizlilik Politikası
                </Link>
                <Link
                  to="/terms"
                  className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                >
                  Kullanım Şartları
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
