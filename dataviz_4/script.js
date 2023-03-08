let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'anio_mision',
        y: 'mision_hs',
        fill: 'genero',
        fillOpacity: 0.6,
        r: 'eva_mision_hs',
      }),
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    width: 700,
    height: 200,
    r: { range: [0, 12] },
    facet: {
      data: data,
      x: 'genero',
    },
    x: { 
        ticks: 3,
        tickFormat: 'd',
        domain: [2009, 2020],
      },
  })
  d3.select('#chart').append(() => chart)
})
