import React from 'react';

interface SafetyTipProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function SafetyTip({ title, description, icon }: SafetyTipProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}