import * as React from "react"
import { MotionSection } from "@/components/animations/motion-section"
import { AnimatedCard } from "@/components/animations/animated-card"
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { StaggeredChildren } from "@/components/animations/staggered-children"
import { AnimatedButton } from "@/components/animations/animated-button"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

const ContactSection = () => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [success]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setSuccess(false);
    const response = await fetch("https://formspree.io/f/xwvwgdaq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    setLoading(false);
    if (response.ok) {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setSuccess(true);
      form.reset();
    } else {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
      });
    }
  }

  return (
    <section id="contact" className="w-full py-12 section-alt">
      <div className="container px-4 md:px-6">
        <MotionSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="section-heading">Get In Touch</h2>
            <p className="max-w-[700px] text-muted-foreground">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </div>
        </MotionSection>
        <div className="mx-auto grid max-w-6xl gap-6 pt-12 lg:grid-cols-2">
          <div className="space-y-6">
            <MotionSection delay={0.2} direction="left">
              <AnimatedCard className="fancy-card">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Here's how you can reach me</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start space-x-4"
                  >
                    <Mail className="mt-0.5 h-5 w-5 text-amber-500" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">anupdhojpantha@gmail.com</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start space-x-4"
                  >
                    <Phone className="mt-0.5 h-5 w-5 text-amber-500" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">+1 919 641 8312</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-start space-x-4"
                  >
                    <MapPin className="mt-0.5 h-5 w-5 text-amber-500" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-sm text-muted-foreground">North Carolina, United States</p>
                    </div>
                  </motion.div>
                </CardContent>
              </AnimatedCard>
            </MotionSection>
            <MotionSection delay={0.4} direction="left">
              <AnimatedCard className="fancy-card">
                <CardHeader>
                  <CardTitle>Social Profiles</CardTitle>
                  <CardDescription>Connect with me online</CardDescription>
                </CardHeader>
                <CardContent>
                  <StaggeredChildren className="flex flex-wrap gap-4">
                    <Link href="https://github.com/anupdhojpantha" target="_blank" rel="noopener noreferrer">
                      <AnimatedButton variant="outline" className="flex items-center gap-2 fancy-button-outline">
                        <Github className="h-4 w-4" />
                        GitHub
                      </AnimatedButton>
                    </Link>
                    <Link href="https://www.linkedin.com/in/anup-pantha-587022324/" target="_blank" rel="noopener noreferrer">
                      <AnimatedButton variant="outline" className="flex items-center gap-2 fancy-button-outline">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </AnimatedButton>
                    </Link>
                    <Link href="mailto:anupdhojpantha@gmail.com">
                      <AnimatedButton variant="outline" className="flex items-center gap-2 fancy-button-outline">
                        <Mail className="h-4 w-4" />
                        Email
                      </AnimatedButton>
                    </Link>
                  </StaggeredChildren>
                </CardContent>
              </AnimatedCard>
            </MotionSection>
          </div>
          <MotionSection delay={0.3} direction="right">
            <AnimatedCard className="fancy-card">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {success && (
                  <div className="mb-4 p-3 rounded bg-green-100 text-green-800 text-center font-medium">
                    Your message has been sent successfully!
                  </div>
                )}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                className="border-amber-500/20 focus:border-amber-500/50 rounded-sm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Your email address"
                                className="border-amber-500/20 focus:border-amber-500/50 rounded-sm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Subject of your message"
                                className="border-amber-500/20 focus:border-amber-500/50 rounded-sm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your message"
                                className="min-h-32 border-amber-500/20 focus:border-amber-500/50 rounded-sm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button type="submit" className="w-full fancy-button" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
            </AnimatedCard>
          </MotionSection>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 