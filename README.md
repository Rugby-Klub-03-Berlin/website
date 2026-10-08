# **Rugby Klub 03 Berlin \- Official Website**

Welcome to the official repository for the Rugby Klub 03 Berlin web platform. This project serves as the digital home for our 500+ member community, providing multilingual news, match reports, team rosters, and automated scheduling.  
The platform is built with a modern, decoupled architecture, separating the frontend presentation from the backend content management to ensure blazing-fast load times and a seamless editing experience for club staff.

## **📝 For Club Staff & Content Editors**

If you are a coach, board member, or staff member looking to update the website content (e.g., posting a new match report, adding a player, or updating the calendar), **you do not need to edit this code.**

1. Navigate to our secure content portal at: \[Insert Production URL\]/admin (e.g., www.rk03berlin.de/admin).  
2. Log in with your authorized Sanity credentials.  
3. Use the visual interface to draft and publish your updates. The website will automatically rebuild and display your changes.

## **💻 System Architecture & Tech Stack**

For developers and contributors, this platform is engineered using a Headless CMS approach.

* **Frontend:** [Next.js 13+](https://nextjs.org/) utilizing the App Router for optimal Server-Side Rendering (SSR) and Static Site Generation (SSG).  
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) for rapid, responsive UI development.  
* **Backend / CMS:** [Sanity CMS](https://www.sanity.io/). Deployed as an embedded studio directly within the Next.js app (/admin route) to manage custom data schemas.  
* **Internationalization (i18n):** Powered by next-intl. Middleware intercepts requests to serve localized content (German, English, French) dynamically.  
* **Hosting:** Vercel (Edge Network) for instantaneous deployments and global CDN distribution.

## **📂 Project Structure**

A quick guide to navigating the codebase for future contributors:

* /app \- Contains the Next.js App Router frontend logic, including API routes and dynamic pages.  
* /app/(studio)/admin \- The embedded Sanity Studio backend interface.  
* /components \- Reusable UI components (Hero sections, Navbar, Data Cards).  
* /sanity \- Backend configuration, including all data models (/schemas) for Blogs, Teams, Events, and Game Reports.  
* /locales \- JSON translation dictionaries (de.json, en.json, fr.json) for the i18n implementation.

## **🛠 Local Development Guide**

Want to contribute to the codebase? Follow these steps to spin up the local development environment.

### **Prerequisites**

* Node.js (v18.x or later recommended)  
* pnpm (Package manager)

### **Installation**

1. **Clone the repository:**  
   git clone \[https://github.com/\](https://github.com/)\[YOUR-ORGANIZATION-OR-USERNAME\]/rugby-klub-03-berlin.git  
   cd rugby-klub-03-berlin

2. **Install dependencies:**  
   pnpm install

3. **Configure Environment Variables:**  
   Create a .env.local file in the root directory. To connect your local frontend to the club's live database (read-only for development), request the Project ID from the lead maintainer and add it here:  
   NEXT\_PUBLIC\_SANITY\_PROJECT\_ID="your\_project\_id\_here"  
   NEXT\_PUBLIC\_SANITY\_DATASET="production"

4. **Run the development server:**  
   pnpm dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the frontend.  
Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) to view the local Sanity Studio instance.

## **🤝 Contributing**

We welcome contributions from the community\! If you find a bug or have a feature request, please open an Issue. If you want to contribute code, please fork the repository, create a feature branch, and submit a Pull Request.