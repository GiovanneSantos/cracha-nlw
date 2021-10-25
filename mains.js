const userSocialMedia = {
  github: 'GiovanneSantos',
  youtube: 'channel/UCpLM0_GfIumslkE4qRX0Yzw',
  facebook: 'giovanne.marcos',
  instagram: 'giovannelegolito',
  twitter: 'giovanne_marcos'
}
function changeSocialMediaUser() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`
  }
}
changeSocialMediaUser()

function getGitHubProfileInfos() {
  const apiGitHub = `https://api.github.com/users/${userSocialMedia.github}`

  fetch(apiGitHub)
    .then(apiGitHubResponse => apiGitHubResponse.json())
    .then(data => {
      userName.textContent = data.name
      userGitHubBio.textContent = data.bio
      userGitHubLink.href = data.html_url
      userImage.src = data.avatar_url
      userLoginGitHub.textContent = data.login
    })
}
getGitHubProfileInfos()
