<template>
  <div class="column">
    <svg class="" :id="id"> </svg>
  </div>
</template>

<script>
import BaseChart from './BaseChart.vue';
import * as d3 from 'd3';

export default {

  extends: BaseChart,

  name: 'progress-bar',

  computed: {

    required() {
      
    },

    earned() {

    },
  },

  data() {
    return {
    }
  },

  methods: {

    renderChart() {

      const width = 300
      const height = 300
      
      const pieWidth = width
      const pieHeight = height
      const pieOuterRadius = pieWidth / 2
      const pieInnerRadius = (pieWidth / 2) - 20

      const svg = d3.select('svg#' + this.id)
                    .attr('width', width)
                    .attr('height', height)

      const g = svg.append('g')
                    .attr('transform', 
                          'translate(' + width / 2+ ', ' + 
                           height / 2+ ')')
      
      const tau = Math.PI * 2;
      const startAngle = 0

      const colorScale = d3.scaleQuantize()
        .domain([0, tau])
        .range(['#f8333c', '#ffd400', '#49c349'])

      const arc = d3.arc()
        .innerRadius(pieInnerRadius)
        .outerRadius(pieOuterRadius)
        .cornerRadius(10)
        .startAngle(0)

      // Add the background arc, from 0 to 100% (tau)
      const background = g.append('path')
        .datum({endAngle: tau})
        .attr('fill', '#d0d0d0')
        .attr('d', arc)

      const foreground = g.append('path')
        .datum({endAngle: startAngle * tau})
        .attr('fill', 'orange')
        .attr('d', arc)

      // Every so often, start a transition to a new random angle.
      d3.interval(function() {
        foreground.transition()
          .duration(750)
          .attrTween('d', arcTween(Math.random() * tau))
      }, 1500)

      // Returns the tween for a transition's "d" attribute, transitioning any 
      // selected arcs from their current angle to the specified new angle
      function arcTween(newAngle) {
        return function(d) {
          const interpolate = d3.interpolate(d.endAngle, newAngle)
          return function(t) {
            d.endAngle = interpolate(t);
            return arc(d);
          }
        }
      }


    },

  },

  props: {

    id: {
      type: String,
      required: true
    },
    
  },
}
</script>

<style>
</style>
