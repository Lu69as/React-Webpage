import Html from './img/experience/html.png'; import Css from './img/experience/css.png'; import Js from './img/experience/js.png'; import Csharp from './img/experience/csharp.png';
import Sql from './img/experience/mysql.png'; import Photosop from './img/experience/photoshop.png'; import Premiere from './img/experience/premiere.png'; import Indesign
  from './img/experience/indesign.png'; import Wordpress from './img/experience/wordpress.png'; import Obs from './img/experience/obs.png';

import f123 from './img/hobbies/f1.png'; import skyrim from './img/hobbies/skyrim.png'; import iracing from './img/hobbies/iracing.png';
import boneworks from './img/hobbies/boneworks.png'; import alyx from './img/hobbies/alyx.png';

import honda from './img/hobbies/honda.png'; import toyota from './img/hobbies/toyota.png'; import dodge from './img/hobbies/dodge.png';
import nsx from './img/hobbies/nsx.png'; import supra from './img/hobbies/supra.png'; import challenger from './img/hobbies/challenger.png';

import f1driver1 from './img/hobbies/norris.png'; import f1driver2 from './img/hobbies/hulkenberg.png'; import f1driver3 from './img/hobbies/alonso.png'; import f1logo from 
'./img/hobbies/mclaren.png'; import flag1 from './img/hobbies/british-flag.png'; import flag2 from './img/hobbies/german-flag.png'; import flag3 from './img/hobbies/spanish-flag.png';

import transition1 from './img/transitions/header-experience.svg'; import transition2 from './img/transitions/header-experience2.svg';
import transition3 from './img/transitions/experience-work.svg'; import transition4 from './img/transitions/experience-work2.svg';
import transition5 from './img/transitions/work-education.svg'; import transition6 from './img/transitions/work-education2.svg';
import transition7 from './img/transitions/education-hobbies.svg'; import transition8 from './img/transitions/education-hobbies2.svg';
import transition9 from './img/transitions/hobbies-footer.svg';

import school1 from './img/education/tryggheim.jpg'; import school2 from './img/education/kjolberg.jpg';
import school3 from './img/education/Borge.jpg'; import school4 from './img/education/glemmen.jpg';

let d = new Date();

const user = {
  name: 'Lukas Okkenhaug',
  desc: ' A Creative Fella from Norway',
  age: d.getFullYear() - 2006 + ' Years and ' + (d.getMonth() - 6) + ' Months old'
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

window.onload = () => {
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

  function experienceShowDesc(desc) {
    if (window.innerWidth > window.innerHeight) {
      document.querySelectorAll('.icons-container div div').forEach((e) => {e.classList.remove('experienceShowDesc')})
      document.querySelector('.icons-container div #' + desc).classList.add('experienceShowDesc');
      document.querySelector('#Experience section').style.width = '75%';
  
      document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
          document.querySelector('.icons-container div #' + desc).classList.remove('experienceShowDesc');
          document.querySelector('#Experience section').style.width = '100%';
        }
      })
    }
  }

  document.querySelectorAll('.icons-container div img').forEach((e) => {
    e.addEventListener('click', () => {experienceShowDesc(e.getAttribute("alt"))})
  })
}

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#" onClick={changebackgrund}>
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

      <div className='me'>
        <p></p>
        <div></div>
      </div>

      <header className="App-header">
        <h1>Lukas</h1>
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
              <div className='programming-icon'>
                <img src={Html} alt='Html' />
                <div id='Html'>
                  <h1>Html</h1>
                  <p>
                    I started using Html in 2019 <br></br>
                    These are the projects I have used Html
                    
                    <li><a href='https://github.com/Lu69as/lu69as.github.io' target='blank' rel='noreferrer'>lu69as.github.io</a></li>
                    <li><a href='https://github.com/Lu69as/exerciseCounter' target='blank' rel='noreferrer'>Exercise Counter</a></li>
                    <li><a href='https://github.com/Lu69as/Drum-Kit' target='blank' rel='noreferrer'>Drum Kit</a></li>
                    <li><a href='https://github.com/Lu69as/Simon-Game' target='blank' rel='noreferrer'>Simon Game</a></li>
                    <li><a href='https://github.com/Lu69as/Dice-game' target='blank' rel='noreferrer'>Dice game</a></li>
                    <li><a href='https://github.com/Lu69as/Voting-Site' target='blank' rel='noreferrer'>Voting Site</a></li>
                  </p>
                </div>
              </div>
              <div className='programming-icon'>
                <img src={Css} alt='Css' />
                <div id='Css'>
                  <h1>Css</h1>
                  <p>
                    I started using Css in 2021 <br></br>
                    These are the projects I have used Css
                    
                    <li><a href='https://github.com/Lu69as/lu69as.github.io' target='blank' rel='noreferrer'>lu69as.github.io</a></li>
                    <li><a href='https://github.com/Lu69as/exerciseCounter' target='blank' rel='noreferrer'>Exercise Counter</a></li>
                    <li><a href='https://github.com/Lu69as/Drum-Kit' target='blank' rel='noreferrer'>Drum Kit</a></li>
                    <li><a href='https://github.com/Lu69as/Simon-Game' target='blank' rel='noreferrer'>Simon Game</a></li>
                    <li><a href='https://github.com/Lu69as/Dice-game' target='blank' rel='noreferrer'>Dice game</a></li>
                    <li><a href='https://github.com/Lu69as/Voting-Site' target='blank' rel='noreferrer'>Voting Site</a></li>
                  </p>
                </div>
              </div>
              <div className='programming-icon'>
                <img src={Js} alt='Js' />
                <div id='Js'>
                  <h1>JavaScript</h1>
                  <p>
                    I started using Js in 2022 <br></br>
                    These are the projects I have used Js
                    
                    <li><a href='https://github.com/Lu69as/lu69as.github.io' target='blank' rel='noreferrer'>lu69as.github.io</a></li>
                    <li><a href='https://github.com/Lu69as/exerciseCounter' target='blank' rel='noreferrer'>Exercise Counter</a></li>
                    <li><a href='https://github.com/Lu69as/Drum-Kit' target='blank' rel='noreferrer'>Drum Kit</a></li>
                    <li><a href='https://github.com/Lu69as/Simon-Game' target='blank' rel='noreferrer'>Simon Game</a></li>
                    <li><a href='https://github.com/Lu69as/Dice-game' target='blank' rel='noreferrer'>Dice game</a></li>
                    <li><a href='https://github.com/Lu69as/Voting-Site' target='blank' rel='noreferrer'>Voting Site</a></li>
                  </p>
                </div>
              </div>
              <div className='programming-icon'>
                <img src={Csharp} alt='Csharp' />
                <div id='Csharp'>
                  <h1>C#</h1>
                  <p>
                    I started using C# in 2023 <br></br>
                    These are the projects I have used C#
                    
                    <li><a href='https://github.com/Lu69as/Voting-Site' target='blank' rel='noreferrer'>Voting Site</a></li>
                    <li><a href='https://github.com/Lu69as/BubbleSort' target='blank' rel='noreferrer'>Bubble Sort</a></li>
                    <li><a href='https://github.com/Lu69as/TemperatureIfElseWhile' target='blank' rel='noreferrer'>Temperature</a></li>
                  </p>
                </div>
              </div>
              <div className='programming-icon'>
                <img src={Sql} alt='Sql' />
                <div id='Sql'>
                  <h1>Sql</h1>
                  <p>
                    I started using MySql in 2023 <br></br>
                    These are the projects I have used Sql
                    
                    <li><a href='https://github.com/Lu69as/Voting-Site' target='blank' rel='noreferrer'>Voting Site</a></li>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='container media'>
            <h1>MEDIAPRODUCTION</h1>
            <div className='icons-container'>
              <div className='media-icon'>
                <img src={Photosop} alt='Photosop' />
                <div id='Photosop'>
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
              </div>
              <div className='media-icon'>
                <img src={Premiere} alt='Premiere' />
                <div id='Premiere'>
                  <h1>Premiere Pro</h1>
                  <p>
                    I have used Premiere Pro since 2017 <br></br>
                    I use Premiere for video editing for YouTube videos and some school projects.
                    
                    <li><a href='https://www.youtube.com/c/Lu69as' target='blank' rel='noreferrer'>YouTube</a></li>
                    <li><a href='https://mega.nz/file/JoRDTDAT#3J6raHFJe0OyeSYFXp5rpwB42R3gIQSpt0pFhqlgqYw' target='blank' rel='noreferrer'>Ar Glasses</a></li>
                    <li><a href='https://mega.nz/file/0sphAAhT#8Q4fa_Y16XutVVqixBLlsgJPP6thS0aULO-CH3omzBc' target='blank' rel='noreferrer'>Fake VR Ad</a></li>
                  </p>
                </div>
              </div>
              <div className='media-icon'>
                <img src={Wordpress} alt='Wordpress' />
                <div id='Wordpress'>
                  <h1>Wordpress</h1>
                  <p>
                    I have used Wordpress since 2022 <br></br>
                    I used wordpress for a school project in 8th grade but also use it at my workplace.
                    
                    <li><a href='https://www.busposten.com' target='blank' rel='noreferrer'>busposten.com</a></li>
                    <li><a href='https://internship.relevantnettside.no' target='blank' rel='noreferrer'>Internship Site</a></li>
                  </p>
                </div>
              </div>
              <div className='media-icon'>
                <img src={Obs} alt='Obs' />
                <div id='Obs'>
                  <h1>Language</h1>
                  <p>
                    I have used Obs since 2020 <br></br>
                    I use Obs to stream and record videos for my YouTube Channel.
                    
                    <li><a href='https://www.youtube.com/c/Lu69as' target='blank' rel='noreferrer'>YouTube</a></li>
                  </p>
                </div>
              </div>
              <div className='media-icon'>
                <img src={Indesign} alt='Indesign' />
                <div id='Indesign'>
                  <h1>Language</h1>
                  <p>
                    I have used Indesign since 2023 <br></br>
                    I have used Indesign to create a toutorial for a school project.
                    
                    <li><a href='https://mega.nz/file/4kJmjRrT#eD3m6Her7EEm7K1kRhjFd3PeJMFbr7c_J60xBdHBCMA' target='blank' rel='noreferrer'>VS Toutorial</a></li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <article id='Work'>
        <img className='transition' alt='transition4' src={transition5}/>
        <img className='transition' alt='transition5' src={transition4}/>
        <div className='window'>
          <div className='plank'></div>
          <h1>Relevant</h1>
          <p>I work at Relevant Advertizing and Media Beurou on fridays as a free Intern for them.
            <br></br><br></br>I learn mostly design, but also use my programming skills to work faster. </p>
        </div>
        <div className='window'>
          <div className='plank'></div>
          <h1>ARK</h1>
          <p>I had a paid single-day-job organizing books for my aunt at Ark Bookstorein 2019.
            <br></br><br></br>I learned how to be efficent with organizing and counting store items. </p>
        </div>
        <div className='window'>
          <div className='plank'></div>
          <h1>Roofwork</h1>
          <p>I got paid for helping my dad fix the roof on my parents rental house in 2022.
            <br></br><br></br>I learned to work efficent with my dad and learned about some roof stuff. </p>
        </div>
        <div className='window'>
          <div className='plank'></div>
          <h1>Relevant</h1>
          <p>Jeg jobber hos Relevant</p>
        </div>
      </article>

      <article id='Education'>
        <img className='transition' alt='transition6' src={transition7}/>
        <img className='transition' alt='transition7' src={transition6}/>

        <section>
          <div className='line'>
            <div className='endline'></div>
            <div className='school'>
              <div><img src={school1} alt='school1'/></div>
              <h1>Tryggheim Barnehage <br></br> 2009 - 2012</h1>
            </div>
            <div className='school'>
              <div><img src={school2} alt='school2'/></div>
              <h1>Kjølberg School <br></br> 2012 - 2019</h1>
            </div>
            <div className='school'>
              <div><img src={school3} alt='school3'/></div>
              <h1>Borge Secondary School <br></br> 2019 - 2022</h1>
            </div>
            <div className='school'>
              <div><img src={school4} alt='school4'/></div>
              <h1>Glemmen High School <br></br> 2022 - 2024</h1>
            </div>
          </div>
        </section>
      </article>

      <article id='Hobbies'>
      <img className='transition' alt='transition8' src={transition9}/>
      <img className='transition' alt='transition9' src={transition8}/>
        <h1>Games</h1>
        <div className='container games'>
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
        </div>
        <h1>Cars</h1>
        <div className='container cars'>
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
        <h1>Formula 1</h1>
        <div className='container f1'>
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
              In 2023, They have Lando Norris and <br></br>
              Oscar Piastri as their driver line-up.<br></br><br></br>
              They have 183x Grand prix victories, 503x Podiums<br></br>
              , 8x Constructor World Championships <br></br>
              and 12x Drivers World Championships <br></br>
              <img src={flag1} alt='Britain' />
            </h1>
          </div>
        </div>
      </article>

      <footer>
        <div className='info'>
          <h1>Lukas Okkenhaug</h1>
          <h1>Social Media</h1>
          <p>
            {user.age} <br></br>
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
        </section>
      </footer>
    </div>
  );
}

export default App;