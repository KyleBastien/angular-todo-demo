export class exceptionHandlerProvider {
  public config = {
    appErrorPrefix: undefined
  };

  public configure(appErrorPrefix) {
    this.config.appErrorPrefix = appErrorPrefix;
  }

  public $get() {
    return { config: this.config };
  }
}
