export class logger {

  static $inject = ['$log'];
  constructor(private $log) {}

  public error(message, data) {
    this.$log.error('Error: ' + message, data);
  }

  public info(message, data) {
    this.$log.info('Info: ' + message, data);
  }

  public success(message, data) {
    this.$log.info('Success: ' + message, data);
  }

  public warning(message, data) {
    this.$log.warn('Warning: ' + message, data);
  }
}