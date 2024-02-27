import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  const populateContacts = contacts.map((contact) => {
    return (
      <Card
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
      />
    );
  });

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {populateContacts}
    </div>
  );
}

export default App;
