"use strict"
let my_collection = [
    {
        interface: '1',
        graphics_processor_manufacturer: '1',
        graphic_processor: '1',
        graphics_processor_frequency: '1',
        video_memory_volume: '1',
      },
      {
        interface: '2',
        graphics_processor_manufacturer: '2',
        graphic_processor: '2',
        graphics_processor_frequency: '2',
        video_memory_volume: '2',
      },
      {
        interface: '3',
        graphics_processor_manufacturer: '3',
        graphic_processor: '3',
        graphics_processor_frequency: '3',
        video_memory_volume: '3',
      },
      {
        interface: '4',
        graphics_processor_manufacturer: '4',
        graphic_processor: '4',
        graphics_processor_frequency: '4',
        video_memory_volume: '4',
      },
      {
        interface: '5',
        graphics_processor_manufacturer: '5',
        graphic_processor: '5',
        graphics_processor_frequency: '5',
        video_memory_volume: '5',
      },
]

localStorage.setItem(0, JSON.stringify(my_collection))
var create_table = ((collection, res) => {
  var special_str = "<thead><tr><th>";
  Object.keys(collection[0]).forEach(e => {
    special_str += e + "</th><th>";
  });
  special_str = special_str.slice(0, -4);
  special_str += "</tr></thead><tbody>";
  collection.forEach(elem => {
    special_str += "<tr>";
    
    for(let e in elem) {
      special_str += "<td>" + elem[e] + "</td>"
    }
    special_str += "</tr>"
  });
  special_str += "</tbody>"
  $(res).append(special_str);
})(JSON.parse(localStorage.getItem(0)), "table")

$("table").tablesorter({});