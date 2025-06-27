import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormWrapper from '@/components/AuthFormWrapper';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Define the validation schema for the form
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const ForgotPasswordPage = () => {
  console.log('ForgotPasswordPage loaded');

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    console.log("Password reset requested for:", values.email);
    toast.success("If an account with that email exists, a reset link has been sent.");
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <AuthFormWrapper
          title="Forgot Your Password?"
          description="No problem. Enter your email below and we'll send you a link to reset it."
          footerContent={
            <div className="text-sm text-center">
              <p className="text-muted-foreground">
                Remember your password?{" "}
                <Link to="/" className="font-medium text-primary hover:underline">
                  Log In
                </Link>
              </p>
            </div>
          }
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="name@example.com" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </form>
          </Form>
        </AuthFormWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;