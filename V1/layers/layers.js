ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-6145400.452581, -3099819.317437, -5300386.586685, -2559574.603464]);
var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_MANCHACOBERTURAPR_1 = new ol.format.GeoJSON();
var features_MANCHACOBERTURAPR_1 = format_MANCHACOBERTURAPR_1.readFeatures(json_MANCHACOBERTURAPR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANCHACOBERTURAPR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANCHACOBERTURAPR_1.addFeatures(features_MANCHACOBERTURAPR_1);
var lyr_MANCHACOBERTURAPR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANCHACOBERTURAPR_1, 
                style: style_MANCHACOBERTURAPR_1,
                popuplayertitle: "MANCHA COBERTURA PR",
                interactive: true,
                title: '<img src="styles/legend/MANCHACOBERTURAPR_1.png" /> MANCHA COBERTURA PR'
            });
var format_LocalidadessemConectividade_2 = new ol.format.GeoJSON();
var features_LocalidadessemConectividade_2 = format_LocalidadessemConectividade_2.readFeatures(json_LocalidadessemConectividade_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadessemConectividade_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadessemConectividade_2.addFeatures(features_LocalidadessemConectividade_2);
var lyr_LocalidadessemConectividade_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalidadessemConectividade_2, 
                style: style_LocalidadessemConectividade_2,
                popuplayertitle: "Localidades sem Conectividade",
                interactive: true,
                title: '<img src="styles/legend/LocalidadessemConectividade_2.png" /> Localidades sem Conectividade'
            });
var group_INFOSGERAIS = new ol.layer.Group({
                                layers: [lyr_LocalidadessemConectividade_2,],
                                fold: "open",
                                title: "INFOS GERAIS"});
var group_CIDADESHISTRICAS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "CIDADES HISTÓRICAS"});
var group_DADOSENTIDADES = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "DADOS ENTIDADES"});
var group_DADOSITAIPU = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "DADOS ITAIPU"});
var group_DADOSDER = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "DADOS DER"});
var group_Estradas = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Estradas"});
var group_DADOSRUMO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "DADOS RUMO"});
var group_TIM = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "TIM"});
var group_CLARO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "CLARO"});
var group_VIVO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VIVO"});
var group_LIGGA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LIGGA"});
var group_SERCOMTEL = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "SERCOMTEL"});
var group_DELIMITAOMUNICIPAL = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "DELIMITAÇÃO MUNICIPAL"});
var group_PARAN = new ol.layer.Group({
                                layers: [lyr_MANCHACOBERTURAPR_1,],
                                fold: "open",
                                title: "PARANÁ"});

lyr_EsriTopographic_0.setVisible(true);lyr_MANCHACOBERTURAPR_1.setVisible(true);lyr_LocalidadessemConectividade_2.setVisible(true);
var layersList = [lyr_EsriTopographic_0,group_PARAN,group_INFOSGERAIS];
lyr_MANCHACOBERTURAPR_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LocalidadessemConectividade_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_Falta': '_Falta', '__rea_km2': '__rea_km2', 'Moradores': 'Moradores', 'LONG': 'LONG', 'LAT': 'LAT', 'Operadora_com_compromisso': 'Operadora_com_compromisso', });
lyr_MANCHACOBERTURAPR_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LocalidadessemConectividade_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', '_Falta': 'TextEdit', '__rea_km2': 'TextEdit', 'Moradores': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'Operadora_com_compromisso': 'TextEdit', });
lyr_MANCHACOBERTURAPR_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LocalidadessemConectividade_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', '_Falta': 'no label', '__rea_km2': 'no label', 'Moradores': 'no label', 'LONG': 'no label', 'LAT': 'no label', 'Operadora_com_compromisso': 'no label', });
lyr_LocalidadessemConectividade_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});