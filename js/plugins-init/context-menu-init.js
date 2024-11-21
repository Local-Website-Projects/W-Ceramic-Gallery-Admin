(function($) {
    "use strict"

    var menu = new BootstrapMenu('#context_demo', {
        actions: [{
            name: '<i class="icon-paper-plane"></i> <span class="text">External Url</span>',
            onClick: function() {
              toastr.info("'External Url' clicked!");
            }
          }, {
            name: '<i class="icon-present"></i> <span class="text">New Event</span>',
            onClick: function() {
              toastr.info("'New Event' clicked!");
            }
          }, {
            name: '<i class="icon-basket-loaded"></i> <span class="text">New Order</span>',
            onClick: function() {
              toastr.info("'New Order' clicked!");
            }
          }, {
            name: '<i class="icon-flag"></i> <span class="text">Pending Order</span>',
            onClick: function() {
              toastr.info("'Pending Order' clicked!");
            }
          }, {
            name: '<i class="icon-people"></i> <span class="text">Pending Users</span>',
            onClick: function() {
              toastr.info("'Pending Users' clicked!");
            }
        }]
      });



      var demo3Rows = {
        '1': { name: 'First row', description: 'Lorem ipsum dolor sit amet' },
        '2': { name: 'Second row', description: 'Nemo enim ipsam voluptatem quia voluptas' },
        '3': { name: 'Third row', description: 'Ut enim ad minima veniam' }
      };
      
    var menu = new BootstrapMenu('#context_demo-2', {
        /* a function to know which row was the context menu opened on,
         * given the selected DOM element. When this function is defined,
         * every user-defined action callback receives its return value as
         * an argument. */
        fetchElementData: function($rowElem) {
          var rowId = $rowElem.data('rowId');
          return demo3Rows[rowId];
        },
        actions: [{
          name: 'Edit name',
          onClick: function(row) {
            toastr.info("'Edit name' clicked on '" + row.name + "'");
          }
        }, {
          name: 'Edit description',
          onClick: function(row) {
            toastr.info("'Edit description' clicked on '" + row.name + "'");
          }
        }]
      });







})(jQuery);