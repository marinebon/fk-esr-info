function createGraph(theData, graph_location, title, y_axis_label, x_axis_label = "Year", plot_band_width = 5, SST = false){

  fetch(theData)
  .then((response) => {
    return response.text();
  })
  .then((theCsv) => {
  
    // Find last year in data, with a csv generally outputted by google sheets
    var theCsvLines = theCsv.split(/\r\n|\n/);
    var linenum = theCsvLines.length - 1;
    var lastRow = theCsvLines[linenum];
    var lastDate = lastRow.split(",")[0];
    //If the csv isn't outputted by google sheets, this extra step needed
    if (lastDate.length === 0) {
      lastRow = theCsvLines[linenum-1];
      lastDate = lastRow.split(",")[0];
    }

    //The dates in the SST time series data are formatted differently than all of the other time series, so the x-axis plot bands need to be calculated differently for SST data 
    if (SST === false){
      begin_plot_band = lastDate - plot_band_width; 
      end_plot_band = lastDate;
    }
    else{
      date_breakout = lastDate.split("/");
      begin_plot_band = Date.UTC(date_breakout[2] - plot_band_width, date_breakout[0], date_breakout[1]); 
      end_plot_band = Date.UTC(date_breakout[2], date_breakout[0], date_breakout[1]);
    }
    // Produce highcharts graph
    Highcharts.chart(graph_location, {
      title: {text: title},
      credits: {enabled: false},
      data: {
        csv: theCsv,
        firstRowAsNames: true,
        startRow: 0 }, 
      series: [{
        name: 'value', 
        showInLegend: true,
        marker: {
          enabled: false,
          fillColor: 'white',
          lineWidth: 1,
          lineColor: Highcharts.getOptions().colors[0] }}],
      xAxis: {
        plotBands: [{
          from: begin_plot_band, 
          to: end_plot_band,
          color: '#DEDEFF'}],
        title: {text: x_axis_label}},
      yAxis: {
        title: {text: y_axis_label} }});
        
  }
  
  
  );
  
}