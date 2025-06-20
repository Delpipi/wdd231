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
        completed: true
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
        completed: true
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
        completed: true
    },
    {
        subject: 'ITM',
        number: 111,
        title: 'Introduction to Database',
        credits: 3,
        certificate: 'Web Development',
        description: 'This course covers the basic elements of database management systems. It introduces students to the concepts of logical and physical relationships in a data model and the concepts of inner and outer joins. Students will use a computer aided software engineering (CASE) tool to design, create, and query a database.',
        technology: [
            'Mysql',
            'MySQL Workbench',
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 340,
        title: 'Web Backend Development',
        credits: 3,
        certificate: 'Web Development',
        description: 'This programming course focuses on constructing dynamic web sites using server-side languages, making use of databases and design patterns.',
        technology: [
            'Node.js',
            'Express',
            'Pnpm',
            'EJS Template',
            'Express EJS Layouts',
            'PostgreSQL'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 330,
        title: 'Frontend Web Development II',
        credits: 3,
        certificate: 'Web Development',
        description: "This course dives deeper into building dynamic web applications using the power of pure JavaScript, HTML, CSS, and Node.js – no frameworks required! You'll gain a stronger foundation in web frontend development and learn how to create interactive user interfaces, handle data, consume APIs, manage a collaborative project, and build complete web applications from scratch in a team environment.",
        technology: [
            'HTML',
            'CSS',
            'JavaScript',
            'Node.js'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 341,
        title: 'Web Services',
        credits: 3,
        certificate: 'Web Development',
        description: 'This course focuses on the backend development of dynamic, service-oriented web applications. Students will learn how to design and implement web services, how to interact with data storage, and how to use these tools to build functioning web applications.',
        technology: [
            'Rest Api',
            'MongoDB',
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 430,
        title: 'Web Full-Stack Development',
        credits: 3,
        certificate: 'Web Development',
        description: "This course will teach you how to design and build interactive web based applications using HTML, CSS, JavaScript, and a web development stack.",
        technology: [
            'HTML',
            'CSS',
            'JavaScript',
            'MongoDB',
            'Express',
            'AngularJs',
            'Node.js'
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
    const container = document.createElement('div');
    container.classList.add('course');

    const courseHeader = document.createElement('div');
    container.classList.add('course-header');

    const button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-course');
    button.classList.add(course.completed ? 'complete' : 'not-complete');
    button.textContent = `${course.subject} ${course.number}`;
    button.addEventListener('click', () => showDescription(course));

    courseHeader.appendChild(button);
    container.appendChild(courseHeader);

    return container;

    /* return `
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
    `;*/
}

function showDescription(course) {
    //console.log(course);
    dialogBox.innerHTML = `
        <div class="dialog-header">
            <h2>${course.subject} ${course.number} </h2>
            <button>X</button>
        </div>
        <div class="dialog-body">
            <h3> ${course.title}</h3 >
            <p class="credit">Credit: <span>${course.credits}</span></p>
            <p class="desc">${course.description}</p>
            <div class="tech">
                <h4>Technologies : </h4>
                <ul>${buildCourseTechnologyList(course.technology)}</ul>
            </div>
        </div>
        
    `;
    dialogBox.showModal();
}

document.querySelector('#dialogBox').addEventListener('click', () => {
    dialogBox.close();
});

window.addEventListener('click', (event) => {
    if (event.target === dialogBox) {
        dialogBox.close();
    }
});

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

    //subjectCourseList.innerHTML = filteredCourses(courses, "ALL").map(course => buildCourseCard(course)).join("");
    filteredCourses(courses, "ALL").forEach(course => subjectCourseList.appendChild(buildCourseCard(course)));

    //Filter courses List based on the selected subject
    subjectButtonList.querySelectorAll('.btn-subject').forEach(button => {

        button.addEventListener('click', () => {
            let subject = button.getAttribute('data-subject');
            subjectCourseList.innerHTML = "";
            //subjectCourseList.innerHTML = filteredCourses(courses, subject).map(course => buildCourseCard(course)).join("");
            filteredCourses(courses, subject).forEach(course => subjectCourseList.appendChild(buildCourseCard(course)));
        });
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
        const card = document.createElement('section');
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