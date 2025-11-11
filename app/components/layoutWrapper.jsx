'use client'

import { usePathname } from 'next/navigation';
import { Menu } from '../containers/menu';
import { Footer } from '../containers/footer';
import { ContactProvider } from '../context/contactContext';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  return (
    <>
      <Preloader />
      <ContactProvider>
        <Menu />
        {children}
        <Footer />
        <ContactPopupWrapper />
      </ContactProvider>
    </>
  );
}

import { useContact } from "../context/contactContext";
import ContactPopup from './contactPopup';
import Preloader from './preLoader';
function ContactPopupWrapper() {
  const { showPopup, closePopup } = useContact();
  return <ContactPopup isOpen={showPopup} onClose={closePopup} />;
}