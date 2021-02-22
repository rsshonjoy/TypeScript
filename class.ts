class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play(){
    console.log(`${this.name} from ${this.country} is playing!`);
  }
}

const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
console.log(mashrafi);
const sakib = new Player('Sakib', 36, 'Bangladesh');
console.log(sakib);
