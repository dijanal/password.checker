  $("#pass").keyup(function() {
              var i=$('#i').addClass("fa fa-spinner fa-spin")
                $(this).each(function() {
                    var first = $('#first')
                    var num = $('#num')
                    var symbol = $('#symbol')
                    var upper = $('#upper')
                    var lower = $('#lower')
                    var ok=$('#true')
                    if (this.value.length >= 8) { first.addClass('x') }
                     
                    if (/\d/.test(this.value)) { num.addClass('x') }
                    if (/[a-z]/.test(this.value)) { lower.addClass('x') }
                    if (/[A-Z]/.test(this.value)) { upper.addClass('x') }
                    if (/[^0-9a-zA-Z]/.test(this.value)) { symbol.addClass('x') }
                      if(this.value.length >= 8 && /\d/.test(this.value) && /[a-z]/.test(this.value) &&  /[A-Z]/.test(this.value) && /[^0-9a-zA-Z]/.test(this.value))
                        {i.removeClass("fa fa-spinner fa-spin").addClass('fa fa-thumbs-o-up')}
                });
            });

            function validate() {
                var userEmailElement = document.getElementById("email");
                var userEmail = userEmailElement.value;
                var message = "";
                
                if (userEmail == '') {
                    message = "You must enter your email address!";
                    alert(message);
                }
            }
          
