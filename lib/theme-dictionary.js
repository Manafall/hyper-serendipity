const serendipityMorning = {
  coral: "#D26A5D",
  salmon: "#F19A8E",
  fennel: "#3788BE",
  mint: "#77AAB3",
  violet: "#886CDB",
  sky: "#7397DE",
  base: "#FDFDFE",
  interface: "#F1F1F4",
  overlay: "#D8DAE4",
  soft: "#8388AD",
  slight: "#5F6488",
  text: "#4E5377",
  focusLow: "#C1C3D6",
  focusMedium: "#AAB0D5",
  focusHight: "#949ABE"
};

const serendipityMidnight = {
  coral: "#EE8679",
  salmon: "#F8D2C9",
  fennel: "#5BA2D0",
  mint: "#9CCFD8",
  violet: "#A78BFA",
  sky: "#94B8FF",
  base: "#151726",
  interface: "#1C1E2D",
  overlay: "#232534",
  soft: "#6B6D7C",
  slight: "#8D8F9E",
  text: "#DEE0EF",
  focusLow: "#1F212F",
  focusMedium: "#3E404F",
  focusHigh: "#535568"
};

const serendipitySunset = {
  coral: "#D1918F",
  salmon: "#D6B4B4",
  fennel: "#709BBD",
  mint: "#AAC9D4",
  violet: "#A392DC",
  sky: "#A0B6E8",
  base: "#202231",
  interface: "#272938",
  overlay: "#363847",
  soft: "#6B6D7C",
  slight: "#8D8F9E",
  text: "#DEE0EF",
  focusLow: "#292A3A",
  focusMedium: "#414354",
  focusHigh: "#535568"
};

const themeDictionary = {
  'morning': serendipityMorning,
  'midnight': serendipityMidnight,
  'sunset': serendipitySunset
}

// return color scheme based on time
const fetchDynamicTheme = (hour) => {
  if (hour >= 22 || hour < 6) { // 10pm-6am->Midnight
    return serendipityMidnight
  } else if (hour >= 6 && hour < 18) { // 6am-6pm -> Morning
    return serendipityMorning
  } else { // 6pm-10pm -> Sunset
    return serendipitySunset;
  }
}

// return an color configuration object from a theme 
const fetchColors = (theme) => {
  return {
    black: theme.overlay,
    red: theme.coral,
    green: theme.fennel,
    yellow: theme.violet,
    blue: theme.sky,
    magenta: theme.mint,
    cyan: theme.salmon,
    white: theme.text,
    lightBlack: theme.overlay,
    lightRed: theme.coral,
    lightGreen: theme.fennel,
    lightYellow: theme.violet,
    lightBlue: theme.sky,
    lightMagenta: theme.mint,
    lightCyan: theme.salmon,
    lightWhite: theme.text,
  }
}

// return user specified theme or dynamic theme
const fetchTheme = (config) => {
  return themeDictionary[config?.hyperSerendipity?.theme] || fetchDynamicTheme(new Date().getHours())
}

module.exports = { fetchColors, fetchTheme, fetchDynamicTheme, themeDictionary }