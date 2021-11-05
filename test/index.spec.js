const Packer = require('../src');

test('should pack object has property *minify*', () => {
    const pack = new Packer()

    expect(pack).toHaveProperty('minify');

});

test('should pack object has property *pack*', () => {
    const pack = new Packer()

    expect(pack).toHaveProperty('pack');

});
