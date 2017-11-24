export class exception {

  static $inject = ['$q', 'logger'];
  constructor(private $q, private logger) {}

  public catcher(message) {
    return (e) => {
      var thrownDescription;
      var newMessage;
      if (e.data && e.data.description) {
        thrownDescription = '\n' + e.data.description;
        newMessage = message + thrownDescription;
      }
      e.data.description = newMessage;
      this.logger.error(newMessage);
      return this.$q.reject(e);
    };
  }
}