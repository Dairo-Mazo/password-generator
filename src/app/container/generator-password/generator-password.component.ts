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


  addProperties(type:string, value:any){

    if(type == 'numbers' && value.target.checked == true) this.numbers = value;
      
    else if(type == 'symbols' && value.target.checked == true) this.symbols = value;
      
    else if(type == 'mayus' && value.target.checked == true) this.mayus = value;
        
    else if(type == 'input') 
    this.length = value.target.value;
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

