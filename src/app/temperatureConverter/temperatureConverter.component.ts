import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter implements OnInit {
  fahrenheitValue;
  celsiusValue;

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  getFahrenheitConversion(event): void {
    const c = event.target.value;
    console.log(c);
    this.fahrenheitValue = c * (9 / 5) + 32;
    this.fahrenheitValue = this.fahrenheitValue.toFixed(1);
  }

  getCelsiusConversion(event): void {
    const f = event.target.value;
    this.celsiusValue = ((f - 32) * 5) / 9;
    this.celsiusValue = this.celsiusValue.toFixed(1);
  }
}
