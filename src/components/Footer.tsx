import { Heart, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-warm-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-4">מעין גבסו רג'ואן</h3>
            <p className="text-warm-200 leading-relaxed">
              מלווה נשים לחזור להקשבה פנימית, ומתוכה לשפר את הבריאות,
              איכות החיים והקשרים בחייהן.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2 text-warm-200">
              <li><a href="#about" className="hover:text-white transition-colors">אודות</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">שירותים</a></li>
              <li><a href="#gifts" className="hover:text-white transition-colors">מתנות חינמיות</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">צור קשר</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">צרי קשר</h4>
            <div className="space-y-3 text-warm-200">
              <a href="mailto:maayan@example.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={18} />
                <span>maayan@example.com</span>
              </a>
              <a href="https://wa.me/972501234567" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={18} />
                <span>וואטסאפ</span>
              </a>
              <a href="https://instagram.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Instagram size={18} />
                <span>אינסטגרם</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-sage-700 mt-8 pt-8 text-center text-warm-300">
          <p className="flex items-center justify-center gap-1">
            נבנה באהבה <Heart size={16} className="text-blush-400" /> כל הזכויות שמורות © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
