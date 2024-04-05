import React from 'react';
import Link from 'next/link';
import UserProfile from './profile/page';


export default function Home() {
  return (
    <main >
    <ul>
      <li>
      <Link href = '/about' >About Page</Link>
      </li>
      <li>
      <Link href = '/profile' >Profile Page</Link>
      </li>
    </ul>

    
    
     <h1>Home Page</h1>
     <div>
      <p>
        Welcome to the Home Page. This is a landing page for React page link assignment. It provides link to couple of relevant pages containing information about the users.
</p>
<p>
  The About Page provides information about the project. The Profile Page provides information about the user.
</p>
     </div>
    

    </main>
  );
}
