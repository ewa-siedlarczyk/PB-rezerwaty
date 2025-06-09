var wms_layers = [];

var format_udziadrzewostanwstuletnich_0 = new ol.format.GeoJSON();
var features_udziadrzewostanwstuletnich_0 = format_udziadrzewostanwstuletnich_0.readFeatures(json_udziadrzewostanwstuletnich_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_udziadrzewostanwstuletnich_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_udziadrzewostanwstuletnich_0.addFeatures(features_udziadrzewostanwstuletnich_0);
var lyr_udziadrzewostanwstuletnich_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_udziadrzewostanwstuletnich_0, 
                style: style_udziadrzewostanwstuletnich_0,
                popuplayertitle: 'udział drzewostanów stuletnich',
                interactive: true,
    title: 'udział drzewostanów stuletnich<br />\
    <img src="styles/legend/udziadrzewostanwstuletnich_0_0.png" /> 0 - 25<br />\
    <img src="styles/legend/udziadrzewostanwstuletnich_0_1.png" /> 25 - 50<br />\
    <img src="styles/legend/udziadrzewostanwstuletnich_0_2.png" /> 50 - 75<br />\
    <img src="styles/legend/udziadrzewostanwstuletnich_0_3.png" /> 75 - 100<br />' });
var format_strefyobiektuUNESCO_1 = new ol.format.GeoJSON();
var features_strefyobiektuUNESCO_1 = format_strefyobiektuUNESCO_1.readFeatures(json_strefyobiektuUNESCO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefyobiektuUNESCO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefyobiektuUNESCO_1.addFeatures(features_strefyobiektuUNESCO_1);
var lyr_strefyobiektuUNESCO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefyobiektuUNESCO_1, 
                style: style_strefyobiektuUNESCO_1,
                popuplayertitle: 'strefy obiektu UNESCO',
                interactive: false,
    title: 'strefy obiektu UNESCO<br />\
    <img src="styles/legend/strefyobiektuUNESCO_1_0.png" /> strefa 1<br />\
    <img src="styles/legend/strefyobiektuUNESCO_1_1.png" /> strefa 2<br />\
    <img src="styles/legend/strefyobiektuUNESCO_1_2.png" /> strefa 3<br />\
    <img src="styles/legend/strefyobiektuUNESCO_1_3.png" /> strefa 4<br />\
    <img src="styles/legend/strefyobiektuUNESCO_1_4.png" /> bufor<br />\
    <img src="styles/legend/strefyobiektuUNESCO_1_5.png" /> <br />' });
var format_brakochrony_2 = new ol.format.GeoJSON();
var features_brakochrony_2 = format_brakochrony_2.readFeatures(json_brakochrony_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_brakochrony_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_brakochrony_2.addFeatures(features_brakochrony_2);
var lyr_brakochrony_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_brakochrony_2, 
                style: style_brakochrony_2,
                popuplayertitle: 'brak ochrony',
                interactive: false,
                title: '<img src="styles/legend/brakochrony_2.png" /> brak ochrony'
            });
var format_ochronaczynnawybranezadania_3 = new ol.format.GeoJSON();
var features_ochronaczynnawybranezadania_3 = format_ochronaczynnawybranezadania_3.readFeatures(json_ochronaczynnawybranezadania_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ochronaczynnawybranezadania_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ochronaczynnawybranezadania_3.addFeatures(features_ochronaczynnawybranezadania_3);
var lyr_ochronaczynnawybranezadania_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ochronaczynnawybranezadania_3, 
                style: style_ochronaczynnawybranezadania_3,
                popuplayertitle: 'ochrona czynna (wybrane zadania)',
                interactive: false,
                title: '<img src="styles/legend/ochronaczynnawybranezadania_3.png" /> ochrona czynna (wybrane zadania)'
            });
var format_ochronaproceswnaturalnych_4 = new ol.format.GeoJSON();
var features_ochronaproceswnaturalnych_4 = format_ochronaproceswnaturalnych_4.readFeatures(json_ochronaproceswnaturalnych_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ochronaproceswnaturalnych_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ochronaproceswnaturalnych_4.addFeatures(features_ochronaproceswnaturalnych_4);
var lyr_ochronaproceswnaturalnych_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ochronaproceswnaturalnych_4, 
                style: style_ochronaproceswnaturalnych_4,
                popuplayertitle: 'ochrona procesów naturalnych',
                interactive: false,
                title: '<img src="styles/legend/ochronaproceswnaturalnych_4.png" /> ochrona procesów naturalnych'
            });
var format_dstanystuletnie_5 = new ol.format.GeoJSON();
var features_dstanystuletnie_5 = format_dstanystuletnie_5.readFeatures(json_dstanystuletnie_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dstanystuletnie_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dstanystuletnie_5.addFeatures(features_dstanystuletnie_5);
var lyr_dstanystuletnie_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dstanystuletnie_5, 
                style: style_dstanystuletnie_5,
                popuplayertitle: 'd-stany stuletnie',
                interactive: true,
                title: '<img src="styles/legend/dstanystuletnie_5.png" /> d-stany stuletnie'
            });
var format_rezerwaty_6 = new ol.format.GeoJSON();
var features_rezerwaty_6 = format_rezerwaty_6.readFeatures(json_rezerwaty_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rezerwaty_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rezerwaty_6.addFeatures(features_rezerwaty_6);
var lyr_rezerwaty_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rezerwaty_6, 
                style: style_rezerwaty_6,
                popuplayertitle: 'rezerwaty',
                interactive: false,
    title: 'rezerwaty<br />\
    <img src="styles/legend/rezerwaty_6_0.png" /> Lasy Naturalne Puszczy Białowieskiej<br />\
    <img src="styles/legend/rezerwaty_6_1.png" /> pozostałe<br />' });
var format_wydzielenia_7 = new ol.format.GeoJSON();
var features_wydzielenia_7 = format_wydzielenia_7.readFeatures(json_wydzielenia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wydzielenia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wydzielenia_7.addFeatures(features_wydzielenia_7);
var lyr_wydzielenia_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wydzielenia_7, 
                style: style_wydzielenia_7,
                popuplayertitle: 'wydzielenia',
                interactive: true,
                title: '<img src="styles/legend/wydzielenia_7.png" /> wydzielenia'
            });
var format_oddziay_8 = new ol.format.GeoJSON();
var features_oddziay_8 = format_oddziay_8.readFeatures(json_oddziay_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oddziay_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oddziay_8.addFeatures(features_oddziay_8);
var lyr_oddziay_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_oddziay_8, 
                style: style_oddziay_8,
                popuplayertitle: 'oddziały',
                interactive: true,
                title: '<img src="styles/legend/oddziay_8.png" /> oddziały'
            });
var format_proponowaneposzerzenieobrys_9 = new ol.format.GeoJSON();
var features_proponowaneposzerzenieobrys_9 = format_proponowaneposzerzenieobrys_9.readFeatures(json_proponowaneposzerzenieobrys_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_proponowaneposzerzenieobrys_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_proponowaneposzerzenieobrys_9.addFeatures(features_proponowaneposzerzenieobrys_9);
var lyr_proponowaneposzerzenieobrys_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_proponowaneposzerzenieobrys_9, 
                style: style_proponowaneposzerzenieobrys_9,
                popuplayertitle: 'proponowane poszerzenie (obrys)',
                interactive: false,
                title: '<img src="styles/legend/proponowaneposzerzenieobrys_9.png" /> proponowane poszerzenie (obrys)'
            });
var format_proponowaneposzerzenie_10 = new ol.format.GeoJSON();
var features_proponowaneposzerzenie_10 = format_proponowaneposzerzenie_10.readFeatures(json_proponowaneposzerzenie_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_proponowaneposzerzenie_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_proponowaneposzerzenie_10.addFeatures(features_proponowaneposzerzenie_10);
var lyr_proponowaneposzerzenie_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_proponowaneposzerzenie_10, 
                style: style_proponowaneposzerzenie_10,
                popuplayertitle: 'proponowane poszerzenie',
                interactive: false,
                title: '<img src="styles/legend/proponowaneposzerzenie_10.png" /> proponowane poszerzenie'
            });
var format_BPN_11 = new ol.format.GeoJSON();
var features_BPN_11 = format_BPN_11.readFeatures(json_BPN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BPN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BPN_11.addFeatures(features_BPN_11);
var lyr_BPN_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BPN_11, 
                style: style_BPN_11,
                popuplayertitle: 'BPN',
                interactive: false,
                title: '<img src="styles/legend/BPN_11.png" /> BPN'
            });
var format_nadlenictwa_12 = new ol.format.GeoJSON();
var features_nadlenictwa_12 = format_nadlenictwa_12.readFeatures(json_nadlenictwa_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nadlenictwa_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nadlenictwa_12.addFeatures(features_nadlenictwa_12);
var lyr_nadlenictwa_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nadlenictwa_12, 
                style: style_nadlenictwa_12,
                popuplayertitle: 'nadleśnictwa',
                interactive: false,
                title: '<img src="styles/legend/nadlenictwa_12.png" /> nadleśnictwa'
            });
var group_pomocnicze = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'pomocnicze'});
var group_PO_robocze = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'PO_robocze'});
var group_PO = new ol.layer.Group({
                                layers: [lyr_brakochrony_2,lyr_ochronaczynnawybranezadania_3,lyr_ochronaproceswnaturalnych_4,],
                                fold: 'open',
                                title: 'PO'});
var group_b_gis = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'b_gis'});
var group_wklad_sprawa = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'wklad_sprawa'});
var group_gpkg = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'gpkg'});

lyr_udziadrzewostanwstuletnich_0.setVisible(true);lyr_strefyobiektuUNESCO_1.setVisible(false);lyr_brakochrony_2.setVisible(false);lyr_ochronaczynnawybranezadania_3.setVisible(false);lyr_ochronaproceswnaturalnych_4.setVisible(false);lyr_dstanystuletnie_5.setVisible(false);lyr_rezerwaty_6.setVisible(true);lyr_wydzielenia_7.setVisible(true);lyr_oddziay_8.setVisible(true);lyr_proponowaneposzerzenieobrys_9.setVisible(true);lyr_proponowaneposzerzenie_10.setVisible(false);lyr_BPN_11.setVisible(false);lyr_nadlenictwa_12.setVisible(true);
var layersList = [lyr_udziadrzewostanwstuletnich_0,lyr_strefyobiektuUNESCO_1,group_PO,lyr_dstanystuletnie_5,lyr_rezerwaty_6,lyr_wydzielenia_7,lyr_oddziay_8,lyr_proponowaneposzerzenieobrys_9,lyr_proponowaneposzerzenie_10,lyr_BPN_11,lyr_nadlenictwa_12];
lyr_udziadrzewostanwstuletnich_0.set('fieldAliases', {'id': 'id', 'a_i_num': 'a_i_num', 'adr_for': 'adr_for', 'oddz': 'oddz', 'atotal': 'atotal', 'astoplus': 'astoplus', 'alnpb': 'alnpb', 'arezinne': 'arezinne', 'iter': 'iter', 'wyklucz': 'wyklucz', 'iter50': 'iter50', 'iter60': 'iter60', 'prc100plus': 'prc100plus', 'iter_v2': 'iter_v2', 'alnpbplus': 'alnpbplus', 'arezinneminus': 'arezinneminus', 'iter_v3': 'iter_v3', });
lyr_strefyobiektuUNESCO_1.set('fieldAliases', {'a_year': 'a_year', 'pow_ha': 'pow_ha', 'strefa_old': 'strefa_old', 'pow_ha_v2': 'pow_ha_v2', });
lyr_brakochrony_2.set('fieldAliases', {'gid': 'gid', 'nazwa': 'nazwa', 'kod': 'kod', 'kodinspire': 'kodinspire', 'pow': 'pow', });
lyr_ochronaczynnawybranezadania_3.set('fieldAliases', {'_uid_': '_uid_', 'id': 'id', 'objectid_1': 'objectid_1', 'ident_stan': 'ident_stan', 'kod': 'kod', 'data': 'data', 'typdzia': 'typdzia', 'kod_dziala': 'kod_dziala', 'nazdzia': 'nazdzia', 'opis_dzial': 'opis_dzial', 'celdzia': 'celdzia', 'chadzia': 'chadzia', 'pow': 'pow', 'uwagi': 'uwagi', 'kodn2k': 'kodn2k', 'ident': 'ident', 'nr': 'nr', 'gat': 'gat', 'lac': 'lac', 'pol': 'pol', 'akro': 'akro', 'map': 'map', 'lp': 'lp', 'lp_sum': 'lp_sum', 'nr_sum': 'nr_sum', 'etykieta': 'etykieta', 'klucz': 'klucz', });
lyr_ochronaproceswnaturalnych_4.set('fieldAliases', {'ochrona': 'ochrona', });
lyr_dstanystuletnie_5.set('fieldAliases', {'id': 'id', 'a_i_num': 'a_i_num', 'adr_for': 'adr_for', 'area_type': 'area_type', 'forest_fun': 'forest_fun', 'oddz': 'oddz', 'wydz': 'wydz', 'maxage': 'maxage', });
lyr_rezerwaty_6.set('fieldAliases', {'id': 'id', 'kodinspire': 'kodinspire', 'rez': 'rez', });
lyr_wydzielenia_7.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', 'a_i_num': 'a_i_num', 'adr_for': 'adr_for', 'area_type': 'area_type', 'forest_fun': 'forest_fun', 'oddz': 'oddz', 'wydz': 'wydz', 'maxage': 'maxage', 'kodinspire': 'kodinspire', 'rez': 'rez', 'iter': 'iter', 'iter_v2': 'iter_v2', });
lyr_oddziay_8.set('fieldAliases', {'id': 'id', 'a_i_num': 'a_i_num', 'adr_for': 'adr_for', 'oddz': 'oddz', 'atotal': 'atotal', 'astoplus': 'astoplus', 'alnpb': 'alnpb', 'arezinne': 'arezinne', 'iter': 'iter', 'wyklucz': 'wyklucz', 'iter50': 'iter50', 'iter60': 'iter60', 'prc100plus': 'prc100plus', 'iter_v2': 'iter_v2', 'alnpbplus': 'alnpbplus', 'arezinneminus': 'arezinneminus', 'iter_v3': 'iter_v3', });
lyr_proponowaneposzerzenieobrys_9.set('fieldAliases', {'id': 'id', 'a_i_num': 'a_i_num', 'adr_for': 'adr_for', 'oddz': 'oddz', 'atotal': 'atotal', 'astoplus': 'astoplus', 'alnpb': 'alnpb', 'arezinne': 'arezinne', 'iter': 'iter', 'wyklucz': 'wyklucz', 'iter50': 'iter50', 'iter60': 'iter60', 'prc100plus': 'prc100plus', 'iter_v2': 'iter_v2', 'alnpbplus': 'alnpbplus', 'arezinnemi': 'arezinnemi', 'iter_v3': 'iter_v3', 'id_0': 'id_0', 'area_type': 'area_type', 'forest_fun': 'forest_fun', 'wydz': 'wydz', 'maxage': 'maxage', 'kodinspire': 'kodinspire', 'rez': 'rez', 'layer': 'layer', 'path': 'path', });
lyr_proponowaneposzerzenie_10.set('fieldAliases', {'id': 'id', 'a_i_num': 'a_i_num', 'adr_for': 'adr_for', 'oddz': 'oddz', 'atotal': 'atotal', 'astoplus': 'astoplus', 'alnpb': 'alnpb', 'arezinne': 'arezinne', 'iter': 'iter', 'wyklucz': 'wyklucz', 'iter50': 'iter50', 'iter60': 'iter60', 'prc100plus': 'prc100plus', 'iter_v2': 'iter_v2', 'alnpbplus': 'alnpbplus', 'arezinnemi': 'arezinnemi', 'iter_v3': 'iter_v3', 'id_0': 'id_0', 'area_type': 'area_type', 'forest_fun': 'forest_fun', 'wydz': 'wydz', 'maxage': 'maxage', 'kodinspire': 'kodinspire', 'rez': 'rez', 'layer': 'layer', 'path': 'path', });
lyr_BPN_11.set('fieldAliases', {'gid': 'gid', 'nazwa': 'nazwa', 'kodinspire': 'kodinspire', });
lyr_nadlenictwa_12.set('fieldAliases', {'a_year': 'a_year', 'reg_cd': 'reg_cd', 'ins_cd': 'ins_cd', 'reg_name': 'reg_name', 'ins_name': 'ins_name', 'inspectora': 'inspectora', 'arodes_int': 'arodes_int', 'cp_inspect': 'cp_inspect', 'st_area_in': 'st_area_in', 'st_length_': 'st_length_', });
lyr_udziadrzewostanwstuletnich_0.set('fieldImages', {'id': 'TextEdit', 'a_i_num': 'TextEdit', 'adr_for': 'TextEdit', 'oddz': 'TextEdit', 'atotal': 'TextEdit', 'astoplus': 'TextEdit', 'alnpb': 'TextEdit', 'arezinne': 'TextEdit', 'iter': 'TextEdit', 'wyklucz': 'TextEdit', 'iter50': 'TextEdit', 'iter60': 'TextEdit', 'prc100plus': 'TextEdit', 'iter_v2': '', 'alnpbplus': '', 'arezinneminus': '', 'iter_v3': '', });
lyr_strefyobiektuUNESCO_1.set('fieldImages', {'a_year': 'TextEdit', 'pow_ha': '', 'strefa_old': 'Range', 'pow_ha_v2': '', });
lyr_brakochrony_2.set('fieldImages', {'gid': 'Range', 'nazwa': 'TextEdit', 'kod': 'TextEdit', 'kodinspire': 'TextEdit', 'pow': 'TextEdit', });
lyr_ochronaczynnawybranezadania_3.set('fieldImages', {'_uid_': 'TextEdit', 'id': 'TextEdit', 'objectid_1': 'TextEdit', 'ident_stan': 'TextEdit', 'kod': 'TextEdit', 'data': 'DateTime', 'typdzia': 'TextEdit', 'kod_dziala': 'TextEdit', 'nazdzia': 'TextEdit', 'opis_dzial': 'TextEdit', 'celdzia': 'TextEdit', 'chadzia': 'TextEdit', 'pow': 'TextEdit', 'uwagi': 'TextEdit', 'kodn2k': 'TextEdit', 'ident': 'TextEdit', 'nr': 'TextEdit', 'gat': 'TextEdit', 'lac': 'TextEdit', 'pol': 'TextEdit', 'akro': 'TextEdit', 'map': 'TextEdit', 'lp': 'TextEdit', 'lp_sum': 'TextEdit', 'nr_sum': 'TextEdit', 'etykieta': 'TextEdit', 'klucz': 'TextEdit', });
lyr_ochronaproceswnaturalnych_4.set('fieldImages', {'ochrona': 'TextEdit', });
lyr_dstanystuletnie_5.set('fieldImages', {'id': 'TextEdit', 'a_i_num': 'TextEdit', 'adr_for': 'TextEdit', 'area_type': 'TextEdit', 'forest_fun': 'TextEdit', 'oddz': 'TextEdit', 'wydz': 'TextEdit', 'maxage': 'TextEdit', });
lyr_rezerwaty_6.set('fieldImages', {'id': 'TextEdit', 'kodinspire': 'TextEdit', 'rez': 'TextEdit', });
lyr_wydzielenia_7.set('fieldImages', {'id_0': 'TextEdit', 'id': 'TextEdit', 'a_i_num': 'TextEdit', 'adr_for': 'TextEdit', 'area_type': 'TextEdit', 'forest_fun': 'TextEdit', 'oddz': 'TextEdit', 'wydz': 'TextEdit', 'maxage': 'TextEdit', 'kodinspire': 'TextEdit', 'rez': 'TextEdit', 'iter': 'TextEdit', 'iter_v2': '', });
lyr_oddziay_8.set('fieldImages', {'id': 'TextEdit', 'a_i_num': 'TextEdit', 'adr_for': 'TextEdit', 'oddz': 'TextEdit', 'atotal': 'TextEdit', 'astoplus': 'TextEdit', 'alnpb': 'TextEdit', 'arezinne': 'TextEdit', 'iter': 'TextEdit', 'wyklucz': 'TextEdit', 'iter50': 'TextEdit', 'iter60': 'TextEdit', 'prc100plus': 'TextEdit', 'iter_v2': 'TextEdit', 'alnpbplus': 'TextEdit', 'arezinneminus': 'TextEdit', 'iter_v3': 'TextEdit', });
lyr_proponowaneposzerzenieobrys_9.set('fieldImages', {'id': 'TextEdit', 'a_i_num': 'TextEdit', 'adr_for': 'TextEdit', 'oddz': 'TextEdit', 'atotal': 'TextEdit', 'astoplus': 'TextEdit', 'alnpb': 'TextEdit', 'arezinne': 'TextEdit', 'iter': 'TextEdit', 'wyklucz': 'TextEdit', 'iter50': 'TextEdit', 'iter60': 'TextEdit', 'prc100plus': 'TextEdit', 'iter_v2': 'TextEdit', 'alnpbplus': 'TextEdit', 'arezinnemi': 'TextEdit', 'iter_v3': 'TextEdit', 'id_0': 'Range', 'area_type': 'TextEdit', 'forest_fun': 'TextEdit', 'wydz': 'TextEdit', 'maxage': 'TextEdit', 'kodinspire': 'TextEdit', 'rez': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_proponowaneposzerzenie_10.set('fieldImages', {'id': 'TextEdit', 'a_i_num': 'TextEdit', 'adr_for': 'TextEdit', 'oddz': 'TextEdit', 'atotal': 'TextEdit', 'astoplus': 'TextEdit', 'alnpb': 'TextEdit', 'arezinne': 'TextEdit', 'iter': 'TextEdit', 'wyklucz': 'TextEdit', 'iter50': 'TextEdit', 'iter60': 'TextEdit', 'prc100plus': 'TextEdit', 'iter_v2': 'TextEdit', 'alnpbplus': 'TextEdit', 'arezinnemi': 'TextEdit', 'iter_v3': 'TextEdit', 'id_0': 'Range', 'area_type': 'TextEdit', 'forest_fun': 'TextEdit', 'wydz': 'TextEdit', 'maxage': 'TextEdit', 'kodinspire': 'TextEdit', 'rez': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BPN_11.set('fieldImages', {'gid': 'Range', 'nazwa': 'TextEdit', 'kodinspire': 'TextEdit', });
lyr_nadlenictwa_12.set('fieldImages', {'a_year': 'TextEdit', 'reg_cd': 'TextEdit', 'ins_cd': 'TextEdit', 'reg_name': 'TextEdit', 'ins_name': 'TextEdit', 'inspectora': 'TextEdit', 'arodes_int': 'TextEdit', 'cp_inspect': 'TextEdit', 'st_area_in': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_udziadrzewostanwstuletnich_0.set('fieldLabels', {'id': 'hidden field', 'a_i_num': 'hidden field', 'adr_for': 'hidden field', 'oddz': 'hidden field', 'atotal': 'hidden field', 'astoplus': 'hidden field', 'alnpb': 'hidden field', 'arezinne': 'hidden field', 'iter': 'hidden field', 'wyklucz': 'hidden field', 'iter50': 'hidden field', 'iter60': 'hidden field', 'prc100plus': 'inline label - visible with data', 'iter_v2': 'hidden field', 'alnpbplus': 'hidden field', 'arezinneminus': 'hidden field', 'iter_v3': 'hidden field', });
lyr_strefyobiektuUNESCO_1.set('fieldLabels', {'a_year': 'hidden field', 'pow_ha': 'hidden field', 'strefa_old': 'hidden field', 'pow_ha_v2': 'hidden field', });
lyr_brakochrony_2.set('fieldLabels', {'gid': 'hidden field', 'nazwa': 'hidden field', 'kod': 'hidden field', 'kodinspire': 'hidden field', 'pow': 'hidden field', });
lyr_ochronaczynnawybranezadania_3.set('fieldLabels', {'_uid_': 'hidden field', 'id': 'hidden field', 'objectid_1': 'hidden field', 'ident_stan': 'hidden field', 'kod': 'hidden field', 'data': 'hidden field', 'typdzia': 'hidden field', 'kod_dziala': 'hidden field', 'nazdzia': 'hidden field', 'opis_dzial': 'hidden field', 'celdzia': 'hidden field', 'chadzia': 'hidden field', 'pow': 'hidden field', 'uwagi': 'hidden field', 'kodn2k': 'hidden field', 'ident': 'hidden field', 'nr': 'hidden field', 'gat': 'hidden field', 'lac': 'hidden field', 'pol': 'hidden field', 'akro': 'hidden field', 'map': 'hidden field', 'lp': 'hidden field', 'lp_sum': 'hidden field', 'nr_sum': 'hidden field', 'etykieta': 'hidden field', 'klucz': 'hidden field', });
lyr_ochronaproceswnaturalnych_4.set('fieldLabels', {'ochrona': 'hidden field', });
lyr_dstanystuletnie_5.set('fieldLabels', {'id': 'hidden field', 'a_i_num': 'hidden field', 'adr_for': 'hidden field', 'area_type': 'hidden field', 'forest_fun': 'hidden field', 'oddz': 'inline label - visible with data', 'wydz': 'inline label - visible with data', 'maxage': 'inline label - visible with data', });
lyr_rezerwaty_6.set('fieldLabels', {'id': 'hidden field', 'kodinspire': 'hidden field', 'rez': 'hidden field', });
lyr_wydzielenia_7.set('fieldLabels', {'id_0': 'hidden field', 'id': 'hidden field', 'a_i_num': 'hidden field', 'adr_for': 'hidden field', 'area_type': 'hidden field', 'forest_fun': 'hidden field', 'oddz': 'inline label - visible with data', 'wydz': 'inline label - visible with data', 'maxage': 'hidden field', 'kodinspire': 'hidden field', 'rez': 'hidden field', 'iter': 'hidden field', 'iter_v2': 'hidden field', });
lyr_oddziay_8.set('fieldLabels', {'id': 'hidden field', 'a_i_num': 'hidden field', 'adr_for': 'hidden field', 'oddz': 'inline label - visible with data', 'atotal': 'hidden field', 'astoplus': 'hidden field', 'alnpb': 'hidden field', 'arezinne': 'hidden field', 'iter': 'hidden field', 'wyklucz': 'hidden field', 'iter50': 'hidden field', 'iter60': 'hidden field', 'prc100plus': 'hidden field', 'iter_v2': 'hidden field', 'alnpbplus': 'hidden field', 'arezinneminus': 'hidden field', 'iter_v3': 'hidden field', });
lyr_proponowaneposzerzenieobrys_9.set('fieldLabels', {'id': 'hidden field', 'a_i_num': 'hidden field', 'adr_for': 'hidden field', 'oddz': 'hidden field', 'atotal': 'hidden field', 'astoplus': 'hidden field', 'alnpb': 'hidden field', 'arezinne': 'hidden field', 'iter': 'hidden field', 'wyklucz': 'hidden field', 'iter50': 'hidden field', 'iter60': 'hidden field', 'prc100plus': 'hidden field', 'iter_v2': 'hidden field', 'alnpbplus': 'hidden field', 'arezinnemi': 'hidden field', 'iter_v3': 'hidden field', 'id_0': 'hidden field', 'area_type': 'hidden field', 'forest_fun': 'hidden field', 'wydz': 'hidden field', 'maxage': 'hidden field', 'kodinspire': 'hidden field', 'rez': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_proponowaneposzerzenie_10.set('fieldLabels', {'id': 'hidden field', 'a_i_num': 'hidden field', 'adr_for': 'hidden field', 'oddz': 'hidden field', 'atotal': 'hidden field', 'astoplus': 'hidden field', 'alnpb': 'hidden field', 'arezinne': 'hidden field', 'iter': 'hidden field', 'wyklucz': 'hidden field', 'iter50': 'hidden field', 'iter60': 'hidden field', 'prc100plus': 'hidden field', 'iter_v2': 'hidden field', 'alnpbplus': 'hidden field', 'arezinnemi': 'hidden field', 'iter_v3': 'hidden field', 'id_0': 'hidden field', 'area_type': 'hidden field', 'forest_fun': 'hidden field', 'wydz': 'hidden field', 'maxage': 'hidden field', 'kodinspire': 'hidden field', 'rez': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BPN_11.set('fieldLabels', {'gid': 'hidden field', 'nazwa': 'hidden field', 'kodinspire': 'hidden field', });
lyr_nadlenictwa_12.set('fieldLabels', {'a_year': 'hidden field', 'reg_cd': 'hidden field', 'ins_cd': 'hidden field', 'reg_name': 'hidden field', 'ins_name': 'hidden field', 'inspectora': 'hidden field', 'arodes_int': 'hidden field', 'cp_inspect': 'hidden field', 'st_area_in': 'hidden field', 'st_length_': 'hidden field', });
lyr_nadlenictwa_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});