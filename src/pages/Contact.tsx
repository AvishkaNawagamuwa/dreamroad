import { useState } from 'react';
import ctaBgImg from '../assest/images/Gemini_Generated_Image_80tyo980tyo980ty.png';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  Facebook,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: '',
    jobCategory: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = ['Poland', 'Romania', 'Hungary', 'UAE / Dubai', 'Qatar', 'Saudi Arabia', 'Other'];
  const jobCategories = [
    'Construction',
    'Factory Worker',
    'Warehouse Staff',
    'Hospitality',
    'Skilled Technician',
    'General Labor',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        country: '',
        jobCategory: '',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=800&fit=crop"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Get in <span className="text-secondary">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Start your overseas employment journey with a free consultation
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <a
              href="tel:0772605023"
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#C27733] rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-primary font-semibold text-lg">077 260 5023</p>
              <p className="text-gray-600 text-sm mt-2">Mon - Sat: 9:00 AM - 6:00 PM</p>
            </a>

            <a
              href="https://wa.me/94772605043"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <MessageCircle className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-green-600 font-semibold text-lg">+94 77 260 5043</p>
              <p className="text-gray-600 text-sm mt-2">Quick responses available</p>
            </a>

            <a
              href="mailto:dreamroadmanpower@gmail.com"
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#C27733] rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-primary font-semibold text-sm break-all">dreamroadmanpower@gmail.com</p>
              <p className="text-gray-600 text-sm mt-2">We'll reply within 24 hours</p>
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours. We're here to answer your questions and help you start your overseas employment journey.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={24} />
                  <p className="text-green-800 font-medium">
                    Thank you! Your message has been sent successfully. We'll contact you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="0771234567"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                      Interested Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="jobCategory" className="block text-sm font-semibold text-gray-700 mb-2">
                      Interested Job Category *
                    </label>
                    <select
                      id="jobCategory"
                      name="jobCategory"
                      value={formData.jobCategory}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Select a category</option>
                      {jobCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your experience, skills, and any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-[#C27733] text-white rounded-lg hover:from-primary-hover hover:to-[#b05f25] transition-all hover:shadow-lg hover:-translate-y-1 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div>
              <div className="bg-cream border border-primary/20 rounded-2xl p-8 md:p-10 mb-8 shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-dark">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 rounded-lg p-2">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-0.5">Office Address</h4>
                      <p className="text-muted text-sm">No 37/108/1/1, Kandy Road, Peliyagoda</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 rounded-lg p-2">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-0.5">Phone</h4>
                      <a href="tel:0772605023" className="text-muted text-sm hover:text-primary transition-colors">
                        077 260 5023
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 rounded-lg p-2">
                      <MessageCircle className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-0.5">WhatsApp</h4>
                      <a
                        href="https://wa.me/94772605043"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted text-sm hover:text-primary transition-colors"
                      >
                        +94 77 260 5043
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 rounded-lg p-2">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-0.5">Email</h4>
                      <a
                        href="mailto:dreamroadmanpower@gmail.com"
                        className="text-muted text-sm hover:text-primary transition-colors break-all"
                      >
                        dreamroadmanpower@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 rounded-lg p-2">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-0.5">Office Hours</h4>
                      <p className="text-muted text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted text-sm">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 rounded-lg p-2">
                      <Facebook className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-0.5">Follow Us</h4>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted text-sm hover:text-primary transition-colors"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our office is conveniently located in Peliyagoda. We welcome walk-in consultations during office hours. For best service, please call ahead to schedule an appointment.
                </p>
                <div className="rounded-xl overflow-hidden h-64 shadow-sm">
                  <iframe
                    title="Dream Road Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4!2d79.8872!3d6.9671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNo+37%2F108%2F1%2F1%2C+Kandy+Road%2C+Peliyagoda!5e0!3m2!1sen!2slk!4v1699999999999!5m2!1sen!2slk&q=No+37%2F108%2F1%2F1,+Kandy+Road,+Peliyagoda,+Sri+Lanka"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-500">License No: 3482 - Registered Manpower Agency</p>
                  <a
                    href="https://www.google.com/maps/search/No+37%2F108%2F1%2F1,+Kandy+Road,+Peliyagoda,+Sri+Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary font-semibold hover:underline"
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${ctaBgImg})` }}>
        <div className="absolute inset-0 bg-dark/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prefer to Talk Directly?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Call us now or send a WhatsApp message for immediate assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0772605023"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a
              href="https://wa.me/94772605043"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
