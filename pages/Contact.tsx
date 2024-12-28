import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { sendContactForm } from "../lib/api";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
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
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = async (data: FormValues) => {
    try {
      toast({
        title: "Submitting...",
        description: "Please wait while we send your message.",
      });

      await sendContactForm(data);

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
        variant: "default",
      });

      form.reset();
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Failed to send the message.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <h1 className="text-9xl font-mono font-extrabold transform translate-x-35 -translate-y-[17rem]">
        Contact Me
      </h1>

      <div className="z-0 transform inset-2 -translate-x-[45rem] translate-y-[7rem]">
        <h1 className="font-bold text-xl mb-5">Let's Connect</h1>
        <p className="mb-3">I'd love to hear from you!</p>
        <p className="font-bold text-md">
          Want to
          <span className="relative inline-block">
            <span className="underline underline-offset-4 decoration-2 decoration-fuchsia-500 m-2">
              get in touch
            </span>
          </span>
          with me?
        </p>
        <p className="text-sm font-bold">
          {" "}
          Fill up the form to easily reach me out.{" "}
        </p>
      </div>
      <div className=" w-[150px] h-[150px] rounded-full bg-fuchsia-300 absolute top-[27rem] right-0 translate-x-[12rem]">
        HII
      </div>

      <div className="relative bottom-[14rem] right-[15rem]">
        <div className="foreground absolute w-auto h-auto sm:border-[#33353F] sm:border rounded-lg p-3 backdrop-blur-lg bg-white/2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-3"
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
                        rows={4}
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
      </div>
    </>
  );
};

export default Contact;
