import SectionTitle from './SectionTitle';
import Button from './Button';
import { Calendar, Sparkles, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Grow & Glow',
    subtitle: 'סדנת פייס יוגה בגישת הבריאות הטבעית',
    description: 'קורס של 4 מפגשים שמשלב פייס יוגה עם הבנה של מערכת העצבים. לומדות איך להחליק קמטים, לשנות מרקם עור, ולהרגיש שינוי אמיתי - בפנים, בגוף ובתחושה הפנימית.',
    features: [
      '4 מפגשים בימי שישי בשעה 10:00',
      'שעה וחצי למפגש',
      'סרטונים קצרים לתרגול יומיומי',
      'קבוצת וואטסאפ תומכת',
      'כל המפגשים מוקלטים'
    ],
    dates: '7, 14, 21, 28 למרץ',
    cta: 'לפרטים נוספים',
    href: '#workshop',
    featured: true
  },
  {
    icon: MessageCircle,
    title: 'ליווי אישי',
    subtitle: 'ליווי מותאם אישית',
    description: 'ליווי אישי ומעמיק להתחברות לגוף, בריאות טבעית ומערכת עצבים. יחד נבנה תהליך שמותאם בדיוק לך ולצרכים שלך.',
    features: [
      'הקשבה מעמיקה ואישית',
      'כלים מעשיים ליישום',
      'תמיכה לאורך הדרך',
      'גמישות בתהליך'
    ],
    cta: 'לוואטסאפ',
    href: 'https://wa.me/972501234567',
    featured: false
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-sage-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="השירותים שלי"
          subtitle="דרכים שונות ללוות אותך במסע לבריאות ולחיבור פנימי"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
                service.featured ? 'ring-2 ring-sage-400' : ''
              }`}
            >
              {service.featured && (
                <div className="bg-sage-600 text-white text-center py-2 text-sm font-medium">
                  נפתח להרשמה
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sage-800">{service.title}</h3>
                    <p className="text-sage-600">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {service.dates && (
                  <div className="flex items-center gap-2 text-blush-600 mb-4">
                    <Calendar size={18} />
                    <span className="font-medium">{service.dates}</span>
                  </div>
                )}

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-sage-400 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={service.href}
                  variant={service.featured ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {service.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
