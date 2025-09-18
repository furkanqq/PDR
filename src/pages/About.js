import React from "react";
import { Award, BookOpen, Users, Heart } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: (
        <Award className="w-6 h-6" style={{ color: "var(--accent-text)" }} />
      ),
      title: "PDR Mezunu",
      description:
        "Psikolojik Danışmanlık ve Rehberlik alanında lisans eğitimi",
    },
    {
      icon: (
        <Users className="w-6 h-6" style={{ color: "var(--accent-text)" }} />
      ),
      title: "500+ Öğrenci",
      description: "Başarılı üniversite yerleştirme danışmanlığı",
    },
    {
      icon: (
        <BookOpen className="w-6 h-6" style={{ color: "var(--accent-text)" }} />
      ),
      title: "5+ Yıl Deneyim",
      description: "Eğitim ve kariyer danışmanlığı alanında uzman deneyim",
    },
    {
      icon: (
        <Heart className="w-6 h-6" style={{ color: "var(--accent-text)" }} />
      ),
      title: "Güvenilir Yaklaşım",
      description: "Öğrenci ve aile odaklı etik danışmanlık hizmeti",
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
            <h1 className="heading-1 mb-6">Hakkımda</h1>
            <p className="body-large mb-8">
              Psikolojik Danışmanlık ve Rehberlik alanında uzmanlaşmış, öğrenci
              ve ailelerine güvenilir rehberlik hizmeti sunan bir eğitim
              danışmanıyım.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://images.pexels.com/photos/5428829/pexels-photo-5428829.jpeg"
                alt="Selim İlhan - Psikolojik Danışman"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="heading-2 mb-6">Eğitim ve Deneyim</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="heading-3 mb-2">Akademik Geçmiş</h3>
                  <p className="body-medium">
                    Psikolojik Danışmanlık ve Rehberlik (PDR) bölümünden mezun
                    oldum. Eğitimim süresince öğrenci psikolojisi, kariyer
                    danışmanlığı ve aile terapisi konularında uzmanlaştım.
                  </p>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Mesleki Deneyim</h3>
                  <p className="body-medium">
                    5 yılı aşkın süredir öğrencilere üniversite tercihi
                    danışmanlığı veriyorum. Bu sürede 500'den fazla öğrencinin
                    doğru üniversite ve bölüm seçimi yapmasına yardımcı oldum.
                    Aynı zamanda sınav kaygısı, motivasyon sorunları ve aile içi
                    iletişim konularında da danışmanlık hizmeti sunuyorum.
                  </p>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Yaklaşımım</h3>
                  <p className="body-medium">
                    Her bireyin benzersiz olduğuna inanıyorum. Bu nedenle her
                    danışanıma kişiselleştirilmiş yaklaşım sergiliyor, onların
                    ihtiyaçlarına özel çözümler geliştiriyorum. Güvenilirlik ve
                    etik değerler, hizmetimin temel taşlarını oluşturuyor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="ai-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="product-card text-center">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="heading-3 mb-3">{achievement.title}</h3>
                <p className="body-medium">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="max-w-4xl mx-auto text-center mt-20">
            <h2 className="heading-2 mb-6">Misyonum</h2>
            <p className="body-large">
              Gençlerin eğitim hayatlarında doğru kararlar alabilmeleri,
              potansiyellerini keşfedebilmeleri ve zorluklarla başa
              çıkabilmeleri için güvenilir bir rehber olmak. Her öğrencinin
              kendine uygun eğitim yolunu bulmasına ve bu yolda başarılı
              olmasına katkıda bulunmak temel hedefimdir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
