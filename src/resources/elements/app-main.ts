export class AppMain {
  cards = Array.from({ length: 15 }, (_, i) => ({ 
    price: i * 2,
    onSale: i % 3 === 0,
  }));
}
