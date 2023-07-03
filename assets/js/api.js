
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/jeffersonkako/meu-site/main/data/profile.json?token=GHSAT0AAAAAACD52R2XVTDLB3J67XY7EL4IZFCHSNA';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
