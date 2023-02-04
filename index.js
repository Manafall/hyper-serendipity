/*
 * Project: Serendipity Hyper
 */

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

  const themeDictionary = {
    'morning': serendipityMorning,
    'midnight': serendipityMidnight
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

  const fetchTheme = ({hyperSerendipity}) => {
    return themeDictionary[hyperSerendipity?.theme] || serendipityMorning
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
        .footer_footer .item_item {
          color: ${theme.interface};
        }
        .footer_footer .item_icon.icon_dirty {
          background-color: ${theme.interface};
        }
        .footer_footer .item_icon.icon_pull,
        .footer_footer .item_icon.icon_push {
          background-color: ${theme.interface};
        }
      `
    });
  };