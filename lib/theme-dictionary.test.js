const { fetchColors, fetchTheme, fetchDynamicTheme, themeDictionary} = require('./theme-dictionary.js')

test('dynamic theme at 10:00pm should return midnight', () => {
    const hour = new Date('March 13, 08 10:00 pm').getHours();
    expect(fetchDynamicTheme(hour)).toBe(themeDictionary['midnight'])
})

test('dynamic theme at 5:59am should return midnight', () => {
    const hour = new Date('March 13, 08 05:59 am').getHours();
    expect(fetchDynamicTheme(hour)).toBe(themeDictionary['midnight'])
})

test('dynamic theme at 6:00am should return morning', () => {
    const hour = new Date('March 13, 08 06:00 am').getHours();
    expect(fetchDynamicTheme(hour)).toBe(themeDictionary['morning'])
})

test('dynamic theme at 5:59pm should return morning', () => {
    const hour = new Date('March 13, 08 05:59 pm').getHours();
    expect(fetchDynamicTheme(hour)).toBe(themeDictionary['morning'])
})

test('dynamic theme at 6:00pm should return sunset', () => {
    const hour = new Date('March 13, 08 06:00 pm').getHours();
    expect(fetchDynamicTheme(hour)).toBe(themeDictionary['sunset'])
})

test('dynamic theme at 9:59pm should return sunset', () => {
    const hour = new Date('March 13, 08 09:59 pm').getHours();
    expect(fetchDynamicTheme(hour)).toBe(themeDictionary['sunset'])
})

test('fetch theme with invalid config should return theme with valid keys', () => {
    expect(fetchTheme({hyperSerendipity: 'invalid'}))
    .toHaveProperty(
        'coral',
        'fennel',
        'mint',
        'violet',
        'sky',
        'base',
        'interface',
        'overlay',
        'soft',
        'slight',
        'text',
        'focusLow',
        'focusMedium',
        'focusHight')
})

test('fetch theme with no config should return theme with valid keys', () => {
    expect(fetchTheme())
    .toHaveProperty(
        'coral',
        'fennel',
        'mint',
        'violet',
        'sky',
        'base',
        'interface',
        'overlay',
        'soft',
        'slight',
        'text',
        'focusLow',
        'focusMedium',
        'focusHight')
})

test('fetch theme with valid config for morning should return morning theme', () => {
    expect(fetchTheme({hyperSerendipity: {theme: 'morning'}})).toBe(themeDictionary['morning'])
})

test('fetch theme with valid config for sunset should return sunset theme', () => {
    expect(fetchTheme({hyperSerendipity: {theme: 'sunset'}})).toBe(themeDictionary['sunset'])
})

test('fetch theme with valid config for midnight should return midnight theme', () => {
    expect(fetchTheme({hyperSerendipity: {theme: 'midnight'}})).toBe(themeDictionary['midnight'])
})