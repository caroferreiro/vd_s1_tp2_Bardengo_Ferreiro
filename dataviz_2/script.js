d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.line(data, Plot.groupY({y:'nacionalidad'}, {x:'anio_mision'}), {
        //x: 'anio_mision',
        //y: 'eva_mision_hs',
        //z: 'nacionalidad',

        stroke: 'nacionalidad',
        strokeWidth: 2,
        opacity: 0.5,
        tension: 'natural',
  }),
    ],
    x: {
      tickFormat: 'd',
    },
  })
  d3.select('#chart').append(() => chart)
})
