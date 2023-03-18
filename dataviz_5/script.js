d3.csv('astronautas.csv', d3.autoType).then(data => {
    let datos_US_USSR = data.filter(d => d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad == 'EE.UU.')
    let chart = Plot.plot({
      color: {scheme: 'spectral'},
        marks: [
        Plot.barY(datos_US_USSR, Plot.groupX({y: 'sum'}, {
          x: 'ocupacion',
          y: 'mision_hs',
          fill: 'nacionalidad',
          sort: 'nacionalidad',
          opacity: 0.8,
          title: (d) => `Nacionalidad: ${d.nacionalidad}`,
        })),
      ],
      y: {
        label: 'Horas de misión',
        labelOffset: 70,
        ticks: 8,
        //domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.ocupacion),
      },
      x: {
        grid: true,
        label: null,
        //domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.ocupacion),
      },
      style: {
        fontFamily: 'sans-serif',
        fontSize: 10,
      },
      height: 700,
      width: 800,
      marginLeft: 150,
      marginBottom: 40,
    })
    d3.select('#chart').append(() => chart)
  })
  