
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    // const name = document.getElementById('profile.name')
    // name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    // const phone = document.getElementById('profile.phone')
    // phone.innerText = profileData.phone
    // phone.href = `https://wa.me/85988921914`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateStudyingSkills(profileData) {
    const studyingSkills = document.getElementById('profile.skills.studyingSkills')
    studyingSkills.innerHTML = profileData.skills.studyingSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateFormacao(profileData) {
    const formacao = document.getElementById('profile.formacao')
formacao.innerHTML = profileData.formacao.map(form => `<li>${form}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <p class="desc-port">${project.description}</p>
                <a href="${project.url}" target="_blank">${project.url}</a>
                <a href="${project.link}" target="_blank">${project.link}</a>
            </li>
        `
    }).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateStudyingSkills(profileData)
    updateHardSkills(profileData)
    updateFormacao(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()
