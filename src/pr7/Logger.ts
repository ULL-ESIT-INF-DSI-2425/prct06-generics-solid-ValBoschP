/**
 * Action type
 */
export type Action = {
  user: string;
  action: string;
  date: string;
  hour: string;
}

/**
 * Logger class
 */
export class Logger {
  private actions: Action[];

  private static Logger: Logger;
  /** Constructor of Logger Class*/
  private constructor() {
    this.actions = [];
  }
  /**
   * GetLogger method
   * @returns Logger
   */
  public static getLogger(): Logger {
    if (!Logger.Logger) {
      Logger.Logger = new Logger();
    }
    return Logger.Logger;
  }

  /**
   * GetActions method
   * @returns Action[]
   */
  getActions(): Action[] {
    return this.actions;
  }

  setActions(actions: Action[]): void {
    this.actions = actions;
  }

  /**
   * Adds a login to the actions array
   * @param Action - Action to add
   */
  addLogin(Action: Action): void {
    this.actions.push(Action);
  }

  /**
   * Search for user actions
   * @param user - User to search
   * @returns Action[]
   */
  searchUserAction(user: string): Action[] {
    return this.actions.filter((action) => action.user);
  }

  /**
   * Search for who did an action
   * @param Action - Array of actions
   * @returns string[]
   */
  searchWhoAction(Action: Action[]): string[] {
    return Action.map((action) => action.user);
  }

  /**
   * Search action between two dates
   * @param date1 - First date
   * @param date2 - Second date
   * @returns Action[]
   */
  ActionBetweenDates(date1: string, date2: string): Action[] {
    return this.actions.filter((action) => action.date >= date1 && action.date <= date2);
  }
}