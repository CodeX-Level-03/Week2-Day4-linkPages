
# Objective
This assignment is designed to reinforce skills in creating dynamic user interfaces with React, utilizing conditional rendering, props, and client-side navigation with Next.js. Instead of replicating the demo code, these concepts will apply in a new context by building a user profile page that dynamically displays user information and includes navigation to different sections of the profile.

## Instructions
### Part 1: User Profile Setup
- Create a User Profile Component:

Name the component UserProfile to display a user's name, biography, and a list of hobbies. This information will be passed as props to the component.
- Implement Conditional Rendering:

Within the UserProfile component, use conditional rendering to display a message if the user's biography is not provided. For example, "No biography available".
### Part 2: Dynamic Hobbies List
#### Rendering the Hobbies List:
- Passed a list of hobbies to the UserProfile component as props. Used the map function to display each hobby as an item in an unordered list.
- If the list of hobbies is empty, display a message like "No hobbies listed".
### Part 3: Navigation and Page Layout
#### Implement Client-Side Navigation:

- Created a simple navigation bar component that allows the user to navigate between the 'Home' page and the 'User Profile' page without reloading the page. Use the Link component from Next.js for navigation links.
#### Create a Home Page and Profile Page:

- Set up two pages in Next.js app folder: page.js (Home) and profile directory (page.js).
- Included the navigation bar in both pages to allow easy navigation between them.
### Part 4: Fetching User Data
#### Simulate Fetching User Data:
On the 'User Profile' page, simulated fetching user data (e.g., name, biography, hobbies) by defining a user object and passing it as props to the UserProfile component.



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!