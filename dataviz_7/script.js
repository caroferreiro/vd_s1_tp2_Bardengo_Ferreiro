d3.csv('astronautas.csv', d3.autoType).then(data => {
    let data2016_2019 = data.filter(d => d.anio_mision == '2016' || d.anio_mision == '2019')  
    let chart = Plot.plot({
        marks: [
        Plot.barX(data2016_2019, {
          x: 'mision_hs',
          y: 'anio_mision',
          fill: 'genero',
          sort: 'genero',
        }),
        Plot.frame(),
        Plot.axisY(data2016_2019, {
          tickFormat: 'd',
          //label: '',
          labelOffset: 40,
          fontSize: 13,
          fontWeight: 'bold',
      }),
      ],
      // facet: {
      //   data: data2016_2019,
      //   y: 'anio_mision',
      //   label: null,
      //   format: 'years',
      // },
      x: {
        ticks: 10,
        domain: [0, 80000],
        label: 'Horas de misión',
        labelOffset: 40,
      },
      y: {
        //label: null,
        domain: d3.sort(data2016_2019, (a, b) => d3.descending(a.mision_hs, b.emision_hs)).map(d => d.anio_mision),
      },
      style: {
        //fontFamily: 'sans-serif',
        fontSize: 11,
        //fontWeight: 'bold',
      },
      height: 200,
      width: 1500,
      marginLeft: 100,
      marginBottom: 50,
    })
    d3.select('#chart').append(() => chart)


    let chart2 = Plot.plot({
      marks: [
      Plot.barX(data2016_2019, {
        x: 'eva_mision_hs',
        y: 'genero',
        fill: 'genero',
        sort: 'genero',
      }),
      Plot.frame(),
      Plot.axisY(data2016_2019, {
        tickFormat: 'd',
        label: 'Género',
        labelOffset: 40,
        fontSize: 13,
        fontWeight: 'bold',
    }),
    ],
    facet: {
      data: data2016_2019,
      y: 'anio_mision',
      label: null,
      valueFormatString: 'YYYY',
    },
    x: {
      ticks: 10,
      domain: [0, 100],
      label: 'Horas de actividades extravehiculares',
      labelOffset: 40,
    },
    y: {
      label: null,
      domain: d3.sort(data, (a, b) => d3.descending(a.eva_mision_hs, b.eva_mision_hs)).map(d => d.genero),
    },
    style: {
      fontSize: 11,
    },
    axisY: {
      valueFormatString: 'YYYY',
    },
    height: 200,
    width: 1500,
    marginLeft: 100,
    marginBottom: 50,
  })
    d3.select('#chart').append(() => chart2)
})

  