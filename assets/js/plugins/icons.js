(function() {
    tinymce.PluginManager.add('dws_icons', function( editor, url ) {
        editor.addButton( 'dws_icons', {
            title : 'Icons',
            icon: 'mce_dws_icons',
            onclick: function() {
                tb_show('Icon Selector', SiteParameters.this_plugin_url + '/assets/js/plugins/icons.html?TB_iframe=1');
            }
        });
    });
})();

