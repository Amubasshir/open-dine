import Navbar from './components/Navbar';
import AuthContext from './context/AuthContext';
import './globals.css';

export const metadata = {
  title: 'Open Dine',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen w-screen bg-gray-100">
          <AuthContext>
            <main className="m-auto max-w-screen-2xl bg-white">
              <Navbar />
              {children}
            </main>
          </AuthContext>
        </main>
      </body>
    </html>
  );
}
