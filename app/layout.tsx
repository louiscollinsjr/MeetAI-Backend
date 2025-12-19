export const metadata = {
  title: 'MeetAI Backend',
  description: 'Voice-first AI assistant API',
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
