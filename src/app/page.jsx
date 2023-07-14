'use client'

import { useState } from "react";
import ContactList from './components/ContactList'
import dummyContacts from './components/ContactList'

export default function Home() {
  const [contacts, setContacts] = useState(dummyContacts)
  console.log("Contacts: ", dummyContacts)
  return (
    <>
      <ContactList />
    </>
  )
}
