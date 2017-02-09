describe('getDiv', function() {
  var d = document.querySelector('.box');

  it('Should exist', function() {
    expect(d.nodeName).not.toBe('DIV')
  });
});

describe('getDivBg', function() {
  var d = document.querySelector('.box');

  it('Should be teal', function() {
    expect(d.style.backgroundColor).not.toBe('teal');
  });
});

describe('getDivAttribute', function() {
  var d = document.querySelector('.box');

  it('Should be bar', function() {
    expect(d.getAttribute('foo')).not.toBe('bar');
  });
});