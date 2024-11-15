import React from 'react';
import { Phone, MapPin, Users, Bell, Shield, BookOpen } from 'lucide-react';

const features = [
  {
    icon: <Phone className="h-8 w-8" />,
    title: "24/7 Emergency Support",
    description: "Instant access to emergency services and trusted contacts when you need them most."
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Safe Location Mapping",
    description: "Find and navigate to nearby safe zones, police stations, and women's shelters."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community Network",
    description: "Connect with a supportive community of women who look out for each other."
  },
  {
    icon: <Bell className="h-8 w-8" />,
    title: "Real-time Alerts",
    description: "Receive instant notifications about safety concerns in your area."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Personal Safety Tools",
    description: "Access to personal safety features including SOS alerts and location sharing."
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Safety Education",
    description: "Learn essential self-defense techniques and safety awareness strategies."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Safety Features</h2>
          <p className="text-xl text-gray-600">Everything you need to stay safe and connected</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}