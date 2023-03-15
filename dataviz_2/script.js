d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    color: {
      scheme: 'accent',
      legend: true,
    },
      marks: [
      Plot.barX(data,  Plot.groupY({x: 'sum'}, {
        x: 'mision_hs',
        y: 'genero',
        fill: 'genero',
        fillOpacity: 1,
        title: (d) => `Género: ${d.genero}`,
      })),
      Plot.axisY(data, {
        label: 'Genero',
        labelOffset: 40,
        fontSize: 14,
        fontWeight: 'bold',
      }),
      Plot.axisX({
        ticks: 5,
        label: 'Horas de misión',
        labelOffset: 40,
        labelSize: 14,
        labelWeight: 'bold',
    }),
    ],
    facet: {
      data: data,
      y: 'nacionalidad',
      label: null
    },
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.genero),
    },
    style: {
      //fontWeight: 'bold',
      //fontSize: 12,
    },
    axisX: {
      valueFormatString: "#",
      interval: 1,
    },
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
  })
  d3.select('#chart').append(() => chart)
})
