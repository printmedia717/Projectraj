import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, Search, Bell, Users, BookOpen, Award, Calendar, ExternalLink, ArrowRight, Play, ChevronDown } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('notifications');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState('base');
  const [language, setLanguage] = useState('en');

  const slides = [
    {
      image: 'https://www.spav.ac.in/2025/slider/workshop-1.png',
      title: 'Computational Design Workshop',
      subtitle: '14th to 18th July 2025 at SPA Vijayawada',
      link: 'https://spav.ac.in/workshop%20Computational%20Design%20and%20Digital%20Fabrication%20in%20Architecture.html'
    },
    {
      image: 'https://www.spav.ac.in/2025/slider/cpted.png',
      title: 'CPTED AI Conference',
      subtitle: 'National Conference on CPTED & AI in Urban Areas',
      link: '/2025/slider/CPTED%20AI%20in%20Urban%20Areas%20-%20National%20Conference%202025.pdf'
    },
    {
      image: 'https://www.spav.ac.in/2025/slider/VIDYA-LAXMI-SCHEME.png',
      title: 'Vidyalaxmi Education Scheme',
      subtitle: 'PM-Vidyalaxmi Education Loan Scheme',
      link: '/2025/notices/Official%20flyer%20for%20website.pdf'
    },
    {
      image: 'https://www.spav.ac.in/2025/slider/banner1.png',
      title: 'Dr. D.C. Pavate Memorial Fellowships',
      subtitle: 'Applications Open Till August 20, 2025',
      link: '/2025/notices/Karnataka%20University,%20Dharwad.pdf'
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
          <nav className="hidden lg:flex items-center bg-amber-500 rounded-t-md">
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
      <section className="relative h-96 overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out h-full"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white max-w-4xl px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-xl md:text-2xl">{slide.subtitle}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Latest Notifications Marquee */}
      <section className="bg-white p-3 shadow-sm flex items-center space-x-4 overflow-hidden">
        <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded flex-shrink-0">LATEST</span>
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-slate-700 text-sm mx-4">Schedule of Supplementary Examinations, Even Semester A.Y 2024-25</span>
          <span className="text-slate-300 mx-4">|</span>
          <span className="text-slate-700 text-sm mx-4">Results of Even Semester End Examinations May 2025 A.Y 2024-25</span>
          <span className="text-slate-300 mx-4">|</span>
          <span className="text-slate-700 text-sm mx-4">Implementation of PM-Vidyalaxmi Education Loan Scheme at SPA Vijayawada</span>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dean's Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Dean Academic', icon: BookOpen },
              { title: 'Dean P&D', icon: Users },
              { title: 'Dean Student Affairs', icon: Users },
              { title: 'Dean Faculty Welfare', icon: Award },
              { title: 'Dean Research', icon: Search }
            ].map((dean, index) => (
              <a
                key={index}
                href="#"
                className="block p-6 bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-4 rounded-full shadow-inner mb-4">
                    <dean.icon className="w-10 h-10 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-slate-800">{dean.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* About SPAV Section */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-amber-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-400 pb-2">
                About SPAV
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                "School of Planning and Architecture, Vijayawada, (in short SPAV), was 
                established on July 7, 2008 by the Ministry of Human Resource 
                Development (MoE), Government of India, as an autonomous institution. 
                SPAV is a premier Centrally Funded Technical Institution (CFTI) directly 
                under the MoE, for excellence in the fields of Planning and Architecture. 
                Although in its nascent stage, with experienced faculty and guest lectures 
                by eminent visiting faculty and industry experts from all over the 
                country, the quality of education imparted and its focus on research puts 
                SPAV in the league of leading institutes in the country."
              </p>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200">
                <nav className="flex">
                  {[
                    { id: 'notifications', label: 'Latest Notifications', color: 'bg-orange-500' },
                    { id: 'circulars', label: 'Circulars / Orders', color: 'bg-blue-500' },
                    { id: 'recruitment', label: 'Recruitment', color: 'bg-green-500' },
                    { id: 'tender', label: 'Tender', color: 'bg-purple-500' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-3 px-4 text-sm font-medium text-center border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-amber-500 text-amber-600 bg-amber-50'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <span className={`inline-block w-3 h-3 rounded-full mr-2 ${tab.color}`}></span>
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'notifications' && (
                  <div className="space-y-4 max-h-80 overflow-y-auto">
                    {notifications.map((notification, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <ArrowRight className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <a 
                            href={notification.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-900 hover:text-amber-600 cursor-pointer"
                          >
                            {notification.title}
                          </a>
                          <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
                        </div>
                        {notification.isNew && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
                        )}
                      </div>
                    ))}
                    <div className="text-center pt-4">
                      <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        More...
                      </a>
                    </div>
                  </div>
                )}
                
                {activeTab !== 'notifications' && (
                  <div className="text-center py-8 text-gray-500">
                    <p>No {activeTab} available at the moment.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Important Links Section */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-amber-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-400 pb-2">
                IMPORTANT LINKS
              </h2>
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {importantLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target={link.link.startsWith('http') ? '_blank' : '_self'}
                    rel={link.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center text-sm text-blue-600 hover:text-blue-800 hover:bg-white hover:bg-opacity-50 p-2 rounded transition-all"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 flex-shrink-0" />
                    <span className="truncate">{link.title}</span>
                    {link.isNew && (
                      <span className="ml-auto bg-green-500 text-white text-xs px-1 rounded">NEW</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Cards */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: 'Admissions', subtitle: 'Apply Now', color: 'from-blue-500 to-blue-600' },
              { icon: Users, title: 'Faculty', subtitle: 'Meet Our Team', color: 'from-green-500 to-green-600' },
              { icon: Award, title: 'Research', subtitle: 'Innovation Hub', color: 'from-purple-500 to-purple-600' },
              { icon: Calendar, title: 'Events', subtitle: 'Upcoming', color: 'from-red-500 to-red-600' }
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
                  <card.icon className="w-8 h-8 mb-3" />
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="text-sm opacity-90">{card.subtitle}</p>
                </div>
                <div className="p-4">
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Gallery */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Campus Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Glimpse of SPAV', videoId: '8Pp3OOYOHe0' },
              { title: '8th Convocation', videoId: '_WFcehLNUOI' },
              { title: 'Swachhata Hi Seva Event', videoId: 'KWFw1Co-41Y' }
            ].map((video, index) => (
              <div key={index} className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* GoI Initiatives Logo Carousel */}
      <div className="w-full bg-white py-8 overflow-hidden mt-12">
        <div className="flex animate-marquee">
          <div className="flex items-center space-x-12 mx-6 flex-shrink-0">
            <img src="https://www.spav.ac.in/2021/wbsb_logo.png" className="h-12" alt="EKBharat" />
            <img src="https://www.spav.ac.in/images/swayam_logo.png" className="h-12" alt="Swayam" />
            <img src="https://www.spav.ac.in/images/patashala.png" className="h-12" alt="ePGPathshala" />
            <img src="https://www.spav.ac.in/images/my_gov_logo.png" className="h-12" alt="MyGov" />
            <img src="https://www.spav.ac.in/images/NDL.png" className="h-12" alt="NDL" />
            <img src="https://www.spav.ac.in/images/nirflogo.png" className="h-12" alt="NIRF" />
            <img src="https://www.spav.ac.in/images/Make_In_India.png" className="h-12" alt="Make In India" />
            <img src="https://www.spav.ac.in/images/manodarpan1.jpg" className="h-12" alt="Manodarpan" />
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center space-x-12 mx-6 flex-shrink-0">
            <img src="https://www.spav.ac.in/2021/wbsb_logo.png" className="h-12" alt="EKBharat" />
            <img src="https://www.spav.ac.in/images/swayam_logo.png" className="h-12" alt="Swayam" />
            <img src="https://www.spav.ac.in/images/patashala.png" className="h-12" alt="ePGPathshala" />
            <img src="https://www.spav.ac.in/images/my_gov_logo.png" className="h-12" alt="MyGov" />
            <img src="https://www.spav.ac.in/images/NDL.png" className="h-12" alt="NDL" />
            <img src="https://www.spav.ac.in/images/nirflogo.png" className="h-12" alt="NIRF" />
            <img src="https://www.spav.ac.in/images/Make_In_India.png" className="h-12" alt="Make In India" />
            <img src="https://www.spav.ac.in/images/manodarpan1.jpg" className="h-12" alt="Manodarpan" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About SPAV</h3>
              <p className="text-gray-300 text-sm">
                An Institute of National Importance, focusing on excellence in Architecture and Planning.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Academics</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Departments</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">NIRF</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Results</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Survey No. 4/4, ITI Road, Vijayawada</li>
                <li>Andhra Pradesh - 520008</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2025 School of Planning and Architecture, Vijayawada. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}

export default App;