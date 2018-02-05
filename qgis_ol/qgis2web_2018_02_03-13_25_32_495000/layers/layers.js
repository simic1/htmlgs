var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
}),
new ol.layer.Tile({
    'title': 'Stamen Terrain background',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://stamen-tiles-{a-c}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'})]
    })
})
]
});
var format_NsunsuFarmBounday_0 = new ol.format.GeoJSON();
var features_NsunsuFarmBounday_0 = format_NsunsuFarmBounday_0.readFeatures(json_NsunsuFarmBounday_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NsunsuFarmBounday_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NsunsuFarmBounday_0.addFeatures(features_NsunsuFarmBounday_0);var lyr_NsunsuFarmBounday_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NsunsuFarmBounday_0, 
                style: style_NsunsuFarmBounday_0,
                title: '<img src="styles/legend/NsunsuFarmBounday_0.png" /> NsunsuFarmBounday'
            });var format_IrrigationSupply_1 = new ol.format.GeoJSON();
var features_IrrigationSupply_1 = format_IrrigationSupply_1.readFeatures(json_IrrigationSupply_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IrrigationSupply_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_IrrigationSupply_1.addFeatures(features_IrrigationSupply_1);var lyr_IrrigationSupply_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IrrigationSupply_1, 
                style: style_IrrigationSupply_1,
                title: '<img src="styles/legend/IrrigationSupply_1.png" /> IrrigationSupply'
            });var format_ExcludedAreas_2 = new ol.format.GeoJSON();
var features_ExcludedAreas_2 = format_ExcludedAreas_2.readFeatures(json_ExcludedAreas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExcludedAreas_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ExcludedAreas_2.addFeatures(features_ExcludedAreas_2);var lyr_ExcludedAreas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ExcludedAreas_2, 
                style: style_ExcludedAreas_2,
                title: '<img src="styles/legend/ExcludedAreas_2.png" /> ExcludedAreas'
            });var format_Abstraction_3 = new ol.format.GeoJSON();
var features_Abstraction_3 = format_Abstraction_3.readFeatures(json_Abstraction_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Abstraction_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Abstraction_3.addFeatures(features_Abstraction_3);var lyr_Abstraction_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Abstraction_3, 
                style: style_Abstraction_3,
                title: '<img src="styles/legend/Abstraction_3.png" /> Abstraction'
            });var format_ZMB_water_lines_dcw_4 = new ol.format.GeoJSON();
var features_ZMB_water_lines_dcw_4 = format_ZMB_water_lines_dcw_4.readFeatures(json_ZMB_water_lines_dcw_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZMB_water_lines_dcw_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ZMB_water_lines_dcw_4.addFeatures(features_ZMB_water_lines_dcw_4);var lyr_ZMB_water_lines_dcw_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZMB_water_lines_dcw_4, 
                style: style_ZMB_water_lines_dcw_4,
                title: '<img src="styles/legend/ZMB_water_lines_dcw_4.png" /> ZMB_water_lines_dcw'
            });

lyr_NsunsuFarmBounday_0.setVisible(true);lyr_IrrigationSupply_1.setVisible(true);lyr_ExcludedAreas_2.setVisible(true);lyr_Abstraction_3.setVisible(true);lyr_ZMB_water_lines_dcw_4.setVisible(true);
var layersList = [baseLayer,lyr_NsunsuFarmBounday_0,lyr_IrrigationSupply_1,lyr_ExcludedAreas_2,lyr_Abstraction_3,lyr_ZMB_water_lines_dcw_4];
lyr_NsunsuFarmBounday_0.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area': 'Area', });
lyr_IrrigationSupply_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_ExcludedAreas_2.set('fieldAliases', {'id': 'id', 'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAM': 'NAM', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'Area': 'Area', });
lyr_Abstraction_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'orig_ogc_fid': 'orig_ogc_fid', });
lyr_ZMB_water_lines_dcw_4.set('fieldAliases', {'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAM': 'NAM', 'ISO': 'ISO', 'NAME_0': 'NAME_0', });
lyr_NsunsuFarmBounday_0.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Area': 'TextEdit', });
lyr_IrrigationSupply_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ExcludedAreas_2.set('fieldImages', {'id': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'HYC_DESCRI': 'TextEdit', 'NAM': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'Area': 'TextEdit', });
lyr_Abstraction_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'orig_ogc_fid': 'TextEdit', });
lyr_ZMB_water_lines_dcw_4.set('fieldImages', {'F_CODE_DES': 'TextEdit', 'HYC_DESCRI': 'TextEdit', 'NAM': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_NsunsuFarmBounday_0.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Area': 'no label', });
lyr_IrrigationSupply_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_ExcludedAreas_2.set('fieldLabels', {'id': 'no label', 'F_CODE_DES': 'no label', 'HYC_DESCRI': 'no label', 'NAM': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'Area': 'no label', });
lyr_Abstraction_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'orig_ogc_fid': 'no label', });
lyr_ZMB_water_lines_dcw_4.set('fieldLabels', {'F_CODE_DES': 'no label', 'HYC_DESCRI': 'no label', 'NAM': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', });
lyr_ZMB_water_lines_dcw_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});