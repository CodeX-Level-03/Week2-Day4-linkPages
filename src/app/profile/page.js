import React from "react";
import Link from "next/link";
import UserProfile from "./UserProfile";

export default function Profile() {
  const userDetails = {
    name: "Will Smith",
    Bio: "Will Smith is an American actor, producer, and rapper. Smith has been nominated for five Golden Globe Awards and two Academy Awards, and has won four Grammy Awards.",
    Hobbies: ["Music", "Travel", "Sports", "Philanthropy"],
  };
  return (
    <div>
      
      <UserProfile userProfile={userDetails} />
    </div>
    
  );
}
