const words = [
    { portuguese: "maçã", english: "apple", emoji: " 🍎 " },
    { portuguese: "gato", english: "cat", emoji: " 🐱 " },
    { portuguese: "carro", english: "car", emoji: " 🚗 " },
    { portuguese: "cachorro", english: "dog", emoji: " 🐶 " },
    { portuguese: "céu", english: "sky", emoji: " ☁️ " },
    { portuguese: "árvore", english: "tree", emoji: " 🌳 " },
    { portuguese: "sol", english: "sun", emoji: " ☀️ " },
    { portuguese: "água", english: "water", emoji: " 💧 " },
    { portuguese: "lua", english: "moon", emoji: " 🌙 " },
    { portuguese: "estrela", english: "star", emoji: " ⭐️ " },
    { portuguese: "flor", english: "flower", emoji: " 🌸 " },
    { portuguese: "fogo", english: "fire", emoji: " 🔥 " },
    { portuguese: "montanha", english: "mountain", emoji: " ⛰️ " },
    { portuguese: "mar", english: "sea", emoji: " 🌊 " },
    { portuguese: "chuva", english: "rain", emoji: " 🌧️ " },
    { portuguese: "neve", english: "snow", emoji: " ❄️ " },
    { portuguese: "casa", english: "house", emoji: " 🏠 " },
    { portuguese: "livro", english: "book", emoji: " 📚 " },
    { portuguese: "computador", english: "computer", emoji: " 💻 " },
    { portuguese: "pássaro", english: "bird", emoji: " 🐦 " },
    { portuguese: "piscina", english: "pool", emoji: " 🏊 " },
    { portuguese: "pessoas", english: "people", emoji: " 👥 " },
    { portuguese: "palhaço", english: "clown", emoji: " 🤡 " },
    { portuguese: "coração", english: "heart", emoji: " ❤️ " },
    { portuguese: "futebol", english: "soccer", emoji: " ⚽️ " },
    { portuguese: "festa", english: "party", emoji: " 🎉 " },
    { portuguese: "jogo", english: "game", emoji: " 🎮 " },
    { portuguese: "filme", english: "movie", emoji: " 🎬 " },
    { portuguese: "música", english: "music", emoji: " 🎵 " },
    { portuguese: "pintura", english: "painting", emoji: " 🎨 " },
    { portuguese: "escultura", english: "sculpture", emoji: " 🗿 " },
    { portuguese: "teatro", english: "theater", emoji: " 🎭 " },
    { portuguese: "dança", english: "dance", emoji: " 💃 " },
    { portuguese: "cinema", english: "cinema", emoji: " 🎬 " },
    { portuguese: "fotografia", english: "photography", emoji: " 📷 " },
    { portuguese: "basquete", english: "basketball", emoji: " 🏀 " },
    { portuguese: "tênis", english: "tennis", emoji: " 🎾 " },
    { portuguese: "futebol americano", english: "football", emoji: " 🏈 " },
    { portuguese: "vôlei", english: "volleyball", emoji: " 🏐 " },
    { portuguese: "natação", english: "swimming", emoji: " 🏊 " },
    { portuguese: "ciclismo", english: "cycling", emoji: " 🚴 " },
    { portuguese: "esqui", english: "skiing", emoji: " ⛷️ " },
    { portuguese: "skate", english: "skateboarding", emoji: " 🛹 " },
    { portuguese: "patinação", english: "skating", emoji: " ⛸️ " },
    { portuguese: "bolo", english: "cake", emoji: " 🎂 " },
    { portuguese: "sorvete", english: "ice cream", emoji: " 🍦 " },
    { portuguese: "pizza", english: "pizza", emoji: " 🍕 " },
    { portuguese: "hambúrguer", english: "hamburger", emoji: " 🍔 " },
    { portuguese: "sushi", english: "sushi", emoji: " 🍣 " },
    { portuguese: "sopa", english: "soup", emoji: " 🍲 " },
    { portuguese: "salada", english: "salad", emoji: " 🥗 " },
    { portuguese: "arroz", english: "rice", emoji: " 🍚 " },
    { portuguese: "batata", english: "potato", emoji: " 🥔 " },
    { portuguese: "frango", english: "chicken", emoji: " 🍗 " },
    { portuguese: "carne", english: "meat", emoji: " 🍖 " },
    { portuguese: "feijão", english: "beans", emoji: " 🫘 " },
    { portuguese: "batata frita", english: "french fries", emoji: " 🍟 " },
    { portuguese: "pão", english: "bread", emoji: " 🍞 " },
    { portuguese: "chocolate", english: "chocolate", emoji: " 🍫 " },
    { portuguese: "queijo", english: "cheese", emoji: " 🧀 " }
  ];
  
  let selectedEnglish = null;
  let selectedPortuguese = null;
  let matchedPairs = 0;
  
  function renderWords() {
    const englishList = document.getElementById("english-list");
    const portugueseList = document.getElementById("portuguese-list");
    const message = document.getElementById("message");
  
    englishList.innerHTML = "";
    portugueseList.innerHTML = "";
    message.textContent = "";
    matchedPairs = 0;
  
    const shuffledEnglish = [...words].sort(() => Math.random() - 0.5).slice(0, 4);
    const shuffledPortuguese = shuffledEnglish.map((word) => 
      words.find((w) => w.english === word.english)
    ).sort(() => Math.random() - 0.5);
  
    shuffledEnglish.forEach((word) => {
      const li = document.createElement("li");
      li.textContent = `${word.english} ${word.emoji}`;
      li.dataset.english = word.english;
      li.addEventListener("click", () => selectEnglish(li));
      englishList.appendChild(li);
    });
  
    shuffledPortuguese.forEach((word) => {
      const li = document.createElement("li");
      li.textContent = word.portuguese;
      li.dataset.portuguese = word.portuguese;
      li.addEventListener("click", () => selectPortuguese(li));
      portugueseList.appendChild(li);
    });
  }
  
  function selectEnglish(li) {
    if (selectedEnglish) selectedEnglish.classList.remove("selected");
    selectedEnglish = li;
    li.classList.add("selected");
    checkMatch();
  }
  
  function selectPortuguese(li) {
    if (selectedPortuguese) selectedPortuguese.classList.remove("selected");
    selectedPortuguese = li;
    li.classList.add("selected");
    checkMatch();
  }
  
  function checkMatch() {
    if (selectedEnglish && selectedPortuguese) {
      const englishWord = selectedEnglish.dataset.english;
      const portugueseWord = selectedPortuguese.dataset.portuguese;
  
      const message = document.getElementById("message");

      message.textContent = "";
      document.querySelectorAll(".wrong").forEach((el) => el.classList.remove("wrong"));
  
      if (words.some((word) => word.english === englishWord && word.portuguese === portugueseWord)) {

        selectedEnglish.classList.add("correct");
        selectedPortuguese.classList.add("correct");
        message.textContent = "Correto! 🎉";
        message.style.color = "#28a745";
        matchedPairs++;

        if (matchedPairs === 4) {
          const finishMessage = document.createElement("p");
          finishMessage.textContent = "Você concluiu todos os pares! O jogo será reiniciado.";
          finishMessage.style.color = "#28a745";
          message.appendChild(finishMessage);

          setTimeout(() => {
            renderWords();
          }, 1000);
        }
      } else {
        selectedEnglish.classList.add("wrong");
        selectedPortuguese.classList.add("wrong");
        message.textContent = "Errado! Tente novamente. ❌";
        message.style.color = "#dc3545";
  
        setTimeout(() => {
          selectedEnglish.classList.remove("wrong");
          selectedPortuguese.classList.remove("wrong");
        }, 1000);
      }
  
      selectedEnglish.classList.remove("selected");
      selectedPortuguese.classList.remove("selected");
      selectedEnglish = null;
      selectedPortuguese = null;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderWords();
  });
  