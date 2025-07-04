"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import FullPageAuth from "@/components/FullPageAuth";

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modeParam = searchParams.get("mode");
  const [mode, setMode] = useState<"signin" | "signup">(
    modeParam === "signup" ? "signup" : "signin"
  );

  // Always open
  const handleClose = () => {
    router.push("/");
  };

  const handleAuthenticate = () => {
    router.push("/");
  };

  return (
    <FullPageAuth
      isOpen={true}
      onClose={handleClose}
      mode={mode}
      onModeChange={setMode}
      onAuthenticate={handleAuthenticate}
    />
  );
} 