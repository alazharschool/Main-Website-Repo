"use client";

import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  // TODO: Implement user authentication check
  // For now, redirect to login
  router.push('/login');
  return null;
} 