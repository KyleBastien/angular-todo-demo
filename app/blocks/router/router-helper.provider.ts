import * as angular from 'angular';

export interface IStateCounts {
  errors: number;
  changes: number;
}

export interface IStateConfig {
  state: any;
  config: any;
}

export interface IRouterHelper {
  configureStates(states: Array<IStateConfig>): void;
  configureStates(states: Array<IStateConfig>, otherwiseState: string): void;
  getStates(): any;
  stateCounts: IStateCounts;
}

export interface IRouterHelperProviderConfig {
  docTitle: string;
  resolveAlways: any;
}

export class RouterHelperProvider implements angular.IServiceProvider {
  private config: IRouterHelperProviderConfig;
  static $inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

  constructor(
    private $locationProvider: angular.ILocationProvider,
    private $stateProvider: any,
    private $urlRouterProvider: any) {

    this.config = {
      docTitle: '',
      resolveAlways: {}
    };

    if (!(window.history && window.history.pushState)) {
      window.location.hash = '/';
    }

    this.$locationProvider.html5Mode(true);
    this.$get.$inject = ['$location', '$rootScope', '$state', 'logger'];
  }

  public configure(cfg: any) {
    angular.extend(this.config, cfg);
  }

  public $get(
    $location: angular.ILocationService,
    $rootScope: angular.IRootScopeService,
    $state: any,
    logger: any): IRouterHelper {
    var $stateProvider = this.$stateProvider;
    var $urlRouterProvider = this.$urlRouterProvider;
    var config = this.config;

    var handlingStateChangeError = false;
    var hasOtherwise = false;

    var stateCounts = {
      errors: 0,
      changes: 0
    };

    var service = {
      configureStates: configureStates,
      getStates: getStates,
      stateCounts: stateCounts
    };

    init();

    return service;

    function init(): void {
      handleRoutingErrors();
      updateDocTitle();
    }

    function configureStates(states: Array<IStateConfig>, otherwisePath?: string): void {
      // Remap root calls, i.e. http://example.org/ --> http://example.org/#/
      $urlRouterProvider.when('', '/');

      states.forEach(function(state) {
        state.config.resolve =
          angular.extend(state.config.resolve || {}, config.resolveAlways);
        $stateProvider.state(state.state, state.config);
      });

      if (otherwisePath && !hasOtherwise) {
        hasOtherwise = true;
        $urlRouterProvider.otherwise(otherwisePath);
      }
    }

    function handleRoutingErrors(): void {
      // Route cancellation:
      // On routing error, go to the dashboard.
      // Provide an exit clause if it tries to do it twice.
      $rootScope.$on('$stateChangeError', (_event, toState, _toParams, _fromState, _fromParams, error) => {
        if (handlingStateChangeError) {
          return;
        }
        stateCounts.errors++;
        handlingStateChangeError = true;
        var destination = (toState &&
          (toState.title || toState.name || toState.loadedTemplateUrl)) ||
          'unknown target';
        var msg = 'Error routing to ' + destination + '. ' +
          (error.data || '') + '. <br/>' + (error.statusText || '') +
          ': ' + (error.status || '');
        logger.warning(msg, [toState], '');
        $location.path('/');
      });
    }

    function getStates(): any[] {
      return $state.get();
    }

    function updateDocTitle(): void {
      $rootScope.$on('$stateChangeSuccess', (_event, toState) => {
        stateCounts.changes++;
        handlingStateChangeError = false;
        var title = config.docTitle + ' ' + (toState.title || '');
        (<any>$rootScope).title = title; // data bind to <title>
      });
    }
  }
}
