import "./globals.css";

export const metadata = {
  title: "Tomoki Sites",
  description: "Watanabe Tomokiのポートフォリオサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <footer className="bg-gray-200 text-center text-sm p-4 mt-4">
          <p>© 2025 Tomoki Sites</p>
        </footer>
      </body>
    </html>
  );
}
