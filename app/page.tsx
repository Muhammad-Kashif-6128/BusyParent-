// app/page.tsx

import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect the user to the dashboard route
  redirect('/dashboard');
}
