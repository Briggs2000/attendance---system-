import './globals.css';

export const metadata = {
  title: 'NYSC Attendance',
  description: 'Real-time CDS attendance management'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
