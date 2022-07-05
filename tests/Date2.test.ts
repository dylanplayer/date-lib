import { Date2 } from "../src";

test('create successfully with string', () => {
  const date = new Date2('December 13, 2002 03:24:00');
  expect(date.toString()).toBe('Fri Dec 13 2002 03:24:00 GMT-0800 (Pacific Standard Time)');
});

test('getSecondsSince returns correctly', () => {
  const date = new Date2('December 17, 1995 03:24:00');
  expect(date.getSecondsSince(new Date2('December 17, 1995 03:24:20')))
    .toBe(20);
});

test('getMinutesSince returns correctly', () => {
  const date = new Date2('December 17, 1995 03:24:00');
  expect(date.getMinutesSince(new Date2('December 17, 1995 04:25:00')))
    .toBe(61);
});

test('getHoursSince returns correctly', () => {
  const date = new Date2('December 17, 1995 03:24:00');
  expect(date.getHoursSince(new Date2('December 17, 1995 04:25:00')))
    .toBe(1);
});

test('getDaysSince returns correctly', () => {
  const date = new Date2('December 17, 1995 03:24:00');
  expect(date.getDaysSince(new Date2('December 18, 1995 04:25:00')))
    .toBe(1);
});

test('getMonthsSince returns correctly', () => {
  const date = new Date2('December 17, 1995 03:24:00');
  expect(date.getMonthsSince(new Date2('November 18, 1995 04:25:00')))
    .toBe(1);
});

test('getYearsSince returns correctly', () => {
  const date = new Date2('December 17, 1995 03:24:00');
  expect(date.getYearsSince(new Date2('December 17, 1994 04:24:00')))
    .toBe(1);
});

test('getRoundedTimeSince returns correctly', () => {
  const date = new Date2('December 17, 1995 03:24:00');
  expect(date.getRoundedTimeSince(new Date2('December 17, 1995 03:24:01'))).toBe('1 seconds');
  expect(date.getRoundedTimeSince(new Date2('December 17, 1995 03:25:01'))).toBe('1 minutes');
  expect(date.getRoundedTimeSince(new Date2('December 17, 1995 04:25:01'))).toBe('1 hours');
  expect(date.getRoundedTimeSince(new Date2('December 18, 1995 04:25:01'))).toBe('1 days');
  expect(date.getRoundedTimeSince(new Date2('November 18, 1995 04:25:01'))).toBe('1 months');
  expect(date.getRoundedTimeSince(new Date2('January 18, 1996 04:25:01'))).toBe('1 years');
});

test('year returns year', () => {
  const date = new Date2('December 17, 1995 03:24:00');
  expect(date.year).toBe(1995);
});

test('month returns month', () => {
  const date = new Date2('December 17, 1995 03:24:00');
  expect(date.month).toBe(12);
});

test('day returns day', () => {
  const date = new Date2('December 17, 1995 03:24:00');
  expect(date.day).toBe(17);
});

test('time returns time', () => {
  const date = new Date2('December 17, 1995 03:24:00');
  expect(date.time).toBe('3:24:00 AM');
});

test('getMonthName returns month name', () => {
  const date = new Date2('December 17, 1995 03:24:00');
  expect(date.getMonthName()).toBe('December');
});

test('getDayName returns day name', () => {
  const date = new Date2('December 17, 1995 03:24:00');
  expect(date.getDayName()).toBe('Sunday');
});

