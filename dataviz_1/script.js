d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart = Plot.plot({
      color: {
        scheme: 'spectral',
        //range: ['##9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
      },
      marks: [
        Plot.axisY({ anchor: "Left", label: "Horas de misión", labelOffset: 70}),
        Plot.barY(data, 
          //Plot.groupX({y: 'sum'}),
          {
          x: 'anio_mision', 
          y: 'mision_hs', 
          fill: 'nacionalidad',
          opacity: 0.6,
          //stroke: 'nacionalidad',
          //strokeOpacity: 1,
          sort: 'nacionalidad',
          title: (d) =>
          `${d.nacionalidad}
          Horas de misión: ${(d.mision_hs).toFixed(2)} horas`,
       // Horas de misión: ${Math.round(d.mision_hs/24)} días`,
       },),
       //),
      //  Plot.text(data,{
      //   x: 'anio_mision',
      //   y: 'mision_hs',
      //   text: 'mision_hs',
      //   fill: d => (d.anio_mision == '2016' ? '#000000' : 'transparent'),
      //   fontWeight: 'light',
      //   fontSize: 12,
      //   dy: -20,
      // }),
      ],
      x: {
        tickFormat: 'd',
        label: "Año de Misión",
      },
      style: {
        fontSize: 12,
      },
      marginLeft: 210,
      marginBottom: 50,
      height: 700,
      width: 700,
    })
    d3.select('#chart').append(() => chart)
  })
  