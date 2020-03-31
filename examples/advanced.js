const LCD = require('../index');

const lcd = new LCD(1, 0x3f, 16, 2);
async function wait(delay) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, delay);
  });
}
async function advancedTest() {
  await lcd.begin();
  await lcd.clear();
  await lcd.print('h');
  await wait(500);
  await lcd.print('e');
  await wait(500);
  await lcd.print('l');
  await wait(500);
  await lcd.print('l');
  await wait(500);
  await lcd.print('o');
  await wait(500);
  await lcd.setCursor(0, 1);
  await lcd.print('world!');
  await wait(1000);
  await lcd.clear();
  await wait(200);
  await lcd.printLine(0, 'hello');
  await lcd.printLine(1, 'world!');
  await wait(200);
  await lcd.clear();
  await wait(200);
  await lcd.printLine(0, 'hello');
  await lcd.printLine(1, 'world!');
  await wait(200);
  await lcd.clear();
  await wait(200);
  await lcd.printLine(0, 'hello');
  await lcd.printLine(1, 'world!');
  await wait(200);
  await lcd.cursor();
  await wait(500);
  await lcd.blink();
  await wait(1000);
  await lcd.noCursor();
  await wait(1000);
  await lcd.noBlink();
  await lcd.noDisplay();
  await wait(500);
  await lcd.display();
  await wait(500);
  await lcd.scrollDisplayLeft();
  await wait(1000);
  await lcd.scrollDisplayRight();
  await lcd.rightToLeft();
  await lcd.setCursor(15, 0);
  await wait(1000);
  await lcd.print('3');
  await wait(200);
  await lcd.print('2');
  await wait(200);
  await lcd.print('1');
  await lcd.setCursor(15, 1);
  await wait(200);
  await lcd.print('C');
  await wait(200);
  await lcd.print('B');
  await wait(200);
  await lcd.print('A');
  await lcd.leftToRight();
  await lcd.createChar(0, [0x0, 0x0, 0xa, 0x1f, 0x1f, 0xe, 0x4, 0x0]);
  await lcd.createChar(1, [0x2, 0x12, 0x2, 0x2, 0x2, 0x2, 0x12, 0x2]);
  await lcd.createChar(2, [0x2, 0x11, 0x1, 0x1, 0x1, 0x1, 0x11, 0x2]);
  await lcd.setCursor(7, 0);
  await lcd.print(String.fromCharCode(0));
  await wait(200);
  await lcd.setCursor(8, 0);
  await lcd.print(String.fromCharCode(0));
  await wait(200);
  await lcd.setCursor(9, 0);
  await lcd.print(String.fromCharCode(0));
  await wait(200);
  await lcd.setCursor(8, 1);
  await lcd.print(String.fromCharCode(1));
  await wait(1000);
  await lcd.setCursor(8, 1);
  await lcd.print(String.fromCharCode(2));
}
advancedTest();
