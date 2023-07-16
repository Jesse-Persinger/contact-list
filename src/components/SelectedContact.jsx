import { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId }) {
    const [contact, setContact] = useState();
    console.log(selectedContactId)

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/${selectedContactId}`
                );
                const result = await response.json();
                setContact(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContact();
        console.log(contact);
    }, []);

    return (
        <p>some words</p>
    );
}