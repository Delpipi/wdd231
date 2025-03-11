const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

//Group courses by certificate
const coursesByCertificate = courses.reduce((acc, course) => {
    if (!acc[course.certificate]) {
        acc[course.certificate] = [];
    }
    acc[course.certificate].push(course);
    return acc;
}, {});

function filteredCourses(courses, subject) {
    return subject === "ALL" ? courses : courses.filter(course => course.subject === subject);
}

function calculateTotalCredit(courses) {
    return courses.reduce((total, course) => total + course.credits, 0);
}

//select html element using Document Object Model(DOM)
const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const links = document.querySelectorAll('nav a');
const currentYear = document.querySelector('#currentYear');
const lastModified = document.querySelector('#lastModified');
const certicateList = document.querySelector('#certicateList');

//Get current Date and time
const today = new Date(document.lastModified);

//implement toggle menu in mobile
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navigation.classList.toggle('open');
});

//implement active menu element
links.forEach(link => {

    link.addEventListener('click', (event) => {

        //remove 'active' class from each menu link
        links.forEach(link => link.classList.remove('active'));

        //add active class to the current link
        event.target.classList.add('active');
    });

});

function buildCourseTechnologyList(technologies) {
    return technologies.map(tech => `<li>${tech}</li>`).join("");
}

function buildCourseCard(course) {

    return `
        <div class="course">
            <div class="course-header">
                <button type="button" class="btn btn-course ${course.completed ? 'complete' : 'not-complete'}">
                ${course.subject} ${course.number} 
                </button>
            </div>
            <div class="course-description">
                <h3>${course.title}</h3>
                <p class="credit">Credit: <span>${course.credits}</span></p>
                <p class="desc">${course.description}</p>
                <div class="tech">
                    <h4>Technologies : </h4>
                    <ul>${buildCourseTechnologyList(course.technology)}</ul>
                </div>
            </div>
        </div>
    `;
}

function buildSubjectButtonList(subjects) {

    //create subject Button element container
    const container = document.createElement('div');
    container.classList.add('subject-nav');

    container.innerHTML = `<button type="button" class="btn btn-subject" data-subject="ALL">ALL</button>
    ${subjects.map(subject => `<button type="button" class="btn btn-subject" data-subject="${subject}">${subject}</button>`).join("")}
    `;

    return container;
}

function buildCardBody(courses) {

    //create card header element container
    const container = document.createElement('div');
    container.classList.add('card-body');

    //create unique subject for certificate
    const uniqueSubjects = [... new Set(courses.map(course => course.subject))];

    const subjectButtonList = buildSubjectButtonList(uniqueSubjects);

    //create subject Course List element container
    const subjectCourseList = document.createElement('div');
    subjectCourseList.classList.add('subject-courses');
    subjectCourseList.innerHTML = filteredCourses(courses, "ALL").map(course => buildCourseCard(course)).join("");

    //Filter courses List based on the selected subject
    subjectButtonList.querySelectorAll('.btn-subject').forEach(button => {
        button.addEventListener('click', () => {
            let subject = button.getAttribute('data-subject');
            subjectCourseList.innerHTML = filteredCourses(courses, subject).map(course => buildCourseCard(course)).join("");
        });
    });

    //Toggle course's description
    subjectCourseList.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('btn-course')) {
            //Get the corresponding description
            const description = event.target.closest('.course-header').nextElementSibling;

            //Toggle description visibility
            description.classList.toggle('visible');
        }
    });

    container.appendChild(subjectButtonList);
    container.appendChild(subjectCourseList);

    return container;
}

function buildCardHeader(certificateTitle, totalCredit) {

    //create card header element container
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    cardHeader.innerHTML = `<div>
    <h2>${certificateTitle} Certificate</h2>
    <p class="totalCredit">Total Credit: ${totalCredit}</p>
    </div>
    `;

    return cardHeader;
}

function buildCardCertficateList() {

    for (const certificate in coursesByCertificate) {

        //Get the corresponding courses
        let courses = coursesByCertificate[certificate];

        //create card element container
        const card = document.createElement('div');
        card.classList.add('card');

        //Compute total credit
        const totalCredit = calculateTotalCredit(courses);

        //Get card header
        const cardHeader = buildCardHeader(certificate, totalCredit);

        //Get card body
        const cardBody = buildCardBody(courses);

        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        //Add each card created to certiface list
        certicateList.appendChild(card);
    }

}

//Update html element content
currentYear.textContent = today.getFullYear();
lastModified.textContent = today;

buildCardCertficateList();