import {Pipe, PipeTransform} from '@angular/core';
import {UpperCasePipe} from '@angular/common';
@Pipe({
    name: 'myuppercase'
})
export class MyUppercasePipe implements PipeTransform{
  transform(value: string, seperator: string): string {
       let array1 = value.split(' ');
       let result : string ="";
       for (var i=0; i<array1.length; i++){
        let result1 =  array1[i];
        result1 = result1.charAt(0).toUpperCase()+result1.slice(1,result1.length);
        result = result+result1+" ";
    }
       return result;


  }
} 