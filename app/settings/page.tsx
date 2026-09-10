import { redirect } from 'next/navigation';

export default function SettingsPage() {
  // TODO: Implement user authentication check
  // For now, redirect to login
  redirect('/login');
} 