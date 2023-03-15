let chart
let data
let valuesDomainX
let valuesDomainY

let selectElement = d3.select('#input')
selectElement.on('input', event => {
  let yearSelected = event.target.value
  changeValueInput(yearSelected)
  createChart(yearSelected)
})

d3.csv('astronautas.csv', d3.autoType).then(dataChart => {
  data = dataChart
  let initYear = selectElement.attr('value')
  //valuesDomainX = [d3.min(data, d => d.nacionalidad), d3.max(data, d => d.nacionalidad)]
  valuesDomainY = [d3.min(data, d => d.mision_hs), d3.max(data, d => d.mision_hs)]
  changeValueInput(initYear)
  createChart(initYear)
})

function changeValueInput(value) {
  const resultado = document.querySelector('#value-input')
  resultado.textContent = value
}

function createChart(yearSelected) {
  let dataFilter = data.filter(d => d.anio_mision == yearSelected)
  chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
    zero: true,
    width: 500,
    height: 800,
    marginLeft: 50,
    marginTop: 30,
    marks: [
      Plot.barY(dataFilter, Plot.groupX({y: 'sum'}, {
        x: 'nacionalidad',
        y: 'mision_hs',
        fill: 'nacionalidad',
        fillOpacity: 0.6,
        //r: 'edad_mision',
        title: 'nombre',
      }),
      Plot.axisX(valuesDomainX, {
        fontWeight: 'bold',
        fontSize: 11,
      })),
    ],
    color: {
      legend: true,
      className: 'legend-clusters',
    },
    //r: {range:[0,5]},
    x: {
      domain: valuesDomainX,
      label: null,
    },
    y: {
      label: 'Horas de misión',
      ticks: 10,
      //domain: valuesDomainY,
    },
    style: {
      fontSize: 12,
    }
  })

  /* Agrega un título a la leyenda x d3 */
  d3.select(chart)
    .select('.legend-clusters')
    .insert('h4', 'span')
    .attr('class', 'legend-title')
    .text('Grupos de países: ')
    .classed('legend-title')

  d3.select('#chart figure').remove()
  d3.select('#chart').append(() => chart)
}
