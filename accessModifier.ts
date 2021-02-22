class Players {
  constructor(
    private name: string,
    public age: number,
    readonly country: string,
  ) {}

  play(){
    console.log(`${this.name} from ${this.country} is playing!`);
  }
}

const mashrafi = new Players('Mashrafi', 40, 'Bangladesh');
console.log(mashrafi);
const sakib = new Players('Sakib', 36, 'Bangladesh');
console.log(sakib);