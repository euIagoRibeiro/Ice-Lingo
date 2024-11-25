const words = [
    { pt: "maçã", en: "apple", emoji: "🍎 " },
    { pt: "gato", en: "cat", emoji: "🐱 " },
    { pt: "carro", en: "car", emoji: "🚗 " },
    { pt: "cachorro", en: "dog", emoji: "🐶 " },
    { pt: "céu", en: "sky", emoji: "☁️ " },
    { pt: "árvore", en: "tree", emoji: "🌳 " },
    { pt: "sol", en: "sun", emoji: "☀️ " },
    { pt: "água", en: "water", emoji: "💧 " },
    { pt: "lua", en: "moon", emoji: "🌙 " },
    { pt: "estrela", en: "star", emoji: "⭐️ " },
    { pt: "flor", en: "flower", emoji: "🌸 " },
    { pt: "fogo ", en: "fire", emoji: "🔥 " },
    { pt: "montanha", en: "mountain", emoji: "⛰️ "},
    { pt: "mar", en: "sea", emoji: "🌊 " },
    { pt: "chuva", en: "rain", emoji: "🌧️ " },
    { pt: "neve", en: "snow", emoji: "❄️ " },
    { pt: "casa", en: "house", emoji: "🏠 " },
    { pt: "livro", en: "book", emoji: "📚 " },
    { pt: "computador", en: "computer", emoji: "💻 " },
    { pt: "pássaro", en: "bird", emoji: "🐦 " },
    { pt: "piscina", en: "pool", emoji: "🏊 " },
    { pt: "pessoas", en: "people", emoji: "👥 " },
    { pt: "palhaço", en: "clown", emoji: "🤡 " },
    { pt: "coração", en: "heart", emoji: "❤️ " },
    { pt: "futebol", en: "soccer", emoji: "⚽️ " },
    { pt: "festa", en: "party", emoji: "🎉 " },
    { pt: "jogo", en: "game", emoji: "🎮 " },
    { pt: "filme", en: "movie", emoji: "🎬 " },
    { pt: "música", en: "music", emoji: "🎵 " },
    { pt: "pintura", en: "painting", emoji: "🎨 " },
    { pt: "escultura", en: "sculpture", emoji: "🗿 " },
    { pt: "teatro", en: "theater", emoji: "🎭 " },
    { pt: "dança", en: "dance", emoji: "💃 " },
    { pt: "cinema", en: "cinema", emoji: "🎬 " },
    { pt: "fotografia", en: "photography", emoji: "📷 " },
    { pt: "basquete", en: "basketball", emoji: "🏀 " },
    { pt: "tênis", en: "tennis", emoji: "🎾 " },
    { pt: "futebol americano", en: "football", emoji: "🏈 " },
    { pt: "vôlei", en: "volleyball", emoji: "🏐 " },
    { pt: "natação", en: "swimming", emoji: "🏊 " },
    { pt: "ciclismo", en: "cycling", emoji: "🚴 " },
    { pt: "esqui", en: "skiing", emoji: "⛷️ " },
    { pt: "skate", en: "skateboarding", emoji: "🛹 " },
    { pt: "patinação", en: "skating", emoji: "⛸️ " },
    { pt: "bolo", en: "cake", emoji: "🎂 " },
    { pt: "sorvete", en: "ice cream", emoji: "🍦 " },
    { pt: "pizza", en: "pizza", emoji: "🍕 " },
    { pt: "hambúrguer", en: "hamburger", emoji: "🍔 " },
    { pt: "sushi", en: "sushi", emoji: "🍣 " },
    { pt: "sopa", en: "soup", emoji: "🍲 " },
    { pt: "salada", en: "salad", emoji: "🥗 " },
    { pt: "arroz", en: "rice", emoji: "🍚 " },
    { pt: "batata", en: "potato", emoji: "🥔 " },
    { pt: "frango", en: "chicken", emoji: "🍗 " },
    { pt: "carne", en: "meat", emoji: "🍖 " },
    { pt: "feijão", en: "beans", emoji: "🫘 " },
    { pt: "batata frita", en: "french fries", emoji: "🍟 " },
    { pt: "pão", en: "bread", emoji: "🍞 " },
    { pt: "chocolate", en: "chocolate", emoji: "🍫 " },
    { pt: "queijo", en: "cheese", emoji: "🧀 " }

];
  
  let currentWord = null;
  let selectedOption = null;
  
  // Função para embaralhar um array
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // Gera uma nova palavra e opções
  function startGame() {
    // Seleciona uma palavra aleatória
    currentWord = words[Math.floor(Math.random() * words.length)];
  
    // Preenche a palavra em português
    document.getElementById("word-to-translate").textContent = currentWord.pt;
  
    // Gera opções aleatórias
    const options = [currentWord];
    while (options.length < 3) {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      if (!options.includes(randomWord)) {
        options.push(randomWord);
      }
    }
  
    // Embaralha as opções e adiciona no DOM
    const shuffledOptions = shuffleArray(options);
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Limpa opções anteriores
  
    shuffledOptions.forEach(option => {
      const button = document.createElement("button");
      button.classList.add("option-button");
  
      // Adiciona emoji e texto
      const emojiSpan = document.createElement("span");
      emojiSpan.textContent = option.emoji;
  
      const text = document.createElement("span");
      text.textContent = option.en;
  
      button.appendChild(emojiSpan);
      button.appendChild(text);
  
      button.addEventListener("click", () => selectOption(button, option.en));
      optionsContainer.appendChild(button);
    });
  
    // Reset feedback e botão
    document.getElementById("feedback").textContent = "";
    document.getElementById("check-button").disabled = true;
    selectedOption = null;
  }
  
  // Marca a opção selecionada
  function selectOption(button, option) {
    selectedOption = option;
  
    // Remove seleção de outros botões
    const buttons = document.querySelectorAll(".option-button");
    buttons.forEach(btn => btn.classList.remove("selected"));
  
    // Marca o botão selecionado
    button.classList.add("selected");
  
    // Habilita o botão de verificar
    document.getElementById("check-button").disabled = false;
  }
  
  // Verifica a resposta
  function checkAnswer() {
    const feedback = document.getElementById("feedback");
    if (selectedOption === currentWord.en) {
      feedback.textContent = "Correto!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = `Errado! A resposta correta é "${currentWord.en}".`;
      feedback.style.color = "red";
    }
  
    // Inicia uma nova rodada após 2 segundos
    setTimeout(startGame, 2000);
  }
  
  // Event Listener do botão de verificar
  document.getElementById("check-button").addEventListener("click", checkAnswer);
  
  // Inicia o jogo ao carregar
  startGame();
  