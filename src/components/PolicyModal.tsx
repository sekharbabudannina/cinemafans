import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Shield, FileText, CheckCircle2, Mail, Info, Phone } from 'lucide-react';

export type PolicyType = 'privacy' | 'editorial' | 'terms' | 'copyright' | 'about' | 'contact';

interface PolicyModalProps {
  type: PolicyType | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-3 sm:p-6 lg:p-10 flex justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0B0E19] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#080B14] border-b border-slate-800 p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#FFC857]" />
            <h2 className="text-base sm:text-lg font-bold text-white font-mono uppercase">
              {type === 'privacy' && (language === 'te' ? 'గోప్యతా విధానం (Privacy Policy)' : 'Privacy Policy')}
              {type === 'editorial' && (language === 'te' ? 'ఎడిటోరియల్ విధానం (Editorial Policy)' : 'Editorial & Verification Policy')}
              {type === 'terms' && (language === 'te' ? 'నిబంధనలు (Terms of Use)' : 'Terms of Use')}
              {type === 'copyright' && (language === 'te' ? 'కాపీరైట్ & అట్రిబ్యూషన్ (Copyright Policy)' : 'Copyright & Content Attribution')}
              {type === 'about' && (language === 'te' ? 'సినిమా ఫ్యాన్స్ గురించి (About Us)' : 'About Cinema Fans')}
              {type === 'contact' && (language === 'te' ? 'మమ్మల్ని సంప్రదించండి (Contact Us)' : 'Contact Us')}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm font-te leading-relaxed">
          
          {type === 'privacy' && (
            <>
              <p>
                {language === 'te'
                  ? 'సినిమా ఫ్యాన్స్ (Cinema Fans) వెబ్‌సైట్ వినియోగదారుల గోప్యతను గౌరవిస్తుంది. మా ప్లాట్‌ఫారమ్‌లో మీరు సందర్శించినప్పుడు మీ వ్యక్తిగత సమాచారం ఏదీ విక్రయించబడదు.'
                  : 'Cinema Fans ("we", "our") respects your privacy. This policy outlines how we handle user data across our cinema knowledge and educational platform.'}
              </p>
              <h4 className="text-sm font-bold text-white font-mono uppercase">1. Cookies & Local Storage</h4>
              <p>
                {language === 'te'
                  ? 'మేము మీ భాషా ఎంపిక (తెలుగు లేదా ఇంగ్లీష్) ను మీ బ్రౌజర్ లోకల్ స్టోరేజ్‌లో మాత్రమే భద్రపరుస్తాము.'
                  : 'We strictly store your language preference (Telugu / English) and accessibility preferences locally within your browser localStorage.'}
              </p>
              <h4 className="text-sm font-bold text-white font-mono uppercase">2. Third-Party Advertising</h4>
              <p>
                {language === 'te'
                  ? 'భవిష్యత్తులో గూగుల్ యాడ్‌సెన్స్ వంటి సర్టిఫైడ్ ప్రకటన నెట్‌వర్క్‌ల ద్వారా సంబంధిత మరియు నాణ్యమైన ప్రకటనలు ప్రదర్శించబడవచ్చు.'
                  : 'We prepare our site for Google AdSense compliance. Third-party vendors may use cookies to serve ads based on prior visits to our website.'}
              </p>
            </>
          )}

          {type === 'editorial' && (
            <>
              <p>
                {language === 'te'
                  ? 'సినిమా ఫ్యాన్స్ కేవలం సినిమా సమీక్షల వెబ్‌సైట్ కాదు. ఇది సినిమా చరిత్ర, డిజిటల్ ప్రొజెక్షన్ (DCP/KDM), డాల్బీ అట్మోస్ ఆడియో మరియు థియేటర్ ఇంజనీరింగ్‌పై నిష్పక్షపాతమైన జ్ఞాన వేదిక.'
                  : 'Cinema Fans is dedicated to technical accuracy, rigorous research, and cultural appreciation. We maintain a strict boundary between cinema technology documentation and commercial film PR.'}
              </p>
              <h4 className="text-sm font-bold text-white font-mono uppercase">Fact-Checking & Engineering Compliance</h4>
              <p>
                {language === 'te'
                  ? 'అన్ని సాంకేతిక వ్యాసాలు DCI (Digital Cinema Initiatives) మరియు SMPTE (Society of Motion Picture and Television Engineers) ప్రమాణాల ప్రకారం ధృవీకరించబడతాయి.'
                  : 'Every technical article on projection, DCP mastering, server security, and spatial acoustics is referenced directly against official SMPTE and DCI specifications.'}
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                {language === 'te'
                  ? 'సినిమా ఫ్యాన్స్ వెబ్‌సైట్‌ను ఉపయోగించడం ద్వారా మీరు ఈ క్రింది నియమ నిబంధనలకు అంగీకరిస్తున్నారు. ఈ సైట్ విద్యా మరియు సమాచార ప్రయోజనాల కొరకు మాత్రమే ఉద్దేశించబడింది.'
                  : 'By accessing and reading Cinema Fans, you agree to comply with standard copyright and fair use educational guidelines.'}
              </p>
            </>
          )}

          {type === 'copyright' && (
            <>
              <p>
                {language === 'te'
                  ? 'సినిమా పోస్టర్లు, హీరోల చిత్రాలు, మరియు పరికరాల ట్రేడ్‌మార్క్‌లు వాటి సంబంధిత నిర్మాణ సంస్థలు, నటీనటులు మరియు సాంకేతిక కంపెనీల స్వంతం. సినిమా ఫ్యాన్స్ వీటిని కేవలం విద్యా మరియు విశ్లేషణాత్మక ‘ఫెయిర్ యూజ్’ (Fair Use) కింద మాత్రమే చర్చిస్తుంది.'
                  : 'All film titles, actor names, brand trademarks (such as Dolby Atmos, Barco, Christie, IMAX, DCI) are property of their respective owners. Content on Cinema Fans is created exclusively for education, historical archiving, and technical study under fair use doctrine.'}
              </p>
            </>
          )}

          {type === 'about' && (
            <>
              <p className="text-base text-amber-300 font-bold">
                “Beyond the Screen. Inside the Cinema.”
              </p>
              <p>
                {language === 'te'
                  ? 'సినిమా ఫ్యాన్స్ అనేది ప్రపంచంలోనే మొట్టమొదటి సంపూర్ణ ద్విభాషా (తెలుగు + ఇంగ్లీష్) సినిమా జ్ఞాన వేదిక. సినిమా మూకీ రోజుల నుండి ఆధునిక 4K లేజర్ మరియు 128-ఆబ్జెక్ట్ డాల్బీ అట్మోస్ వరకు పూర్తి ప్రపంచాన్ని ఒకే వేదికపైకి తీసుకురావడం మా లక్ష్యం.'
                  : 'Cinema Fans is an authoritative bilingual destination designed for cinephiles, projectionists, sound engineers, and film lovers. We bridge the world between cinematic artistry and behind-the-screen engineering.'}
              </p>
            </>
          )}

          {type === 'contact' && (
            <>
              <p>
                {language === 'te'
                  ? 'సినిమా సాంకేతిక వివరాలు, ఆర్టికల్స్ లేదా థియేటర్ టెక్నాలజీపై సూచనలు, సవరణల కోసం మా ఎడిటోరియల్ డెస్క్‌ను సంప్రదించండి.'
                  : 'Have technical insights, historical cinema artifacts to contribute, or corrections? Reach out to our editorial team directly.'}
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-600/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFC857] text-slate-950 flex items-center justify-center font-bold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">
                      {language === 'te' ? 'ప్రత్యక్ష ఫోన్ సంప్రదింపు:' : 'Direct Phone & Support:'}
                    </span>
                    <a
                      href="tel:9398808876"
                      className="text-lg font-mono font-bold text-[#FFC857] hover:underline tracking-wider"
                    >
                      9398808876
                    </a>
                  </div>
                </div>

                <a
                  href="tel:9398808876"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#FFC857] text-slate-950 hover:bg-amber-400 transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{language === 'te' ? 'కాల్ చేయండి' : 'Call Now'}</span>
                </a>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-[#FFC857]" />
                  <span>Email:</span>
                  <a
                    href="mailto:sekharbabudannina@gmail.com"
                    className="text-[#FFC857] hover:underline"
                  >
                    sekharbabudannina@gmail.com
                  </a>
                </div>
                <div className="text-slate-400">
                  Hyderabad / International Cinema Technology Research Desk
                </div>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
};
