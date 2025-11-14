import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Star, Shield, Beaker, Award, ChevronLeft, ChevronRight, Check, Send } from 'lucide-react';

// Main App Component
export default function TrailArmourWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Product data
  const products = [
    {
      id: 1,
      name: "Trail Armour PROTECT - Tube",
      size: "5.5ml",
      price: 12,
      image: "https://images.unsplash.com/photo-1556228852-80a5ae145493?w=400",
      description: "Pocket-sized protection for training rides and everyday use",
      features: ["8+ hour protection", "Film-forming technology", "Pocket stable"]
    },
    {
      id: 2,
      name: "Trail Armour PROTECT - Tin",
      size: "15ml",
      price: 32,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400",
      description: "Premium tin for serious riders and extended events",
      features: ["3x larger size", "Multi-day events", "Professional grade"]
    }
  ];

  // Elite testimonials
  const testimonials = [
    {
      name: "Shelley Chapman",
      title: "National Distance Champion | 8x Tom Quilty Gold Buckle",
      quote: "After years of struggling with windburn on long rides, Trail Armour is a game-changer. The protection actually lasts through my 80km+ training rides.",
      rating: 5,
      achievement: "Ranked #3 in Australia FEI Endurance"
    },
    {
      name: "Sarah Parker",
      title: "NSW State Champion 2023 | International Competitor",
      quote: "I've tested countless lip products. Trail Armour is the only one that stays on during intense competition. The film-forming technology actually works.",
      rating: 5,
      achievement: "Best Conditioned Award Winner"
    },
    {
      name: "Elite FEI Rider",
      title: "UAE International Competition",
      quote: "Competing in UAE desert conditions requires serious protection. Trail Armour handles extreme heat, wind, and hours in the saddle without reapplication.",
      rating: 5,
      achievement: "FEI World Championship Competitor"
    },
    {
      name: "Gaucho Derby Riders",
      title: "500km Ultra-Endurance | Patagonia",
      quote: "We tested Trail Armour on the world's toughest horse race - 10 days, 500km through Patagonia. It performed flawlessly in extreme conditions.",
      rating: 5,
      achievement: "All 3 Australian Derby Competitors"
    }
  ];

  // Rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  // Navigation
  const Navigation = () => (
    <nav className="bg-gradient-to-r from-slate-800 to-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Shield className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-xl font-bold">Trail Armour</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => setCurrentPage('home')} className="hover:text-blue-400 transition">Home</button>
            <button onClick={() => setCurrentPage('products')} className="hover:text-blue-400 transition">Products</button>
            <button onClick={() => setCurrentPage('science')} className="hover:text-blue-400 transition">The Science</button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-blue-400 transition">Our Story</button>
            <button onClick={() => setCurrentPage('testimonials')} className="hover:text-blue-400 transition">Testimonials</button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-blue-400 transition">Contact</button>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative cursor-pointer">
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block py-2 hover:text-blue-400">Home</button>
            <button onClick={() => { setCurrentPage('products'); setMobileMenuOpen(false); }} className="block py-2 hover:text-blue-400">Products</button>
            <button onClick={() => { setCurrentPage('science'); setMobileMenuOpen(false); }} className="block py-2 hover:text-blue-400">The Science</button>
            <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="block py-2 hover:text-blue-400">Our Story</button>
            <button onClick={() => { setCurrentPage('testimonials'); setMobileMenuOpen(false); }} className="block py-2 hover:text-blue-400">Testimonials</button>
            <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="block py-2 hover:text-blue-400">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );

  // Home Page
  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Professional Protection for Endurance Riders
              </h1>
              <p className="text-xl mb-8 text-blue-200">
                Engineered lip protection that actually lasts 8+ hours in the saddle. 
                Trusted by Australia's elite FEI endurance riders.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setCurrentPage('products')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
                >
                  Shop Now
                </button>
                <button 
                  onClick={() => setCurrentPage('science')}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600" 
                alt="Endurance riding" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4/5</div>
              <div className="text-sm text-gray-600">Australia's Top FEI Riders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">38</div>
              <div className="text-sm text-gray-600">Elite Beta Testers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-sm text-gray-600">Hours Protection</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">27</div>
              <div className="text-sm text-gray-600">Premium Ingredients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Validation */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Australia's Elite
            </h2>
            <p className="text-xl text-gray-600">
              When top athletes choose Trail Armour, performance speaks for itself
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Award className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">National Champions</h3>
              <p className="text-gray-600">
                Including Shelley Chapman - National Distance Champion with 8x Tom Quilty Gold Buckles
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Award className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Gaucho Derby</h3>
              <p className="text-gray-600">
                All 3 Australian riders competing in the world's toughest 500km horse race through Patagonia
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Award className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">FEI International</h3>
              <p className="text-gray-600">
                Top FEI riders competing in UAE and international championships worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map(product => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="mb-4 space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-blue-600">${product.price}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button 
              onClick={() => setCurrentPage('products')}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Products →
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">What Elite Riders Say</h2>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="flex items-start mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-xl mb-6 italic">"{testimonials[currentTestimonial].quote}"</p>
            <div className="mb-2">
              <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
              <p className="text-blue-300">{testimonials[currentTestimonial].title}</p>
              <p className="text-sm text-blue-200 mt-1">{testimonials[currentTestimonial].achievement}</p>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-2 w-2 rounded-full transition ${
                    idx === currentTestimonial ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Professional Protection?</h2>
          <p className="text-xl mb-8">Join Australia's elite riders who trust Trail Armour</p>
          <button 
            onClick={() => setCurrentPage('products')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition transform hover:scale-105"
          >
            Shop Trail Armour
          </button>
        </div>
      </section>
    </div>
  );

  // Products Page
  const ProductsPage = () => (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Trail Armour PROTECT</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Professional-grade lip protection engineered for endurance athletes. Choose the size that fits your riding style.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                    <p className="text-gray-600 text-lg">{product.size}</p>
                  </div>
                  <span className="text-4xl font-bold text-blue-600">${product.price}</span>
                </div>
                
                <p className="text-gray-700 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-bold mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105"
                >
                  Add to Cart - ${product.price}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Details */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Makes Trail Armour Different?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Film-Forming Technology</h3>
              <p className="text-gray-600">
                Professional-grade silicone creates a protective barrier that actually stays on for 8+ hours, even through sweat and wind.
              </p>
            </div>
            
            <div>
              <Beaker className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">27 Premium Ingredients</h3>
              <p className="text-gray-600">
                Sophisticated 3-phase formulation with rice bran wax, moringa oil, sea buckthorn, CoQ10, and therapeutic botanicals.
              </p>
            </div>
            
            <div>
              <Award className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Elite-Tested</h3>
              <p className="text-gray-600">
                Beta tested by 38 riders including 4 of Australia's Top 5 FEI endurance riders and all 3 Gaucho Derby competitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Science Page
  const SciencePage = () => (
    <div className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">The Science Behind Trail Armour</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Why our formulation outperforms traditional lip balms
        </p>

        {/* Film-Forming Technology */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Film-Forming Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Traditional lip balms sit on the surface and quickly wear off with movement, sweat, and wind. Trail Armour uses professional-grade cyclomethicone and crosspolymer silicones that create a flexible, breathable film that bonds to your lips.
              </p>
              <p className="text-gray-700 mb-4">
                This technology is used in professional cosmetics but rarely in lip protection. The result? Protection that actually lasts through hours in the saddle.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Performance Comparison:</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Traditional balms:</span>
                  <span className="font-bold text-red-600">1-2 hours</span>
                </li>
                <li className="flex justify-between">
                  <span>Trail Armour:</span>
                  <span className="font-bold text-green-600">8+ hours</span>
                </li>
                <li className="flex justify-between border-t pt-3">
                  <span>Reapplication needed:</span>
                  <span className="font-bold text-blue-600">4x less often</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3-Phase Formulation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Sophisticated 3-Phase Formulation</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold mb-2">Phase 1: Wax Base (29.8%)</h3>
              <p className="text-gray-700">
                Rice bran wax, carnauba wax, and beeswax create a stable, pocket-friendly base that won't melt in body heat. Temperature-tested to maintain structure even on hot summer rides.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-bold mb-2">Phase 2: Therapeutic Oils & Butters (48.3%)</h3>
              <p className="text-gray-700 mb-2">
                Premium botanical oils chosen for specific benefits:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li><strong>Sea buckthorn CO2:</strong> Natural UV protection and omega-7 fatty acids</li>
                <li><strong>Moringa oil:</strong> Anti-inflammatory with complete omega profile</li>
                <li><strong>Meadowfoam seed oil:</strong> Superior moisture retention</li>
                <li><strong>Tamanu & raspberry seed:</strong> Healing and regeneration</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold mb-2">Phase 3: Film Formers & Actives (21.9%)</h3>
              <p className="text-gray-700">
                Professional-grade silicones create the protective film while CoQ10 (ubiquinone) and vitamin E provide antioxidant protection against wind damage.
              </p>
            </div>
          </div>
        </div>

        {/* Premium Ingredients Highlight */}
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">27 Premium Ingredients</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3 text-blue-300">Structural Base:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Rice bran wax</li>
                <li>• Carnauba wax</li>
                <li>• Beeswax</li>
                <li>• Lanolin</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-blue-300">Therapeutic Oils:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Sea buckthorn CO2 extract</li>
                <li>• Moringa oleifera oil</li>
                <li>• Meadowfoam seed oil</li>
                <li>• Raspberry seed oil</li>
                <li>• Tamanu oil</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-blue-300">Butters & Emollients:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Cocoa butter</li>
                <li>• Shea butter</li>
                <li>• Castor oil</li>
                <li>• Jojoba oil</li>
                <li>• Squalane</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-blue-300">Active Protection:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Film-forming silicones</li>
                <li>• CoQ10 (Ubiquinone)</li>
                <li>• Vitamin E (Tocopherol)</li>
                <li>• Rosemary CO2 extract</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pocket Stability */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Temperature Tested for Pocket Stability</h2>
          <p className="text-gray-700 mb-4">
            Through extensive testing and formula refinement, Trail Armour maintains its structure even when carried in pockets during rides. The optimized wax ratio (29.8%) ensures the product won't melt or become too soft at body temperature.
          </p>
          <p className="text-gray-700">
            This was validated through real-world beta testing with riders in various climates, from Queensland heat to alpine conditions.
          </p>
        </div>
      </div>
    </div>
  );

  // About Page
  const AboutPage = () => (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Story</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Born from Real Experience</h2>
          <p className="text-gray-700 mb-4">
            Trail Armour was created by a Queensland endurance rider who experienced firsthand the limitations of existing lip protection products. After countless rides battling windburn and constantly reapplying traditional balms, she knew there had to be a better solution.
          </p>
          <p className="text-gray-700 mb-4">
            What started as a personal quest to solve windburn became a mission to create professional-grade protection for serious riders. Through extensive research into cosmetic science, ingredient selection, and formulation chemistry, Trail Armour PROTECT was developed.
          </p>
          <p className="text-gray-700">
            This isn't a "farm balm" made with basic ingredients. Trail Armour is an engineered solution using professional-grade film-forming technology and 27 carefully selected ingredients, all formulated in Brisbane, Australia.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Elite Beta Testing</h2>
          <p className="text-gray-700 mb-6">
            Before launching Trail Armour, we conducted one of the most comprehensive beta testing programs in the equestrian industry. 38 riders put our formulation to the ultimate test:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Elite FEI Riders</h3>
              <p className="text-gray-700 text-sm">
                4 of Australia's Top 5 FEI endurance riders tested Trail Armour in competitive conditions, including international FEI competitions in UAE.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">National Champions</h3>
              <p className="text-gray-700 text-sm">
                Shelley Chapman (National Distance Champion, 8x Tom Quilty Gold Buckle) and Sarah Parker (NSW State Champion) validated performance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Extreme Conditions</h3>
              <p className="text-gray-700 text-sm">
                All 3 Australian riders competing in the Gaucho Derby - 500km through Patagonia over 10 days - proved Trail Armour in the world's toughest conditions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Real Riders</h3>
              <p className="text-gray-700 text-sm">
                31 additional serious competitors provided feedback from training rides to multi-day events across Australia.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Made in Brisbane, Australia</h2>
          <p className="text-gray-700 mb-4">
            Every batch of Trail Armour is carefully formulated and produced in Brisbane, Queensland. We maintain rigorous quality control standards and use only premium ingredients sourced from reputable Australian suppliers.
          </p>
          <p className="text-gray-700 mb-4">
            Our production process involves precise temperature control, continuous stirring protocols, and extensive quality checks to ensure every tube and tin meets our professional standards.
          </p>
          <p className="text-gray-700">
            We're not just selling a product - we're providing a solution that we personally use and trust on our own rides.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to experience the difference?</h2>
          <button 
            onClick={() => setCurrentPage('products')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Shop Trail Armour
          </button>
        </div>
      </div>
    </div>
  );

  // Testimonials Page
  const TestimonialsPage = () => (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">What Riders Are Saying</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Real feedback from elite endurance riders and serious competitors
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-lg text-gray-900">{testimonial.name}</p>
                <p className="text-blue-600">{testimonial.title}</p>
                <p className="text-sm text-gray-600 mt-1">{testimonial.achievement}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Beta Testing Results</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-5xl font-bold mb-2">38</div>
              <div className="text-blue-200">Elite Riders Tested</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10/10</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Contact Page
  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      // In production, this would send to your backend
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 3000);
    };

    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Questions about Trail Armour? Wholesale inquiries? We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <Check className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
                  <p className="text-green-700">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Inquiry Type</label>
                    <select 
                      className="w-full border rounded-lg px-4 py-2"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                    >
                      <option value="general">General Question</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full border rounded-lg px-4 py-2"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full border rounded-lg px-4 py-2"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject</label>
                    <input 
                      type="text" 
                      required
                      className="w-full border rounded-lg px-4 py-2"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea 
                      required
                      rows="5"
                      className="w-full border rounded-lg px-4 py-2"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:trailarmour@gmail.com" className="text-blue-600 hover:text-blue-700">
                      trailarmour@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Brisbane, Queensland, Australia</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 5pm AEST</p>
                    <p className="text-gray-600">Response time: Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Wholesale Inquiries</h3>
                <p className="mb-4">
                  Interested in stocking Trail Armour at your tack shop, equestrian event, or retail location? We offer competitive wholesale pricing and support.
                </p>
                <p className="text-sm text-blue-200">
                  Select "Wholesale Inquiry" in the form and we'll send you our wholesale information package.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Footer
  const Footer = () => (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">Trail Armour</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional protection for endurance riders. Made in Brisbane, Australia.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => setCurrentPage('products')} className="hover:text-white">PROTECT Tube (5.5ml)</button></li>
              <li><button onClick={() => setCurrentPage('products')} className="hover:text-white">PROTECT Tin (15ml)</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white">Our Story</button></li>
              <li><button onClick={() => setCurrentPage('science')} className="hover:text-white">The Science</button></li>
              <li><button onClick={() => setCurrentPage('testimonials')} className="hover:text-white">Testimonials</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <p className="text-sm text-gray-400 mb-2">trailarmour@gmail.com</p>
            <p className="text-sm text-gray-400">Brisbane, QLD, Australia</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Trail Armour. All rights reserved. | Made in Australia</p>
        </div>
      </div>
    </footer>
  );

  // Main render
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'products' && <ProductsPage />}
      {currentPage === 'science' && <SciencePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'testimonials' && <TestimonialsPage />}
      {currentPage === 'contact' && <ContactPage />}
      
      <Footer />
    </div>
  );
}
