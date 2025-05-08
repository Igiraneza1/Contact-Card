import type React from "react";

export interface ContactCardProps {
  name: string;
  email: string;
  phone?: number; 
}

const ContactCard: React.FC<ContactCardProps> = ({ name, email, phone }) => {
  return (
    <div className="contact">
      <h1>My contact</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      {phone && <p><strong>Phone:</strong> {phone}</p>}
    </div>
  );
};

export default ContactCard;
