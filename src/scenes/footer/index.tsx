import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = () => {
  return (
    <footer className="bg-primary-500 text-primary py-16">
      <div className="max-w-6xl mx-auto px-4 md:flex justify-between">
        {/* Logo and Description */}
        <div className="mt-8 md:mt-0 md:basis-1/2">
          <img src={Logo} alt="EVOGYM Logo" className="w-32 h-auto" />
          <p className="my-4">
            Welcome to <strong>EVOGYM</strong>, your go-to fitness destination! Whether you're looking to tone up, build strength, or embrace a healthier lifestyle, we’ve got everything you need to succeed. Join our community and experience a gym like no other—where fitness meets fun and passion meets results!
          </p>
          <p>&copy; 2025 EVOGYM. All Rights Reserved. Your fitness journey starts here!</p>
        </div>

        {/* Contact Information */}
        <div className="mt-8 md:mt-0 md:basis-1/4">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <ul className="space-y-3 mt-4 text-sm">
            <li>Address: 123 Fitness Street, Gym City, GA 45678</li>
            <li>Get in Touch: Need assistance? We're here to help!</li>
            <li>Phone: (+256) 762 147 546</li>
            <li>Email: <a href="mailto:info@evogym.com" className="text-primary-300 hover:underline">info@evogym.com</a></li>
          </ul>
        </div>
      </div>


      

      {/* Social Media Links (optional) */}
      <div className="mt-8 text-center">
        <h5 className="text-lg font-semibold">Follow Us</h5>
        <div className="mt-4 space-x-4">
          <a href="https://www.facebook.com/evogym" target="_blank" className="text-white hover:text-primary-300">
            Facebook
          </a>
          <a href="https://www.instagram.com/evogym" target="_blank" className="text-white hover:text-primary-300">
            Instagram
          </a>
          <a href="https://www.twitter.com/evogym" target="_blank" className="text-white hover:text-primary-300">
            Twitter
          </a>
          <a href="https://chat.whatsapp.com/KSq9BCex41NI2ZH3bU37tE" target="_blank" className="text-white hover:text-primary-300">
            whatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
