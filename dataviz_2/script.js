d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    color: {scheme: 'set2'},
      marks: [
      Plot.barX(data, {
        x: 'mision_hs',
        y: 'genero',
        fill: 'genero',
        fillOpacity: 1,
        //r: 'pop',
        title: (d) => `Género: ${d.genero}
        Horas totales de misión: ${(d.mision_hs)} horas
        Duración de actividades extravehiculares: ${(d.eva_mision_hs).toFixed(2)} horas`,
      }),
      Plot.axisY(data, {
        label: 'Genero',
        labelOffset: 40,
      }),
    ],
    grid: true,
    nice: true,
    zero: true,
    width: 1200,
    height: 800,
    marginLeft: 60,
    marginRight: 80,
    marginTop: 10,
    marginBottom: 40,
    r: { range: [0, 18] },
    facet: {
      data: data,
      y: 'nacionalidad',
      
    },
    x: { ticks: 7,
      tickFormat: 'd',
      //transform: d => d/24,
      label: 'Horas de misión',
      labelOffset: 40,
    },
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.genero),
    },
    axisX: {
      valueFormatString: "#",
      interval: 1,
    },
  })
  d3.select('#chart').append(() => chart)
})
