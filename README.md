# fk-esr-info
Florida Keys infographic update using Ecosystem Status Report website

Working infographic (without styling): https://noaa-iea.github.io/fk-esr-info/infographic_r.html

## Goal

Create a navigational page using provided art clickable by element to popup-windows (i.e. "modals") display time series data plotted individually.

## Develop

Because of CORS dependencies, need to view in local webserver, for instance:

```r
servr::httd()
```

## Rendering

```r
source("_make_infographic_modals.R")
```

## Materials

- website
  * [aoml.noaa.gov/esr_fknms](https://www.aoml.noaa.gov/esr_fknms)
- infographics
  * [info-demo](https://github.com/marinebon/info-demo) contains JavaScript (JS) and styling (CSS) for linking art (\*.svg) to a seperate web page with data plotted
- **data**
  * [fknms_esr_indicator_data](https://github.com/marinebon/fk-esr-info/tree/main/data/fknms_esr_indicator_data) folder containing comma-seperated value (\*.csv) data files per indicator
  * convert csv data to modal windows containing time series plots with [highcharter](https://jkunst.com/highcharter/articles/highcharts.html) using R
- **art**
  * [FKIEA Icons - Google Drive](https://drive.google.com/drive/u/3/folders/14hT-XPPxkwZ8NgV9PfVZDbGR8dWS8Xnc): Adobe Illustrator (\*.ai) and scalable vector graphics (\*.svg) versions of art scene and elements
  * [Key matching indicators to icon file names - Google Docs](https://docs.google.com/document/d/1Um7RmjAa4BLdokMcWZhMf40JTDgbB5qOzWRJsvRGDuw/edit)

![](https://raw.githubusercontent.com/marinebon/fk-esr-info/main/images/FKIEA_Ecosystem%20full%20infographic%20trypticsm.jpg)

  
  
