import SectionTitle from './SectionTitle';
import Button from './Button';
import { Calendar, Clock, Video, Users, Sparkles, Check, Heart } from 'lucide-react';

const syllabus = [
  {
    week: 1,
    date: '7 למרץ',
    title: 'הכרות עם הפנים ומערכת העצבים',
    topics: ['הבנת האנטומיה של הפנים', 'מערכת העצבים והקשר לפנים', 'תרגילי בסיס לוויסות']
  },
  {
    week: 2,
    date: '14 למרץ',
    title: 'זרימה וניקוז',
    topics: ['מערכת הלימפה בפנים', 'טכניקות ניקוז', 'שיפור זרימת הדם']
  },
  {
    week: 3,
    date: '21 למרץ',
    title: 'עבודה עם שרירי הפנים',
    topics: ['חיזוק שרירים', 'הרפיה של מתחים', 'תרגילים אזוריים']
  },
  {
    week: 4,
    date: '28 למרץ',
    title: 'אינטגרציה ותרגול יומיומי',
    topics: ['בניית שגרת תרגול', 'שילוב בחיי היומיום', 'סיכום והמשכיות']
  }
];

const benefits = [
  'החלקת קמטים באופן טבעי',
  'שינוי מרקם העור',
  'הקלה על כאבים ודלקות',
  'הרמת הפנים',
  'עור קורן וחיוני',
  'תחושת רגיעה ואיזון'
];

export default function Workshop() {
  return (
    <section id="workshop" className="py-20 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Grow & Glow"
          subtitle="סדנת פייס יוגה בגישת הבריאות הטבעית"
        />

        {/* Intro */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              מה הסיכוי שאפשר להחליק קמטים, לשנות את מרקם העור, להקל על כאבים ודלקות...
              רק עם שתי הידיים שלנו?
            </p>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              אין ספק ששינוי אמיתי מבפנים לוקח זמן, אבל זה מדהים לראות
              איך כשהגוף מקבל את התנאים המתאימים - הוא משגשג!
            </p>
            <p className="text-sage-700 font-medium text-lg">
              כשאת נותנת לגוף ולפנים את ההנעה שהם צריכים באהבה עצמית -
              את יכולה לייצר שינוי אמיתי.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-sage-600 text-white rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-7 h-7" />
              מה תקבלי מהקורס
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-sage-300 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blush-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-sage-800 mb-6 flex items-center gap-3">
              <Heart className="w-7 h-7 text-blush-600" />
              הגישה שלי
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              פייס יוגה - זה לא רצף של תרגילים כמו באימון.
              אם מערכת העצבים שלך דרוכה - הגוף מגיב.
              אם את מתרגלת בכוחניות - הגוף מגיב.
            </p>
            <p className="text-sage-700 font-medium">
              הידע והכלים שתקבלי בקורס הזה משלבים את גישת הפייס יוגה
              בראי מערכת העצבים - כך שתוכלי לייצר שינוי אמיתי ויציב.
            </p>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold text-sage-800 mb-8 text-center">מבנה הקורס</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {syllabus.map((week) => (
              <div key={week.week} className="bg-warm-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-blush-600 mb-3">
                  <Calendar size={18} />
                  <span className="font-medium">{week.date}</span>
                </div>
                <h4 className="font-bold text-sage-800 mb-3">שבוע {week.week}: {week.title}</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {week.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-sage-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Details & CTA */}
        <div className="bg-gradient-to-r from-sage-600 to-sage-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">פרטים טכניים</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-sage-300" />
                  <span>נפגשות פעם בשבוע, ימי שישי</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-sage-300" />
                  <span>בשעה 10:00, שעה וחצי למפגש</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-6 h-6 text-sage-300" />
                  <span>כל המפגשים מוקלטים</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-sage-300" />
                  <span>קבוצת וואטסאפ לתמיכה</span>
                </div>
              </div>

              <p className="mt-6 text-warm-200">
                + סרטונים קצרים (עד 7 דקות) לתרגול יומיומי
              </p>
            </div>

            <div className="text-center">
              <p className="text-xl mb-6 text-warm-200">
                מוכנה לייצר שינוי אמיתי בפנים, בגוף ובתחושה הפנימית?
              </p>
              <Button
                href="https://wa.me/972501234567?text=היי%20מעין%2C%20אשמח%20לשמוע%20עוד%20על%20סדנת%20Grow%20%26%20Glow"
                size="lg"
                className="bg-white !text-sage-700 hover:bg-warm-100"
              >
                אני רוצה להצטרף!
              </Button>
              <p className="mt-4 text-warm-300 text-sm">
                לחצי לשיחה בוואטסאפ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
