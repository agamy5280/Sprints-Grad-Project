import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(value:string): any {
    return  "************"+value.slice(-3)
  }

}
