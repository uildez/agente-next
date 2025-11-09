"use client";
import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <ContactContext.Provider value={{ showPopup, openPopup, closePopup }}>
      {children}
    </ContactContext.Provider>
  );
}

export const useContact = () => useContext(ContactContext);
