function showHome() {
    $($("#i_content")[0]).load("src/html/home.html");
}

function showEducation() {
    $($("#i_content")[0]).load("src/html/education.html");
}

function showProjects() {
    $($("#i_content")[0]).load("src/html/working_section.html");
}

function showContact() {
    //$($("#i_content")[0]).load("src/html/working_section.html");
    $($("#i_content")[0]).load("src/html/contact.html");
}

function showJobHistory(from_education) {
    //$($("#i_content")[0]).load("src/html/working_section.html");
    $($("#i_content")[0]).load("src/html/job_history.html");

    if (from_education == true) {
        $($("#left-button-education")).attr("aria-selected", false);
        $($("#left-button-education")).attr("class", "nav-link");
    }
    
    $($("#left-button-job_history")).attr("aria-selected", true);
    $($("#left-button-job_history")).attr("class", "nav-link active");
}
