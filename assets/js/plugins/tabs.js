(function() {
    tinymce.PluginManager.add('dws_tabs', function( editor, url ) {
        editor.addButton( 'dws_tabs', {
            title : 'Tabs',
            icon: 'mce_dws_tabs',
            onclick: function() {
                tb_show('Tab builder', SiteParameters.this_plugin_url + '/assets/js/plugins/tabs.html?TB_iframe=1');
            }
        });
    });
})();