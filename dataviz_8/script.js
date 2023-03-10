d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    color: {scheme: 'accent'},
      marks: [
      Plot.barX(data, {
        x: 'mision_hs',
        y: 'genero',
        fill: 'genero',
        fillOpacity: 1,
        //r: 'pop',
        //title: 'country',
      }),
    ],
    grid: true,
    nice: true,
    zero: true,
    width: 1000,
    height: 1000,
    r: { range: [0, 18] },
    facet: {
      data: data,
      y: 'nacionalidad',
    },
    x: { ticks: 10,
      tickFormat: 'd',
    },
    axisX: {
      valueFormatString: "#",
      interval: 1
    },
  })
  d3.select('#chart').append(() => chart)
})
