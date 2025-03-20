import { describe, it, expect } from "vitest";
import { Logger, Action } from "../src/pr7/Logger.js";

describe("Logger", () => {
  it("should add a new login", () => {
    const logger = Logger.getLogger();
    const activity = {
      user: "user1",
      action: "login",
      date: "2021-10-10",
      hour: "10:00",
    };
    logger.addLogin(activity);
    expect(logger.getActions()).toEqual([activity]);
  });
  it ("should search for user actions", () => {
    const logger1 = Logger.getLogger();
    const user: string = "user1";

    const activity1: Action = {
      user: "user1",
      action: "login",
      date: "2025-10-12",
      hour: "9:00",
    };
    const activity2: Action = {
      user: "user1",
      action: "delete",
      date: "2025-10-12",
      hour: "9:00",
    };
    logger1.addLogin(activity1)
    logger1.addLogin(activity2)
    expect(logger1.searchUserAction(user)).toEqual(logger1.getActions());
  });

  it ("should search for who did an action", () => {
    const logger2 = Logger.getLogger();
    const activity2: Action = {
      user: "user2",
      action: "login",
      date: "2023-1-1",
      hour: "6:00",
    };
    const activity3: Action = {
      user: "user3",
      action: "login",
      date: "2023-1-1",
      hour: "6:00",
    };
    logger2.addLogin(activity2)
    logger2.addLogin(activity3)
    expect(logger2.searchWhoAction(logger2.getActions())).toEqual(["user1","user1", "user1", "user2", "user3"])
  });

  it ("should search action between two dates"), () => {
    const activity1: Action = {
      user: "user1",
      action: "login",
      date: "2021-3-15",
      hour: "00:00"
    }
    const activity2: Action = {
      user: "user2",
      action: "login",
      date: "2023-1-1",
      hour: "6:00",
    };
    const activity3: Action = {
      user: "user3",
      action: "login",
      date: "2023-1-1",
      hour: "6:00",
    };
    const logger = Logger.getLogger();
    logger.addLogin(activity1)
    logger.addLogin(activity2)
    logger.addLogin(activity3)
    expect(logger.ActionBetweenDates("2021-3-15", "2023-1-1")).toEqual([activity1, activity2, activity3])
  }
});