let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'anio_mision',
        y: 'mision_hs',
        //stroke: 'eva_mision_hs',
        fill: 'eva_mision_hs',
        fillOpacity: 0.6,
        r: 'eva_mision_hs',
        title: (d) => `${d.nombre}
        País: ${d.nacionalidad}`,
      }),
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    width: 700,
    height: 300,
    marginBottom: 100,
    marginTop: 30,
    r: { range: [0, 11] },
    facet: {
      data: data,
      x: 'genero',
      label: null
    },
    x: { 
        ticks: 5,
        tickFormat: 'd',
        domain: [2009, 2020],
        label: 'Año de Misión',
        labelOffset: 40,
      },
    y: {
      ticks: 4,
      label: 'Horas de misión',
      labelOffset: 40,
    },
    color: {
      //scheme: 'purples',
      range: ['lemonchiffon', 'limegreen'],
      legend: true,
    },
  })
  d3.select('#chart').append(() => chart)
})
