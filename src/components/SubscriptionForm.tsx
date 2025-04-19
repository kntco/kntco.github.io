import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";

interface SubscriptionFormProps {
  onSubscribe?: (email: string) => void;
  buttonText?: string;
  placeholderText?: string;
}

const SubscriptionForm = ({
  onSubscribe = () => {},
  buttonText = "Subscribe",
  placeholderText = "Enter your email",
}: SubscriptionFormProps) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setIsValid(false);
      setMessage("Please enter your email address");
      return;
    }

    if (validateEmail(email)) {
      setIsValid(true);
      setMessage("Thank you for subscribing!");
      onSubscribe(email);
      setEmail("");
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email address");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-background p-4 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholderText}
            className="flex-grow"
            aria-label="Email address"
          />
          <Button type="submit" className="whitespace-nowrap">
            {buttonText}
          </Button>
        </div>

        {isValid !== null && (
          <Alert variant={isValid ? "default" : "destructive"} className="mt-2">
            {isValid ? (
              <CheckCircle className="h-4 w-4 mr-2" />
            ) : (
              <AlertCircle className="h-4 w-4 mr-2" />
            )}
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
      </form>
    </div>
  );
};

export default SubscriptionForm;
