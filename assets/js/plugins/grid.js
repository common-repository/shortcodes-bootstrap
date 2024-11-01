
(function() {
    tinymce.PluginManager.add('dws_grid', function( editor, url ) {
        editor.addButton( 'dws_grid', {
            title : 'Grid',
            icon: 'mce_dws_grid',
            onclick: function() {
                //tb_show('Tab builder', SiteParameters.this_plugin_url + '/assets/js/plugins/tabs.html?TB_iframe=1');
            },
            type: 'menubutton',
            menu: [
                {
                    text: '12 Columns',
                    onclick: function() {
                        editor.insertContent( '[row class="row-fluid"]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[/row]' );
                    }
                },
                {
                    text: '4 Columns',
                    onclick: function() {
                        editor.insertContent( '[row class="row-fluid"]<br class="nc"/>[col class="span3"]Text[/col]<br class="nc"/>[col class="span3"]Text[/col]<br class="nc"/>[col class="span3"]Text[/col]<br class="nc"/>[col class="span3"]Text[/col]<br class="nc"/>[/row]' );
                    }
                },
                {
                    text: '3 Columns',
                    onclick: function() {
                        editor.insertContent( '[row class="row-fluid"]<br class="nc"/>[col class="span4"]Text[/col]<br class="nc"/>[col class="span4"]Text[/col]<br class="nc"/>[col class="span4"]Text[/col]<br class="nc"/>[/row]' );
                    }
                },
                {
                    text: '2 Columns',
                    onclick: function() {
                        editor.insertContent( '[row class="row-fluid"]<br class="nc"/>[col class="span6"]Text[/col]<br class="nc"/>[col class="span6"]Text[/col]<br class="nc"/>[/row]' );
                    }
                },
                {
                    text: '1 Column',
                    onclick: function() {
                        editor.insertContent( '[row class="row-fluid"]<br class="nc"/>[col class="span12"]Text[/col]<br class="nc"/>[/row]' );
                    }
                },
                {
                    text: 'Custom Grid',
                    onclick: function() {
                        tb_show('Custom Grid', SiteParameters.this_plugin_url + '/assets/js/plugins/grid.html?TB_iframe=1');
                    }
                },

            ]
        });
    });
})();
