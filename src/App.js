// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Article from './components/Article';
import All from './components/All';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import NotFound from './components/NotFound';

const categories = {
  all: [
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.webp",
      title: "Top Full Stack Development Trends for 2024: What to Expect",
      body: "In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. Full",
      date: "9 February 2024",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-CSS-Frameworks-for-Front-End-Developers-A-Comprehensive-Guide.webp",
      title: "Top 11 CSS Frameworks for Front-End Developers: A Comprehensive Guide",
      body: "In the world of web development, Cascading Style Sheets (CSS) play a crucial role in",
      date: "8 February 2024",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-A-Complete-Guide-on-Backend-Development-Roles-Responsibilities-Skills-and-Salary.webp",
      title: "Backend Developers: Roles, Responsibilities, Skills, and Salary",
      body: "Websites are not only about colorful outlooks, fancy transitions, or eye-catching illustrations. These are the",
      date: "8 February 2024",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Best-IoT-Project-Ideas.webp",
      title: "Top 17 Best IoT Project Ideas",
      body: "The Internet of Things, or IoT, is all about connecting everyday objects to the internet",
      date: "6 February 2024",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-01.png",
      title: "Brainstorming in Design Thinking – A Complete Guide",
      body: "Brainstorming is a group activity where we all share ideas to solve problems, especially when",
      date: "5 February 2024",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-B2B-Digital-Marketing-Strategies.webp",
      title: "Top 15 B2B Digital Marketing Strategies in 2024 [Updated]",
      body: "It was found that 89% of the B2B buyers research the products online while making the",
      date: "3 February 2024",
    },
  ],
  fullStackDevelopment: [
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.webp",
      title: "Top Full Stack Development Trends for 2024: What to Expect",
      body: "In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. Full",
      date: "9 February 2024",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-CSS-Frameworks-for-Front-End-Developers-A-Comprehensive-Guide.webp",
      title: "Top 11 CSS Frameworks for Front-End Developers: A Comprehensive Guide",
      body: "In the world of web development, Cascading Style Sheets (CSS) play a crucial role in",
      date: "8 February 2024",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-A-Complete-Guide-on-Backend-Development-Roles-Responsibilities-Skills-and-Salary.webp",
      title: "Backend Developers: Roles, Responsibilities, Skills, and Salary",
      body: "Websites are not only about colorful outlooks, fancy transitions, or eye-catching illustrations. These are the",
      date: "8 February 2024",
    },
  ],
  dataScience: [
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      body: "Are you someone who’s not interested in coding, but wants to get placed in tech",
      date: "28 November 2023",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-1200x600.webp",
      title: "Impact of Certification Programs on Hiring Data Scientists",
      body: "Data scientists are the creators behind transforming the raw data into edible data insights. These",
      date: "15 November 2023",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title: "Top Product-Based Companies for Data Science Freshers",
      body: "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      date: "10 November 2023",
    },
  ],
  cyberSecurity: [
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      body: "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      date: "4 December 2023",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title: "What Is Hacking? Types of Hacking & More",
      body: "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      date: "25 September 2023",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1200x675.png",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      body: "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
      date: "27 December 2022",
    },
  ],
  career: [
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image-1200x675.jpg",
      title: "Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
      body: "Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?",
      date: "2 February 2024",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      title: "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      body: "If your New Year resolution consists of building a successful tech career in 2024, then",
      date: "19 January 2024",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
      title: "UI/UX Designer Job Description and Roles & Responsibilities",
      body: "UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
      date: "13 December 2023",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <nav className="">
        <ul className="nav justify-content-center nav-underline bg-light">
          <li className="nav-item"><Link to="/" className="nav-link text-secondary fw-bold">ALL</Link></li>
          <li className="nav-item"><Link to="/category/full-stack-development" className="nav-link text-secondary fw-bold">FULL STACK DEVELOPMENT</Link></li>
          <li className="nav-item"><Link to="/category/data-science" className="nav-link text-secondary fw-bold">DATA SCIENCE</Link></li>
          <li className="nav-item"><Link to="/category/cyber-security" className="nav-link text-secondary fw-bold">CYBER SECURITY</Link></li>
          <li className="nav-item"><Link to="/category/career" className="nav-link text-secondary fw-bold">CAREER</Link></li>
        </ul>
      </nav>

      <Routes>
          <Route exact path="/" element={<All all={ categories.all } />}></Route>
          <Route exact path="/home" element={<All all={ categories.all } />}></Route>
          <Route exact path="/category/full-stack-development" element={<FullStackDevelopment fsd={ categories.fullStackDevelopment } />}></Route>
          <Route exact path="/category/data-science" element={<DataScience ds={ categories.dataScience } />}></Route>
          <Route exact path="/category/cyber-security" element={<CyberSecurity cs={ categories.cyberSecurity } />}></Route>
          <Route exact path="/category/career" element={<Career cr={ categories.career } />}></Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
