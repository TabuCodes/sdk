export class Engine {
  private strategy: any;
  private feed: any;
  private executor: any;

  attachStrategy(strategy: any) {
    this.strategy = strategy;
  }

  attachFeed(feed: any) {
    this.feed = feed;
  }

  attachExecutor(executor: any) {
    this.executor = executor;
  }

  start() {
    console.log("TABU Engine started");
    this.feed.stream((market: any) => {
      const signal = this.strategy.onTick(market);
      if (signal) this.executor.execute(signal);
    });
  }
}
