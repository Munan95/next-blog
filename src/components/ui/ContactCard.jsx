"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inputClass =
  "w-full rounded-2xl border border-[#59a0d1e8] bg-white px-4 py-3.5 text-sm text-slate-800 " +
  "outline-none transition focus:ring-2 focus:ring-[#0c629ee8]/40 " +
  "disabled:cursor-not-allowed disabled:opacity-60";

export default function ContactCard({
  docsUrl = "#",
  agentUrl = "#",
  onSubmit, // optional: async (data) => void
}) {
  const [enabled, setEnabled] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!enabled) return;
    setStatus("sending");
    try {
      if (onSubmit) await onSubmit(form);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className={`${montserrat.className} mx-auto w-full max-w-[860px] rounded-[28px] border border-sky-200 bg-white p-6 shadow-[0_10px_40px_rgba(32,188,203,0.15)] sm:p-8`}>

      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-sky-600">Say Hello</h2>
        <p className="mt-2 text-sm text-slate-500">We typically reply within 24h</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-bold text-slate-800">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            disabled={!enabled}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-bold text-slate-800">
            Your e-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            disabled={!enabled}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-xs font-bold text-slate-800">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={7}
            value={form.message}
            onChange={handleChange}
            disabled={!enabled}
            required
            placeholder="Please make sure your message includes the details. For faster support, if applicable, please also include all the reason. Thank you!"
            className={`${inputClass} resize-y placeholder:text-slate-400`}
          />
        </div>

        <button
          type="submit"
          disabled={!enabled || status === "sending"}
          className="w-full rounded-2xl bg-[#1c73aee8] py-3.5 text-sm font-bold text-white transition hover:bg-[#136195e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20bccb]/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        {status === "sent" && (
          <p role="status" className="text-center text-sm text-emerald-600">
            Message sent. We&apos;ll reply within 24h.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-center text-sm text-red-600">
            Couldn&apos;t send your message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
