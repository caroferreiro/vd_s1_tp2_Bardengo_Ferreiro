d3.csv('astronautas.csv', d3.autoType).then(data => {
    let datos_US_USSR = data.filter(d => d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad == 'EE.UU.')
    let datos_filtrados = datos_US_USSR.filter(d => d.anio_mision == '2016' || d.anio_mision == '2019')
    let chart = Plot.plot({
      color: {
        range: ['#f2ae72', '#b2014b', '#abdda4', '#a454b0'],
        legend: true,
      },
        marks: [
        Plot.barY(datos_US_USSR, Plot.groupX({y: 'sum'}, {
          x: 'ocupacion',
          y: 'mision_hs',
          fill: 'ocupacion',
          sort: 'ocupacion',
          fillOpacity: 0.6,
          stroke: 'ocupacion',
          strokeWidth: 1.2,
          title: (d) => `${d.ocupacion}`,
        })),
        Plot.axisY({
          ticks: 10,
          labelOffset: 80,
          fontSize: 12,
        }),
        Plot.axisX({
          label: "Ocupación",
          fontSize: 0,
        }),
        Plot.text(datos_US_USSR, {
          x: 'ocupacion',
          y: 'mision_hs',
          text: ['Ocupación'],
          fill: '#111111', 
          fontSize: 13,
          dx: -100,
          dy: 30,
        }),
        Plot.frame({
          strokeWidth: 0.5,
        }),
      ],
      facet: {
        data: datos_US_USSR,
        x: 'nacionalidad',
        label: null,
        labelSize: 12,
      },
      // facet: {
      //   data: datos_filtrados,
      //   x: d => d.anio_mision + "",
      //   label: null,
      //   labelSize: 12,
      // },
      y: {
        label: 'Horas de misión',
        labelOffset: 70,
        ticks: 8,
        labelSize: 12,
        grid: true,
        //domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.ocupacion),
      },
      x: {
        label: 'Ocupación',
        fontSize: 10
      },
      style: {
        fontSize: 12,
      },
      height: 400,
      width: 400,
      insetTop: 15,
      marginTop: 18,
      marginLeft: 83,
      marginBottom: 32,
    })
    d3.select('#chart').append(() => chart)
  })
  