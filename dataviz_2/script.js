d3.csv('astronautas.csv', d3.autoType).then(data => {
  //let dataABC = data.filter(
    //d => d.nacionalidad == 'Canada' || d.nacionalidad == 'Alemania' 
  //)
  let chart = Plot.plot({
    marks: [
      Plot.areaY(dataABC, {
        x: 'anio_mision',
        y: 'mision_hs',
        // https://observablehq.com/@ee2dev/sorting-with-plot-a-collection-of-plot-examples
        //sort: d => -d.pop, // orden descendente
        fill: 'ocupacion',
      }),
    ],
    x: {
      tickFormat: 'd',
    },
    y: {
      tickFormat: d3.format(',.0f'),
      grid: true,
    },
    marginLeft: 70,
    line: true,
    color: {
      legend: true,
    },
  })
  d3.select('#chart').append(() => chart)
})
