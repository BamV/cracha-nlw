const linksSocialMedia = {
  github: 'BamV',
  youtube: 'channel/UCrcUSm_yssK18VPsL2QsELg',
  facebook: 'fernando.nazario.18',
  instagram: 'tetsu_tatsumi',
  twitter: 'Fernand15343215'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Fernando'
  //userName.textContent = 'Fernando Nazario'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
