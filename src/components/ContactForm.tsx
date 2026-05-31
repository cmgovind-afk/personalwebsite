"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-3">
            Get in touch
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#111] mb-6">
            Let&apos;s talk
          </h2>
          <p className="text-[#6b7280] leading-relaxed mb-8 max-w-md">
            I&apos;m actively exploring what&apos;s next — senior data product and analytics
            leadership roles where the work connects directly to how a business makes
            decisions. If that sounds like something worth a conversation, reach out.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:cm.govind@gmail.com"
              className="flex items-center gap-3 text-sm text-[#374151] hover:text-[#1a56db] transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-base">
                ✉
              </span>
              cm.govind@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/cmgovind/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-[#374151] hover:text-[#1a56db] transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-base">
                in
              </span>
              linkedin.com/in/chandramauli-govind
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div>
            <label className="text-sm font-medium text-[#374151] block mb-1.5">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] bg-white text-[#111] placeholder-[#9ca3af] focus:outline-none focus:border-[#1a56db] transition-colors text-sm"
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-[#374151] block mb-1.5">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
              })}
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] bg-white text-[#111] placeholder-[#9ca3af] focus:outline-none focus:border-[#1a56db] transition-colors text-sm"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-[#374151] block mb-1.5">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows={5}
              placeholder="What would you like to discuss?"
              className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] bg-white text-[#111] placeholder-[#9ca3af] focus:outline-none focus:border-[#1a56db] transition-colors text-sm resize-none"
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 rounded-full bg-[#111] text-white text-sm font-medium hover:bg-[#1a56db] transition-colors duration-200 disabled:opacity-50"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-600 text-center">
              Message sent — I&apos;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500 text-center">
              Something went wrong. Try emailing directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
