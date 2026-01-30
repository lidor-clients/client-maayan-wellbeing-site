import Button from './Button';
import { Sparkles, Heart, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-warm-100 to-warm-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 text-sage-600 mb-4">
              <Sparkles size={20} />
              <span className="font-medium">בריאות בפשטות</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-800 leading-tight mb-6">
              היי, שמחה שדרכנו מצטלבות
            </h1>

            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              אני <span className="font-semibold text-sage-700">מעין</span>, מלווה נשים לחזור להקשבה פנימית,
              ומתוכה לשפר את הבריאות, איכות החיים והקשרים בחייהן.
            </p>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              קלינאית תקשורת שיקומית (MA), מעל עשור בעבודה עם שיקום מוח,
              מומחית לבריאות טבעית ופייס יוגה.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button href="#services" size="lg">
                לשירותים שלי
              </Button>
              <Button href="#gifts" variant="outline" size="lg">
                מתנה חינמית
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Heart size={16} className="text-blush-500" />
                <span>ליווי אישי ומקצועי</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf size={16} className="text-sage-500" />
                <span>גישה טבעית והוליסטית</span>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-sage-200 to-blush-200 flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-warm-100 flex items-center justify-center text-sage-600">
                  <div className="text-center p-8">
                    <Sparkles size={48} className="mx-auto mb-4 text-sage-400" />
                    <p className="text-lg font-medium">תמונה של מעין</p>
                    <p className="text-sm text-gray-500">יתווסף בקרוב</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blush-300 rounded-full opacity-60" />
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-sage-300 rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
