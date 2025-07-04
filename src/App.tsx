import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, Search, Bell, Users, BookOpen, Award, Calendar, ExternalLink, ArrowRight, Play, ChevronDown, MapPin, Phone, Mail, Globe, Star, TrendingUp, Zap, Target } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStudentWork, setCurrentStudentWork] = useState(0);
  const [activeTab, setActiveTab] = useState('notifications');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState('base');
  const [language, setLanguage] = useState('en');

  const slides = [
    {
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
      title: 'Computational Design Workshop',
      subtitle: '14th to 18th July 2025 at SPA Vijayawada',
      link: 'https://spav.ac.in/workshop%20Computational%20Design%20and%20Digital%20Fabrication%20in%20Architecture.html'
    },
    {
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
      title: 'CPTED AI Conference',
      subtitle: 'National Conference on CPTED & AI in Urban Areas',
      link: '/2025/slider/CPTED%20AI%20in%20Urban%20Areas%20-%20National%20Conference%202025.pdf'
    },
    {
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
      title: 'Vidyalaxmi Education Scheme',
      subtitle: 'PM-Vidyalaxmi Education Loan Scheme',
      link: '/2025/notices/Official%20flyer%20for%20website.pdf'
    },
    {
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
      title: 'Dr. D.C. Pavate Memorial Fellowships',
      subtitle: 'Applications Open Till August 20, 2025',
      link: '/2025/notices/Karnataka%20University,%20Dharwad.pdf'
    }
  ];

  const studentWorks = [
    {
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Sustainable Housing Project',
      student: 'Priya Sharma - B.Arch 2024',
      description: 'Innovative eco-friendly housing design with solar integration'
    },
    {
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Urban Planning Initiative',
      student: 'Rahul Kumar - M.Plan 2024',
      description: 'Smart city planning with green infrastructure'
    },
    {
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Heritage Conservation',
      student: 'Anita Reddy - B.Arch 2023',
      description: 'Restoration of traditional architecture with modern techniques'
    },
    {
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Community Center Design',
      student: 'Vikram Singh - B.Arch 2024',
      description: 'Multi-functional community space for urban neighborhoods'
    }
  ];

  const notifications = [
    {
      title: 'Hands-on Workshop & International Symposium on Computational Design and Digital Fabrication in Architecture – 14th to 18th July 2025 at SPA Vijayawada',
      date: '14th to 18th July 2025',
      isNew: true,
      link: 'https://spav.ac.in/workshop%20Computational%20Design%20and%20Digital%20Fabrication%20in%20Architecture.html'
    },
    {
      title: 'Dr. D.C. Pavate Memorial Fellowships in Cambridge (2026–27) – Applications Open Till August 20, 2025',
      date: 'August 20, 2025',
      isNew: true,
      link: '/2025/notices/Karnataka University, Dharwad.pdf'
    },
    {
      title: 'Applications invited for National Scholarship (Top Class) for ST & SC Students – 2025-26',
      date: 'July 2025',
      isNew: true,
      link: '/2025/notices/notice for Top class ST ,SC  scholarship.pdf'
    },
    {
      title: 'Mohan T. Advani Centennial Scholarship Programme (Academic year 2025-26) by Blue Star Foundation',
      date: 'Academic Year 2025-26',
      isNew: true,
      link: 'https://spav.ac.in/Mohan-T-Advani-Centennial-Scholarship-Programme-2025-26.html'
    },
    {
      title: 'Upcoming National Conference on "CPTED & AI in Urban Areas" to be Organized by SPA Vijayawada on 30th August 2025',
      date: '30th August 2025',
      isNew: true,
      link: '/2025/slider/CPTED  AI in Urban Areas - National Conference 2025.pdf'
    }
  ];

  const importantLinks = [
    { title: 'Capacity Building on SLDs', link: '#' },
    { title: 'National Ragging Prevention Programme', link: '#' },
    { title: 'Anti Ragging Squad', link: '#' },
    { title: 'INYAN 2025', link: 'https://sites.google.com/spav.edu.in/inyan-2025-spa-vijayawada?usp=sharing' },
    { title: 'SPAV Prospectus', link: '#' },
    { title: 'Video Gallery', link: '#' },
    { title: 'Notice Board', link: '#' },
    { title: 'Academic Ordinances', link: 'academic_ordinances.html' },
    { title: 'India Today Ranking', link: '#' },
    { title: 'Holidays List - 2025', link: '#', isNew: true },
    { title: 'NIRF - SPAV', link: '#', isNew: true },
    { title: 'Results', link: '#' },
    { title: 'Fees & Payments', link: '#' },
    { title: 'Academic Calendar', link: 'academiccalendar.html' },
    { title: 'Student Fees', link: '#' },
    { title: 'Green Up SPAV', link: '#' },
    { title: 'GST', link: '#' }
  ];

  const menuItems = [
    {
      title: 'About',
      submenu: [
        { title: 'Vision', link: 'vision.html' },
        { title: 'Theme of SPAV Logo', link: 'themeofspavlogo.html' },
        { title: 'About SPAV', link: 'about.html' },
        { title: 'Campus Highlights', link: 'campus1.html' },
        { title: 'Achievements', link: 'achivements.html' }
      ]
    },
    {
      title: 'Institution',
      submenu: [
        { title: 'Acts & Statutes', link: 'spavact.html' },
        { title: 'Board of Governors', link: 'bog.html' },
        { title: 'Finance Committee', link: 'fc.html' },
        { title: 'BWC', link: 'bwc.html' },
        { title: 'Chairperson', link: 'chairperson.html' },
        { title: 'Director', link: 'director.html' },
        { title: 'Registrar', link: 'registrar.html' },
        { title: 'Senate', link: 'senate.html' },
        { title: 'Deans', link: 'deans.html' },
        { title: 'Committees', link: 'committees.html' },
        { title: 'Administration', link: 'administration.html' },
        { title: 'Faculty in Charge', link: 'fic.html' },
        { title: 'Convocation', link: 'convocation.html' },
        { title: 'Annual Reports', link: 'annualreports.html' },
        { title: 'Minutes of Meeting', link: 'minutes.html' }
      ]
    },
    {
      title: 'Academics',
      submenu: [
        { title: 'NEP 2020 Enablement', link: '/2024/pdf/NEP Enablement at SPAV 2024.pdf' },
        { title: 'Admissions', link: 'spavadmissions.html' },
        { title: 'Courses Offered', link: 'courseoffered.html' },
        { title: 'CCMT 2024', link: 'ccmt.html' },
        { title: 'CSAB/JOSAA-2024', link: 'CSAB-JOSAA-2024.html' },
        { title: 'Examination', link: 'exams.html' },
        { title: 'Academic Ordinances', link: 'academic_ordinances.html' },
        { title: 'Fee Structure', link: 'feesstructure.html' },
        { title: 'Academic Calendar', link: 'academiccalendar.html' }
      ]
    },
    {
      title: 'Departments',
      submenu: [
        { title: 'Architecture', link: 'architecturedepartment.html' },
        { title: 'Planning', link: 'planningdepartment.html' }
      ]
    },
    {
      title: 'Central Facilities',
      submenu: [
        { title: 'Central Library', link: 'library.html' },
        { title: 'Computer Centre', link: 'computer_centre.html' },
        { title: 'Laboratories', link: 'laboratory.html' },
        { title: 'Healthcare Centre', link: 'health.html' },
        { title: 'Guest House', link: 'guest.html' },
        { title: 'Security', link: 'security.html' }
      ]
    },
    {
      title: 'Research & Innovation',
      submenu: [
        { title: 'A-CUPCB-SPAV', link: 'https://acupcb.spav.ac.in/' },
        { title: 'Research Projects', link: 'rprojects.html' },
        { title: 'Institute Innovation Cell', link: 'iic.html' },
        { title: 'Consultancy Projects', link: 'cprojects.html' },
        { title: 'IJPAS', link: 'spav_journal.html' },
        { title: 'Publications', link: 'publications.html' },
        { title: "MoU's", link: 'mous.html' },
        { title: 'Foreign Visit under CPDA Fund', link: 'Foreign_visit_under_CPDA_Fund.html' }
      ]
    },
    {
      title: 'Collaboration',
      submenu: [
        { title: 'Memberships', link: 'https://spav.ac.in/memberships.html' },
        { title: 'CIII', link: 'cii.html' },
        { title: "MoU's", link: 'mous.html' },
        { title: 'Alumni', link: 'alumni.html' },
        { title: 'NSS', link: 'nss.html' },
        { title: 'Civil & Structural Consultancy Cell', link: 'Civil&Structural_Consultancy_Cell.html' },
        { title: 'Training & Placements', link: 'tp.html' },
        { title: 'Conferences', link: 'conferences.html' },
        { title: 'Seminars/Webinars', link: 'webinar.html' },
        { title: 'Workshops/FDP', link: 'ws.html' },
        { title: 'UBA', link: 'uba.html' }
      ]
    },
    {
      title: "Student's Corner",
      submenu: [
        { title: 'Inyan 2025', link: 'https://sites.google.com/spav.edu.in/inyan-2025-spa-vijayawada?usp=sharing' },
        { title: "Student's Magazine", link: 'students_magazine.html' },
        { title: 'EBSB', link: 'ebsb.html' },
        { title: 'Life@SPAV', link: 'lifespav.html' },
        { title: 'Clubs', link: 'clubs.html' },
        { title: 'Activities', link: 'studentactivities.html' },
        { title: 'Hostels', link: 'spav_hostel.html' },
        { title: 'Sports', link: 'sports.html' },
        { title: 'Notice Board', link: 'snotice.html' }
      ]
    },
    {
      title: 'Gallery',
      link: 'gallery.html'
    },
    {
      title: 'Contact',
      submenu: [
        { title: 'Contact', link: 'contact.html' },
        { title: 'Feedback', link: 'feedback.php' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStudentWork((prev) => (prev + 1) % studentWorks.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [studentWorks.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextStudentWork = () => {
    setCurrentStudentWork((prev) => (prev + 1) % studentWorks.length);
  };

  const prevStudentWork = () => {
    setCurrentStudentWork((prev) => (prev - 1 + studentWorks.length) % studentWorks.length);
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${fontSize === 'sm' ? 'text-sm' : fontSize === 'lg' ? 'text-lg' : 'text-base'}`}>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center overflow-x-auto">
          <div className="flex items-center space-x-4 flex-shrink-0">
            <a href="#main-content" className="hover:underline">Skip to Main Content</a>
            <a href="#" className="hover:underline">Screen Reader Access</a>
            <span className="text-slate-500">|</span>
            <a href="#" className="flex items-center hover:text-amber-400 transition-colors">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </a>
            <a href="#" className="flex items-center hover:text-amber-400 transition-colors">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
              IT Helpdesk
            </a>
            <a href="#" className="flex items-center hover:text-amber-400 transition-colors">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              Webmail
            </a>
          </div>
          <div className="flex items-center space-x-4 flex-shrink-0 ml-auto">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setFontSize('sm')} 
                className="hover:text-amber-400" 
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button 
                onClick={() => setFontSize('base')} 
                className="hover:text-amber-400" 
                aria-label="Default font size"
              >
                A
              </button>
              <button 
                onClick={() => setFontSize('lg')} 
                className="hover:text-amber-400" 
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-slate-700 border border-slate-600 rounded-md p-1"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Search */}
          <div className="flex justify-between items-center py-3">
            <a href="#" className="flex items-center flex-shrink-0">
              <img 
                src="https://www.spav.ac.in/images/spav_logo.jpg" 
                alt="SPAV Logo" 
                className="h-16 w-auto rounded-md"
              />
            </a>
            <div className="hidden md:block w-1/3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <img src="https://www.spav.ac.in/2024/images/acupcbspav6.png" alt="ACUPCB" className="h-12" />
              <img src="https://www.spav.ac.in/2025/images/SPAV%20SAMARTH-emp.png" alt="Samarth Employee" className="h-12" />
              <img src="https://www.spav.ac.in/2025/images/SPAV%20SAMARTH-student.png" alt="Samarth Student" className="h-12" />
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-t-md">
            <ul className="flex items-center text-white font-medium text-xs uppercase tracking-wider">
              {menuItems.map((item, index) => (
                <li key={index} className="group relative">
                  {item.submenu ? (
                    <>
                      <a href="#" className="px-3 py-3 block hover:bg-amber-600 transition-colors flex items-center">
                        {item.title}
                        <ChevronDown className="w-3 h-3 ml-1" />
                      </a>
                      <ul className="absolute left-0 top-full bg-white text-slate-700 shadow-lg rounded-b-md py-1 z-50 normal-case min-w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a 
                              href={subItem.link} 
                              className="px-4 py-2 block hover:bg-slate-100 text-sm"
                              target={subItem.link.startsWith('http') ? '_blank' : '_self'}
                            >
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a href={item.link} className="px-3 py-3 block hover:bg-amber-600 transition-colors">
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden bg-white border-t border-slate-200 p-4">
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.submenu ? (
                    <details className="group">
                      <summary className="w-full flex justify-between items-center px-4 py-2 rounded-md text-slate-700 hover:bg-slate-100 cursor-pointer">
                        {item.title}
                        <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                      </summary>
                      <ul className="pl-6 mt-1 space-y-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a 
                              href={subItem.link} 
                              className="block px-4 py-2 text-sm rounded-md hover:bg-slate-100"
                              target={subItem.link.startsWith('http') ? '_blank' : '_self'}
                            >
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <a href={item.link} className="block px-4 py-2 rounded-md text-slate-700 hover:bg-slate-100">
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Slider */}
      <section className="relative h-[500px] overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex items-center">
                  <div className="max-w-4xl px-8 text-white">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{slide.title}</h2>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">{slide.subtitle}</p>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Latest Notifications Marquee */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white p-3 shadow-lg flex items-center space-x-4 overflow-hidden">
        <span className="bg-white text-red-600 text-sm font-bold px-4 py-2 rounded-full flex-shrink-0 shadow-md">LATEST</span>
        <div className="marquee-container flex-1 overflow-hidden">
          <div className="marquee-content animate-marquee whitespace-nowrap">
            <span className="text-white text-sm mx-8">Schedule of Supplementary Examinations, Even Semester A.Y 2024-25</span>
            <span className="text-red-300 mx-8">•</span>
            <span className="text-white text-sm mx-8">Results of Even Semester End Examinations May 2025 A.Y 2024-25</span>
            <span className="text-red-300 mx-8">•</span>
            <span className="text-white text-sm mx-8">Implementation of PM-Vidyalaxmi Education Loan Scheme at SPA Vijayawada</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '15+', label: 'Years of Excellence', icon: Award, color: 'from-blue-500 to-blue-600' },
              { number: '2000+', label: 'Alumni Network', icon: Users, color: 'from-green-500 to-green-600' },
              { number: '50+', label: 'Expert Faculty', icon: BookOpen, color: 'from-purple-500 to-purple-600' },
              { number: '100+', label: 'Research Projects', icon: Search, color: 'from-orange-500 to-orange-600' }
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.color} text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 opacity-80" />
                  <div className="text-right">
                    <div className="text-3xl font-bold">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dean's Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Meet our distinguished academic leaders who guide SPAV towards excellence</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Dean Academic', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
              { title: 'Dean P&D', icon: TrendingUp, color: 'from-green-500 to-green-600' },
              { title: 'Dean Student Affairs', icon: Users, color: 'from-purple-500 to-purple-600' },
              { title: 'Dean Faculty Welfare', icon: Award, color: 'from-orange-500 to-orange-600' },
              { title: 'Dean Research', icon: Search, color: 'from-red-500 to-red-600' }
            ].map((dean, index) => (
              <a
                key={index}
                href="#"
                className="group block p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`bg-gradient-to-br ${dean.color} p-4 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <dean.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors">{dean.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* About SPAV Section */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-8 shadow-xl border border-amber-100 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-xl mr-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">About SPAV</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm mb-6">
                "School of Planning and Architecture, Vijayawada, (in short SPAV), was 
                established on July 7, 2008 by the Ministry of Human Resource 
                Development (MoE), Government of India, as an autonomous institution. 
                SPAV is a premier Centrally Funded Technical Institution (CFTI) directly 
                under the MoE, for excellence in the fields of Planning and Architecture."
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-amber-600">
                  <Star className="w-4 h-4 mr-1" />
                  <span className="text-sm font-semibold">Institute of National Importance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200 bg-gray-50">
                <nav className="flex">
                  {[
                    { id: 'notifications', label: 'Latest Notifications', color: 'bg-orange-500', icon: Bell },
                    { id: 'circulars', label: 'Circulars / Orders', color: 'bg-blue-500', icon: BookOpen },
                    { id: 'recruitment', label: 'Recruitment', color: 'bg-green-500', icon: Users },
                    { id: 'tender', label: 'Tender', color: 'bg-purple-500', icon: Award }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-4 px-4 text-sm font-medium text-center border-b-3 transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'border-amber-500 text-amber-600 bg-white shadow-sm'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-white/50'
                      }`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span className={`inline-block w-3 h-3 rounded-full ${tab.color}`}></span>
                        <tab.icon className="w-4 h-4" />
                        <span className="hidden sm:inline">{tab.label}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === 'notifications' && (
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {notifications.map((notification, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 group">
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <a 
                            href={notification.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-900 hover:text-amber-600 cursor-pointer group-hover:text-amber-600 transition-colors"
                          >
                            {notification.title}
                          </a>
                          <p className="text-xs text-gray-500 mt-2 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {notification.date}
                          </p>
                        </div>
                        {notification.isNew && (
                          <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">NEW</span>
                        )}
                      </div>
                    ))}
                    <div className="text-center pt-6">
                      <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all">
                        View All Notifications
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                )}
                
                {activeTab !== 'notifications' && (
                  <div className="text-center py-12 text-gray-500">
                    <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                      <BookOpen className="w-8 h-8" />
                    </div>
                    <p className="text-lg">No {activeTab} available at the moment.</p>
                    <p className="text-sm mt-2">Please check back later for updates.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Student Works Showcase */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Showcasing outstanding projects and achievements from our talented students</p>
          </div>
          
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentStudentWork * 100}%)` }}
            >
              {studentWorks.map((work, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                    <div className="relative overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
                      <div className="mb-6">
                        <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">STUDENT PROJECT</span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{work.title}</h3>
                      <p className="text-amber-600 font-semibold mb-4">{work.student}</p>
                      <p className="text-gray-600 leading-relaxed mb-8">{work.description}</p>
                      <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-fit">
                        View Project Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={prevStudentWork}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextStudentWork}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {studentWorks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStudentWork(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentStudentWork === index ? 'bg-amber-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Important Links Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-8 shadow-xl border border-amber-100">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-xl mr-4">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Important Links</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-80 overflow-y-auto">
              {importantLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target={link.link.startsWith('http') ? '_blank' : '_self'}
                  rel={link.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 hover:bg-white hover:bg-opacity-70 p-3 rounded-xl transition-all duration-300 group"
                >
                  <div className="bg-blue-100 group-hover:bg-blue-200 p-2 rounded-lg mr-3 transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="truncate flex-1">{link.title}</span>
                  {link.isNew && (
                    <span className="ml-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">NEW</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access Cards */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Access key information and services with just one click</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: 'Admissions', subtitle: 'Apply Now', color: 'from-blue-500 to-blue-600', description: 'Start your journey with us' },
              { icon: Users, title: 'Faculty', subtitle: 'Meet Our Team', color: 'from-green-500 to-green-600', description: 'Expert educators and researchers' },
              { icon: Award, title: 'Research', subtitle: 'Innovation Hub', color: 'from-purple-500 to-purple-600', description: 'Cutting-edge research projects' },
              { icon: Calendar, title: 'Events', subtitle: 'Upcoming', color: 'from-red-500 to-red-600', description: 'Conferences and workshops' }
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${card.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                  <card.icon className="w-10 h-10 mb-4 relative z-10" />
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm opacity-90">{card.subtitle}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-6">{card.description}</p>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-900 group-hover:text-white">
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Gallery */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Life</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience the vibrant life at SPAV through our video gallery</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Glimpse of SPAV', videoId: '8Pp3OOYOHe0', description: 'A comprehensive tour of our beautiful campus' },
              { title: '8th Convocation', videoId: '_WFcehLNUOI', description: 'Celebrating academic achievements and milestones' },
              { title: 'Swachhata Hi Seva Event', videoId: 'KWFw1Co-41Y', description: 'Community service and environmental initiatives' }
            ].map((video, index) => (
              <div key={index} className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <div className="aspect-video relative overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose SPAV Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SPAV?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover what makes us a premier institution for architecture and planning education</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Excellence in Education',
                description: 'Comprehensive curriculum designed by industry experts and academic leaders',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Users,
                title: 'Expert Faculty',
                description: 'Learn from renowned professors and industry professionals',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Zap,
                title: 'Modern Infrastructure',
                description: 'State-of-the-art facilities and cutting-edge technology',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: TrendingUp,
                title: 'Industry Connections',
                description: 'Strong partnerships with leading firms and organizations',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: Award,
                title: 'Research Excellence',
                description: 'Innovative research projects and publications',
                color: 'from-red-500 to-red-600'
              },
              {
                icon: Globe,
                title: 'Global Recognition',
                description: 'Internationally acclaimed programs and collaborations',
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* GoI Initiatives Logo Carousel */}
      <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 py-12 overflow-hidden">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Government of India Initiatives</h3>
          <p className="text-gray-600">Supporting national education and development programs</p>
        </div>
        <div className="flex animate-marquee-slow">
          <div className="flex items-center space-x-16 mx-8 flex-shrink-0">
            <img src="https://www.spav.ac.in/2021/wbsb_logo.png" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="EKBharat" />
            <img src="https://www.spav.ac.in/images/swayam_logo.png" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="Swayam" />
            <img src="https://www.spav.ac.in/images/patashala.png" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="ePGPathshala" />
            <img src="https://www.spav.ac.in/images/my_gov_logo.png" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="MyGov" />
            <img src="https://www.spav.ac.in/images/NDL.png" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="NDL" />
            <img src="https://www.spav.ac.in/images/nirflogo.png" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="NIRF" />
            <img src="https://www.spav.ac.in/images/Make_In_India.png" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="Make In India" />
            <img src="https://www.spav.ac.in/images/manodarpan1.jpg" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="Manodarpan" />
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center space-x-16 mx-8 flex-shrink-0">
            <img src="https://www.spav.ac.in/2021/wbsb_logo.png" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="EKBharat" />
            <img src="https://www.spav.ac.in/images/swayam_logo.png" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="Swayam" />
            <img src="https://www.spav.ac.in/images/patashala.png" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="ePGPathshala" />
            <img src="https://www.spav.ac.in/images/my_gov_logo.png" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="MyGov" />
            <img src="https://www.spav.ac.in/images/NDL.png" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="NDL" />
            <img src="https://www.spav.ac.in/images/nirflogo.png" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="NIRF" />
            <img src="https://www.spav.ac.in/images/Make_In_India.png" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="Make In India" />
            <img src="https://www.spav.ac.in/images/manodarpan1.jpg" className="h-16 opacity-80 hover:opacity-100 transition-opacity" alt="Manodarpan" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src="https://www.spav.ac.in/images/spav_logo.jpg" 
                  alt="SPAV Logo" 
                  className="h-12 w-auto rounded-md mr-3"
                />
                <div>
                  <h3 className="text-xl font-bold">SPAV</h3>
                  <p className="text-sm text-gray-300">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                An Institute of National Importance, focusing on excellence in Architecture and Planning education and research.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Academics</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" />Admissions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" />Departments</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" />Courses</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" />Examination</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" />NIRF Ranking</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" />Results</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" />Research</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" />Alumni</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Survey No. 4/4, ITI Road, Vijayawada, Andhra Pradesh - 520008</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>+91-866-2555555</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>info@spav.ac.in</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2025 School of Planning and Architecture, Vijayawada. All Rights Reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }
        
        .marquee-container {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </div>
  );
}

export default App;