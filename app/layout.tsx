import './globals.css';
import Header from '@/components/Header';
export const metadata={title:{default:'Gromatic — Growth on Autopilot',template:'%s | Gromatic'},description:'Automation-powered growth systems for local businesses.'};
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang='en'><body><Header/>{children}</body></html>)}