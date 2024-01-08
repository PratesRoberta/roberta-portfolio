
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/PratesRoberta/roberta-portfolio/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
