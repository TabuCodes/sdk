import { Engine } from "./core/engine.js";
import { MeanReversionStrategy } from "./strategies/meanReversion.js";
import { MockFeed } from "./data/mockFeed.js";
import { Executor } from "./execution/executor.js";

export function createApp() {
  const engine = new Engine();
  const strategy = new MeanReversionStrategy();
  const feed = new MockFeed();
  const executor = new Executor();

  engine.attachStrategy(strategy);
  engine.attachFeed(feed);
  engine.attachExecutor(executor);

  engine.start();
}
