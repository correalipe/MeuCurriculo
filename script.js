// script.js
const languageData = {
  en: {
    name: "Felipe Correa",
    linkedin: "LinkedIn",
    email: "Contact me",
    about: "About Me",
    about_text: "Professional with over 3 years of experience in software development, including data engineering and analysis, automation, and AI. Previous experience in a leading company in the heavy vehicle rental segment. Proficient in various programming languages such as Python, PHP, Node.js, Vue.js, React, JavaScript, and TypeScript.",
    experience: "Professional Experience",
    education: "Education",
    skills_languages: "Skills and Languages"
  },
  pt: {
    name: "Seu Nome",
    linkedin: "LinkedIn",
    email: "Enviar E-mail",
    about: "Sobre Mim",
    about_text: "Profissional com mais de 3 anos de experiência em desenvolvimento de software, incluindo engenharia e análise de dados, automação e IA. Experiência anterior em uma empresa líder no segmento de locação de veículos pesados. Proficiente em diversas linguagens de programação, como Python, PHP, Node.js, Vue.js, React, JavaScript e TypeScript.",
    experience: "Experiências Profissionais",
    education: "Estudos",
    skills_languages: "Habilidades e Idiomas"
  }
};

document.addEventListener("DOMContentLoaded", function() {
  const modeBtn = document.getElementById('mode');
  const modeIcon = document.querySelector('.slider:before');
  
  if (modeBtn) {
    modeBtn.addEventListener('change', function() {
      try {
        if (modeBtn.checked) {
          document.documentElement.classList.remove("light");
          document.documentElement.classList.add("dark");
          window.localStorage.setItem('mode', 'dark');
          modeIcon.textContent = '🌙'; // Altera o ícone para lua quando estiver em dark mode
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
          window.localStorage.setItem('mode', 'light');
          modeIcon.textContent = '☀️'; // Altera o ícone para sol quando estiver em light mode
        }
      } catch (error) {
        console.error('Erro ao alternar o tema:', error);
      }
    });
    
    const mode = window.localStorage.getItem('mode');
    if (mode === 'dark') {
      modeBtn.checked = true;
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      modeIcon.textContent = '🌙'; // Altera o ícone para lua quando estiver em dark mode
    } else {
      modeBtn.checked = false;
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      modeIcon.textContent = '☀️'; // Altera o ícone para sol quando estiver em light mode
    }
  } else {
    console.warn('Botão de alternância de tema não encontrado.');
  }
});




