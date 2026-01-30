import SectionTitle from './SectionTitle';
import { Brain, Heart, Leaf, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'שיקום מוח',
    description: 'מעל עשור בעבודה עם שיקום מוח, פוגשת מקרוב את הגמישות המופלאה של המוח האנושי'
  },
  {
    icon: Leaf,
    title: 'בריאות טבעית',
    description: 'העמקה בעולמות הבריאות הטבעית, יישום עקרונות וריפויים טבעיים בבית'
  },
  {
    icon: Heart,
    title: 'מערכת עצבים',
    description: 'לימודי עומק ב-Polyvagal Institute, הבנה של מערכת העצבים והקשר לבריאות'
  },
  {
    icon: Sparkles,
    title: 'פייס יוגה',
    description: 'כלי עמוק לאהבה עצמית, הקשבה וטיפוח - לא רק עבודה אסתטית'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="קצת עליי"
          subtitle="המסע האישי והמקצועי שהביא אותי לכאן"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              אני קלינאית תקשורת שיקומית (MA), מעל עשור בעבודה עם שיקום מוח.
              שנים אני פוגשת מקרוב את הגמישות המופלאה של המוח האנושי -
              איך גם אחרי פגיעה, בלבול או אובדן, אפשר להשתנות, להיבנות מחדש, לחזור לחיים.
            </p>

            <p>
              אבל לפני כמעט עשור, החיים ביקשו ממני להעמיק עוד יותר.
              אבא שלי נפטר, ושאלה אחת התחילה להדהד בי:
              <span className="font-semibold text-sage-700"> איך חיים את החיים - באמת?</span>
            </p>

            <p>
              לא איך מתפקדים, אלא איך חיים מתוך חיות, חיבור ומשמעות - בבריאות אמיתית?
            </p>

            <p>
              החיפוש הזה הוביל אותי למסע אישי ומקצועי עמוק.
              בחרתי לגדל את הבנות שלי בבית, העמקתי בעולמות הבריאות הטבעית,
              למדתי לעומק את מערכת העצבים ב-Polyvagal Institute,
              והעמקתי בלימודי פייס יוגה.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-warm-200"
              >
                <item.icon className="w-10 h-10 text-sage-500 mb-3" />
                <h3 className="font-semibold text-sage-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission statement */}
        <div className="bg-gradient-to-r from-sage-600 to-sage-700 text-white p-8 md:p-12 rounded-3xl text-center">
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            היום אני מלווה נשים שמרגישות שהן רוצות לחיות אחרת -
            פחות מתוך הישרדות, ריצוי ומאמץ,
            ויותר מתוך <span className="font-bold">חיבור לגוף ולרצון האמיתי</span> שלהן -
            שהוא כח החיים!
          </p>
        </div>
      </div>
    </section>
  );
}
