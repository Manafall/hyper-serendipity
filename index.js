/*
 * Project: Serendipity Hyper
 */

const { fetchColors, fetchTheme } = require('./lib/theme-dictionary.js')
  
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