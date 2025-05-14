// Sample data (replace with actual data retrieval logic)
const problemStatement = "This is a sample problem statement. Replace this with the actual problem statement collected earlier.";
const personalInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900"
};
const skills = ["JavaScript", "HTML", "CSS", "React", "Node.js"];

// Populate the page with data
document.getElementById('problemStatement').textContent = problemStatement;

const personalInfoHtml = `
    <p><strong>Name:</strong> ${personalInfo.name}</p>
    <p><strong>Email:</strong> ${personalInfo.email}</p>
    <p><strong>Phone:</strong> ${personalInfo.phone}</p>
`;
document.getElementById('personalInfo').innerHTML = personalInfoHtml;

const skillsHtml = skills.map(skill => `<span class="skill">${skill}</span>`).join(' ');
document.getElementById('skills').innerHTML = skillsHtml;

// PDF download functionality
document.getElementById('downloadPdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;

    html2canvas(document.body).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;

        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('output.pdf');
    });
});