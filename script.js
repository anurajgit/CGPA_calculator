// // script.js
// function generateCourseFields() {
//     const numCourses = document.getElementById('numCourses').value;
//     const courseFields = document.getElementById('courseFields');
//     courseFields.innerHTML = '';

//     for (let i = 1; i <= numCourses; i++) {
//         const courseDiv = document.createElement('div');
//         courseDiv.className = 'course';
//         courseDiv.innerHTML = `
//             <label for="course${i}">Course ${i}:</label>
//             <input type="number" id="credits${i}" placeholder="Credits" required>
//             <input type="text" id="grade${i}" placeholder="Grade" required>
//         `;
//         courseFields.appendChild(courseDiv);
//     }

//     document.getElementById('sgpaForm').style.display = 'block';
// }

// function calculateSGPA() {
//     const grades = {
//         'O': 10,
//         'E': 8,
//         'A': 7,
//         'B': 6,
//         'C': 5,
//         'D': 4,
//         'F': 0
//     };

//     const numCourses = document.getElementById('numCourses').value;
//     let totalCredits = 0;
//     let totalPoints = 0;

//     for (let i = 1; i <= numCourses; i++) {
//         let credits = parseFloat(document.getElementById(`credits${i}`).value);
//         let grade = document.getElementById(`grade${i}`).value.toUpperCase();

//         if (grades.hasOwnProperty(grade)) {
//             totalCredits += credits;
//             totalPoints += credits * grades[grade];
//         } else {
//             alert(`Invalid grade entered for Course ${i}`);
//             return;
//         }
//     }

//     let sgpa = totalPoints / totalCredits;
//     document.getElementById('result').innerText = `SGPA: ${sgpa.toFixed(2)}`;
// }





// script.js
function generateCourseFields() {
    const numCourses = document.getElementById('numCourses').value;
    const courseFields = document.getElementById('courseFields');
    courseFields.innerHTML = '';

    for (let i = 1; i <= numCourses; i++) {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course';
        courseDiv.innerHTML = `
            <label for="course${i}">Course ${i}:</label>
            <input type="text" id="subject${i}" placeholder="Subject" required>
            <input type="number" id="credits${i}" placeholder="Credits" required>
            <input type="text" id="grade${i}" placeholder="Grade" required>
        `;
        courseFields.appendChild(courseDiv);
    }

    document.getElementById('cgpaForm').style.display = 'block';
}

function calculateCGPA() {
    const grades = {
        'O': 10,
        'E': 8,
        'A': 7,
        'B': 6,
        'C': 5,
        'D': 4,
        'F': 0
    };

    const numCourses = document.getElementById('numCourses').value;
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 1; i <= numCourses; i++) {
        let credits = parseFloat(document.getElementById(`credits${i}`).value);
        let grade = document.getElementById(`grade${i}`).value.toUpperCase();

        if (grades.hasOwnProperty(grade)) {
            totalCredits += credits;
            totalPoints += credits * grades[grade];
        } else {
            alert(`Invalid grade entered for Course ${i}`);
            return;
        }
    }

    let cgpa = totalPoints / totalCredits;
    const studentName = document.getElementById('studentName').value;
    const semester = document.getElementById('semester').value;
    document.getElementById('result').innerHTML = `
        Student Name: ${studentName}<br>
        Semester: ${semester}<br>
        CGPA: ${cgpa.toFixed(2)}
    `;

    document.getElementById('printButton').style.display = 'block';
}
