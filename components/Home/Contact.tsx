"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiLinkedin,
  FiGithub,
  FiInstagram,
} from "react-icons/fi";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("mName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }
    setLoading(false);
  }

  return (
    <div id="contact" className="py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-lg mx-auto bg-white/15 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-orange-500/30 text-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-2xl font-bold text-center text-orange-400 mb-2"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-sm text-gray-300 mb-6"
        >
          Have questions or feedback? Drop us a message and we'll reply soon.
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="relative"
            >
              <FiUser className="absolute left-3 top-3 h-5 w-5 text-orange-400" />
              <input
                type="text"
                name="mName"
                required
                className="w-full pl-10 pr-3 p-3 rounded-xl border border-orange-500/40 bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
                placeholder="Your name"
              />
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="relative"
            >
              <FiMail className="absolute left-3 top-4 h-5 w-5 text-orange-400" />
              <input
                type="email"
                name="email"
                required
                className="w-full pl-10 pr-3 p-3 rounded-xl border border-orange-500/40 bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
                placeholder="Your email"
              />
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="relative"
            >
              <FiMessageSquare className="absolute left-3 top-3 h-5 w-5 text-orange-400" />
              <textarea
                name="message"
                rows={4}
                required
                className="w-full pl-10 pr-3 p-3 rounded-xl border border-orange-500/40 bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400 resize-none"
                placeholder="Write your message..."
              />
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition text-white font-semibold shadow-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {status && (
          <p
            className={`mt-4 text-center text-sm ${
              status.startsWith("Message") ? "text-green-400" : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="text-gray-300 mt-10"
        >
          You can also reach out via social media or email directly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="mt-6 flex justify-center space-x-6 text-black"
        >
          <Link
            href="https://www.instagram.com/bmsce_ieeecs/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-400 p-2 rounded-full border-[3px] border-orange-400 hover:bg-transparent hover:text-white transition duration-300"
          >
            <FiInstagram size={22} />
          </Link>
          <a
            href="https://www.linkedin.com/company/bmsce-ieee-computer-society"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-400 p-2 rounded-full border-[3px] border-orange-400 hover:bg-transparent hover:text-white transition duration-300"
          >
            <FiLinkedin size={22} />
          </a>
          <a
            href="https://github.com/BMSCE-IEEE-CS"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-400 p-2 rounded-full border-[3px] border-orange-400 hover:bg-transparent hover:text-white transition duration-300"
          >
            <FiGithub size={22} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
