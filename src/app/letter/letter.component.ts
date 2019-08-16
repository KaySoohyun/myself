import { Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.sass']
})
export class LetterComponent implements OnInit {
  hola;
  constructor() { }

  ngOnInit() {
    this.hola = new Typewriter('#typewriter', {
      loop: false
    });
    this.hola.typeString('Hello stranger! ')
      .typeString('How are you?')
      .pauseFor(2000)
      .typeString('<br/>')
      .typeString('This is a resume of me, if you want to know more you can see other versions.')
      .pauseFor(2000)
      .typeString('<br/>')
      .typeString('I am <strong>KaySoohyun!</strong> but my real name is Julieta Wiesztort.')
      .typeString('<br/>')
      .typeString('I am a computer science student and lover.')
      .typeString('<br/>')
      .typeString('I was studying for many years but I still love it.')
      .typeString('<br/>')
      .typeString('I have a few merit in this area like a workshop of neural networks.')
      .pauseFor(2000)
      .typeString('<br/>')
      .typeString('I love remote sensing, web design (every design!) and help people.')
      .pauseFor(2000)
      .typeString('<br/>')
      .typeString('My goal in life is help people doing something i love.')
      .pauseFor(2000)
      .typeString('<br/>')
      .typeString('But, that is not all.')
      .pauseFor(2000)
      .typeString(' I like videogames(play, create), software engineering, personalize my own computer, make scripts, draw, write and dance.')
      .typeString('<br/>')
      .pauseFor(1500)
      .typeString('Yes!')
      .pauseFor(1500)
      .typeString(' Dance!')
      .pauseFor(1500)
      .typeString(' Sometimes, i dance in a ballet of Eisa, a dance from Okinawa, Japan.')
      .typeString('<br/>')
      .pauseFor(2000)
      .typeString('I forgot it! I love cook too! I am a patissiere ❤, but i love cook everything!')
      .pauseFor(2500)
      .typeString('<br/>')
      .typeString('This is me and i want the job! Hire me!')
      .start();
  }

}
