(function() {
    tinymce.PluginManager.add('dws_collapse', function( editor, url ) {
        editor.addButton( 'dws_collapse', {
            title : 'Collapsible',
            icon: 'mce_dws_collapse',
            onclick: function() {
                editor.windowManager.open( {
                    title: 'Insert collapsible area',
                    body: [
                        {
                            type: 'textbox',
                            name: 'number',
                            label: 'Number of items'
                        }

                    ],
                    onsubmit: function( e ) {
                        var num = e.data.number;
                        var uID =  Math.floor((Math.random()*100)+1);
                        var shortcode = '[collapse id="collapse_'+uID+'"]<br class="nc"/>';
                        for(i=0;i<num;i++){
                            var id = Math.floor((Math.random()*100)+1);
                            var title = 'Collapsible Group Item '+(i+1);
                            shortcode+= '[citem title="'+title+'" id="citem_'+id+'" parent="collapse_'+uID+'"]<br class="nc"/>';
                            shortcode += 'Collapse content goes here....<br class="nc"/>';
                            shortcode += '[/citem]<br class="nc"/>';
                        }
                        shortcode+= '[/collapse]';
                        editor.insertContent( shortcode );
                    }
                });
            }
        });
    });
})();