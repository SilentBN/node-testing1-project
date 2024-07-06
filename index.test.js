const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  // test('[2] returns a copy, leaving the original object intact', () => {})
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const originalInput = { ...input };
    utils.trimProperties(input);
    expect(input).toEqual(originalInput);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  // test('[3] returns an object with the properties trimmed', () => {})
  test("[3] returns an object with the properties trimmed", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });

  // test('[4] the object returned is the exact same one we passed in', () => {})
  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toBe(input);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  // test('[5] returns the largest number in an array of objects { integer: 2 }', () => {})
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    const expected = 3;
    const actual = utils.findLargestInteger(input);
    expect(actual).toBe(expected);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });

  // test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {})
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    expect(counter.countDown()).toBe(3);
  });

  // test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {})
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    expect(counter.countDown()).toBe(2);
  });

  // test('[8] the count eventually reaches zero but does not go below zero', () => {})
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    expect(counter.countDown()).toBe(0);
    expect(counter.countDown()).toBe(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  // test('[9] the FIRST call of seasons.next returns "summer"', () => {})
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe("summer");
  });

  // test('[10] the SECOND call of seasons.next returns "fall"', () => {})
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    expect(seasons.next()).toBe("fall");
  });

  // test('[11] the THIRD call of seasons.next returns "winter"', () => {})
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe("winter");
  });

  // test('[12] the FOURTH call of seasons.next returns "spring"', () => {})
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe("spring");
  });

  // test('[13] the FIFTH call of seasons.next returns again "summer"', () => {})
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe("summer");
  });

  // test('[14] the 40th call of seasons.next returns "spring"', () => {})
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }
    expect(seasons.next()).toBe("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  // test('[15] driving the car returns the updated odometer', () => {})
  test("[15] driving the car returns the updated odometer", () => {
    expect(focus.drive(100)).toBe(100);
    expect(focus.drive(100)).toBe(200);
    expect(focus.drive(100)).toBe(300);
    expect(focus.drive(200)).toBe(500);
  });

  // test('[16] driving the car uses gas', () => {})
  test("[16] driving the car uses gas", () => {
    focus.drive(600);
    expect(focus.drive(1)).toBe(600);
  });

  // test('[17] refueling allows to keep driving', () => {})
  test("[17] refueling allows to keep driving", () => {
    focus.drive(600);
    focus.refuel(10);
    expect(focus.drive(600)).toBe(900);
  });

  // test('[18] adding fuel to a full tank has no effect', () => {})
  test("[18] adding fuel to a full tank has no effect", () => {
    expect(focus.refuel(5)).toBe(600);
    expect(focus.refuel(1)).toBe(600);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  // test('[19] resolves true if passed an even number', () => {})
  test("[19] resolves true if passed an even number", async () => {
    await expect(utils.isEvenNumberAsync(2)).resolves.toBe(true);
  });

  // test('[20] resolves false if passed an odd number', () => {})
  test("[20] resolves false if passed an odd number", async () => {
    await expect(utils.isEvenNumberAsync(3)).resolves.toBe(false);
  });

  // test('[21] rejects if passed a non-number', () => {})
  test("rejects if passed a non-number", async () => {
    await expect(utils.isEvenNumberAsync("not a number")).rejects.toThrow(
      "Input must be a number"
    );
  });
});
