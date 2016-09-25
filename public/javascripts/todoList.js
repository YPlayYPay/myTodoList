/**
 * Created by Administrator on 2016/9/24.
 */

$(function () {


    // var localS = window.localStorage;
    //
    // var up = localS.getItem('up');
    //
    // var down = localS.getItem('down');

    // $('#upul').html(localS.getItem('up'));
    //
    // $('#downul').html(localS.getItem('down'));

    // var ulUpStr = '';
    // var ulDownStr = '';


    $('#Input').on('keypress', function (event) {

        if (this.value == '') {
            return false;
        }
        if (event.keyCode == "13") {

            $.ajax({
                type: 'post',
                url: '/',
                cache: true,
                dataType:'json',
                data: {
                    sr:$('#Input').val(),
                },
                async: false,
                error: function (request) {
                    alert("Connection error");
                },
                success: function (data) {
                    var sr = data.sr;
                    var text = document.createTextNode(sr);
                    var li = document.createElement('li');
                    li.appendChild(text);
                    // var t= li.innerHTML;
                    $('#upul').append(li);
                    // ulUpStr = $('#upul').html();
                    // localS.setItem('up', ulUpStr);
                }
            });
            this.value = '';
            return false;
        }
    });

    $('#todolist').on('click', 'li', function (e) {

        $.ajax({
            type: 'post',
            url: '/',
            cache: true,
            dataType:'json',
            data: {
                secsr:e.target.innerHTML
            },
            async: false,
            error: function (request) {
                alert("Connection error");
            },
            success: function (data) {
            }
        });

        var txt = $(this).text();
        var txtNode = document.createTextNode(txt);
        var li = document.createElement('li');
        li.appendChild(txtNode);
        $('#downul').append(li);
        // ulDownStr = $('#downul').html();
        // localS.setItem('down', ulDownStr);
        removeElement(this);
        // ulUpStr = $('#upul').html();
        // localS.setItem('up', ulUpStr);
    });

    $('#donelist').on('click', 'li', function (e) {
        $.ajax({
            type: 'post',
            url: '/',
            cache: true,
            dataType:'json',
            data: {
                thr:e.target.innerHTML
            },
            async: false,
            error: function (request) {
                alert("Connection error");
            },
            success: function (data) {
            }
        });
        removeElement(this);
    });


    function removeElement(_element) {
        var _parentElement = _element.parentNode;
        if (_parentElement) {
            _parentElement.removeChild(_element);
        }
    }

    $.ajax({
        url: '/',
        data: {
            // up: up,
            // down: down
        },
        success: function (data) {
            // console.log(data.up + data.down);
        },
        dataType: 'json'
    });
});











