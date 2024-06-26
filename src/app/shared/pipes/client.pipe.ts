import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "phonePipe",
})
export class PhonePipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/(\d{4})(?=\d)/g, "$1 ");
    }
}
