/**
 * Created by Administrator on 2016/9/24.
 */

$(function() {









          var  localS=window.localStorage;


           $('#upul').html(localS.getItem('up'));
           $('#downul').html(localS.getItem('down'));

           var ulUpStr='';
           var ulDownStr='';



    $('#Input').on('keypress', function (event) {
          if(this.value==''){

              return false;
          }

        if (event.keyCode == "13") {

            $.ajax({

                type:'post',
                url:'/',

                cache: true,

                data: $('#Input').serialize(),

                async: false,

                error: function (request) {
                    alert("Connection error");
                },
                success: function (data) {

                    var sr = data.sr;

                    var text = document.createTextNode(sr);

                    var li = document.createElement('li');

                    li.appendChild(text);

                    $('#upul').append(li);

                    ulUpStr = $('#upul').html();
                    localS.setItem('up',ulUpStr);

                }
            });
           this.value='';
            return false;
        }
    });



    $('#todolist').on('click','li',function () {

        var txt= $(this).text();
        var txtNode=document.createTextNode(txt);
        var li=document.createElement('li');
        li.appendChild(txtNode);
        $('#downul').append(li);

        ulDownStr=$('#downul').html();
        localS.setItem('down',ulDownStr);

        removeElement(this);
        ulUpStr = $('#upul').html();
        localS.setItem('up',ulUpStr);

    });

    $('#donelist').on('click','li',function () {

        removeElement(this);

        ulDownStr=$('#downul').html();

        localS.setItem('down',ulDownStr);

    })


    function removeElement(_element){
        var _parentElement = _element.parentNode;
        if(_parentElement){
            _parentElement.removeChild(_element);
        }
    }

});











