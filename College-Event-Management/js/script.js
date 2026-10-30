/* =====================================================
   College Event Management Portal - script.js
   Plain (vanilla) JavaScript only. No libraries.
   One file is shared by all pages. Each section checks
   whether its page elements exist before running.
   ===================================================== */


/* ---------- 1. PROJECT DATA (arrays of objects) ---------- */

// List of events. Each event is an object with properties.
const events = [
    {
        id: 1,
        name: "Independence Day Cultural Program",
        date: "15 August 2026",
        time: "9:00 AM",
        venue: "Auditorium",
        category: "Cultural",
        status: "Closed",
        image: "event1.jpg",
        description: "Flag hoisting, patriotic songs, dance and drama by students.",
        details: "The college celebrated Independence Day with flag hoisting, a march past by NCC cadets, patriotic songs, group dances and a short drama. Registration for this event is now closed."
    },
    {
        id: 2,
        name: "Hackathon",
        date: "15 september 2026",
        time: "10:00 AM",
        venue: "College Auditorium",
        category: "Technical",
        status: "closed",
        image: "event2.jpg",
        description: "A full-day fest with project exhibition, quiz and tech talks.",
        details: "Technical Fest includes a project exhibition, a technical quiz, a poster presentation and guest lectures by industry experts. Students from all branches can participate individually or in teams of up to three."
    },
    {
        id: 3,
        name: "Coding Competition",
        date: "22 september 2026",
        time: "11:00 AM",
        venue: "cse-107",
        category: "Technical",
        status: "closed",
        image: "event2.jpg",
        description: "Solve programming problems against the clock and win prizes.",
        details: "The competition has two rounds: a written aptitude round and a live coding round. Students can use C, C++, Java or Python. Winners receive certificates and prizes."
    },
    {
        id: 4,
        name: "Git and Github",
        date: "29 september 2026",
        time: "2:00 PM",
        venue: "cse-107",
        category: "Workshop",
        status: "closed",
        image: "event3.jpg",
        description: "Hands-on workshop on HTML, CSS, JavaScript and Bootstrap.",
        details: "A beginner-friendly workshop where students build a small responsive website using HTML, CSS, JavaScript and Bootstrap. Please bring your laptop. Participation certificates will be provided."
    },
    {
        id: 5,
        name: "Fresher's Welcome",
        date: "28 july 2026",
        time: "4:00 PM",
        venue: "Open Air Theatre",
        category: "Cultural",
        status: "closed",
        image: "event1.jpg",
        description: "A musical evening to welcome the first-year students.",
        details: "Senior students welcome the new batch with music, dance, a talent show and the Mr. and Ms. Fresher contest. Light refreshments will be served."
    },
    {
        id: 6,
        name: "umang 2027",
        date: "12 january 2027",
        time: "8:00 AM",
        venue: "College Sports Ground",
        category: "Sports",
        status: "Open",
        image: "event4.jpg",
        description: "Track and field, cricket, football and fun games for everyone.",
        details: "The annual Sports Day has track and field events, a cricket match, football, kabaddi and fun games. Students must wear sports uniform and carry their college ID card."
    }
];

// List of notices.
const notices = [
    {
        id: 1,
        title: "Mid Semester Examination Schedule",
        date: "02 October 2026",
        category: "Academic",
        description: "The mid semester exam time table has been published for all branches.",
        details: "Mid semester examinations will begin from 20 October 2026. The detailed time table is available in the examination section. Students must carry their admit card and college ID card."
    },
    {
        id: 2,
        title: "Last Date for Fee Submission",
        date: "12 september 2026",
        category: "Important",
        description: "Students must pay the pending semester fee before the last date.",
        details: "The last date for semester fee payment is 12 October 2026. A late fine will be charged after this date. Fees can be paid at the accounts office between 10 AM and 3 PM."
    },
    {
        id: 3,
        title: "Technical Fest Registration Open",
        date: "01 september 2026",
        category: "Event",
        description: "Register now for the annual Technical Fest to be held on 15 October.",
        details: "Registration for Technical Fest is open on the Registration page of this portal. Students can choose events such as quiz, project exhibition and poster presentation."
    },
    {
        id: 4,
        title: "Library Timing Change",
        date: "04 September 2026",
        category: "General",
        description: "The central library will remain open until 7 PM on working days.",
        details: "From 1 October 2026 the central library will be open from 9 AM to 7 PM on all working days. Students should return overdue books to avoid a fine."
    },
    {
        id: 5,
        title: "Internship Application Deadline",
        date: "30 august 2026",
        category: "Important",
        description: "Final-year students should submit internship forms to the T&P cell.",
        details: "Students applying for summer internships must submit the filled form with a resume to the Training and Placement cell by 10 October 2026."
    },
    {
        id: 6,
        title: "Coding Club Meeting",
        date: "25 September 2026",
        category: "Event",
        description: "Weekly Coding Club meeting will be held every Friday in Computer Lab 2.",
        details: "The Coding Club meets every Friday at 4 PM in Computer Lab 2. This week we will discuss problem solving practice for the coding competition."
    },
    {
        id: 7,
        title: "Assignment Submission - Web Technology",
        date: "24 September 2026",
        category: "Academic",
        description: "Web Technology assignment 2 must be submitted to the subject teacher.",
        details: "Assignment 2 of Web Technology must be submitted by 8 October 2026. The assignment includes designing a responsive web page using Bootstrap."
    },
    {
        id: 8,
        title: "Campus Cleanliness Drive",
        date: "20 September 2026",
        category: "General",
        description: "All students are invited to join the cleanliness drive on Saturday.",
        details: "The NSS unit is organising a campus cleanliness drive on 3 October 2026 at 8 AM. Volunteers will receive participation certificates."
    }
];


/* ---------- 2. HELPER FUNCTIONS ---------- */

// Returns the Bootstrap badge colour for a notice category.
function getBadgeClass(category) {
    if (category === "Important") {
        return "bg-danger";
    } else if (category === "Academic") {
        return "bg-primary";
    } else if (category === "Event") {
        return "bg-success";
    } else {
        return "bg-secondary";
    }
}

// Returns the Bootstrap badge colour for an event category.
function getEventBadgeClass(category) {
    if (category === "Technical") {
        return "bg-primary";
    } else if (category === "Cultural") {
        return "bg-danger";
    } else if (category === "Workshop") {
        return "bg-success";
    } else {
        return "bg-warning text-dark";
    }
}

// Finds one event object using its id.
function findEventById(id) {
    for (let i = 0; i < events.length; i++) {
        if (events[i].id === id) {
            return events[i];
        }
    }
    return null;
}

// Finds one notice object using its id.
function findNoticeById(id) {
    for (let i = 0; i < notices.length; i++) {
        if (notices[i].id === id) {
            return notices[i];
        }
    }
    return null;
}

// Builds the "Register Now" button (or a disabled button if closed).
function createRegisterButton(ev) {
    if (ev.status === "Open") {
        return '<a href="registration.html?event=' + ev.id + '" class="btn btn-warning btn-sm">Register Now</a>';
    } else {
        return '<button class="btn btn-secondary btn-sm" disabled>Registration Closed</button>';
    }
}


/* ---------- 3. EVENTS (used on index.html and events.html) ---------- */

// Creates the HTML of one event card (dynamic HTML generation).
function createEventCard(ev) {
    let html = "";
    html += '<div class="col-md-6 col-lg-4">';
    html += '  <div class="card event-card h-100 shadow-sm">';
    html += '    <img src="images/' + ev.image + '" class="card-img-top" alt="' + ev.name + '">';
    html += '    <div class="card-body d-flex flex-column">';
    html += '      <div class="mb-2">';
    html += '        <span class="badge ' + getEventBadgeClass(ev.category) + '">' + ev.category + '</span> ';
    html += '        <span class="badge bg-light text-dark border">' + ev.status + '</span>';
    html += '      </div>';
    html += '      <h5 class="card-title">' + ev.name + '</h5>';
    html += '      <p class="event-info mb-1"><strong>Date:</strong> ' + ev.date + '</p>';
    html += '      <p class="event-info mb-1"><strong>Time:</strong> ' + ev.time + '</p>';
    html += '      <p class="event-info mb-2"><strong>Venue:</strong> ' + ev.venue + '</p>';
    html += '      <p class="card-text text-muted">' + ev.description + '</p>';
    html += '      <div class="mt-auto d-flex gap-2 flex-wrap">';
    html += '        <button class="btn btn-outline-primary btn-sm" onclick="showEventDetails(' + ev.id + ')">View Details</button>';
    html +=          createRegisterButton(ev);
    html += '      </div>';
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
    return html;
}

// Shows a list of events inside the element with id="eventsContainer".
function displayEvents(list) {
    const container = document.getElementById("eventsContainer");
    let html = "";

    for (let i = 0; i < list.length; i++) {
        html += createEventCard(list[i]);
    }

    if (list.length === 0) {
        html = '<div class="col-12"><div class="alert alert-warning text-center">No events found. Try a different search.</div></div>';
    }

    container.innerHTML = html;
    document.getElementById("eventCount").textContent = list.length + " event(s) found";
}

// Search + category filter for the events page.
function filterEvents() {
    const searchText = document.getElementById("searchEvent").value.toLowerCase().trim();
    const selectedCategory = document.getElementById("categoryFilter").value;
    const result = [];

    for (let i = 0; i < events.length; i++) {
        const ev = events[i];
        const textToSearch = (ev.name + " " + ev.venue + " " + ev.description).toLowerCase();

        const matchesSearch = textToSearch.includes(searchText);
        const matchesCategory = (selectedCategory === "All") || (ev.category === selectedCategory);

        if (matchesSearch && matchesCategory) {
            result.push(ev);
        }
    }

    displayEvents(result);
}

// Fills the modal with event details and opens it.
function showEventDetails(id) {
    const ev = findEventById(id);
    if (ev === null) {
        return;
    }

    document.getElementById("eventModalTitle").textContent = ev.name;
    document.getElementById("eventModalImage").src = "images/" + ev.image;
    document.getElementById("eventModalImage").alt = ev.name;
    document.getElementById("eventModalCategory").textContent = ev.category;
    document.getElementById("eventModalCategory").className = "badge " + getEventBadgeClass(ev.category);
    document.getElementById("eventModalDate").textContent = ev.date;
    document.getElementById("eventModalTime").textContent = ev.time;
    document.getElementById("eventModalVenue").textContent = ev.venue;
    document.getElementById("eventModalDetails").textContent = ev.details;
    document.getElementById("eventModalAction").innerHTML = createRegisterButton(ev);

    const modal = new bootstrap.Modal(document.getElementById("eventModal"));
    modal.show();
}

// Shows the first 3 open events on the home page.
function displayHomeEvents() {
    const container = document.getElementById("homeEvents");
    let html = "";
    let count = 0;

    for (let i = 0; i < events.length; i++) {
        if (events[i].status === "Open" && count < 3) {
            html += createEventCard(events[i]);
            count++;
        }
    }
    container.innerHTML = html;
}


/* ---------- 4. NOTICES (used on index.html and notices.html) ---------- */

// Creates the HTML of one notice card.
function createNoticeCard(n) {
    let html = "";
    html += '<div class="col-md-6">';
    html += '  <div class="card notice-card h-100 shadow-sm">';
    html += '    <div class="card-body d-flex flex-column">';
    html += '      <div class="d-flex justify-content-between align-items-start mb-2">';
    html += '        <span class="badge ' + getBadgeClass(n.category) + '">' + n.category + '</span>';
    html += '        <small class="text-muted">' + n.date + '</small>';
    html += '      </div>';
    html += '      <h5 class="card-title">' + n.title + '</h5>';
    html += '      <p class="card-text text-muted">' + n.description + '</p>';
    html += '      <button class="btn btn-outline-primary btn-sm mt-auto align-self-start" onclick="showNoticeDetails(' + n.id + ')">Read More</button>';
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
    return html;
}

// Shows a list of notices inside id="noticesContainer".
function displayNotices(list) {
    const container = document.getElementById("noticesContainer");
    let html = "";

    for (let i = 0; i < list.length; i++) {
        html += createNoticeCard(list[i]);
    }

    if (list.length === 0) {
        html = '<div class="col-12"><div class="alert alert-warning text-center">No notices found. Try a different search.</div></div>';
    }

    container.innerHTML = html;
}

// Search function for notices (title, description and category).
function searchNotices() {
    const searchText = document.getElementById("searchNotice").value.toLowerCase().trim();
    const result = [];

    for (let i = 0; i < notices.length; i++) {
        const n = notices[i];
        const textToSearch = (n.title + " " + n.description + " " + n.category).toLowerCase();

        if (textToSearch.includes(searchText)) {
            result.push(n);
        }
    }

    displayNotices(result);
}

// Opens the notice modal with full details.
function showNoticeDetails(id) {
    const n = findNoticeById(id);
    if (n === null) {
        return;
    }

    document.getElementById("noticeModalTitle").textContent = n.title;
    document.getElementById("noticeModalDate").textContent = n.date;
    document.getElementById("noticeModalCategory").textContent = n.category;
    document.getElementById("noticeModalCategory").className = "badge " + getBadgeClass(n.category);
    document.getElementById("noticeModalDetails").textContent = n.details;

    const modal = new bootstrap.Modal(document.getElementById("noticeModal"));
    modal.show();
}

// Shows the latest 3 notices on the home page.
function displayHomeNotices() {
    const container = document.getElementById("homeNotices");
    let html = "";

    for (let i = 0; i < 3; i++) {
        html += createNoticeCard(notices[i]);
    }
    container.innerHTML = html;
}


/* ---------- 5. FORM HELPER FUNCTIONS ---------- */

// Marks a field as invalid and shows an error message under it.
function setError(fieldId, message) {
    document.getElementById(fieldId).classList.add("is-invalid");
    document.getElementById(fieldId + "Error").textContent = message;
}

// Removes the error style from a field.
function clearError(fieldId) {
    document.getElementById(fieldId).classList.remove("is-invalid");
}

// Checks the email format, for example name@example.com
function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// Checks that the mobile number has exactly 10 digits.
function isValidMobile(mobile) {
    const pattern = /^[0-9]{10}$/;
    return pattern.test(mobile);
}

// Shows a Bootstrap success alert inside the given element.
function showSuccessMessage(elementId, message, extraText) {
    let html = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
    html += '<strong>' + message + '</strong>';
    if (extraText !== "") {
        html += '<br><small>' + extraText + '</small>';
    }
    html += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
    html += '</div>';
    document.getElementById(elementId).innerHTML = html;
}


/* ---------- 6. REGISTRATION FORM (registration.html) ---------- */

// Adds the open events to the "Select Event" dropdown.
function fillEventDropdown() {
    const select = document.getElementById("eventSelect");

    for (let i = 0; i < events.length; i++) {
        if (events[i].status === "Open") {
            const option = document.createElement("option");
            option.value = events[i].id;
            option.textContent = events[i].name + " (" + events[i].date + ")";
            select.appendChild(option);
        }
    }

    // If the user came from "Register Now", select that event automatically.
    const params = new URLSearchParams(window.location.search);
    const eventId = params.get("event");
    if (eventId !== null) {
        select.value = eventId;
    }
}

// Validates every field. Returns true only if all fields are correct.
function validateRegistration() {
    let isValid = true;

    const fullName = document.getElementById("fullName").value.trim();
    const collegeId = document.getElementById("collegeId").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const eventSelect = document.getElementById("eventSelect").value;

    // Clear old errors first.
    const fieldIds = ["fullName", "collegeId", "email", "mobile", "branch", "semester", "eventSelect"];
    for (let i = 0; i < fieldIds.length; i++) {
        clearError(fieldIds[i]);
    }

    if (fullName === "") {
        setError("fullName", "Please enter your full name.");
        isValid = false;
    } else if (fullName.length < 3) {
        setError("fullName", "Name must have at least 3 characters.");
        isValid = false;
    }

    if (collegeId === "") {
        setError("collegeId", "Please enter your college ID.");
        isValid = false;
    } else if (collegeId.length < 5) {
        setError("collegeId", "College ID must have at least 5 characters.");
        isValid = false;
    }

    if (email === "") {
        setError("email", "Please enter your email address.");
        isValid = false;
    } else if (!isValidEmail(email)) {
        setError("email", "Please enter a valid email, e.g. name@example.com");
        isValid = false;
    }

    if (mobile === "") {
        setError("mobile", "Please enter your mobile number.");
        isValid = false;
    } else if (!isValidMobile(mobile)) {
        setError("mobile", "Mobile number must be exactly 10 digits.");
        isValid = false;
    }

    if (branch === "") {
        setError("branch", "Please select your branch.");
        isValid = false;
    }

    if (semester === "") {
        setError("semester", "Please select your year/semester.");
        isValid = false;
    }

    if (eventSelect === "") {
        setError("eventSelect", "Please select an event.");
        isValid = false;
    }

    return isValid;
}

// Runs when the registration form is submitted.
function handleRegistration(event) {
    event.preventDefault(); // stop the page from reloading

    if (validateRegistration()) {
        const name = document.getElementById("fullName").value.trim();
        const eventObj = findEventById(parseInt(document.getElementById("eventSelect").value));

        showSuccessMessage(
            "formMessage",
            "Registration submitted successfully!",
            "Thank you, " + name + ". You are registered for " + eventObj.name + "."
        );
        document.getElementById("registrationForm").reset();
        window.scrollTo(0, 0);
    } else {
        document.getElementById("formMessage").innerHTML =
            '<div class="alert alert-danger">Please correct the errors shown below and try again.</div>';
    }
}


/* ---------- 7. CONTACT FORM (contact.html) ---------- */

function validateContact() {
    let isValid = true;

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    const fieldIds = ["contactName", "contactEmail", "contactSubject", "contactMessage"];
    for (let i = 0; i < fieldIds.length; i++) {
        clearError(fieldIds[i]);
    }

    if (name === "") {
        setError("contactName", "Please enter your name.");
        isValid = false;
    }

    if (email === "") {
        setError("contactEmail", "Please enter your email address.");
        isValid = false;
    } else if (!isValidEmail(email)) {
        setError("contactEmail", "Please enter a valid email address.");
        isValid = false;
    }

    if (subject === "") {
        setError("contactSubject", "Please enter a subject.");
        isValid = false;
    }

    if (message === "") {
        setError("contactMessage", "Please write your message.");
        isValid = false;
    } else if (message.length < 10) {
        setError("contactMessage", "Message must have at least 10 characters.");
        isValid = false;
    }

    return isValid;
}

function handleContact(event) {
    event.preventDefault();

    if (validateContact()) {
        showSuccessMessage(
            "contactMessageBox",
            "Message sent successfully!",
            "Thank you for contacting us. We will reply soon."
        );
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("contactMessageBox").innerHTML =
            '<div class="alert alert-danger">Please correct the errors shown below and try again.</div>';
    }
}


/* ---------- 8. PAGE SETUP (runs when the page opens) ---------- */

// Footer year (uses the Date object).
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Home page
if (document.getElementById("homeEvents")) {
    displayHomeEvents();
    displayHomeNotices();
    document.getElementById("statEvents").textContent = events.length;
    document.getElementById("statNotices").textContent = notices.length;
}

// Events page
if (document.getElementById("eventsContainer")) {
    displayEvents(events);
    document.getElementById("searchEvent").addEventListener("input", filterEvents);
    document.getElementById("categoryFilter").addEventListener("change", filterEvents);
    document.getElementById("resetFilters").addEventListener("click", function () {
        document.getElementById("searchEvent").value = "";
        document.getElementById("categoryFilter").value = "All";
        filterEvents();
    });
}

// Notices page
if (document.getElementById("noticesContainer")) {
    displayNotices(notices);
    document.getElementById("searchNotice").addEventListener("input", searchNotices);
}

// Registration page
if (document.getElementById("registrationForm")) {
    fillEventDropdown();
    document.getElementById("registrationForm").addEventListener("submit", handleRegistration);
}

// Contact page
if (document.getElementById("contactForm")) {
    document.getElementById("contactForm").addEventListener("submit", handleContact);
}
