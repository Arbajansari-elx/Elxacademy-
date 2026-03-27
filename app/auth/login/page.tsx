'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, User, LogOut, ChevronRight, Star, Download, Clock, Users, TrendingUp, MessageCircle, BookOpen, Award, Zap } from 'lucide-react';

export default function ElxAcademy() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [notes, setNotes] = useState([
    { id: 1, title: 'C Programming Complete Guide', subject: 'C', creator: 'Arbaj', price: 25, rating: 4.8, downloads: 234, image: '📝', semester: '1st' },
    { id: 2, title: 'Arrays & Strings Mastery', subject: 'C', creator: 'Priya', price: 20, rating: 4.6, downloads: 156, image: '📊', semester: '1st' },
    { id: 3, title: 'Physics Mechanics - 50 Solved Problems', subject: 'Physics', creator: 'Raj', price: 30, rating: 4.9, downloads: 412, image: '⚛️', semester: '1st' },
    { id: 4, title: 'Digital Electronics - Gate Concepts', subject: 'Digital', creator: 'Neha', price: 35, rating: 4.7, downloads: 189, image: '🔌', semester: '3rd' },
    { id: 5, title: 'Calculus Made Simple', subject: 'Math', creator: 'Arjun', price: 22, rating: 4.5, downloads: 298, image: '∑', semester: '1st' },
    { id: 6, title: 'Chemistry Organic - Complete Notes', subject: 'Chemistry', creator: 'Aisha', price: 28, rating: 4.8, downloads: 367, image: '⚗️', semester: '2nd' },
  ]);

  const [courses, setCourses] = useState([
    { id: 1, title: 'C Programming Mastery', creator: 'Er. Arbaj', price: 499, rating: 4.9, students: 1240, lessons: 45, duration: '12 hours', image: '💻', featured: true },
    { id: 2, title: 'Physics Complete Course', creator: 'Dr. Raj', price: 599, rating: 4.8, students: 856, lessons: 60, duration: '18 hours', image: '🚀', featured: true },
    { id: 3, title: 'Digital Electronics Basics', creator: 'Neha Singh', price: 399, rating: 4.7, students: 634, lessons: 35, duration: '10 hours', image: '🔧', featured: false },
  ]);

  // Landing Page Hero Section
  const LandingHero = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/30 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
              ElxAcademy
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setCurrentPage('marketplace')} className="text-gray-300 hover:text-yellow-400 transition">Notes</button>
            <button onClick={() => setCurrentPage('courses')} className="text-gray-300 hover:text-yellow-400 transition">Courses</button>
            <button onClick={() => setCurrentPage('doubts')} className="text-gray-300 hover:text-yellow-400 transition">Doubts</button>
            <a href="#pricing" className="text-gray-300 hover:text-yellow-400 transition">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setIsLoggedIn(!isLoggedIn)} className="hidden md:flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-yellow-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition">
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="px-6 py-20 md:py-32 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Learn from <span className="bg-gradient-to-r from-purple-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent">Real Toppers</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Premium notes from verified students + Expert courses + AI doubt solver. Everything you need to ace your exams.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <button onClick={() => setCurrentPage('marketplace')} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-yellow-500 rounded-lg font-bold text-white text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105">
              Explore Notes
            </button>
            <button onClick={() => setCurrentPage('courses')} className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-lg font-bold text-lg hover:bg-yellow-400/10 transition">
              Browse Courses
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span><strong className="text-white">500+</strong> Students</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📚</span>
              <span><strong className="text-white">150+</strong> Notes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span><strong className="text-white">5+</strong> Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span><strong className="text-white">4.8/5</strong> Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400 animate-bounce">
        <ChevronRight className="rotate-90" size={32} />
      </div>
    </div>
  );

  // Marketplace View
  const MarketplaceView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-purple-950">
      {/* Header */}
      <div className="sticky top-0 z-20 backdrop-blur-lg bg-black/50 border-b border-purple-500/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-white">Notes Marketplace</h2>
          <div className="flex items-center gap-2 flex-1 max-w-md">
            <Search size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <button className="relative p-2 text-yellow-400 hover:text-white transition">
            <ShoppingCart size={24} />
            {cart.length > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cart.length}</span>}
          </button>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto mt-4 flex gap-2 overflow-x-auto pb-2">
          {['All', 'C', 'Math', 'Physics', 'Chemistry', 'Digital'].map(filter => (
            <button key={filter} className="px-4 py-1 bg-purple-600/30 hover:bg-yellow-500/30 text-white rounded-full border border-purple-500/30 whitespace-nowrap">
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Notes Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase())).map(note => (
            <div key={note.id} className="group bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6 hover:border-yellow-400/50 transition hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer">
              <div className="text-6xl mb-4">{note.image}</div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-yellow-400 uppercase tracking-widest font-semibold">{note.subject} • {note.semester}</p>
                  <h3 className="text-lg font-bold text-white mt-1 group-hover:text-yellow-400 transition">{note.title}</h3>
                </div>
                <p className="text-sm text-gray-400">by {note.creator}</p>
                <div className="flex items-center justify-between pt-3 border-t border-purple-500/20">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400" />
                    <span className="text-sm text-white font-semibold">{note.rating}</span>
                    <span className="text-xs text-gray-500">({note.downloads})</span>
                  </div>
                  <button
                    onClick={() => setCart([...cart, note])}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-yellow-500 text-white text-sm font-bold rounded-lg hover:shadow-lg transition"
                  >
                    ₹{note.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Courses View
  const CoursesView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-purple-950 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Expert Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="group bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-xl overflow-hidden hover:border-yellow-400/50 transition hover:shadow-2xl hover:shadow-purple-500/20">
              {/* Course header */}
              <div className="p-8 bg-gradient-to-br from-purple-600 to-blue-600 text-6xl flex items-center justify-center h-48">
                {course.image}
              </div>

              {/* Course content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition">{course.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">by {course.creator}</p>
                </div>

                <div className="space-y-2 text-sm text-gray-300 border-t border-purple-500/20 pt-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-yellow-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-yellow-400" />
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-yellow-400" />
                    <span>{course.students.toLocaleString()} Students</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-white">{course.rating}</span>
                  </div>
                  <button
                    onClick={() => setCart([...cart, course])}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-yellow-500 text-white font-bold rounded-lg hover:shadow-lg transition"
                  >
                    ₹{course.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Dashboard View
  const DashboardView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-purple-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome section */}
        <div className="bg-gradient-to-r from-purple-600/40 to-yellow-600/40 border border-yellow-400/30 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome back, Alexa! 👋</h2>
          <p className="text-gray-300">Continue your learning journey with personalized recommendations</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: BookOpen, label: 'Courses Enrolled', value: '3', color: 'from-blue-600 to-blue-400' },
            { icon: Download, label: 'Notes Downloaded', value: '24', color: 'from-purple-600 to-purple-400' },
            { icon: MessageCircle, label: 'Doubts Solved', value: '8', color: 'from-yellow-600 to-yellow-400' },
            { icon: TrendingUp, label: 'Learning Streak', value: '7 days', color: 'from-green-600 to-green-400' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-xl p-6 hover:border-yellow-400/50 transition">
                <div className={`inline-block p-3 bg-gradient-to-r ${stat.color} rounded-lg mb-4`}>
                  <Icon size={24} className="text-white" />
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Ongoing courses */}
        <h3 className="text-2xl font-bold text-white mb-6">Continue Learning</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.slice(0, 2).map(course => (
            <div key={course.id} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-xl p-6 hover:border-yellow-400/50 transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white">{course.title}</h4>
                  <p className="text-sm text-gray-400">by {course.creator}</p>
                </div>
                <span className="text-4xl">{course.image}</span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-gray-900/50 rounded-full h-2 overflow-hidden mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-yellow-500 h-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-sm text-gray-400 mb-4">65% complete</p>
              <button className="w-full px-4 py-2 bg-yellow-500/20 border border-yellow-400/50 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400/30 transition">
                Continue Lesson
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Doubts Forum View
  const DoubtsView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-purple-950 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-white">Doubt Forum</h2>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-yellow-500 text-white font-bold rounded-lg hover:shadow-lg transition">
            Post Doubt
          </button>
        </div>

        {/* Sample doubts */}
        <div className="space-y-4">
          {[
            { title: 'What is Pointer in C?', subject: 'C', answers: 5, views: 234, time: '2h ago' },
            { title: 'How to solve Newton\'s Laws problems?', subject: 'Physics', answers: 3, views: 156, time: '5h ago' },
            { title: 'Digital Logic Gates - Truth Table', subject: 'Digital', answers: 8, views: 412, time: '1d ago' },
          ].map((doubt, i) => (
            <div key={i} className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-lg p-6 hover:border-yellow-400/50 hover:bg-purple-900/40 transition cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white hover:text-yellow-400 transition">{doubt.title}</h3>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xs text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">{doubt.subject}</span>
                    <span className="text-xs text-gray-500">{doubt.time}</span>
                  </div>
                </div>
                <div className="text-right text-sm text-gray-400">
                  <p><strong className="text-yellow-400">{doubt.answers}</strong> answers</p>
                  <p>{doubt.views} views</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Pricing View
  const PricingView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-purple-950 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">Choose the plan that fits your learning style</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Free',
              price: '₹0',
              features: ['Browse notes (preview only)', '5 course enrollments', 'Limited doubt answers', 'Community access'],
              color: 'from-gray-600 to-gray-500',
              cta: 'Get Started'
            },
            {
              name: 'Premium',
              price: '₹199',
              period: '/month',
              features: ['Unlimited downloads', 'All courses', 'Unlimited AI uses', 'Priority doubt support', 'Monthly reports'],
              color: 'from-purple-600 to-blue-500',
              cta: 'Subscribe',
              popular: true
            },
            { name: 'Expert',
              price: '₹499',
              period: '/month',
              features: ['Everything in Premium', '1:1 mentorship (1hr/month)', 'Personalized study plan', 'Direct expert access', 'Certificate program'],
              color: 'from-yellow-600 to-yellow-500',
              cta: 'Subscribe',
            }
          ].map((plan, i) => (
            <div key={i} className={`relative border-2 rounded-xl p-8 transition transform hover:scale-105 ${
              plan.popular 
                ? `border-yellow-400 bg-gradient-to-br from-purple-900/50 to-blue-900/50 shadow-2xl shadow-purple-500/30` 
                : 'border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-blue-900/30'
            }`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-yellow-500 text-white text-xs font-bold rounded-full">MOST POPULAR</div>}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-gray-400">{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300">
                    <span className="text-yellow-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 font-bold rounded-lg transition ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-600 to-yellow-500 text-white hover:shadow-lg'
                  : 'border border-purple-500/30 text-white hover:bg-purple-900/30'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Main render logic
  const renderPage = () => {
    if (!isLoggedIn && currentPage !== 'landing') {
      setCurrentPage('landing');
      return <LandingHero />;
    }

    switch (currentPage) {
      case 'landing':
        return <LandingHero />;
      case 'marketplace':
        return isLoggedIn ? <MarketplaceView /> : <LandingHero />;
      case 'courses':
        return isLoggedIn ? <CoursesView /> : <LandingHero />;
      case 'dashboard':
        return isLoggedIn ? <DashboardView /> : <LandingHero />;
      case 'doubts':
        return isLoggedIn ? <DoubtsView /> : <LandingHero />;
      case 'pricing':
        return <PricingView />;
      default:
        return <LandingHero />;
    }
  };

  useEffect(() => {
    // Animate blobs
    const style = document.createElement('style');
    style.textContent = `
      @keyframes blob {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
      }
      
      .animate-blob {
        animation: blob 7s infinite;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      
      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Render current page */}
      {renderPage()}

      {/* Footer - only on landing */}
      {currentPage === 'landing' && (
        <footer className="bg-black/50 border-t border-purple-500/20 px-6 py-12 mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-yellow-400 mb-4">ElxAcademy</h4>
              <p className="text-sm text-gray-400">Learning from real toppers</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-300 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Notes</li>
                <li>Courses</li>
                <li>Doubts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-300 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-300 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 ElxAcademy. Built with 💜 by Er. Arbaj Ansari</p>
          </div>
        </footer>
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 md:hidden flex flex-col items-center justify-center gap-8 text-center">
          <button onClick={() => { setCurrentPage('marketplace'); setMobileMenuOpen(false); }} className="text-2xl font-bold">Notes</button>
          <button onClick={() => { setCurrentPage('courses'); setMobileMenuOpen(false); }} className="text-2xl font-bold">Courses</button>
          <button onClick={() => { setCurrentPage('doubts'); setMobileMenuOpen(false); }} className="text-2xl font-bold">Doubts</button>
          <button onClick={() => { setCurrentPage('pricing'); setMobileMenuOpen(false); }} className="text-2xl font-bold">Pricing</button>
        </div>
      )}
    </div>
  );
}

              
