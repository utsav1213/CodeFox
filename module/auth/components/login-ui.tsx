"use client";
import { signIn } from "@/lib/auth-client";
import { Github } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LoginUI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleGithubLogin = async () => {
    setIsLoading(true);
    try {
      await signIn.social({
        provider: "github",
        callbackURL: "/dashboard",
      });
    } catch (error) {
      console.error("Login error", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2 bg-black text-white font-sans">
      {/* Left Column - Marketing */}
      <div className="hidden lg:flex flex-col justify-center p-16 relative overflow-hidden bg-zinc-900/30">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-20">
          <div className="h-8 w-8 rounded-full bg-[#ebd0b7]" />
          <span className="text-xl font-bold tracking-tight text-white">
             CodeFox
          </span>
        </div>

        {/* Main Heading */}
        <div className="relative z-10 space-y-6 max-w-2xl">
          <h1 className="text-5xl font-extrabold tracking-tight leading-[1.1] text-white sm:text-6xl">
            Cut Code Review <br />
            Time & Bugs in Half. <br />
            Instantly.
          </h1>
          <p className="text-xl text-zinc-400 max-w-md leading-relaxed">
            Supercharge your team to ship faster with the most advanced AI code
            reviews.
          </p>
        </div>

        {/* Startups/Validation placeholders could go here if in original design, but taking screenshot as reference */}
        <div className="pb-10"></div>
      </div>

      {/* Right Column - Login Form */}
      <div className="flex flex-col justify-center items-center p-8 bg-black relative">
        <div className="w-full max-w-sm space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Welcome Back
            </h2>
            <p className="text-zinc-400">
              Login using the following providers:
            </p>
          </div>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full h-12 bg-white text-black hover:bg-zinc-200 border-none font-bold text-base gap-3 transition-all rounded-md"
              onClick={handleGithubLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
              ) : (
                <Github className="w-5 h-5 fill-current" />
              )}
              {isLoading ? "Connecting..." : "To Github"}
            </Button>
          </div>

          <div className="text-center space-y-6 pt-2">
            <p className="text-sm text-zinc-400">
              New to CodeRabbit?{" "}
              <Link
                href="/signup"
                className="text-[#ebd0b7] hover:text-[#d4bccc] hover:underline transition-colors font-medium"
              >
                Sign Up
              </Link>
            </p>
            <div>
              <Link
                href="/self-hosted"
                className="text-[#ebd0b7] hover:text-[#d4bccc] hover:underline font-medium text-sm transition-colors"
              >
                Self-Hosted Services
              </Link>
            </div>
          </div>

          <div className="flex justify-between text-xs text-zinc-600 px-4 pt-12 mt-auto w-full">
            <Link
              href="/terms"
              className="hover:text-zinc-400 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              className="hover:text-zinc-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;
