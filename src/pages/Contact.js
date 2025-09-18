import React, { useState } from "react";
import { contactInfo } from "../data/mockData";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { Input } from "@/component/ui/input";
import { Textarea } from "@/component/ui/textarea";
import { Button } from "@/component/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log("Form submitted:", formData);
    toast({
      title: "Mesajınız Gönderildi!",
      description: "En kısa sürede size geri dönüş yapacağım.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      value: contactInfo.phone,
      action: `tel:${contactInfo.phone}`,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta",
      value: contactInfo.email,
      action: `mailto:${contactInfo.email}`,
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: contactInfo.whatsapp,
      action: `https://wa.me/${contactInfo.whatsapp.replace(/\s/g, "")}`,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Konum",
      value: contactInfo.address,
      action: null,
    },
  ];

  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Hero Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-section)" }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">İletişim</h1>
            <p className="body-large">
              Danışmanlık hizmeti almak veya sorularınızı sormak için benimle
              iletişime geçin. Size en uygun zaman ve yöntemle görüşelim.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-5 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="product-card text-center">
                <div
                  className="flex justify-center mb-4"
                  style={{ color: "var(--accent-text)" }}
                >
                  {method.icon}
                </div>
                <h3 className="heading-3 mb-2">{method.title}</h3>
                {method.action ? (
                  <a
                    href={method.action}
                    className="body-medium hover:underline"
                    style={{ color: "var(--accent-text)" }}
                    target={method.title === "WhatsApp" ? "_blank" : "_self"}
                    rel={
                      method.title === "WhatsApp" ? "noopener noreferrer" : ""
                    }
                  >
                    {method.value}
                  </a>
                ) : (
                  <p
                    className="body-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {method.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="product-card">
              <h2 className="heading-2 mb-6">Mesaj Gönder</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Ad Soyad *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Telefon
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Telefon numaranız"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    E-posta *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="E-posta adresiniz"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Konu
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Mesajınızın konusu"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Mesaj *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <Button type="submit" className="btn-primary w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Mesaj Gönder
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <div className="product-card mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock
                    className="w-6 h-6"
                    style={{ color: "var(--accent-text)" }}
                  />
                  <h3 className="heading-3">Çalışma Saatleri</h3>
                </div>
                <div
                  className="space-y-2 body-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
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

              <div className="product-card">
                <h3 className="heading-3 mb-4">Randevu Alma</h3>
                <p
                  className="body-medium mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Randevu almak için WhatsApp üzerinden mesaj gönderebilir veya
                  telefon edebilirsiniz. İlk görüşme ücretsizdir ve yaklaşık 20
                  dakika sürer.
                </p>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp.replace(
                      /\s/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp'dan Randevu Al
                  </a>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="btn-secondary w-full"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Telefon Et
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
