import { Component } from '@angular/core';

type CurrencyRates = { [key: string]: number };

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fromCurrency: string = 'USD';
  toCurrency: string = 'BRL';
  amount: number = 1;
  convertedValue: number | null = null;

  currencies: CurrencyRates = {
    "USD":1,
  "AED":3.6725,
  "AFN":68.8900,
  "ALL":93.2346,
  "AMD":395.2335,
  "ANG":1.7900,
  "AOA":922.9796,
  "ARS":1017.2500,
  "AUD":1.5663,
  "AWG":1.7900,
  "AZN":1.7002,
  "BAM":1.8574,
  "BBD":2.0000,
  "BDT":119.5390,
  "BGN":1.8574,
  "BHD":0.3760,
  "BIF":2932.5185,
  "BMD":1.0000,
  "BND":1.3410,
  "BOB":6.9280,
  "BRL":6.0556,
  "BSD":1.0000,
  "BTN":84.9207,
  "BWP":13.5882,
  "BYN":3.3341,
  "BZD":2.0000,
  "CAD":1.4169,
  "CDF":2855.1390,
  "CHF":0.8817,
  "CLP":969.2449,
  "CNY":7.2560,
  "COP":4402.8638,
  "CRC":504.5654,
  "CUP":24.0000,
  "CVE":104.7153,
  "CZK":23.8331,
  "DJF":177.7210,
  "DKK":7.0839,
  "DOP":60.6071,
  "DZD":133.4849,
  "EGP":50.4603,
  "ERN":15.0000,
  "ETB":124.2926,
  "EUR":0.9497,
  "FJD":2.3038,
  "FKP":0.7834,
  "FOK":7.0841,
  "GBP":0.7833,
  "GEL":2.7887,
  "GGP":0.7834,
  "GHS":14.7545,
  "GIP":0.7834,
  "GMD":72.4597,
  "GNF":8585.8262,
  "GTQ":7.7115,
  "GYD":209.2258,
  "HKD":7.7753,
  "HNL":25.3539,
  "HRK":7.1553,
  "HTG":130.9822,
  "HUF":389.9513,
  "IDR":15889.4221,
  "ILS":3.5828,
  "IMP":0.7834,
  "INR":84.9186,
  "IQD":1312.5423,
  "IRR":42005.3571,
  "ISK":138.6435,
  "JEP":0.7834,
  "JMD":156.9636,
  "JOD":0.7090,
  "JPY":151.7756,
  "KES":129.2954,
  "KGS":86.6902,
  "KHR":4041.1647,
  "KID":1.5661,
  "KMF":467.2066,
  "KRW":1433.1237,
  "KWD":0.3075,
  "KYD":0.8333,
  "KZT":510.8143,
  "LAK":21948.5748,
  "LBP":89500.0000,
  "LKR":290.1910,
  "LRD":179.4292,
  "LSL":17.8265,
  "LYD":4.8763,
  "MAD":10.0049,
  "MDL":18.3258,
  "MGA":4704.3631,
  "MKD":58.2088,
  "MMK":2101.7141,
  "MNT":3417.0716,
  "MOP":8.0087,
  "MRU":39.8379,
  "MUR":46.4431,
  "MVR":15.4525,
  "MWK":1744.0727,
  "MXN":20.1744,
  "MYR":4.4277,
  "MZN":63.9757,
  "NAD":17.8265,
  "NGN":1529.4542,
  "NIO":36.8201,
  "NOK":11.1463,
  "NPR":135.8731,
  "NZD":1.7221,
  "OMR":0.3845,
  "PAB":1.0000,
  "PEN":3.7295,
  "PGK":3.9979,
  "PHP":58.0676,
  "PKR":277.7069,
  "PLN":4.0455,
  "PYG":7853.9958,
  "QAR":3.6400,
  "RON":4.7212,
  "RSD":111.2094,
  "RUB":102.1265,
  "RWF":1386.8039,
  "SAR":3.7500,
  "SBD":8.3472,
  "SCR":13.7801,
  "SDG":449.4913,
  "SEK":10.9658,
  "SGD":1.3410,
  "SHP":0.7834,
  "SLE":22.7259,
  "SLL":22725.9103,
  "SOS":571.9549,
  "SRD":35.6172,
  "SSP":3799.1417,
  "STN":23.2669,
  "SYP":12898.2189,
  "SZL":17.8265,
  "THB":33.7623,
  "TJS":10.7392,
  "TMT":3.5000,
  "TND":3.1534,
  "TOP":2.3512,
  "TRY":34.8634,
  "TTD":6.7653,
  "TVD":1.5661,
  "TWD":32.5005,
  "TZS":2590.3429,
  "UAH":41.6772,
  "UGX":3659.4795,
  "UYU":43.5542,
  "UZS":12829.6313,
  "VES":49.1111,
  "VND":25363.4286,
  "VUV":121.5589,
  "WST":2.7787,
  "XAF":622.9421,
  "XCD":2.7000,
  "XDR":0.7610,
  "XOF":622.9421,
  "XPF":113.3259,
  "YER":249.8287,
  "ZAR":17.8275,
  "ZMW":27.5288,
  "ZWL":25.6597
  };

  constructor() {}

  invertCurrencies() {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
    this.convert()
  }

  convert() {
    if (!this.fromCurrency || !this.toCurrency || !this.amount) {
      alert('Preencha todos os campos!');
      return;
    }

    const fromRate = this.currencies[this.fromCurrency];
    const toRate = this.currencies[this.toCurrency];

    if (fromRate && toRate) {
      this.convertedValue = (this.amount / fromRate) * toRate;
    } else {
      alert('Erro: Moeda não encontrada!');
    }
  }

  objectKeys(obj: object) {
    return Object.keys(obj);
  }
}
