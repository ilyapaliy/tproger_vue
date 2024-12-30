<!-- This is firs teamplate (without good css) -->
<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <div class="grid">
    <header>
      <div class="l">
        <a href="https://tproger.ru/">
        <div class="left">
          <svg data-v-2de242f3="" xmlns="http://www.w3.org/2000/svg" width="46" height="48" viewBox="0 0 24 24" role="presentation"><g fill="inherit" stroke="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24.676c6.61 0 12-5.39 12-12s-5.39-12-12-12-12 5.39-12 12 5.39 12 12 12Z" fill="#2AA29F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.238 7.996c.565-.496 3.543-.53 4.184-.218.873.424 1.75.791 1.737 1.818-.012 1.014-.098 2.092-.102 2.541-.005.411.402.642.795 1.716.142.38 1.027.727.813 1.1-.128.213-.342.551-.89.88-.166.099-.907.625-.27 1.703.223.385.133.235-.453.997-.423.552-.055 1.72-.342 1.827-.004.004-.993-.291-1.994-.039-1.557.398-3.392 1.408-3.41 1.4-.03-.01-1.15-1.6-2.125-2.692-.702-.782-1.386-1.048-1.27-1.493.414-1.6-2.358-4.197-1.34-5.985.599-1.048 2.267-.115 3.02.467 1.1.855.762-3.248 1.647-4.022Z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.252 18.11c-.021.12-.162.654-.21.731-.102-.034-.885-.513-1.005-.599.103-.145 1.891-.924 2.182-.933.064.082.27.415.265.53l-1.232.27Zm-6.738-5.126.454-.013c.013 1.408-.107 1.883-.57 3.337-.149.368.347 1.515.489 1.836.08.184.106.252.153.29.214.18 3.38 1.293 4.146 1.72-1.348.462-2.195.971-2.918 1.378-.778-1.13-1.912-2.738-3.093-3.675.056-.278.304-1.339.283-1.553-.017-.184-1.143-1.621-1.416-2.682-.257-.989-.24-1.733.723-1.819.954-.08 1.377.377 1.75 1.181Zm6.695-1.056c.112-.009.308-.048.407-.056.013.137-.043 1.425-.081 1.557-.026.082-.167.227-.257.287-.124.077-.116-1.545-.069-1.788Zm-4.654.697c1.057-.201 2.965-.48 3.974-.62-.098 1.078.086 2.6.137 2.69.034.065.428.078.522.018.039-.026.869-.864.873-.873.026-.09.004-.24.021-.668.218.377.5.882.753 1.267.265.406.488.676.488.676-.017.077-.462.453-.548.47-.303.06-1.463.146-1.968.257-.521.115-1.737.766-2.241 1.027-.283-.18-1.455-1.836-1.712-2.2-.183-.256-.132-.205-.17-.611-.048-.47-.108-.954-.13-1.433Zm2.73-3.444c.14.244.183 1.202.23 1.455.428.064 1.168.222 1.54.252.15-.5.078-1.557.043-2.11.171.057.728.442.783.604.094.257.073 1.45-.004 1.707-.253.021-.514 0-.766.021-.646.052-1.412.146-2.05.261-.38.073-2.262.497-2.579.497l-.077-.42c0-.047.437-.748.522-.915.107-.205.214-.424.325-.642.039-.077.261-.629.304-.667.847.877 1.053 1.309 1.108 1.352.056.042.513.06.603.055.094-.2.06-1.1.017-1.45Zm-7.65-2.263c-.162-.355-.081-2.113-.094-2.13-.295-.146-1.497 1.326-1.587 1.617-.188.633.026.902.188 1.458-1.04.586-1.9 1.75-1.733 3.08.206-.192.685-.611 1.01-.714-.32 1.408-.39 3.461 1.416 4.882.291.226.466 2.164.514 2.806.29-.034.74-.077 1.043-.013 1.151.248 3.14 3.196 3.804 4.145.727-.384 3.007-1.488 3.79-1.454.115.004.406.201.654.244.321.051.967-.158 1.271-.24.783-.205.62-.064.548-.851-.047-.51 0-1.023.017-1.523.008-.274.316-.227.274-.462-.039-.193-.18-.372-.257-.526.133-.047.5-.043.505-.154.021-.424-.009-.843-.009-1.267.15-.12.963-.676 1.027-.97-.595-.583-2.062-2.64-1.882-3.205.23-.723.175-1.275.175-1.797.073.064 1.382-.393 1.579-.462-.231-1.253-1.168-2.122-1.896-2.477-.038-.458.197-1.377.325-1.651-2.87-1.587-6.331-.45-7.354.2.048-.264.343-.803.441-1.022-1.972.035-3.61 1.896-3.769 2.486Z" fill="#363634"></path></g></svg>
          <span>Tproger</span>
        </div>
        </a>
        <div class="search-container">
          <input class="search" type="text" placeholder="Поиск"  @focus="search" @focusout="searchout">
          <img class="magnifier" src="@/assets/magnifier.svg"/>
        </div>
      </div>
      <div class="r">
        <a class="write-post" href="https://tproger.ru/editor?utm_source=desktop-header-button">Написать пост</a>
        <div class="actions">
          <img src="@/assets/bell.svg">
          <a>
            <img src="@/assets/person.svg">
            <span>Войти</span>
          </a>
        </div>
      </div>
    </header>
    <aside class="left">
      <ul class="upper">
        <a href="https://tproger.ru/"><li>
          <img src="@/assets/aside/newspaper.svg">
          <span>Лента</span>
        </li></a>
        <a href="https://tproger.ru/"><li>
          <img src="@/assets/aside/fire.svg">
          <span>Новости</span>
        </li></a>
        <a href="https://tproger.ru/"><li>
          <img src="@/assets/aside/factory.svg">
          <span>Компании</span>
        </li></a>
        <a href="https://tproger.ru/"><li>
          <img src="@/assets/aside/portfolio.svg">
          <span>Вакансии</span>
        </li></a>
        <a href="https://tproger.ru/"><li>
          <img src="@/assets/aside/calendar.svg">
          <span>События</span>
        </li></a>
        <li class="accordion-parent" id="ttt" @click="accordion()">
          <img src="@/assets/aside/codebook.svg">
          <span>Языки</span>
          <img class="arrow" src="@/assets/aside/arrow.svg">
        </li>
        <ul class="accordion-child">
          <a href="https://tproger.ru/"><li>Python</li></a>
          <a href="https://tproger.ru/"><li>JavaScript</li></a>
          <a href="https://tproger.ru/"><li>C++</li></a>
          <a href="https://tproger.ru/"><li>Java</li></a>
          <a href="https://tproger.ru/"><li>PHP</li></a>
          <a href="https://tproger.ru/"><li>CSS</li></a>
          <a href="https://tproger.ru/"><li>C#</li></a>
          <a href="https://tproger.ru/"><li class="more">Ещё...</li></a>
        </ul>
        <li class="accordion-parent" @click="accordion">
          <img src="@/assets/aside/book.svg">
          <span>Темы</span>
          <img class="arrow" src="@/assets/aside/arrow.svg">
        </li>
        <ul class="accordion-child">
          <a href="https://tproger.ru/"><li>Веб-разработка</li></a>
          <a href="https://tproger.ru/"><li>Алгоритмы</li></a>
          <a href="https://tproger.ru/"><li>Разработка игр</li></a>
          <a href="https://tproger.ru/"><li>Искусственный интеллект</li></a>
          <a href="https://tproger.ru/"><li>Нейронные сети</li></a>
          <a href="https://tproger.ru/"><li>Мобильная разработка</li></a>
          <a href="https://tproger.ru/"><li>Паттерны проектирования</li></a>
          <a href="https://tproger.ru/"><li>Машинное обучение</li></a>
          <a href="https://tproger.ru/"><li>Data Science</li></a>
          <a href="https://tproger.ru/"><li>Тестирование</li></a>
          <a href="https://tproger.ru/"><li class="more">Ещё...</li></a>
        </ul>
        <li class="accordion-parent" @click="accordion()">
          <img src="@/assets/aside/graph-up.svg">
          <span>Уровни</span>
          <img class="arrow" src="@/assets/aside/arrow.svg">
        </li>
        <ul class="accordion-child">
          <a href="https://tproger.ru/"><li>Для детей</li></a>
          <a href="https://tproger.ru/"><li>Начальный</li></a>
          <a href="https://tproger.ru/"><li>Средний</li></a>
          <a href="https://tproger.ru/"><li>Продвинутый</li></a>
        </ul>
      </ul>
      <ul class="lower">
        <a href="https://tproger.ru/"><li><span>Заказать рекламу</span></li></a>
        <a href="https://tproger.ru/"><li><span>О нас</span></li></a>
        <a href="https://tproger.ru/"><li><span>Мы в Telegram</span></li></a>
        <a href="https://tproger.ru/"><li><span>Другие соц. сети</span><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></li></a>
        <a href="https://tproger.ru/"><li><span>Правила</span><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></li></a>
        <a href="https://tproger.ru/"><li><span>Ещё</span><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></li></a>
      </ul>
    </aside>
    <main>
      <div class="post">
        <h1>Как работает CSS Flexbox: наглядное введение в систему компоновки элементов на веб-странице</h1>
        <div class="author">
          <img src="@/assets/avatar.webp">
          <div>
            <a>Марина Александровна</a>
            <time datetime="2020-12-14T13:00:57+00:00">14 дек 2020</time>
          </div>
        </div>
        <p>Задавались когда-нибудь вопросом, как работает CSS Flexbox? Наглядно объясняем возможности технологии с использованием анимации.</p>
      </div>
      <p>
        CSS Flexbox — это технология для создания сложных гибких макетов за счёт правильного размещения элементов на странице. О самой технологии пишут <a href="https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox" rel="nofollow">здесь</a>. Мы же решили объяснить возможности CSS Flexbox с использованием гифок — настоящая flex шпаргалка.
      </p>
      <ol>
        <li><a href="#x1">Display: flex</a></li>
        <li><a href="#x2">Flex-direction</a></li>
        <li><a href="#x3">Justify-content</a></li>
      </ol>
      <h2 id="x1">Display: flex</h2>
      <img src="https://media.tproger.ru/uploads/2017/02/600x266_flex_1.gif" style="aspect-ratio:auto;object-fit:fill;object-position:50% 50%;width:600px;height:266px;" loading="lazy" decoding="async">
      <p class="tp-content-paragraph" data-v-6302db0d="">Разберёмся, как работает display flex CSS. Есть страница:На ней размещено 4 <code>div</code> разных размеров, которые находятся внутри серого <code>div</code>. У каждого <code>div</code> есть свойство <code>display: block</code>. Поэтому каждый блок занимает всю ширину строки. И вот как реализовать CSS display flex. Чтобы начать работать с CSS Flexbox, нужно сделать контейнер flex контейнером. Делается это так:</p>
      <pre>#container {  display: flex;}</pre>
      <img src="https://media.tproger.ru/uploads/2017/02/600x258_flex_2.gif" style="aspect-ratio:auto;object-fit:fill;object-position:50% 50%;width:600px;height:258px;" loading="lazy" decoding="async">
      <p>Так у блоков появилось свойство flex-контекст, которое в дальнейшем позволит ими управлять гораздо проще, чем с использованием стандартного CSS.</p>
      <h2 id="x2">Flex-direction</h2>
      <img src="https://media.tproger.ru/uploads/2017/02/axes.png" srcset="https://tproger.ru/signed_image/b42pVixCPnhqGC8LFL6h5BGhT1bqiWLltXZYZgvR02M/rs:fill:766:0:true/cb:vimg_2/f:webp/aHR0cHM6Ly9tZWRpYS50cHJvZ2VyLnJ1L3VwbG9hZHMvMjAxNy8wMi9heGVzLnBuZw= 766w,https://tproger.ru/signed_image/TXR1OZI48mNUhWuShBSBRSpV54JEzTwELCSBLMNr99U/rs:fill:1532:0:true/cb:vimg_2/f:webp/aHR0cHM6Ly9tZWRpYS50cHJvZ2VyLnJ1L3VwbG9hZHMvMjAxNy8wMi9heGVzLnBuZw= 1532w,https://tproger.ru/signed_image/kEpjratuULqtuhZUDU9LDRQzGE7_xUBgJB-f_KxuGOE/rs:fill:686:0:true/cb:vimg_2/f:webp/aHR0cHM6Ly9tZWRpYS50cHJvZ2VyLnJ1L3VwbG9hZHMvMjAxNy8wMi9heGVzLnBuZw= 686w,https://tproger.ru/signed_image/X0gw0dej5EXXapOPk1Ig60DBO6txqSOZqxRHTOuTFeE/rs:fill:1372:0:true/cb:vimg_2/f:webp/aHR0cHM6Ly9tZWRpYS50cHJvZ2VyLnJ1L3VwbG9hZHMvMjAxNy8wMi9heGVzLnBuZw= 1372w,https://tproger.ru/signed_image/9rVX1jZYR4MiwR1PLBU4d9kEm7LUThm1tmeeAK5_3dE/rs:fill:636:0:true/cb:vimg_2/f:webp/aHR0cHM6Ly9tZWRpYS50cHJvZ2VyLnJ1L3VwbG9hZHMvMjAxNy8wMi9heGVzLnBuZw= 636w,https://tproger.ru/signed_image/KUtpXipnFCg4piYAndVHHKnzyzt0qTXn882ZClWHWXc/rs:fill:1272:0:true/cb:vimg_2/f:webp/aHR0cHM6Ly9tZWRpYS50cHJvZ2VyLnJ1L3VwbG9hZHMvMjAxNy8wMi9heGVzLnBuZw= 1272w,https://tproger.ru/signed_image/D6tdppL2--MEufDivA8mlxWwQXjArmfBP8zYBSLPYrM/rs:fill:466:0:true/cb:vimg_2/f:webp/aHR0cHM6Ly9tZWRpYS50cHJvZ2VyLnJ1L3VwbG9hZHMvMjAxNy8wMi9heGVzLnBuZw= 466w,https://tproger.ru/signed_image/RRbyOoLMaqI_ulNhg8F7gqHl0IOcwKuDuxZ0KCSOP7s/rs:fill:932:0:true/cb:vimg_2/f:webp/aHR0cHM6Ly9tZWRpYS50cHJvZ2VyLnJ1L3VwbG9hZHMvMjAxNy8wMi9heGVzLnBuZw= 932w" sizes="(min-width: 1441px) 766px,(min-width: 1281px) 686px,(min-width: 1281px) 766px,(min-width: 961px) 766px,(min-width: 671px) 636px,(min-width: 500px) 466px" alt="Как работает CSS Flexbox: наглядное введение в систему компоновки элементов на веб-странице 3" style="aspect-ratio:auto;object-fit:cover;object-position:50% 50%;" loading="lazy" decoding="async">
      <p>У flex-контейнера есть две оси: главная и перпендикулярная ей.По умолчанию все предметы располагаются вдоль главной оси — слева направо. Именно поэтому блоки в предыдущем примере выстроились в линию, когда мы применили <code>display: flex</code>. А вот <code>flex-direction</code> позволяет вращать главную ось.</p>
      <pre>#container {  display: flex;  flex-direction: column;}</pre>
      <img src="https://media.tproger.ru/uploads/2017/02/600x258_flex_3.gif" style="aspect-ratio:auto;object-fit:fill;object-position:50% 50%;width:600px;height:258px;" loading="lazy" decoding="async">
      <p>Обратите внимание, что <code>flex-direction: column</code> не выравнивает блоки по оси, перпендикулярной главной. Главная ось сама меняет своё расположение, и теперь направлена сверху вниз.Есть ещё парочка свойств для <code>flex-direction</code>: <code>row-reverse</code> и <code>column-reverse</code>.</p>
      <h2 id="x3">Justify-content</h2>
      <p>Отвечает за выравнивание элементов по главной оси:</p>
      <pre>#container {  display: flex;  flex-direction: row;  justify-content: flex-start;}</pre>
      <p><code>Justify-content</code> может принимать 5 значений:</p>
      <ol>
        <li>flex-start</li>
        <li>flex-end</li>
        <li>center</li>
        <li>space-between</li>
        <li>space-around</li>
      </ol>
      <img src="https://media.tproger.ru/uploads/2017/02/600x134_flex_5.gif" style="aspect-ratio:auto;object-fit:fill;object-position:50% 50%;width:600px;height:134px;" loading="lazy" decoding="async">
      <p><code>Space-between</code> задаёт одинаковое расстояние между блоками, но не между контейнером и блоками. <code>Space-around</code> также задаёт одинаковое расстояние между блоками, но теперь расстояние между контейнером и блоками равно половине расстояния между блоками.</p>
      <div class="footer">
        <div class="left">
          <button class="reaction">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>120</span>
          </button>
          <button class="reaction">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 9H17M10 13H17M7 9H7.01M7 13H7.01M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>56</span>
          </button>
        </div>
        <div class="middle">
          <span>2М открытий</span>
          <span>2М показов</span>
        </div>
        <div class="right">
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/></svg>
          <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><path d="M1478.496 1318.496c132.692 0 240.602 107.91 240.602 240.602 0 132.691-107.91 240.601-240.602 240.601-132.691 0-240.601-107.91-240.601-240.601 0-21.053 3.609-41.143 8.661-60.632 10.467-39.94 30.557-76.03 58.346-105.143 43.79-45.834 105.263-74.827 173.594-74.827ZM440.902 716.992c67.61 0 128.481 28.15 172.27 73.143 28.031 28.873 48.121 64.842 58.948 104.782 5.534 20.09 9.384 40.782 9.384 62.677 0 24.18-4.692 47.278-11.429 69.293-11.91 39.459-32.962 74.948-61.955 103.098-43.308 41.985-102.135 68.21-167.218 68.21-132.691 0-240.601-107.91-240.601-240.601 0-132.692 107.91-240.602 240.601-240.602Zm1037.594-596.691c132.692 0 240.602 107.91 240.602 240.601 0 132.692-107.91 240.602-240.602 240.602-67.488 0-128.24-28.03-171.91-72.782-28.15-28.872-48.36-64.842-59.188-104.782-5.533-20.21-9.503-41.023-9.503-63.038 0-132.691 107.91-240.601 240.601-240.601Zm0 1077.894c-112.842 0-212.571 53.053-278.737 134.497L776.421 1088.24c15.88-40.662 25.384-84.452 25.384-130.647 0-43.79-9.023-85.173-23.339-124.03l422.978-244.33c66.285 80.24 165.173 132.57 277.052 132.57 198.978 0 360.902-161.924 360.902-360.902C1839.399 161.925 1677.475 0 1478.496 0c-198.977 0-360.902 161.925-360.902 360.902 0 43.91 9.023 85.534 23.459 124.391l-422.858 244.21c-66.165-80.36-165.172-132.811-277.293-132.811C241.925 596.692 80 758.617 80 957.594c0 198.977 161.925 360.902 360.902 360.902 109.594 0 206.797-50.165 272.963-127.519l426.346 246.136c-13.835 38.376-22.617 79.037-22.617 121.985 0 198.977 161.925 360.902 360.902 360.902 198.978 0 360.902-161.925 360.902-360.902 0-198.978-161.924-360.903-360.902-360.903" fill-rule="evenodd"/></svg>
        </div>
      </div>
    </main>
    <aside class="right">
      <h3>Читают сейчас</h3>
      <ul>
        <li>
          <a href='https://tproger.ru/news/unstable-diffusion-analog-midjourney-bez-cenzury'>
          <p>10 логических задач с собеседований, которые заставят застрелиться</p>
          <div class="bottom">
            <div class="left">
              <img src="@/assets/message-circle.svg">
              <span>22</span>
            </div>
            <div class="right">
              <img src="@/assets/eye.svg">
              <span class="views">507K</span>
              <span class="plus">+136</span>
            </div>
          </div>
          </a>
        </li>
        <li>
          <a href='https://tproger.ru/news/unstable-diffusion-analog-midjourney-bez-cenzury'>
          <p>Python RegEx: практическое применение регулярок</p>
          <div class="bottom">
            <div class="left">
              <img src="@/assets/message-circle.svg">
              <span>5</span>
            </div>
            <div class="right">
              <img src="@/assets/eye.svg">
              <span class="views">1M</span>
              <span class="plus">+83</span>
            </div>
          </div>
          </a>
        </li>
        <li>
          <a href='https://tproger.ru/news/unstable-diffusion-analog-midjourney-bez-cenzury'>
          <p>Unstable Diffusion — аналог Midjourney без цензуры</p>
          <div class="bottom">
            <div class="left">
              <img src="@/assets/message-circle.svg">
              <span>10</span>
            </div>
            <div class="right">
              <img src="@/assets/eye.svg">
              <span class="views">32K</span>
              <span class="plus">+18</span>
            </div>
          </div>
          </a>
        </li>
        <li>
          <a href='https://tproger.ru/news/unstable-diffusion-analog-midjourney-bez-cenzury'>
          <p>Python map(): все, что вы хотели знать, но боялись спросить не так</p>
          <div class="bottom">
            <div class="left">
              <img src="@/assets/message-circle.svg">
              <span>43</span>
            </div>
            <div class="right">
              <img src="@/assets/eye.svg">
              <span class="views">261K</span>
              <span class="plus">+478</span>
            </div>
          </div>
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<!-- <script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script> -->


<script lang="ts">
import { Options, Vue } from 'vue-class-component';

interface AccordionTarget extends EventTarget {
  parentElement: Element
}

@Options({
  data() {
    return {
      accordionParents: document.getElementsByClassName("accordion-parent"),
      accordionChildren: document.getElementsByClassName("accordion-child")
    }
  },
  methods: {
    search(): void {
      document.querySelector(".search-container")!.classList.add("focused")
    },
    searchout(): void {
      document.querySelector(".search-container")!.classList.remove("focused")
    },
    accordion(): void {
      // console.log(event!.target.className)
      // console.log(event?.target.className)
      // console.log((event as PointerEvent).target.className)
      let visibles = document.getElementsByClassName("visible")
      for (let i = 0; i < this.accordionParents.length; i++) {
        if (
          this.accordionParents[i] == (event as PointerEvent).target ||
          this.accordionParents[i] == ((event as PointerEvent).target as AccordionTarget).parentElement
          ) {
          let iClassList = this.accordionChildren[i].classList
          if (iClassList.contains('visible')) {
            iClassList.remove('visible')
            this.accordionParents[i].children[2].classList.remove('arrow-rotation')
          } else {
            if (visibles.length > 0) {
              console.log(visibles[0].previousElementSibling)
              visibles[0].previousElementSibling?.children[2].classList.remove('arrow-rotation')
              visibles[0].classList.remove("visible")
            }
            iClassList.add('visible')
            this.accordionParents[i].children[2].classList.add('arrow-rotation')
            console.log(this.accordionParents[i].children[2])
          }
        }
      }
    }
  },
})
export default class HomeView extends Vue {}
</script>


<!-- <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    accordion(name: string): string {
      console.log('hi')
    }
  }
})
</script> -->

<style lang="scss">

.grid {
  display: grid;
  grid-template-columns: 216px minmax(0, 1fr) 360px;
  grid-template-areas:
        "header header header"
        "aside-left main aside-right";
  grid-template-rows: 96px 1fr;
  background-color: #171919;

  @media (max-width: 1280px) { // - left menu text
    grid-template-columns: 96px minmax(0, 1fr) 320px;
  }

  @media (max-width: 1025px) { // - right menu
    grid-template-columns: 96px minmax(0, 1fr);
  }

  @media (max-width: 770px) { // - left menu
    grid-template-areas: "header" "main";
    grid-template-columns: minmax(0, 1fr);
  }

  header{
    padding: 23px 40px 22px 40px;
    background-color: #171919;
    border-bottom: 1px solid #2a2c2c;
    grid-area: header;
    position: sticky;
    top: 0;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .l {
      gap: 32px;
      justify-content: center;
      align-items: center;

      .left {
        align-items: center;
        justify-content: space-between;

        span {
          color: #eef2f1;
          font-size: 32px;
          font-weight: 600;
          letter-spacing: -.02em;
          line-height: 40px;
          margin-left: 8px;
        }
      }

      .search-container {
        justify-content: center;
        align-items: center;
        background-color: #1f2020;
        border: 1px solid transparent;
        border-radius: 8px;
        gap: 8px;
        padding: 12px 16px;

        @media (max-width: 770px) { // - left menu
          display: none;
        }

        input {
          background-color: transparent;
          border: none;
          color: #eef2f1;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: normal;
          line-height: 24px;
          margin-right: 8px;

          &:focus {
            outline: none;
          }

          &::placeholder {
            color: #828c8c;
          }
        }
      }

      .focused {
        border: 1px solid #2aa5a0;
      }
    }

    .r {
      gap: 32px;
      justify-content: center;
      align-items: center;

      @media (max-width: 770px) { // - left menu
        display: none;
      }

      .write-post {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 28px;
        padding: 10px 24px;

        background-color: #1d706d;
        border-radius: 8px;
        color: #fff;
        border: none;

        @media (max-width: 1025px) { // - right menu
          display: none;
        }

        &:hover {
          background-color: #248480;
        }
      }

      .actions {
        gap: 8px;
        align-items: center;
        justify-content: center;
        height: 32px;

        img {
          margin-right: 4px;
          padding: 5px;
          border-radius: 4px;

          &:hover {
            background-color: #1f2020;
          }
        }

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;

          &:hover {
            background-color: #1f2020;
          }

          img {
            padding: 4px;
            margin-right: 0;
          }

          span {
            font-size: 16px;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 24px;
            color: #c5d3d3;
            padding: 0 8px 0 2px;
          }
        }
      }
    }
  }

  aside.left {
    padding: 24px 0 23px 24px;
    border-right: 1px solid #2a2c2c;
    grid-area: aside-left;
    position: sticky;
    top: 96px;
    height: calc(100vh - 96px);

    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: space-between;

    @media (max-width: 770px) { // - left menu
      display: none;
    }

    .upper {
      list-style-type: none;
      overflow: auto;
      scrollbar-width: thin;
      scrollbar-color: #1f2020 #171919;

      @media (max-width: 1280px) { // - left menu text
        span {
          display: none;
        }
        .arrow {
          display: none;
        }
      }

      li {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 28px;

        border-radius: 8px;
        padding: 6px 16px;
        color: #c5d0c8;
        user-select: none;

        display: flex;
        align-items: center;
        justify-self: start;
        gap: 6px;

        &:hover {
          background-color: #1f2020;
        }

        .arrow {
          margin-left: -2px;
          transition: transform .25s ease;
        }

        .arrow-rotation {
          transform: rotate(-180deg);
        }
      }

      ul {
        display: none;
      }

      .visible {
        display: block;
      }

      .more {
        font-size: 16px;
        color: #1d706d;

        &:hover {
          background-color: #171919;
          color: #248480;
          text-decoration: underline;
        }        
      }
    }

    .lower {
      list-style-type: none;
      color: #828c8c;

      display: flex;
      flex-wrap: wrap;
      column-gap: 16px;
      padding-left: 16px;

      font-size: 14px;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 20px;

      @media (max-width: 1280px) { // - left menu text
        display: none;
      }

      a {
      color: #828c8c;
      }

      li {
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 4px;

        height: 28px;
        cursor: pointer;

        &:hover {
          color: #1d706d;
        }

        svg {
          margin-right: -2px;
        }
      }
    }
  }

  main {
    padding: 32px 48px;
    grid-area: main;
    display: flex;
    flex-direction: column;

    .post {
      margin-bottom: 32px;
      flex-direction: column;

      h1 {
        font-size: 36px;
        font-weight: 600;
        letter-spacing: normal;
        line-height: 44px;
        margin: 0 0 24px 0;

        @media (max-width: 960px) { // - text-size
          margin-bottom: 16px;
          font-size: 30px;
        }
      }

      .author {
        margin-bottom: 24px;
        align-items: center;
        gap: 14px;

        img {
          border-radius: 50%;
          margin: 0px;
        }

        div {
          flex-direction: column;
          gap: 4px;

          a {
            font-size: 16px;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 24px;
          }

          time {
            margin: 5px 0 3px 0;
            color: #828c8c;
            font-size: 14px;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 20px;
          }
        }
      }

      p {
        border-top: 1px solid #2a2c2c;
        color: #c5d3d3;
        font-style: italic;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 28px;
        padding: 24px 0 0 0;
      }
    }

    p {
      font-size: 18px;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 28px;
      padding: 8px 0;

      a {
        color: #2aa5a0;

        &:hover {
          color: #248480;
          text-decoration: underline;
        }
      }
    }

    ol {
      font-size: 18px;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 28px;
      padding: 16px 0 16px 1.2em;

      li {
        font-size: inherit;
        font-weight: inherit;
        letter-spacing: inherit;
        line-height: inherit;
        padding: 4px 0;

        a {
          color: #2aa5a0;

          &:hover {
            color: #248480;
            text-decoration: underline;
          }
        }
      }
    }

    h2 {
      font-size: 32px;
      font-weight: 600;
      letter-spacing: normal;
      line-height: 40px;
      padding-bottom: 16px;
      padding-top: 32px;
    }

    img {
      margin: 40px 0;
      border-radius: 10px;
      align-self: center;
    }

    code {
      background-color: #1f2020;
      border-radius: 4px;
      font-family: monospace;
      padding: 2px;
    }

    pre {
      margin-top: 16px;
      padding: 24px;
      background-color: #202828;
      border-radius: 10px;
      white-space: pre-wrap;
    }

    .footer {
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 6px;
      margin: 20px 0 0 0;

      color: #828c8c;
      border-bottom: 1px solid #2a2c2c;
      border-top: 1px solid #2a2c2c;

      -moz-column-gap: 16px;
      column-gap: 16px;
      display: grid;
      grid-template-areas: "left middle right";
      grid-template-columns: max-content minmax(0, 1fr) max-content;

      svg {
        border-radius: 0;
        margin: 0;
        cursor: pointer;

        &:hover {
          color: #2aa5a0;
        }
      }

      button {
        align-items: center;
        display: inline-flex;
        gap: 4px;
        background: none;
        border: none;
        color: #828c8c;

        &:hover {
          color: #2aa5a0;
        }
      }

      .left {
        align-items: center;
        display: inline-flex;
        gap: 16px;
        padding: 16px 0;
        grid-area: left;
      }

      .middle {
        grid-area: middle;
        display: inline-flex;
        gap: 16px;
        padding: 0 24px;
      }

      .right {
        align-items: center;
        display: inline-flex;
        gap: 16px;
        padding: 16px 0;
        grid-area: right;

        #share {
          padding: 1px;
          height: 22px;
          width: 22px;
        }
      }
    }
  }

  aside.right {
    border-left: 1px solid #2a2c2c;
    grid-area: aside-right;
    padding: 32px 40px;
    position: sticky;
    top: 96px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1025px) { // - right menu
      display: none;
    }

    h3 {
      font-size: 22px;
      font-weight: 600;
      letter-spacing: normal;
      line-height: 32px;
      margin-bottom: 24px;
    }

    ul {
      list-style-type: none;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
      column-gap: 40px;
      row-gap: 16px;

      border-bottom: 1px solid #2a2c2c;
      padding-bottom: 32px;

      li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        a {
          color: #eef2f1;
        }

        p {
          font-size: 16px;
          font-weight: 500;
          letter-spacing: normal;
          line-height: 24px;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 16px;

          position: relative;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .bottom {
          align-items: center;
          justify-content: space-between;
          color: #828c8c;

          .left {
            gap: 6px;

            font-size: 16px;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 24px;
          }

          .right {
            font-size: 14px;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 20px;

            img {
              margin-right: 6px;
              padding: 1px;
            }

            .views {
              margin-right: 16px;
            }

            .plus {
              color: #2aa5a0;
            }
          }
        }
      }
    }
  }
}


@media (max-width: 1440px) { // - paddings
}

@media (max-width: 1280px) { // - left menu text
}

@media (max-width: 1025px) { // - right menu
}

@media (max-width: 960px) { // - text-size
}

@media (max-width: 770px) { // - left menu
}

@media (max-width: 576px) { // - paddings
}

</style>
