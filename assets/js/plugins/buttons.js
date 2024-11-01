(function() {
    tinymce.PluginManager.add('dws_buttons', function( editor, url ) {
        editor.addButton( 'dws_buttons', {
            title : 'Buttons',
            icon: 'mce_dws_buttons',
            onclick: function() {
                editor.windowManager.open( {
                    title: 'Insert a button',
                    body: [
                        {
                            type: 'listbox',
                            name: 'size',
                            label: 'Size',
                            selectedText: 'Normal',
                            'values': [
                                {text: 'Mini', value: 'mini'},
                                {text: 'Small', value: 'small'},
                                {text: 'Normal', value: 'normal', selected:'selected'},
                                {text: 'Large', value: 'large'}
                            ],
                            onPostRender: function() {
                                this.value('normal');
                            }
                        },
                        {
                            type: 'listbox',
                            name: 'type',
                            label: 'Types',
                            'values': [
                                {text: 'Default', value: 'default'},
                                {text: 'Primary', value: 'primary'},
                                {text: 'Info', value: 'info'},
                                {text: 'Success', value: 'success'},
                                {text: 'Warning', value: 'warning'},
                                {text: 'Danger', value: 'danger'},
                                {text: 'Inverse', value: 'inverse'},
                                {text: 'Link', value: 'link'}
                            ]
                        },
                        {
                            type: 'textbox',
                            name: 'link',
                            label: 'Link',
                            onPostRender: function() {
                                this.value('#');
                            }
                        },
                        {
                            type: 'textbox',
                            name: 'text',
                            label: 'Button Text',
                            onPostRender: function() {
                                this.value('Submit');
                            }
                        }

                    ],
                    onsubmit: function( e ) {
                        //editor.insertContent( '<h3>' + e.data.link + '</h3>');
                        editor.insertContent( '[button size="'+e.data.size+'" type="'+e.data.type+'" value="'+e.data.text+'" href="'+e.data.link+'"]' );
                    }
                });
            }
        });
    });
})();