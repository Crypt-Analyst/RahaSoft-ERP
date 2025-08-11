import Link from 'next/link'

// Prevent layout inheritance for landing page (no sidebar)
export const dynamic = 'force-static';
import { 
  ArrowRight, 
  BarChart3, 
  Users, 
  Package, 
  DollarSign, 
  Briefcase, 
  TrendingUp,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  Star,
  Play,
  Clock,
  Award,
  Smartphone,
  Database,
  Cloud,
  Lock,
  MessageSquare,
  ChevronRight
} from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RahaSoft ERP
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#modules" className="text-gray-600 hover:text-blue-600 transition-colors">Modules</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/dashboard" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-sm font-medium mb-8">
              <Award className="h-4 w-4 mr-2" />
              #1 Rated ERP Platform for Growing Businesses
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
              Transform Your Business <br />
              <span className="text-gray-900">Operations Today</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join 10,000+ companies who&apos;ve ditched clunky legacy systems for RahaSoft ERP. 
              Experience the power of modern, AI-driven business management that actually accelerates your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                href="/dashboard" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2 hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 bg-white rounded-lg p-4 shadow-sm">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className="font-medium">Setup in 5 minutes</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 bg-white rounded-lg p-4 shadow-sm">
                <DollarSign className="h-4 w-4 text-green-500" />
                <span className="font-medium">80% cost savings</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 bg-white rounded-lg p-4 shadow-sm">
                <TrendingUp className="h-4 w-4 text-purple-500" />
                <span className="font-medium">3x productivity boost</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 bg-white rounded-lg p-4 shadow-sm">
                <Shield className="h-4 w-4 text-red-500" />
                <span className="font-medium">Enterprise security</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-6 text-gray-500">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-2 text-sm font-medium">4.9/5 on G2</span>
              </div>
              <div className="h-4 w-px bg-gray-300" />
              <p className="text-sm">Trusted by 10,000+ companies worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why RahaSoft ERP <span className="text-blue-600">Dominates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for the AI era with modern architecture that legacy ERP systems simply can&apos;t match.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-600 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">10x Faster Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Built with Next.js 15 and Turbopack. Load times that make your old ERP feel like dial-up internet.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-purple-600 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Predictive analytics and intelligent automation that actually help you make better business decisions.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-green-600 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile-First Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Actually usable on mobile. Because your business doesn&apos;t stop when you leave your desk.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-red-600 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bank-Grade Security</h3>
              <p className="text-gray-600 leading-relaxed">
                SOC 2 Type II certified with end-to-end encryption. Your data is safer than Fort Knox.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-yellow-600 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud-Native Architecture</h3>
              <p className="text-gray-600 leading-relaxed">
                Built for the cloud from day one. Scale infinitely without the infrastructure headaches.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-indigo-600 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Human Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Real humans, not chatbots. Get help when you need it, not when it&apos;s convenient for us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Business Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run your business efficiently in one integrated platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: "Accounting & Finance", desc: "Complete financial management with invoicing, payments, and reporting" },
              { icon: Package, title: "Inventory Management", desc: "Real-time stock tracking, procurement, and warehouse management" },
              { icon: Users, title: "Human Resources", desc: "Employee management, payroll, attendance, and performance tracking" },
              { icon: Briefcase, title: "CRM & Sales", desc: "Lead management, sales pipeline, and customer relationship tools" },
              { icon: BarChart3, title: "Project Management", desc: "Task tracking, time management, and resource allocation" },
              { icon: TrendingUp, title: "Business Intelligence", desc: "Advanced analytics, dashboards, and AI-powered insights" }
            ].map((module, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <module.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-gray-600">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              While legacy systems struggle with outdated technology, RahaSoft ERP delivers modern solutions that businesses actually want to use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Zap,
                title: "Lightning-Fast Performance",
                description: "Built with Next.js 15 and modern web technologies, not decades-old frameworks",
                advantage: "5x faster than traditional ERP systems"
              },
              {
                icon: Shield,
                title: "Enterprise-Grade Security",
                description: "Modern authentication, role-based access, and real-time audit trails",
                advantage: "Bank-level security without the complexity"
              },
              {
                icon: Globe,
                title: "Mobile-First Design",
                description: "Works perfectly on any device, unlike desktop-only legacy systems",
                advantage: "100% responsive on all devices"
              },
              {
                icon: TrendingUp,
                title: "AI-Powered Insights",
                description: "Intelligent business recommendations and predictive analytics built-in",
                advantage: "Smart automation, not just data storage"
              },
              {
                icon: Users,
                title: "Real-Time Collaboration",
                description: "Live updates, instant notifications, and seamless team coordination",
                advantage: "Work together, not in silos"
              },
              {
                icon: DollarSign,
                title: "Transparent Pricing",
                description: "No hidden fees, complex licensing, or surprise enterprise costs",
                advantage: "10x more affordable than legacy solutions"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  {item.advantage}
                </div>
              </div>
            ))}
          </div>

          {/* Subtle comparison without naming */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              The Modern ERP Advantage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  RahaSoft ERP Features
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Modern, intuitive interface that users love
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Real-time collaboration and live updates
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    AI-powered insights and automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Mobile-first responsive design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Easy setup and configuration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Transparent, affordable pricing
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-5 h-5 bg-gray-400 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">!</span>
                  </span>
                  Legacy ERP Limitations
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Outdated interfaces from the 2000s
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    No real-time features or collaboration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Basic reporting without AI insights
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Desktop-only or poor mobile experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Complex setup requiring consultants
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Enterprise licensing with hidden costs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Teams Choose RahaSoft
            </h2>
            <p className="text-xl text-blue-100">
              Companies switching from legacy systems see immediate improvements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                content: "After years with outdated systems, RahaSoft ERP feels like stepping into the future. Our team productivity increased 40% in the first month.",
                rating: 5,
                highlight: "40% productivity boost"
              },
              {
                name: "Michael Chen", 
                role: "CFO, GrowthCorp",
                content: "We tried three other ERP systems before RahaSoft. Finally found one that doesn't require an IT degree to operate effectively.",
                rating: 5,
                highlight: "User-friendly design"
              },
              {
                name: "Emily Rodriguez",
                role: "Operations Manager, ScaleTech", 
                content: "The real-time collaboration features alone justify the switch. Our remote team stays connected like never before.",
                rating: 5,
                highlight: "Real-time collaboration"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 italic text-blue-50">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="mb-3">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-100 text-sm">{testimonial.role}</div>
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-200 text-sm font-medium border border-green-400/30">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {testimonial.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using RahaSoft ERP to streamline operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Start Your Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">RahaSoft ERP</span>
              </div>
              <p className="text-gray-400">
                The next-generation ERP solution for modern businesses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 RahaSoft ERP. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
