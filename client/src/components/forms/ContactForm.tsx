import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    console.log("Contact form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12" data-testid="contact-success">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-cyan/20 border border-neon-cyan mb-6">
          <CheckCircle className="w-8 h-8 text-neon-cyan" />
        </div>
        <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
          Message Sent!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thanks for reaching out. I'll get back to you soon.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false);
            form.reset();
          }}
          data-testid="send-another"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        data-testid="contact-form"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground font-mono text-sm">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="bg-black/50 border-neon-cyan/30 focus:border-neon-cyan focus:shadow-neon-glow text-foreground placeholder:text-muted-foreground/50"
                  data-testid="input-name"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground font-mono text-sm">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-black/50 border-neon-cyan/30 focus:border-neon-cyan focus:shadow-neon-glow text-foreground placeholder:text-muted-foreground/50"
                  data-testid="input-email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground font-mono text-sm">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-black/50 border-neon-cyan/30 focus:border-neon-cyan focus:shadow-neon-glow text-foreground placeholder:text-muted-foreground/50 resize-none"
                  data-testid="input-message"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-neon-cyan text-black hover:bg-neon-cyan/90 font-semibold"
          data-testid="button-submit"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </span>
          )}
        </Button>
      </form>
    </Form>
  );
}
