import "react-toastify/dist/ReactToastify.css";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form.tsx";

import { Button } from "../components/ui/button.tsx";
import { Input } from "../components/ui/input.tsx";
import React from "react";
import { Textarea } from "../components/ui/textarea.tsx";
import { motion } from "framer-motion";
import { sendContactForm } from "../lib/api";
import { useForm } from "react-hook-form";
import { useToast } from "../hooks/use-toast.ts";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const { toast } = useToast();

  const handleSubmit = async (data: FormValues) => {
    try {
      toast({
        title: "Submitting...",
        description: "Please wait while we send your message.",
        variant: "info",
      });
      await sendContactForm(data);
      toast({
        title: "Your message has been sent successfully!",
        variant: "success",
      });
      form.reset();
    } catch (err: any) {
      toast({
        title: "Failed to send the message.",
        description: err.message || "Something went wrong.",
        variant: "error",
      });
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-start justify-center min-h-[calc(80vh-4rem)] w-full px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto py-8">
      {/* Left Column: Contact Header */}
      <motion.div
        className="w-full md:w-1/2 order-1 md:order-1 md:pr-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
          <div className="inline-flex items-center text-xs font-semibold mb-6 px-2 py-1 rounded-lg border-1 shadow-sm hover:shadow-md transition-all duration-300 bg-purple-900 text-white  border-none  dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-900/30 cursor-pointer">
              <h1 className="text-center">Contact Me</h1>
            </div>
        <div className="mb-16">
          <h2 className="font-bold text-lg mb-4 ">Let's Connect</h2>
          <p className="mb-3 text-inherit text-[14px]">I'd love to hear from you!</p>
          <p className="font-bold text-sm mb-4 text-inherit">
            Want to
            <span className="relative inline-block text-inherit">
              <span className="underline underline-offset-4 decoration-2 decoration-fuchsia-500 mx-2 text-inherit text-xs">
                get in touch
              </span>
            </span>
            with me?
          </p>
          <p className="text-xs font-bold text-inherit">
            Fill up the form to easily reach me out.
          </p>
        </div>
        <div className="hidden md:block w-[150px] h-[150px] rounded-full bg-fuchsia-300/30 relative bottom-[1rem] right-[-55rem]"></div>
      </motion.div>

      {/* Right Column: Contact Form */}
      <motion.div
        className="w-full md:w-1/2 order-2 md:order-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative overflow-hidden border-[#33353F] border rounded-lg p-6 backdrop-blur-lg bg-white/10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4 relative z-10"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter the subject" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={5}
                        placeholder="Enter your message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full"
                variant="secondary"
              >
                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
