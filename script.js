
/* ==========================================
   SKY GRIT - RESUME BUILDER
   Complete JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const builder = document.querySelector(".builder-placeholder");

    if (!builder) return;

    /* ==========================================
       1. RESUME BUILDER FORM
    ========================================== */

    builder.innerHTML = `
        <div class="resume-form-wrapper">

            <div class="form-heading">
                <span class="eyebrow">YOUR INFORMATION</span>
                <h3>Create Your Professional Resume</h3>
                <p>Enter only the essential details. Optional sections can be skipped.</p>
            </div>

            <form id="resumeForm">

                <!-- PERSONAL INFORMATION -->
                <h3 class="form-section-title">01. Personal Information</h3>

                <div class="form-grid">

                    <div class="form-group">
                        <label>Full Name *</label>
                        <input type="text" id="fullName"
                            placeholder="Enter your full name" required>
                    </div>

                    <div class="form-group">
                        <label>Mobile Number *</label>
                        <input type="tel" id="phone"
                            placeholder="+91 98765 43210"
                            pattern="[0-9+ -]{10,16}" required>
                    </div>

                    <div class="form-group">
                        <label>Email Address *</label>
                        <input type="email" id="email"
                            placeholder="example@email.com" required>
                    </div>

                    <div class="form-group">
                        <label>City *</label>
                        <input type="text" id="city"
                            placeholder="Your city" required>
                    </div>

<div class="form-group">
    <label>State / Union Territory *</label>

    <div class="state-dropdown">
        <input
            type="text"
            id="stateSearch"
            placeholder="Select or search State / UT"
            autocomplete="off"
            role="combobox"
            aria-expanded="false"
            aria-controls="stateOptions"
            required
        >

        <input type="hidden" id="state">

        <div id="stateOptions" class="state-options" hidden></div>
    </div>
</div>
                </div>

                <!-- EDUCATION -->
                <h3 class="form-section-title">02. Education</h3>

                <div id="educationList">

                    <div class="dynamic-entry education-entry">

                        <div class="form-grid">

                           <div class="form-group">
    <label>Qualification *</label>

    <select class="edu-qualification" required>
        <option value="">Select Qualification</option>
        <option>10th Pass</option>
        <option>12th Pass</option>
        <option>Diploma</option>
        <option>ITI</option>
        <option>Graduation</option>
        <option>Post Graduation</option>
        <option>PhD</option>
        <option>Other</option>
    </select>

    <input
        type="text"
        class="edu-other-qualification"
        placeholder="Enter your qualification"
        hidden
    >
</div>

                            <div class="form-group">
                                <label>School / College *</label>
                                <input class="edu-institute"
                                    placeholder="Institute name" required>
                            </div>

                            <div class="form-group">
                                <label>Passing Year *</label>
                                <input class="edu-year" type="number"
                                    min="1950" max="2100"
                                    placeholder="2026" required>
                            </div>

                            <div class="form-group">
                                <label>Percentage / CGPA (Optional)</label>
                                <input class="edu-marks"
                                    placeholder="e.g. 75% or 8.2 CGPA">
                            </div>

                        </div>

                    </div>

                </div>


               <!-- SKILLS -->
<h3 class="form-section-title">03. Skills</h3>

<div class="form-group full-width">

    <label>Select Your Skills *</label>

   <small id="skillCount">Choose up to 5 skills (0/5 selected).</small>

    <div class="skill-options">

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Communication">
            Communication
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Teamwork">
            Teamwork
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Problem Solving">
            Problem Solving
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Time Management">
            Time Management
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Leadership">
            Leadership
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Adaptability">
            Adaptability
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="MS Word">
            MS Word
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="MS Excel">
            MS Excel
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="MS PowerPoint">
            MS PowerPoint
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Computer Knowledge">
            Computer Knowledge
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Typing">
            Typing
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Data Entry">
            Data Entry
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="HTML">
            HTML
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="CSS">
            CSS
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="JavaScript">
            JavaScript
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Python">
            Python
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="C Programming">
            C Programming
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Java">
            Java
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Digital Marketing">
            Digital Marketing
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Social Media Management">
            Social Media Management
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Customer Service">
            Customer Service
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Sales">
            Sales
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Accounting">
            Accounting
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Tally">
            Tally
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Graphic Design">
            Graphic Design
        </label>

        <label class="skill-option">
            <input type="checkbox" name="skillOption" value="Video Editing">
            Video Editing
        </label>

    </div>

    <div class="form-group custom-skill-group">

        <label>Other Skills (Optional)</label>

        <input
            type="text"
            id="customSkills"
            placeholder="Enter other skills separated by commas"
        >

    </div>

</div>

                <!-- EXPERIENCE -->
                <h3 class="form-section-title">04. Work Experience (Optional)</h3>

                <div id="experienceList">

                    <div class="dynamic-entry experience-entry">

                        <div class="form-grid">

                            <div class="form-group">
                                <label>Company Name</label>
                                <input class="exp-company"
                                    placeholder="Company name">
                            </div>

                            <div class="form-group">
                                <label>Job Role</label>
                                <input class="exp-role"
                                    placeholder="Your job role">
                            </div>

                            <div class="form-group full-width">
                                <label>Work Description</label>
                                <textarea class="exp-description"
                                    rows="2"
                                    placeholder="Your responsibilities and achievements"></textarea>
                            </div>

                        </div>

                    </div>

                </div>


                <!-- ADDITIONAL DETAILS -->
                <h3 class="form-section-title">05. Additional Details</h3>

              
<div class="form-group full-width">

    <label>Languages Known</label>

    <div class="language-options">

        <label>
            <input type="checkbox" name="language" value="Hindi">
            Hindi
        </label>

        <label>
            <input type="checkbox" name="language" value="English">
            English
        </label>

        <label>
            <input type="checkbox" id="otherLanguagesToggle">
            Other
        </label>

    </div>

    <div id="otherLanguagesPanel" class="other-languages-panel" hidden>

        <label>Search and select other languages</label>

        <input
            type="search"
            id="languageSearch"
            placeholder="Search Indian languages..."
            autocomplete="off"
        >

        <div id="languageOptions" class="language-options-list">

            <label><input type="checkbox" name="otherLanguage" value="Assamese"> Assamese</label>
            <label><input type="checkbox" name="otherLanguage" value="Bengali"> Bengali</label>
            <label><input type="checkbox" name="otherLanguage" value="Bodo"> Bodo</label>
            <label><input type="checkbox" name="otherLanguage" value="Dogri"> Dogri</label>
            <label><input type="checkbox" name="otherLanguage" value="Gujarati"> Gujarati</label>
            <label><input type="checkbox" name="otherLanguage" value="Kannada"> Kannada</label>
            <label><input type="checkbox" name="otherLanguage" value="Kashmiri"> Kashmiri</label>
            <label><input type="checkbox" name="otherLanguage" value="Konkani"> Konkani</label>
            <label><input type="checkbox" name="otherLanguage" value="Maithili"> Maithili</label>
            <label><input type="checkbox" name="otherLanguage" value="Malayalam"> Malayalam</label>
            <label><input type="checkbox" name="otherLanguage" value="Manipuri"> Manipuri</label>
            <label><input type="checkbox" name="otherLanguage" value="Marathi"> Marathi</label>
            <label><input type="checkbox" name="otherLanguage" value="Nepali"> Nepali</label>
            <label><input type="checkbox" name="otherLanguage" value="Odia"> Odia</label>
            <label><input type="checkbox" name="otherLanguage" value="Punjabi"> Punjabi</label>
            <label><input type="checkbox" name="otherLanguage" value="Sanskrit"> Sanskrit</label>
            <label><input type="checkbox" name="otherLanguage" value="Santali"> Santali</label>
            <label><input type="checkbox" name="otherLanguage" value="Sindhi"> Sindhi</label>
            <label><input type="checkbox" name="otherLanguage" value="Tamil"> Tamil</label>
            <label><input type="checkbox" name="otherLanguage" value="Telugu"> Telugu</label>
            <label><input type="checkbox" name="otherLanguage" value="Urdu"> Urdu</label>
            <label><input type="checkbox" name="otherLanguage" value="Bhojpuri"> Bhojpuri</label>
            <label><input type="checkbox" name="otherLanguage" value="Tulu"> Tulu</label>
            <label><input type="checkbox" name="otherLanguage" value="Khasi"> Khasi</label>
            <label><input type="checkbox" name="otherLanguage" value="Garo"> Garo</label>
            <label><input type="checkbox" name="otherLanguage" value="Mizo"> Mizo</label>
            <label><input type="checkbox" name="otherLanguage" value="Kokborok"> Kokborok</label>
            <label><input type="checkbox" name="otherLanguage" value="Rajasthani"> Rajasthani</label>

        </div>

        <label for="customLanguages">Or write another language</label>

        <input
            type="text"
            id="customLanguages"
            placeholder="e.g. Bhili, Haryanvi, etc."
        >

        <small>You can select multiple languages or enter your own.</small>

    </div>

</div>


                <div class="form-group full-width" style="margin-top:20px;">
                    <label>LinkedIn / Portfolio URL (Optional)</label>
                    <input type="url" id="portfolio"
                        placeholder="https://...">
                </div>

                <button type="submit" class="primary-button">
                    Generate Resume Preview
                </button>

            </form>

<!-- RESUME TEMPLATE SELECTION -->
<h3 class="form-section-title">06. Choose Your Resume Template</h3>

<div class="template-options">

    <label class="template-card">
        <input type="radio" name="resumeTemplate" value="classic" checked>
        <div class="template-design classic-design">
            <div class="template-mini-header"></div>
            <div class="template-mini-line"></div>
            <div class="template-mini-line short"></div>
            <div class="template-mini-heading">EDUCATION</div>
            <div class="template-mini-line"></div>
            <div class="template-mini-heading">SKILLS</div>
            <div class="template-mini-line short"></div>
        </div>
        <strong>Classic</strong>
        <small>Clean and professional</small>
    </label>

    <label class="template-card">
        <input type="radio" name="resumeTemplate" value="modern">
        
<div class="template-design modern-design">

    <div class="modern-mini-border"></div>

    <div class="modern-mini-content">

        <div class="modern-mini-header">
            <div class="modern-mini-name"></div>
            <div class="modern-mini-contact"></div>
        </div>

        <div class="template-mini-heading">PROFILE SUMMARY</div>
        <div class="template-mini-line"></div>
        <div class="template-mini-line short"></div>

        <div class="template-mini-heading">EDUCATION</div>
        <div class="template-mini-line"></div>

        <div class="template-mini-heading">SKILLS</div>
        <div class="template-mini-line short"></div>

    </div>

</div>

        <strong>Modern</strong>
        <small>Contemporary layout</small>
    </label>

</div>

            <!-- RESUME PREVIEW -->
            <div id="resumePreview" class="resume-preview" hidden>

                <h3>Your Resume Preview</h3>

                <div id="resumeContent"></div>

                <button type="button" id="downloadResume"
                    class="primary-button">
                    Download Resume PDF
                </button>

            </div>

        </div>
    `;
    /* ==========================================
     SEARCHABLE STATE / UT DROPDOWN
  ========================================== */

    const indianStatesAndUTs = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli and Daman and Diu",
        "Delhi",
        "Jammu and Kashmir",
        "Ladakh",
        "Lakshadweep",
        "Puducherry"
    ];

    const stateSearch = document.getElementById("stateSearch");
    const stateInput = document.getElementById("state");
    const stateOptions = document.getElementById("stateOptions");

    function showStateOptions(search = "") {

        const filtered = indianStatesAndUTs.filter(state =>
            state.toLowerCase().includes(search.trim().toLowerCase())
        );

        stateOptions.innerHTML = "";

        if (filtered.length === 0) {
            const message = document.createElement("div");
            message.className = "state-no-result";
            message.textContent = "No State or UT found";
            stateOptions.appendChild(message);
        } else {
            filtered.forEach(state => {

                const option = document.createElement("button");

                option.type = "button";
                option.className = "state-option";
                option.textContent = state;

                option.addEventListener("click", () => {

                    stateSearch.value = state;
                    stateInput.value = state;

                    stateSearch.setCustomValidity("");

                    stateOptions.hidden = true;
                    stateSearch.setAttribute("aria-expanded", "false");

                });

                stateOptions.appendChild(option);
            });
        }

        stateOptions.hidden = false;
        stateSearch.setAttribute("aria-expanded", "true");
    }

    stateSearch.addEventListener("focus", () => {

        const searchText =
            stateSearch.value === stateInput.value
                ? ""
                : stateSearch.value;

        showStateOptions(searchText);

    });

    stateSearch.addEventListener("input", () => {

        stateInput.value = "";

        stateSearch.setCustomValidity(
            "Please select a State or Union Territory from the list."
        );

        showStateOptions(stateSearch.value);

    });

    document.addEventListener("click", event => {

        if (!event.target.closest(".state-dropdown")) {
            stateOptions.hidden = true;
            stateSearch.setAttribute("aria-expanded", "false");
        }

    });

    /* ==========================================
       OTHER LANGUAGES SELECTION
    ========================================== */

    const otherLanguagesToggle = document.getElementById(
        "otherLanguagesToggle"
    );

    const otherLanguagesPanel = document.getElementById(
        "otherLanguagesPanel"
    );

    const languageSearch = document.getElementById(
        "languageSearch"
    );

    const languageOptions = document.getElementById(
        "languageOptions"
    );

    // Show or hide other languages
    otherLanguagesToggle.addEventListener("change", () => {

        otherLanguagesPanel.hidden = !otherLanguagesToggle.checked;

        if (!otherLanguagesToggle.checked) {

            languageOptions.querySelectorAll(
                'input[name="otherLanguage"]'
            ).forEach(input => {
                input.checked = false;
            });

            languageSearch.value = "";
            document.getElementById("customLanguages").value = "";

            languageOptions.querySelectorAll("label").forEach(label => {
                label.hidden = false;
            });

        }

    });

    // Search languages
    languageSearch.addEventListener("input", () => {

        const searchText = languageSearch.value
            .trim()
            .toLowerCase();

        languageOptions.querySelectorAll("label").forEach(label => {

            const languageName = label.textContent.toLowerCase();

            label.hidden = !languageName.includes(searchText);

        });

    });

    /* ==========================================
       2. SAFE HTML CONVERSION
    ========================================== */
    /* ==========================================
       MAXIMUM 5 SKILLS
    ========================================== */

    const skillCheckboxes = document.querySelectorAll(
        'input[name="skillOption"]'
    );

    const skillCount = document.getElementById("skillCount");
    const customSkillsInput = document.getElementById("customSkills");

    function getCustomSkills() {

        const selectedBuiltIn = [
            ...document.querySelectorAll(
                'input[name="skillOption"]:checked'
            )
        ].map(item => item.value.toLowerCase());

        const uniqueCustomSkills = [];

        getValueForSkill(customSkillsInput.value)
            .forEach(skill => {

                const alreadyExists = [
                    ...selectedBuiltIn,
                    ...uniqueCustomSkills.map(item => item.toLowerCase())
                ].includes(skill.toLowerCase());

                if (!alreadyExists) {
                    uniqueCustomSkills.push(skill);
                }

            });

        return uniqueCustomSkills;
    }

    function getValueForSkill(value) {

        return value
            .split(",")
            .map(skill => skill.trim())
            .filter(Boolean);

    }

    function updateSkillCount() {

        const builtInCount = document.querySelectorAll(
            'input[name="skillOption"]:checked'
        ).length;

        const customCount = getCustomSkills().length;
        const total = builtInCount + customCount;

        skillCount.textContent =
            `Choose up to 5 skills (${total}/5 selected).`;

    }

    skillCheckboxes.forEach(checkbox => {

        checkbox.addEventListener("change", () => {

            const builtInCount = document.querySelectorAll(
                'input[name="skillOption"]:checked'
            ).length;

            const customCount = getCustomSkills().length;

            if (builtInCount + customCount > 5) {

                checkbox.checked = false;

                alert("You can select a maximum of 5 skills.");

            }

            updateSkillCount();

        });

    });

    customSkillsInput.addEventListener("input", () => {

        const builtInCount = document.querySelectorAll(
            'input[name="skillOption"]:checked'
        ).length;

        const allowedCustomCount = Math.max(0, 5 - builtInCount);

        const customSkills = getValueForSkill(customSkillsInput.value);

        const uniqueSkills = [];

        customSkills.forEach(skill => {

            if (!uniqueSkills.some(
                item => item.toLowerCase() === skill.toLowerCase()
            )) {
                uniqueSkills.push(skill);
            }

        });

        customSkillsInput.value = uniqueSkills
            .slice(0, allowedCustomCount)
            .join(", ");

        updateSkillCount();

    });

    updateSkillCount();
    function escapeHTML(value) {

        return String(value).replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[char]);

    }


    /* ==========================================
       3. ADD EDUCATION
    ========================================== */
    /* Show custom qualification when Other is selected */

    document.getElementById("educationList")
        .addEventListener("change", event => {

            if (!event.target.matches(".edu-qualification")) return;

            const entry = event.target.closest(".education-entry");
            const otherInput = entry.querySelector(".edu-other-qualification");

            const isOther = event.target.value === "Other";

            otherInput.hidden = !isOther;
            otherInput.required = isOther;

            if (!isOther) {
                otherInput.value = "";
            }

        });


    /* ==========================================
       5. COLLECT RESUME DATA
    ========================================== */

    function getResumeData() {

        const getValue = id => {
            return document.getElementById(id).value.trim();
        };


        const education = [
            ...document.querySelectorAll(".education-entry")
        ].map(entry => ({

            qualification: entry.querySelector(".edu-qualification").value === "Other"
                ? entry.querySelector(".edu-other-qualification").value.trim()
                : entry.querySelector(".edu-qualification").value,

            institute: entry.querySelector(".edu-institute").value.trim(),

            year: entry.querySelector(".edu-year").value,

            marks: entry.querySelector(".edu-marks").value.trim()

        })).filter(item => {

            return item.qualification &&
                item.institute &&
                item.year;

        });


        const experience = [
            ...document.querySelectorAll(".experience-entry")
        ].map(entry => ({

            company: entry.querySelector(".exp-company").value.trim(),

            role: entry.querySelector(".exp-role").value.trim(),

            description: entry.querySelector(".exp-description").value.trim()

        })).filter(item => {

            return item.company || item.role || item.description;

        });



        const languages = [
            ...document.querySelectorAll(
                'input[name="language"]:checked'
            )
        ].map(item => item.value);

        // Add selected Indian languages and custom languages
        if (document.getElementById("otherLanguagesToggle").checked) {

            const selectedOtherLanguages = [
                ...document.querySelectorAll(
                    'input[name="otherLanguage"]:checked'
                )
            ].map(item => item.value);

            const customLanguages = document.getElementById("customLanguages")
                .value
                .split(",")
                .map(language => language.trim())
                .filter(Boolean);

            languages.push(
                ...selectedOtherLanguages,
                ...customLanguages
            );

        }

        // Remove duplicate languages
        const uniqueLanguages = [
            ...new Map(
                languages.map(language => [
                    language.toLowerCase(),
                    language
                ])
            ).values()
        ];



        return {

            name: getValue("fullName"),

            phone: getValue("phone"),

            email: getValue("email"),

            city: getValue("city"),

            state: getValue("state"),

            education,

            skills: [
                ...new Set([
                    ...[
                        ...document.querySelectorAll(
                            'input[name="skillOption"]:checked'
                        )
                    ].map(item => item.value),

                    ...getCustomSkills()
                ])
            ].slice(0, 5),
            experience,

            languages: uniqueLanguages,
            portfolio: getValue("portfolio")

        };

    }



    /* ==========================================
       6. GENERATE RESUME HTML
    ========================================== */
    function generateResume(data) {

        const safe = escapeHTML;

        const selectedTemplate = document.querySelector(
            'input[name="resumeTemplate"]:checked'
        )?.value || "classic";

        // Universal professional summary
        const defaultSummary = `
        A motivated and adaptable individual with a strong
        willingness to learn, take responsibility, and contribute
        effectively to assigned tasks. Possesses a positive approach
        to problem-solving, communication, and teamwork, with a focus
        on continuous improvement and delivering quality work.
    `;

        // Use user's objective if provided, otherwise use default summary
        const summary = defaultSummary;

        return `

           <article class="print-resume ${selectedTemplate === "modern" ? "resume-modern" : ""}">

            <!-- PERSONAL DETAILS -->

            <header class="resume-header">

                <h1>${safe(data.name)}</h1>

                <p>
                    ${safe(data.phone)} |
                    ${safe(data.email)}
                </p>

                <p>
                    ${safe(data.city)}, ${safe(data.state)}
                </p>

                ${data.portfolio ? `
                    <p>${safe(data.portfolio)}</p>
                ` : ""}

            </header>


            <!-- Profile SUMMARY -->

            <section class="resume-summary">

                <h2>Profile Summary</h2>

                <p>${safe(summary)}</p>

            </section>


            <!-- EDUCATION -->

            <section class="resume-education">

                <h2>Education</h2>

                ${data.education.map(item => `

                    <div class="resume-entry">

                        <h3>${safe(item.qualification)}</h3>

                        <p>
                            <strong>${safe(item.institute)}</strong>
                            <span> | ${safe(item.year)}</span>
                        </p>

                        ${item.marks ? `
                            <p>${safe(item.marks)}</p>
                        ` : ""}

                    </div>

                `).join("")}

            </section>


            <!-- SKILLS -->

            <section class="resume-skills-section">

                <h2>Skills</h2>

                <ul class="resume-skills">

                    ${data.skills.map(skill => `
                        <li>${safe(skill)}</li>
                    `).join("")}

                </ul>

            </section>


            <!-- WORK EXPERIENCE -->

            ${data.experience.length ? `

                <section class="resume-experience">

                    <h2>Work Experience</h2>

                    ${data.experience.map(item => `

                        <div class="resume-entry">

                            ${item.role ? `
                                <h3>${safe(item.role)}</h3>
                            ` : ""}

                            ${item.company ? `
                                <p><strong>${safe(item.company)}</strong></p>
                            ` : ""}

                            ${item.description ? `
                                <p>${safe(item.description)}</p>
                            ` : ""}

                        </div>

                    `).join("")}

                </section>

            ` : ""}


            <!-- LANGUAGES -->

            ${data.languages.length ? `

                <section class="resume-languages">

                    <h2>Languages</h2>

                    <ul class="resume-skills">

                        ${data.languages.map(language => `
                            <li>${safe(language)}</li>
                        `).join("")}

                    </ul>

                </section>

            ` : ""}

        </article>

    `;

    }
    /* ==========================================
       UPDATE RESUME TEMPLATE PREVIEW
    ========================================== */

    document.querySelectorAll('input[name="resumeTemplate"]')
        .forEach(template => {

            template.addEventListener("change", () => {

                const resumeElement = document.querySelector(
                    "#resumeContent .print-resume"
                );

                if (!resumeElement) return;

                resumeElement.classList.toggle(
                    "resume-modern",
                    template.value === "modern"
                );

            });

        });

    /* ==========================================
       7. GENERATE RESUME PREVIEW
    ========================================== */

    const resumeForm = document.getElementById("resumeForm");

    resumeForm.addEventListener("submit", event => {

        event.preventDefault();

        const data = getResumeData();

        if (!data.education.length) {

            alert("Please complete at least one education entry.");

            return;

        }

        if (!data.skills.length) {

            alert("Please enter at least one skill.");

            return;

        }

        const resumeContent = document.getElementById("resumeContent");

        resumeContent.innerHTML = generateResume(data);

        const preview = document.getElementById("resumePreview");

        preview.hidden = false;

        preview.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });



    // Download resume as A4 PDF
    document.getElementById("downloadResume")
        .addEventListener("click", async () => {

            const resumeElement = document.querySelector("#resumeContent .print-resume");

            if (!resumeElement) {
                alert("Please generate your resume preview first.");
                return;
            }

            if (typeof html2pdf === "undefined") {
                alert("PDF library could not load. Please check your internet connection.");
                return;
            }

            const button = document.getElementById("downloadResume");
            const originalText = button.textContent;

            button.disabled = true;
            button.textContent = "Generating PDF...";

            const selectedTemplate = document.querySelector(
                'input[name="resumeTemplate"]:checked'
            )?.value || "classic";

            const options = {
                margin: [12, 12, 12, 12],
                filename: "SKY-GRIT-Resume.pdf",
                image: {
                    type: "jpeg",
                    quality: 0.98
                },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: "#FFFFFF",
                    scrollY: 0
                },
                jsPDF: {
                    unit: "mm",
                    format: "a4",
                    orientation: "portrait"
                },
                pagebreak: {
                    mode: ["css", "legacy"]
                }
            };

            try {
                resumeElement.classList.toggle(
                    "resume-modern",
                    selectedTemplate === "modern"
                );

                await html2pdf()
                    .set(options)
                    .from(resumeElement)
                    .save();

            } catch (error) {
                console.error("PDF generation error:", error);
                alert("PDF could not be generated. Please try again.");

            } finally {
                resumeElement.classList.toggle(
                    "resume-modern",
                    selectedTemplate === "modern"
                );

                button.disabled = false;
                button.textContent = originalText;
            }
        });



});
