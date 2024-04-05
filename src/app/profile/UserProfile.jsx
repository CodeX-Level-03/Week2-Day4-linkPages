import Link from "next/link";
import React from "react";

export default function UserProfile({ userProfile }) {
  console.log(userProfile);

  return (
    <main>
          <  Link href = "/">Home</Link>

      <h1>{userProfile.name}</h1>
      <p>{userProfile.Bio}</p>
      <h3>Hobbies</h3>
      { userProfile.Hobbies ?   (<ul>

        {userProfile.Hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>) : <p> No Hobbies Listed</p>}
    </main>
  );
}
