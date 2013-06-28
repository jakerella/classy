
(function($) {

    window.CLS = {

        init: function(options) {
            options = options || {};

            this.setupLogin();

        },

        setupLogin: function() {
            $("[href='/login']").click(function(e) {
                e.preventDefault();

                $(".login_form").show().dialog();

            });

            $("[action='/login']").submit(function(e) {
                e.preventDefault();

                console.log("Logging in!!");

                return false;
            });
        }

    };

})(jQuery);
