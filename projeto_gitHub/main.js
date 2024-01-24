async function getUserInfo() {
  const username = document.getElementById("username").value;
  if (!username) {
      alert("Por favor, digite um nome de usuário do GitHub.");
      return;
  }

  try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();

      if (response.status === 200) {
          displayUserInfo(userData);
      } else {
          alert(`Erro: ${userData.message}`);
          clearUserInfo();
      }
  } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
      clearUserInfo();
  }
}

function displayUserInfo(userData) {
  const userInfoContainer = document.getElementById("userInfo");
  userInfoContainer.innerHTML = `
      <img src="${userData.avatar_url}" alt="${userData.login}" width="100">
      <h2>${userData.login}</h2>
      <p>Nome: ${userData.name || 'N/A'}</p>
      <p>Localização: ${userData.location || 'N/A'}</p>
      <p>Repositórios: ${userData.public_repos}</p>
      <p>Seguidores: ${userData.followers}</p>
  `;
}

function clearUserInfo() {
  document.getElementById("userInfo").innerHTML = '';
}
