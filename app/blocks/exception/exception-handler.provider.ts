export class exceptionHandlerProvider {
  public config;

  constructor() {
    this.config = {
      appErrorPrefix: undefined
    };
  }

  public configure(appErrorPrefix) {
    this.config.appErrorPrefix = appErrorPrefix;
  }

  public $get() {
    return { config: this.config };
  }
}
