import Wiki from './img/experience/wiki-min.png'
import Html from './img/experience/html-min.png'; 
import Css from './img/experience/css-min.png';
import Scss from './img/experience/scss-min.png'; 
import Js from './img/experience/js-min.png'; 
import Csharp from './img/experience/csharp-min.png'; 
import Sql from './img/experience/mysql-min.png'; 
import React from './img/experience/react-min.png';
import Photosop from './img/experience/photoshop-min.png'; 
import Premiere from './img/experience/premiere-min.png'; 
import Indesign from './img/experience/indesign-min.png'; 
import Wordpress from './img/experience/wordpress-min.png'; 
import Obs from './img/experience/obs-min.png'; 
import f123 from './img/hobbies/f1-min.png'; 
import skyrim from './img/hobbies/skyrim-min.png'; 
import iracing from './img/hobbies/iracing-min.png'; 
import boneworks from './img/hobbies/boneworks-min.png'; 
import alyx from './img/hobbies/alyx-min.png';
import vertigo from './img/hobbies/vertigo-min.jpg'; 
import honda from './img/hobbies/honda-min.png'; 
import toyota from './img/hobbies/toyota-min.png'; 
import dodge from './img/hobbies/dodge-min.png';
import nsx from './img/hobbies/nsx-min.png'; 
import supra from './img/hobbies/supra-min.png'; 
import challenger from './img/hobbies/challenger-min.png';
import f1driver1 from './img/hobbies/norris-min.png'; 
import f1driver2 from './img/hobbies/hulkenberg-min.png'; 
import f1driver3 from './img/hobbies/alonso-min.png';
import f1logo from  './img/hobbies/mclaren-min.png'; 
import flag1 from './img/hobbies/british-flag-min.png'; 
import flag2 from './img/hobbies/german-flag-min.png'; 
import flag3 from './img/hobbies/spanish-flag-min.png'; 
import transition1 from './img/transitions/header-experience.svg'; 
import transition2 from './img/transitions/header-experience2.svg'; 
import transition3 from './img/transitions/experience-work.svg'; 
import transition4 from './img/transitions/experience-work2.svg'; 
import transition5 from './img/transitions/work-education.svg'; 
import transition6 from './img/transitions/work-education2.svg'; 
import transition7 from './img/transitions/education-hobbies.svg'; 
import transition8 from './img/transitions/education-hobbies2.svg'; 
import transition9 from './img/transitions/hobbies-footer.svg';
import school1 from './img/education/tryggheim.jpg'; 
import school2 from './img/education/kjolberg.jpg';
import school3 from './img/education/Borge.jpg'; 
import school4 from './img/education/glemmen.jpg';

let d = new Date();
const user = {
  name: 'Lukas Okkenhaug',
  desc: ' A Creative Fella from Norway',
  age: d.getFullYear() - (d.getMonth() <= 7 ? 2007 : 2006) + ' Years old'
}
if (d.getDate === 15 && d.getMonth() === 12) {
  user.age = 'Its my Birthday! I`m turning ' + (d.getFullYear() - 2006) + ' Years old'
}

let currentbg = Math.floor(Math.random() * 5 + 1);
function changebackgrund() {
  for (let i = 1; i < 6; i++)
    document.querySelector('.App-header').classList.remove('spatter' + i)
  document.querySelector('.App-header').classList.add('spatter' + currentbg++)

  if (currentbg > 5)
    currentbg = 1;
}

function scrollbar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".myBar").style.width = scrolled + "%";
  if (scrolled === 100) document.querySelector(".myBar").style.borderRadius = '0';
  else document.querySelector(".myBar").style.borderRadius = '0 2vw 2vw 0';
}

window.onload = () => {
  window.onscroll = function() {scrollbar(); document.querySelector(".me").classList.remove("meOpen")};
  document.querySelector('.load').style.display = 'none'
  changebackgrund();

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

function App() {
  return (
    <div className="App">
      <div className='load'>
        (Let me Load)
      </div>

      <div className="Circles1Cursor" style={{top: '0', left: '0'}}></div>
      <div className="Circles1Cursor" style={{top: '0', left: '0'}}></div>

      <nav>
      <div className="progress-container"><div className="progress-bar myBar"></div></div>
        <a href="/" onClick={changebackgrund}>
          <p>Home</p>
          <div className='light'></div>
          <div className='lightBulb'></div>
        </a>
        <a href='#Experience'>
          <p>Experience</p>
          <div className='light'></div>
          <div className='lightBulb'></div>
        </a>
        <a href='#Work'>
          <p>Work</p>
          <div className='light'></div>
          <div className='lightBulb'></div>
        </a>
        <a href='#Education'>
          <p>Education</p>
          <div className='light'></div>
          <div className='lightBulb'></div>
        </a>
        <a href='#Hobbies'>
          <p>Hobbies</p>
          <div className='light'></div>
          <div className='lightBulb'></div>
        </a>
      </nav>

      <div className='me meOpen'>
        <p></p>
        <div></div>
      </div>

      <header className="App-header">
        <h1 translate='no'>Lukas</h1>
        <h2>Meg</h2>
        <img className='transition' alt='transition1' src={transition1}/>
      </header>

      <article id='Experience'>
        <img className='transition' alt='transition3' src={transition3}/>
        <img className='transition' alt='transition2' src={transition2}/>
        <section style={{width: '100%'}}>
          <div className='container programming'>
            <h1>PROGRAMMING</h1>
            <div className='icons-container'>
              <img src={Html} alt='Html' />
              <img src={Css} alt='Css' />
              <img src={Scss} alt='Scss' />
              <img src={Js} alt='Js' />
              <img src={Csharp} alt='Csharp' />
              <img src={Sql} alt='Sql' />
              <img src={React} alt='React' />
            </div>
          </div>
          <div className='container media'>
            <h1>MEDIAPRODUCTION</h1>
            <div className='icons-container'>
              <img src={Photosop} alt='Photosop' />
              <img src={Premiere} alt='Premiere' />
              <img src={Wordpress} alt='Wordpress' />
              <img src={Obs} alt='Obs' />
              <img src={Indesign} alt='Indesign' />
            </div>
          </div>
          <div className='desc' id='Html'>
            <a className='wiki' href='https://en.wikipedia.org/wiki/HTML' rel='noreferrer' target='_blank'><img src={Wiki} Alt='Wiki'/></a>
                <h1>HTML</h1>
                <p>
                  I started using HTML in 2019 <br></br>
                  These are the projects I have used HTML
                  
                  <li><a href='https://github.com/Lu69as/lu69as.github.io' target='blank' rel='noreferrer'>lu69as.github.io</a></li>
                  <li><a href='https://github.com/Lu69as/exerciseCounter' target='blank' rel='noreferrer'>Exercise Counter</a></li>
                  <li><a href='https://github.com/Lu69as/Drum-Kit' target='blank' rel='noreferrer'>Drum Kit</a></li>
                  <li><a href='https://github.com/Lu69as/Simon-Game' target='blank' rel='noreferrer'>Simon Game</a></li>
                  <li><a href='https://github.com/Lu69as/Dice-game' target='blank' rel='noreferrer'>Dice game</a></li>
                  <li><a href='https://github.com/Lu69as/Voting-Site' target='blank' rel='noreferrer'>Voting Site</a></li>
                </p>
          </div>
          <div className='desc' id='Css'>
            <a className='wiki' href='https://en.wikipedia.org/wiki/CSS' rel='noreferrer' target='_blank'><img src={Wiki} Alt='Wiki'/></a>
            <h1>CSS</h1>
            <p>
              I started using CSS in 2021 <br></br>
              These are the projects I have used CSS
              
              <li><a href='https://github.com/Lu69as/lu69as.github.io' target='blank' rel='noreferrer'>lu69as.github.io</a></li>
              <li><a href='https://github.com/Lu69as/exerciseCounter' target='blank' rel='noreferrer'>Exercise Counter</a></li>
              <li><a href='https://github.com/Lu69as/Drum-Kit' target='blank' rel='noreferrer'>Drum Kit</a></li>
              <li><a href='https://github.com/Lu69as/Simon-Game' target='blank' rel='noreferrer'>Simon Game</a></li>
              <li><a href='https://github.com/Lu69as/Dice-game' target='blank' rel='noreferrer'>Dice game</a></li>
              <li><a href='https://github.com/Lu69as/Voting-Site' target='blank' rel='noreferrer'>Voting Site</a></li>
            </p>
          </div>
          <div className='desc' id='Scss'>
            <a className='wiki' href='https://en.wikipedia.org/wiki/Sass_(style_sheet_language)' rel='noreferrer' target='_blank'><img src={Wiki} Alt='Wiki'/></a>
            <h1>SCSS</h1>
            <p>
              I started using SCSS in 2021 <br></br>
              These are the projects I have used SCSS
              
              <li><a href='https://github.com/Lu69as/React-Webpage' target='blank' rel='noreferrer'>This Site</a></li>
            </p>
          </div>
          <div className='desc' id='Js'>
            <a className='wiki' href='https://en.wikipedia.org/wiki/JavaScript' rel='noreferrer' target='_blank'><img src={Wiki} Alt='Wiki'/></a>
            <h1>JS</h1>
            <p>
              I started using JavaScript in 2022 <br></br>
              These are the projects I have used JavaScript
              
              <li><a href='https://github.com/Lu69as/lu69as.github.io' target='blank' rel='noreferrer'>lu69as.github.io</a></li>
              <li><a href='https://github.com/Lu69as/exerciseCounter' target='blank' rel='noreferrer'>Exercise Counter</a></li>
              <li><a href='https://github.com/Lu69as/Drum-Kit' target='blank' rel='noreferrer'>Drum Kit</a></li>
              <li><a href='https://github.com/Lu69as/Simon-Game' target='blank' rel='noreferrer'>Simon Game</a></li>
              <li><a href='https://github.com/Lu69as/Dice-game' target='blank' rel='noreferrer'>Dice game</a></li>
              <li><a href='https://github.com/Lu69as/Voting-Site' target='blank' rel='noreferrer'>Voting Site</a></li>
            </p>
          </div>
          <div className='desc' id='Csharp'>
            <a className='wiki' href='https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' rel='noreferrer' target='_blank'><img src={Wiki} Alt='Wiki'/></a>
            <h1>C#</h1>
            <p>
              I started using C# in 2023 <br></br>
              These are the projects I have used C#
              
              <li><a href='https://github.com/Lu69as/Voting-Site' target='blank' rel='noreferrer'>Voting Site</a></li>
              <li><a href='https://github.com/Lu69as/BubbleSort' target='blank' rel='noreferrer'>Bubble Sort</a></li>
              <li><a href='https://github.com/Lu69as/TemperatureIfElseWhile' target='blank' rel='noreferrer'>Temperature</a></li>
            </p>
          </div>
          <div className='desc' id='Sql'>
            <a className='wiki' href='https://en.wikipedia.org/wiki/SQL' rel='noreferrer' target='_blank'><img src={Wiki} Alt='Wiki'/></a>
            <h1>MS SQL</h1>
            <p>
              I started using Ms SQL in 2023 <br></br>
              These are the projects I have used Ms SQL
              
              <li><a href='https://github.com/Lu69as/Voting-Site' target='blank' rel='noreferrer'>Voting Site</a></li>
            </p>
          </div>
          <div className='desc' id='React'>
            <a className='wiki' href='https://en.wikipedia.org/wiki/React_(software)' rel='noreferrer' target='_blank'><img src={Wiki} Alt='Wiki'/></a>
            <h1>React JS</h1>
            <p>
              I started using React JS in 2023 <br></br>
              These are the projects I have used React
              
              <li><a href='https://github.com/Lu69as/React-Webpage' target='blank' rel='noreferrer'>This Site</a></li>
            </p>
          </div>
          <div className='desc' id='Photosop'>
            <a className='wiki' href='https://en.wikipedia.org/wiki/Adobe_Photoshop' rel='noreferrer' target='_blank'><img src={Wiki} Alt='Wiki'/></a>
            <h1>Photosop</h1>
            <p>
              I have used Photosop since 2017 <br></br>
              I use Photosop for Thumbnails on YouTube and at my workplace for banners.
              
              <li><a href='https://www.youtube.com/c/Lu69as' target='blank' rel='noreferrer'>YouTube</a></li>
              <li><a href='https://mega.nz/file/cppyARrT#AHg6-_m21cCVS4o_RySvXTZY8LhhlWktOVfsYWVdap8' target='blank' rel='noreferrer'>FFK Banners</a></li>
              <li><a href='https://mega.nz/file/E8pl0YiA#djbfZKp7Wg4gfdJD7_KhIG6OH88s-LmrVDCxhYiLIxI' target='blank' rel='noreferrer'>Ivar Aasen NFTs</a></li>
              <li><a href='https://www.reddit.com/r/photoshopbattles/' target='blank' rel='noreferrer'>Photosop Battles</a></li>
            </p>
          </div>
          <div className='desc' id='Premiere'>
            <a className='wiki' href='https://en.wikipedia.org/wiki/Adobe_Premiere_Pro' rel='noreferrer' target='_blank'><img src={Wiki} Alt='Wiki'/></a>
            <h1>Premiere</h1>
            <p>
              I have used Premiere Pro since 2017 <br></br>
              I use Premiere for video editing for YouTube videos and some school projects.
              
              <li><a href='https://www.youtube.com/c/Lu69as' target='blank' rel='noreferrer'>YouTube</a></li>
              <li><a href='https://mega.nz/file/JoRDTDAT#3J6raHFJe0OyeSYFXp5rpwB42R3gIQSpt0pFhqlgqYw' target='blank' rel='noreferrer'>Ar Glasses</a></li>
              <li><a href='https://mega.nz/file/0sphAAhT#8Q4fa_Y16XutVVqixBLlsgJPP6thS0aULO-CH3omzBc' target='blank' rel='noreferrer'>Fake VR Ad</a></li>
            </p>
          </div>
          <div className='desc' id='Wordpress'>
            <a className='wiki' href='https://en.wikipedia.org/wiki/WordPress' rel='noreferrer' target='_blank'><img src={Wiki} Alt='Wiki'/></a>
            <h1>Wordpress</h1>
            <p>
              I have used Wordpress since 2022 <br></br>
              I used wordpress for a school project in 8th grade but also use it at my workplace.
              
              <li><a href='https://www.busposten.com' target='blank' rel='noreferrer'>busposten.com</a></li>
              <li><a href='https://internship.relevantnettside.no' target='blank' rel='noreferrer'>Internship Site</a></li>
            </p>
          </div>
          <div className='desc' id='Obs'>
            <a className='wiki' href='https://en.wikipedia.org/wiki/OBS_Studio' rel='noreferrer' target='_blank'><img src={Wiki} Alt='Wiki'/></a>
            <h1>Obs</h1>
            <p>
              I have used Obs since 2020 <br></br>
              I use Obs to stream and record videos for my YouTube Channel.
              
              <li><a href='https://www.youtube.com/c/Lu69as' target='blank' rel='noreferrer'>YouTube</a></li>
            </p>
          </div>
          <div className='desc' id='Indesign'>
            <a className='wiki' href='https://en.wikipedia.org/wiki/Adobe_Indesign' rel='noreferrer' target='_blank'><img src={Wiki} Alt='Wiki'/></a>
            <h1>Indesign</h1>
            <p>
              I have used Indesign since 2023 <br></br>
              I have used Indesign to create a toutorial for a school project.
              
              <li><a href='https://mega.nz/file/4kJmjRrT#eD3m6Her7EEm7K1kRhjFd3PeJMFbr7c_J60xBdHBCMA' target='blank' rel='noreferrer'>VS Toutorial</a></li>
            </p>
          </div>
        </section>
      </article>

      <article id='Work'>
        <img className='transition' alt='transition4' src={transition5}/>
        <img className='transition' alt='transition5' src={transition4}/>
        <div className='window'>
          <div className='blur'></div><div className='blurT'></div>
          <div className='plank'></div><div className='plankT'></div>
          <h1>Relevant</h1>
          <p>I work at <a href='https://relevant.no/' target='_blank' rel='noreferrer'>Relevant Advertizing and Media Beurou </a> 
            on mondays and fridays as a free Intern for them and is planing to become a full intern for them after the summer.
            <br></br><br></br>I learn mostly design, but also use my programming skills to work faster. </p>
        </div>
        <div className='window'>
          <div className='blur'></div><div className='blurT'></div>
          <div className='plank'></div><div className='plankT'></div>
          <h1>ARK</h1>
          <p>I had a paid single-day-job organizing books for <a href='https://www.ark.no/' target='_blank' rel='noreferrer'>Ark Bookstore </a>
             ØstfoldHalden in 2019, I got the Job from my aunt.
            <br></br><br></br>I learned how to be efficent with organizing and counting store items. </p>
        </div>
        <div className='window'>
          <div className='blur'></div><div className='blurT'></div>
          <div className='plank'></div><div className='plankT'></div>
          <h1>Roofwork</h1>
          <p>I got paid for helping my dad fix the roof on my parents rental house in the summer of 2022.
            <br></br><br></br>I learned to work efficent with my dad and learned about some roof and construction stuff. </p>
        </div>
        <div className='window'>
          <div className='blur'></div><div className='blurT'></div>
          <div className='plank'></div><div className='plankT'></div>
          <h1>Shovelling and Grasscutting</h1>
          <p>I cut grass during the summer and Shovel snow during the winter for both my dad and one of my neighbors.
            <br></br><br></br>From this, I learn to do a thourough job and to work efficently with how I do my work.</p>
        </div>
      </article>

      <article id='Education'>
        <img className='transition' alt='transition6' src={transition7}/>
        <img className='transition' alt='transition7' src={transition6}/>

        <section>
          <div className='line'>
            <div className='endline'></div>
            <a className='school' href="https://tryggheim-halden.barnehage.no/" target="_blank" rel="noreferrer">
              <img src={school1} alt='school1'/>
              <h1>Tryggheim Barnehage <br></br> 2009 - 2012</h1>
            </a>
            <a className='school' href="https://www.fredrikstad.kommune.no/skoler/kjolberg-skole/" target="_blank" rel="noreferrer">
              <img src={school2} alt='school2'/>
              <h1>Kjølberg School <br></br> 2012 - 2019</h1>
            </a>
            <a className='school' href="https://www.fredrikstad.kommune.no/skoler/borge-uskole/" target="_blank" rel="noreferrer">
              <img src={school3} alt='school3'/>
              <h1>Borge Secondary School <br></br> 2019 - 2022</h1>
            </a>
            <a className='school' href="https://viken.no/glemmen-vgs/" target="_blank" rel="noreferrer">
              <img src={school4} alt='school4'/>
              <h1>Glemmen High School <br></br> 2022 - 2024</h1>
            </a>
          </div>
        </section>
      </article>

      <article id='Hobbies'>
      <img className='transition' alt='transition8' src={transition9}/>
      <img className='transition' alt='transition9' src={transition8}/>
        <section className='titles'>
          <h1>Games</h1>
          <h1>Cars</h1>
          <h1>Formula 1</h1>
          <h1>YouTube</h1>
        </section>
        <div className='container Games' style={{display: "none"}}>
          <section className='gameList'>
            <div className='game'>
              <img src={f123} alt='f123' />
              <div></div>
            </div>
            <div className='game'>
              <img src={skyrim} alt='skyrim' />
              <div></div>
            </div>
            <div className='game'>
              <img src={iracing} alt='iracing' />
              <div></div>
            </div>
            <div className='game'>
              <img src={boneworks} alt='boneworks' />
              <div></div>
            </div>
            <div className='game'>
              <img src={alyx} alt='alyx' />
              <div></div>
            </div>
            <div className='game'>
              <img src={vertigo} alt='vertigo' />
              <div></div>
            </div>
          </section>
          <section className='gameDescriptions'>
            <div className='gameDesc f123'>
              <h1>F1 23</h1>
              <p>
                F1 23 is the official and most authentic way to drive f1 cars virtually
                The main reason for playing this game is beacause of its in-depth career mode
                where you can start all the way from F2 and work your way up to a World Championship
              </p>
              <a href='https://store.steampowered.com/app/2108330/F1_23/' target='_blank' rel='noreferrer'>
                <svg style={{ background: '#171a21' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path fill="#fff" d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/>
                </svg>
              </a>
              <a href='https://store.playstation.com/en-no/product/EP0006-PPSA09802_00-F12023PS5GAME000/' target='_blank' rel='noreferrer'>
                <svg style={{ background: '#171a21' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 154.81912">
                  <path fill="#fff" d="m 197.23914,117.96194 c -3.8677,4.8796 -13.34356,8.36053 -13.34356,8.36053 0,0 -70.49109,25.31994 -70.49109,25.31994 0,0 0,-18.67289 0,-18.67289 0,0 51.87665,-18.48401 51.87665,-18.48401 5.887,-2.10924 6.79096,-5.09097 2.00581,-6.65604 -4.77616,-1.56957 -13.42451,-1.11983 -19.31601,0.99841 0,0 -34.56645,12.17426 -34.56645,12.17426 0,0 0,-19.37898 0,-19.37898 0,0 1.99232,-0.6746 1.99232,-0.6746 0,0 9.98856,-3.534896 24.03371,-5.09097 14.04515,-1.547081 31.24291,0.211374 44.74389,5.32933 15.21445,4.80764 16.92793,11.89543 13.06473,16.77502 z M 120.11451,86.165853 c 0,0 0,-47.752601 0,-47.752601 0,-5.608163 -1.03439,-10.771093 -6.29626,-12.232725 -4.0296,-1.290734 -6.53012,2.45104 -6.53012,8.054706 0,0 0,119.583887 0,119.583887 0,0 -32.250314,-10.23591 -32.250314,-10.23591 0,0 0,-142.58321 0,-142.58321 13.712343,2.54549 33.689454,8.56291 44.429074,12.18326 27.31226,9.376917 36.57225,21.047482 36.57225,47.343343 0,25.630256 -15.82159,35.344478 -35.92463,25.63925 z M 15.862004,131.01768 C 0.24279269,126.6193 -2.3566614,117.45375 4.7626047,112.17389 c 6.5795883,-4.8751 17.7689333,-8.54492 17.7689333,-8.54492 0,0 46.241498,-16.442224 46.241498,-16.442224 0,0 0,18.744854 0,18.744854 0,0 -33.275709,11.90892 -33.275709,11.90892 -5.878004,2.10924 -6.781967,5.09547 -2.005807,6.66054 4.780657,1.56506 13.433512,1.11983 19.320511,-0.99391 0,0 15.961005,-5.79256 15.961005,-5.79256 0,0 0,16.77053 0,16.77053 -1.011893,0.17989 -2.140724,0.35978 -3.184104,0.53518 -15.965505,2.60845 -32.969893,1.5201 -49.726928,-4.00262 z m 171.105246,7.42508 c 2.0193,0 3.91267,0.78254 5.33832,2.22618 1.42566,1.42115 2.21269,3.31903 2.21269,5.33383 0,2.02379 -0.78703,3.91267 -2.21269,5.33383 -1.42565,1.43464 -3.31902,2.21718 -5.33832,2.21718 -2.0193,0 -3.90818,-0.78254 -5.33833,-2.21718 -1.42565,-1.42116 -2.20818,-3.31004 -2.20818,-5.33383 0,-4.16453 3.38198,-7.56001 7.54651,-7.56001 z m -6.27827,7.56001 c 0,1.6775 0.65211,3.25606 1.83941,4.43436 1.18279,1.19629 2.76585,1.8439 4.43886,1.8439 3.46743,0 6.27826,-2.81532 6.27826,-6.27826 0,-1.682 -0.64761,-3.26056 -1.8394,-4.44336 -1.1828,-1.19629 -2.76586,-1.83941 -4.43886,-1.83941 -1.67301,0 -3.25607,0.64312 -4.43886,1.83941 -1.1873,1.1828 -1.83941,2.76136 -1.83941,4.44336 z m 8.55841,-4.07008 c 0.82751,0.36428 1.24576,1.06586 1.24576,2.06427 0,0.5127 -0.10794,0.94444 -0.3283,1.28174 -0.15741,0.24285 -0.38228,0.44074 -0.63413,0.61163 0.19788,0.11694 0.37328,0.25635 0.50371,0.41826 0.17988,0.23386 0.28332,0.60713 0.29682,1.11533 0,0 0.0405,1.07486 0.0405,1.07486 0.0135,0.28783 0.0315,0.5082 0.0765,0.64312 0.045,0.19788 0.13042,0.32381 0.23835,0.36429 0,0 0.11244,0.054 0.11244,0.054 0,0 0,0.12143 0,0.12143 0,0 0,0.18439 0,0.18439 0,0 0,0.18439 0,0.18439 0,0 -0.18439,0 -0.18439,0 0,0 -1.33571,0 -1.33571,0 0,0 -0.10793,0 -0.10793,0 0,0 -0.054,-0.0944 -0.054,-0.0944 -0.045,-0.0899 -0.0764,-0.19338 -0.10793,-0.3283 -0.0225,-0.12143 -0.045,-0.3328 -0.0585,-0.65661 0,0 -0.0675,-1.33571 -0.0675,-1.33571 -0.018,-0.46322 -0.1754,-0.75105 -0.47222,-0.90396 -0.18439,-0.0854 -0.49021,-0.12592 -0.90396,-0.12592 0,0 -2.28914,0 -2.28914,0 0,0 0,3.26056 0,3.26056 0,0 0,0.18439 0,0.18439 0,0 -0.18889,0 -0.18889,0 0,0 -1.08836,0 -1.08836,0 0,0 -0.18438,0 -0.18438,0 0,0 0,-0.18439 0,-0.18439 0,0 0,-8.03672 0,-8.03672 0,0 0,-0.18439 0,-0.18439 0,0 0.18438,0 0.18438,0 0,0 3.71929,0 3.71929,0 0.63863,0 1.17381,0.0944 1.58756,0.28782 z m -4.0296,3.38648 c 0,0 2.32961,0 2.32961,0 0.46772,0 0.841,-0.0855 1.10634,-0.26084 0.24286,-0.1754 0.35979,-0.49471 0.35979,-0.95793 0,-0.5037 -0.1664,-0.83201 -0.51719,-1.0074 -0.19338,-0.0944 -0.46323,-0.14841 -0.80503,-0.14841 0,0 -2.47352,0 -2.47352,0 0,0 0,2.37458 0,2.37458 z"/>
                </svg>
              </a>
              <a href='https://store.epicgames.com/en-US/p/f1-23' target='_blank' rel='noreferrer'>
                <svg style={{ background: '#171a21' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path fill="#fff" d="M 10 3 C 6.69 3 4 5.69 4 9 L 4 41.240234 L 25 47.539062 L 46 41.240234 L 46 9 C 46 5.69 43.31 3 40 3 L 10 3 z M 11 8 L 15 8 L 15 11 L 11 11 L 11 18 L 14 18 L 14 21 L 11 21 L 11 28 L 15 28 L 15 31 L 11 31 C 9.34 31 8 29.66 8 28 L 8 11 C 8 9.34 9.34 8 11 8 z M 17 8 L 23 8 C 24.66 8 26 9.34 26 11 L 26 18 C 26 19.66 24.66 21 23 21 L 20 21 L 20 31 L 17 31 L 17 8 z M 28 8 L 31 8 L 31 31 L 28 31 L 28 8 z M 36 8 L 39 8 C 40.66 8 42 9.34 42 11 L 42 15 L 39 15 L 39 11 L 36 11 L 36 28 L 39 28 L 39 24 L 42 24 L 42 28 C 42 29.66 40.66 31 39 31 L 36 31 C 34.34 31 33 29.66 33 28 L 33 11 C 33 9.34 34.34 8 36 8 z M 20 11 L 20 18 L 23 18 L 23 11 L 20 11 z M 9 34 L 13 34 C 13.55 34 14 34.45 14 35 L 14 36 L 13 36 L 13 35.25 C 13 35.11 12.89 35 12.75 35 L 9.25 35 C 9.11 35 9 35.11 9 35.25 L 9 38.75 C 9 38.89 9.11 39 9.25 39 L 12.75 39 C 12.89 39 13 38.89 13 38.75 L 13 38 L 12 38 L 12 37 L 14 37 L 14 39 C 14 39.55 13.55 40 13 40 L 9 40 C 8.45 40 8 39.55 8 39 L 8 35 C 8 34.45 8.45 34 9 34 z M 18 34 L 19 34 L 22 40 L 21 40 L 20.5 39 L 16.5 39 L 16 40 L 15 40 L 18 34 z M 23 34 L 24 34 L 26 38 L 28 34 L 29 34 L 29 40 L 28 40 L 28 36 L 26.5 39 L 25.5 39 L 24 36 L 24 40 L 23 40 L 23 34 z M 30 34 L 35 34 L 35 35 L 31 35 L 31 36.5 L 33 36.5 L 33 37.5 L 31 37.5 L 31 39 L 35 39 L 35 40 L 30 40 L 30 34 z M 37 34 L 41 34 C 41.55 34 42 34.45 42 35 L 42 35.5 L 41 35.5 L 41 35.25 C 41 35.11 40.89 35 40.75 35 L 37.25 35 C 37.11 35 37 35.11 37 35.25 L 37 36.25 C 37 36.39 37.11 36.5 37.25 36.5 L 41 36.5 C 41.55 36.5 42 36.95 42 37.5 L 42 39 C 42 39.55 41.55 40 41 40 L 37 40 C 36.45 40 36 39.55 36 39 L 36 38.5 L 37 38.5 L 37 38.75 C 37 38.89 37.11 39 37.25 39 L 40.75 39 C 40.89 39 41 38.89 41 38.75 L 41 37.75 C 41 37.61 40.89 37.5 40.75 37.5 L 37 37.5 C 36.45 37.5 36 37.05 36 36.5 L 36 35 C 36 34.45 36.45 34 37 34 z M 18.5 35 L 17 38 L 20 38 L 18.5 35 z"/>
                </svg>
              </a>
              <a href='https://www.xbox.com/en-us/games/store/f1-23/9mtk0s8cq0qv' target='_blank' rel='noreferrer'>
                <svg style={{ background: '#171a21' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372.36823 372.57281">
                  <path fill="#fff" d="M 169.18811,359.44924 C 140.50497,356.70211 111.4651,346.40125 86.518706,330.1252 65.614374,316.48637 60.893704,310.87967 60.893704,299.69061 c 0,-22.47524 24.711915,-61.84014 66.992496,-106.71584 24.01246,-25.48631 57.46022,-55.36001 61.0775,-54.55105 7.0309,1.57238 63.25048,56.41053 84.29655,82.2252 33.28077,40.82148 48.58095,74.24535 40.808,89.14682 -5.9087,11.32753 -42.57224,33.4669 -69.50775,41.97242 -22.19984,7.01011 -51.35538,9.9813 -75.37239,7.68108 z M 32.660004,276.3228 C 15.288964,249.67326 6.5125436,223.43712 2.2752336,185.49086 c -1.39917002,-12.53 -0.89778,-19.69701 3.17715,-45.41515 5.0788204,-32.05404 23.3330104,-69.136381 45.2671304,-91.957616 9.34191,-9.719732 10.17624,-9.956543 21.56341,-6.120482 13.828357,4.658436 28.595936,14.857457 51.498366,35.56661 l 13.36254,12.082873 -7.2969,8.96431 C 95.97448,140.22403 60.217254,199.2085 46.741444,235.70071 c -7.32599,19.83862 -10.28084,39.75281 -7.12868,48.04363 2.12818,5.59752 0.17339,3.51093 -6.95276,-7.42154 z m 304.915426,4.53255 c 1.71605,-8.37719 -0.4544,-23.76257 -5.5413,-39.28002 -11.01667,-33.60598 -47.83964,-96.12421 -81.65282,-138.63054 L 239.73699,89.563875 251.25285,78.989784 c 15.03631,-13.806637 25.47602,-22.073835 36.74025,-29.094513 8.88881,-5.540156 21.59109,-10.444558 27.05113,-10.444558 3.36626,0 15.21723,12.298726 24.78421,25.720611 14.81725,20.787711 25.71782,45.986976 31.24045,72.219686 3.56833,16.9498 3.8657,53.23126 0.57486,70.13935 -2.70068,13.87582 -8.40314,31.87484 -13.9661,44.08195 -4.16823,9.14657 -14.53521,26.91044 -19.0783,32.69074 -2.33569,2.97175 -2.33761,2.96527 -1.02393,-3.4477 z M 172.25917,33.104812 c -15.60147,-7.922671 -39.6696,-16.427164 -52.96493,-18.715209 -4.66097,-0.802124 -12.61193,-1.249474 -17.6688,-0.994114 -10.969613,0.55394 -10.479662,-0.0197 7.11783,-8.3336652 14.63023,-6.912081 26.83386,-10.976696 43.40044,-14.455218 18.6362,-3.9130858 53.66559,-3.9590088 72.00507,-0.0944 19.80818,4.174105 43.13297,12.854085 56.27623,20.9423862 l 3.90633,2.403927 -8.96247,-0.452584 c -17.81002,-0.899366 -43.76575,6.295879 -71.63269,19.857459 -8.40538,4.090523 -15.71788,7.357511 -16.25,7.25997 -0.53211,-0.09754 -7.38426,-3.43589 -15.22701,-7.418555 z"/>
                </svg>
              </a>
            </div>
            <div className='gameDesc skyrim'>
              <h1>Skyrim VR</h1>
              <p>
                Skyrim is one of the biggest roleplaying games ever and the VR version is just as big.
                The VR version isn't a masterpiece since it is a pretty lazy conversion to the VR headset.
                The only reason this game is even playable is that there are thousands of people modding this game
                still striving to make it into one of the best functional VR games ever, with the story of skyrim.
              </p>
              <a href='https://store.steampowered.com/app/611670/The_Elder_Scrolls_V_Skyrim_VR/' target='_blank' rel='noreferrer'>
                <svg style={{ background: '#171a21' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path fill="#fff" d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/>
                </svg>
              </a>
              <a href='https://store.playstation.com/no-no/product/EP1003-CUSA08933_00-SKYRIMVR00000000/' target='_blank' rel='noreferrer'>
                <svg style={{ background: '#171a21' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 154.81912">
                  <path fill="#fff" d="m 197.23914,117.96194 c -3.8677,4.8796 -13.34356,8.36053 -13.34356,8.36053 0,0 -70.49109,25.31994 -70.49109,25.31994 0,0 0,-18.67289 0,-18.67289 0,0 51.87665,-18.48401 51.87665,-18.48401 5.887,-2.10924 6.79096,-5.09097 2.00581,-6.65604 -4.77616,-1.56957 -13.42451,-1.11983 -19.31601,0.99841 0,0 -34.56645,12.17426 -34.56645,12.17426 0,0 0,-19.37898 0,-19.37898 0,0 1.99232,-0.6746 1.99232,-0.6746 0,0 9.98856,-3.534896 24.03371,-5.09097 14.04515,-1.547081 31.24291,0.211374 44.74389,5.32933 15.21445,4.80764 16.92793,11.89543 13.06473,16.77502 z M 120.11451,86.165853 c 0,0 0,-47.752601 0,-47.752601 0,-5.608163 -1.03439,-10.771093 -6.29626,-12.232725 -4.0296,-1.290734 -6.53012,2.45104 -6.53012,8.054706 0,0 0,119.583887 0,119.583887 0,0 -32.250314,-10.23591 -32.250314,-10.23591 0,0 0,-142.58321 0,-142.58321 13.712343,2.54549 33.689454,8.56291 44.429074,12.18326 27.31226,9.376917 36.57225,21.047482 36.57225,47.343343 0,25.630256 -15.82159,35.344478 -35.92463,25.63925 z M 15.862004,131.01768 C 0.24279269,126.6193 -2.3566614,117.45375 4.7626047,112.17389 c 6.5795883,-4.8751 17.7689333,-8.54492 17.7689333,-8.54492 0,0 46.241498,-16.442224 46.241498,-16.442224 0,0 0,18.744854 0,18.744854 0,0 -33.275709,11.90892 -33.275709,11.90892 -5.878004,2.10924 -6.781967,5.09547 -2.005807,6.66054 4.780657,1.56506 13.433512,1.11983 19.320511,-0.99391 0,0 15.961005,-5.79256 15.961005,-5.79256 0,0 0,16.77053 0,16.77053 -1.011893,0.17989 -2.140724,0.35978 -3.184104,0.53518 -15.965505,2.60845 -32.969893,1.5201 -49.726928,-4.00262 z m 171.105246,7.42508 c 2.0193,0 3.91267,0.78254 5.33832,2.22618 1.42566,1.42115 2.21269,3.31903 2.21269,5.33383 0,2.02379 -0.78703,3.91267 -2.21269,5.33383 -1.42565,1.43464 -3.31902,2.21718 -5.33832,2.21718 -2.0193,0 -3.90818,-0.78254 -5.33833,-2.21718 -1.42565,-1.42116 -2.20818,-3.31004 -2.20818,-5.33383 0,-4.16453 3.38198,-7.56001 7.54651,-7.56001 z m -6.27827,7.56001 c 0,1.6775 0.65211,3.25606 1.83941,4.43436 1.18279,1.19629 2.76585,1.8439 4.43886,1.8439 3.46743,0 6.27826,-2.81532 6.27826,-6.27826 0,-1.682 -0.64761,-3.26056 -1.8394,-4.44336 -1.1828,-1.19629 -2.76586,-1.83941 -4.43886,-1.83941 -1.67301,0 -3.25607,0.64312 -4.43886,1.83941 -1.1873,1.1828 -1.83941,2.76136 -1.83941,4.44336 z m 8.55841,-4.07008 c 0.82751,0.36428 1.24576,1.06586 1.24576,2.06427 0,0.5127 -0.10794,0.94444 -0.3283,1.28174 -0.15741,0.24285 -0.38228,0.44074 -0.63413,0.61163 0.19788,0.11694 0.37328,0.25635 0.50371,0.41826 0.17988,0.23386 0.28332,0.60713 0.29682,1.11533 0,0 0.0405,1.07486 0.0405,1.07486 0.0135,0.28783 0.0315,0.5082 0.0765,0.64312 0.045,0.19788 0.13042,0.32381 0.23835,0.36429 0,0 0.11244,0.054 0.11244,0.054 0,0 0,0.12143 0,0.12143 0,0 0,0.18439 0,0.18439 0,0 0,0.18439 0,0.18439 0,0 -0.18439,0 -0.18439,0 0,0 -1.33571,0 -1.33571,0 0,0 -0.10793,0 -0.10793,0 0,0 -0.054,-0.0944 -0.054,-0.0944 -0.045,-0.0899 -0.0764,-0.19338 -0.10793,-0.3283 -0.0225,-0.12143 -0.045,-0.3328 -0.0585,-0.65661 0,0 -0.0675,-1.33571 -0.0675,-1.33571 -0.018,-0.46322 -0.1754,-0.75105 -0.47222,-0.90396 -0.18439,-0.0854 -0.49021,-0.12592 -0.90396,-0.12592 0,0 -2.28914,0 -2.28914,0 0,0 0,3.26056 0,3.26056 0,0 0,0.18439 0,0.18439 0,0 -0.18889,0 -0.18889,0 0,0 -1.08836,0 -1.08836,0 0,0 -0.18438,0 -0.18438,0 0,0 0,-0.18439 0,-0.18439 0,0 0,-8.03672 0,-8.03672 0,0 0,-0.18439 0,-0.18439 0,0 0.18438,0 0.18438,0 0,0 3.71929,0 3.71929,0 0.63863,0 1.17381,0.0944 1.58756,0.28782 z m -4.0296,3.38648 c 0,0 2.32961,0 2.32961,0 0.46772,0 0.841,-0.0855 1.10634,-0.26084 0.24286,-0.1754 0.35979,-0.49471 0.35979,-0.95793 0,-0.5037 -0.1664,-0.83201 -0.51719,-1.0074 -0.19338,-0.0944 -0.46323,-0.14841 -0.80503,-0.14841 0,0 -2.47352,0 -2.47352,0 0,0 0,2.37458 0,2.37458 z"/>
                </svg>
              </a>
            </div>
            <div className='gameDesc iracing'>
              <h1>iRacing</h1>
              <p>
                iRacing is the biggest and of the most realistic multiplayer car simulation game in the world.
                Many people dislike the game for its expensive subscribtion and price for extra cars that arent free.
                Allthoug its important to realize that the multiplayer service is really expensive to upkeep and may be worth it.
              </p>
              <a href='https://store.steampowered.com/app/266410/iRacing/' target='_blank' rel='noreferrer'>
                <svg style={{ background: '#171a21' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path fill="#fff" d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/>
                </svg>
              </a>
            </div>
            <div className='gameDesc boneworks'>
              <h1>Boneworks</h1>
              <p>
                Boneworks is hands down the most realistic VR game accesible to the public.
                It's physics engine has been carefully crafted to make every item in the game have weight and interactivity.
                The guns in the game are also made to be as realistic as possible with it also having the same interactivity.
              </p>
              <a href='https://store.steampowered.com/app/823500/BONEWORKS/' target='_blank' rel='noreferrer'>
                <svg style={{ background: '#171a21' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path fill="#fff" d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/>
                </svg>
              </a>
              <a href='https://www.meta.com/en-gb/experiences/pcvr/2385436581584047/' target='_blank' rel='noreferrer'>
                <svg style={{ background: '#171a21' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="#fff" d="M47,29.36l-2.193,1.663L42.62,29.5c0-0.16,0-0.33-0.01-0.5c0-0.16,0-0.33-0.01-0.5	c-0.14-3.94-1.14-8.16-3.14-11.25c-1.54-2.37-3.51-3.5-5.71-3.5c-2.31,0-4.19,1.38-6.27,4.38c-0.06,0.09-0.13,0.18-0.19,0.28	c-0.04,0.05-0.07,0.1-0.11,0.16c-0.1,0.15-0.2,0.3-0.3,0.46c-0.9,1.4-1.84,3.03-2.86,4.83c-0.09,0.17-0.19,0.34-0.28,0.51	c-0.03,0.04-0.06,0.09-0.08,0.13l-0.21,0.37l-1.24,2.19c-2.91,5.15-3.65,6.33-5.1,8.26C14.56,38.71,12.38,40,9.51,40	c-3.4,0-5.56-1.47-6.89-3.69C1.53,34.51,1,32.14,1,29.44l4.97,0.17c0,1.76,0.38,3.1,0.89,3.92C7.52,34.59,8.49,35,9.5,35	c1.29,0,2.49-0.27,4.77-3.43c1.83-2.53,3.99-6.07,5.44-8.3l1.37-2.09l0.29-0.46l0.3-0.45l0.5-0.77c0.76-1.16,1.58-2.39,2.46-3.57	c0.1-0.14,0.2-0.28,0.31-0.42c0.1-0.14,0.21-0.28,0.31-0.41c0.9-1.15,1.85-2.22,2.87-3.1c1.85-1.61,3.84-2.5,5.85-2.5	c3.37,0,6.58,1.95,9.04,5.61c2.51,3.74,3.82,8.4,3.97,13.25c0.01,0.16,0.01,0.33,0.01,0.5C47,29.03,47,29.19,47,29.36z M4.918,15.456	C7.195,11.951,10.483,9.5,14.253,9.5c2.184,0,4.354,0.645,6.621,2.493c2.479,2.02,5.122,5.346,8.419,10.828l1.182,1.967	c2.854,4.746,4.477,7.187,5.428,8.339C37.125,34.606,37.888,35,39,35c2.82,0,3.617-2.54,3.617-5.501L47,29.362	c0,3.095-0.611,5.369-1.651,7.165C44.345,38.264,42.387,40,39.093,40c-2.048,0-3.862-0.444-5.868-2.333	c-1.542-1.45-3.345-4.026-4.732-6.341l-4.126-6.879c-2.07-3.452-3.969-6.027-5.068-7.192c-1.182-1.254-2.642-2.754-5.067-2.754	c-1.963,0-3.689,1.362-5.084,3.465L4.918,15.456z M14.25,14.5	c-1.959,0-3.683,1.362-5.075,3.465C7.206,20.937,6,25.363,6,29.614c0,1.753-0.003,3.072,0.5,3.886l-3.84,2.813	C1.574,34.507,1,32.2,1,29.5c0-4.91,1.355-10.091,3.918-14.044C7.192,11.951,10.507,9.5,14.27,9.5L14.25,14.5z M21.67,20.27l-0.3,0.45l-0.29,0.46c0.71,1.03,1.52,2.27,2.37,3.69l0.21-0.37c0.02-0.04,0.05-0.09,0.08-0.13 c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27z M24.94,15.51c-0.11,0.14-0.21,0.28-0.31,0.42 c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c0.04-0.06,0.07-0.11,0.11-0.16c0.06-0.1,0.13-0.19,0.19-0.28 c-0.76-1.12-1.5-2.13-2.23-3.03C25.15,15.23,25.04,15.37,24.94,15.51z M21.67,20.27l-0.3,0.45c0.71,1.02,1.51,2.24,2.37,3.65c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27 z M24.63,15.93c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c-0.77-1.14-1.52-2.16-2.24-3.06 C24.83,15.65,24.73,15.79,24.63,15.93z"/>
                </svg>
              </a>
            </div>
            <div className='gameDesc alyx'>
              <h1>Half-Life Alyx</h1>
              <p>
                Half Life Alyx is the third Half-Life title in the series of games made by valve.
                Its story is renound for being the best in VR and when you pair that with a pretty decent set of physics
                you get what I would call the best VR game ever. An absolute essential for anyone wanting to try the Medium.
              </p>
              <a href='https://store.steampowered.com/app/546560/HalfLife_Alyx/' target='_blank' rel='noreferrer'>
                <svg style={{ background: '#171a21' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path fill="#fff" d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/>
                </svg>
              </a>
            </div>
            <div className='gameDesc vertigo'>
              <h1>Vertigo 2</h1>
              <p>
                Vertigo 2 is Half Life Alyx just a little worse but also way funnier.
                It has so many easter eggs and referances throughout the game's kind of great story.
                The game doesnt have as much functionality as Boneworks, but still works very well with the surrounding world.
              </p>
              <a href='https://store.steampowered.com/app/843390/Vertigo_2/' target='_blank' rel='noreferrer'>
                <svg style={{ background: '#171a21' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path fill="#fff" d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/>
                </svg>
              </a>
              <a href='https://store.playstation.com/en-us/concept/10009050' target='_blank' rel='noreferrer'>
                <svg style={{ background: '#171a21' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 154.81912">
                  <path fill="#fff" d="m 197.23914,117.96194 c -3.8677,4.8796 -13.34356,8.36053 -13.34356,8.36053 0,0 -70.49109,25.31994 -70.49109,25.31994 0,0 0,-18.67289 0,-18.67289 0,0 51.87665,-18.48401 51.87665,-18.48401 5.887,-2.10924 6.79096,-5.09097 2.00581,-6.65604 -4.77616,-1.56957 -13.42451,-1.11983 -19.31601,0.99841 0,0 -34.56645,12.17426 -34.56645,12.17426 0,0 0,-19.37898 0,-19.37898 0,0 1.99232,-0.6746 1.99232,-0.6746 0,0 9.98856,-3.534896 24.03371,-5.09097 14.04515,-1.547081 31.24291,0.211374 44.74389,5.32933 15.21445,4.80764 16.92793,11.89543 13.06473,16.77502 z M 120.11451,86.165853 c 0,0 0,-47.752601 0,-47.752601 0,-5.608163 -1.03439,-10.771093 -6.29626,-12.232725 -4.0296,-1.290734 -6.53012,2.45104 -6.53012,8.054706 0,0 0,119.583887 0,119.583887 0,0 -32.250314,-10.23591 -32.250314,-10.23591 0,0 0,-142.58321 0,-142.58321 13.712343,2.54549 33.689454,8.56291 44.429074,12.18326 27.31226,9.376917 36.57225,21.047482 36.57225,47.343343 0,25.630256 -15.82159,35.344478 -35.92463,25.63925 z M 15.862004,131.01768 C 0.24279269,126.6193 -2.3566614,117.45375 4.7626047,112.17389 c 6.5795883,-4.8751 17.7689333,-8.54492 17.7689333,-8.54492 0,0 46.241498,-16.442224 46.241498,-16.442224 0,0 0,18.744854 0,18.744854 0,0 -33.275709,11.90892 -33.275709,11.90892 -5.878004,2.10924 -6.781967,5.09547 -2.005807,6.66054 4.780657,1.56506 13.433512,1.11983 19.320511,-0.99391 0,0 15.961005,-5.79256 15.961005,-5.79256 0,0 0,16.77053 0,16.77053 -1.011893,0.17989 -2.140724,0.35978 -3.184104,0.53518 -15.965505,2.60845 -32.969893,1.5201 -49.726928,-4.00262 z m 171.105246,7.42508 c 2.0193,0 3.91267,0.78254 5.33832,2.22618 1.42566,1.42115 2.21269,3.31903 2.21269,5.33383 0,2.02379 -0.78703,3.91267 -2.21269,5.33383 -1.42565,1.43464 -3.31902,2.21718 -5.33832,2.21718 -2.0193,0 -3.90818,-0.78254 -5.33833,-2.21718 -1.42565,-1.42116 -2.20818,-3.31004 -2.20818,-5.33383 0,-4.16453 3.38198,-7.56001 7.54651,-7.56001 z m -6.27827,7.56001 c 0,1.6775 0.65211,3.25606 1.83941,4.43436 1.18279,1.19629 2.76585,1.8439 4.43886,1.8439 3.46743,0 6.27826,-2.81532 6.27826,-6.27826 0,-1.682 -0.64761,-3.26056 -1.8394,-4.44336 -1.1828,-1.19629 -2.76586,-1.83941 -4.43886,-1.83941 -1.67301,0 -3.25607,0.64312 -4.43886,1.83941 -1.1873,1.1828 -1.83941,2.76136 -1.83941,4.44336 z m 8.55841,-4.07008 c 0.82751,0.36428 1.24576,1.06586 1.24576,2.06427 0,0.5127 -0.10794,0.94444 -0.3283,1.28174 -0.15741,0.24285 -0.38228,0.44074 -0.63413,0.61163 0.19788,0.11694 0.37328,0.25635 0.50371,0.41826 0.17988,0.23386 0.28332,0.60713 0.29682,1.11533 0,0 0.0405,1.07486 0.0405,1.07486 0.0135,0.28783 0.0315,0.5082 0.0765,0.64312 0.045,0.19788 0.13042,0.32381 0.23835,0.36429 0,0 0.11244,0.054 0.11244,0.054 0,0 0,0.12143 0,0.12143 0,0 0,0.18439 0,0.18439 0,0 0,0.18439 0,0.18439 0,0 -0.18439,0 -0.18439,0 0,0 -1.33571,0 -1.33571,0 0,0 -0.10793,0 -0.10793,0 0,0 -0.054,-0.0944 -0.054,-0.0944 -0.045,-0.0899 -0.0764,-0.19338 -0.10793,-0.3283 -0.0225,-0.12143 -0.045,-0.3328 -0.0585,-0.65661 0,0 -0.0675,-1.33571 -0.0675,-1.33571 -0.018,-0.46322 -0.1754,-0.75105 -0.47222,-0.90396 -0.18439,-0.0854 -0.49021,-0.12592 -0.90396,-0.12592 0,0 -2.28914,0 -2.28914,0 0,0 0,3.26056 0,3.26056 0,0 0,0.18439 0,0.18439 0,0 -0.18889,0 -0.18889,0 0,0 -1.08836,0 -1.08836,0 0,0 -0.18438,0 -0.18438,0 0,0 0,-0.18439 0,-0.18439 0,0 0,-8.03672 0,-8.03672 0,0 0,-0.18439 0,-0.18439 0,0 0.18438,0 0.18438,0 0,0 3.71929,0 3.71929,0 0.63863,0 1.17381,0.0944 1.58756,0.28782 z m -4.0296,3.38648 c 0,0 2.32961,0 2.32961,0 0.46772,0 0.841,-0.0855 1.10634,-0.26084 0.24286,-0.1754 0.35979,-0.49471 0.35979,-0.95793 0,-0.5037 -0.1664,-0.83201 -0.51719,-1.0074 -0.19338,-0.0944 -0.46323,-0.14841 -0.80503,-0.14841 0,0 -2.47352,0 -2.47352,0 0,0 0,2.37458 0,2.37458 z"/>
                </svg>
              </a>
            </div>
          </section>
        </div>
        <div className='container Cars' style={{display: "none"}}>
          <div className='car'>
            <img src={honda} alt='honda' />
            <img src={nsx} alt='nsx' />
          </div>
          <div className='car'>
            <img src={toyota} alt='toyota' />
            <img src={supra} alt='supra' />
          </div>
          <div className='car'>
            <img src={dodge} alt='dodge' />
            <img src={challenger} alt='challenger' />
          </div>
        </div>
        <div className='container Formula' style={{display: "none"}}>
          <div className='driver'>
            <img src={f1driver3} alt='Fernando Alonso' />
            <h1>
              Fernando Alonso is my third favorite driver <br></br>
              In 2023, He drives for the Aston Martin team<br></br>
              He has 32x Grand prix victories, 106x Podiums <br></br>
              and 2x World Championships (2005 + 2006) <br></br>
              <img src={flag3} alt='Spain' />
            </h1>
          </div>
          <div className='driver'>
            <img src={f1driver2} alt='Nico Hulkenberg' />
            <h1>
              Nico Hulkenberg is my second favorite driver <br></br>
              In 2023, He drives for the Haas team<br></br>
              He has 0x Grand prix victories, 0x Podiums <br></br>
              and 0x World Championships <br></br>
              <img src={flag2} alt='Germany' />
            </h1>
          </div>
          <div className='driver'>
            <img src={f1driver1} alt='Lando Norris' />
            <h1>
              Lando Norris is my absolute favorite driver <br></br>
              In 2023, He drives for the Mclaren team<br></br>
              He has 0x Grand prix victories, 13x Podiums <br></br>
              and 0x World Championships <br></br>
              <img src={flag1} alt='Britain' />
            </h1>
          </div>
          <div className='team'>
            <img src={f1logo} alt='Mclaren' />
            <h1>
              Mclaren is my favorite formula 1 Team <br></br>
              In 2024<br></br><br></br>
              They have 183x Grand prix victories, 503x Podiums,<br></br>
              8x Constructor World Championships <br></br>
              and 12x Drivers World Championships <br></br>
              <img src={flag1} alt='Britain' />
            </h1>
          </div>
        </div>
        <div className='container YouTube' style={{display: "none"}}>
          <iframe
            title='latestYoutube'
            src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UUjASemWCGsjDuEH-CaF7wOg"
            width="600"
            height="340"
            frameBorder="0"
            allowfullscreen>
          </iframe>
          <p>
            I started making youtube videos back around 2018 and am still uploading videos to this day.
            Allthough my quality has obviously gone up and I have learned many ways edit in a funny way.
            I make mostly gaming highlights videos, but I also do some other stuff.
          </p>
        </div>
      </article>

      <footer>
        <div className='info'>
          <h1>Lukas Okkenhaug</h1>
          <h1>Contacts</h1>
          <p>
            {user.age} (15. 07. 2006)<br></br>
            <a href='https://www.google.com/maps/place/%C3%98stfold/' target='_blank' rel='noreferrer'>Østfold, Norway</a> Born and Raised <br></br>
            He / Him
          </p>
        </div>
        <section>
          <a href="mailto:lukasokken@gmail.com" rel='noreferrer' target="_blank">
            <svg style={{ background: '#b10000' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill='#fff' d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/>
            </svg>
          </a>
          <a href="https://github.com/Lu69as" rel='noreferrer' target="_blank">
            <svg style={{ background: '#333333' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path fill="#fff" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/channel/UCjASemWCGsjDuEH-CaF7wOg" rel='noreferrer' target="_blank">
            <svg style={{ background: '#fd0000' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="#fff" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
            </svg>
          </a>
          <a href="https://discord.gg/Pr2XTf3WPP" rel='noreferrer' target="_blank">
            <svg style={{ background: '#5865f2' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path fill="#fff" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
            </svg>
          </a>
          <div></div>
        </section>
        <section>
          <a href="https://steamcommunity.com/profiles/76561199016709901/" rel='noreferrer' target="_blank">
            <svg style={{ background: '#171a21' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path fill="#fff" d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/>
            </svg>
          </a>
          <a href="https://www.reddit.com/user/Ok_Veterinarian_4691" rel='noreferrer' target="_blank">
            <svg style={{ background: '#ff4500' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#fff" d="M0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256L37.1 512c-13.7 0-20.5-16.5-10.9-26.2L75 437C28.7 390.7 0 326.7 0 256zM349.6 153.6c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7c-20.6 0-37.8 14.6-41.8 34c-34.5 3.7-61.4 33-61.4 68.4l0 .2c-37.5 1.6-71.8 12.3-99 29.1c-10.1-7.8-22.8-12.5-36.5-12.5c-33 0-59.8 26.8-59.8 59.8c0 24 14.1 44.6 34.4 54.1c2 69.4 77.6 125.2 170.6 125.2s168.7-55.9 170.6-125.3c20.2-9.6 34.1-30.2 34.1-54c0-33-26.8-59.8-59.8-59.8c-13.7 0-26.3 4.6-36.4 12.4c-27.4-17-62.1-27.7-100-29.1l0-.2c0-25.4 18.9-46.5 43.4-49.9l0 0c4.4 18.8 21.3 32.8 41.5 32.8zM177.1 246.9c16.7 0 29.5 17.6 28.5 39.3s-13.5 29.6-30.3 29.6s-31.4-8.8-30.4-30.5s15.4-38.3 32.1-38.3zm190.1 38.3c1 21.7-13.7 30.5-30.4 30.5s-29.3-7.9-30.3-29.6c-1-21.7 11.8-39.3 28.5-39.3s31.2 16.6 32.1 38.3zm-48.1 56.7c-10.3 24.6-34.6 41.9-63 41.9s-52.7-17.3-63-41.9c-1.2-2.9 .8-6.2 3.9-6.5c18.4-1.9 38.3-2.9 59.1-2.9s40.7 1 59.1 2.9c3.1 .3 5.1 3.6 3.9 6.5z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/lu69as/" rel='noreferrer' target="_blank">
            <svg style={{ background: '#ac2bac' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="#fff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
          </a>
          <a href="https://twitter.com/lu69as" rel='noreferrer' target="_blank">
            <svg style={{ background: 'white' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 462.799">
              <path xmlns="http://www.w3.org/2000/svg" fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/>
            </svg>
          </a>
          <div></div>
        </section>
      </footer>
    </div>
  );
}

export default App;