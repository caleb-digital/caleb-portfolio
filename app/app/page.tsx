import { Code, Smartphone, Rocket, Mail, Cloud, CheckCircle, Terminal, Cpu, Zap, GitBranch } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-6 md:p-12">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Caleb Ayindoo Abotibono</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8">
            SaaS & Web Developer • Building from an iPhone
          </p>
          <div className="flex justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <Smartphone className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">iPhone 11</span>
            </div>
            <div className="flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full">
              <Code className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-medium">Mobile-First Dev</span>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 card-hover">
          <div className="flex items-start gap-4">
            <Rocket className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-4">The Journey: iPhone → Laptop</h2>
              <p className="text-gray-600 text-lg">
                This entire website was coded, committed, and deployed using only an iPhone 11. 
                No laptop, no desktop—just a mobile device and cloud tools. 
                Documenting the process of building a development business from extreme constraints.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Mobile Development Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: <Terminal />, name: 'GitHub Codespaces', desc: 'Cloud IDE' },
              { icon: <Cpu />, name: 'Next.js 14', desc: 'React Framework' },
              { icon: <Cloud />, name: 'Vercel', desc: 'Instant Deployment' },
              { icon: <GitBranch />, name: 'GitHub Mobile', desc: 'Version Control' },
              { icon: <Smartphone />, name: 'Mobile-First', desc: 'Primary Skill' },
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md card-hover">
                <div className="text-primary mb-3">{tech.icon}</div>
                <h3 className="font-bold text-lg mb-1">{tech.name}</h3>
                <p className="text-gray-500 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Project */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Zap className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold">Live Project Status</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>✅ Repository created on GitHub</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>✅ Configuration files added</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-500 animate-pulse" />
              <span>🚀 Building portfolio from iPhone...</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-gray-300" />
              <span>📦 Deploying to Vercel (Next)</span>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 card-hover">
          <Mail className="w-12 h-12 mx-auto mb-6 text-primary" />
          <h2 className="text-2xl font-bold mb-4">Follow the Journey</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Interested in how I&apos;m building a development business using only a mobile device?
            Have a project that needs mobile-first thinking?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:unrulynetworkhq@gmail.com" 
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Email Me
            </a>
            <Link 
              href="#"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              View GitHub
            </Link>
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            Built with Next.js • Tailwind CSS • Lucide Icons • Deployed on Vercel
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Caleb Ayindoo Abotibono • This site updates in real-time as the journey progresses</p>
      </footer>
    </main>
  );
}
