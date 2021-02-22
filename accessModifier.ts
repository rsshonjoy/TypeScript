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

const tamim = new Players('Tamim', 40, 'Bangladesh');
console.log(tamim);
const liton = new Players('Liton', 36, 'Bangladesh');
console.log(liton);