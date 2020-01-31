var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.771000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CriticalityMap_1 = new ol.format.GeoJSON();
var features_CriticalityMap_1 = format_CriticalityMap_1.readFeatures(json_CriticalityMap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CriticalityMap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CriticalityMap_1.addFeatures(features_CriticalityMap_1);
var lyr_CriticalityMap_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CriticalityMap_1, 
                style: style_CriticalityMap_1,
                interactive: true,
    title: 'CriticalityMap<br />\
    <img src="styles/legend/CriticalityMap_1_0.png" /> 0 - 10<br />\
    <img src="styles/legend/CriticalityMap_1_1.png" /> 10 - 36<br />\
    <img src="styles/legend/CriticalityMap_1_2.png" /> 36 - 73<br />\
    <img src="styles/legend/CriticalityMap_1_3.png" /> 73 - 101<br />\
    <img src="styles/legend/CriticalityMap_1_4.png" /> 101 - 135<br />\
    <img src="styles/legend/CriticalityMap_1_5.png" /> 135 - 173<br />\
    <img src="styles/legend/CriticalityMap_1_6.png" /> 173 - 212<br />\
    <img src="styles/legend/CriticalityMap_1_7.png" /> 212 - 253<br />\
    <img src="styles/legend/CriticalityMap_1_8.png" /> 253 - 299<br />\
    <img src="styles/legend/CriticalityMap_1_9.png" /> 299 - 348<br />\
    <img src="styles/legend/CriticalityMap_1_10.png" /> 348 - 399<br />\
    <img src="styles/legend/CriticalityMap_1_11.png" /> 399 - 472<br />\
    <img src="styles/legend/CriticalityMap_1_12.png" /> 472 - 540<br />\
    <img src="styles/legend/CriticalityMap_1_13.png" /> 540 - 615<br />\
    <img src="styles/legend/CriticalityMap_1_14.png" /> 615 - 699<br />\
    <img src="styles/legend/CriticalityMap_1_15.png" /> 699 - 804<br />\
    <img src="styles/legend/CriticalityMap_1_16.png" /> 804 - 939<br />\
    <img src="styles/legend/CriticalityMap_1_17.png" /> 939 - 1148<br />\
    <img src="styles/legend/CriticalityMap_1_18.png" /> 1148 - 1601<br />\
    <img src="styles/legend/CriticalityMap_1_19.png" /> 1601 - 9242<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_CriticalityMap_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CriticalityMap_1];
lyr_CriticalityMap_1.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'WMAINID': 'WMAINID', 'DIAMETER': 'Diameter', 'MATERIAL': 'Meterial', 'INSTALLYEAR': 'Year Installed', 'PIPELENGTH': 'PIPELENGTH', 'Criticality_Score': 'Criticality_Score', 'Length': 'Length', 'Year': 'Year', 'Criticality': 'Criticality', });
lyr_CriticalityMap_1.set('fieldImages', {'fid': 'Hidden', 'cat': 'Hidden', 'WMAINID': 'Hidden', 'DIAMETER': 'TextEdit', 'MATERIAL': 'TextEdit', 'INSTALLYEAR': 'Hidden', 'PIPELENGTH': 'Hidden', 'Criticality_Score': 'Hidden', 'Length': 'Range', 'Year': 'TextEdit', 'Criticality': 'Range', });
lyr_CriticalityMap_1.set('fieldLabels', {'DIAMETER': 'inline label', 'MATERIAL': 'inline label', 'Length': 'inline label', 'Year': 'inline label', 'Criticality': 'inline label', });
lyr_CriticalityMap_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});