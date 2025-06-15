
import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-2 items-center justify-center mt-4"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        className="rounded-full px-4 py-2 border border-sky-200 focus:outline-none focus:ring-2 focus:ring-primary min-w-[210px]"
        placeholder="Your email"
        value={email}
        required
        onChange={e => setEmail(e.target.value)}
        disabled={submitted}
      />
      <button
        type="submit"
        className="bg-primary text-white px-6 rounded-full py-2 font-semibold hover:bg-black transition-colors disabled:opacity-60"
        disabled={submitted}
      >
        {submitted ? "Thank you!" : "Subscribe"}
      </button>
    </form>
  );
};

export default NewsletterSignup;
