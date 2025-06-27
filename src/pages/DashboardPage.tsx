import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LogOut, ArrowRight } from 'lucide-react';

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, this would also clear auth tokens from context/storage
    console.log('User logged out from Dashboard page');
    navigate('/'); // Navigate to the LoginPage, which is at the root path
  };
  
  const handleProceed = () => {
    // Placeholder action for proceeding to the main application
    console.log('Proceeding to main application...');
    // In a real scenario, this might navigate to a different part of the app
    // For now, it does nothing.
    alert("This would take you to the main application!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome Back!</CardTitle>
            <CardDescription>
              You have been successfully authenticated.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This is your main dashboard. From here, you can access all the features of the application. The user menu in the top-right corner also provides quick access to your profile and logout options.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end gap-3">
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </Button>
            <Button onClick={handleProceed}>
              Proceed to App
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;