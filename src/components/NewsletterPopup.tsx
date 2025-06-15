
import React, { useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

// You should replace this with your Mailchimp/Brevo embed form action URL for production
const DEMO_NEWSLETTER_ACTION = "https://mailto.com/example"; // placeholder

const NewsletterPopup = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [formUrl, setFormUrl] = useState(""); // Allow user to supply form action for demo
  const [submitting, setSubmitting] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !formUrl) {
      toast({
        title: "Error",
        description: !formUrl ? "Please enter your Mailchimp/Brevo form action URL (site owner only, not shown to users)" : "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    // Because CORS may block fetch, we use a real HTML form submission:
    formRef.current?.submit();
    setTimeout(() => {
      setThankYou(true);
      setSubmitting(false);
      setEmail("");
    }, 2000);
  };

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail size={20} /> Join Our Newsletter
          </DialogTitle>
          <DialogDescription>
            Sign up for updates and stories from The Torque. Enter your email address below.
          </DialogDescription>
        </DialogHeader>
        {/* Site-owner input (hidden from end users in final deploy) */}
        <div className="mb-2">
          <Input
            type="url"
            placeholder="Paste Mailchimp/Brevo form action URL (owner use)"
            value={formUrl}
            onChange={e => setFormUrl(e.target.value)}
            className="w-full text-xs"
          />
        </div>
        {/* NEWSLETTER FORM */}
        {thankYou ? (
          <div className="text-green-700 font-medium text-center py-6">
            Thank you for subscribing!
          </div>
        ) : (
          <form
            ref={formRef}
            className="flex flex-col gap-2 py-1"
            action={formUrl || DEMO_NEWSLETTER_ACTION}
            method="POST"
            target="_blank"
            onSubmit={handleSubmit}
          >
            <Input
              type="email"
              name="EMAIL"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              disabled={submitting}
              required
              onChange={e => setEmail(e.target.value)}
            />
            {/* Customizable for Mailchimp/Brevo field name as needed */}
            <DialogFooter>
              <button
                type="submit"
                className="bg-primary text-white px-6 rounded-full py-2 font-semibold hover:bg-black transition-colors disabled:opacity-70 w-full"
                disabled={submitting}
              >
                {submitting ? "Subscribing..." : "Subscribe"}
              </button>
              <DialogClose asChild>
                <button type="button" className="ml-3 text-sm text-gray-500 hover:underline">
                  Cancel
                </button>
              </DialogClose>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
