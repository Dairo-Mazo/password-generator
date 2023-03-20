import { Component } from '@angular/core';

@Component({
  selector: 'app-generator-password',
  templateUrl: './generator-password.component.html',
  styleUrls: ['./generator-password.component.css']
})
export class GeneratorPasswordComponent {

  //Varibales a utilizar

  public password: string = '';
  public numbers: boolean = false;
  public symbols: boolean = false;
  public mayus: boolean = false;
  public length: number = 0;
  public result: any = '';
  public properties = {
    string: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]\:;?><,./-='
  };


  addProperties(type:string, eve:any){
    let value = eve.target.checked

    if(type == 'numbers' && value == true) this.numbers = value;
      
    else if(type == 'symbols' && value == true) this.symbols = value;
      
    else if(type == 'mayus' && value == true) this.mayus = value;

    else if(type == 'numbers' && value == false) this.numbers = value;

    else if(type == 'symbols' && value == false) this.symbols = value;
      
    else if(type == 'mayus' && value == false) this.mayus = value;

    else if(type == 'input') 
    this.length = eve.target.value;
    this.length = Number(this.length);
    
  }


  generator(){

    let passwordGenerator: string = ''

    this.password = this.properties.string;

    if(this.numbers) this.password = this.password + this.properties.numbers;

    if(this.symbols) this.password = this.password + this.properties.symbols;

    if(this.mayus) this.password = this.password + this.properties.string.toUpperCase();

    for (let i = 0; i < this.length; i++) {
      let ramdon = Math.floor(Math.random() * this.password.length);
  
      passwordGenerator = passwordGenerator + this.password[ramdon];
    }

    this.password = passwordGenerator;

  }

  copyText(){
    navigator.clipboard.writeText( this.password )
  }

}

