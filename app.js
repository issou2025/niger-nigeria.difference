  // Etat courant
  const state = { lang: "en", page: "home", quizI: 0, quizScore: 0 };
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  // Initialisation de la langue et remplissage de la dropdown
  function initLangSelector(){
    const select = $('#lang-select');
    // Remplir options (déjà en HTML, mais on peut synchroniser la sélection)
    select.value = state.lang;
    select.onchange = ()=>{
      const val = select.value;
      setLang(val);
    };
  }
  // Définir la langue
  function setLang(lang){
    if(!translations[lang]) lang = "en";
    state.lang = lang;
    // Header title, subtitle
    $('#title-main').textContent = translations[lang].title;
    $('#subtitle-main').textContent = translations[lang].subtitle;
    // Navbar text
  $$(".navbar button").forEach(btn=>{
    const page = btn.dataset.page;
    btn.textContent = (translations[lang].nav && translations[lang].nav[page]) || (translations["en"].nav ? translations["en"].nav[page] : undefined) || btn.textContent;
  });
    // Home page table headers & title & placeholder
    $('#home-title').textContent = translations[lang].homeTitle;
    const ths = translations[lang].th;
    $('#th-fact').textContent = ths[0];
    $('#th-niger').textContent = ths[1];
    $('#th-nigeria').textContent = ths[2];
    $('#search-main').placeholder = translations[lang].searchPlaceholder;
    // Random fact initial
    $('#random-fact').textContent = translations[lang].randomFactPrefix + translations[lang].facts[0];
    // About page
    $('#about-title').textContent = translations[lang].aboutTitle;
    const aboutContainer = $('#about-content');
    aboutContainer.innerHTML = "";
    translations[lang].aboutContent.forEach(paragraph => {
      const p = document.createElement('p');
      p.innerHTML = paragraph;
      aboutContainer.appendChild(p);
    });
    // History page
    $('#history-title').textContent = translations[lang].nav.history;
    $('#history-intro').textContent = translations[lang].historyIntro;
    const histList = $('#history-list');
    histList.innerHTML = "";
    translations[lang].historyList.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item;
      histList.appendChild(li);
    });
    // Culture page
    $('#culture-title').textContent = translations[lang].nav.culture;
    $('#culture-intro').textContent = translations[lang].cultureIntro;
    const cultList = $('#culture-list');
    cultList.innerHTML = "";
    translations[lang].cultureList.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item;
      cultList.appendChild(li);
    });
    // Economy page
    const econTitle = document.getElementById('economy-title');
    const econIntro = document.getElementById('economy-intro');
    if(econTitle) econTitle.textContent = translations[lang].economyTitle;
    if(econIntro) econIntro.textContent = translations[lang].economyIntro;
    // Food page
    const foodTitle = document.getElementById('food-title');
    const foodIntro = document.getElementById('food-intro');
    if(foodTitle) foodTitle.textContent = translations[lang].foodTitle;
    if(foodIntro) foodIntro.textContent = translations[lang].foodIntro;
      // FAQ page
      $("#faq-title").textContent = translations[lang].faqTitle;
      const faqContainer = $("#faq-content");
      faqContainer.innerHTML = "";
      translations[lang].faq.forEach(it => {
        const det = document.createElement("details");
        const sum = document.createElement("summary");
        sum.textContent = it.q;
        const p = document.createElement("p");
        p.textContent = it.a;
        det.appendChild(sum);
        det.appendChild(p);
        faqContainer.appendChild(det);
      });
    // Map buttons
    $('#map-niamey').textContent = translations[lang].viewNiamey;
    $('#map-abuja').textContent = translations[lang].viewAbuja;
    const year = new Date().getFullYear();
    $('#footer-text').textContent = translations[lang].footerText.replace('{year}', year);
    // Quiz page title
    $('#quiz-title').textContent = translations[lang].nav.quiz + ": " + translations[lang].homeTitle;
    // Reset quiz state
    state.quizI = 0;
    state.quizScore = 0;
    loadQuiz();
    // Contact page
    $('#contact-title').textContent = translations[lang].nav.contact;
    // Contact info labels
    const ci = $('.contact-info');
    ci.innerHTML = `
      <p><strong>${translations[lang].contact.emailLabel}</strong> <a href="mailto:entreprise2rc@gmail.com">entreprise2rc@gmail.com</a></p>
      <p><strong>${translations[lang].contact.whatsappLabel}</strong> <a href="https://wa.me/22796380877" target="_blank">+227 96 38 08 77</a></p>
      <p><strong>${translations[lang].contact.nameLabel}</strong> Issoufou Abdou Chéfou</p>
      <p><a href="https://plan-revit-bim-ne.onrender.com" target="_blank">${translations[lang].contact.plansText}</a></p>
    `;
    // Mettre à jour la dropdown
    $('#lang-select').value = lang;
    // Régénérer les cartes pour Home si mobile
    if(window.innerWidth <= 700){
      renderFactCards();
    }
  }

  // Changer de page
  function setPage(page){
    state.page = page;
    $$('.page').forEach(p=>p.classList.remove('active'));
    $('#page-'+page).classList.add('active');
    $$('.navbar button').forEach(b=>{
      b.classList.toggle('active', b.dataset.page===page);
    });
    // Scroll en haut de .main
    document.querySelector('.main').scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Random fact
  function randFact(){
    const arr = translations[state.lang].facts;
    const idx = Math.floor(Math.random()*arr.length);
    $('#random-fact').textContent = translations[state.lang].randomFactPrefix + arr[idx];
    // Afficher bouton partager si disponible
    if(navigator.share){
      const btn = $('#share-fact-btn');
      btn.style.display = 'inline-block';
      btn.dataset.fact = translations[state.lang].randomFactPrefix + arr[idx];
    }
    const copyBtn = $('#copy-fact-btn');
    if(copyBtn){
      copyBtn.dataset.fact = translations[state.lang].randomFactPrefix + arr[idx];
    }
  }

  // Filtrer la table
  function filterTable(){
    const val = $('#search-main').value.toLowerCase();
    $('#main-table').querySelectorAll("tr").forEach((row,i)=>{
      if(i===0) return;
      row.style.display = row.textContent.toLowerCase().includes(val)?"":"none";
    });
    if(window.innerWidth <= 700){
      renderFactCards();
    }
  }

  // Quiz logic
  function loadQuiz(){
    const quizArr = translations[state.lang].quiz;
    if(state.quizI >= quizArr.length){
      document.onkeydown = null;
      $('#quiz-box').innerHTML = `<div style="font-size:1.12rem;"><b>Score:</b> ${state.quizScore}/${quizArr.length}</div>`;
      $('#quiz-result').textContent = '';
      setTimeout(()=>{
        state.quizI = 0;
        state.quizScore = 0;
        loadQuiz();
      }, 2500);
      return;
    }
    const qobj = quizArr[state.quizI];
    let s = `<div class="quiz-question">${qobj.q}</div><div class="quiz-choices">`;
    qobj.a.forEach((choice,i)=>{
      s += `<label><input type="radio" name="quiz" value="${i}"> ${choice}</label>`;
    });
    s += '</div><button id="quiz-next" style="margin-top:1.1rem;background:var(--accent);color:#fff;font-weight:700;border-radius:8px;border:none;padding:.55rem 1.6rem;cursor:pointer;">OK</button>';
    $('#quiz-box').innerHTML = s;
    $('#quiz-result').textContent = '';
    // Animation d’apparition
    const box = $('#quiz-box');
    box.style.opacity = 0;
    setTimeout(()=>{ box.style.transition='opacity 0.4s'; box.style.opacity=1; }, 10);
    const nextBtn = $('#quiz-next');
    nextBtn.onclick = ()=>{
      const v = $('input[name="quiz"]:checked');
      if(!v) return;
      const isCorrect = Number(v.value) === qobj.r;
      const resEl = $('#quiz-result');
      if(isCorrect){
        resEl.style.color = 'var(--accent2)';
        resEl.textContent = translations[state.lang].correctText;
        state.quizScore++;
      } else {
        resEl.style.color = 'var(--accent4)';
        resEl.textContent = translations[state.lang].incorrectText;
      }
      state.quizI++;
      setTimeout(loadQuiz, 1200);
    };
    document.onkeydown = e=>{
      if(e.key === 'Enter'){
        const v = $('input[name="quiz"]:checked');
        if(v) nextBtn.click();
      }
    };
  }

  // Menu mobile toggle
  function initMenuToggle(){
    const menuBtn = $('#menu-toggle');
    const nav = $('#navbar');
    menuBtn.onclick = ()=>{
      nav.classList.toggle('open');
    };
    // Clic sur item ferme si mobile
    $$('.navbar button').forEach(b=>{
      b.onclick = ()=>{
        setPage(b.dataset.page);
        if(window.innerWidth <= 700){
          nav.classList.remove('open');
        }
      };
    });
  }

  // Back to top
  function initBackToTop(){
    const btn = $('#back-to-top');
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 300){
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    });
    btn.onclick = ()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  // Theme toggle
  function setTheme(mode){
    if(mode==='dark'){
      document.documentElement.classList.add('dark-mode');
      $('.theme-toggle').textContent="🌚";
      $('#menu-toggle').classList.add('dark');
      $('.theme-toggle').classList.add('dark');
      $('#share-btn').classList.add('dark');
      $('#colorful-toggle').classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      $('.theme-toggle').textContent="🌞";
      $('#menu-toggle').classList.remove('dark');
      $('.theme-toggle').classList.remove('dark');
      $('#share-btn').classList.remove('dark');
      $('#colorful-toggle').classList.remove('dark');
    }
    localStorage.setItem('theme',mode);
  }
  function initThemeToggle(){
    const theme0 = localStorage.getItem('theme')||'light';
    setTheme(theme0);
    $('.theme-toggle').onclick = ()=>{
      const next = document.documentElement.classList.contains('dark-mode')?'light':'dark';
      setTheme(next);
    };
  }

  // Colorful mode toggle
  function setColorful(on){
    if(on){
      document.documentElement.classList.add('colorful-mode');
    } else {
      document.documentElement.classList.remove('colorful-mode');
    }
    localStorage.setItem('colorful', on ? '1' : '0');
  }
  function initColorfulToggle(){
    const start = localStorage.getItem('colorful') === '1';
    setColorful(start);
    $('#colorful-toggle').onclick = ()=>{
      const on = !document.documentElement.classList.contains('colorful-mode');
      setColorful(on);
    };
  }
function initColorPickers(){
  const p1 = document.getElementById("accent1-picker");
  const p2 = document.getElementById("accent2-picker");
  if(p1){ p1.oninput = ()=>{ document.documentElement.style.setProperty("--accent", p1.value); }; }
  if(p2){ p2.oninput = ()=>{ document.documentElement.style.setProperty("--accent2", p2.value); }; }
}


  // Share page / fact
  function initShare(){
    if(navigator.share){
      $('#share-btn').style.display='block';
      $('#share-btn').onclick = ()=>{
        const shareData = {
          title: translations[state.lang].title,
          text: translations[state.lang].subtitle,
          url: window.location.href
        };
        navigator.share(shareData).catch(()=>{});
      };
      $('#share-fact-btn').onclick = ()=>{
        const fact = $('#share-fact-btn').dataset.fact || $('#random-fact').textContent;
        navigator.share({
          title: translations[state.lang].title,
          text: fact,
          url: window.location.href
        }).catch(()=>{});
      };
    }
  }

  // Print page
  function initPrint(){
    const btn = $('#print-btn');
    if(btn) btn.onclick = ()=>{ window.print(); };
  }

  // Copy fact
  function initCopyFact(){
    const btn = $('#copy-fact-btn');
    if(!btn) return;
    if(navigator.clipboard){
      btn.style.display = 'inline-block';
    }
    btn.onclick = ()=>{
      const fact = btn.dataset.fact || $('#random-fact').textContent;
      navigator.clipboard.writeText(fact).then(()=>{
        btn.textContent = '✔';
        setTimeout(()=>{ btn.textContent = '📋 Copy'; }, 1000);
      }).catch(()=>{});
    };
  }

  // Reset search
  function initResetSearch(){
    const btn = $('#reset-search');
    if(!btn) return;
    btn.onclick = ()=>{
      $('#search-main').value = '';
      filterTable();
    };
  }

  // IntersectionObserver pour animations
  function initObserver(){
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, options);
    // Observer sur les cards existantes
    $$('.card').forEach(el=>{
      el.classList.add('fade-in');
      observer.observe(el);
    });
    // Observer sur fact-cards lors de génération
  }

  // Générer des “cards” pour Home sur mobile
  function renderFactCards(){
    const container = $('#fact-cards-container');
    container.innerHTML = '';
    const table = $('#main-table');
    if(!table) return;
    const headers = Array.from(table.querySelectorAll('tr th')).map(th=>th.textContent.trim());
    const rows = Array.from(table.querySelectorAll('tr')).slice(1);
    rows.forEach(row=>{
      if(row.style.display==='none') return;
      const cells = Array.from(row.querySelectorAll('td'));
      if(cells.length < headers.length) return;
      const title = cells[0].textContent.trim();
      const valN = cells[1].textContent.trim();
      const valNi = cells[2].textContent.trim();
      const card = document.createElement('div');
      card.className = 'fact-card fade-in';
      const h3 = document.createElement('h3');
      h3.textContent = `${headers[0]}: ${title}`;
      const p1 = document.createElement('p');
      p1.innerHTML = `<strong>${headers[1]}:</strong> ${valN}`;
      const p2 = document.createElement('p');
      p2.innerHTML = `<strong>${headers[2]}:</strong> ${valNi}`;
      card.appendChild(h3);
      card.appendChild(p1);
      card.appendChild(p2);
      container.appendChild(card);
      // Observer pour apparitions
      const obs = new IntersectionObserver((ents, ob)=>{
        ents.forEach(en=>{
          if(en.isIntersecting){
            en.target.classList.add('visible');
            ob.unobserve(en.target);
          }
        });
      }, { threshold: 0.1 });
      obs.observe(card);
    });
  }

  // Resize listener pour régénérer les cartes si besoin
  function initResizeListener(){
    window.addEventListener('resize', ()=>{
      if(window.innerWidth <= 700){
        renderFactCards();
      }
    });
    if(window.innerWidth <= 700){
      renderFactCards();
    }
  }

  // Initialisation
  document.addEventListener('DOMContentLoaded', ()=>{
    initLangSelector();
    setLang(state.lang);
    setPage('home');
    initMenuToggle();
    initBackToTop();
    initThemeToggle();
    initColorfulToggle();
    initShare();
    initPrint();
    initCopyFact();
    initColorPickers();
    initResetSearch();
    initObserver();
    initResizeListener();
    // Home interactions
    $('#search-main').oninput = filterTable;
    $('#btn-fact').onclick = randFact;
    // Navbar for desktop
    $$('.navbar button').forEach(b=>{
      b.onclick = ()=>{ setPage(b.dataset.page); };
    });
    // Quiz initial
    loadQuiz();
  });
