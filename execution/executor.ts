import { Broker } from "./broker.js";

export class Executor {
  private broker = new Broker();

  execute(signal: any) {
    console.log("Executing signal:", signal);
    this.broker.placeOrder(signal);
  }
}
