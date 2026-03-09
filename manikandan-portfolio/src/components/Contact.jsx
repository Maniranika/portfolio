import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useRevealRef } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const titleRef = useRevealRef(0);
  const leftRef = useRevealRef(100);
  const rightRef = useRevealRef(200);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send (wire up to EmailJS / Formspree / backend in production)
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-violet-500',
      bg: 'bg-violet-500/10 border-violet-500/20',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'text-cyan-500',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10 border-blue-500/20',
    },
  ];

  return (
    <section id="contact" className="relative bg-[var(--bg-secondary)] overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-violet-500 bottom-0 left-0 opacity-10" />
      <div className="orb w-[300px] h-[300px] bg-cyan-400 top-0 right-0 opacity-8" />

      <div className="section-container">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-14">
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-violet-500">
            Contact
          </span>
          <h2 className="section-heading mt-2">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-[var(--text-secondary)] font-body mt-3 max-w-xl mx-auto">
            Have a project in mind, or just want to say hello? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div ref={leftRef} className="reveal lg:col-span-2 space-y-4">
            {contactDetails.map(({ icon: Icon, label, value, href, color, bg }) => (
              <div key={label} className="glass-card rounded-2xl p-5 flex items-center gap-4">
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${bg}`}
                >
                  <Icon size={18} className={color} />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-display uppercase tracking-wider mb-0.5">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-[var(--text-secondary)]">
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="glass-card rounded-2xl p-5">
              <div className="text-xs text-[var(--text-muted)] font-display uppercase tracking-wider mb-4">
                Social Links
              </div>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[var(--border-color)] text-sm font-display font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-violet-400 transition-all"
                >
                  <Github size={15} />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[var(--border-color)] text-sm font-display font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-cyan-400 transition-all"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Availability card */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-display font-semibold text-sm text-[var(--text-primary)]">
                  Currently Available
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] font-body leading-relaxed">
                Open to full-time roles, contract work, and exciting freelance projects.
                Typically respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div ref={rightRef} className="reveal lg:col-span-3">
            <div className="glass-card rounded-2xl p-7">
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-6">
                Send a Message
              </h3>

              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4">
                    <CheckCircle size={28} className="text-green-500" />
                  </div>
                  <h4 className="font-display font-bold text-[var(--text-primary)] mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] font-body">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-display font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-display font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-display font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea, or opportunity..."
                      required
                      rows={5}
                      className="form-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-3"
                  >
                    <span className="flex items-center gap-2">
                      {status === 'sending' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
