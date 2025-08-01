import { Logo } from '@/components/shared/logo';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contact" className="text-white" style={{ backgroundColor: '#006838' }}>
      <div className="container max-w-screen-2xl py-12 px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Application Info */}
          <div className="text-sm">
            <p>
              To apply online for an Akhuwat loan in Pakistan 2025, Akhuwat head office check CNIC. Fill out the form they give you and submit it with a copy of your CNIC. Akhuwat will review your online application, and if approved, they'll contact you with the next steps. This simple process helps you quickly get financial support from Akhuwat in Pakistan.
            </p>
          </div>

          {/* Column 2: Steps Image */}
          <div className="flex justify-center items-start">
            <Image src="/adddd.png" alt="Loan application steps" width={460} height={200} className="w-full h-auto max-w-[460px]" data-ai-hint="infographic steps" />
          </div>

          {/* Column 3: Logo and Foundation Info */}
          <div className="flex flex-col items-center text-center">
            <Logo />
            <p className="text-sm mt-4">
              <span className="font-bold">AKHUWAT FOUNDATION</span> is a microfinance <span className="font-bold">non-profit organization</span> working from 2003 and registered in <span className="font-bold">Federal Board of Revenue of Pakistan</span> Registration Number 3048949 and Licenced from <span className="font-bold">STATE BANK OF PAKISTAN (C-85/64060602)</span>.
            </p>
          </div>

          {/* Column 4: Contact Info */}
          <div className="text-sm">
            <h4 className="font-bold mb-2">CONTACT INFORMATION AKHUWAT</h4>
            <p><span className="font-bold">Helpline Number</span> 03478787625</p>
            <p className="mt-2"><span className="font-bold">Punjab:</span> Akhuwat Address: Head Office: 19 Civic Center, Sector A2, Township, Lahore, Pakistan</p>
            <p className="mt-2"><span className="font-bold">Sindh:</span> Address: V5QR+XX7, Saudabad G Area Malir Colony Kala Board, Karachi, Karachi City, Sindh</p>
            <p className="mt-2"><span className="font-bold">KPK:</span> Address: 2H6H+VX7, Hashtnagri Peshawar, Khyber Pakhtunkhwa</p>
          </div>

        </div>
      </div>
      <div className="py-4" style={{ backgroundColor: '#008c46' }}>
        <div className="container max-w-screen-2xl px-[5%] text-center text-sm flex justify-between items-center">
          <span>Copyright © 2025 AKHUWAT FOUNDATION Microfinance Pakistan.</span>
          <Link href="http://beta-tech.solutions" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Developed by Beta Tech Solutions
          </Link>
        </div>
      </div>
    </footer>
  );
}
