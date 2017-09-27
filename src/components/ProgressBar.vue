<template>
<div class="dbviz__container">
  <h6 class="dbviz__title"><span>{{ chartData.name }}</span>requirements</h6>
  <div class="dbviz" :id="id">
    <h4 class="dbviz__count">
      <span class="head" :class="progressIndicator | hasText" :id="countId"></span>
      <span class="tail" :class="progressIndicator | hasText">credits earned</span>
      <span class="tail has-text-grey"><span class="has-text-grey-darker has-text-weight-bold">{{ required }}</span> required</span>
      <span class="tail has-text-grey">{{ togo }} to go</span>
    </h4>
    <svg></svg>
  </div>
</div>
</template>

<script>
import BaseChart from './BaseChart.vue';
import * as d3 from 'd3';
import CountUp from 'countup.js'

export default {

  extends: BaseChart,

  name: 'progress-bar',

  filters: {
    hasText(progress) {
      return `has-text-${progress}`
    },

    
  },


  computed: {
    earned() {
      return this.chartData.earned
    },

    required() {
      return this.chartData.required
    },

    countId() {
      return `count-${this.id}`
    },

    progress() {

    },

    progressIndicator() {
      if (this.earned / this.required > 0.66) {
        return 'success' 
      }  else if (this.earned / this.required >= 0.33) {
        return 'warning'
      }
      return 'danger'
    },

    togo() {
      return this.required - this.earned
    },
    
  },

  data() {
    return {
      transitionDuration: 750,
    }
  },

  created() {

  },

  mounted() {

    const animateCount = 
      new CountUp(this.countId, 0.0, this.earned, 1, this.transitionDuration * .001)

    if (!animateCount.error) {
      animateCount.start()
    } else {
      console.error(animateCount.error);
    }
  },

  methods: {


    renderChart() {

      const width = 300
      const height = 300

      const decimalPlaces = 1
      const decimalFactor = Math.pow(10, decimalPlaces)
      
      const pieWidth = width
      const pieHeight = height
      const pieOuterRadius = pieWidth / 2
      const pieInnerRadius = (pieWidth / 2) - 20

      const svg = d3.select(`#${this.id} svg`)
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
//        .range(['rgb(50,50,50)', 'rgb(125,125,125)', 'rgb(200,200,200)'])

      const arc = d3.arc()
        .innerRadius(pieInnerRadius)
        .outerRadius(pieOuterRadius)
        .cornerRadius(10)
        .startAngle(0)

      const progress = this.earned / this.required

      const color = colorScale(progress * tau)

      // Add the background arc, from 0 to 100% (tau)
      const background = g.append('path')
        .datum({endAngle: tau})
        .classed('progress-background', true)
        .attr('fill', '#ffffff')
        .attr('d', arc)

      const foreground = g.append('path')
        .datum({endAngle: startAngle * tau})
        .attr('fill', '#ffffff')
        .attr('d', arc)


      // TODO Temporary
      // Every so often, start a transition to a new random angle.
//      d3.interval(function() {
//        foreground.transition()
//          .duration(750)
//          .attrTween('d', arcTween(Math.random() * tau))
//      }, 1500)


      foreground.transition()
        .duration(this.transitionDuration)
        .ease(d3.easeQuadOut)
        .attr('fill', color)
        .attrTween('d', arcTween(progress * tau))

      background.transition()
        .attr('fill', color)


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

<style lang="scss">

  .progress-background {
    opacity: .2;
  }
  
  .dbviz {
    position: relative;
    margin-bottom: 1rem;
  }

  .dbviz__count {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    text-align: center;
    color: #aaa;
  }
  
  .dbviz__count > .head {
    font-weight: 400;
    font-size: 5rem;
    line-height: 1;
  }
  
  .dbviz__count > .tail {
    position: relative;
    display: block;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 2;
    letter-spacing: 1px;
  }

  .dbviz__count > .tail:not(:last-child):after {
    content: "";
    position: absolute;
    right: 25%;
    left: 25%;
    bottom: 0;
    height: 1px;
    width: 50%;
    background-color: #d0d0d0;
  }
  
  .dbviz__container {
    max-width: 300px;
    display: inline-block;
  }
  
  .dbviz__container:before {
    color: #aaa;
    display: block;
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8px;
    font-size: 28px;
    text-align: center;
    line-height: 1.5;
    font-weight: 400;
    border-radius: 50%;
    color: white;
    background-color: #555;
    content: counter(donut-counter);
    counter-increment: donut-counter;
  }
  
  #cmeProgress {
    counter-reset: donut-counter;
  }
  
  .dbviz__title {
    margin-bottom: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    line-height: 1.4;
    color: #888;

    & > span {
      display: block;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0;
      text-transform: none;
      color: #555;
    }
  }
  
/*  .dbviz__title:after {
    content: " requirements";
    font-weight: 200;
    color: #888;
  } */
  
  .title-alt {
    margin-bottom: .625rem;
  }
  
  .dbviz__tail {
    text-align: center;
  }
  
  .dbviz__tail .togo {
    margin-bottom: .5rem;
  }
  
  .dbviz__tail .togo > span {
    display: block;
  }
  
  .dbviz__tail .togo > .head {
    /*margin-bottom: .5rem;*/
    font-size: 3rem;
    line-height: 1.1;
  }
  
  .dbviz__tail .togo > .tail {
    font-weight: 200;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 1px;
  }
  
  .creditsTogo .tail,
  .required {
    font-weight: 200;
    text-transform: uppercase;
    font-size: .85rem;
    letter-spacing: 1px;
    color: #888;
  }
  
  .dbviz__req {
    display: block;
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8px;
    font-size: 28px;
    line-height: 1.5;
    font-weight: 400;
    border-radius: 50%;
    color: white;
    background-color: #555;
  }

  #progress > .column {
    position: relative;
  }
  
  #progress > .column:not(:last-child):after {
    content: "";
    position: absolute;
    right: 0;
    top: 6%;
    bottom: 6%;
    width: 1px;
    background-color: #d0d0d0;
  }
  
  .creditsTogo .head {
    display: block;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1;
    color: #555;
  }

</style>
