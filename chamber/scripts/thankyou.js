const formData = new URLSearchParams(window.location.search);

const container = document.querySelector('#result');

container.innerHTML = `
    <h3>Thank you, for joining the Chamber of Commerce! We will contact you soon.</h3>
    <p><strong>First Name:</strong> ${formData.get('firstname')}</p>
    <p><strong>Last Name:</strong> ${formData.get('lastname')}</p>
    <p><strong>Email:</strong> ${formData.get('email')}</p>
    <p><strong>Phone Number:</strong> ${formData.get('phoneNumber')}</p>
    <p><strong>Organizational:</strong> ${formData.get('organizationName')}</p>
    <p><strong>Current Timestamp:</strong> ${formData.get('timestamp')}</p>
`;