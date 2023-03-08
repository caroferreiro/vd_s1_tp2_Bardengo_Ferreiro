d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart = Plot.plot({
      color: {scheme: 'spectral'},
      marks: [
        Plot.barY(data, {
          x: 'anio_mision',
          y: 'mision_hs',
          fill: 'nacionalidad',
          color: {scheme: 'BuRd'},
          opacity: 0.7,
          sort: 'nacionalidad',
          title: (d) =>
          `${d.nacionalidad}
          Horas de misión: ${(d.mision_hs/24).toFixed(2)} días`,
        //  Horas de misión: ${Math.round(d.mision_hs/24)} días`,
        }),
      ],
      x: {
        tickFormat: 'd',
      },
      marginLeft: 70,
      height: 700,
      width: 500,
    })
    d3.select('#chart').append(() => chart)
  })
  