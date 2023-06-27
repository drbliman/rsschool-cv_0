## **Vladimir Blinov**

Junior Frontend Developer

------

### _Contact information:_

Phone: +7 927 798 96 69

E-mail: dr.bliman505@gmail.com

GitHub: drbliman

Telegram: @fiz15

------

### _Briefly About Myself:_

Due to my love to science, desire for continuous self-education and easy learner, I have worked for an amazing three years in the field of education. However, the desire to move forward led me to the profession of Frontend Developer. After I completely switched to commercial education, I had enough free time to learn new skills. After four months of self-study of HTML, CSS and JavaScript I realized that I wanted to do it professionally. I believe that I will succeed and become a highly skilled professional.

------

### _Skills:_

* HTML5, CSS3
* JavaScript Basics
* Git, GitHub
* VS Code
* Figma

------

### _Code example:_

Tic-tac-toe game

```
document.getElementById('app').onclick = function(event) {

    while (i < 3) {
        if (document.querySelectorAll('input')[i].matches(':checked') == true) {
            $('.form').addClass('active');
        }
        i++;
    }
    

    if (document.querySelectorAll('input')[0].matches(':checked') == true) {
        if (event.target.className == 'app_block') {
            if (hod%2 == 0) {
                event.target.innerHTML = 'x';
                event.target.style.pointerEvents='none';
            } else {
                event.target.innerHTML = '0';
                event.target.style.pointerEvents='for';
            }
            hod++;
            checkWinner();
        }
    }

 
    if (document.querySelectorAll('input')[1].matches(':checked') == true) {
        
        if (event.target.className == 'app_block') {
            if (hod < 6) {
                event.target.innerHTML = 'x';
                event.target.style.pointerEvents='none';
                hod++;
                while (hod < 5) {
                    let allblock = document.getElementsByClassName('app_block');
                    function randomInteger(min, max) {
                        let rand = min - 0.5 + Math.random() * (max - min + 1);
                        return Math.round(rand);
                    }
                    let a = randomInteger(0, 8);
                    if (allblock[a].innerHTML == '') {
                        allblock[a].innerHTML = '0';
                        allblock[a].style.pointerEvents='none';
                        break;
                    }
                }
            };
            checkWinner();
        }
    }
}
```

------

### _Projects_

[Tic-tac-toe game](https://drbliman.github.io/Tic-tac-toe_v0.1/)

------

### _Education_

Samara University

* 2015-2019: bachelor's degree - physicist

* 2019-2021: master's degree - laser physics and spectroscopy

------

### _Languages:_

* English - A2

* Russian - Native

------