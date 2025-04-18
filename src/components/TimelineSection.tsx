
import React from 'react';

const TimelineSection: React.FC = () => {
  const timelineEvents = [
    {
      period: "2002-2010",
      title: "Connecting the Nation",
      description: "Partnered with telecommunications giants like Indus, Airtel, Tata, and Vodafone to bring connectivity across Andhra Pradesh and Telangana by installing cellphone towers along highways. This project showcases your commitment to infrastructure development and national progress."
    },
    {
      period: "2015-2019",
      title: "Nurturing Young Minds",
      description: "Undertook the construction of residential school buildings, dorms, and quarters, creating over 1 lakh square feet of learning space in Ampollu."
    },
    {
      period: "2011-2016",
      title: "Building Efficiency at Gangavaram Port",
      description: "Played a vital role in expanding Gangavaram Port's capacity by constructing conveyer belt pilings and earthworks. Our flagship and prestigious project with expertise in handling large-scale projects and working in critical sectors."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 font-poppins text-center reveal-on-scroll">
          From Infrastructure Titans to Luxury Living Pioneers: A Timeline of Vision Developers' Excellence
        </h2>
        
        <div className="space-y-20">
          {timelineEvents.map((event, index) => (
            <div 
              key={index}
              className="grid md:grid-cols-3 gap-8 items-start reveal-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="md:text-right">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">{event.period}</h3>
                <h4 className="text-xl md:text-2xl font-medium">{event.title}</h4>
              </div>
              <div className="hidden md:block justify-self-center">
                <div className="h-full w-1 bg-primary relative">
                  <div className="absolute top-0 -left-3 w-7 h-7 bg-primary rounded-full"></div>
                </div>
              </div>
              <div>
                <p className="text-base md:text-lg lg:text-xl text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
