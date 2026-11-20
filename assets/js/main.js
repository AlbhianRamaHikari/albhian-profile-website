console.log("Website Profil Bhian aktif!");

function updateAge() {
    const birthDate = new Date(2008, 5, 16); // Bulan 5 = Juni (0-indexed)
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    const ageElement = document.getElementById("age");
    if (ageElement) {
        ageElement.textContent = age;
    }
}

updateAge();