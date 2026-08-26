import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Github, Linkedin } from "lucide-react";

import { siteConfig } from "../data/siteConfig";
import Seo from "../components/ui/Seo";
import Eyebrow from "../components/ui/Eyebrow";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

const projectTypes = [
  "New Shopify Store",
  "Store Redesign",
  "Custom Development",
  "Conversion Optimization",
  "Something Else",
];

const budgets = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000+",
  "Not sure yet",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.projectType) errors.projectType = "Please select a project type.";
  if (!values.message.trim()) {
    errors.message = "Please add a short message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "A few more details would help — at least 10 characters.";
  }

  return errors;
}

const inputClasses =
  "w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-ink-soft/60 focus:border-moss";

export default function Contact() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    // No backend yet — simulate a submission so the success state can be reviewed.
    window.setTimeout(() => {
      setStatus("success");
    }, 900);
  }

  function handleReset() {
    setValues(initialState);
    setErrors({});
    setStatus("idle");
  }

  return (
    <div>
      <Seo title="Contact" description={siteConfig.contact.subhead} />

      <section className="mx-auto max-w-content px-6 pt-16 md:px-10 md:pt-24">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl italic leading-tight text-ink md:text-6xl">
            {siteConfig.contact.headline}
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-soft">{siteConfig.contact.subhead}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-start gap-4 border border-line p-10"
              >
                <CheckCircle2 size={32} className="text-moss" />
                <h2 className="font-serif text-2xl italic text-ink">Message sent.</h2>
                <p className="text-ink-soft">
                  Thanks for reaching out — I'll reply within a day, usually sooner.
                </p>
                <Button onClick={handleReset} variant="ghost">
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
                <div>
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClasses}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-2 text-sm text-red-700">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClasses}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-2 text-sm text-red-700">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
                    Company <span className="normal-case text-ink-soft/60">(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Where you work"
                  />
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <label htmlFor="projectType" className="font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={values.projectType}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.projectType)}
                      aria-describedby={errors.projectType ? "projectType-error" : undefined}
                      className={`${inputClasses} bg-paper`}
                    >
                      <option value="">Select one</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p id="projectType-error" role="alert" className="mt-2 text-sm text-red-700">
                        {errors.projectType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="budget" className="font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
                      Budget <span className="normal-case text-ink-soft/60">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={values.budget}
                      onChange={handleChange}
                      className={`${inputClasses} bg-paper`}
                    >
                      <option value="">Select one</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${inputClasses} resize-none`}
                    placeholder="What are you building?"
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-2 text-sm text-red-700">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <Button type="submit" variant="primary">
                    {status === "submitting" ? "Sending…" : "Send Inquiry"}
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">Direct</div>
              <div className="mt-4 flex flex-col gap-3">
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-ink hover:text-moss">
                  <Mail size={16} /> {siteConfig.email}
                </a>
                <a href={siteConfig.linkedin} className="inline-flex items-center gap-2 text-ink hover:text-moss">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href={siteConfig.github} className="inline-flex items-center gap-2 text-ink hover:text-moss">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
