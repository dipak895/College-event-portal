# College Event Management Portal

## 1. Project Title
**College Event Management Portal** – a responsive front-end website for viewing college events, reading notices and registering for events.

## 2. Project Description
This is a multi-page website built as an internship project. Students can see upcoming college events, search and filter them, read the notice board and submit an event registration form. The website uses only HTML5, CSS3, basic vanilla JavaScript and Bootstrap 5. All data (events and notices) is stored as static arrays inside JavaScript, so no backend or database is used.

## 3. Objective
- Provide a single place to see all college events and notices.
- Let students register for events using a validated form.
- Practise HTML, CSS, JavaScript and Bootstrap in one complete project.
- Build a design that works on desktop, laptop, tablet and mobile.
- Keep the code simple and easy to explain.

## 4. Features
- Responsive Bootstrap navbar with logo and toggler for mobile
- Home page with hero banner, carousel, upcoming events, latest notices, "Why use this portal", statistics, call-to-action and footer
- Events page with Bootstrap cards, **search**, **category filter** and a **details modal**
- Notice Board with category badges, **search** and a "Read More" modal
- Registration form with JavaScript validation (empty fields, valid email, 10-digit mobile number, event selection) and a success alert
- Contact form with JavaScript validation and a success message
- About page with an accordion (features, technologies, benefits, future scope)
- "Register Now" on an event card opens the registration page with that event already selected
- Events marked "Closed" show a disabled registration button

## 5. Technologies Used
| Technology | Purpose |
|------------|---------|
| HTML5 | Structure of the pages |
| CSS3 | Custom colours, hover effects, hero and footer styling |
| JavaScript (vanilla) | Search, filter, modal details, form validation, dynamic HTML |
| Bootstrap 5.3 (CDN) | Navbar, grid, cards, forms, modal, carousel, accordion, alerts, badges |

## 6. Project Structure
```
College-Event-Management/
│
├── index.html
├── events.html
├── notices.html
├── registration.html
├── about.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── logo.png
│   ├── hero.jpg
│   ├── event1.jpg
│   ├── event2.jpg
│   ├── event3.jpg
│   └── event4.jpg
│
└── README.md
```

## 7. How to Run
1. Download or copy the `College-Event-Management` folder to your computer.
2. Open the folder and double-click **`index.html`** (it opens in your default browser).
3. Use the navigation menu to visit all pages.

Notes:
- No software installation is needed.
- An **internet connection is required once** because Bootstrap is loaded from a CDN link.
- Works in Chrome, Edge, Firefox and Safari.

## 8. Future Scope
- Backend server and database to store registrations permanently
- Student login and admin login (authentication)
- Admin panel to add, edit and delete events and notices
- Email / SMS confirmation after registration
- Event feedback, certificates and attendance tracking
