(function() {
    tinymce.PluginManager.add('dws_alerts', function( editor, url ) {
        editor.addButton( 'dws_alerts', {
            title : 'Notification',
            icon: 'mce_dws_alert',
            onclick: function() {
                //tb_show('Tab builder', SiteParameters.this_plugin_url + '/assets/js/plugins/tabs.html?TB_iframe=1');
            },
            type: 'menubutton',
            menu: [
                {
                    text: 'Warning notification',
                    onclick: function() {
                        editor.insertContent( '[notification type="error"]<strong>Warning!</strong>  Best check yo self, you\'re not looking too good. [/notification]' );
                    }
                },
                {
                    text: 'Error notification',
                    onclick: function() {
                        editor.insertContent( '[notification type="alert"]<strong>Oh snap!</strong> Change a few things up and try submitting again.[/notification]' );
                    }
                },
                {
                    text: 'Success notification',
                    onclick: function() {
                        editor.insertContent( '[notification type="success"]<strong>Well done!</strong>   You successfully read this important alert message.  [/notification]' );
                    }
                },
                {
                    text: 'Info notification',
                    onclick: function() {
                        editor.insertContent( '[notification type="info"]<strong>Heads up!</strong>   This alert needs your attention, but it\'s not super important.  [/notification]' );
                    }
                }

            ]
        });
    });
})();