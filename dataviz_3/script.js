d3.csv('astronautas.csv', d3.autoType).then(data => {
  let data_paises = data.filter(d => d.nacionalidad == 'EE.UU.' || d.nacionalidad == 'Italia' || d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad == 'Japon')
  let chart = Plot.plot({
    marks: [
      Plot.line(data_paises, Plot.groupX({y: 'sum'}, {
        x: 'anio_mision',
        y: 'mision_hs',
        z: 'nacionalidad',
        stroke: 'nacionalidad',
        strokeWidth: 3,
        title: (d) => `${d.nacionalidad}`,
      })),
    ],
    x: {
      // https://github.com/observablehq/plot#formats
      tickFormat: 'd',
    },
  })
  d3.select('#chart').append(() => chart)
})

  