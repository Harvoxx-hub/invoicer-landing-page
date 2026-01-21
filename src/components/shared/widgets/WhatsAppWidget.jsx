import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = '2348012345678';
  const message = encodeURIComponent("Hi, I'd like to know more about Invoicer");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 md:w-16 md:h-16
        bg-[#25D366] hover:bg-[#20BA5A]
        rounded-full shadow-lg hover:shadow-xl
        flex items-center justify-center
        transition-all duration-300
        group
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
      `}
      style={{
        animation: isVisible ? 'pulse 2s infinite' : 'none',
      }}
    >
      <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform duration-200" />

      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />

      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </a>
  );
};

export default WhatsAppWidget;
