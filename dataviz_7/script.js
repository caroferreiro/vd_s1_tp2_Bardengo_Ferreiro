d3.csv('astronautas.csv', d3.autoType).then(data => {
    let data2016_2019 = data.filter(d => d.anio_mision == '2016' || d.anio_mision == '2019')  
    let chart = Plot.plot({
      //color: { scheme: 'dark2' },
      marks: [
        Plot.barX(data2016_2019, Plot.groupY( {x: 'sum'}, {
          x: 'mision_hs',
          y: 'anio_mision',
          fill: 'anio_mision',
          fillOpacity: 0.5,
          stroke: 'anio_mision',
          strokeOpacity: 1,
        })),
        Plot.frame(),
        Plot.axisY({
          tickFormat: 'd',
          labelOffset: 40,
          fontSize: 12,
          fontWeight: 'bold',
          domain: d3.sort(data2016_2019, (a, b) => d3.descending(a.mision_hs, b.emision_hs)).map(d => d.anio_mision),
      }),
        Plot.axisX({
          ticks: 11,
          domain: [0, 80000],
          label: 'Horas de misión',
          labelOffset: 40,
          fontSize: 12,
          //fontWeight: 'bold',
        }),
      ],
      y: { 
        label: null,
      },
      color: { 
        //range: ['#bc80bd','#ffed6f']
        range: ['#4daf4a','#984ea3'],
      },
      height: 180,
      width: 900,
      marginLeft: 70,
      marginBottom: 50,
      insetRight: 20,
      insetTop: 10,
      insetBottom: 10,

      // facet: {
      //   data: data2016_2019,
      //   y: 'anio_mision',
      //   label: null,
      //   format: 'years',
      // },
    })
    d3.select('#chart').append(() => chart)


    let chart2 = Plot.plot({
      marks: [
      Plot.barX(data2016_2019, Plot.groupY( {x: 'sum'}, {
        x: 'eva_mision_hs',
        y: 'anio_mision',
        fill: 'anio_mision',
        fillOpacity: 0.5,
        stroke: 'anio_mision',
        strokeOpacity: 1,
      })),
      Plot.frame(),
      Plot.axisY({
        tickFormat: 'd',
        labelOffset: 40,
        fontSize: 12,
        fontWeight: 'bold',
        domain: d3.sort(data2016_2019, (a, b) => d3.descending(a.mision_hs, b.emision_hs)).map(d => d.anio_mision),
      }),
      Plot.axisX({
        ticks: 10,
        domain: [0, 100],
        label: 'Horas de actividades extravehiculares',
        labelOffset: 40,
        fontSize: 12,
        //fontWeight: 'bold',
      })
    ],
    y: {
      label: null,
    },
    color: { 
      //range: ['#bc80bd','#ffed6f']
      range: ['#4daf4a','#984ea3'],
    },
    height: 180,
    width: 900,
    marginLeft: 70,
    marginBottom: 50,
    insetRight: 20,
    insetTop: 10,
    insetBottom: 10,
  })
    d3.select('#chart').append(() => chart2)
})

  