d3.csv('astronautas.csv', d3.autoType).then(data => {
    let datos_paises = data.filter(d => d.nacionalidad == 'EE.UU.' || d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad == 'Japon' || d.nacionalidad == 'Italia' || d.nacionalidad == 'China' || d.nacionalidad == 'Canada' || d.nacionalidad == 'Alemania' || d.nacionalidad == 'Reino Unido' || d.nacionalidad == 'Paises Bajos')
    let datos_2016 = datos_paises.filter(d => d.anio_mision == '2016')
    let datos_2019 = datos_paises.filter(d => d.anio_mision == '2019')
    let chart = Plot.plot({
      color: {
        scheme: 'spectral',
        //range: ['#9e0142', '#d53e4f', '#a454b0', '#4daf4a', '#fee08b', '#e6f598', '#abdda4', 'lemonchiffon', 'yellowgreen', '#4daf4a', '#71d1b3'],
        //       Alemania    Canada     Rusia    Dinamarca    EE.UU.               Francia        Italia          Japon     Kazajistan
        //range: ['#FF69B4', '#87cefa', '#7b68ee', '#98fb98', '#f08080', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'], '#bc80bd','#ffed6f'
        legend: true,
      },
      marks: [
        Plot.axisY({ 
          anchor: "Left",
          ticks: 10,
          grid: true, 
          label: "Horas de misión", 
          labelOffset: 45,
          fontSize: 12,
        }),
        Plot.barY(datos_paises, 
          Plot.groupX({y: 'sum'}, {
            x: 'anio_mision', 
            y: 'mision_hs', 
            fill: 'nacionalidad',
            fillOpacity: 0.5,
            stroke: 'nacionalidad',
            strokeOpacity: 0.1,
            strokeWeight: 0.1,
            sort: 'nacionalidad',
            title: (d) =>
          `${d.nacionalidad}`
          //Horas de misión: ${(d.mision_hs).toFixed(2)} horas`,
       // Horas de misión: ${Math.round(d.mision_hs/24)} días`,
          })),
          Plot.barY(datos_2016, 
            Plot.groupX({y: 'sum'}, {
              x: 'anio_mision', 
              y: 'mision_hs', 
              fill: 'nacionalidad',
              fillOpacity: 0.8,
              stroke: 'nacionalidad',
              strokeOpacity: 0.1,
              strokeWeight: 0.1,
              sort: 'nacionalidad',
              title: (d) =>
            `${d.nacionalidad}`
          })),
          Plot.barY(datos_2019, 
            Plot.groupX({y: 'sum'}, {
              x: 'anio_mision', 
              y: 'mision_hs', 
              fill: 'nacionalidad',
              fillOpacity: 0.7,
              stroke: 'nacionalidad',
              strokeOpacity: 0.1,
              strokeWeight: 0.1,
              sort: 'nacionalidad',
              title: (d) =>
            `${d.nacionalidad}`
          })),
        //   Plot.text(data, Plot.binX({y:'sum'}, {
        //     x: 'anio_mision',
        //     //y: 'mision_hs',
        //     filter: (d) => d.anio_mision == '2016',
        //     // text: 'mision_hs',
        //     fill: '#111111',
        //     fontSize: 12,
        //     fontWeight: 'bold',
        //     dy: -360,
        //     dx: -43,
        // })),
      ],
      x: {
        tickFormat: 'd',
        label: null,
      },
      style: {
        fontSize: 12,
      },
      marginLeft: 70,
      marginBottom: 25,
      height: 420,
      width: 520,
    })
    d3.select('#chart').append(() => chart)
  })
  