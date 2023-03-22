d3.csv('astronautas.csv', d3.autoType).then(data => {
    let datos_US_USSR = data.filter(d => d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad == 'EE.UU.')
    let datos_filtrados = datos_US_USSR.filter(d => d.anio_mision == '2016' || d.anio_mision == '2019')
    let chart = Plot.plot({
      color: {
        range: ['#f2ae72', '#80ced6']
      },
        marks: [
        Plot.barY(datos_filtrados, Plot.groupX({y: 'sum'}, {
          x: 'ocupacion',
          y: 'mision_hs',
          fill: 'nacionalidad',
          sort: 'nacionalidad',
          fillOpacity: 0.6,
          stroke: 'nacionalidad',
          strokeWidth: 1.2,
          title: (d) => `Ocupación: ${d.ocupacion}`,
        })),
        Plot.axisY({
          ticks: 10,
          labelOffset: 80,
          fontSize: 12,
        }),
        Plot.axisX({
          ticks: 10,
          label: 'Ocupación',
          labelOffset: 80,
          fontSize: 0,
        }),
      ],
      facet: {
        data: datos_filtrados,
        x: d => d.anio_mision + "",
        label: null,
        labelSize: 12,
      },
      y: {
        label: 'Horas de misión',
        labelOffset: 70,
        ticks: 8,
        fontSize: 12,
        //domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.ocupacion),
      },
      x: {
        label: 'Ocupación',
      },
      style: {
        fontSize: 12,
      },
      height: 550,
      width: 600,
      marginLeft: 210,
      marginBottom: 40,
    })
    d3.select('#chart').append(() => chart)
  })
  