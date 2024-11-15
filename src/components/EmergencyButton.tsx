import React from 'react';
import { Phone } from 'lucide-react';

export default function EmergencyButton() {
  const handleEmergency = () => {
    // In a real app, this would trigger emergency protocols
    alert('Emergency services would be contacted. This is a demo.');
  };

  return (
    <button
      onClick={handleEmergency}
      className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white rounded-full p-6 shadow-lg flex items-center space-x-2 transform hover:scale-105 transition-all group z-50"
    >
      <Phone className="h-6 w-6 group-hover:animate-pulse" />
      <span className="font-bold pr-2">Emergency</span>
    </button>
  );
}