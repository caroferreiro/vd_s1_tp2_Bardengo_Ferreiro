let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    color: {scheme: 'accent'},
    marks: [
      Plot.dot(data, {
        x: 'anio_mision',
        y: 'mision_hs',
        fill: 'genero',
        fillOpacity: 0.6,
        r: 'eva_mision_hs',
        title: (d) => `${d.nombre}
        País: ${d.nacionalidad}`
      }),
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    width: 700,
    height: 300,
    r: { range: [0, 11] },
    facet: {
      data: data,
      x: 'genero',
    },
    x: { 
        ticks: 5,
        tickFormat: 'd',
        domain: [2009, 2020],
      },
    y: {
      ticks: 4,
    }
  })
  d3.select('#chart').append(() => chart)
})
