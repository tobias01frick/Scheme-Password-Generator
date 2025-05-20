function text() {
  this.genEpl = 'This app provides a way to generate secure password from a colered scheme matrix. The idea is that such scheme is more easy to memorize for the user than any complex line of cryptic glyphs. You can use this app to generate your password from a scheme you can easily remember, any time you want to use it. Just enter your scheme by mouseclicking on the schemeboard (chose your schemes color for every field on the boad in the right order - the order matters). The generated password will have a security of 2^32 * 16! so it is about 60 bit strong. 2^32 is for the coler board, 16! is for the order in which you enter the colors on the board - different order will result in a different password.';
  this.step1 = 'Make up a scheme of 4 x 4 color fields you can easily remember.';
  this.step2 = 'Make up a distinct order for entering the scheme. The order matters - different order will result in different passwords.';
  this.step3 = 'Now enter your scheme by mouseclicking on the color field in each of the 16 scheme fields in your defined order.';
  this.step4 = 'After chosing a color for every scheme field your password will show up. You can regenerate this password any time by entering your scheme on this app.';
  this.step5 = 'You can view your scheme by pressing the "entered scheme" - button. Make a screenshot as backup for your password scheme.';

}

var TEXT = new text();
