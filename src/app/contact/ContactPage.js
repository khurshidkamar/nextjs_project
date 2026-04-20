"use client";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactMessage } from "../api/contact/actions";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters" }),
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const result = await sendContactMessage(formData);

      if (result.success) {
        toast.success("Message sent!");
        reset();
      } else {
        toast.error(result.message || "Failed to send message.");
      }
    } catch (err) {}
  };

  const inputClass =
    "border px-3 py-2 w-full rounded-md placeholder-gray-400 dark:placeholder-white/70";
  return (
    <div className="p-10 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className={inputClass}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
        <input
          type="email"
          placeholder="Your email"
          className={inputClass}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
        <textarea
          placeholder="Your message"
          className="border px-3 py-2 w-full rounded-md"
          rows="4"
          {...register("message")}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
