/*
 * Project: Serendipity Hyper
 */

  let today = new Date()
  let hour = today.getHours()

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

  // fetch user specified theme or fetch dynamic theme
  const fetchTheme = ({hyperSerendipity}) => {
    return themeDictionary[hyperSerendipity?.theme] || fetchDynamicTheme()
  }

  // 
  const fetchDynamicTheme = () => {
    if (hour >= 20 || hour < 6) { // 10pm-6am->Midnight
      return serendipityMidnight  
    } else if (hour >= 6 || hour < 18) { // 6am-6pm -> Morning
      return serendipityMorning
    } else { // 6pm-10pm -> Sunset
      return serendipitySunset;
    }
  }
  
  exports.decorateConfig = config => {
    const theme = fetchTheme(config)
    const colors = fetchColors(theme)
    return Object.assign({}, config, {
      foregroundColor: theme.text,
      backgroundColor: theme.base,
      borderColor: theme.interface,
      cursorColor: config.cursorColor || theme.soft,
      colors,
      cursorShape: config.cursorShape || "BEAM",
      fontSize: config.fontSize || 14,
      fontFamily: config.fontFamily || "'Source Code Pro', Hack",
      css: `
        ${config.css || ""}
        .header_header {
          background-color: ${theme.base} !important;
          top: 0 !important;
          right: 0 !important;
          left: 0 !important;
        }
        .terminal .xterm-selection div {
          background: ${theme.base} !important;
        }
        .tab_first {
          margin-left: 0 !important;
          padding: 0 !important;
        }
        .tabs_list,
        .tab_tab {
          border: 0 !important;
        }
        .tab_tab {
          color: ${theme.text};
          transition: color 50ms ease, background 50ms ease;
        }
        .tab_tab.tab_active,
        .tab_tab:hover {
          color: ${theme.salmon};
          background-color: ${theme.interface};
        }
        .splitpane_divider {
          background-color: ${theme.base} !important;
        }
        /*+---------------+
         + hyper-statusline Plugin Support +
         +----------------+*/
        .footer_footer {
          background-color: ${theme.interface};
        }
        .footer_footer .item_item:before {
          color: ${theme.text};
        }
        .item_cwd:before {
          background-color: ${theme.text}!important;
        }
        .item_cwd {
          color: ${theme.text};
        }
        .item_branch:before {
          background-color: ${theme.text}!important;
        }
        .icon_dirty {
          background-color: ${theme.text}!important;
        }
        .item_icon {
          color: ${theme.text}!important;
        }
        .icon_pull,
        .icon_push {
          background-color: ${theme.text}!important;
        }
      `
    });
  };
