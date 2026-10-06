import React from "react";
import { statsData } from "../data/signellentData";
import { Calendar, Users, Clock, TrendingUp } from "lucide-react";

export function SignellentStats() {
  const getIcon = (id) => {
    switch (id) {
      case 1:
        return <Calendar className="w-5 h-5 text-primary-blue" />;
      case 2:
        return <Users className="w-5 h-5 text-primary-blue" />;
      case 3:
        return <Clock className="w-5 h-5 text-silgate-orange" />;
      case 4:
        return <TrendingUp className="w-5 h-5 text-silgate-orange" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#F8FAFC] border border-gray-200/80 rounded-2xl p-6 relative overflow-hidden group hover:border-primary-blue hover:shadow-lg transition-all duration-300"
            >
              {/* Left Accent Bar */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-blue group-hover:bg-silgate-orange transition-colors" />

              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-white shadow-xs border border-gray-100 group-hover:scale-105 transition-transform">
                  {getIcon(stat.id)}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white text-gray-500 border border-gray-200">
                  Verified
                </span>
              </div>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold font-heading text-primary-blue tracking-tight">
                  {stat.number}
                </span>
                {stat.suffix && (
                  <span className="text-3xl font-extrabold font-heading text-silgate-orange">
                    {stat.suffix}
                  </span>
                )}
              </div>

              <h3 className="font-bold font-heading text-dark-navy text-base mb-1">
                {stat.title}
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm font-sans leading-relaxed">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SignellentStats;
