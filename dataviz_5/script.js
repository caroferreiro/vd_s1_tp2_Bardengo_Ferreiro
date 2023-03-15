d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart = Plot.plot({
      color: {scheme: 'rainbow'},
        marks: [
        Plot.barX(data, {
          x: 'mision_hs',
          y: 'ocupacion',
          fill: 'status',
          sort: 'status',
          opacity: 0.8,
          title: (d) => `Status: ${d.status}`,
        }),
      ],
      y: {
        label: null,
        domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.ocupacion),
      },
      x: {
        grid: true,
        label: 'Horas de misión',
      },
      style: {
        fontFamily: 'sans-serif',
        fontSize: 10,
      },
      height: 300,
      marginLeft: 150,
      marginBottom: 40,
    })
    d3.select('#chart').append(() => chart)
  })
  