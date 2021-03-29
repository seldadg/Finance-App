// const data = [
//     { name: 'Travel', value: 10 },
//     { name: 'Shopping', value: 40 },
//     { name: 'Accomodation', value: 50 },
//     { name: 'Bills & Fees', value: 70 },
//   ]
  
//   const colors = ['#e7505a', '#e87e04', '#4db3a2', '#3598dc']
  
//   const margin = { top: 20, right: 20, bottom: 20, left: 20 },
//     width = 200 - margin.right - margin.left,
//     height = 220,
//     radius = width / 2
  
//   const colorScale = d3.scaleOrdinal().range(colors)
  
//   const arc = d3.arc()
//     .outerRadius(radius - 10)
//     .innerRadius(radius - 40)
  
//   const textArc = d3.arc()
//     .outerRadius(radius - 10)
//     .innerRadius(radius - 10)
  
//   const pie = d3.pie()
//     .sort(null)
//     .value(d => d.value)
  
//   const svg = d3.select('.wrapper')
//     .append('svg')
//     .attr('transform', `translate(${margin.left}, 0)`)
//     .attr('width', width)
//     .attr('height', height)
//     .append('g')
//     .attr('transform', `translate(${width / 2}, ${height / 2 - 10})`)
  
//   const g = svg.selectAll('.arc')
//     .data(pie(data))
//     .enter().append('g')
//     .attr('class', 'arc')
  
//   g.append('path')
//     .attr('d', arc)
//     .style('fill', d => colorScale(d.data.name))
//     .style('stroke', 'white')
//     .transition()
//     .ease(d3.easeLinear)
//     .duration(1000)
//     .attrTween('d', chartTween)
  
//   g.append('text')
//     .transition()
//     .ease(d3.easeLinear)
//     .duration(1000)
//     .attr('transform', d => `translate(${textArc.centroid(d)})`)
//     .attr('dx', '-1em')
//     .attr('dy', '-0.5em')
//     .text(d => d.data.name)
//     .attr('font-size', '14px')
//     .attr('fill', '#000')
  
//   // g.append('text')
//   //   .html('Cross-Function')
//   //   .attr('text-anchor', 'middle')
//   //   .attr('class', 'center-text')
//   //   .attr('transform', d => 'translate(0, -20)')
  
//   // g.append('text')
//   //   .html('Co-Thinking')
//   //   .attr('text-anchor', 'middle')
//   //   .attr('class', 'center-text')
//   //   .attr('transform', d => 'translate(0, 50)')
  
//   svg.append('g')
//     .attr('class', 'legendLinear')
//     .attr('transform', 'translate(70, 330)')
  
//   const colorLegend = d3.legendColor()
//     .orient('horizontal')
//     .shapeWidth(60)
//     .scale(colorScale)
  
//   svg.select('.legendLinear')
//     .call(colorLegend)
  
//   // helper functions
//   function chartTween(b) {
//     b.innerRadius = 0
//     const i = d3.interpolate({ startAngle: 0, endAngle: 0 }, b)
//     return function (t) { return arc(i(t)) }
//   }
  


// var data_V1 = [{
//   "Type": "A",
//   "Amount": 250,
//   "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum metus vel odio convallis condimentum. Integer ullamcorper ipsum vel dui varius congue. Nulla facilisi. Morbi molestie tortor libero, ac placerat urna mollis ac. Vestibulum id ipsum mauris."
// }, {
//   "Type": "B",
//   "Amount": 1000,
//   "Description": "In hac habitasse platea dictumst. Curabitur lacus neque, congue ac quam a, sagittis accumsan mauris. Suspendisse et nisl eros. Fusce nulla mi, tincidunt non faucibus vitae, aliquam vel dolor. Maecenas imperdiet, elit eget condimentum fermentum, sem lorem fringilla felis, vitae cursus lorem elit in risus."
// }, {
//   "Type": "C",
//   "Amount": 600,
//   "Description": "Aenean faucibus, risus sed eleifend rutrum, leo diam porttitor mauris, a eleifend ipsum ipsum ac ex. Nam scelerisque feugiat augue ac porta. Morbi massa ante, interdum sed nulla nec, finibus cursus augue. Phasellus nunc neque, blandit a nunc ut, mattis elementum arcu."
// }, {
//   "Type": "D",
//   "Amount": 1750,
//   "Description": "Aenean tellus felis, finibus eget placerat nec, ultrices vel elit. Morbi viverra mi ac ornare euismod. Quisque ultrices id nibh aliquam bibendum. Morbi id tortor non magna dictum suscipit. Nunc dolor metus, aliquam vitae felis id, euismod vulputate metus."
// }];

// var data_V2 = [{
//   "Type": "E",
//   "Amount": 600,
//   "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum metus vel odio convallis condimentum. Integer ullamcorper ipsum vel dui varius congue. Nulla facilisi. Morbi molestie tortor libero, ac placerat urna mollis ac. Vestibulum id ipsum mauris."
// }, {
//   "Type": "F",
//   "Amount": 2000,
//   "Description": "In hac habitasse platea dictumst. Curabitur lacus neque, congue ac quam a, sagittis accumsan mauris. Suspendisse et nisl eros. Fusce nulla mi, tincidunt non faucibus vitae, aliquam vel dolor. Maecenas imperdiet, elit eget condimentum fermentum, sem lorem fringilla felis, vitae cursus lorem elit in risus."
// }, {
//   "Type": "G",
//   "Amount": 1500,
//   "Description": "Aenean faucibus, risus sed eleifend rutrum, leo diam porttitor mauris, a eleifend ipsum ipsum ac ex. Nam scelerisque feugiat augue ac porta. Morbi massa ante, interdum sed nulla nec, finibus cursus augue. Phasellus nunc neque, blandit a nunc ut, mattis elementum arcu."
// }, {
//   "Type": "H",
//   "Amount": 900,
//   "Description": "Aenean faucibus, risus sed eleifend rutrum, leo diam porttitor mauris, a eleifend ipsum ipsum ac ex. Nam scelerisque feugiat augue ac porta. Morbi massa ante, interdum sed nulla nec, finibus cursus augue. Phasellus nunc neque, blandit a nunc ut, mattis elementum arcu."
// }, {
//   "Type": "I",
//   "Amount": 1100,
//   "Description": "Aenean faucibus, risus sed eleifend rutrum, leo diam porttitor mauris, a eleifend ipsum ipsum ac ex. Nam scelerisque feugiat augue ac porta. Morbi massa ante, interdum sed nulla nec, finibus cursus augue. Phasellus nunc neque, blandit a nunc ut, mattis elementum arcu."
// }];

// data = [{
//   "key": "data_V1",
//   "values": data_V1
// }, {
//   "key": "data_V2",
//   "values": data_V2
// }]

// var width = parseInt(d3.select('#pieChart').style('width'), 10);
// var height = width;
// var radius = (Math.min(width, height) - 20) / 2;

// var type = function getObject(obj) {
//   types = [];
//   for (var i = 0; i < obj.length; i++) {
//     types.push(obj[i].Type);
//   }
//   return types
// };

// var pie = d3.layout.pie()
//   .value(function(d) {
//     return d.Amount;
//   })
//   .sort(null);

// var arc = d3.svg.arc()
//   .outerRadius(radius - 10)
//   .innerRadius(150);

// var arcOver = d3.svg.arc()
//   .outerRadius(radius + 10)
//   .innerRadius(150);

// var svg = d3.select("#pieChart").append("svg")
//   .attr("width", '100%')
//   .attr("height", '100%')
//   .attr('viewBox', '0 0 ' + Math.min(width, height) + ' ' + Math.min(width, height))
//   .attr('preserveAspectRatio', 'xMinYMin')
//   .append("g")
//   .attr("transform", "translate(" + radius + "," + height / 2 + ")");

// var path = svg.selectAll("path");

// var label = d3.select("#dataSelection")
//   .data(data)
//   .on("change", changeData)
//   .filter(function(d, i) {
//   console.log(!i)
//     return !i;
//   })
//   .each(changeData)

// changeText = function(text, textID) {
//   d3.select(textID)
//     .text(text)
// };

// change = function(d, i) {
//   var angle = 90 - ((d.startAngle * (180 / Math.PI)) + ((d.endAngle - d.startAngle) * (180 / Math.PI) / 2))
//   svg.transition()
//     .duration(1000)
//     .attr("transform", "translate(" + radius + "," + height / 2 + ") rotate(" + angle + ")")
//   d3.selectAll("path")
//     .transition()
//     .attr("d", arc)
//   d3.select(i)
//     .transition()
//     .duration(1000)
//     .attr("d", arcOver)
// };

// function changeData() {
//   var selectedData = data[this.selectedIndex]
//   var color = d3.scale.ordinal()
//   .domain(type(selectedData.values))
//   .range(["#8A76A6", "#54B5BF", "#8EA65B", "#F27B35", "#BF4539"]);
  
//   var data1 = pie(selectedData.values);
//   var dataText = [selectedData.key];

//   path = path.data(data1)

//   path.enter().append("path")
//     .each(function(d) {
//       this._current = {
//         startAngle: d.endAngle,
//         endAngle: d.endAngle
//       };
//     })
//     .attr("fill", function(d) {
//       return color(d.data.Type);
//     })
//     .on("click", function(d) {
//       var titleText = d.data.Type + ": " + d.data.Amount;
//       var blockText = d.data.Description;

//       changeText(titleText, "#segmentTitle");
//       changeText(blockText, "#segmentText");
//       change(d, this);
//     });
//   path.exit()
//     .datum(function(d, i) {
//       return {
//         startAngle: d.endAngle,
//         endAngle: d.endAngle
//       };
//     })
//     .transition()
//     .duration(750)
//     .attrTween("d", arcTween)
//     .remove();
//   path.transition()
//     .duration(750)
//     .attrTween("d", arcTween);

//   $('.text-container').hide();
//   $('#segmentTitle').replaceWith('<h1 id="segmentTitle">Select Segment</h1>');
//   $('#')
//   $('#segmentText').replaceWith('<p id="segmentText">Lots of text...</p>');
//   $('.text-container').fadeIn(400);

// };

// function key(d) {
//   return d.data.Type;
// }

// function arcTween(d) {
//   var i = d3.interpolate(this._current, d);
//   this._current = i(0);
//   return function(t) {
//     return arc(i(t));
//   };
// }

// document.querySelector('style').textContent += '@media(max-width:767px) {#pieChart { transform: rotate(90deg); transform-origin: 50% 50%; transition: 1s; max-width: 50%; } .text-container { width: 100%; min-height: 0; }} @media(min-width:768px) {#pieChart { transition: 1s;}}'