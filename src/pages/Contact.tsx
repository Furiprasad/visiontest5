
import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Form submitted! We'll get back to you soon.");
  };
  
  return (
    <MainLayout>
      {/* Header Banner */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Contact Us</h1>
          <p className="text-lg opacity-90">Get in touch with our team for inquiries and consultations</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center reveal-on-scroll">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-poppins">Visit Us</h3>
              <p className="text-gray-600">
                #7-24-9/5, #506, Dutch House,<br />
                Kirlampudi Layout, Visakhapatnam - 530017.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center reveal-on-scroll">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-poppins">Call Us</h3>
              <p className="text-gray-600">
                <a href="tel:+919988393555" className="hover:text-primary transition-colors">
                  +91 9988393555
                </a>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center reveal-on-scroll">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-poppins">Email Us</h3>
              <p className="text-gray-600">
                <a href="mailto:info@visiondevelopers.co" className="hover:text-primary transition-colors">
                  info@visiondevelopers.co
                </a>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center reveal-on-scroll">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-poppins">Office Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have questions or need more information about our services? Fill out the form below and our team will get back to you promptly.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    placeholder="Your Phone Number"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="reveal-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">Our Location</h2>
              <p className="text-gray-600 mb-8">
                We're located in the heart of Visakhapatnam. Feel free to visit our office during business hours.
              </p>
              
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d121615.8653287095!2d83.3350274!3d17.7212634!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a3943b795463a99%3A0xb503dc7832f4bb94!2sDutch%20House%20Apartment%20(Kirlampudi%20layout)%20401%2C%20Dutch%20House%20Apartments%20Beach%20Rd%2C%20Kirlampudi%20Layout%2C%20Chinna%20Waltair%2C%20Pedda%20Waltair%20Visakhapatnam%2C%20Andhra%20Pradesh%20530017!3m2!1d17.721263399999998!2d83.3350274!5e0!3m2!1sen!2sin!4v1745042152338!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
