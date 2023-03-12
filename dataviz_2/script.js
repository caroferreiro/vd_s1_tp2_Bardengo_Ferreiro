d3.csv('astronautas.csv', d3.autoType).then(data => {
  //let dataABC = data.filter(
    //d => d.nacionalidad == 'Canada' || d.nacionalidad == 'Alemania' 
  //)
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
    ],
    grid: true,
    nice: true,
    zero: true,
    width: 1200,
    height: 800,
    marginLeft: 70,
    marginRight: 80,
    r: { range: [0, 18] },
    facet: {
      data: data,
      y: 'nacionalidad',
      label: null,
    },
    x: { ticks: 7,
      tickFormat: 'd',
      //transform: d => d/24,
      label: 'Horas de misión'
    },
    y: {
      label: null,
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.genero),
    },
    axisX: {
      valueFormatString: "#",
      interval: 1,
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
