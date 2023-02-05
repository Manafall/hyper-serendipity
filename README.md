## Hyper Serendipity
[![NPM](https://img.shields.io/npm/v/hyper-serendipity)](https://www.npmjs.com/package/hyper-serendipity)

A port of the [Serendipity](https://serendipitytheme.com/) color scheme for [Hyper](https://hyper.is/)

## Installation
- Clone this repo in `.hyper_plugins/local`
- Add "hyper-serendipity" to the `localPlugins` array in your `.hyper.js` config file

## Choosing a theme
- this theme defaults to `morning` without needing to customize `.hyper.js`
- add the `hyperSerendipity` object to your `config` object in `.hyper.js` to switch themes
```
    // 'morning' | 'midnight'
    hyperSerendipity: {
      theme: 'midnight'
    },
```
### Morning
![Screenshot](assets/screen-shot-morning.png)
### Midnight
![Screenshot](assets/screen-shot-midnight.png)