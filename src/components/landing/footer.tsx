import Link from "next/link";
import { Brush, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl mb-4">
              <Brush className="h-7 w-7 text-primary" />
              CleanSweep Pro
            </Link>
            <p className="text-muted-foreground">Professional cleaning for a spotless space.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="#about-us" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: contact@cleansweep.pro</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Clean St, Forster, NSW</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {year} CleanSweep Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
