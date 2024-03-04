import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function scrollbar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".myBar").style.width = scrolled + "%";
  if (scrolled === 100) document.querySelector(".myBar").style.borderRadius = '0';
  else document.querySelector(".myBar").style.borderRadius = '0 2vw 2vw 0';
}

let currentbg = Math.floor(Math.random() * 5 + 1);
function changebackgrund() {
  for (let i = 1; i < 6; i++)
    document.querySelector('.App-header').classList.remove('spatter' + i)
  document.querySelector('.App-header').classList.add('spatter' + currentbg++)

  if (currentbg > 5)
    currentbg = 1;
}

window.onload = () => {
  window.onscroll = function() {scrollbar(); document.querySelector(".me").classList.remove("meOpen")};
  document.querySelector('.load').style.display = 'none'
  changebackgrund();

  const user = {
    name: 'Lukas Okkenhaug',
    desc: ' A Creative Fella from Norway',
  }

  const h1 = document.querySelector('.App-header h1');
  const h2 = document.querySelector('.App-header h2');

  h1.innerHTML = '';
  h2.innerHTML = '';
  function nameAppear() {

  const cursor = document.createElement('span');
  cursor.classList.add('cursor');
  cursor.innerHTML = '|';

  for (let i = 0; i < user.name.length; i++) {
    setTimeout(() => {
      const name = document.createElement('span');
      name.innerHTML = user.name[i, i];
      h1.append(name);
      h1.append(cursor);
    }, i * 125);
  }
  for (let i = 0; i < user.desc.length; i++) {
    setTimeout(() => {
      const desc = document.createElement('span');
      desc.innerHTML = user.desc[i, i];
      h2.append(desc);
      h2.append(cursor);
    }, (user.name.length * 150) + (i * 75));
  }
  } nameAppear();
  
  document.querySelectorAll('.icons-container img').forEach((e) => {
    e.addEventListener('click', () => {
      let desc = e.getAttribute("alt");
        if (window.innerWidth > window.innerHeight) {
          document.querySelectorAll('.desc').forEach((e) => {e.classList.remove('experienceShowDesc')})
          document.querySelector('#' + desc).classList.add('experienceShowDesc');
          document.querySelector('#Experience section').style.width = '75%';
          document.querySelectorAll("#Experience .container h1").forEach((e) => {e.style.fontSize = "2.5vw"})
      
          document.addEventListener('keydown', function(e) {
          if (e.key === "Escape") {
            document.querySelector('#' + desc).classList.remove('experienceShowDesc');
            document.querySelector('#Experience section').style.width = '100%';
            document.querySelectorAll("#Experience .container h1").forEach((e) => {e.style.fontSize = "3vw"})
          }
        })
      }
    })
  })

  document.querySelectorAll("#Hobbies .titles h1").forEach((e) => {
    e.addEventListener('click', () => {
      document.querySelectorAll("#Hobbies .container").forEach((x) => {x.style.display = "none"});
  
      if (e.innerHTML !== "Formula 1") document.querySelector("." + e.innerHTML).style.display = "flex";
      else document.querySelector(".Formula").style.display = "flex";
    })
  });

  document.querySelectorAll("#Hobbies .game").forEach((e) => {
    e.addEventListener('click', () => {
      document.querySelectorAll("#Hobbies .gameDesc").forEach((x) => {x.style.display = "none"});
      document.querySelector("." + e.firstChild.getAttribute("alt")).style.display = "block";
    })
  });

  document.addEventListener("mousemove", (e) => {
    const cursor1 = document.querySelector(".Circles1Cursor:nth-child(2)");
    const cursor2 = document.querySelector(".Circles1Cursor:nth-child(3)");
    let newTop = e.clientY - 40;
    let newLeft = e.clientX - 40;

    cursor1.setAttribute("style", "transform: translateX(" + (newLeft + 27.5) + "px) translateY(" + (newTop + 27.5) + "px);")
    cursor2.setAttribute("style", "transform: translateX(" + newLeft + "px) translateY(" + newTop + "px);")
  })

  document.querySelectorAll("#CursorChoice .cursors div").forEach((e) => {
    e.addEventListener('click', () => {
      document.querySelector(
        `.cursor${document.querySelector("#CursorChoice .cursors div").classList.toString().slice(1)}`
      ).style.display = "flex";
    });
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();