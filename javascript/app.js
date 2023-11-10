
//Funcao para manipular texto usando JS
function editartexto (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Funcao para gerar um numero aleatorio 
function gerar_numero(){
    return parseInt(Math.random() * 10 +1);
}
//Atribuindo o numero gerado a uma variavel
let numero_secreto = gerar_numero();

//Funcao para gerar numero aleatorio ao clicar no botao
document.getElementById('novo_jogo').addEventListener('click', function() {
    numero_secreto = gerar_numero();
    editartexto('p', 'Um novo numero secreto acabou de ser gerado, Boa sorte tente adivinhar.');
});

//Funcao para verificar se o numero que o usuario indicou e maior, menor ou igual ao numero secreto
document.getElementById('tentativa').addEventListener('click', verificar_tentativa);
function verificar_tentativa(){
    let tentativa = document.querySelector('input').value;
    if (tentativa == numero_secreto){
        editartexto('p', 'Parabéns, Voce acertou o número secreto.');
    }else if(tentativa < numero_secreto){
        editartexto('p', 'O numero secreto é Maior que '+ tentativa);
    }
    else{
        editartexto('p', 'O Numero secreto é Menor que '+ tentativa);
    }
}



particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 24,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#1b1e34"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 160,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 40,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 8,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);  

