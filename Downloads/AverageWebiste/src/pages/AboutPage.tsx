import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Sparkles, Leaf, Users, Award, Lightbulb, Target, Heart, Mail, Linkedin, Github } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

const values = [
  {
    icon: Sparkles,
    title: 'Quality Craftsmanship',
    description: 'Every piece is meticulously crafted with attention to detail and premium materials.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Fashion',
    description: 'We are committed to ethical practices and sustainable materials in all our collections.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Our designs are inspired by and created for our diverse, global community.',
  },
  {
    icon: Award,
    title: 'Timeless Design',
    description: 'We create pieces that transcend trends, designed to be cherished for years.',
  },
];

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    bio: 'Sarah founded Average with a vision to create fashion that balances style and sustainability. With 15 years in the fashion industry, she leads our design philosophy.',
    contribution: 'Vision & Design Direction',
    linkedin: '#',
    email: 'sarah@average.com',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Sustainability',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
    bio: 'Marcus ensures every product meets our strict environmental standards. His expertise in sustainable materials has revolutionized our supply chain.',
    contribution: 'Sustainable Materials & Ethics',
    linkedin: '#',
    email: 'marcus@average.com',
  },
  {
    name: 'Elena Volkov',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    bio: 'Elena brings her minimalist aesthetic and technical expertise to every collection. Her designs have won multiple international fashion awards.',
    contribution: 'Product Design & Innovation',
    linkedin: '#',
    email: 'elena@average.com',
  },
  {
    name: 'David Park',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    bio: 'David oversees our global operations, ensuring seamless production and delivery while maintaining our commitment to fair labor practices.',
    contribution: 'Operations & Logistics',
    linkedin: '#',
    email: 'david@average.com',
  },
];

const milestones = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'Average was born from a simple idea: fashion should be accessible, sustainable, and timeless.',
  },
  {
    year: '2021',
    title: 'First Collection',
    description: 'Launched our debut collection focusing on essential wardrobe pieces made from organic materials.',
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Expanded to 15 countries while achieving carbon-neutral shipping and production.',
  },
  {
    year: '2025',
    title: 'Innovation Award',
    description: 'Recognized for our groundbreaking sustainable fabric technology and circular fashion model.',
  },
];

export function AboutPage({ onBack }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-gray-900 hover:text-gray-700 mb-8"
            >
              ← Back to Home
            </Button>
            <h1 className="text-gray-900 text-5xl lg:text-6xl mb-6">About Average</h1>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              We're redefining contemporary fashion with a focus on timeless design, 
              sustainable practices, and exceptional quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 lg:p-16 shadow-lg border border-gray-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-slate-950 to-purple-950 rounded-xl">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-600 tracking-[0.2em] uppercase">The Idea</span>
                </div>
                <h2 className="text-gray-900 text-4xl mb-6">How It All Started</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    In 2020, our founder Sarah Chen stood in her closet, overwhelmed by fast fashion 
                    purchases that fell apart after a few washes. She realized the industry had lost 
                    its way—prioritizing speed over quality, trends over timelessness, and profit over planet.
                  </p>
                  <p>
                    That moment of clarity sparked a question: <em className="text-gray-900">"What if there was a 
                    brand that made clothes for people who want to look good without sacrificing their values?"</em>
                  </p>
                  <p>
                    Average was born from this simple yet powerful idea. We set out to create a new kind 
                    of fashion brand—one that proves style and sustainability aren't mutually exclusive. 
                    Our name reflects our philosophy: we're not chasing extremes, we're perfecting the 
                    essentials that everyone needs.
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                  alt="Fashion studio workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 to-purple-950/20"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-slate-950 to-purple-950 rounded-lg">
                <Target className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-600 tracking-[0.2em] uppercase">Our Values</span>
            </div>
            <h2 className="text-gray-900 text-4xl mb-4">What We Stand For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from design to delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-950 to-purple-950 flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-slate-950 to-purple-950 rounded-lg">
                <Award className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-600 tracking-[0.2em] uppercase">Our Journey</span>
            </div>
            <h2 className="text-gray-900 text-4xl">Key Milestones</h2>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-950 to-purple-950 flex items-center justify-center text-white shrink-0">
                      {milestone.year.slice(-2)}
                    </div>
                    {index !== milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-slate-950 to-purple-950 mt-4"></div>
                    )}
                  </div>
                  <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200 flex-1 mb-8">
                    <span className="text-gray-500 mb-2 block">{milestone.year}</span>
                    <h3 className="text-gray-900 text-2xl mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-slate-950 to-purple-950 rounded-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-600 tracking-[0.2em] uppercase">The Team</span>
            </div>
            <h2 className="text-gray-900 text-4xl mb-4">Meet the People Behind Average</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team is dedicated to creating fashion that makes a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 p-8">
                  <div className="sm:col-span-2">
                    <div className="aspect-square rounded-xl overflow-hidden mb-4">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <h3 className="text-gray-900 text-2xl mb-1">{member.name}</h3>
                    <p className="text-purple-900 mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                    <div className="mb-4">
                      <span className="text-gray-500">Key Contribution:</span>
                      <p className="text-gray-900">{member.contribution}</p>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={member.email}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-slate-950 hover:to-purple-950 flex items-center justify-center transition-all group"
                      >
                        <Mail className="h-5 w-5 text-gray-700 group-hover:text-white" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-slate-950 hover:to-purple-950 flex items-center justify-center transition-all group"
                      >
                        <Linkedin className="h-5 w-5 text-gray-700 group-hover:text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 rounded-3xl p-12 lg:p-16 text-center text-white"
          >
            <h2 className="text-white text-4xl mb-6">Join Our Journey</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Be part of a movement that's changing fashion for the better. 
              Discover our collections and become part of the Average community.
            </p>
            <Button
              onClick={onBack}
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 h-12"
            >
              Explore Our Collections
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
