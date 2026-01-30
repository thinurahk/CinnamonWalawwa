"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { FloatingWhatsApp } from "react-floating-whatsapp";

// Base path for GitHub Pages deployment
const basePath = process.env.NODE_ENV === 'production' ? '/CinnamonWalawwa' : '';

export default function CinnamonWalawwa() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const inclusions = [
    {
      title: "img1",
      image: `${basePath}/newimg/img1.JPG`,
      link: "#inclusions",
    },
    {
      title: "img2",
      image: `${basePath}/newimg/img2.JPG`,
      link: "#dining",
    },
    {
      title: "img3",
      image: `${basePath}/newimg/img20.JPG`,
      link: "#kids",
    },
    {
      title: "img4",
      image: `${basePath}/newimg/img10.JPG`,
      link: "#wellness",
    },
  ];

  const whatweoffer = [
    {
      title: "Spice Garden tour",
      image: `${basePath}/newimg/img9.JPG`,
    },
    {
      title: "Cinnamon Experience",
      image: `${basePath}/newimg/img7.JPG`,
    },
    {
      title: "Traditional Cooking clases",
      image: `${basePath}/newimg/8.JPG`,
    },
  ];
  const navItems = [
    { label: "What we offer", id: "what-we-offer" },
    { label: "Be Inspired", id: "be-inspired" },
    { label: "Contact", id: "contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-light tracking-wider">
              <span className={scrolled ? "text-gray-900" : "text-white"}>
                <span className="block font-bold">Cinnamon Walawwa</span>
                <span className="block">Cooking Class</span>
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  // onClick={(e) => scrollToSection(e, item.id)}
                  className={`text-sm tracking-wide hover:opacity-70 transition-opacity ${
                    scrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  {item.label.toUpperCase()}
                </a>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X
                  className={scrolled ? "text-gray-900" : "text-white"}
                  size={24}
                />
              ) : (
                <Menu
                  className={scrolled ? "text-gray-900" : "text-white"}
                  size={24}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    // scrollToSection(e, item.id);
                  }}
                  className="block text-sm tracking-wide text-gray-900 hover:text-gray-600"
                >
                  {item.label.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Looping Video */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 pointer-events-none ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.8)" }}
          >
            <source src={`${basePath}/HeroVid.MOV`} type="video/quicktime" />
            <source src={`${basePath}/HeroVid.MOV`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6 drop-shadow-lg animate-fade-in">
              Cinnamon Walawwa
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide mb-2 drop-shadow-md">
              SOUTH COAST
            </p>
            <div className="w-24 h-px bg-white mx-auto my-8 shadow-lg"></div>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Discover the real taste of Sri Lanka! Tour a lush spice garden,
              sip cinnamon tea, and learn to cook traditional dishes with Sudath
              and Mali. It is a fun, hands-on experience where you can also shop
              for premium local spices.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="  text-5xl
                md:text-6xl
                font-normal
                tracking-[0.15em]
                uppercase font-bold
                text-center
                text-gray-900"
            >
              CINNAMON WALAWWA SRI LANKA
            </h2>
            <div className="w-24 h-px  mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Experience the ultimate Sri Lankan food journey right here on the
              South Coast. Start your day with a walk through our lush spice
              garden and a warm cup of homemade cinnamon tea. You will learn to
              cook authentic, flavorful curries using traditional methods and
              fresh, local ingredients in a fun, simple way. Before you leave,
              grab some premium spices to recreate these delicious island
              flavors back home!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusions.map((inclusion) => (
              <div
                key={inclusion.title}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={inclusion.image}
                    alt={inclusion.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="absolute inset-0 flex items-center justify-center text-white"></h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-offer" className="scroll-mt-24 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-light tracking-wider mb-6">
              WHAT WE OFFER
            </h2>
            <div className="w-24 h-px bg-gray-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              From garden to table, immerse yourself in our heritage. Explore
              the scents of our spice garden, uncover the craft of our cinnamon
              experience, and master authentic flavors in a traditional cooking
              class.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatweoffer.map((suite, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4 aspect-[4/3]">
                  <img
                    src={suite.image}
                    alt={suite.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-light tracking-wide text-center group-hover:text-gray-600 transition-colors">
                  {suite.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Experiences */}
      <section id="be-inspired" className="scroll-mt-24 py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-4xl font-light tracking-wider mb-6">
                BE INSPIRED
              </h2>
              <div className="w-24 h-px bg-gray-800 mb-8"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Experience the heart of Sri Lankan flavors at Cinnamon Walawwa
                in Dikwella, where hosts Sudath and Mali guide you through a
                peaceful village cooking lesson. You’ll learn to use fresh
                spices to create authentic vegetable, lentil, and meat curries,
                along with coconut sambol and rice. The true highlight of this
                culinary adventure is a hands-on lesson in preparing the iconic
                Sri Lankan kottu.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Perfect for beginners, this experience begins with a Spice
                Garden Walk where you’ll learn how Ceylon cinnamon and pepper
                are grown and processed. After discovering the benefits of local
                spices, you’ll cook using traditional methods and enjoy your
                meal topped off with a classic dessert of curd and treacle. You
                can even buy fresh spices to take home and use the provided
                recipes to recreate the magic in your own kitchen.{" "}
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Your experience features a full cooking class and meal, plus a
                visit to a cinnamon plantation to learn peeling techniques.
                You’ll receive premium Cinnamon Alba, enjoy fresh cinnamon tea,
                and can even arrange a convenient tuk-tuk pickup from the
                Dikwella area.
              </p>
              <button className="border border-gray-800 px-8 py-3 text-sm tracking-wider hover:bg-gray-800 hover:text-white transition-all">
                LEARN MORE
              </button>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src={`${basePath}/newimg/img17.JPG`}
                  alt="Tea Plantation"
                  className="w-full h-80 object-cover"
                />

                <img
                  src={`${basePath}/newimg/img11.JPG`}
                  alt="Galle Fort"
                  className="w-full h-80 object-cover"
                />
                <img
                  src={`${basePath}/newimg/img14.JPG`}
                  alt="Wildlife"
                  className="w-full h-80 object-cover md:col-span-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Family */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-light tracking-wider mb-6">
              MEET OUR FAMILY
            </h2>
            <div className="w-24 h-px bg-gray-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Our family is passionate about sharing the art of Sri Lankan
              island cooking, from mastering traditional spices to the hands-on
              fun of making kottu. We invite you into our peaceful village home
              to explore our cinnamon plantation, enjoy a meal together, and
              leave with the recipes and skills to cook like a local.
            </p>
          </div>
          <div className="mt-12">
            <img
              src={`${basePath}/newimg/img18.JPG`}
              alt="family"
              className="w-full h-[520px] object-cover object-center scale-90"
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="scroll-mt-24 py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-light tracking-wider mb-6">
                TRAVELLING TO LOCATION
              </h2>
              <div className="w-24 h-px bg-gray-800 mb-8"></div>

              <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                <p>20-minute drive from Hiriketiya Beach, </p>
                <p>
                  {" "}
                  10-minute drive from Talalla, 45-minute drive from Mirissa,
                </p>
                <p> </p>
                <p>
                  To make your guests feel right at home, we offer a
                  complimentary tuk-tuk pickup service from the Dikwella area.
                  We will collect you directly from your location and, once our
                  culinary adventure is finished, ensure you are safely returned
                  to your starting point.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin
                    className="text-gray-800 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <p className="text-gray-700">
                    Cinnamon Walawwa, Pathegama, Dickwella, Sri Lanka
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone
                    className="text-gray-800 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="text-gray-700">
                      Contact US : (+94)77 1020013{" "}
                    </p>
                    <p className="text-gray-700">
                      Contact US On WhatsApp: (+94)71 7012761{" "}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail
                    className="text-gray-800 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <p className="text-gray-700">
                    cinnamonwalawwacookingclass.gmail.com
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Cinnamon+Walawwa+Cooking+Class+Dikwella"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <button className="mt-8 border border-gray-800 px-8 py-3 text-sm tracking-wider hover:bg-gray-800 hover:text-white transition-all">
                  FIND YOUR WAY HERE
                </button>
              </a>
            </div>

            <div style={{ width: "100%", marginTop: "20px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.166067861533!2d80.63235898248819!3d5.971854424281847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae137052cd16d55%3A0x4be4ce1b839cd2d2!2sCinnamon%20Walawwa%20Cooking%20Class!5e0!3m2!1sen!2slk!4v1769722117787!5m2!1sen!2slk"
                style={{
                  width: "100%",
                  height: "300px",
                  border: 0,
                  borderRadius: "8px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp
        phoneNumber="+94717012761"
        accountName="Cinnamon Walawwa"
        avatar="https://img.icons8.com/?size=100&id=7819&format=png&color=000000"
        statusMessage="Typically replies within 30 mins"
        chatMessage="Hello! 👋 How can we help you today?"
        darkMode={false}
        allowClickAway={false}
        allowEsc={true}
        notification={true}
        notificationSound={true}
        style={{
          bottom: "20px",
          right: "20px",
        }}
      />
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light tracking-wider mb-6">
                Cinnamon Walawwa Cooking Clases
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cinnamon Walawwa Authentic Sri Lankan Cooking Class & Cinnamon
                Plantation Visit Dikwella, Sri Lanka | (+94) 771020013 |
                cinnamonwalawwacookingclass.gmail.com Follow us for a taste of
                the island life.
              </p>
            </div>

            <div>
              <h4 className="text-sm tracking-wider mb-4">ABOUT</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    BE INSPIRED
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm tracking-wider mb-4">OUR SERVISES</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Spice Garden Tour
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cinnamon Experience
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Traditional Cooking Clases
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm tracking-wider mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instergram{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tiktok
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    TripAdvisor
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© Copyright 2026, Cinnamon Walawwa</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
