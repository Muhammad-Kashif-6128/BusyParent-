export const metadata = {
  title: "BusyParent",
  description: "AI Assistant for Busy Parents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

