import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Props for the AuthFormWrapper component.
 */
interface AuthFormWrapperProps {
  /**
   * The main title of the form (e.g., "Welcome back").
   */
  title: string;
  /**
   * A short description or instruction displayed below the title.
   */
  description: string;
  /**
   * The main content of the form, typically input fields and a submit button.
   */
  children: React.ReactNode;
  /**
   * Content for the footer, usually for navigational links like "Need an account?".
   */
  footerContent: React.ReactNode;
}

/**
 * A reusable wrapper component that provides a consistent
 * layout for authentication forms (e.g., Login, Sign Up).
 */
const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  description,
  children,
  footerContent,
}) => {
  console.log('AuthFormWrapper loaded');

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center pt-6">
        {footerContent}
      </CardFooter>
    </Card>
  );
};

export default AuthFormWrapper;