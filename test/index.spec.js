const Packer = require('../src');
const packer = new Packer()

test('should packer object to be instance of Packer', () => {
    expect(packer).toBeInstanceOf(Packer);
});

test('should packer object has property *minify*', () => {
    expect(packer).toHaveProperty('minify');
});

test('should packer object has property *pack*', () => {
    expect(packer).toHaveProperty('pack');
});

test('should return "string" received "number"', () => {
    const received = packer.pack(1);
    expect(typeof received).toBe('string')
});

test('should return "string" received "array"', () => {
    const received = packer.pack([]);
    expect(typeof received).toBe('string')
});

test('should return "string" received "object"', () => {
    const received = packer.pack({});
    expect(typeof received).toBe('string')
});

test('should return "1+2"', () => {
    const received = packer.pack('1 + 2')
    expect(received).toBe('1+2');
});

test('should return eval string containing "p,a,c,k,e,r"', () => {
    const received = packer.pack('', true);
    expect(received).toContain('p,a,c,k,e,r');
});