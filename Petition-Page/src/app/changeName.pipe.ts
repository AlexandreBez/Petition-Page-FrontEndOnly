import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'changeName',
  pure: false,
})
export class changeName implements PipeTransform {

    transform(value: any) {
        
        value = "Accepted";
        
        return value;
    }
    
}
