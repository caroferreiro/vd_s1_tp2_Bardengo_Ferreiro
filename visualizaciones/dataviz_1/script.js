d3.csv('astronautas.csv', d3.autoType).then(data => {
    let datos_paises = data.filter(d => d.nacionalidad == 'EE.UU.' || d.nacionalidad == 'U.S.S.R/Rusia') 
    // || d.nacionalidad == 'Japon' || d.nacionalidad == 'Italia' || d.nacionalidad == 'China' || d.nacionalidad == 'Canada' || d.nacionalidad == 'Alemania' || d.nacionalidad == 'Reino Unido' || d.nacionalidad == 'Paises Bajos')
    let datos_2016 = data.filter(d => d.anio_mision == '2016')
    let datos_2019 = data.filter(d => d.anio_mision == '2019')
    let chart = Plot.plot({
      //color: {
        //range: ['#9e0142', '#d53e4f', '#a454b0', '#4daf4a', '#fee08b', '#e6f598', '#abdda4', 'lemonchiffon', 'yellowgreen', '#4daf4a', '#71d1b3'],
        //       Alemania    Canada     Rusia    Dinamarca    EE.UU.               Francia        Italia          Japon     Kazajistan
        //range: ['#FF69B4', '#87cefa', '#7b68ee', '#98fb98', '#f08080', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'], 
        //range: d => (datos_paises.nacionalidad == 'EE.UU.' ? '#87cefa' : '#A9A9A9' && datos_paises.nacionalidad == 'U.S.S.R/Rusia' ? '#9e0142' : '#A9A9A9'), 
        //scheme: d => (d.nacionalidad == 'EE.UU.' ? '#87cefa' : '#A9A9A9' && d.nacionalidad == 'U.S.S.R/Rusia' ? '#9e0142' : '	#A9A9A9'),
        //legend:true
      //},
      marks: [
        Plot.axisY({ 
          anchor: "Left",
          ticks: 10,
          grid: true, 
          label: "Horas de misión ↑", 
          labelOffset: 45,
          fontSize: 12,
        }),
        Plot.barY(data, 
          Plot.groupX({y: 'sum'}, {
            x: 'anio_mision', 
            y: 'mision_hs', 
            //fill: 'nacionalidad',
            //'#9acd32'
            fill: d => (d.nacionalidad == 'EE.UU.' ? '#5e94b6' : '#A9A9A9' && d.nacionalidad == 'U.S.S.R/Rusia' ? '#e47499' : '	#A9A9A9'), 
            fillOpacity: 0.5,
            stroke: d => (d.nacionalidad == 'EE.UU.' ? '#5e94b6': '#A9A9A9' && d.nacionalidad == 'U.S.S.R/Rusia' ? '#e47499' : '	#A9A9A9'),
            strokeOpacity: 0.1,
            strokeWeight: 0.1,
            legend: true,
            sort: 'nacionalidad',
            //title: (d) =>
          //`${d.nacionalidad}`
          //Horas de misión: ${(d.mision_hs).toFixed(2)} horas`,
       // Horas de misión: ${Math.round(d.mision_hs/24)} días`,
       //'#87cefa'
       //#db7093'
          })),
          Plot.barY(datos_2016, 
            Plot.groupX({y: 'sum'}, {
              x: 'anio_mision', 
              y: 'mision_hs', 
              fill:d => (d.nacionalidad == 'EE.UU.' ? '#5e94b6' : '#A9A9A9' && d.nacionalidad == 'U.S.S.R/Rusia' ? '#e47499' : '	#A9A9A9'),
              fillOpacity: 0.8,
              stroke: d => (d.nacionalidad == 'EE.UU.' ? '#5e94b6': '#A9A9A9' && d.nacionalidad == 'U.S.S.R/Rusia' ? '#e47499' : '	#A9A9A9'),
              strokeOpacity: 0.1,
              strokeWeight: 0.1,
              sort: 'nacionalidad',
              //title: (d) =>
            //`${d.nacionalidad}`
          })),
          Plot.barY(datos_2019, 
            Plot.groupX({y: 'sum'}, {
              x: 'anio_mision', 
              y: 'mision_hs', 
              fill:d => (d.nacionalidad == 'EE.UU.' ? '#5e94b6' : '#A9A9A9' && d.nacionalidad == 'U.S.S.R/Rusia' ? '#e47499': '	#A9A9A9'),
              fillOpacity: 0.7,
              stroke:d => (d.nacionalidad == 'EE.UU.' ? '#5e94b6' : '#A9A9A9' && d.nacionalidad == 'U.S.S.R/Rusia' ? '#e47499' : '	#A9A9A9'),
              strokeOpacity: 0.1,
              strokeWeight: 0.1,
              sort: 'nacionalidad',
              //title: (d) =>
            //`${d.nacionalidad}`
          })),
        Plot.text(
          datos_2016,
          Plot.groupX(
          { y: 'sum' },
          {
          x: 'anio_mision',
          y: 'mision_hs',
          fill: 'black',
          sort: 'nacionalidad',
          fontWeight: 'bold',
          fontSize: 12,
          text: d => {
          // d: es el grupo de astronautas de todos los países
          console.log(d)
          let sumaHs = d3.sum(d, d2 => d2.mision_hs)
          return d3.format('d')(sumaHs)
          },
          dy: -10,
          })),
          Plot.text(
            datos_2019,
            Plot.groupX(
            { y: 'sum' },
            {
            x: 'anio_mision',
            y: 'mision_hs',
            fontWeight: 'bold',
            fontSize: 11,
            fill: 'black',
            sort: 'nacionalidad',
            text: d => {
            // d: es el grupo de astronautas de todos los países
            console.log(d)
            let sumaHs = d3.sum(d, d2 => d2.mision_hs)
            return d3.format('d')(sumaHs)
            },
            dy: -10,
            })),
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
      height: 400,
      width: 500,     
    })
    d3.select('#chart').append(() => chart)
  })

 
  