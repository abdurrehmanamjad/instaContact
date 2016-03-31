/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */

(function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||"toggle"==d){if(!b)a[_callback]("ifClicked");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,
    v=b==n,s=u?_determinate:e?y:"enabled",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest("form"),p='input[name="'+c.name+'"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,"force")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"default");g[_add](B||l(a,b)||"");g.attr("role")&&!u&&g.attr("aria-"+(v?n:k),"true");
    g[_remove](F||l(a,s)||"")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:"enabled",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||"force"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"pointer");g[_remove](r||l(a,b)||"");g.attr("role")&&!f&&g.attr("aria-"+(m?n:k),"false");g[_add](q||l(a,s)||"")}function E(a,b){if(a.data(m)){a.parent().html(a.attr("style",a.data(m).s||""));if(b)a[_callback](b);a.off(".i").unwrap();
    f(_label+'[for="'+a[0].id+'"]').add(a.closest(_label)).off(".i")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?"":"Class")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if"+t(f))}}var m="iCheck",C=m+"-helper",r="radio",k="checked",y="un"+k,n="disabled";_determinate="determinate";_indeterminate="in"+_determinate;_update="update";_type="type";_click="click";_touch="touchbegin.i touchend.i";
    _add="addClass";_remove="removeClass";_callback="trigger";_label="label";_cursor="cursor";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type="checkbox"], input[type="'+r+'"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=
        f(this);"destroy"==a?E(c,"ifDestroyed"):A(c,!0,a);f.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||"hover",s=e.focusClass||"focus",t=e.activeClass||"active",B=!!e.labelHover,w=e.labelHoverClass||"hover",p=(""+e.increaseArea).replace("%","")|0;if("checkbox"==l||l==r)d='input[type="'+l+'"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,
        b=c.id,g=-p+"%",d=100+2*p+"%",d={position:"absolute",top:g,left:g,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},g=_mobile?{position:"absolute",visibility:"hidden"}:p?d:{position:"absolute",opacity:0},l="checkbox"==c[_type]?e.checkboxClass||"icheckbox":e.radioClass||"i"+r,z=f(_label+'[for="'+b+'"]').add(a.closest(_label)),u=!!e.aria,y=m+"-"+Math.random().toString(36).substr(2,6),h='<div class="'+l+'" '+(u?'role="'+c[_type]+'" ':"");u&&z.each(function(){h+=
        'aria-labelledby="';this.id?h+=this.id:(this.id=y,h+=y);h+='"'});h=a.wrap(h+"/>")[_callback]("ifCreated").parent().append(e.insert);d=f('<ins class="'+C+'"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr("style")}).css(g);e.inheritClass&&h[_add](c.className||"");e.inheritID&&b&&h.attr("id",m+"-"+b);"static"==h.css("position")&&h.css("position","relative");A(a,!0,_update);if(z.length)z.on(_click+".i mouseover.i mouseout.i "+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is("a"))return;
        A(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if("keydown"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if("keyup"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h["blur"==d?_remove:_add](s)});d.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(b){var d=
        b[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+" "+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);
/*
 * Jeditable - jQuery in place edit plugin
 *
 * Copyright (c) 2006-2009 Mika Tuupola, Dylan Verheul
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/jeditable
 *
 * Based on editable by Dylan Verheul <dylan_at_dyve.net>:
 *    http://www.dyve.net/jquery/?editable
 *
 */

/**
 * Version 1.7.1
 *
 * ** means there is basic unit tests for this parameter.
 *
 * @name  Jeditable
 * @type  jQuery
 * @param String  target             (POST) URL or function to send edited content to **
 * @param Hash    options            additional options
 * @param String  options[method]    method to use to send edited content (POST or PUT) **
 * @param Function options[callback] Function to run after submitting edited content **
 * @param String  options[name]      POST parameter name of edited content
 * @param String  options[id]        POST parameter name of edited div id
 * @param Hash    options[submitdata] Extra parameters to send when submitting edited content.
 * @param String  options[type]      text, textarea or select (or any 3rd party input type) **
 * @param Integer options[rows]      number of rows if using textarea **
 * @param Integer options[cols]      number of columns if using textarea **
 * @param Mixed   options[height]    'auto', 'none' or height in pixels **
 * @param Mixed   options[width]     'auto', 'none' or width in pixels **
 * @param String  options[loadurl]   URL to fetch input content before editing **
 * @param String  options[loadtype]  Request type for load url. Should be GET or POST.
 * @param String  options[loadtext]  Text to display while loading external content.
 * @param Mixed   options[loaddata]  Extra parameters to pass when fetching content before editing.
 * @param Mixed   options[data]      Or content given as paramameter. String or function.**
 * @param String  options[indicator] indicator html to show when saving
 * @param String  options[tooltip]   optional tooltip text via title attribute **
 * @param String  options[event]     jQuery event such as 'click' of 'dblclick' **
 * @param String  options[submit]    submit button value, empty means no button **
 * @param String  options[cancel]    cancel button value, empty means no button **
 * @param String  options[cssclass]  CSS class to apply to input form. 'inherit' to copy from parent. **
 * @param String  options[style]     Style to apply to input form 'inherit' to copy from parent. **
 * @param String  options[select]    true or false, when true text is highlighted ??
 * @param String  options[placeholder] Placeholder text or html to insert when element is empty. **
 * @param String  options[onblur]    'cancel', 'submit', 'ignore' or function ??
 *
 * @param Function options[onsubmit] function(settings, original) { ... } called before submit
 * @param Function options[onreset]  function(settings, original) { ... } called before reset
 * @param Function options[onerror]  function(settings, original, xhr) { ... } called on error
 *
 * @param Hash    options[ajaxoptions]  jQuery Ajax options. See docs.jquery.com.
 *
 */


(function($) {

    $.fn.editable = function(target, options) {

        if ('disable' == target) {
            $(this).data('disabled.editable', true);
            return;
        }
        if ('enable' == target) {
            $(this).data('disabled.editable', false);
            return;
        }
        if ('destroy' == target) {
            $(this)
                .unbind($(this).data('event.editable'))
                .removeData('disabled.editable')
                .removeData('event.editable');
            return;
        }

        var settings = $.extend({}, $.fn.editable.defaults, {target:target}, options);

        /* setup some functions */
        var plugin   = $.editable.types[settings.type].plugin || function() { };
        var submit   = $.editable.types[settings.type].submit || function() { };
        var buttons  = $.editable.types[settings.type].buttons
            || $.editable.types['defaults'].buttons;
        var content  = $.editable.types[settings.type].content
            || $.editable.types['defaults'].content;
        var element  = $.editable.types[settings.type].element
            || $.editable.types['defaults'].element;
        var reset    = $.editable.types[settings.type].reset
            || $.editable.types['defaults'].reset;
        var callback = settings.callback || function() { };
        var onedit   = settings.onedit   || function() { };
        var onsubmit = settings.onsubmit || function() { };
        var onreset  = settings.onreset  || function() { };
        var onerror  = settings.onerror  || reset;

        /* show tooltip */
        if (settings.tooltip) {
            $(this).attr('title', settings.tooltip);
        }

        settings.autowidth  = 'auto' == settings.width;
        settings.autoheight = 'auto' == settings.height;

        return this.each(function() {

            /* save this to self because this changes when scope changes */
            var self = this;

            /* inlined block elements lose their width and height after first edit */
            /* save them for later use as workaround */
            var savedwidth  = $(self).width();
            var savedheight = $(self).height();

            /* save so it can be later used by $.editable('destroy') */
            $(this).data('event.editable', settings.event);

            /* if element is empty add something clickable (if requested) */
            if (!$.trim($(this).html())) {
                $(this).html(settings.placeholder);
            }

            $(this).bind(settings.event, function(e) {

                /* abort if disabled for this element */
                if (true === $(this).data('disabled.editable')) {
                    return;
                }

                /* prevent throwing an exeption if edit field is clicked again */
                if (self.editing) {
                    return;
                }

                /* abort if onedit hook returns false */
                if (false === onedit.apply(this, [settings, self])) {
                    return;
                }

                /* prevent default action and bubbling */
                e.preventDefault();
                e.stopPropagation();

                /* remove tooltip */
                if (settings.tooltip) {
                    $(self).removeAttr('title');
                }

                /* figure out how wide and tall we are, saved width and height */
                /* are workaround for http://dev.jquery.com/ticket/2190 */
                if (0 == $(self).width()) {
                    //$(self).css('visibility', 'hidden');
                    settings.width  = savedwidth;
                    settings.height = savedheight;
                } else {
                    if (settings.width != 'none') {
                        settings.width =
                            settings.autowidth ? $(self).width()  : settings.width;
                    }
                    if (settings.height != 'none') {
                        settings.height =
                            settings.autoheight ? $(self).height() : settings.height;
                    }
                }
                //$(this).css('visibility', '');

                /* remove placeholder text, replace is here because of IE */
                if ($(this).html().toLowerCase().replace(/(;|")/g, '') ==
                    settings.placeholder.toLowerCase().replace(/(;|")/g, '')) {
                    $(this).html('');
                }

                self.editing    = true;
                self.revert     = $(self).html();
                $(self).html('');

                /* create the form object */
                var form = $('<form />');

                /* apply css or style or both */
                if (settings.cssclass) {
                    if ('inherit' == settings.cssclass) {
                        form.attr('class', $(self).attr('class'));
                    } else {
                        form.attr('class', settings.cssclass);
                    }
                }

                if (settings.style) {
                    if ('inherit' == settings.style) {
                        form.attr('style', $(self).attr('style'));
                        /* IE needs the second line or display wont be inherited */
                        form.css('display', $(self).css('display'));
                    } else {
                        form.attr('style', settings.style);
                    }
                }

                /* add main input element to form and store it in input */
                var input = element.apply(form, [settings, self]);

                /* set input content via POST, GET, given data or existing value */
                var input_content;

                if (settings.loadurl) {
                    var t = setTimeout(function() {
                        input.disabled = true;
                        content.apply(form, [settings.loadtext, settings, self]);
                    }, 100);

                    var loaddata = {};
                    loaddata[settings.id] = self.id;
                    if ($.isFunction(settings.loaddata)) {
                        $.extend(loaddata, settings.loaddata.apply(self, [self.revert, settings]));
                    } else {
                        $.extend(loaddata, settings.loaddata);
                    }
                    $.ajax({
                        type : settings.loadtype,
                        url  : settings.loadurl,
                        data : loaddata,
                        async : false,
                        success: function(result) {
                            window.clearTimeout(t);
                            input_content = result;
                            input.disabled = false;
                        }
                    });
                } else if (settings.data) {
                    input_content = settings.data;
                    if ($.isFunction(settings.data)) {
                        input_content = settings.data.apply(self, [self.revert, settings]);
                    }
                } else {
                    input_content = self.revert;
                }
                content.apply(form, [input_content, settings, self]);

                input.attr('name', settings.name);

                /* add buttons to the form */
                buttons.apply(form, [settings, self]);

                /* add created form to self */
                $(self).append(form);

                /* attach 3rd party plugin if requested */
                plugin.apply(form, [settings, self]);

                /* focus to first visible form element */
                $(':input:visible:enabled:first', form).focus();

                /* highlight input contents when requested */
                if (settings.select) {
                    input.select();
                }

                /* discard changes if pressing esc */
                input.keydown(function(e) {
                    if (e.keyCode == 27) {
                        e.preventDefault();
                        //self.reset();
                        reset.apply(form, [settings, self]);
                    }
                });

                /* discard, submit or nothing with changes when clicking outside */
                /* do nothing is usable when navigating with tab */
                var t;
                if ('cancel' == settings.onblur) {
                    input.blur(function(e) {
                        /* prevent canceling if submit was clicked */
                        t = setTimeout(function() {
                            reset.apply(form, [settings, self]);
                        }, 500);
                    });
                } else if ('submit' == settings.onblur) {
                    input.blur(function(e) {
                        /* prevent double submit if submit was clicked */
                        t = setTimeout(function() {
                            form.submit();
                        }, 200);
                    });
                } else if ($.isFunction(settings.onblur)) {
                    input.blur(function(e) {
                        settings.onblur.apply(self, [input.val(), settings]);
                    });
                } else {
                    input.blur(function(e) {
                        /* TODO: maybe something here */
                    });
                }

                form.submit(function(e) {

                    if (t) {
                        clearTimeout(t);
                    }

                    /* do no submit */
                    e.preventDefault();

                    /* call before submit hook. */
                    /* if it returns false abort submitting */
                    if (false !== onsubmit.apply(form, [settings, self])) {
                        /* custom inputs call before submit hook. */
                        /* if it returns false abort submitting */
                        if (false !== submit.apply(form, [settings, self])) {

                            /* check if given target is function */
                            if ($.isFunction(settings.target)) {
                                var str = settings.target.apply(self, [input.val(), settings]);
                                $(self).html(str);
                                self.editing = false;
                                callback.apply(self, [self.innerHTML, settings]);
                                /* TODO: this is not dry */
                                if (!$.trim($(self).html())) {
                                    $(self).html(settings.placeholder);
                                }
                            } else {
                                /* add edited content and id of edited element to POST */
                                var submitdata = {};
                                submitdata[settings.name] = input.val();
                                submitdata[settings.id] = self.id;
                                /* add extra data to be POST:ed */
                                if ($.isFunction(settings.submitdata)) {
                                    $.extend(submitdata, settings.submitdata.apply(self, [self.revert, settings]));
                                } else {
                                    $.extend(submitdata, settings.submitdata);
                                }

                                /* quick and dirty PUT support */
                                if ('PUT' == settings.method) {
                                    submitdata['_method'] = 'put';
                                }

                                /* show the saving indicator */
                                $(self).html(settings.indicator);

                                /* defaults for ajaxoptions */
                                var ajaxoptions = {
                                    type    : 'POST',
                                    data    : submitdata,
                                    dataType: 'html',
                                    url     : settings.target,
                                    success : function(result, status) {
                                        if (ajaxoptions.dataType == 'html') {
                                            $(self).html(result);
                                        }
                                        self.editing = false;
                                        callback.apply(self, [result, settings]);
                                        if (!$.trim($(self).html())) {
                                            $(self).html(settings.placeholder);
                                        }
                                    },
                                    error   : function(xhr, status, error) {
                                        onerror.apply(form, [settings, self, xhr]);
                                    }
                                };

                                /* override with what is given in settings.ajaxoptions */
                                $.extend(ajaxoptions, settings.ajaxoptions);
                                $.ajax(ajaxoptions);

                            }
                        }
                    }

                    /* show tooltip again */
                    $(self).attr('title', settings.tooltip);

                    return false;
                });
            });

            /* privileged methods */
            this.reset = function(form) {
                /* prevent calling reset twice when blurring */
                if (this.editing) {
                    /* before reset hook, if it returns false abort reseting */
                    if (false !== onreset.apply(form, [settings, self])) {
                        $(self).html(self.revert);
                        self.editing   = false;
                        if (!$.trim($(self).html())) {
                            $(self).html(settings.placeholder);
                        }
                        /* show tooltip again */
                        if (settings.tooltip) {
                            $(self).attr('title', settings.tooltip);
                        }
                    }
                }
            };
        });

    };


    $.editable = {
        types: {
            defaults: {
                element : function(settings, original) {
                    var input = $('<input type="hidden"></input>');
                    $(this).append(input);
                    return(input);
                },
                content : function(string, settings, original) {
                    $(':input:first', this).val(string);
                },
                reset : function(settings, original) {
                    original.reset(this);
                },
                buttons : function(settings, original) {
                    var form = this;
                    if (settings.submit) {
                        /* if given html string use that */
                        if (settings.submit.match(/>$/)) {
                            var submit = $(settings.submit).click(function() {
                                if (submit.attr("type") != "submit") {
                                    form.submit();
                                }
                            });
                            /* otherwise use button with given string as text */
                        } else {
                            var submit = $('<button type="submit" />');
                            submit.html(settings.submit);
                        }
                        $(this).append(submit);
                    }
                    if (settings.cancel) {
                        /* if given html string use that */
                        if (settings.cancel.match(/>$/)) {
                            var cancel = $(settings.cancel);
                            /* otherwise use button with given string as text */
                        } else {
                            var cancel = $('<button type="cancel" />');
                            cancel.html(settings.cancel);
                        }
                        $(this).append(cancel);

                        $(cancel).click(function(event) {
                            //original.reset();
                            if ($.isFunction($.editable.types[settings.type].reset)) {
                                var reset = $.editable.types[settings.type].reset;
                            } else {
                                var reset = $.editable.types['defaults'].reset;
                            }
                            reset.apply(form, [settings, original]);
                            return false;
                        });
                    }
                }
            },
            text: {
                element : function(settings, original) {
                    var input = $('<input />');
                    if (settings.width  != 'none') { input.width(settings.width);  }
                    if (settings.height != 'none') { input.height(settings.height); }
                    /* https://bugzilla.mozilla.org/show_bug.cgi?id=236791 */
                    //input[0].setAttribute('autocomplete','off');
                    input.attr('autocomplete','off');
                    $(this).append(input);
                    return(input);
                }
            },
            textarea: {
                element : function(settings, original) {
                    var textarea = $('<textarea />');
                    if (settings.rows) {
                        textarea.attr('rows', settings.rows);
                    } else if (settings.height != "none") {
                        textarea.height(settings.height);
                    }
                    if (settings.cols) {
                        textarea.attr('cols', settings.cols);
                    } else if (settings.width != "none") {
                        textarea.width(settings.width);
                    }
                    $(this).append(textarea);
                    return(textarea);
                }
            },
            select: {
                element : function(settings, original) {
                    var select = $('<select />');
                    $(this).append(select);
                    return(select);
                },
                content : function(data, settings, original) {
                    /* If it is string assume it is json. */
                    if (String == data.constructor) {
                        eval ('var json = ' + data);
                    } else {
                        /* Otherwise assume it is a hash already. */
                        var json = data;
                    }
                    for (var key in json) {
                        if (!json.hasOwnProperty(key)) {
                            continue;
                        }
                        if ('selected' == key) {
                            continue;
                        }
                        var option = $('<option />').val(key).append(json[key]);
                        $('select', this).append(option);
                    }
                    /* Loop option again to set selected. IE needed this... */
                    $('select', this).children().each(function() {
                        if ($(this).val() == json['selected'] ||
                            $(this).text() == $.trim(original.revert)) {
                            $(this).attr('selected', 'selected');
                        }
                    });
                }
            }
        },

        /* Add new input type */
        addInputType: function(name, input) {
            $.editable.types[name] = input;
        }
    };

    // publicly accessible defaults
    $.fn.editable.defaults = {
        name       : 'value',
        id         : 'id',
        type       : 'text',
        width      : 'auto',
        height     : 'auto',
        event      : 'click.editable',
        onblur     : 'cancel',
        loadtype   : 'GET',
        loadtext   : 'Loading...',
        placeholder: 'Click to edit',
        loaddata   : {},
        submitdata : {},
        ajaxoptions: {}
    };

})(jQuery);
/*! DataTables 1.10.4
 * ©2008-2014 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.10.4
 * @file        jquery.dataTables.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2008-2014 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidate,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnScrollingWidthAdjust,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnScrollBarWidth,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/


(/** @lends <global> */function( window, document, undefined ) {

(function( factory ) {
	"use strict";

	if ( typeof define === 'function' && define.amd ) {
		// Define as an AMD module if possible
		define( 'datatables', ['jquery'], factory );
	}
    else if ( typeof exports === 'object' ) {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
	else if ( jQuery && !jQuery.fn.dataTable ) {
		// Define using browser globals otherwise
		// Prevent multiple instantiations if the script is loaded twice
		factory( jQuery );
	}
}
(/** @lends <global> */function( $ ) {
	"use strict";

	/**
	 * DataTables is a plug-in for the jQuery Javascript library. It is a highly
	 * flexible tool, based upon the foundations of progressive enhancement,
	 * which will add advanced interaction controls to any HTML table. For a
	 * full list of features please refer to
	 * [DataTables.net](href="http://datatables.net).
	 *
	 * Note that the `DataTable` object is not a global variable but is aliased
	 * to `jQuery.fn.DataTable` and `jQuery.fn.dataTable` through which it may
	 * be  accessed.
	 *
	 *  @class
	 *  @param {object} [init={}] Configuration object for DataTables. Options
	 *    are defined by {@link DataTable.defaults}
	 *  @requires jQuery 1.7+
	 *
	 *  @example
	 *    // Basic initialisation
	 *    $(document).ready( function {
	 *      $('#example').dataTable();
	 *    } );
	 *
	 *  @example
	 *    // Initialisation with configuration options - in this case, disable
	 *    // pagination and sorting.
	 *    $(document).ready( function {
	 *      $('#example').dataTable( {
	 *        "paginate": false,
	 *        "sort": false
	 *      } );
	 *    } );
	 */
	var DataTable;

	
	/*
	 * It is useful to have variables which are scoped locally so only the
	 * DataTables functions can access them and they don't leak into global space.
	 * At the same time these functions are often useful over multiple files in the
	 * core and API, so we list, or at least document, all variables which are used
	 * by DataTables as private variables here. This also ensures that there is no
	 * clashing of variable names and that they can easily referenced for reuse.
	 */
	
	
	// Defined else where
	//  _selector_run
	//  _selector_opts
	//  _selector_first
	//  _selector_row_indexes
	
	var _ext; // DataTable.ext
	var _Api; // DataTable.Api
	var _api_register; // DataTable.Api.register
	var _api_registerPlural; // DataTable.Api.registerPlural
	
	var _re_dic = {};
	var _re_new_lines = /[\r\n]/g;
	var _re_html = /<.*?>/g;
	var _re_date_start = /^[\w\+\-]/;
	var _re_date_end = /[\w\+\-]$/;
	
	// Escape regular expression special characters
	var _re_escape_regex = new RegExp( '(\\' + [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ].join('|\\') + ')', 'g' );
	
	// U+2009 is thin space and U+202F is narrow no-break space, both used in many
	// standards as thousands separators
	var _re_formatted_numeric = /[',$£€¥%\u2009\u202F]/g;
	
	
	var _empty = function ( d ) {
		return !d || d === true || d === '-' ? true : false;
	};
	
	
	var _intVal = function ( s ) {
		var integer = parseInt( s, 10 );
		return !isNaN(integer) && isFinite(s) ? integer : null;
	};
	
	// Convert from a formatted number with characters other than `.` as the
	// decimal place, to a Javascript number
	var _numToDecimal = function ( num, decimalPoint ) {
		// Cache created regular expressions for speed as this function is called often
		if ( ! _re_dic[ decimalPoint ] ) {
			_re_dic[ decimalPoint ] = new RegExp( _fnEscapeRegex( decimalPoint ), 'g' );
		}
		return typeof num === 'string' && decimalPoint !== '.' ?
			num.replace( /\./g, '' ).replace( _re_dic[ decimalPoint ], '.' ) :
			num;
	};
	
	
	var _isNumber = function ( d, decimalPoint, formatted ) {
		var strType = typeof d === 'string';
	
		if ( decimalPoint && strType ) {
			d = _numToDecimal( d, decimalPoint );
		}
	
		if ( formatted && strType ) {
			d = d.replace( _re_formatted_numeric, '' );
		}
	
		return _empty( d ) || (!isNaN( parseFloat(d) ) && isFinite( d ));
	};
	
	
	// A string without HTML in it can be considered to be HTML still
	var _isHtml = function ( d ) {
		return _empty( d ) || typeof d === 'string';
	};
	
	
	var _htmlNumeric = function ( d, decimalPoint, formatted ) {
		if ( _empty( d ) ) {
			return true;
		}
	
		var html = _isHtml( d );
		return ! html ?
			null :
			_isNumber( _stripHtml( d ), decimalPoint, formatted ) ?
				true :
				null;
	};
	
	
	var _pluck = function ( a, prop, prop2 ) {
		var out = [];
		var i=0, ien=a.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[i] && a[i][ prop ] ) {
					out.push( a[i][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				if ( a[i] ) {
					out.push( a[i][ prop ] );
				}
			}
		}
	
		return out;
	};
	
	
	// Basically the same as _pluck, but rather than looping over `a` we use `order`
	// as the indexes to pick from `a`
	var _pluck_order = function ( a, order, prop, prop2 )
	{
		var out = [];
		var i=0, ien=order.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[ order[i] ][ prop ] ) {
					out.push( a[ order[i] ][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				out.push( a[ order[i] ][ prop ] );
			}
		}
	
		return out;
	};
	
	
	var _range = function ( len, start )
	{
		var out = [];
		var end;
	
		if ( start === undefined ) {
			start = 0;
			end = len;
		}
		else {
			end = start;
			start = len;
		}
	
		for ( var i=start ; i<end ; i++ ) {
			out.push( i );
		}
	
		return out;
	};
	
	
	var _removeEmpty = function ( a )
	{
		var out = [];
	
		for ( var i=0, ien=a.length ; i<ien ; i++ ) {
			if ( a[i] ) { // careful - will remove all falsy values!
				out.push( a[i] );
			}
		}
	
		return out;
	};
	
	
	var _stripHtml = function ( d ) {
		return d.replace( _re_html, '' );
	};
	
	
	/**
	 * Find the unique elements in a source array.
	 *
	 * @param  {array} src Source array
	 * @return {array} Array of unique items
	 * @ignore
	 */
	var _unique = function ( src )
	{
		// A faster unique method is to use object keys to identify used values,
		// but this doesn't work with arrays or objects, which we must also
		// consider. See jsperf.com/compare-array-unique-versions/4 for more
		// information.
		var
			out = [],
			val,
			i, ien=src.length,
			j, k=0;
	
		again: for ( i=0 ; i<ien ; i++ ) {
			val = src[i];
	
			for ( j=0 ; j<k ; j++ ) {
				if ( out[j] === val ) {
					continue again;
				}
			}
	
			out.push( val );
			k++;
		}
	
		return out;
	};
	
	
	
	/**
	 * Create a mapping object that allows camel case parameters to be looked up
	 * for their Hungarian counterparts. The mapping is stored in a private
	 * parameter called `_hungarianMap` which can be accessed on the source object.
	 *  @param {object} o
	 *  @memberof DataTable#oApi
	 */
	function _fnHungarianMap ( o )
	{
		var
			hungarian = 'a aa ai ao as b fn i m o s ',
			match,
			newKey,
			map = {};
	
		$.each( o, function (key, val) {
			match = key.match(/^([^A-Z]+?)([A-Z])/);
	
			if ( match && hungarian.indexOf(match[1]+' ') !== -1 )
			{
				newKey = key.replace( match[0], match[2].toLowerCase() );
				map[ newKey ] = key;
	
				if ( match[1] === 'o' )
				{
					_fnHungarianMap( o[key] );
				}
			}
		} );
	
		o._hungarianMap = map;
	}
	
	
	/**
	 * Convert from camel case parameters to Hungarian, based on a Hungarian map
	 * created by _fnHungarianMap.
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 *  @memberof DataTable#oApi
	 */
	function _fnCamelToHungarian ( src, user, force )
	{
		if ( ! src._hungarianMap ) {
			_fnHungarianMap( src );
		}
	
		var hungarianKey;
	
		$.each( user, function (key, val) {
			hungarianKey = src._hungarianMap[ key ];
	
			if ( hungarianKey !== undefined && (force || user[hungarianKey] === undefined) )
			{
				// For objects, we need to buzz down into the object to copy parameters
				if ( hungarianKey.charAt(0) === 'o' )
				{
					// Copy the camelCase options over to the hungarian
					if ( ! user[ hungarianKey ] ) {
						user[ hungarianKey ] = {};
					}
					$.extend( true, user[hungarianKey], user[key] );
	
					_fnCamelToHungarian( src[hungarianKey], user[hungarianKey], force );
				}
				else {
					user[hungarianKey] = user[ key ];
				}
			}
		} );
	}
	
	
	/**
	 * Language compatibility - when certain options are given, and others aren't, we
	 * need to duplicate the values over, in order to provide backwards compatibility
	 * with older language files.
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnLanguageCompat( lang )
	{
		var defaults = DataTable.defaults.oLanguage;
		var zeroRecords = lang.sZeroRecords;
	
		/* Backwards compatibility - if there is no sEmptyTable given, then use the same as
		 * sZeroRecords - assuming that is given.
		 */
		if ( ! lang.sEmptyTable && zeroRecords &&
			defaults.sEmptyTable === "No data available in table" )
		{
			_fnMap( lang, lang, 'sZeroRecords', 'sEmptyTable' );
		}
	
		/* Likewise with loading records */
		if ( ! lang.sLoadingRecords && zeroRecords &&
			defaults.sLoadingRecords === "Loading..." )
		{
			_fnMap( lang, lang, 'sZeroRecords', 'sLoadingRecords' );
		}
	
		// Old parameter name of the thousands separator mapped onto the new
		if ( lang.sInfoThousands ) {
			lang.sThousands = lang.sInfoThousands;
		}
	
		var decimal = lang.sDecimal;
		if ( decimal ) {
			_addNumericSort( decimal );
		}
	}
	
	
	/**
	 * Map one parameter onto another
	 *  @param {object} o Object to map
	 *  @param {*} knew The new parameter name
	 *  @param {*} old The old parameter name
	 */
	var _fnCompatMap = function ( o, knew, old ) {
		if ( o[ knew ] !== undefined ) {
			o[ old ] = o[ knew ];
		}
	};
	
	
	/**
	 * Provide backwards compatibility for the main DT options. Note that the new
	 * options are mapped onto the old parameters, so this is an external interface
	 * change only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatOpts ( init )
	{
		_fnCompatMap( init, 'ordering',      'bSort' );
		_fnCompatMap( init, 'orderMulti',    'bSortMulti' );
		_fnCompatMap( init, 'orderClasses',  'bSortClasses' );
		_fnCompatMap( init, 'orderCellsTop', 'bSortCellsTop' );
		_fnCompatMap( init, 'order',         'aaSorting' );
		_fnCompatMap( init, 'orderFixed',    'aaSortingFixed' );
		_fnCompatMap( init, 'paging',        'bPaginate' );
		_fnCompatMap( init, 'pagingType',    'sPaginationType' );
		_fnCompatMap( init, 'pageLength',    'iDisplayLength' );
		_fnCompatMap( init, 'searching',     'bFilter' );
	
		// Column search objects are in an array, so it needs to be converted
		// element by element
		var searchCols = init.aoSearchCols;
	
		if ( searchCols ) {
			for ( var i=0, ien=searchCols.length ; i<ien ; i++ ) {
				if ( searchCols[i] ) {
					_fnCamelToHungarian( DataTable.models.oSearch, searchCols[i] );
				}
			}
		}
	}
	
	
	/**
	 * Provide backwards compatibility for column options. Note that the new options
	 * are mapped onto the old parameters, so this is an external interface change
	 * only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatCols ( init )
	{
		_fnCompatMap( init, 'orderable',     'bSortable' );
		_fnCompatMap( init, 'orderData',     'aDataSort' );
		_fnCompatMap( init, 'orderSequence', 'asSorting' );
		_fnCompatMap( init, 'orderDataType', 'sortDataType' );
	}
	
	
	/**
	 * Browser feature detection for capabilities, quirks
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBrowserDetect( settings )
	{
		var browser = settings.oBrowser;
	
		// Scrolling feature / quirks detection
		var n = $('<div/>')
			.css( {
				position: 'absolute',
				top: 0,
				left: 0,
				height: 1,
				width: 1,
				overflow: 'hidden'
			} )
			.append(
				$('<div/>')
					.css( {
						position: 'absolute',
						top: 1,
						left: 1,
						width: 100,
						overflow: 'scroll'
					} )
					.append(
						$('<div class="test"/>')
							.css( {
								width: '100%',
								height: 10
							} )
					)
			)
			.appendTo( 'body' );
	
		var test = n.find('.test');
	
		// IE6/7 will oversize a width 100% element inside a scrolling element, to
		// include the width of the scrollbar, while other browsers ensure the inner
		// element is contained without forcing scrolling
		browser.bScrollOversize = test[0].offsetWidth === 100;
	
		// In rtl text layout, some browsers (most, but not all) will place the
		// scrollbar on the left, rather than the right.
		browser.bScrollbarLeft = test.offset().left !== 1;
	
		n.remove();
	}
	
	
	/**
	 * Array.prototype reduce[Right] method, used for browsers which don't support
	 * JS 1.6. Done this way to reduce code size, since we iterate either way
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnReduce ( that, fn, init, start, end, inc )
	{
		var
			i = start,
			value,
			isSet = false;
	
		if ( init !== undefined ) {
			value = init;
			isSet = true;
		}
	
		while ( i !== end ) {
			if ( ! that.hasOwnProperty(i) ) {
				continue;
			}
	
			value = isSet ?
				fn( value, that[i], i, that ) :
				that[i];
	
			isSet = true;
			i += inc;
		}
	
		return value;
	}
	
	/**
	 * Add a column to the list used for the table with default values
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nTh The th element for this column
	 *  @memberof DataTable#oApi
	 */
	function _fnAddColumn( oSettings, nTh )
	{
		// Add column to aoColumns array
		var oDefaults = DataTable.defaults.column;
		var iCol = oSettings.aoColumns.length;
		var oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {
			"nTh": nTh ? nTh : document.createElement('th'),
			"sTitle":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',
			"aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
			"mData": oDefaults.mData ? oDefaults.mData : iCol,
			idx: iCol
		} );
		oSettings.aoColumns.push( oCol );
	
		// Add search object for column specific search. Note that the `searchCols[ iCol ]`
		// passed into extend can be undefined. This allows the user to give a default
		// with only some of the parameters defined, and also not give a default
		var searchCols = oSettings.aoPreSearchCols;
		searchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch, searchCols[ iCol ] );
	
		// Use the default column options function to initialise classes etc
		_fnColumnOptions( oSettings, iCol, null );
	}
	
	
	/**
	 * Apply options for a column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iCol column index to consider
	 *  @param {object} oOptions object with sType, bVisible and bSearchable etc
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnOptions( oSettings, iCol, oOptions )
	{
		var oCol = oSettings.aoColumns[ iCol ];
		var oClasses = oSettings.oClasses;
		var th = $(oCol.nTh);
	
		// Try to get width information from the DOM. We can't get it from CSS
		// as we'd need to parse the CSS stylesheet. `width` option can override
		if ( ! oCol.sWidthOrig ) {
			// Width attribute
			oCol.sWidthOrig = th.attr('width') || null;
	
			// Style attribute
			var t = (th.attr('style') || '').match(/width:\s*(\d+[pxem%]+)/);
			if ( t ) {
				oCol.sWidthOrig = t[1];
			}
		}
	
		/* User specified column options */
		if ( oOptions !== undefined && oOptions !== null )
		{
			// Backwards compatibility
			_fnCompatCols( oOptions );
	
			// Map camel case parameters to their Hungarian counterparts
			_fnCamelToHungarian( DataTable.defaults.column, oOptions );
	
			/* Backwards compatibility for mDataProp */
			if ( oOptions.mDataProp !== undefined && !oOptions.mData )
			{
				oOptions.mData = oOptions.mDataProp;
			}
	
			if ( oOptions.sType )
			{
				oCol._sManualType = oOptions.sType;
			}
	
			// `class` is a reserved word in Javascript, so we need to provide
			// the ability to use a valid name for the camel case input
			if ( oOptions.className && ! oOptions.sClass )
			{
				oOptions.sClass = oOptions.className;
			}
	
			$.extend( oCol, oOptions );
			_fnMap( oCol, oOptions, "sWidth", "sWidthOrig" );
	
			/* iDataSort to be applied (backwards compatibility), but aDataSort will take
			 * priority if defined
			 */
			if ( typeof oOptions.iDataSort === 'number' )
			{
				oCol.aDataSort = [ oOptions.iDataSort ];
			}
			_fnMap( oCol, oOptions, "aDataSort" );
		}
	
		/* Cache the data get and set functions for speed */
		var mDataSrc = oCol.mData;
		var mData = _fnGetObjectDataFn( mDataSrc );
		var mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;
	
		var attrTest = function( src ) {
			return typeof src === 'string' && src.indexOf('@') !== -1;
		};
		oCol._bAttrSrc = $.isPlainObject( mDataSrc ) && (
			attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter)
		);
	
		oCol.fnGetData = function (rowData, type, meta) {
			var innerData = mData( rowData, type, undefined, meta );
	
			return mRender && type ?
				mRender( innerData, type, rowData, meta ) :
				innerData;
		};
		oCol.fnSetData = function ( rowData, val, meta ) {
			return _fnSetObjectDataFn( mDataSrc )( rowData, val, meta );
		};
	
		// Indicate if DataTables should read DOM data as an object or array
		// Used in _fnGetRowElements
		if ( typeof mDataSrc !== 'number' ) {
			oSettings._rowReadObject = true;
		}
	
		/* Feature sorting overrides column specific when off */
		if ( !oSettings.oFeatures.bSort )
		{
			oCol.bSortable = false;
			th.addClass( oClasses.sSortableNone ); // Have to add class here as order event isn't called
		}
	
		/* Check that the class assignment is correct for sorting */
		var bAsc = $.inArray('asc', oCol.asSorting) !== -1;
		var bDesc = $.inArray('desc', oCol.asSorting) !== -1;
		if ( !oCol.bSortable || (!bAsc && !bDesc) )
		{
			oCol.sSortingClass = oClasses.sSortableNone;
			oCol.sSortingClassJUI = "";
		}
		else if ( bAsc && !bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableAsc;
			oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
		}
		else if ( !bAsc && bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableDesc;
			oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
		}
		else
		{
			oCol.sSortingClass = oClasses.sSortable;
			oCol.sSortingClassJUI = oClasses.sSortJUI;
		}
	}
	
	
	/**
	 * Adjust the table column widths for new data. Note: you would probably want to
	 * do a redraw after calling this function!
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAdjustColumnSizing ( settings )
	{
		/* Not interested in doing column width calculation if auto-width is disabled */
		if ( settings.oFeatures.bAutoWidth !== false )
		{
			var columns = settings.aoColumns;
	
			_fnCalculateColumnWidths( settings );
			for ( var i=0 , iLen=columns.length ; i<iLen ; i++ )
			{
				columns[i].nTh.style.width = columns[i].sWidth;
			}
		}
	
		var scroll = settings.oScroll;
		if ( scroll.sY !== '' || scroll.sX !== '')
		{
			_fnScrollDraw( settings );
		}
	
		_fnCallbackFire( settings, null, 'column-sizing', [settings] );
	}
	
	
	/**
	 * Covert the index of a visible column to the index in the data array (take account
	 * of hidden columns)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iMatch Visible column index to lookup
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnVisibleToColumnIndex( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
	
		return typeof aiVis[iMatch] === 'number' ?
			aiVis[iMatch] :
			null;
	}
	
	
	/**
	 * Covert the index of an index in the data array and convert it to the visible
	 *   column index (take account of hidden columns)
	 *  @param {int} iMatch Column index to lookup
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnIndexToVisible( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
		var iPos = $.inArray( iMatch, aiVis );
	
		return iPos !== -1 ? iPos : null;
	}
	
	
	/**
	 * Get the number of visible columns
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the number of visible columns
	 *  @memberof DataTable#oApi
	 */
	function _fnVisbleColumns( oSettings )
	{
		return _fnGetColumns( oSettings, 'bVisible' ).length;
	}
	
	
	/**
	 * Get an array of column indexes that match a given property
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sParam Parameter in aoColumns to look for - typically
	 *    bVisible or bSearchable
	 *  @returns {array} Array of indexes with matched properties
	 *  @memberof DataTable#oApi
	 */
	function _fnGetColumns( oSettings, sParam )
	{
		var a = [];
	
		$.map( oSettings.aoColumns, function(val, i) {
			if ( val[sParam] ) {
				a.push( i );
			}
		} );
	
		return a;
	}
	
	
	/**
	 * Calculate the 'type' of a column
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnTypes ( settings )
	{
		var columns = settings.aoColumns;
		var data = settings.aoData;
		var types = DataTable.ext.type.detect;
		var i, ien, j, jen, k, ken;
		var col, cell, detectedType, cache;
	
		// For each column, spin over the 
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			col = columns[i];
			cache = [];
	
			if ( ! col.sType && col._sManualType ) {
				col.sType = col._sManualType;
			}
			else if ( ! col.sType ) {
				for ( j=0, jen=types.length ; j<jen ; j++ ) {
					for ( k=0, ken=data.length ; k<ken ; k++ ) {
						// Use a cache array so we only need to get the type data
						// from the formatter once (when using multiple detectors)
						if ( cache[k] === undefined ) {
							cache[k] = _fnGetCellData( settings, k, i, 'type' );
						}
	
						detectedType = types[j]( cache[k], settings );
	
						// If null, then this type can't apply to this column, so
						// rather than testing all cells, break out. There is an
						// exception for the last type which is `html`. We need to
						// scan all rows since it is possible to mix string and HTML
						// types
						if ( ! detectedType && j !== types.length-1 ) {
							break;
						}
	
						// Only a single match is needed for html type since it is
						// bottom of the pile and very similar to string
						if ( detectedType === 'html' ) {
							break;
						}
					}
	
					// Type is valid for all data points in the column - use this
					// type
					if ( detectedType ) {
						col.sType = detectedType;
						break;
					}
				}
	
				// Fall back - if no type was detected, always use string
				if ( ! col.sType ) {
					col.sType = 'string';
				}
			}
		}
	}
	
	
	/**
	 * Take the column definitions and static columns arrays and calculate how
	 * they relate to column indexes. The callback function will then apply the
	 * definition found for a column to a suitable configuration object.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
	 *  @param {array} aoCols The aoColumns array that defines columns individually
	 *  @param {function} fn Callback function - takes two parameters, the calculated
	 *    column index and the definition for that column.
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )
	{
		var i, iLen, j, jLen, k, kLen, def;
		var columns = oSettings.aoColumns;
	
		// Column definitions with aTargets
		if ( aoColDefs )
		{
			/* Loop over the definitions array - loop in reverse so first instance has priority */
			for ( i=aoColDefs.length-1 ; i>=0 ; i-- )
			{
				def = aoColDefs[i];
	
				/* Each definition can target multiple columns, as it is an array */
				var aTargets = def.targets !== undefined ?
					def.targets :
					def.aTargets;
	
				if ( ! $.isArray( aTargets ) )
				{
					aTargets = [ aTargets ];
				}
	
				for ( j=0, jLen=aTargets.length ; j<jLen ; j++ )
				{
					if ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )
					{
						/* Add columns that we don't yet know about */
						while( columns.length <= aTargets[j] )
						{
							_fnAddColumn( oSettings );
						}
	
						/* Integer, basic index */
						fn( aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )
					{
						/* Negative integer, right to left column counting */
						fn( columns.length+aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'string' )
					{
						/* Class name matching on TH element */
						for ( k=0, kLen=columns.length ; k<kLen ; k++ )
						{
							if ( aTargets[j] == "_all" ||
							     $(columns[k].nTh).hasClass( aTargets[j] ) )
							{
								fn( k, def );
							}
						}
					}
				}
			}
		}
	
		// Statically defined columns array
		if ( aoCols )
		{
			for ( i=0, iLen=aoCols.length ; i<iLen ; i++ )
			{
				fn( i, aoCols[i] );
			}
		}
	}
	
	/**
	 * Add a data array to the table, creating DOM node etc. This is the parallel to
	 * _fnGatherData, but for adding rows from a Javascript source, rather than a
	 * DOM source.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aData data array to be added
	 *  @param {node} [nTr] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
	 *  @memberof DataTable#oApi
	 */
	function _fnAddData ( oSettings, aDataIn, nTr, anTds )
	{
		/* Create the object for storing information about this new row */
		var iRow = oSettings.aoData.length;
		var oData = $.extend( true, {}, DataTable.models.oRow, {
			src: nTr ? 'dom' : 'data'
		} );
	
		oData._aData = aDataIn;
		oSettings.aoData.push( oData );
	
		/* Create the cells */
		var nTd, sThisType;
		var columns = oSettings.aoColumns;
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			// When working with a row, the data source object must be populated. In
			// all other cases, the data source object is already populated, so we
			// don't overwrite it, which might break bindings etc
			if ( nTr ) {
				_fnSetCellData( oSettings, iRow, i, _fnGetCellData( oSettings, iRow, i ) );
			}
			columns[i].sType = null;
		}
	
		/* Add to the display array */
		oSettings.aiDisplayMaster.push( iRow );
	
		/* Create the DOM information, or register it if already present */
		if ( nTr || ! oSettings.oFeatures.bDeferRender )
		{
			_fnCreateTr( oSettings, iRow, nTr, anTds );
		}
	
		return iRow;
	}
	
	
	/**
	 * Add one or more TR elements to the table. Generally we'd expect to
	 * use this for reading data from a DOM sourced table, but it could be
	 * used for an TR element. Note that if a TR is given, it is used (i.e.
	 * it is not cloned).
	 *  @param {object} settings dataTables settings object
	 *  @param {array|node|jQuery} trs The TR element(s) to add to the table
	 *  @returns {array} Array of indexes for the added rows
	 *  @memberof DataTable#oApi
	 */
	function _fnAddTr( settings, trs )
	{
		var row;
	
		// Allow an individual node to be passed in
		if ( ! (trs instanceof $) ) {
			trs = $(trs);
		}
	
		return trs.map( function (i, el) {
			row = _fnGetRowElements( settings, el );
			return _fnAddData( settings, row.data, el, row.cells );
		} );
	}
	
	
	/**
	 * Take a TR element and convert it to an index in aoData
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} n the TR element to find
	 *  @returns {int} index if the node is found, null if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToDataIndex( oSettings, n )
	{
		return (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;
	}
	
	
	/**
	 * Take a TD element and convert it into a column data index (not the visible index)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow The row number the TD/TH can be found in
	 *  @param {node} n The TD/TH element to find
	 *  @returns {int} index if the node is found, -1 if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToColumnIndex( oSettings, iRow, n )
	{
		return $.inArray( n, oSettings.aoData[ iRow ].anCells );
	}
	
	
	/**
	 * Get the data for a given cell from the internal cache, taking into account data mapping
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {string} type data get type ('display', 'type' 'filter' 'sort')
	 *  @returns {*} Cell data
	 *  @memberof DataTable#oApi
	 */
	function _fnGetCellData( settings, rowIdx, colIdx, type )
	{
		var draw           = settings.iDraw;
		var col            = settings.aoColumns[colIdx];
		var rowData        = settings.aoData[rowIdx]._aData;
		var defaultContent = col.sDefaultContent;
		var cellData       = col.fnGetData( rowData, type, {
			settings: settings,
			row:      rowIdx,
			col:      colIdx
		} );
	
		if ( cellData === undefined ) {
			if ( settings.iDrawError != draw && defaultContent === null ) {
				_fnLog( settings, 0, "Requested unknown parameter "+
					(typeof col.mData=='function' ? '{function}' : "'"+col.mData+"'")+
					" for row "+rowIdx, 4 );
				settings.iDrawError = draw;
			}
			return defaultContent;
		}
	
		/* When the data source is null, we can use default column data */
		if ( (cellData === rowData || cellData === null) && defaultContent !== null ) {
			cellData = defaultContent;
		}
		else if ( typeof cellData === 'function' ) {
			// If the data source is a function, then we run it and use the return,
			// executing in the scope of the data object (for instances)
			return cellData.call( rowData );
		}
	
		if ( cellData === null && type == 'display' ) {
			return '';
		}
		return cellData;
	}
	
	
	/**
	 * Set the value for a specific cell, into the internal data cache
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {*} val Value to set
	 *  @memberof DataTable#oApi
	 */
	function _fnSetCellData( settings, rowIdx, colIdx, val )
	{
		var col     = settings.aoColumns[colIdx];
		var rowData = settings.aoData[rowIdx]._aData;
	
		col.fnSetData( rowData, val, {
			settings: settings,
			row:      rowIdx,
			col:      colIdx
		}  );
	}
	
	
	// Private variable that is used to match action syntax in the data property object
	var __reArray = /\[.*?\]$/;
	var __reFn = /\(\)$/;
	
	/**
	 * Split string on periods, taking into account escaped periods
	 * @param  {string} str String to split
	 * @return {array} Split string
	 */
	function _fnSplitObjNotation( str )
	{
		return $.map( str.match(/(\\.|[^\.])+/g), function ( s ) {
			return s.replace(/\\./g, '.');
		} );
	}
	
	
	/**
	 * Return a function that can be used to get data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data get function
	 *  @memberof DataTable#oApi
	 */
	function _fnGetObjectDataFn( mSource )
	{
		if ( $.isPlainObject( mSource ) )
		{
			/* Build an object of get functions, and wrap them in a single call */
			var o = {};
			$.each( mSource, function (key, val) {
				if ( val ) {
					o[key] = _fnGetObjectDataFn( val );
				}
			} );
	
			return function (data, type, row, meta) {
				var t = o[type] || o._;
				return t !== undefined ?
					t(data, type, row, meta) :
					data;
			};
		}
		else if ( mSource === null )
		{
			/* Give an empty string for rendering / sorting etc */
			return function (data) { // type, row and meta also passed, but not used
				return data;
			};
		}
		else if ( typeof mSource === 'function' )
		{
			return function (data, type, row, meta) {
				return mSource( data, type, row, meta );
			};
		}
		else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
			      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
		{
			/* If there is a . in the source string then the data source is in a
			 * nested object so we loop over the data for each level to get the next
			 * level down. On each loop we test for undefined, and if found immediately
			 * return. This allows entire objects to be missing and sDefaultContent to
			 * be used if defined, rather than throwing an error
			 */
			var fetchData = function (data, type, src) {
				var arrayNotation, funcNotation, out, innerSrc;
	
				if ( src !== "" )
				{
					var a = _fnSplitObjNotation( src );
	
					for ( var i=0, iLen=a.length ; i<iLen ; i++ )
					{
						// Check if we are dealing with special notation
						arrayNotation = a[i].match(__reArray);
						funcNotation = a[i].match(__reFn);
	
						if ( arrayNotation )
						{
							// Array notation
							a[i] = a[i].replace(__reArray, '');
	
							// Condition allows simply [] to be passed in
							if ( a[i] !== "" ) {
								data = data[ a[i] ];
							}
							out = [];
	
							// Get the remainder of the nested object to get
							a.splice( 0, i+1 );
							innerSrc = a.join('.');
	
							// Traverse each entry in the array getting the properties requested
							for ( var j=0, jLen=data.length ; j<jLen ; j++ ) {
								out.push( fetchData( data[j], type, innerSrc ) );
							}
	
							// If a string is given in between the array notation indicators, that
							// is used to join the strings together, otherwise an array is returned
							var join = arrayNotation[0].substring(1, arrayNotation[0].length-1);
							data = (join==="") ? out : out.join(join);
	
							// The inner call to fetchData has already traversed through the remainder
							// of the source requested, so we exit from the loop
							break;
						}
						else if ( funcNotation )
						{
							// Function call
							a[i] = a[i].replace(__reFn, '');
							data = data[ a[i] ]();
							continue;
						}
	
						if ( data === null || data[ a[i] ] === undefined )
						{
							return undefined;
						}
						data = data[ a[i] ];
					}
				}
	
				return data;
			};
	
			return function (data, type) { // row and meta also passed, but not used
				return fetchData( data, type, mSource );
			};
		}
		else
		{
			/* Array or flat object mapping */
			return function (data, type) { // row and meta also passed, but not used
				return data[mSource];
			};
		}
	}
	
	
	/**
	 * Return a function that can be used to set data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data set function
	 *  @memberof DataTable#oApi
	 */
	function _fnSetObjectDataFn( mSource )
	{
		if ( $.isPlainObject( mSource ) )
		{
			/* Unlike get, only the underscore (global) option is used for for
			 * setting data since we don't know the type here. This is why an object
			 * option is not documented for `mData` (which is read/write), but it is
			 * for `mRender` which is read only.
			 */
			return _fnSetObjectDataFn( mSource._ );
		}
		else if ( mSource === null )
		{
			/* Nothing to do when the data source is null */
			return function () {};
		}
		else if ( typeof mSource === 'function' )
		{
			return function (data, val, meta) {
				mSource( data, 'set', val, meta );
			};
		}
		else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
			      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
		{
			/* Like the get, we need to get data from a nested object */
			var setData = function (data, val, src) {
				var a = _fnSplitObjNotation( src ), b;
				var aLast = a[a.length-1];
				var arrayNotation, funcNotation, o, innerSrc;
	
				for ( var i=0, iLen=a.length-1 ; i<iLen ; i++ )
				{
					// Check if we are dealing with an array notation request
					arrayNotation = a[i].match(__reArray);
					funcNotation = a[i].match(__reFn);
	
					if ( arrayNotation )
					{
						a[i] = a[i].replace(__reArray, '');
						data[ a[i] ] = [];
	
						// Get the remainder of the nested object to set so we can recurse
						b = a.slice();
						b.splice( 0, i+1 );
						innerSrc = b.join('.');
	
						// Traverse each entry in the array setting the properties requested
						for ( var j=0, jLen=val.length ; j<jLen ; j++ )
						{
							o = {};
							setData( o, val[j], innerSrc );
							data[ a[i] ].push( o );
						}
	
						// The inner call to setData has already traversed through the remainder
						// of the source and has set the data, thus we can exit here
						return;
					}
					else if ( funcNotation )
					{
						// Function call
						a[i] = a[i].replace(__reFn, '');
						data = data[ a[i] ]( val );
					}
	
					// If the nested object doesn't currently exist - since we are
					// trying to set the value - create it
					if ( data[ a[i] ] === null || data[ a[i] ] === undefined )
					{
						data[ a[i] ] = {};
					}
					data = data[ a[i] ];
				}
	
				// Last item in the input - i.e, the actual set
				if ( aLast.match(__reFn ) )
				{
					// Function call
					data = data[ aLast.replace(__reFn, '') ]( val );
				}
				else
				{
					// If array notation is used, we just want to strip it and use the property name
					// and assign the value. If it isn't used, then we get the result we want anyway
					data[ aLast.replace(__reArray, '') ] = val;
				}
			};
	
			return function (data, val) { // meta is also passed in, but not used
				return setData( data, val, mSource );
			};
		}
		else
		{
			/* Array or flat object mapping */
			return function (data, val) { // meta is also passed in, but not used
				data[mSource] = val;
			};
		}
	}
	
	
	/**
	 * Return an array with the full table data
	 *  @param {object} oSettings dataTables settings object
	 *  @returns array {array} aData Master data array
	 *  @memberof DataTable#oApi
	 */
	function _fnGetDataMaster ( settings )
	{
		return _pluck( settings.aoData, '_aData' );
	}
	
	
	/**
	 * Nuke the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnClearTable( settings )
	{
		settings.aoData.length = 0;
		settings.aiDisplayMaster.length = 0;
		settings.aiDisplay.length = 0;
	}
	
	
	 /**
	 * Take an array of integers (index array) and remove a target integer (value - not
	 * the key!)
	 *  @param {array} a Index array to target
	 *  @param {int} iTarget value to find
	 *  @memberof DataTable#oApi
	 */
	function _fnDeleteIndex( a, iTarget, splice )
	{
		var iTargetIndex = -1;
	
		for ( var i=0, iLen=a.length ; i<iLen ; i++ )
		{
			if ( a[i] == iTarget )
			{
				iTargetIndex = i;
			}
			else if ( a[i] > iTarget )
			{
				a[i]--;
			}
		}
	
		if ( iTargetIndex != -1 && splice === undefined )
		{
			a.splice( iTargetIndex, 1 );
		}
	}
	
	
	/**
	 * Mark cached data as invalid such that a re-read of the data will occur when
	 * the cached data is next requested. Also update from the data source object.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {int}    rowIdx   Row index to invalidate
	 * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'
	 *     or 'data'
	 * @param {int}    [colIdx] Column index to invalidate. If undefined the whole
	 *     row will be invalidated
	 * @memberof DataTable#oApi
	 *
	 * @todo For the modularisation of v1.11 this will need to become a callback, so
	 *   the sort and filter methods can subscribe to it. That will required
	 *   initialisation options for sorting, which is why it is not already baked in
	 */
	function _fnInvalidate( settings, rowIdx, src, colIdx )
	{
		var row = settings.aoData[ rowIdx ];
		var i, ien;
		var cellWrite = function ( cell, col ) {
			// This is very frustrating, but in IE if you just write directly
			// to innerHTML, and elements that are overwritten are GC'ed,
			// even if there is a reference to them elsewhere
			while ( cell.childNodes.length ) {
				cell.removeChild( cell.firstChild );
			}
	
			cell.innerHTML = _fnGetCellData( settings, rowIdx, col, 'display' );
		};
	
		// Are we reading last data from DOM or the data object?
		if ( src === 'dom' || ((! src || src === 'auto') && row.src === 'dom') ) {
			// Read the data from the DOM
			row._aData = _fnGetRowElements(
					settings, row, colIdx, colIdx === undefined ? undefined : row._aData
				)
				.data;
		}
		else {
			// Reading from data object, update the DOM
			var cells = row.anCells;
	
			if ( cells ) {
				if ( colIdx !== undefined ) {
					cellWrite( cells[colIdx], colIdx );
				}
				else {
					for ( i=0, ien=cells.length ; i<ien ; i++ ) {
						cellWrite( cells[i], i );
					}
				}
			}
		}
	
		// For both row and cell invalidation, the cached data for sorting and
		// filtering is nulled out
		row._aSortData = null;
		row._aFilterData = null;
	
		// Invalidate the type for a specific column (if given) or all columns since
		// the data might have changed
		var cols = settings.aoColumns;
		if ( colIdx !== undefined ) {
			cols[ colIdx ].sType = null;
		}
		else {
			for ( i=0, ien=cols.length ; i<ien ; i++ ) {
				cols[i].sType = null;
			}
	
			// Update DataTables special `DT_*` attributes for the row
			_fnRowAttributes( row );
		}
	}
	
	
	/**
	 * Build a data source object from an HTML row, reading the contents of the
	 * cells that are in the row.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {node|object} TR element from which to read data or existing row
	 *   object from which to re-read the data from the cells
	 * @param {int} [colIdx] Optional column index
	 * @param {array|object} [d] Data source object. If `colIdx` is given then this
	 *   parameter should also be given and will be used to write the data into.
	 *   Only the column in question will be written
	 * @returns {object} Object with two parameters: `data` the data read, in
	 *   document order, and `cells` and array of nodes (they can be useful to the
	 *   caller, so rather than needing a second traversal to get them, just return
	 *   them from here).
	 * @memberof DataTable#oApi
	 */
	function _fnGetRowElements( settings, row, colIdx, d )
	{
		var
			tds = [],
			td = row.firstChild,
			name, col, o, i=0, contents,
			columns = settings.aoColumns,
			objectRead = settings._rowReadObject;
	
		// Allow the data object to be passed in, or construct
		d = d || objectRead ? {} : [];
	
		var attr = function ( str, td  ) {
			if ( typeof str === 'string' ) {
				var idx = str.indexOf('@');
	
				if ( idx !== -1 ) {
					var attr = str.substring( idx+1 );
					var setter = _fnSetObjectDataFn( str );
					setter( d, td.getAttribute( attr ) );
				}
			}
		};
	
		// Read data from a cell and store into the data object
		var cellProcess = function ( cell ) {
			if ( colIdx === undefined || colIdx === i ) {
				col = columns[i];
				contents = $.trim(cell.innerHTML);
	
				if ( col && col._bAttrSrc ) {
					var setter = _fnSetObjectDataFn( col.mData._ );
					setter( d, contents );
	
					attr( col.mData.sort, cell );
					attr( col.mData.type, cell );
					attr( col.mData.filter, cell );
				}
				else {
					// Depending on the `data` option for the columns the data can
					// be read to either an object or an array.
					if ( objectRead ) {
						if ( ! col._setter ) {
							// Cache the setter function
							col._setter = _fnSetObjectDataFn( col.mData );
						}
						col._setter( d, contents );
					}
					else {
						d[i] = contents;
					}
				}
			}
	
			i++;
		};
	
		if ( td ) {
			// `tr` element was passed in
			while ( td ) {
				name = td.nodeName.toUpperCase();
	
				if ( name == "TD" || name == "TH" ) {
					cellProcess( td );
					tds.push( td );
				}
	
				td = td.nextSibling;
			}
		}
		else {
			// Existing row object passed in
			tds = row.anCells;
			
			for ( var j=0, jen=tds.length ; j<jen ; j++ ) {
				cellProcess( tds[j] );
			}
		}
	
		return {
			data: d,
			cells: tds
		};
	}
	/**
	 * Create a new TR element (and it's TD children) for a row
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow Row to consider
	 *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @memberof DataTable#oApi
	 */
	function _fnCreateTr ( oSettings, iRow, nTrIn, anTds )
	{
		var
			row = oSettings.aoData[iRow],
			rowData = row._aData,
			cells = [],
			nTr, nTd, oCol,
			i, iLen;
	
		if ( row.nTr === null )
		{
			nTr = nTrIn || document.createElement('tr');
	
			row.nTr = nTr;
			row.anCells = cells;
	
			/* Use a private property on the node to allow reserve mapping from the node
			 * to the aoData array for fast look up
			 */
			nTr._DT_RowIndex = iRow;
	
			/* Special parameters can be given by the data source to be used on the row */
			_fnRowAttributes( row );
	
			/* Process each column */
			for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				oCol = oSettings.aoColumns[i];
	
				nTd = nTrIn ? anTds[i] : document.createElement( oCol.sCellType );
				cells.push( nTd );
	
				// Need to create the HTML if new, or if a rendering function is defined
				if ( !nTrIn || oCol.mRender || oCol.mData !== i )
				{
					nTd.innerHTML = _fnGetCellData( oSettings, iRow, i, 'display' );
				}
	
				/* Add user defined class */
				if ( oCol.sClass )
				{
					nTd.className += ' '+oCol.sClass;
				}
	
				// Visibility - add or remove as required
				if ( oCol.bVisible && ! nTrIn )
				{
					nTr.appendChild( nTd );
				}
				else if ( ! oCol.bVisible && nTrIn )
				{
					nTd.parentNode.removeChild( nTd );
				}
	
				if ( oCol.fnCreatedCell )
				{
					oCol.fnCreatedCell.call( oSettings.oInstance,
						nTd, _fnGetCellData( oSettings, iRow, i ), rowData, iRow, i
					);
				}
			}
	
			_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow] );
		}
	
		// Remove once webkit bug 131819 and Chromium bug 365619 have been resolved
		// and deployed
		row.nTr.setAttribute( 'role', 'row' );
	}
	
	
	/**
	 * Add attributes to a row based on the special `DT_*` parameters in a data
	 * source object.
	 *  @param {object} DataTables row object for the row to be modified
	 *  @memberof DataTable#oApi
	 */
	function _fnRowAttributes( row )
	{
		var tr = row.nTr;
		var data = row._aData;
	
		if ( tr ) {
			if ( data.DT_RowId ) {
				tr.id = data.DT_RowId;
			}
	
			if ( data.DT_RowClass ) {
				// Remove any classes added by DT_RowClass before
				var a = data.DT_RowClass.split(' ');
				row.__rowc = row.__rowc ?
					_unique( row.__rowc.concat( a ) ) :
					a;
	
				$(tr)
					.removeClass( row.__rowc.join(' ') )
					.addClass( data.DT_RowClass );
			}
	
			if ( data.DT_RowData ) {
				$(tr).data( data.DT_RowData );
			}
		}
	}
	
	
	/**
	 * Create the HTML header for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBuildHead( oSettings )
	{
		var i, ien, cell, row, column;
		var thead = oSettings.nTHead;
		var tfoot = oSettings.nTFoot;
		var createHeader = $('th, td', thead).length === 0;
		var classes = oSettings.oClasses;
		var columns = oSettings.aoColumns;
	
		if ( createHeader ) {
			row = $('<tr/>').appendTo( thead );
		}
	
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			column = columns[i];
			cell = $( column.nTh ).addClass( column.sClass );
	
			if ( createHeader ) {
				cell.appendTo( row );
			}
	
			// 1.11 move into sorting
			if ( oSettings.oFeatures.bSort ) {
				cell.addClass( column.sSortingClass );
	
				if ( column.bSortable !== false ) {
					cell
						.attr( 'tabindex', oSettings.iTabIndex )
						.attr( 'aria-controls', oSettings.sTableId );
	
					_fnSortAttachListener( oSettings, column.nTh, i );
				}
			}
	
			if ( column.sTitle != cell.html() ) {
				cell.html( column.sTitle );
			}
	
			_fnRenderer( oSettings, 'header' )(
				oSettings, cell, column, classes
			);
		}
	
		if ( createHeader ) {
			_fnDetectHeader( oSettings.aoHeader, thead );
		}
		
		/* ARIA role for the rows */
	 	$(thead).find('>tr').attr('role', 'row');
	
		/* Deal with the footer - add classes if required */
		$(thead).find('>tr>th, >tr>td').addClass( classes.sHeaderTH );
		$(tfoot).find('>tr>th, >tr>td').addClass( classes.sFooterTH );
	
		// Cache the footer cells. Note that we only take the cells from the first
		// row in the footer. If there is more than one row the user wants to
		// interact with, they need to use the table().foot() method. Note also this
		// allows cells to be used for multiple columns using colspan
		if ( tfoot !== null ) {
			var cells = oSettings.aoFooter[0];
	
			for ( i=0, ien=cells.length ; i<ien ; i++ ) {
				column = columns[i];
				column.nTf = cells[i].cell;
	
				if ( column.sClass ) {
					$(column.nTf).addClass( column.sClass );
				}
			}
		}
	}
	
	
	/**
	 * Draw the header (or footer) element based on the column visibility states. The
	 * methodology here is to use the layout array from _fnDetectHeader, modified for
	 * the instantaneous column visibility, to construct the new layout. The grid is
	 * traversed over cell at a time in a rows x columns grid fashion, although each
	 * cell insert can cover multiple elements in the grid - which is tracks using the
	 * aApplied array. Cell inserts in the grid will only occur where there isn't
	 * already a cell in that position.
	 *  @param {object} oSettings dataTables settings object
	 *  @param array {objects} aoSource Layout array from _fnDetectHeader
	 *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
	 *  @memberof DataTable#oApi
	 */
	function _fnDrawHead( oSettings, aoSource, bIncludeHidden )
	{
		var i, iLen, j, jLen, k, kLen, n, nLocalTr;
		var aoLocal = [];
		var aApplied = [];
		var iColumns = oSettings.aoColumns.length;
		var iRowspan, iColspan;
	
		if ( ! aoSource )
		{
			return;
		}
	
		if (  bIncludeHidden === undefined )
		{
			bIncludeHidden = false;
		}
	
		/* Make a copy of the master layout array, but without the visible columns in it */
		for ( i=0, iLen=aoSource.length ; i<iLen ; i++ )
		{
			aoLocal[i] = aoSource[i].slice();
			aoLocal[i].nTr = aoSource[i].nTr;
	
			/* Remove any columns which are currently hidden */
			for ( j=iColumns-1 ; j>=0 ; j-- )
			{
				if ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )
				{
					aoLocal[i].splice( j, 1 );
				}
			}
	
			/* Prep the applied array - it needs an element for each row */
			aApplied.push( [] );
		}
	
		for ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )
		{
			nLocalTr = aoLocal[i].nTr;
	
			/* All cells are going to be replaced, so empty out the row */
			if ( nLocalTr )
			{
				while( (n = nLocalTr.firstChild) )
				{
					nLocalTr.removeChild( n );
				}
			}
	
			for ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )
			{
				iRowspan = 1;
				iColspan = 1;
	
				/* Check to see if there is already a cell (row/colspan) covering our target
				 * insert point. If there is, then there is nothing to do.
				 */
				if ( aApplied[i][j] === undefined )
				{
					nLocalTr.appendChild( aoLocal[i][j].cell );
					aApplied[i][j] = 1;
	
					/* Expand the cell to cover as many rows as needed */
					while ( aoLocal[i+iRowspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )
					{
						aApplied[i+iRowspan][j] = 1;
						iRowspan++;
					}
	
					/* Expand the cell to cover as many columns as needed */
					while ( aoLocal[i][j+iColspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )
					{
						/* Must update the applied array over the rows for the columns */
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aApplied[i+k][j+iColspan] = 1;
						}
						iColspan++;
					}
	
					/* Do the actual expansion in the DOM */
					$(aoLocal[i][j].cell)
						.attr('rowspan', iRowspan)
						.attr('colspan', iColspan);
				}
			}
		}
	}
	
	
	/**
	 * Insert the required TR nodes into the table for display
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnDraw( oSettings )
	{
		/* Provide a pre-callback function which can be used to cancel the draw is false is returned */
		var aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );
		if ( $.inArray( false, aPreDraw ) !== -1 )
		{
			_fnProcessingDisplay( oSettings, false );
			return;
		}
	
		var i, iLen, n;
		var anRows = [];
		var iRowCount = 0;
		var asStripeClasses = oSettings.asStripeClasses;
		var iStripes = asStripeClasses.length;
		var iOpenRows = oSettings.aoOpenRows.length;
		var oLang = oSettings.oLanguage;
		var iInitDisplayStart = oSettings.iInitDisplayStart;
		var bServerSide = _fnDataSource( oSettings ) == 'ssp';
		var aiDisplay = oSettings.aiDisplay;
	
		oSettings.bDrawing = true;
	
		/* Check and see if we have an initial draw position from state saving */
		if ( iInitDisplayStart !== undefined && iInitDisplayStart !== -1 )
		{
			oSettings._iDisplayStart = bServerSide ?
				iInitDisplayStart :
				iInitDisplayStart >= oSettings.fnRecordsDisplay() ?
					0 :
					iInitDisplayStart;
	
			oSettings.iInitDisplayStart = -1;
		}
	
		var iDisplayStart = oSettings._iDisplayStart;
		var iDisplayEnd = oSettings.fnDisplayEnd();
	
		/* Server-side processing draw intercept */
		if ( oSettings.bDeferLoading )
		{
			oSettings.bDeferLoading = false;
			oSettings.iDraw++;
			_fnProcessingDisplay( oSettings, false );
		}
		else if ( !bServerSide )
		{
			oSettings.iDraw++;
		}
		else if ( !oSettings.bDestroying && !_fnAjaxUpdate( oSettings ) )
		{
			return;
		}
	
		if ( aiDisplay.length !== 0 )
		{
			var iStart = bServerSide ? 0 : iDisplayStart;
			var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
	
			for ( var j=iStart ; j<iEnd ; j++ )
			{
				var iDataIndex = aiDisplay[j];
				var aoData = oSettings.aoData[ iDataIndex ];
				if ( aoData.nTr === null )
				{
					_fnCreateTr( oSettings, iDataIndex );
				}
	
				var nRow = aoData.nTr;
	
				/* Remove the old striping classes and then add the new one */
				if ( iStripes !== 0 )
				{
					var sStripe = asStripeClasses[ iRowCount % iStripes ];
					if ( aoData._sRowStripe != sStripe )
					{
						$(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );
						aoData._sRowStripe = sStripe;
					}
				}
	
				// Row callback functions - might want to manipulate the row
				// iRowCount and j are not currently documented. Are they at all
				// useful?
				_fnCallbackFire( oSettings, 'aoRowCallback', null,
					[nRow, aoData._aData, iRowCount, j] );
	
				anRows.push( nRow );
				iRowCount++;
			}
		}
		else
		{
			/* Table is empty - create a row with an empty message in it */
			var sZero = oLang.sZeroRecords;
			if ( oSettings.iDraw == 1 &&  _fnDataSource( oSettings ) == 'ajax' )
			{
				sZero = oLang.sLoadingRecords;
			}
			else if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )
			{
				sZero = oLang.sEmptyTable;
			}
	
			anRows[ 0 ] = $( '<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' } )
				.append( $('<td />', {
					'valign':  'top',
					'colSpan': _fnVisbleColumns( oSettings ),
					'class':   oSettings.oClasses.sRowEmpty
				} ).html( sZero ) )[0];
		}
	
		/* Header and footer callbacks */
		_fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		_fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		var body = $(oSettings.nTBody);
	
		body.children().detach();
		body.append( $(anRows) );
	
		/* Call all required callback functions for the end of a draw */
		_fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );
	
		/* Draw is complete, sorting and filtering must be as well */
		oSettings.bSorted = false;
		oSettings.bFiltered = false;
		oSettings.bDrawing = false;
	}
	
	
	/**
	 * Redraw the table - taking account of the various features which are enabled
	 *  @param {object} oSettings dataTables settings object
	 *  @param {boolean} [holdPosition] Keep the current paging position. By default
	 *    the paging is reset to the first page
	 *  @memberof DataTable#oApi
	 */
	function _fnReDraw( settings, holdPosition )
	{
		var
			features = settings.oFeatures,
			sort     = features.bSort,
			filter   = features.bFilter;
	
		if ( sort ) {
			_fnSort( settings );
		}
	
		if ( filter ) {
			_fnFilterComplete( settings, settings.oPreviousSearch );
		}
		else {
			// No filtering, so we want to just use the display master
			settings.aiDisplay = settings.aiDisplayMaster.slice();
		}
	
		if ( holdPosition !== true ) {
			settings._iDisplayStart = 0;
		}
	
		// Let any modules know about the draw hold position state (used by
		// scrolling internally)
		settings._drawHold = holdPosition;
	
		_fnDraw( settings );
	
		settings._drawHold = false;
	}
	
	
	/**
	 * Add the options to the page HTML for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAddOptionsHtml ( oSettings )
	{
		var classes = oSettings.oClasses;
		var table = $(oSettings.nTable);
		var holding = $('<div/>').insertBefore( table ); // Holding element for speed
		var features = oSettings.oFeatures;
	
		// All DataTables are wrapped in a div
		var insert = $('<div/>', {
			id:      oSettings.sTableId+'_wrapper',
			'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' '+classes.sNoFooter)
		} );
	
		oSettings.nHolding = holding[0];
		oSettings.nTableWrapper = insert[0];
		oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
	
		/* Loop over the user set positioning and place the elements as needed */
		var aDom = oSettings.sDom.split('');
		var featureNode, cOption, nNewNode, cNext, sAttr, j;
		for ( var i=0 ; i<aDom.length ; i++ )
		{
			featureNode = null;
			cOption = aDom[i];
	
			if ( cOption == '<' )
			{
				/* New container div */
				nNewNode = $('<div/>')[0];
	
				/* Check to see if we should append an id and/or a class name to the container */
				cNext = aDom[i+1];
				if ( cNext == "'" || cNext == '"' )
				{
					sAttr = "";
					j = 2;
					while ( aDom[i+j] != cNext )
					{
						sAttr += aDom[i+j];
						j++;
					}
	
					/* Replace jQuery UI constants @todo depreciated */
					if ( sAttr == "H" )
					{
						sAttr = classes.sJUIHeader;
					}
					else if ( sAttr == "F" )
					{
						sAttr = classes.sJUIFooter;
					}
	
					/* The attribute can be in the format of "#id.class", "#id" or "class" This logic
					 * breaks the string into parts and applies them as needed
					 */
					if ( sAttr.indexOf('.') != -1 )
					{
						var aSplit = sAttr.split('.');
						nNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);
						nNewNode.className = aSplit[1];
					}
					else if ( sAttr.charAt(0) == "#" )
					{
						nNewNode.id = sAttr.substr(1, sAttr.length-1);
					}
					else
					{
						nNewNode.className = sAttr;
					}
	
					i += j; /* Move along the position array */
				}
	
				insert.append( nNewNode );
				insert = $(nNewNode);
			}
			else if ( cOption == '>' )
			{
				/* End container div */
				insert = insert.parent();
			}
			// @todo Move options into their own plugins?
			else if ( cOption == 'l' && features.bPaginate && features.bLengthChange )
			{
				/* Length */
				featureNode = _fnFeatureHtmlLength( oSettings );
			}
			else if ( cOption == 'f' && features.bFilter )
			{
				/* Filter */
				featureNode = _fnFeatureHtmlFilter( oSettings );
			}
			else if ( cOption == 'r' && features.bProcessing )
			{
				/* pRocessing */
				featureNode = _fnFeatureHtmlProcessing( oSettings );
			}
			else if ( cOption == 't' )
			{
				/* Table */
				featureNode = _fnFeatureHtmlTable( oSettings );
			}
			else if ( cOption ==  'i' && features.bInfo )
			{
				/* Info */
				featureNode = _fnFeatureHtmlInfo( oSettings );
			}
			else if ( cOption == 'p' && features.bPaginate )
			{
				/* Pagination */
				featureNode = _fnFeatureHtmlPaginate( oSettings );
			}
			else if ( DataTable.ext.feature.length !== 0 )
			{
				/* Plug-in features */
				var aoFeatures = DataTable.ext.feature;
				for ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )
				{
					if ( cOption == aoFeatures[k].cFeature )
					{
						featureNode = aoFeatures[k].fnInit( oSettings );
						break;
					}
				}
			}
	
			/* Add to the 2D features array */
			if ( featureNode )
			{
				var aanFeatures = oSettings.aanFeatures;
	
				if ( ! aanFeatures[cOption] )
				{
					aanFeatures[cOption] = [];
				}
	
				aanFeatures[cOption].push( featureNode );
				insert.append( featureNode );
			}
		}
	
		/* Built our DOM structure - replace the holding div with what we want */
		holding.replaceWith( insert );
	}
	
	
	/**
	 * Use the DOM source to create up an array of header cells. The idea here is to
	 * create a layout grid (array) of rows x columns, which contains a reference
	 * to the cell that that point in the grid (regardless of col/rowspan), such that
	 * any column / row could be removed and the new grid constructed
	 *  @param array {object} aLayout Array to store the calculated layout in
	 *  @param {node} nThead The header/footer element for the table
	 *  @memberof DataTable#oApi
	 */
	function _fnDetectHeader ( aLayout, nThead )
	{
		var nTrs = $(nThead).children('tr');
		var nTr, nCell;
		var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
		var bUnique;
		var fnShiftCol = function ( a, i, j ) {
			var k = a[i];
	                while ( k[j] ) {
				j++;
			}
			return j;
		};
	
		aLayout.splice( 0, aLayout.length );
	
		/* We know how many rows there are in the layout - so prep it */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			aLayout.push( [] );
		}
	
		/* Calculate a layout array */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			nTr = nTrs[i];
			iColumn = 0;
	
			/* For every cell in the row... */
			nCell = nTr.firstChild;
			while ( nCell ) {
				if ( nCell.nodeName.toUpperCase() == "TD" ||
				     nCell.nodeName.toUpperCase() == "TH" )
				{
					/* Get the col and rowspan attributes from the DOM and sanitise them */
					iColspan = nCell.getAttribute('colspan') * 1;
					iRowspan = nCell.getAttribute('rowspan') * 1;
					iColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;
					iRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;
	
					/* There might be colspan cells already in this row, so shift our target
					 * accordingly
					 */
					iColShifted = fnShiftCol( aLayout, i, iColumn );
	
					/* Cache calculation for unique columns */
					bUnique = iColspan === 1 ? true : false;
	
					/* If there is col / rowspan, copy the information into the layout grid */
					for ( l=0 ; l<iColspan ; l++ )
					{
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aLayout[i+k][iColShifted+l] = {
								"cell": nCell,
								"unique": bUnique
							};
							aLayout[i+k].nTr = nTr;
						}
					}
				}
				nCell = nCell.nextSibling;
			}
		}
	}
	
	
	/**
	 * Get an array of unique th elements, one for each column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nHeader automatically detect the layout from this node - optional
	 *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
	 *  @returns array {node} aReturn list of unique th's
	 *  @memberof DataTable#oApi
	 */
	function _fnGetUniqueThs ( oSettings, nHeader, aLayout )
	{
		var aReturn = [];
		if ( !aLayout )
		{
			aLayout = oSettings.aoHeader;
			if ( nHeader )
			{
				aLayout = [];
				_fnDetectHeader( aLayout, nHeader );
			}
		}
	
		for ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )
		{
			for ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )
			{
				if ( aLayout[i][j].unique &&
					 (!aReturn[j] || !oSettings.bSortCellsTop) )
				{
					aReturn[j] = aLayout[i][j].cell;
				}
			}
		}
	
		return aReturn;
	}
	
	
	
	/**
	 * Create an Ajax call based on the table's settings, taking into account that
	 * parameters can have multiple forms, and backwards compatibility.
	 *
	 * @param {object} oSettings dataTables settings object
	 * @param {array} data Data to send to the server, required by
	 *     DataTables - may be augmented by developer callbacks
	 * @param {function} fn Callback function to run when data is obtained
	 */
	function _fnBuildAjax( oSettings, data, fn )
	{
		// Compatibility with 1.9-, allow fnServerData and event to manipulate
		_fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [data] );
	
		// Convert to object based for 1.10+ if using the old array scheme which can
		// come from server-side processing or serverParams
		if ( data && $.isArray(data) ) {
			var tmp = {};
			var rbracket = /(.*?)\[\]$/;
	
			$.each( data, function (key, val) {
				var match = val.name.match(rbracket);
	
				if ( match ) {
					// Support for arrays
					var name = match[0];
	
					if ( ! tmp[ name ] ) {
						tmp[ name ] = [];
					}
					tmp[ name ].push( val.value );
				}
				else {
					tmp[val.name] = val.value;
				}
			} );
			data = tmp;
		}
	
		var ajaxData;
		var ajax = oSettings.ajax;
		var instance = oSettings.oInstance;
	
		if ( $.isPlainObject( ajax ) && ajax.data )
		{
			ajaxData = ajax.data;
	
			var newData = $.isFunction( ajaxData ) ?
				ajaxData( data ) :  // fn can manipulate data or return an object
				ajaxData;           // object or array to merge
	
			// If the function returned an object, use that alone
			data = $.isFunction( ajaxData ) && newData ?
				newData :
				$.extend( true, data, newData );
	
			// Remove the data property as we've resolved it already and don't want
			// jQuery to do it again (it is restored at the end of the function)
			delete ajax.data;
		}
	
		var baseAjax = {
			"data": data,
			"success": function (json) {
				var error = json.error || json.sError;
				if ( error ) {
					oSettings.oApi._fnLog( oSettings, 0, error );
				}
	
				oSettings.json = json;
				_fnCallbackFire( oSettings, null, 'xhr', [oSettings, json] );
				fn( json );
			},
			"dataType": "json",
			"cache": false,
			"type": oSettings.sServerMethod,
			"error": function (xhr, error, thrown) {
				var log = oSettings.oApi._fnLog;
	
				if ( error == "parsererror" ) {
					log( oSettings, 0, 'Invalid JSON response', 1 );
				}
				else if ( xhr.readyState === 4 ) {
					log( oSettings, 0, 'Ajax error', 7 );
				}
	
				_fnProcessingDisplay( oSettings, false );
			}
		};
	
		// Store the data submitted for the API
		oSettings.oAjaxData = data;
	
		// Allow plug-ins and external processes to modify the data
		_fnCallbackFire( oSettings, null, 'preXhr', [oSettings, data] );
	
		if ( oSettings.fnServerData )
		{
			// DataTables 1.9- compatibility
			oSettings.fnServerData.call( instance,
				oSettings.sAjaxSource,
				$.map( data, function (val, key) { // Need to convert back to 1.9 trad format
					return { name: key, value: val };
				} ),
				fn,
				oSettings
			);
		}
		else if ( oSettings.sAjaxSource || typeof ajax === 'string' )
		{
			// DataTables 1.9- compatibility
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, {
				url: ajax || oSettings.sAjaxSource
			} ) );
		}
		else if ( $.isFunction( ajax ) )
		{
			// Is a function - let the caller define what needs to be done
			oSettings.jqXHR = ajax.call( instance, data, fn, oSettings );
		}
		else
		{
			// Object to extend the base settings
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, ajax ) );
	
			// Restore for next time around
			ajax.data = ajaxData;
		}
	}
	
	
	/**
	 * Update the table using an Ajax call
	 *  @param {object} settings dataTables settings object
	 *  @returns {boolean} Block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdate( settings )
	{
		if ( settings.bAjaxDataGet ) {
			settings.iDraw++;
			_fnProcessingDisplay( settings, true );
	
			_fnBuildAjax(
				settings,
				_fnAjaxParameters( settings ),
				function(json) {
					_fnAjaxUpdateDraw( settings, json );
				}
			);
	
			return false;
		}
		return true;
	}
	
	
	/**
	 * Build up the parameters in an object needed for a server-side processing
	 * request. Note that this is basically done twice, is different ways - a modern
	 * method which is used by default in DataTables 1.10 which uses objects and
	 * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
	 * the sAjaxSource option is used in the initialisation, or the legacyAjax
	 * option is set.
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {bool} block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxParameters( settings )
	{
		var
			columns = settings.aoColumns,
			columnCount = columns.length,
			features = settings.oFeatures,
			preSearch = settings.oPreviousSearch,
			preColSearch = settings.aoPreSearchCols,
			i, data = [], dataProp, column, columnSearch,
			sort = _fnSortFlatten( settings ),
			displayStart = settings._iDisplayStart,
			displayLength = features.bPaginate !== false ?
				settings._iDisplayLength :
				-1;
	
		var param = function ( name, value ) {
			data.push( { 'name': name, 'value': value } );
		};
	
		// DataTables 1.9- compatible method
		param( 'sEcho',          settings.iDraw );
		param( 'iColumns',       columnCount );
		param( 'sColumns',       _pluck( columns, 'sName' ).join(',') );
		param( 'iDisplayStart',  displayStart );
		param( 'iDisplayLength', displayLength );
	
		// DataTables 1.10+ method
		var d = {
			draw:    settings.iDraw,
			columns: [],
			order:   [],
			start:   displayStart,
			length:  displayLength,
			search:  {
				value: preSearch.sSearch,
				regex: preSearch.bRegex
			}
		};
	
		for ( i=0 ; i<columnCount ; i++ ) {
			column = columns[i];
			columnSearch = preColSearch[i];
			dataProp = typeof column.mData=="function" ? 'function' : column.mData ;
	
			d.columns.push( {
				data:       dataProp,
				name:       column.sName,
				searchable: column.bSearchable,
				orderable:  column.bSortable,
				search:     {
					value: columnSearch.sSearch,
					regex: columnSearch.bRegex
				}
			} );
	
			param( "mDataProp_"+i, dataProp );
	
			if ( features.bFilter ) {
				param( 'sSearch_'+i,     columnSearch.sSearch );
				param( 'bRegex_'+i,      columnSearch.bRegex );
				param( 'bSearchable_'+i, column.bSearchable );
			}
	
			if ( features.bSort ) {
				param( 'bSortable_'+i, column.bSortable );
			}
		}
	
		if ( features.bFilter ) {
			param( 'sSearch', preSearch.sSearch );
			param( 'bRegex', preSearch.bRegex );
		}
	
		if ( features.bSort ) {
			$.each( sort, function ( i, val ) {
				d.order.push( { column: val.col, dir: val.dir } );
	
				param( 'iSortCol_'+i, val.col );
				param( 'sSortDir_'+i, val.dir );
			} );
	
			param( 'iSortingCols', sort.length );
		}
	
		// If the legacy.ajax parameter is null, then we automatically decide which
		// form to use, based on sAjaxSource
		var legacy = DataTable.ext.legacy.ajax;
		if ( legacy === null ) {
			return settings.sAjaxSource ? data : d;
		}
	
		// Otherwise, if legacy has been specified then we use that to decide on the
		// form
		return legacy ? data : d;
	}
	
	
	/**
	 * Data the data from the server (nuking the old) and redraw the table
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} json json data return from the server.
	 *  @param {string} json.sEcho Tracking flag for DataTables to match requests
	 *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
	 *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
	 *  @param {array} json.aaData The data to display on this page
	 *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdateDraw ( settings, json )
	{
		// v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
		// Support both
		var compat = function ( old, modern ) {
			return json[old] !== undefined ? json[old] : json[modern];
		};
	
		var draw            = compat( 'sEcho',                'draw' );
		var recordsTotal    = compat( 'iTotalRecords',        'recordsTotal' );
		var recordsFiltered = compat( 'iTotalDisplayRecords', 'recordsFiltered' );
	
		if ( draw ) {
			// Protect against out of sequence returns
			if ( draw*1 < settings.iDraw ) {
				return;
			}
			settings.iDraw = draw * 1;
		}
	
		_fnClearTable( settings );
		settings._iRecordsTotal   = parseInt(recordsTotal, 10);
		settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
	
		var data = _fnAjaxDataSrc( settings, json );
		for ( var i=0, ien=data.length ; i<ien ; i++ ) {
			_fnAddData( settings, data[i] );
		}
		settings.aiDisplay = settings.aiDisplayMaster.slice();
	
		settings.bAjaxDataGet = false;
		_fnDraw( settings );
	
		if ( ! settings._bInitComplete ) {
			_fnInitComplete( settings, json );
		}
	
		settings.bAjaxDataGet = true;
		_fnProcessingDisplay( settings, false );
	}
	
	
	/**
	 * Get the data from the JSON data source to use for drawing a table. Using
	 * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
	 * source object, or from a processing function.
	 *  @param {object} oSettings dataTables settings object
	 *  @param  {object} json Data source object / array from the server
	 *  @return {array} Array of data to use
	 */
	function _fnAjaxDataSrc ( oSettings, json )
	{
		var dataSrc = $.isPlainObject( oSettings.ajax ) && oSettings.ajax.dataSrc !== undefined ?
			oSettings.ajax.dataSrc :
			oSettings.sAjaxDataProp; // Compatibility with 1.9-.
	
		// Compatibility with 1.9-. In order to read from aaData, check if the
		// default has been changed, if not, check for aaData
		if ( dataSrc === 'data' ) {
			return json.aaData || json[dataSrc];
		}
	
		return dataSrc !== "" ?
			_fnGetObjectDataFn( dataSrc )( json ) :
			json;
	}
	
	
	/**
	 * Generate the node required for filtering text
	 *  @returns {node} Filter control element
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlFilter ( settings )
	{
		var classes = settings.oClasses;
		var tableId = settings.sTableId;
		var language = settings.oLanguage;
		var previousSearch = settings.oPreviousSearch;
		var features = settings.aanFeatures;
		var input = '<input type="search" class="'+classes.sFilterInput+'"/>';
	
		var str = language.sSearch;
		str = str.match(/_INPUT_/) ?
			str.replace('_INPUT_', input) :
			str+input;
	
		var filter = $('<div/>', {
				'id': ! features.f ? tableId+'_filter' : null,
				'class': classes.sFilter
			} )
			.append( $('<label/>' ).append( str ) );
	
		var searchFn = function() {
			/* Update all other filter input elements for the new display */
			var n = features.f;
			var val = !this.value ? "" : this.value; // mental IE8 fix :-(
	
			/* Now do the filter */
			if ( val != previousSearch.sSearch ) {
				_fnFilterComplete( settings, {
					"sSearch": val,
					"bRegex": previousSearch.bRegex,
					"bSmart": previousSearch.bSmart ,
					"bCaseInsensitive": previousSearch.bCaseInsensitive
				} );
	
				// Need to redraw, without resorting
				settings._iDisplayStart = 0;
				_fnDraw( settings );
			}
		};
	
		var searchDelay = settings.searchDelay !== null ?
			settings.searchDelay :
			_fnDataSource( settings ) === 'ssp' ?
				400 :
				0;
	
		var jqFilter = $('input', filter)
			.val( previousSearch.sSearch )
			.attr( 'placeholder', language.sSearchPlaceholder )
			.bind(
				'keyup.DT search.DT input.DT paste.DT cut.DT',
				searchDelay ?
					_fnThrottle( searchFn, searchDelay ) :
					searchFn
			)
			.bind( 'keypress.DT', function(e) {
				/* Prevent form submission */
				if ( e.keyCode == 13 ) {
					return false;
				}
			} )
			.attr('aria-controls', tableId);
	
		// Update the input elements whenever the table is filtered
		$(settings.nTable).on( 'search.dt.DT', function ( ev, s ) {
			if ( settings === s ) {
				// IE9 throws an 'unknown error' if document.activeElement is used
				// inside an iframe or frame...
				try {
					if ( jqFilter[0] !== document.activeElement ) {
						jqFilter.val( previousSearch.sSearch );
					}
				}
				catch ( e ) {}
			}
		} );
	
		return filter[0];
	}
	
	
	/**
	 * Filter the table using both the global filter and column based filtering
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oSearch search information
	 *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterComplete ( oSettings, oInput, iForce )
	{
		var oPrevSearch = oSettings.oPreviousSearch;
		var aoPrevSearch = oSettings.aoPreSearchCols;
		var fnSaveFilter = function ( oFilter ) {
			/* Save the filtering values */
			oPrevSearch.sSearch = oFilter.sSearch;
			oPrevSearch.bRegex = oFilter.bRegex;
			oPrevSearch.bSmart = oFilter.bSmart;
			oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
		};
		var fnRegex = function ( o ) {
			// Backwards compatibility with the bEscapeRegex option
			return o.bEscapeRegex !== undefined ? !o.bEscapeRegex : o.bRegex;
		};
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo As per sort - can this be moved into an event handler?
		_fnColumnTypes( oSettings );
	
		/* In server-side processing all filtering is done by the server, so no point hanging around here */
		if ( _fnDataSource( oSettings ) != 'ssp' )
		{
			/* Global filter */
			_fnFilter( oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive );
			fnSaveFilter( oInput );
	
			/* Now do the individual column filter */
			for ( var i=0 ; i<aoPrevSearch.length ; i++ )
			{
				_fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]),
					aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );
			}
	
			/* Custom filtering */
			_fnFilterCustom( oSettings );
		}
		else
		{
			fnSaveFilter( oInput );
		}
	
		/* Tell the draw function we have been filtering */
		oSettings.bFiltered = true;
		_fnCallbackFire( oSettings, null, 'search', [oSettings] );
	}
	
	
	/**
	 * Apply custom filtering functions
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCustom( settings )
	{
		var filters = DataTable.ext.search;
		var displayRows = settings.aiDisplay;
		var row, rowIdx;
	
		for ( var i=0, ien=filters.length ; i<ien ; i++ ) {
			var rows = [];
	
			// Loop over each row and see if it should be included
			for ( var j=0, jen=displayRows.length ; j<jen ; j++ ) {
				rowIdx = displayRows[ j ];
				row = settings.aoData[ rowIdx ];
	
				if ( filters[i]( settings, row._aFilterData, rowIdx, row._aData, j ) ) {
					rows.push( rowIdx );
				}
			}
	
			// So the array reference doesn't break set the results into the
			// existing array
			displayRows.length = 0;
			displayRows.push.apply( displayRows, rows );
		}
	}
	
	
	/**
	 * Filter the table on a per-column basis
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sInput string to filter on
	 *  @param {int} iColumn column to filter
	 *  @param {bool} bRegex treat search string as a regular expression or not
	 *  @param {bool} bSmart use smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterColumn ( settings, searchStr, colIdx, regex, smart, caseInsensitive )
	{
		if ( searchStr === '' ) {
			return;
		}
	
		var data;
		var display = settings.aiDisplay;
		var rpSearch = _fnFilterCreateSearch( searchStr, regex, smart, caseInsensitive );
	
		for ( var i=display.length-1 ; i>=0 ; i-- ) {
			data = settings.aoData[ display[i] ]._aFilterData[ colIdx ];
	
			if ( ! rpSearch.test( data ) ) {
				display.splice( i, 1 );
			}
		}
	}
	
	
	/**
	 * Filter the data table based on user input and draw the table
	 *  @param {object} settings dataTables settings object
	 *  @param {string} input string to filter on
	 *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
	 *  @param {bool} regex treat as a regular expression or not
	 *  @param {bool} smart perform smart filtering or not
	 *  @param {bool} caseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilter( settings, input, force, regex, smart, caseInsensitive )
	{
		var rpSearch = _fnFilterCreateSearch( input, regex, smart, caseInsensitive );
		var prevSearch = settings.oPreviousSearch.sSearch;
		var displayMaster = settings.aiDisplayMaster;
		var display, invalidated, i;
	
		// Need to take account of custom filtering functions - always filter
		if ( DataTable.ext.search.length !== 0 ) {
			force = true;
		}
	
		// Check if any of the rows were invalidated
		invalidated = _fnFilterData( settings );
	
		// If the input is blank - we just want the full data set
		if ( input.length <= 0 ) {
			settings.aiDisplay = displayMaster.slice();
		}
		else {
			// New search - start from the master array
			if ( invalidated ||
				 force ||
				 prevSearch.length > input.length ||
				 input.indexOf(prevSearch) !== 0 ||
				 settings.bSorted // On resort, the display master needs to be
				                  // re-filtered since indexes will have changed
			) {
				settings.aiDisplay = displayMaster.slice();
			}
	
			// Search the display array
			display = settings.aiDisplay;
	
			for ( i=display.length-1 ; i>=0 ; i-- ) {
				if ( ! rpSearch.test( settings.aoData[ display[i] ]._sFilterRow ) ) {
					display.splice( i, 1 );
				}
			}
		}
	}
	
	
	/**
	 * Build a regular expression object suitable for searching a table
	 *  @param {string} sSearch string to search for
	 *  @param {bool} bRegex treat as a regular expression or not
	 *  @param {bool} bSmart perform smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
	 *  @returns {RegExp} constructed object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCreateSearch( search, regex, smart, caseInsensitive )
	{
		search = regex ?
			search :
			_fnEscapeRegex( search );
		
		if ( smart ) {
			/* For smart filtering we want to allow the search to work regardless of
			 * word order. We also want double quoted text to be preserved, so word
			 * order is important - a la google. So this is what we want to
			 * generate:
			 * 
			 * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
			 */
			var a = $.map( search.match( /"[^"]+"|[^ ]+/g ) || '', function ( word ) {
				if ( word.charAt(0) === '"' ) {
					var m = word.match( /^"(.*)"$/ );
					word = m ? m[1] : word;
				}
	
				return word.replace('"', '');
			} );
	
			search = '^(?=.*?'+a.join( ')(?=.*?' )+').*$';
		}
	
		return new RegExp( search, caseInsensitive ? 'i' : '' );
	}
	
	
	/**
	 * Escape a string such that it can be used in a regular expression
	 *  @param {string} sVal string to escape
	 *  @returns {string} escaped string
	 *  @memberof DataTable#oApi
	 */
	function _fnEscapeRegex ( sVal )
	{
		return sVal.replace( _re_escape_regex, '\\$1' );
	}
	
	
	
	var __filter_div = $('<div>')[0];
	var __filter_div_textContent = __filter_div.textContent !== undefined;
	
	// Update the filtering data for each row if needed (by invalidation or first run)
	function _fnFilterData ( settings )
	{
		var columns = settings.aoColumns;
		var column;
		var i, j, ien, jen, filterData, cellData, row;
		var fomatters = DataTable.ext.type.search;
		var wasInvalidated = false;
	
		for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aFilterData ) {
				filterData = [];
	
				for ( j=0, jen=columns.length ; j<jen ; j++ ) {
					column = columns[j];
	
					if ( column.bSearchable ) {
						cellData = _fnGetCellData( settings, i, j, 'filter' );
	
						if ( fomatters[ column.sType ] ) {
							cellData = fomatters[ column.sType ]( cellData );
						}
	
						// Search in DataTables 1.10 is string based. In 1.11 this
						// should be altered to also allow strict type checking.
						if ( cellData === null ) {
							cellData = '';
						}
	
						if ( typeof cellData !== 'string' && cellData.toString ) {
							cellData = cellData.toString();
						}
					}
					else {
						cellData = '';
					}
	
					// If it looks like there is an HTML entity in the string,
					// attempt to decode it so sorting works as expected. Note that
					// we could use a single line of jQuery to do this, but the DOM
					// method used here is much faster http://jsperf.com/html-decode
					if ( cellData.indexOf && cellData.indexOf('&') !== -1 ) {
						__filter_div.innerHTML = cellData;
						cellData = __filter_div_textContent ?
							__filter_div.textContent :
							__filter_div.innerText;
					}
	
					if ( cellData.replace ) {
						cellData = cellData.replace(/[\r\n]/g, '');
					}
	
					filterData.push( cellData );
				}
	
				row._aFilterData = filterData;
				row._sFilterRow = filterData.join('  ');
				wasInvalidated = true;
			}
		}
	
		return wasInvalidated;
	}
	
	
	/**
	 * Convert from the internal Hungarian notation to camelCase for external
	 * interaction
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */
	function _fnSearchToCamel ( obj )
	{
		return {
			search:          obj.sSearch,
			smart:           obj.bSmart,
			regex:           obj.bRegex,
			caseInsensitive: obj.bCaseInsensitive
		};
	}
	
	
	
	/**
	 * Convert from camelCase notation to the internal Hungarian. We could use the
	 * Hungarian convert function here, but this is cleaner
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */
	function _fnSearchToHung ( obj )
	{
		return {
			sSearch:          obj.search,
			bSmart:           obj.smart,
			bRegex:           obj.regex,
			bCaseInsensitive: obj.caseInsensitive
		};
	}
	
	/**
	 * Generate the node required for the info display
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Information element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlInfo ( settings )
	{
		var
			tid = settings.sTableId,
			nodes = settings.aanFeatures.i,
			n = $('<div/>', {
				'class': settings.oClasses.sInfo,
				'id': ! nodes ? tid+'_info' : null
			} );
	
		if ( ! nodes ) {
			// Update display on each draw
			settings.aoDrawCallback.push( {
				"fn": _fnUpdateInfo,
				"sName": "information"
			} );
	
			n
				.attr( 'role', 'status' )
				.attr( 'aria-live', 'polite' );
	
			// Table is described by our info div
			$(settings.nTable).attr( 'aria-describedby', tid+'_info' );
		}
	
		return n[0];
	}
	
	
	/**
	 * Update the information elements in the display
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnUpdateInfo ( settings )
	{
		/* Show information about the table */
		var nodes = settings.aanFeatures.i;
		if ( nodes.length === 0 ) {
			return;
		}
	
		var
			lang  = settings.oLanguage,
			start = settings._iDisplayStart+1,
			end   = settings.fnDisplayEnd(),
			max   = settings.fnRecordsTotal(),
			total = settings.fnRecordsDisplay(),
			out   = total ?
				lang.sInfo :
				lang.sInfoEmpty;
	
		if ( total !== max ) {
			/* Record set after filtering */
			out += ' ' + lang.sInfoFiltered;
		}
	
		// Convert the macros
		out += lang.sInfoPostFix;
		out = _fnInfoMacros( settings, out );
	
		var callback = lang.fnInfoCallback;
		if ( callback !== null ) {
			out = callback.call( settings.oInstance,
				settings, start, end, max, total, out
			);
		}
	
		$(nodes).html( out );
	}
	
	
	function _fnInfoMacros ( settings, str )
	{
		// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
		// internally
		var
			formatter  = settings.fnFormatNumber,
			start      = settings._iDisplayStart+1,
			len        = settings._iDisplayLength,
			vis        = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return str.
			replace(/_START_/g, formatter.call( settings, start ) ).
			replace(/_END_/g,   formatter.call( settings, settings.fnDisplayEnd() ) ).
			replace(/_MAX_/g,   formatter.call( settings, settings.fnRecordsTotal() ) ).
			replace(/_TOTAL_/g, formatter.call( settings, vis ) ).
			replace(/_PAGE_/g,  formatter.call( settings, all ? 1 : Math.ceil( start / len ) ) ).
			replace(/_PAGES_/g, formatter.call( settings, all ? 1 : Math.ceil( vis / len ) ) );
	}
	
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnInitialise ( settings )
	{
		var i, iLen, iAjaxStart=settings.iInitDisplayStart;
		var columns = settings.aoColumns, column;
		var features = settings.oFeatures;
	
		/* Ensure that the table data is fully initialised */
		if ( ! settings.bInitialised ) {
			setTimeout( function(){ _fnInitialise( settings ); }, 200 );
			return;
		}
	
		/* Show the display HTML options */
		_fnAddOptionsHtml( settings );
	
		/* Build and draw the header / footer for the table */
		_fnBuildHead( settings );
		_fnDrawHead( settings, settings.aoHeader );
		_fnDrawHead( settings, settings.aoFooter );
	
		/* Okay to show that something is going on now */
		_fnProcessingDisplay( settings, true );
	
		/* Calculate sizes for columns */
		if ( features.bAutoWidth ) {
			_fnCalculateColumnWidths( settings );
		}
	
		for ( i=0, iLen=columns.length ; i<iLen ; i++ ) {
			column = columns[i];
	
			if ( column.sWidth ) {
				column.nTh.style.width = _fnStringToCss( column.sWidth );
			}
		}
	
		// If there is default sorting required - let's do it. The sort function
		// will do the drawing for us. Otherwise we draw the table regardless of the
		// Ajax source - this allows the table to look initialised for Ajax sourcing
		// data (show 'loading' message possibly)
		_fnReDraw( settings );
	
		// Server-side processing init complete is done by _fnAjaxUpdateDraw
		var dataSrc = _fnDataSource( settings );
		if ( dataSrc != 'ssp' ) {
			// if there is an ajax source load the data
			if ( dataSrc == 'ajax' ) {
				_fnBuildAjax( settings, [], function(json) {
					var aData = _fnAjaxDataSrc( settings, json );
	
					// Got the data - add it to the table
					for ( i=0 ; i<aData.length ; i++ ) {
						_fnAddData( settings, aData[i] );
					}
	
					// Reset the init display for cookie saving. We've already done
					// a filter, and therefore cleared it before. So we need to make
					// it appear 'fresh'
					settings.iInitDisplayStart = iAjaxStart;
	
					_fnReDraw( settings );
	
					_fnProcessingDisplay( settings, false );
					_fnInitComplete( settings, json );
				}, settings );
			}
			else {
				_fnProcessingDisplay( settings, false );
				_fnInitComplete( settings );
			}
		}
	}
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
	 *    with client-side processing (optional)
	 *  @memberof DataTable#oApi
	 */
	function _fnInitComplete ( settings, json )
	{
		settings._bInitComplete = true;
	
		// On an Ajax load we now have data and therefore want to apply the column
		// sizing
		if ( json ) {
			_fnAdjustColumnSizing( settings );
		}
	
		_fnCallbackFire( settings, 'aoInitComplete', 'init', [settings, json] );
	}
	
	
	function _fnLengthChange ( settings, val )
	{
		var len = parseInt( val, 10 );
		settings._iDisplayLength = len;
	
		_fnLengthOverflow( settings );
	
		// Fire length change event
		_fnCallbackFire( settings, null, 'length', [settings, len] );
	}
	
	
	/**
	 * Generate the node required for user display length changing
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Display length feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlLength ( settings )
	{
		var
			classes  = settings.oClasses,
			tableId  = settings.sTableId,
			menu     = settings.aLengthMenu,
			d2       = $.isArray( menu[0] ),
			lengths  = d2 ? menu[0] : menu,
			language = d2 ? menu[1] : menu;
	
		var select = $('<select/>', {
			'name':          tableId+'_length',
			'aria-controls': tableId,
			'class':         classes.sLengthSelect
		} );
	
		for ( var i=0, ien=lengths.length ; i<ien ; i++ ) {
			select[0][ i ] = new Option( language[i], lengths[i] );
		}
	
		var div = $('<div><label/></div>').addClass( classes.sLength );
		if ( ! settings.aanFeatures.l ) {
			div[0].id = tableId+'_length';
		}
	
		div.children().append(
			settings.oLanguage.sLengthMenu.replace( '_MENU_', select[0].outerHTML )
		);
	
		// Can't use `select` variable as user might provide their own and the
		// reference is broken by the use of outerHTML
		$('select', div)
			.val( settings._iDisplayLength )
			.bind( 'change.DT', function(e) {
				_fnLengthChange( settings, $(this).val() );
				_fnDraw( settings );
			} );
	
		// Update node value whenever anything changes the table's length
		$(settings.nTable).bind( 'length.dt.DT', function (e, s, len) {
			if ( settings === s ) {
				$('select', div).val( len );
			}
		} );
	
		return div[0];
	}
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Note that most of the paging logic is done in
	 * DataTable.ext.pager
	 */
	
	/**
	 * Generate the node required for default pagination
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Pagination feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlPaginate ( settings )
	{
		var
			type   = settings.sPaginationType,
			plugin = DataTable.ext.pager[ type ],
			modern = typeof plugin === 'function',
			redraw = function( settings ) {
				_fnDraw( settings );
			},
			node = $('<div/>').addClass( settings.oClasses.sPaging + type )[0],
			features = settings.aanFeatures;
	
		if ( ! modern ) {
			plugin.fnInit( settings, node, redraw );
		}
	
		/* Add a draw callback for the pagination on first instance, to update the paging display */
		if ( ! features.p )
		{
			node.id = settings.sTableId+'_paginate';
	
			settings.aoDrawCallback.push( {
				"fn": function( settings ) {
					if ( modern ) {
						var
							start      = settings._iDisplayStart,
							len        = settings._iDisplayLength,
							visRecords = settings.fnRecordsDisplay(),
							all        = len === -1,
							page = all ? 0 : Math.ceil( start / len ),
							pages = all ? 1 : Math.ceil( visRecords / len ),
							buttons = plugin(page, pages),
							i, ien;
	
						for ( i=0, ien=features.p.length ; i<ien ; i++ ) {
							_fnRenderer( settings, 'pageButton' )(
								settings, features.p[i], i, buttons, page, pages
							);
						}
					}
					else {
						plugin.fnUpdate( settings, redraw );
					}
				},
				"sName": "pagination"
			} );
		}
	
		return node;
	}
	
	
	/**
	 * Alter the display settings to change the page
	 *  @param {object} settings DataTables settings object
	 *  @param {string|int} action Paging action to take: "first", "previous",
	 *    "next" or "last" or page number to jump to (integer)
	 *  @param [bool] redraw Automatically draw the update or not
	 *  @returns {bool} true page has changed, false - no change
	 *  @memberof DataTable#oApi
	 */
	function _fnPageChange ( settings, action, redraw )
	{
		var
			start     = settings._iDisplayStart,
			len       = settings._iDisplayLength,
			records   = settings.fnRecordsDisplay();
	
		if ( records === 0 || len === -1 )
		{
			start = 0;
		}
		else if ( typeof action === "number" )
		{
			start = action * len;
	
			if ( start > records )
			{
				start = 0;
			}
		}
		else if ( action == "first" )
		{
			start = 0;
		}
		else if ( action == "previous" )
		{
			start = len >= 0 ?
				start - len :
				0;
	
			if ( start < 0 )
			{
			  start = 0;
			}
		}
		else if ( action == "next" )
		{
			if ( start + len < records )
			{
				start += len;
			}
		}
		else if ( action == "last" )
		{
			start = Math.floor( (records-1) / len) * len;
		}
		else
		{
			_fnLog( settings, 0, "Unknown paging action: "+action, 5 );
		}
	
		var changed = settings._iDisplayStart !== start;
		settings._iDisplayStart = start;
	
		if ( changed ) {
			_fnCallbackFire( settings, null, 'page', [settings] );
	
			if ( redraw ) {
				_fnDraw( settings );
			}
		}
	
		return changed;
	}
	
	
	
	/**
	 * Generate the node required for the processing node
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Processing element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlProcessing ( settings )
	{
		return $('<div/>', {
				'id': ! settings.aanFeatures.r ? settings.sTableId+'_processing' : null,
				'class': settings.oClasses.sProcessing
			} )
			.html( settings.oLanguage.sProcessing )
			.insertBefore( settings.nTable )[0];
	}
	
	
	/**
	 * Display or hide the processing indicator
	 *  @param {object} settings dataTables settings object
	 *  @param {bool} show Show the processing indicator (true) or not (false)
	 *  @memberof DataTable#oApi
	 */
	function _fnProcessingDisplay ( settings, show )
	{
		if ( settings.oFeatures.bProcessing ) {
			$(settings.aanFeatures.r).css( 'display', show ? 'block' : 'none' );
		}
	
		_fnCallbackFire( settings, null, 'processing', [settings, show] );
	}
	
	/**
	 * Add any control elements for the table - specifically scrolling
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Node to add to the DOM
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlTable ( settings )
	{
		var table = $(settings.nTable);
	
		// Add the ARIA grid role to the table
		table.attr( 'role', 'grid' );
	
		// Scrolling from here on in
		var scroll = settings.oScroll;
	
		if ( scroll.sX === '' && scroll.sY === '' ) {
			return settings.nTable;
		}
	
		var scrollX = scroll.sX;
		var scrollY = scroll.sY;
		var classes = settings.oClasses;
		var caption = table.children('caption');
		var captionSide = caption.length ? caption[0]._captionSide : null;
		var headerClone = $( table[0].cloneNode(false) );
		var footerClone = $( table[0].cloneNode(false) );
		var footer = table.children('tfoot');
		var _div = '<div/>';
		var size = function ( s ) {
			return !s ? null : _fnStringToCss( s );
		};
	
		// This is fairly messy, but with x scrolling enabled, if the table has a
		// width attribute, regardless of any width applied using the column width
		// options, the browser will shrink or grow the table as needed to fit into
		// that 100%. That would make the width options useless. So we remove it.
		// This is okay, under the assumption that width:100% is applied to the
		// table in CSS (it is in the default stylesheet) which will set the table
		// width as appropriate (the attribute and css behave differently...)
		if ( scroll.sX && table.attr('width') === '100%' ) {
			table.removeAttr('width');
		}
	
		if ( ! footer.length ) {
			footer = null;
		}
	
		/*
		 * The HTML structure that we want to generate in this function is:
		 *  div - scroller
		 *    div - scroll head
		 *      div - scroll head inner
		 *        table - scroll head table
		 *          thead - thead
		 *    div - scroll body
		 *      table - table (master table)
		 *        thead - thead clone for sizing
		 *        tbody - tbody
		 *    div - scroll foot
		 *      div - scroll foot inner
		 *        table - scroll foot table
		 *          tfoot - tfoot
		 */
		var scroller = $( _div, { 'class': classes.sScrollWrapper } )
			.append(
				$(_div, { 'class': classes.sScrollHead } )
					.css( {
						overflow: 'hidden',
						position: 'relative',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollHeadInner } )
							.css( {
								'box-sizing': 'content-box',
								width: scroll.sXInner || '100%'
							} )
							.append(
								headerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append( captionSide === 'top' ? caption : null )
									.append(
										table.children('thead')
									)
							)
					)
			)
			.append(
				$(_div, { 'class': classes.sScrollBody } )
					.css( {
						overflow: 'auto',
						height: size( scrollY ),
						width: size( scrollX )
					} )
					.append( table )
			);
	
		if ( footer ) {
			scroller.append(
				$(_div, { 'class': classes.sScrollFoot } )
					.css( {
						overflow: 'hidden',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollFootInner } )
							.append(
								footerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append( captionSide === 'bottom' ? caption : null )
									.append(
										table.children('tfoot')
									)
							)
					)
			);
		}
	
		var children = scroller.children();
		var scrollHead = children[0];
		var scrollBody = children[1];
		var scrollFoot = footer ? children[2] : null;
	
		// When the body is scrolled, then we also want to scroll the headers
		if ( scrollX ) {
			$(scrollBody).scroll( function (e) {
				var scrollLeft = this.scrollLeft;
	
				scrollHead.scrollLeft = scrollLeft;
	
				if ( footer ) {
					scrollFoot.scrollLeft = scrollLeft;
				}
			} );
		}
	
		settings.nScrollHead = scrollHead;
		settings.nScrollBody = scrollBody;
		settings.nScrollFoot = scrollFoot;
	
		// On redraw - align columns
		settings.aoDrawCallback.push( {
			"fn": _fnScrollDraw,
			"sName": "scrolling"
		} );
	
		return scroller[0];
	}
	
	
	
	/**
	 * Update the header, footer and body tables for resizing - i.e. column
	 * alignment.
	 *
	 * Welcome to the most horrible function DataTables. The process that this
	 * function follows is basically:
	 *   1. Re-create the table inside the scrolling div
	 *   2. Take live measurements from the DOM
	 *   3. Apply the measurements to align the columns
	 *   4. Clean up
	 *
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnScrollDraw ( settings )
	{
		// Given that this is such a monster function, a lot of variables are use
		// to try and keep the minimised size as small as possible
		var
			scroll         = settings.oScroll,
			scrollX        = scroll.sX,
			scrollXInner   = scroll.sXInner,
			scrollY        = scroll.sY,
			barWidth       = scroll.iBarWidth,
			divHeader      = $(settings.nScrollHead),
			divHeaderStyle = divHeader[0].style,
			divHeaderInner = divHeader.children('div'),
			divHeaderInnerStyle = divHeaderInner[0].style,
			divHeaderTable = divHeaderInner.children('table'),
			divBodyEl      = settings.nScrollBody,
			divBody        = $(divBodyEl),
			divBodyStyle   = divBodyEl.style,
			divFooter      = $(settings.nScrollFoot),
			divFooterInner = divFooter.children('div'),
			divFooterTable = divFooterInner.children('table'),
			header         = $(settings.nTHead),
			table          = $(settings.nTable),
			tableEl        = table[0],
			tableStyle     = tableEl.style,
			footer         = settings.nTFoot ? $(settings.nTFoot) : null,
			browser        = settings.oBrowser,
			ie67           = browser.bScrollOversize,
			headerTrgEls, footerTrgEls,
			headerSrcEls, footerSrcEls,
			headerCopy, footerCopy,
			headerWidths=[], footerWidths=[],
			headerContent=[],
			idx, correction, sanityWidth,
			zeroOut = function(nSizer) {
				var style = nSizer.style;
				style.paddingTop = "0";
				style.paddingBottom = "0";
				style.borderTopWidth = "0";
				style.borderBottomWidth = "0";
				style.height = 0;
			};
	
		/*
		 * 1. Re-create the table inside the scrolling div
		 */
	
		// Remove the old minimised thead and tfoot elements in the inner table
		table.children('thead, tfoot').remove();
	
		// Clone the current header and footer elements and then place it into the inner table
		headerCopy = header.clone().prependTo( table );
		headerTrgEls = header.find('tr'); // original header is in its own table
		headerSrcEls = headerCopy.find('tr');
		headerCopy.find('th, td').removeAttr('tabindex');
	
		if ( footer ) {
			footerCopy = footer.clone().prependTo( table );
			footerTrgEls = footer.find('tr'); // the original tfoot is in its own table and must be sized
			footerSrcEls = footerCopy.find('tr');
		}
	
	
		/*
		 * 2. Take live measurements from the DOM - do not alter the DOM itself!
		 */
	
		// Remove old sizing and apply the calculated column widths
		// Get the unique column headers in the newly created (cloned) header. We want to apply the
		// calculated sizes to this header
		if ( ! scrollX )
		{
			divBodyStyle.width = '100%';
			divHeader[0].style.width = '100%';
		}
	
		$.each( _fnGetUniqueThs( settings, headerCopy ), function ( i, el ) {
			idx = _fnVisibleToColumnIndex( settings, i );
			el.style.width = settings.aoColumns[idx].sWidth;
		} );
	
		if ( footer ) {
			_fnApplyToChildren( function(n) {
				n.style.width = "";
			}, footerSrcEls );
		}
	
		// If scroll collapse is enabled, when we put the headers back into the body for sizing, we
		// will end up forcing the scrollbar to appear, making our measurements wrong for when we
		// then hide it (end of this function), so add the header height to the body scroller.
		if ( scroll.bCollapse && scrollY !== "" ) {
			divBodyStyle.height = (divBody[0].offsetHeight + header[0].offsetHeight)+"px";
		}
	
		// Size the table as a whole
		sanityWidth = table.outerWidth();
		if ( scrollX === "" ) {
			// No x scrolling
			tableStyle.width = "100%";
	
			// IE7 will make the width of the table when 100% include the scrollbar
			// - which is shouldn't. When there is a scrollbar we need to take this
			// into account.
			if ( ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( table.outerWidth() - barWidth);
			}
		}
		else
		{
			// x scrolling
			if ( scrollXInner !== "" ) {
				// x scroll inner has been given - use it
				tableStyle.width = _fnStringToCss(scrollXInner);
			}
			else if ( sanityWidth == divBody.width() && divBody.height() < table.height() ) {
				// There is y-scrolling - try to take account of the y scroll bar
				tableStyle.width = _fnStringToCss( sanityWidth-barWidth );
				if ( table.outerWidth() > sanityWidth-barWidth ) {
					// Not possible to take account of it
					tableStyle.width = _fnStringToCss( sanityWidth );
				}
			}
			else {
				// When all else fails
				tableStyle.width = _fnStringToCss( sanityWidth );
			}
		}
	
		// Recalculate the sanity width - now that we've applied the required width,
		// before it was a temporary variable. This is required because the column
		// width calculation is done before this table DOM is created.
		sanityWidth = table.outerWidth();
	
		// Hidden header should have zero height, so remove padding and borders. Then
		// set the width based on the real headers
	
		// Apply all styles in one pass
		_fnApplyToChildren( zeroOut, headerSrcEls );
	
		// Read all widths in next pass
		_fnApplyToChildren( function(nSizer) {
			headerContent.push( nSizer.innerHTML );
			headerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
		}, headerSrcEls );
	
		// Apply all widths in final pass
		_fnApplyToChildren( function(nToSize, i) {
			nToSize.style.width = headerWidths[i];
		}, headerTrgEls );
	
		$(headerSrcEls).height(0);
	
		/* Same again with the footer if we have one */
		if ( footer )
		{
			_fnApplyToChildren( zeroOut, footerSrcEls );
	
			_fnApplyToChildren( function(nSizer) {
				footerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
			}, footerSrcEls );
	
			_fnApplyToChildren( function(nToSize, i) {
				nToSize.style.width = footerWidths[i];
			}, footerTrgEls );
	
			$(footerSrcEls).height(0);
		}
	
	
		/*
		 * 3. Apply the measurements
		 */
	
		// "Hide" the header and footer that we used for the sizing. We need to keep
		// the content of the cell so that the width applied to the header and body
		// both match, but we want to hide it completely. We want to also fix their
		// width to what they currently are
		_fnApplyToChildren( function(nSizer, i) {
			nSizer.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+headerContent[i]+'</div>';
			nSizer.style.width = headerWidths[i];
		}, headerSrcEls );
	
		if ( footer )
		{
			_fnApplyToChildren( function(nSizer, i) {
				nSizer.innerHTML = "";
				nSizer.style.width = footerWidths[i];
			}, footerSrcEls );
		}
	
		// Sanity check that the table is of a sensible width. If not then we are going to get
		// misalignment - try to prevent this by not allowing the table to shrink below its min width
		if ( table.outerWidth() < sanityWidth )
		{
			// The min width depends upon if we have a vertical scrollbar visible or not */
			correction = ((divBodyEl.scrollHeight > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")) ?
					sanityWidth+barWidth :
					sanityWidth;
	
			// IE6/7 are a law unto themselves...
			if ( ie67 && (divBodyEl.scrollHeight >
				divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( correction-barWidth );
			}
	
			// And give the user a warning that we've stopped the table getting too small
			if ( scrollX === "" || scrollXInner !== "" ) {
				_fnLog( settings, 1, 'Possible column misalignment', 6 );
			}
		}
		else
		{
			correction = '100%';
		}
	
		// Apply to the container elements
		divBodyStyle.width = _fnStringToCss( correction );
		divHeaderStyle.width = _fnStringToCss( correction );
	
		if ( footer ) {
			settings.nScrollFoot.style.width = _fnStringToCss( correction );
		}
	
	
		/*
		 * 4. Clean up
		 */
		if ( ! scrollY ) {
			/* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
			 * the scrollbar height from the visible display, rather than adding it on. We need to
			 * set the height in order to sort this. Don't want to do it in any other browsers.
			 */
			if ( ie67 ) {
				divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+barWidth );
			}
		}
	
		if ( scrollY && scroll.bCollapse ) {
			divBodyStyle.height = _fnStringToCss( scrollY );
	
			var iExtra = (scrollX && tableEl.offsetWidth > divBodyEl.offsetWidth) ?
				barWidth :
				0;
	
			if ( tableEl.offsetHeight < divBodyEl.offsetHeight ) {
				divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+iExtra );
			}
		}
	
		/* Finally set the width's of the header and footer tables */
		var iOuterWidth = table.outerWidth();
		divHeaderTable[0].style.width = _fnStringToCss( iOuterWidth );
		divHeaderInnerStyle.width = _fnStringToCss( iOuterWidth );
	
		// Figure out if there are scrollbar present - if so then we need a the header and footer to
		// provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
		var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == "scroll";
		var padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right' );
		divHeaderInnerStyle[ padding ] = bScrolling ? barWidth+"px" : "0px";
	
		if ( footer ) {
			divFooterTable[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style[padding] = bScrolling ? barWidth+"px" : "0px";
		}
	
		/* Adjust the position of the header in case we loose the y-scrollbar */
		divBody.scroll();
	
		// If sorting or filtering has occurred, jump the scrolling back to the top
		// only if we aren't holding the position
		if ( (settings.bSorted || settings.bFiltered) && ! settings._drawHold ) {
			divBodyEl.scrollTop = 0;
		}
	}
	
	
	
	/**
	 * Apply a given function to the display child nodes of an element array (typically
	 * TD children of TR rows
	 *  @param {function} fn Method to apply to the objects
	 *  @param array {nodes} an1 List of elements to look through for display children
	 *  @param array {nodes} an2 Another list (identical structure to the first) - optional
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyToChildren( fn, an1, an2 )
	{
		var index=0, i=0, iLen=an1.length;
		var nNode1, nNode2;
	
		while ( i < iLen ) {
			nNode1 = an1[i].firstChild;
			nNode2 = an2 ? an2[i].firstChild : null;
	
			while ( nNode1 ) {
				if ( nNode1.nodeType === 1 ) {
					if ( an2 ) {
						fn( nNode1, nNode2, index );
					}
					else {
						fn( nNode1, index );
					}
	
					index++;
				}
	
				nNode1 = nNode1.nextSibling;
				nNode2 = an2 ? nNode2.nextSibling : null;
			}
	
			i++;
		}
	}
	
	
	
	var __re_html_remove = /<.*?>/g;
	
	
	/**
	 * Calculate the width of columns for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnCalculateColumnWidths ( oSettings )
	{
		var
			table = oSettings.nTable,
			columns = oSettings.aoColumns,
			scroll = oSettings.oScroll,
			scrollY = scroll.sY,
			scrollX = scroll.sX,
			scrollXInner = scroll.sXInner,
			columnCount = columns.length,
			visibleColumns = _fnGetColumns( oSettings, 'bVisible' ),
			headerCells = $('th', oSettings.nTHead),
			tableWidthAttr = table.getAttribute('width'),
			tableContainer = table.parentNode,
			userInputs = false,
			i, column, columnIdx, width, outerWidth;
	
		/* Convert any user input sizes into pixel sizes */
		for ( i=0 ; i<visibleColumns.length ; i++ ) {
			column = columns[ visibleColumns[i] ];
	
			if ( column.sWidth !== null ) {
				column.sWidth = _fnConvertToWidth( column.sWidthOrig, tableContainer );
	
				userInputs = true;
			}
		}
	
		/* If the number of columns in the DOM equals the number that we have to
		 * process in DataTables, then we can use the offsets that are created by
		 * the web- browser. No custom sizes can be set in order for this to happen,
		 * nor scrolling used
		 */
		if ( ! userInputs && ! scrollX && ! scrollY &&
		    columnCount == _fnVisbleColumns( oSettings ) &&
			columnCount == headerCells.length
		) {
			for ( i=0 ; i<columnCount ; i++ ) {
				columns[i].sWidth = _fnStringToCss( headerCells.eq(i).width() );
			}
		}
		else
		{
			// Otherwise construct a single row table with the widest node in the
			// data, assign any user defined widths, then insert it into the DOM and
			// allow the browser to do all the hard work of calculating table widths
			var tmpTable = $(table).clone() // don't use cloneNode - IE8 will remove events on the main table
				.empty()
				.css( 'visibility', 'hidden' )
				.removeAttr( 'id' )
				.append( $(oSettings.nTHead).clone( false ) )
				.append( $(oSettings.nTFoot).clone( false ) )
				.append( $('<tbody><tr/></tbody>') );
	
			// Remove any assigned widths from the footer (from scrolling)
			tmpTable.find('tfoot th, tfoot td').css('width', '');
	
			var tr = tmpTable.find( 'tbody tr' );
	
			// Apply custom sizing to the cloned header
			headerCells = _fnGetUniqueThs( oSettings, tmpTable.find('thead')[0] );
	
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				column = columns[ visibleColumns[i] ];
	
				headerCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ?
					_fnStringToCss( column.sWidthOrig ) :
					'';
			}
	
			// Find the widest cell for each column and put it into the table
			if ( oSettings.aoData.length ) {
				for ( i=0 ; i<visibleColumns.length ; i++ ) {
					columnIdx = visibleColumns[i];
					column = columns[ columnIdx ];
	
					$( _fnGetWidestNode( oSettings, columnIdx ) )
						.clone( false )
						.append( column.sContentPadding )
						.appendTo( tr );
				}
			}
	
			// Table has been built, attach to the document so we can work with it
			tmpTable.appendTo( tableContainer );
	
			// When scrolling (X or Y) we want to set the width of the table as 
			// appropriate. However, when not scrolling leave the table width as it
			// is. This results in slightly different, but I think correct behaviour
			if ( scrollX && scrollXInner ) {
				tmpTable.width( scrollXInner );
			}
			else if ( scrollX ) {
				tmpTable.css( 'width', 'auto' );
	
				if ( tmpTable.width() < tableContainer.offsetWidth ) {
					tmpTable.width( tableContainer.offsetWidth );
				}
			}
			else if ( scrollY ) {
				tmpTable.width( tableContainer.offsetWidth );
			}
			else if ( tableWidthAttr ) {
				tmpTable.width( tableWidthAttr );
			}
	
			// Take into account the y scrollbar
			_fnScrollingWidthAdjust( oSettings, tmpTable[0] );
	
			// Browsers need a bit of a hand when a width is assigned to any columns
			// when x-scrolling as they tend to collapse the table to the min-width,
			// even if we sent the column widths. So we need to keep track of what
			// the table width should be by summing the user given values, and the
			// automatic values
			if ( scrollX )
			{
				var total = 0;
	
				for ( i=0 ; i<visibleColumns.length ; i++ ) {
					column = columns[ visibleColumns[i] ];
					outerWidth = $(headerCells[i]).outerWidth();
	
					total += column.sWidthOrig === null ?
						outerWidth :
						parseInt( column.sWidth, 10 ) + outerWidth - $(headerCells[i]).width();
				}
	
				tmpTable.width( _fnStringToCss( total ) );
				table.style.width = _fnStringToCss( total );
			}
	
			// Get the width of each column in the constructed table
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				column = columns[ visibleColumns[i] ];
				width = $(headerCells[i]).width();
	
				if ( width ) {
					column.sWidth = _fnStringToCss( width );
				}
			}
	
			table.style.width = _fnStringToCss( tmpTable.css('width') );
	
			// Finished with the table - ditch it
			tmpTable.remove();
		}
	
		// If there is a width attr, we want to attach an event listener which
		// allows the table sizing to automatically adjust when the window is
		// resized. Use the width attr rather than CSS, since we can't know if the
		// CSS is a relative value or absolute - DOM read is always px.
		if ( tableWidthAttr ) {
			table.style.width = _fnStringToCss( tableWidthAttr );
		}
	
		if ( (tableWidthAttr || scrollX) && ! oSettings._reszEvt ) {
			$(window).bind('resize.DT-'+oSettings.sInstance, _fnThrottle( function () {
				_fnAdjustColumnSizing( oSettings );
			} ) );
	
			oSettings._reszEvt = true;
		}
	}
	
	
	/**
	 * Throttle the calls to a function. Arguments and context are maintained for
	 * the throttled function
	 *  @param {function} fn Function to be called
	 *  @param {int} [freq=200] call frequency in mS
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#oApi
	 */
	function _fnThrottle( fn, freq ) {
		var
			frequency = freq !== undefined ? freq : 200,
			last,
			timer;
	
		return function () {
			var
				that = this,
				now  = +new Date(),
				args = arguments;
	
			if ( last && now < last + frequency ) {
				clearTimeout( timer );
	
				timer = setTimeout( function () {
					last = undefined;
					fn.apply( that, args );
				}, frequency );
			}
			else if ( last ) {
				last = now;
				fn.apply( that, args );
			}
			else {
				last = now;
			}
		};
	}
	
	
	/**
	 * Convert a CSS unit width to pixels (e.g. 2em)
	 *  @param {string} width width to be converted
	 *  @param {node} parent parent to get the with for (required for relative widths) - optional
	 *  @returns {int} width in pixels
	 *  @memberof DataTable#oApi
	 */
	function _fnConvertToWidth ( width, parent )
	{
		if ( ! width ) {
			return 0;
		}
	
		var n = $('<div/>')
			.css( 'width', _fnStringToCss( width ) )
			.appendTo( parent || document.body );
	
		var val = n[0].offsetWidth;
		n.remove();
	
		return val;
	}
	
	
	/**
	 * Adjust a table's width to take account of vertical scroll bar
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} n table node
	 *  @memberof DataTable#oApi
	 */
	
	function _fnScrollingWidthAdjust ( settings, n )
	{
		var scroll = settings.oScroll;
	
		if ( scroll.sX || scroll.sY ) {
			// When y-scrolling only, we want to remove the width of the scroll bar
			// so the table + scroll bar will fit into the area available, otherwise
			// we fix the table at its current size with no adjustment
			var correction = ! scroll.sX ? scroll.iBarWidth : 0;
			n.style.width = _fnStringToCss( $(n).outerWidth() - correction );
		}
	}
	
	
	/**
	 * Get the widest node
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {node} widest table node
	 *  @memberof DataTable#oApi
	 */
	function _fnGetWidestNode( settings, colIdx )
	{
		var idx = _fnGetMaxLenString( settings, colIdx );
		if ( idx < 0 ) {
			return null;
		}
	
		var data = settings.aoData[ idx ];
		return ! data.nTr ? // Might not have been created when deferred rendering
			$('<td/>').html( _fnGetCellData( settings, idx, colIdx, 'display' ) )[0] :
			data.anCells[ colIdx ];
	}
	
	
	/**
	 * Get the maximum strlen for each data column
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {string} max string length for each column
	 *  @memberof DataTable#oApi
	 */
	function _fnGetMaxLenString( settings, colIdx )
	{
		var s, max=-1, maxIdx = -1;
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			s = _fnGetCellData( settings, i, colIdx, 'display' )+'';
			s = s.replace( __re_html_remove, '' );
	
			if ( s.length > max ) {
				max = s.length;
				maxIdx = i;
			}
		}
	
		return maxIdx;
	}
	
	
	/**
	 * Append a CSS unit (only if required) to a string
	 *  @param {string} value to css-ify
	 *  @returns {string} value with css unit
	 *  @memberof DataTable#oApi
	 */
	function _fnStringToCss( s )
	{
		if ( s === null ) {
			return '0px';
		}
	
		if ( typeof s == 'number' ) {
			return s < 0 ?
				'0px' :
				s+'px';
		}
	
		// Check it has a unit character already
		return s.match(/\d$/) ?
			s+'px' :
			s;
	}
	
	
	/**
	 * Get the width of a scroll bar in this browser being used
	 *  @returns {int} width in pixels
	 *  @memberof DataTable#oApi
	 */
	function _fnScrollBarWidth ()
	{
		// On first run a static variable is set, since this is only needed once.
		// Subsequent runs will just use the previously calculated value
		if ( ! DataTable.__scrollbarWidth ) {
			var inner = $('<p/>').css( {
				width: '100%',
				height: 200,
				padding: 0
			} )[0];
	
			var outer = $('<div/>')
				.css( {
					position: 'absolute',
					top: 0,
					left: 0,
					width: 200,
					height: 150,
					padding: 0,
					overflow: 'hidden',
					visibility: 'hidden'
				} )
				.append( inner )
				.appendTo( 'body' );
	
			var w1 = inner.offsetWidth;
			outer.css( 'overflow', 'scroll' );
			var w2 = inner.offsetWidth;
	
			if ( w1 === w2 ) {
				w2 = outer[0].clientWidth;
			}
	
			outer.remove();
	
			DataTable.__scrollbarWidth = w1 - w2;
		}
	
		return DataTable.__scrollbarWidth;
	}
	
	
	
	function _fnSortFlatten ( settings )
	{
		var
			i, iLen, k, kLen,
			aSort = [],
			aiOrig = [],
			aoColumns = settings.aoColumns,
			aDataSort, iCol, sType, srcCol,
			fixed = settings.aaSortingFixed,
			fixedObj = $.isPlainObject( fixed ),
			nestedSort = [],
			add = function ( a ) {
				if ( a.length && ! $.isArray( a[0] ) ) {
					// 1D array
					nestedSort.push( a );
				}
				else {
					// 2D array
					nestedSort.push.apply( nestedSort, a );
				}
			};
	
		// Build the sort array, with pre-fix and post-fix options if they have been
		// specified
		if ( $.isArray( fixed ) ) {
			add( fixed );
		}
	
		if ( fixedObj && fixed.pre ) {
			add( fixed.pre );
		}
	
		add( settings.aaSorting );
	
		if (fixedObj && fixed.post ) {
			add( fixed.post );
		}
	
		for ( i=0 ; i<nestedSort.length ; i++ )
		{
			srcCol = nestedSort[i][0];
			aDataSort = aoColumns[ srcCol ].aDataSort;
	
			for ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )
			{
				iCol = aDataSort[k];
				sType = aoColumns[ iCol ].sType || 'string';
	
				if ( nestedSort[i]._idx === undefined ) {
					nestedSort[i]._idx = $.inArray( nestedSort[i][1], aoColumns[iCol].asSorting );
				}
	
				aSort.push( {
					src:       srcCol,
					col:       iCol,
					dir:       nestedSort[i][1],
					index:     nestedSort[i]._idx,
					type:      sType,
					formatter: DataTable.ext.type.order[ sType+"-pre" ]
				} );
			}
		}
	
		return aSort;
	}
	
	/**
	 * Change the order of the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 *  @todo This really needs split up!
	 */
	function _fnSort ( oSettings )
	{
		var
			i, ien, iLen, j, jLen, k, kLen,
			sDataType, nTh,
			aiOrig = [],
			oExtSort = DataTable.ext.type.order,
			aoData = oSettings.aoData,
			aoColumns = oSettings.aoColumns,
			aDataSort, data, iCol, sType, oSort,
			formatters = 0,
			sortCol,
			displayMaster = oSettings.aiDisplayMaster,
			aSort;
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo Can this be moved into a 'data-ready' handler which is called when
		//   data is going to be used in the table?
		_fnColumnTypes( oSettings );
	
		aSort = _fnSortFlatten( oSettings );
	
		for ( i=0, ien=aSort.length ; i<ien ; i++ ) {
			sortCol = aSort[i];
	
			// Track if we can use the fast sort algorithm
			if ( sortCol.formatter ) {
				formatters++;
			}
	
			// Load the data needed for the sort, for each cell
			_fnSortData( oSettings, sortCol.col );
		}
	
		/* No sorting required if server-side or no sorting array */
		if ( _fnDataSource( oSettings ) != 'ssp' && aSort.length !== 0 )
		{
			// Create a value - key array of the current row positions such that we can use their
			// current position during the sort, if values match, in order to perform stable sorting
			for ( i=0, iLen=displayMaster.length ; i<iLen ; i++ ) {
				aiOrig[ displayMaster[i] ] = i;
			}
	
			/* Do the sort - here we want multi-column sorting based on a given data source (column)
			 * and sorting function (from oSort) in a certain direction. It's reasonably complex to
			 * follow on it's own, but this is what we want (example two column sorting):
			 *  fnLocalSorting = function(a,b){
			 *    var iTest;
			 *    iTest = oSort['string-asc']('data11', 'data12');
			 *      if (iTest !== 0)
			 *        return iTest;
			 *    iTest = oSort['numeric-desc']('data21', 'data22');
			 *    if (iTest !== 0)
			 *      return iTest;
			 *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
			 *  }
			 * Basically we have a test for each sorting column, if the data in that column is equal,
			 * test the next column. If all columns match, then we use a numeric sort on the row
			 * positions in the original data array to provide a stable sort.
			 *
			 * Note - I know it seems excessive to have two sorting methods, but the first is around
			 * 15% faster, so the second is only maintained for backwards compatibility with sorting
			 * methods which do not have a pre-sort formatting function.
			 */
			if ( formatters === aSort.length ) {
				// All sort types have formatting functions
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, test, sort,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						test = x<y ? -1 : x>y ? 1 : 0;
						if ( test !== 0 ) {
							return sort.dir === 'asc' ? test : -test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
			else {
				// Depreciated - remove in 1.11 (providing a plug-in option)
				// Not all sort types have formatting methods, so we have to call their sorting
				// methods.
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, l, test, sort, fn,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						fn = oExtSort[ sort.type+"-"+sort.dir ] || oExtSort[ "string-"+sort.dir ];
						test = fn( x, y );
						if ( test !== 0 ) {
							return test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
		}
	
		/* Tell the draw function that we have sorted the data */
		oSettings.bSorted = true;
	}
	
	
	function _fnSortAria ( settings )
	{
		var label;
		var nextSort;
		var columns = settings.aoColumns;
		var aSort = _fnSortFlatten( settings );
		var oAria = settings.oLanguage.oAria;
	
		// ARIA attributes - need to loop all columns, to update all (removing old
		// attributes as needed)
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			var col = columns[i];
			var asSorting = col.asSorting;
			var sTitle = col.sTitle.replace( /<.*?>/g, "" );
			var th = col.nTh;
	
			// IE7 is throwing an error when setting these properties with jQuery's
			// attr() and removeAttr() methods...
			th.removeAttribute('aria-sort');
	
			/* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
			if ( col.bSortable ) {
				if ( aSort.length > 0 && aSort[0].col == i ) {
					th.setAttribute('aria-sort', aSort[0].dir=="asc" ? "ascending" : "descending" );
					nextSort = asSorting[ aSort[0].index+1 ] || asSorting[0];
				}
				else {
					nextSort = asSorting[0];
				}
	
				label = sTitle + ( nextSort === "asc" ?
					oAria.sSortAscending :
					oAria.sSortDescending
				);
			}
			else {
				label = sTitle;
			}
	
			th.setAttribute('aria-label', label);
		}
	}
	
	
	/**
	 * Function to run on user sort request
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {boolean} [append=false] Append the requested sort to the existing
	 *    sort if true (i.e. multi-column sort)
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortListener ( settings, colIdx, append, callback )
	{
		var col = settings.aoColumns[ colIdx ];
		var sorting = settings.aaSorting;
		var asSorting = col.asSorting;
		var nextSortIdx;
		var next = function ( a, overflow ) {
			var idx = a._idx;
			if ( idx === undefined ) {
				idx = $.inArray( a[1], asSorting );
			}
	
			return idx+1 < asSorting.length ?
				idx+1 :
				overflow ?
					null :
					0;
		};
	
		// Convert to 2D array if needed
		if ( typeof sorting[0] === 'number' ) {
			sorting = settings.aaSorting = [ sorting ];
		}
	
		// If appending the sort then we are multi-column sorting
		if ( append && settings.oFeatures.bSortMulti ) {
			// Are we already doing some kind of sort on this column?
			var sortIdx = $.inArray( colIdx, _pluck(sorting, '0') );
	
			if ( sortIdx !== -1 ) {
				// Yes, modify the sort
				nextSortIdx = next( sorting[sortIdx], true );
	
				if ( nextSortIdx === null ) {
					sorting.splice( sortIdx, 1 );
				}
				else {
					sorting[sortIdx][1] = asSorting[ nextSortIdx ];
					sorting[sortIdx]._idx = nextSortIdx;
				}
			}
			else {
				// No sort on this column yet
				sorting.push( [ colIdx, asSorting[0], 0 ] );
				sorting[sorting.length-1]._idx = 0;
			}
		}
		else if ( sorting.length && sorting[0][0] == colIdx ) {
			// Single column - already sorting on this column, modify the sort
			nextSortIdx = next( sorting[0] );
	
			sorting.length = 1;
			sorting[0][1] = asSorting[ nextSortIdx ];
			sorting[0]._idx = nextSortIdx;
		}
		else {
			// Single column - sort only on this column
			sorting.length = 0;
			sorting.push( [ colIdx, asSorting[0] ] );
			sorting[0]._idx = 0;
		}
	
		// Run the sort by calling a full redraw
		_fnReDraw( settings );
	
		// callback used for async user interaction
		if ( typeof callback == 'function' ) {
			callback( settings );
		}
	}
	
	
	/**
	 * Attach a sort handler (click) to a node
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortAttachListener ( settings, attachTo, colIdx, callback )
	{
		var col = settings.aoColumns[ colIdx ];
	
		_fnBindAction( attachTo, {}, function (e) {
			/* If the column is not sortable - don't to anything */
			if ( col.bSortable === false ) {
				return;
			}
	
			// If processing is enabled use a timeout to allow the processing
			// display to be shown - otherwise to it synchronously
			if ( settings.oFeatures.bProcessing ) {
				_fnProcessingDisplay( settings, true );
	
				setTimeout( function() {
					_fnSortListener( settings, colIdx, e.shiftKey, callback );
	
					// In server-side processing, the draw callback will remove the
					// processing display
					if ( _fnDataSource( settings ) !== 'ssp' ) {
						_fnProcessingDisplay( settings, false );
					}
				}, 0 );
			}
			else {
				_fnSortListener( settings, colIdx, e.shiftKey, callback );
			}
		} );
	}
	
	
	/**
	 * Set the sorting classes on table's body, Note: it is safe to call this function
	 * when bSort and bSortClasses are false
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSortingClasses( settings )
	{
		var oldSort = settings.aLastSort;
		var sortClass = settings.oClasses.sSortColumn;
		var sort = _fnSortFlatten( settings );
		var features = settings.oFeatures;
		var i, ien, colIdx;
	
		if ( features.bSort && features.bSortClasses ) {
			// Remove old sorting classes
			for ( i=0, ien=oldSort.length ; i<ien ; i++ ) {
				colIdx = oldSort[i].src;
	
				// Remove column sorting
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.removeClass( sortClass + (i<2 ? i+1 : 3) );
			}
	
			// Add new column sorting
			for ( i=0, ien=sort.length ; i<ien ; i++ ) {
				colIdx = sort[i].src;
	
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.addClass( sortClass + (i<2 ? i+1 : 3) );
			}
		}
	
		settings.aLastSort = sort;
	}
	
	
	// Get the data to sort a column, be it from cache, fresh (populating the
	// cache), or from a sort formatter
	function _fnSortData( settings, idx )
	{
		// Custom sorting function - provided by the sort data type
		var column = settings.aoColumns[ idx ];
		var customSort = DataTable.ext.order[ column.sSortDataType ];
		var customData;
	
		if ( customSort ) {
			customData = customSort.call( settings.oInstance, settings, idx,
				_fnColumnIndexToVisible( settings, idx )
			);
		}
	
		// Use / populate cache
		var row, cellData;
		var formatter = DataTable.ext.type.order[ column.sType+"-pre" ];
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aSortData ) {
				row._aSortData = [];
			}
	
			if ( ! row._aSortData[idx] || customSort ) {
				cellData = customSort ?
					customData[i] : // If there was a custom sort function, use data from there
					_fnGetCellData( settings, i, idx, 'sort' );
	
				row._aSortData[ idx ] = formatter ?
					formatter( cellData ) :
					cellData;
			}
		}
	}
	
	
	
	/**
	 * Save the state of a table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSaveState ( settings )
	{
		if ( !settings.oFeatures.bStateSave || settings.bDestroying )
		{
			return;
		}
	
		/* Store the interesting variables */
		var state = {
			time:    +new Date(),
			start:   settings._iDisplayStart,
			length:  settings._iDisplayLength,
			order:   $.extend( true, [], settings.aaSorting ),
			search:  _fnSearchToCamel( settings.oPreviousSearch ),
			columns: $.map( settings.aoColumns, function ( col, i ) {
				return {
					visible: col.bVisible,
					search: _fnSearchToCamel( settings.aoPreSearchCols[i] )
				};
			} )
		};
	
		_fnCallbackFire( settings, "aoStateSaveParams", 'stateSaveParams', [settings, state] );
	
		settings.oSavedState = state;
		settings.fnStateSaveCallback.call( settings.oInstance, settings, state );
	}
	
	
	/**
	 * Attempt to load a saved table state
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oInit DataTables init object so we can override settings
	 *  @memberof DataTable#oApi
	 */
	function _fnLoadState ( settings, oInit )
	{
		var i, ien;
		var columns = settings.aoColumns;
	
		if ( ! settings.oFeatures.bStateSave ) {
			return;
		}
	
		var state = settings.fnStateLoadCallback.call( settings.oInstance, settings );
		if ( ! state || ! state.time ) {
			return;
		}
	
		/* Allow custom and plug-in manipulation functions to alter the saved data set and
		 * cancelling of loading by returning false
		 */
		var abStateLoad = _fnCallbackFire( settings, 'aoStateLoadParams', 'stateLoadParams', [settings, state] );
		if ( $.inArray( false, abStateLoad ) !== -1 ) {
			return;
		}
	
		/* Reject old data */
		var duration = settings.iStateDuration;
		if ( duration > 0 && state.time < +new Date() - (duration*1000) ) {
			return;
		}
	
		// Number of columns have changed - all bets are off, no restore of settings
		if ( columns.length !== state.columns.length ) {
			return;
		}
	
		// Store the saved state so it might be accessed at any time
		settings.oLoadedState = $.extend( true, {}, state );
	
		// Restore key features - todo - for 1.11 this needs to be done by
		// subscribed events
		settings._iDisplayStart    = state.start;
		settings.iInitDisplayStart = state.start;
		settings._iDisplayLength   = state.length;
		settings.aaSorting = [];
	
		// Order
		$.each( state.order, function ( i, col ) {
			settings.aaSorting.push( col[0] >= columns.length ?
				[ 0, col[1] ] :
				col
			);
		} );
	
		// Search
		$.extend( settings.oPreviousSearch, _fnSearchToHung( state.search ) );
	
		// Columns
		for ( i=0, ien=state.columns.length ; i<ien ; i++ ) {
			var col = state.columns[i];
	
			// Visibility
			columns[i].bVisible = col.visible;
	
			// Search
			$.extend( settings.aoPreSearchCols[i], _fnSearchToHung( col.search ) );
		}
	
		_fnCallbackFire( settings, 'aoStateLoaded', 'stateLoaded', [settings, state] );
	}
	
	
	/**
	 * Return the settings object for a particular table
	 *  @param {node} table table we are using as a dataTable
	 *  @returns {object} Settings object - or null if not found
	 *  @memberof DataTable#oApi
	 */
	function _fnSettingsFromNode ( table )
	{
		var settings = DataTable.settings;
		var idx = $.inArray( table, _pluck( settings, 'nTable' ) );
	
		return idx !== -1 ?
			settings[ idx ] :
			null;
	}
	
	
	/**
	 * Log an error message
	 *  @param {object} settings dataTables settings object
	 *  @param {int} level log error messages, or display them to the user
	 *  @param {string} msg error message
	 *  @param {int} tn Technical note id to get more information about the error.
	 *  @memberof DataTable#oApi
	 */
	function _fnLog( settings, level, msg, tn )
	{
		msg = 'DataTables warning: '+
			(settings!==null ? 'table id='+settings.sTableId+' - ' : '')+msg;
	
		if ( tn ) {
			msg += '. For more information about this error, please see '+
			'http://datatables.net/tn/'+tn;
		}
	
		if ( ! level  ) {
			// Backwards compatibility pre 1.10
			var ext = DataTable.ext;
			var type = ext.sErrMode || ext.errMode;
	
			if ( type == 'alert' ) {
				alert( msg );
			}
			else {
				throw new Error(msg);
			}
		}
		else if ( window.console && console.log ) {
			console.log( msg );
		}
	}
	
	
	/**
	 * See if a property is defined on one object, if so assign it to the other object
	 *  @param {object} ret target object
	 *  @param {object} src source object
	 *  @param {string} name property
	 *  @param {string} [mappedName] name to map too - optional, name used if not given
	 *  @memberof DataTable#oApi
	 */
	function _fnMap( ret, src, name, mappedName )
	{
		if ( $.isArray( name ) ) {
			$.each( name, function (i, val) {
				if ( $.isArray( val ) ) {
					_fnMap( ret, src, val[0], val[1] );
				}
				else {
					_fnMap( ret, src, val );
				}
			} );
	
			return;
		}
	
		if ( mappedName === undefined ) {
			mappedName = name;
		}
	
		if ( src[name] !== undefined ) {
			ret[mappedName] = src[name];
		}
	}
	
	
	/**
	 * Extend objects - very similar to jQuery.extend, but deep copy objects, and
	 * shallow copy arrays. The reason we need to do this, is that we don't want to
	 * deep copy array init values (such as aaSorting) since the dev wouldn't be
	 * able to override them, but we do want to deep copy arrays.
	 *  @param {object} out Object to extend
	 *  @param {object} extender Object from which the properties will be applied to
	 *      out
	 *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
	 *      independent copy with the exception of the `data` or `aaData` parameters
	 *      if they are present. This is so you can pass in a collection to
	 *      DataTables and have that used as your data source without breaking the
	 *      references
	 *  @returns {object} out Reference, just for convenience - out === the return.
	 *  @memberof DataTable#oApi
	 *  @todo This doesn't take account of arrays inside the deep copied objects.
	 */
	function _fnExtend( out, extender, breakRefs )
	{
		var val;
	
		for ( var prop in extender ) {
			if ( extender.hasOwnProperty(prop) ) {
				val = extender[prop];
	
				if ( $.isPlainObject( val ) ) {
					if ( ! $.isPlainObject( out[prop] ) ) {
						out[prop] = {};
					}
					$.extend( true, out[prop], val );
				}
				else if ( breakRefs && prop !== 'data' && prop !== 'aaData' && $.isArray(val) ) {
					out[prop] = val.slice();
				}
				else {
					out[prop] = val;
				}
			}
		}
	
		return out;
	}
	
	
	/**
	 * Bind an event handers to allow a click or return key to activate the callback.
	 * This is good for accessibility since a return on the keyboard will have the
	 * same effect as a click, if the element has focus.
	 *  @param {element} n Element to bind the action to
	 *  @param {object} oData Data object to pass to the triggered function
	 *  @param {function} fn Callback function for when the event is triggered
	 *  @memberof DataTable#oApi
	 */
	function _fnBindAction( n, oData, fn )
	{
		$(n)
			.bind( 'click.DT', oData, function (e) {
					n.blur(); // Remove focus outline for mouse users
					fn(e);
				} )
			.bind( 'keypress.DT', oData, function (e){
					if ( e.which === 13 ) {
						e.preventDefault();
						fn(e);
					}
				} )
			.bind( 'selectstart.DT', function () {
					/* Take the brutal approach to cancelling text selection */
					return false;
				} );
	}
	
	
	/**
	 * Register a callback function. Easily allows a callback function to be added to
	 * an array store of callback functions that can then all be called together.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sStore Name of the array storage for the callbacks in oSettings
	 *  @param {function} fn Function to be called back
	 *  @param {string} sName Identifying name for the callback (i.e. a label)
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackReg( oSettings, sStore, fn, sName )
	{
		if ( fn )
		{
			oSettings[sStore].push( {
				"fn": fn,
				"sName": sName
			} );
		}
	}
	
	
	/**
	 * Fire callback functions and trigger events. Note that the loop over the
	 * callback array store is done backwards! Further note that you do not want to
	 * fire off triggers in time sensitive applications (for example cell creation)
	 * as its slow.
	 *  @param {object} settings dataTables settings object
	 *  @param {string} callbackArr Name of the array storage for the callbacks in
	 *      oSettings
	 *  @param {string} event Name of the jQuery custom event to trigger. If null no
	 *      trigger is fired
	 *  @param {array} args Array of arguments to pass to the callback function /
	 *      trigger
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackFire( settings, callbackArr, e, args )
	{
		var ret = [];
	
		if ( callbackArr ) {
			ret = $.map( settings[callbackArr].slice().reverse(), function (val, i) {
				return val.fn.apply( settings.oInstance, args );
			} );
		}
	
		if ( e !== null ) {
			$(settings.nTable).trigger( e+'.dt', args );
		}
	
		return ret;
	}
	
	
	function _fnLengthOverflow ( settings )
	{
		var
			start = settings._iDisplayStart,
			end = settings.fnDisplayEnd(),
			len = settings._iDisplayLength;
	
		/* If we have space to show extra rows (backing up from the end point - then do so */
		if ( start >= end )
		{
			start = end - len;
		}
	
		// Keep the start record on the current page
		start -= (start % len);
	
		if ( len === -1 || start < 0 )
		{
			start = 0;
		}
	
		settings._iDisplayStart = start;
	}
	
	
	function _fnRenderer( settings, type )
	{
		var renderer = settings.renderer;
		var host = DataTable.ext.renderer[type];
	
		if ( $.isPlainObject( renderer ) && renderer[type] ) {
			// Specific renderer for this type. If available use it, otherwise use
			// the default.
			return host[renderer[type]] || host._;
		}
		else if ( typeof renderer === 'string' ) {
			// Common renderer - if there is one available for this type use it,
			// otherwise use the default
			return host[renderer] || host._;
		}
	
		// Use the default
		return host._;
	}
	
	
	/**
	 * Detect the data source being used for the table. Used to simplify the code
	 * a little (ajax) and to make it compress a little smaller.
	 *
	 *  @param {object} settings dataTables settings object
	 *  @returns {string} Data source
	 *  @memberof DataTable#oApi
	 */
	function _fnDataSource ( settings )
	{
		if ( settings.oFeatures.bServerSide ) {
			return 'ssp';
		}
		else if ( settings.ajax || settings.sAjaxSource ) {
			return 'ajax';
		}
		return 'dom';
	}
	

	DataTable = function( options )
	{
		/**
		 * Perform a jQuery selector action on the table's TR elements (from the tbody) and
		 * return the resulting jQuery object.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
		 *    criterion ("applied") or all TR elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {object} jQuery object, filtered by the given selector.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Highlight every second row
		 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to rows with 'Webkit' in them, add a background colour and then
		 *      // remove the filter, thus highlighting the 'Webkit' rows only.
		 *      oTable.fnFilter('Webkit');
		 *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
		 *      oTable.fnFilter('');
		 *    } );
		 */
		this.$ = function ( sSelector, oOpts )
		{
			return this.api(true).$( sSelector, oOpts );
		};
		
		
		/**
		 * Almost identical to $ in operation, but in this case returns the data for the matched
		 * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
		 * rather than any descendants, so the data can be obtained for the row/cell. If matching
		 * rows are found, the data returned is the original data array/object that was used to
		 * create the row (or a generated array if from a DOM source).
		 *
		 * This method is often useful in-combination with $ where both functions are given the
		 * same parameters and the array indexes will match identically.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
		 *    criterion ("applied") or all elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the data in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {array} Data for the matched elements. If any elements, as a result of the
		 *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
		 *    entry in the array.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the data from the first row in the table
		 *      var data = oTable._('tr:first');
		 *
		 *      // Do something useful with the data
		 *      alert( "First cell is: "+data[0] );
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to 'Webkit' and get all data for
		 *      oTable.fnFilter('Webkit');
		 *      var data = oTable._('tr', {"search": "applied"});
		 *
		 *      // Do something with the data
		 *      alert( data.length+" rows matched the search" );
		 *    } );
		 */
		this._ = function ( sSelector, oOpts )
		{
			return this.api(true).rows( sSelector, oOpts ).data();
		};
		
		
		/**
		 * Create a DataTables Api instance, with the currently selected tables for
		 * the Api's context.
		 * @param {boolean} [traditional=false] Set the API instance's context to be
		 *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
		 *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
		 *   or if all tables captured in the jQuery object should be used.
		 * @return {DataTables.Api}
		 */
		this.api = function ( traditional )
		{
			return traditional ?
				new _Api(
					_fnSettingsFromNode( this[ _ext.iApiIndex ] )
				) :
				new _Api( this );
		};
		
		
		/**
		 * Add a single new row or multiple rows of data to the table. Please note
		 * that this is suitable for client-side processing only - if you are using
		 * server-side processing (i.e. "bServerSide": true), then to add data, you
		 * must add it to the data source, i.e. the server-side, through an Ajax call.
		 *  @param {array|object} data The data to be added to the table. This can be:
		 *    <ul>
		 *      <li>1D array of data - add a single row with the data provided</li>
		 *      <li>2D array of arrays - add multiple rows in a single call</li>
		 *      <li>object - data object when using <i>mData</i></li>
		 *      <li>array of objects - multiple data objects when using <i>mData</i></li>
		 *    </ul>
		 *  @param {bool} [redraw=true] redraw the table or not
		 *  @returns {array} An array of integers, representing the list of indexes in
		 *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
		 *    the table.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Global var for counter
		 *    var giCount = 2;
		 *
		 *    $(document).ready(function() {
		 *      $('#example').dataTable();
		 *    } );
		 *
		 *    function fnClickAddRow() {
		 *      $('#example').dataTable().fnAddData( [
		 *        giCount+".1",
		 *        giCount+".2",
		 *        giCount+".3",
		 *        giCount+".4" ]
		 *      );
		 *
		 *      giCount++;
		 *    }
		 */
		this.fnAddData = function( data, redraw )
		{
			var api = this.api( true );
		
			/* Check if we want to add multiple rows or not */
			var rows = $.isArray(data) && ( $.isArray(data[0]) || $.isPlainObject(data[0]) ) ?
				api.rows.add( data ) :
				api.row.add( data );
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return rows.flatten().toArray();
		};
		
		
		/**
		 * This function will make DataTables recalculate the column sizes, based on the data
		 * contained in the table and the sizes applied to the columns (in the DOM, CSS or
		 * through the sWidth parameter). This can be useful when the width of the table's
		 * parent element changes (for example a window resize).
		 *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *
		 *      $(window).bind('resize', function () {
		 *        oTable.fnAdjustColumnSizing();
		 *      } );
		 *    } );
		 */
		this.fnAdjustColumnSizing = function ( bRedraw )
		{
			var api = this.api( true ).columns.adjust();
			var settings = api.settings()[0];
			var scroll = settings.oScroll;
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw( false );
			}
			else if ( scroll.sX !== "" || scroll.sY !== "" ) {
				/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
				_fnScrollDraw( settings );
			}
		};
		
		
		/**
		 * Quickly and simply clear a table
		 *  @param {bool} [bRedraw=true] redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
		 *      oTable.fnClearTable();
		 *    } );
		 */
		this.fnClearTable = function( bRedraw )
		{
			var api = this.api( true ).clear();
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
		};
		
		
		/**
		 * The exact opposite of 'opening' a row, this function will close any rows which
		 * are currently 'open'.
		 *  @param {node} nTr the table row to 'close'
		 *  @returns {int} 0 on success, or 1 if failed (can't find the row)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnClose = function( nTr )
		{
			this.api( true ).row( nTr ).child.hide();
		};
		
		
		/**
		 * Remove a row for the table
		 *  @param {mixed} target The index of the row from aoData to be deleted, or
		 *    the TR element you want to delete
		 *  @param {function|null} [callBack] Callback function
		 *  @param {bool} [redraw=true] Redraw the table or not
		 *  @returns {array} The row that was deleted
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately remove the first row
		 *      oTable.fnDeleteRow( 0 );
		 *    } );
		 */
		this.fnDeleteRow = function( target, callback, redraw )
		{
			var api = this.api( true );
			var rows = api.rows( target );
			var settings = rows.settings()[0];
			var data = settings.aoData[ rows[0][0] ];
		
			rows.remove();
		
			if ( callback ) {
				callback.call( this, settings, data );
			}
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return data;
		};
		
		
		/**
		 * Restore the table to it's original state in the DOM by removing all of DataTables
		 * enhancements, alterations to the DOM structure of the table and event listeners.
		 *  @param {boolean} [remove=false] Completely remove the table from the DOM
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnDestroy();
		 *    } );
		 */
		this.fnDestroy = function ( remove )
		{
			this.api( true ).destroy( remove );
		};
		
		
		/**
		 * Redraw the table
		 *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
		 *      oTable.fnDraw();
		 *    } );
		 */
		this.fnDraw = function( complete )
		{
			// Note that this isn't an exact match to the old call to _fnDraw - it takes
			// into account the new data, but can old position.
			this.api( true ).draw( ! complete );
		};
		
		
		/**
		 * Filter the input based on data
		 *  @param {string} sInput String to filter the table on
		 *  @param {int|null} [iColumn] Column to limit filtering to
		 *  @param {bool} [bRegex=false] Treat as regular expression or not
		 *  @param {bool} [bSmart=true] Perform smart filtering or not
		 *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
		 *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sometime later - filter...
		 *      oTable.fnFilter( 'test string' );
		 *    } );
		 */
		this.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )
		{
			var api = this.api( true );
		
			if ( iColumn === null || iColumn === undefined ) {
				api.search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
			else {
				api.column( iColumn ).search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
		
			api.draw();
		};
		
		
		/**
		 * Get the data for the whole table, an individual row or an individual cell based on the
		 * provided parameters.
		 *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
		 *    a TR node then the data source for the whole row will be returned. If given as a
		 *    TD/TH cell node then iCol will be automatically calculated and the data for the
		 *    cell returned. If given as an integer, then this is treated as the aoData internal
		 *    data index for the row (see fnGetPosition) and the data for that row used.
		 *  @param {int} [col] Optional column index that you want the data of.
		 *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
		 *    returned. If mRow is defined, just data for that row, and is iCol is
		 *    defined, only data for the designated cell is returned.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Row data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('tr').click( function () {
		 *        var data = oTable.fnGetData( this );
		 *        // ... do something with the array / object of data for the row
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Individual cell data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('td').click( function () {
		 *        var sData = oTable.fnGetData( this );
		 *        alert( 'The cell clicked on had the value of '+sData );
		 *      } );
		 *    } );
		 */
		this.fnGetData = function( src, col )
		{
			var api = this.api( true );
		
			if ( src !== undefined ) {
				var type = src.nodeName ? src.nodeName.toLowerCase() : '';
		
				return col !== undefined || type == 'td' || type == 'th' ?
					api.cell( src, col ).data() :
					api.row( src ).data() || null;
			}
		
			return api.data().toArray();
		};
		
		
		/**
		 * Get an array of the TR nodes that are used in the table's body. Note that you will
		 * typically want to use the '$' API method in preference to this as it is more
		 * flexible.
		 *  @param {int} [iRow] Optional row index for the TR element you want
		 *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
		 *    in the table's body, or iRow is defined, just the TR element requested.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the nodes from the table
		 *      var nNodes = oTable.fnGetNodes( );
		 *    } );
		 */
		this.fnGetNodes = function( iRow )
		{
			var api = this.api( true );
		
			return iRow !== undefined ?
				api.row( iRow ).node() :
				api.rows().nodes().flatten().toArray();
		};
		
		
		/**
		 * Get the array indexes of a particular cell from it's DOM element
		 * and column index including hidden columns
		 *  @param {node} node this can either be a TR, TD or TH in the table's body
		 *  @returns {int} If nNode is given as a TR, then a single index is returned, or
		 *    if given as a cell, an array of [row index, column index (visible),
		 *    column index (all)] is given.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      $('#example tbody td').click( function () {
		 *        // Get the position of the current data from the node
		 *        var aPos = oTable.fnGetPosition( this );
		 *
		 *        // Get the data array for this row
		 *        var aData = oTable.fnGetData( aPos[0] );
		 *
		 *        // Update the data array and return the value
		 *        aData[ aPos[1] ] = 'clicked';
		 *        this.innerHTML = 'clicked';
		 *      } );
		 *
		 *      // Init DataTables
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnGetPosition = function( node )
		{
			var api = this.api( true );
			var nodeName = node.nodeName.toUpperCase();
		
			if ( nodeName == 'TR' ) {
				return api.row( node ).index();
			}
			else if ( nodeName == 'TD' || nodeName == 'TH' ) {
				var cell = api.cell( node ).index();
		
				return [
					cell.row,
					cell.columnVisible,
					cell.column
				];
			}
			return null;
		};
		
		
		/**
		 * Check to see if a row is 'open' or not.
		 *  @param {node} nTr the table row to check
		 *  @returns {boolean} true if the row is currently open, false otherwise
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnIsOpen = function( nTr )
		{
			return this.api( true ).row( nTr ).child.isShown();
		};
		
		
		/**
		 * This function will place a new row directly after a row which is currently
		 * on display on the page, with the HTML contents that is passed into the
		 * function. This can be used, for example, to ask for confirmation that a
		 * particular record should be deleted.
		 *  @param {node} nTr The table row to 'open'
		 *  @param {string|node|jQuery} mHtml The HTML to put into the row
		 *  @param {string} sClass Class to give the new TD cell
		 *  @returns {node} The row opened. Note that if the table row passed in as the
		 *    first parameter, is not found in the table, this method will silently
		 *    return.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnOpen = function( nTr, mHtml, sClass )
		{
			return this.api( true )
				.row( nTr )
				.child( mHtml, sClass )
				.show()
				.child()[0];
		};
		
		
		/**
		 * Change the pagination - provides the internal logic for pagination in a simple API
		 * function. With this function you can have a DataTables table go to the next,
		 * previous, first or last pages.
		 *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
		 *    or page number to jump to (integer), note that page 0 is the first page.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnPageChange( 'next' );
		 *    } );
		 */
		this.fnPageChange = function ( mAction, bRedraw )
		{
			var api = this.api( true ).page( mAction );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw(false);
			}
		};
		
		
		/**
		 * Show a particular column
		 *  @param {int} iCol The column whose display should be changed
		 *  @param {bool} bShow Show (true) or hide (false) the column
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Hide the second column after initialisation
		 *      oTable.fnSetColumnVis( 1, false );
		 *    } );
		 */
		this.fnSetColumnVis = function ( iCol, bShow, bRedraw )
		{
			var api = this.api( true ).column( iCol ).visible( bShow );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.columns.adjust().draw();
			}
		};
		
		
		/**
		 * Get the settings for a particular table for external manipulation
		 *  @returns {object} DataTables settings object. See
		 *    {@link DataTable.models.oSettings}
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      var oSettings = oTable.fnSettings();
		 *
		 *      // Show an example parameter from the settings
		 *      alert( oSettings._iDisplayStart );
		 *    } );
		 */
		this.fnSettings = function()
		{
			return _fnSettingsFromNode( this[_ext.iApiIndex] );
		};
		
		
		/**
		 * Sort the table by a particular column
		 *  @param {int} iCol the data index to sort on. Note that this will not match the
		 *    'display index' if you have hidden data entries
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort immediately with columns 0 and 1
		 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
		 *    } );
		 */
		this.fnSort = function( aaSort )
		{
			this.api( true ).order( aaSort ).draw();
		};
		
		
		/**
		 * Attach a sort listener to an element for a given column
		 *  @param {node} nNode the element to attach the sort listener to
		 *  @param {int} iColumn the column that a click on this node will sort on
		 *  @param {function} [fnCallback] callback function when sort is run
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort on column 1, when 'sorter' is clicked on
		 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
		 *    } );
		 */
		this.fnSortListener = function( nNode, iColumn, fnCallback )
		{
			this.api( true ).order.listener( nNode, iColumn, fnCallback );
		};
		
		
		/**
		 * Update a table cell or row - this method will accept either a single value to
		 * update the cell with, an array of values with one element for each column or
		 * an object in the same format as the original data source. The function is
		 * self-referencing in order to make the multi column updates easier.
		 *  @param {object|array|string} mData Data to update the cell/row with
		 *  @param {node|int} mRow TR element you want to update or the aoData index
		 *  @param {int} [iColumn] The column to update, give as null or undefined to
		 *    update a whole row.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @param {bool} [bAction=true] Perform pre-draw actions or not
		 *  @returns {int} 0 on success, 1 on error
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
		 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
		 *    } );
		 */
		this.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )
		{
			var api = this.api( true );
		
			if ( iColumn === undefined || iColumn === null ) {
				api.row( mRow ).data( mData );
			}
			else {
				api.cell( mRow, iColumn ).data( mData );
			}
		
			if ( bAction === undefined || bAction ) {
				api.columns.adjust();
			}
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
			return 0;
		};
		
		
		/**
		 * Provide a common method for plug-ins to check the version of DataTables being used, in order
		 * to ensure compatibility.
		 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
		 *    formats "X" and "X.Y" are also acceptable.
		 *  @returns {boolean} true if this version of DataTables is greater or equal to the required
		 *    version, or false if this version of DataTales is not suitable
		 *  @method
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
		 *    } );
		 */
		this.fnVersionCheck = _ext.fnVersionCheck;
		

		var _that = this;
		var emptyInit = options === undefined;
		var len = this.length;

		if ( emptyInit ) {
			options = {};
		}

		this.oApi = this.internal = _ext.internal;

		// Extend with old style plug-in API methods
		for ( var fn in DataTable.ext.internal ) {
			if ( fn ) {
				this[fn] = _fnExternApiFunc(fn);
			}
		}

		this.each(function() {
			// For each initialisation we want to give it a clean initialisation
			// object that can be bashed around
			var o = {};
			var oInit = len > 1 ? // optimisation for single table case
				_fnExtend( o, options, true ) :
				options;

			/*global oInit,_that,emptyInit*/
			var i=0, iLen, j, jLen, k, kLen;
			var sId = this.getAttribute( 'id' );
			var bInitHandedOff = false;
			var defaults = DataTable.defaults;
			
			
			/* Sanity check */
			if ( this.nodeName.toLowerCase() != 'table' )
			{
				_fnLog( null, 0, 'Non-table node initialisation ('+this.nodeName+')', 2 );
				return;
			}
			
			/* Backwards compatibility for the defaults */
			_fnCompatOpts( defaults );
			_fnCompatCols( defaults.column );
			
			/* Convert the camel-case defaults to Hungarian */
			_fnCamelToHungarian( defaults, defaults, true );
			_fnCamelToHungarian( defaults.column, defaults.column, true );
			
			/* Setting up the initialisation object */
			_fnCamelToHungarian( defaults, oInit );
			
			/* Check to see if we are re-initialising a table */
			var allSettings = DataTable.settings;
			for ( i=0, iLen=allSettings.length ; i<iLen ; i++ )
			{
				/* Base check on table node */
				if ( allSettings[i].nTable == this )
				{
					var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
					var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;
			
					if ( emptyInit || bRetrieve )
					{
						return allSettings[i].oInstance;
					}
					else if ( bDestroy )
					{
						allSettings[i].oInstance.fnDestroy();
						break;
					}
					else
					{
						_fnLog( allSettings[i], 0, 'Cannot reinitialise DataTable', 3 );
						return;
					}
				}
			
				/* If the element we are initialising has the same ID as a table which was previously
				 * initialised, but the table nodes don't match (from before) then we destroy the old
				 * instance by simply deleting it. This is under the assumption that the table has been
				 * destroyed by other methods. Anyone using non-id selectors will need to do this manually
				 */
				if ( allSettings[i].sTableId == this.id )
				{
					allSettings.splice( i, 1 );
					break;
				}
			}
			
			/* Ensure the table has an ID - required for accessibility */
			if ( sId === null || sId === "" )
			{
				sId = "DataTables_Table_"+(DataTable.ext._unique++);
				this.id = sId;
			}
			
			/* Create the settings object for this table and set some of the default parameters */
			var oSettings = $.extend( true, {}, DataTable.models.oSettings, {
				"nTable":        this,
				"oApi":          _that.internal,
				"oInit":         oInit,
				"sDestroyWidth": $(this)[0].style.width,
				"sInstance":     sId,
				"sTableId":      sId
			} );
			allSettings.push( oSettings );
			
			// Need to add the instance after the instance after the settings object has been added
			// to the settings array, so we can self reference the table instance if more than one
			oSettings.oInstance = (_that.length===1) ? _that : $(this).dataTable();
			
			// Backwards compatibility, before we apply all the defaults
			_fnCompatOpts( oInit );
			
			if ( oInit.oLanguage )
			{
				_fnLanguageCompat( oInit.oLanguage );
			}
			
			// If the length menu is given, but the init display length is not, use the length menu
			if ( oInit.aLengthMenu && ! oInit.iDisplayLength )
			{
				oInit.iDisplayLength = $.isArray( oInit.aLengthMenu[0] ) ?
					oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
			}
			
			// Apply the defaults and init options to make a single init object will all
			// options defined from defaults and instance options.
			oInit = _fnExtend( $.extend( true, {}, defaults ), oInit );
			
			
			// Map the initialisation options onto the settings object
			_fnMap( oSettings.oFeatures, oInit, [
				"bPaginate",
				"bLengthChange",
				"bFilter",
				"bSort",
				"bSortMulti",
				"bInfo",
				"bProcessing",
				"bAutoWidth",
				"bSortClasses",
				"bServerSide",
				"bDeferRender"
			] );
			_fnMap( oSettings, oInit, [
				"asStripeClasses",
				"ajax",
				"fnServerData",
				"fnFormatNumber",
				"sServerMethod",
				"aaSorting",
				"aaSortingFixed",
				"aLengthMenu",
				"sPaginationType",
				"sAjaxSource",
				"sAjaxDataProp",
				"iStateDuration",
				"sDom",
				"bSortCellsTop",
				"iTabIndex",
				"fnStateLoadCallback",
				"fnStateSaveCallback",
				"renderer",
				"searchDelay",
				[ "iCookieDuration", "iStateDuration" ], // backwards compat
				[ "oSearch", "oPreviousSearch" ],
				[ "aoSearchCols", "aoPreSearchCols" ],
				[ "iDisplayLength", "_iDisplayLength" ],
				[ "bJQueryUI", "bJUI" ]
			] );
			_fnMap( oSettings.oScroll, oInit, [
				[ "sScrollX", "sX" ],
				[ "sScrollXInner", "sXInner" ],
				[ "sScrollY", "sY" ],
				[ "bScrollCollapse", "bCollapse" ]
			] );
			_fnMap( oSettings.oLanguage, oInit, "fnInfoCallback" );
			
			/* Callback functions which are array driven */
			_fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );
			_fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );
			_fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );
			_fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );
			_fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );
			
			var oClasses = oSettings.oClasses;
			
			// @todo Remove in 1.11
			if ( oInit.bJQueryUI )
			{
				/* Use the JUI classes object for display. You could clone the oStdClasses object if
				 * you want to have multiple tables with multiple independent classes
				 */
				$.extend( oClasses, DataTable.ext.oJUIClasses, oInit.oClasses );
			
				if ( oInit.sDom === defaults.sDom && defaults.sDom === "lfrtip" )
				{
					/* Set the DOM to use a layout suitable for jQuery UI's theming */
					oSettings.sDom = '<"H"lfr>t<"F"ip>';
				}
			
				if ( ! oSettings.renderer ) {
					oSettings.renderer = 'jqueryui';
				}
				else if ( $.isPlainObject( oSettings.renderer ) && ! oSettings.renderer.header ) {
					oSettings.renderer.header = 'jqueryui';
				}
			}
			else
			{
				$.extend( oClasses, DataTable.ext.classes, oInit.oClasses );
			}
			$(this).addClass( oClasses.sTable );
			
			/* Calculate the scroll bar width and cache it for use later on */
			if ( oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "" )
			{
				oSettings.oScroll.iBarWidth = _fnScrollBarWidth();
			}
			if ( oSettings.oScroll.sX === true ) { // Easy initialisation of x-scrolling
				oSettings.oScroll.sX = '100%';
			}
			
			if ( oSettings.iInitDisplayStart === undefined )
			{
				/* Display start point, taking into account the save saving */
				oSettings.iInitDisplayStart = oInit.iDisplayStart;
				oSettings._iDisplayStart = oInit.iDisplayStart;
			}
			
			if ( oInit.iDeferLoading !== null )
			{
				oSettings.bDeferLoading = true;
				var tmp = $.isArray( oInit.iDeferLoading );
				oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
				oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
			}
			
			/* Language definitions */
			var oLanguage = oSettings.oLanguage;
			$.extend( true, oLanguage, oInit.oLanguage );
			
			if ( oLanguage.sUrl !== "" )
			{
				/* Get the language definitions from a file - because this Ajax call makes the language
				 * get async to the remainder of this function we use bInitHandedOff to indicate that
				 * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
				 */
				$.ajax( {
					dataType: 'json',
					url: oLanguage.sUrl,
					success: function ( json ) {
						_fnLanguageCompat( json );
						_fnCamelToHungarian( defaults.oLanguage, json );
						$.extend( true, oLanguage, json );
						_fnInitialise( oSettings );
					},
					error: function () {
						// Error occurred loading language file, continue on as best we can
						_fnInitialise( oSettings );
					}
				} );
				bInitHandedOff = true;
			}
			
			/*
			 * Stripes
			 */
			if ( oInit.asStripeClasses === null )
			{
				oSettings.asStripeClasses =[
					oClasses.sStripeOdd,
					oClasses.sStripeEven
				];
			}
			
			/* Remove row stripe classes if they are already on the table row */
			var stripeClasses = oSettings.asStripeClasses;
			var rowOne = $('tbody tr:eq(0)', this);
			if ( $.inArray( true, $.map( stripeClasses, function(el, i) {
				return rowOne.hasClass(el);
			} ) ) !== -1 ) {
				$('tbody tr', this).removeClass( stripeClasses.join(' ') );
				oSettings.asDestroyStripes = stripeClasses.slice();
			}
			
			/*
			 * Columns
			 * See if we should load columns automatically or use defined ones
			 */
			var anThs = [];
			var aoColumnsInit;
			var nThead = this.getElementsByTagName('thead');
			if ( nThead.length !== 0 )
			{
				_fnDetectHeader( oSettings.aoHeader, nThead[0] );
				anThs = _fnGetUniqueThs( oSettings );
			}
			
			/* If not given a column array, generate one with nulls */
			if ( oInit.aoColumns === null )
			{
				aoColumnsInit = [];
				for ( i=0, iLen=anThs.length ; i<iLen ; i++ )
				{
					aoColumnsInit.push( null );
				}
			}
			else
			{
				aoColumnsInit = oInit.aoColumns;
			}
			
			/* Add the columns */
			for ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )
			{
				_fnAddColumn( oSettings, anThs ? anThs[i] : null );
			}
			
			/* Apply the column definitions */
			_fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
				_fnColumnOptions( oSettings, iCol, oDef );
			} );
			
			/* HTML5 attribute detection - build an mData object automatically if the
			 * attributes are found
			 */
			if ( rowOne.length ) {
				var a = function ( cell, name ) {
					return cell.getAttribute( 'data-'+name ) ? name : null;
				};
			
				$.each( _fnGetRowElements( oSettings, rowOne[0] ).cells, function (i, cell) {
					var col = oSettings.aoColumns[i];
			
					if ( col.mData === i ) {
						var sort = a( cell, 'sort' ) || a( cell, 'order' );
						var filter = a( cell, 'filter' ) || a( cell, 'search' );
			
						if ( sort !== null || filter !== null ) {
							col.mData = {
								_:      i+'.display',
								sort:   sort !== null   ? i+'.@data-'+sort   : undefined,
								type:   sort !== null   ? i+'.@data-'+sort   : undefined,
								filter: filter !== null ? i+'.@data-'+filter : undefined
							};
			
							_fnColumnOptions( oSettings, i );
						}
					}
				} );
			}
			
			var features = oSettings.oFeatures;
			
			/* Must be done after everything which can be overridden by the state saving! */
			if ( oInit.bStateSave )
			{
				features.bStateSave = true;
				_fnLoadState( oSettings, oInit );
				_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );
			}
			
			
			/*
			 * Sorting
			 * @todo For modularisation (1.11) this needs to do into a sort start up handler
			 */
			
			// If aaSorting is not defined, then we use the first indicator in asSorting
			// in case that has been altered, so the default sort reflects that option
			if ( oInit.aaSorting === undefined )
			{
				var sorting = oSettings.aaSorting;
				for ( i=0, iLen=sorting.length ; i<iLen ; i++ )
				{
					sorting[i][1] = oSettings.aoColumns[ i ].asSorting[0];
				}
			}
			
			/* Do a first pass on the sorting classes (allows any size changes to be taken into
			 * account, and also will apply sorting disabled classes if disabled
			 */
			_fnSortingClasses( oSettings );
			
			if ( features.bSort )
			{
				_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
					if ( oSettings.bSorted ) {
						var aSort = _fnSortFlatten( oSettings );
						var sortedColumns = {};
			
						$.each( aSort, function (i, val) {
							sortedColumns[ val.src ] = val.dir;
						} );
			
						_fnCallbackFire( oSettings, null, 'order', [oSettings, aSort, sortedColumns] );
						_fnSortAria( oSettings );
					}
				} );
			}
			
			_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
				if ( oSettings.bSorted || _fnDataSource( oSettings ) === 'ssp' || features.bDeferRender ) {
					_fnSortingClasses( oSettings );
				}
			}, 'sc' );
			
			
			/*
			 * Final init
			 * Cache the header, body and footer as required, creating them if needed
			 */
			
			/* Browser support detection */
			_fnBrowserDetect( oSettings );
			
			// Work around for Webkit bug 83867 - store the caption-side before removing from doc
			var captions = $(this).children('caption').each( function () {
				this._captionSide = $(this).css('caption-side');
			} );
			
			var thead = $(this).children('thead');
			if ( thead.length === 0 )
			{
				thead = $('<thead/>').appendTo(this);
			}
			oSettings.nTHead = thead[0];
			
			var tbody = $(this).children('tbody');
			if ( tbody.length === 0 )
			{
				tbody = $('<tbody/>').appendTo(this);
			}
			oSettings.nTBody = tbody[0];
			
			var tfoot = $(this).children('tfoot');
			if ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") )
			{
				// If we are a scrolling table, and no footer has been given, then we need to create
				// a tfoot element for the caption element to be appended to
				tfoot = $('<tfoot/>').appendTo(this);
			}
			
			if ( tfoot.length === 0 || tfoot.children().length === 0 ) {
				$(this).addClass( oClasses.sNoFooter );
			}
			else if ( tfoot.length > 0 ) {
				oSettings.nTFoot = tfoot[0];
				_fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );
			}
			
			/* Check if there is data passing into the constructor */
			if ( oInit.aaData )
			{
				for ( i=0 ; i<oInit.aaData.length ; i++ )
				{
					_fnAddData( oSettings, oInit.aaData[ i ] );
				}
			}
			else if ( oSettings.bDeferLoading || _fnDataSource( oSettings ) == 'dom' )
			{
				/* Grab the data from the page - only do this when deferred loading or no Ajax
				 * source since there is no point in reading the DOM data if we are then going
				 * to replace it with Ajax data
				 */
				_fnAddTr( oSettings, $(oSettings.nTBody).children('tr') );
			}
			
			/* Copy the data index array */
			oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
			
			/* Initialisation complete - table can be drawn */
			oSettings.bInitialised = true;
			
			/* Check if we need to initialise the table (it might not have been handed off to the
			 * language processor)
			 */
			if ( bInitHandedOff === false )
			{
				_fnInitialise( oSettings );
			}
		} );
		_that = null;
		return this;
	};

	
	
	/**
	 * Computed structure of the DataTables API, defined by the options passed to
	 * `DataTable.Api.register()` when building the API.
	 *
	 * The structure is built in order to speed creation and extension of the Api
	 * objects since the extensions are effectively pre-parsed.
	 *
	 * The array is an array of objects with the following structure, where this
	 * base array represents the Api prototype base:
	 *
	 *     [
	 *       {
	 *         name:      'data'                -- string   - Property name
	 *         val:       function () {},       -- function - Api method (or undefined if just an object
	 *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	 *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	 *       },
	 *       {
	 *         name:     'row'
	 *         val:       {},
	 *         methodExt: [ ... ],
	 *         propExt:   [
	 *           {
	 *             name:      'data'
	 *             val:       function () {},
	 *             methodExt: [ ... ],
	 *             propExt:   [ ... ]
	 *           },
	 *           ...
	 *         ]
	 *       }
	 *     ]
	 *
	 * @type {Array}
	 * @ignore
	 */
	var __apiStruct = [];
	
	
	/**
	 * `Array.prototype` reference.
	 *
	 * @type object
	 * @ignore
	 */
	var __arrayProto = Array.prototype;
	
	
	/**
	 * Abstraction for `context` parameter of the `Api` constructor to allow it to
	 * take several different forms for ease of use.
	 *
	 * Each of the input parameter types will be converted to a DataTables settings
	 * object where possible.
	 *
	 * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
	 *   of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 *   * `DataTables.Api` - API instance
	 * @return {array|null} Matching DataTables settings objects. `null` or
	 *   `undefined` is returned if no matching DataTable is found.
	 * @ignore
	 */
	var _toSettings = function ( mixed )
	{
		var idx, jq;
		var settings = DataTable.settings;
		var tables = $.map( settings, function (el, i) {
			return el.nTable;
		} );
	
		if ( ! mixed ) {
			return [];
		}
		else if ( mixed.nTable && mixed.oApi ) {
			// DataTables settings object
			return [ mixed ];
		}
		else if ( mixed.nodeName && mixed.nodeName.toLowerCase() === 'table' ) {
			// Table node
			idx = $.inArray( mixed, tables );
			return idx !== -1 ? [ settings[idx] ] : null;
		}
		else if ( mixed && typeof mixed.settings === 'function' ) {
			return mixed.settings().toArray();
		}
		else if ( typeof mixed === 'string' ) {
			// jQuery selector
			jq = $(mixed);
		}
		else if ( mixed instanceof $ ) {
			// jQuery object (also DataTables instance)
			jq = mixed;
		}
	
		if ( jq ) {
			return jq.map( function(i) {
				idx = $.inArray( this, tables );
				return idx !== -1 ? settings[idx] : null;
			} ).toArray();
		}
	};
	
	
	/**
	 * DataTables API class - used to control and interface with  one or more
	 * DataTables enhanced tables.
	 *
	 * The API class is heavily based on jQuery, presenting a chainable interface
	 * that you can use to interact with tables. Each instance of the API class has
	 * a "context" - i.e. the tables that it will operate on. This could be a single
	 * table, all tables on a page or a sub-set thereof.
	 *
	 * Additionally the API is designed to allow you to easily work with the data in
	 * the tables, retrieving and manipulating it as required. This is done by
	 * presenting the API class as an array like interface. The contents of the
	 * array depend upon the actions requested by each method (for example
	 * `rows().nodes()` will return an array of nodes, while `rows().data()` will
	 * return an array of objects or arrays depending upon your table's
	 * configuration). The API object has a number of array like methods (`push`,
	 * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
	 * `unique` etc) to assist your working with the data held in a table.
	 *
	 * Most methods (those which return an Api instance) are chainable, which means
	 * the return from a method call also has all of the methods available that the
	 * top level object had. For example, these two calls are equivalent:
	 *
	 *     // Not chained
	 *     api.row.add( {...} );
	 *     api.draw();
	 *
	 *     // Chained
	 *     api.row.add( {...} ).draw();
	 *
	 * @class DataTable.Api
	 * @param {array|object|string|jQuery} context DataTable identifier. This is
	 *   used to define which DataTables enhanced tables this API will operate on.
	 *   Can be one of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 * @param {array} [data] Data to initialise the Api instance with.
	 *
	 * @example
	 *   // Direct initialisation during DataTables construction
	 *   var api = $('#example').DataTable();
	 *
	 * @example
	 *   // Initialisation using a DataTables jQuery object
	 *   var api = $('#example').dataTable().api();
	 *
	 * @example
	 *   // Initialisation as a constructor
	 *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
	 */
	_Api = function ( context, data )
	{
		if ( ! this instanceof _Api ) {
			throw 'DT API must be constructed as a new object';
			// or should it do the 'new' for the caller?
			// return new _Api.apply( this, arguments );
		}
	
		var settings = [];
		var ctxSettings = function ( o ) {
			var a = _toSettings( o );
			if ( a ) {
				settings.push.apply( settings, a );
			}
		};
	
		if ( $.isArray( context ) ) {
			for ( var i=0, ien=context.length ; i<ien ; i++ ) {
				ctxSettings( context[i] );
			}
		}
		else {
			ctxSettings( context );
		}
	
		// Remove duplicates
		this.context = _unique( settings );
	
		// Initial data
		if ( data ) {
			this.push.apply( this, data.toArray ? data.toArray() : data );
		}
	
		// selector
		this.selector = {
			rows: null,
			cols: null,
			opts: null
		};
	
		_Api.extend( this, this, __apiStruct );
	};
	
	DataTable.Api = _Api;
	
	_Api.prototype = /** @lends DataTables.Api */{
		/**
		 * Return a new Api instance, comprised of the data held in the current
		 * instance, join with the other array(s) and/or value(s).
		 *
		 * An alias for `Array.prototype.concat`.
		 *
		 * @type method
		 * @param {*} value1 Arrays and/or values to concatenate.
		 * @param {*} [...] Additional arrays and/or values to concatenate.
		 * @returns {DataTables.Api} New API instance, comprising of the combined
		 *   array.
		 */
		concat:  __arrayProto.concat,
	
	
		context: [], // array of table settings objects
	
	
		each: function ( fn )
		{
			for ( var i=0, ien=this.length ; i<ien; i++ ) {
				fn.call( this, this[i], i, this );
			}
	
			return this;
		},
	
	
		eq: function ( idx )
		{
			var ctx = this.context;
	
			return ctx.length > idx ?
				new _Api( ctx[idx], this[idx] ) :
				null;
		},
	
	
		filter: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.filter ) {
				a = __arrayProto.filter.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					if ( fn.call( this, this[i], i, this ) ) {
						a.push( this[i] );
					}
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		flatten: function ()
		{
			var a = [];
			return new _Api( this.context, a.concat.apply( a, this.toArray() ) );
		},
	
	
		join:    __arrayProto.join,
	
	
		indexOf: __arrayProto.indexOf || function (obj, start)
		{
			for ( var i=(start || 0), ien=this.length ; i<ien ; i++ ) {
				if ( this[i] === obj ) {
					return i;
				}
			}
			return -1;
		},
	
		// Note that `alwaysNew` is internal - use iteratorNew externally
		iterator: function ( flatten, type, fn, alwaysNew ) {
			var
				a = [], ret,
				i, ien, j, jen,
				context = this.context,
				rows, items, item,
				selector = this.selector;
	
			// Argument shifting
			if ( typeof flatten === 'string' ) {
				alwaysNew = fn;
				fn = type;
				type = flatten;
				flatten = false;
			}
	
			for ( i=0, ien=context.length ; i<ien ; i++ ) {
				var apiInst = new _Api( context[i] );
	
				if ( type === 'table' ) {
					ret = fn.call( apiInst, context[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'columns' || type === 'rows' ) {
					// this has same length as context - one entry for each table
					ret = fn.call( apiInst, context[i], this[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell' ) {
					// columns and rows share the same structure.
					// 'this' is an array of column indexes for each context
					items = this[i];
	
					if ( type === 'column-rows' ) {
						rows = _selector_row_indexes( context[i], selector.opts );
					}
	
					for ( j=0, jen=items.length ; j<jen ; j++ ) {
						item = items[j];
	
						if ( type === 'cell' ) {
							ret = fn.call( apiInst, context[i], item.row, item.column, i, j );
						}
						else {
							ret = fn.call( apiInst, context[i], item, i, j, rows );
						}
	
						if ( ret !== undefined ) {
							a.push( ret );
						}
					}
				}
			}
	
			if ( a.length || alwaysNew ) {
				var api = new _Api( context, flatten ? a.concat.apply( [], a ) : a );
				var apiSelector = api.selector;
				apiSelector.rows = selector.rows;
				apiSelector.cols = selector.cols;
				apiSelector.opts = selector.opts;
				return api;
			}
			return this;
		},
	
	
		lastIndexOf: __arrayProto.lastIndexOf || function (obj, start)
		{
			// Bit cheeky...
			return this.indexOf.apply( this.toArray.reverse(), arguments );
		},
	
	
		length:  0,
	
	
		map: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.map ) {
				a = __arrayProto.map.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					a.push( fn.call( this, this[i], i ) );
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		pluck: function ( prop )
		{
			return this.map( function ( el ) {
				return el[ prop ];
			} );
		},
	
		pop:     __arrayProto.pop,
	
	
		push:    __arrayProto.push,
	
	
		// Does not return an API instance
		reduce: __arrayProto.reduce || function ( fn, init )
		{
			return _fnReduce( this, fn, init, 0, this.length, 1 );
		},
	
	
		reduceRight: __arrayProto.reduceRight || function ( fn, init )
		{
			return _fnReduce( this, fn, init, this.length-1, -1, -1 );
		},
	
	
		reverse: __arrayProto.reverse,
	
	
		// Object with rows, columns and opts
		selector: null,
	
	
		shift:   __arrayProto.shift,
	
	
		sort:    __arrayProto.sort, // ? name - order?
	
	
		splice:  __arrayProto.splice,
	
	
		toArray: function ()
		{
			return __arrayProto.slice.call( this );
		},
	
	
		to$: function ()
		{
			return $( this );
		},
	
	
		toJQuery: function ()
		{
			return $( this );
		},
	
	
		unique: function ()
		{
			return new _Api( this.context, _unique(this) );
		},
	
	
		unshift: __arrayProto.unshift
	};
	
	
	_Api.extend = function ( scope, obj, ext )
	{
		// Only extend API instances and static properties of the API
		if ( ! obj || ( ! (obj instanceof _Api) && ! obj.__dt_wrapper ) ) {
			return;
		}
	
		var
			i, ien,
			j, jen,
			struct, inner,
			methodScoping = function ( scope, fn, struc ) {
				return function () {
					var ret = fn.apply( scope, arguments );
	
					// Method extension
					_Api.extend( ret, ret, struc.methodExt );
					return ret;
				};
			};
	
		for ( i=0, ien=ext.length ; i<ien ; i++ ) {
			struct = ext[i];
	
			// Value
			obj[ struct.name ] = typeof struct.val === 'function' ?
				methodScoping( scope, struct.val, struct ) :
				$.isPlainObject( struct.val ) ?
					{} :
					struct.val;
	
			obj[ struct.name ].__dt_wrapper = true;
	
			// Property extension
			_Api.extend( scope, obj[ struct.name ], struct.propExt );
		}
	};
	
	
	// @todo - Is there need for an augment function?
	// _Api.augment = function ( inst, name )
	// {
	// 	// Find src object in the structure from the name
	// 	var parts = name.split('.');
	
	// 	_Api.extend( inst, obj );
	// };
	
	
	//     [
	//       {
	//         name:      'data'                -- string   - Property name
	//         val:       function () {},       -- function - Api method (or undefined if just an object
	//         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	//         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	//       },
	//       {
	//         name:     'row'
	//         val:       {},
	//         methodExt: [ ... ],
	//         propExt:   [
	//           {
	//             name:      'data'
	//             val:       function () {},
	//             methodExt: [ ... ],
	//             propExt:   [ ... ]
	//           },
	//           ...
	//         ]
	//       }
	//     ]
	
	_Api.register = _api_register = function ( name, val )
	{
		if ( $.isArray( name ) ) {
			for ( var j=0, jen=name.length ; j<jen ; j++ ) {
				_Api.register( name[j], val );
			}
			return;
		}
	
		var
			i, ien,
			heir = name.split('.'),
			struct = __apiStruct,
			key, method;
	
		var find = function ( src, name ) {
			for ( var i=0, ien=src.length ; i<ien ; i++ ) {
				if ( src[i].name === name ) {
					return src[i];
				}
			}
			return null;
		};
	
		for ( i=0, ien=heir.length ; i<ien ; i++ ) {
			method = heir[i].indexOf('()') !== -1;
			key = method ?
				heir[i].replace('()', '') :
				heir[i];
	
			var src = find( struct, key );
			if ( ! src ) {
				src = {
					name:      key,
					val:       {},
					methodExt: [],
					propExt:   []
				};
				struct.push( src );
			}
	
			if ( i === ien-1 ) {
				src.val = val;
			}
			else {
				struct = method ?
					src.methodExt :
					src.propExt;
			}
		}
	};
	
	
	_Api.registerPlural = _api_registerPlural = function ( pluralName, singularName, val ) {
		_Api.register( pluralName, val );
	
		_Api.register( singularName, function () {
			var ret = val.apply( this, arguments );
	
			if ( ret === this ) {
				// Returned item is the API instance that was passed in, return it
				return this;
			}
			else if ( ret instanceof _Api ) {
				// New API instance returned, want the value from the first item
				// in the returned array for the singular result.
				return ret.length ?
					$.isArray( ret[0] ) ?
						new _Api( ret.context, ret[0] ) : // Array results are 'enhanced'
						ret[0] :
					undefined;
			}
	
			// Non-API return - just fire it back
			return ret;
		} );
	};
	
	
	/**
	 * Selector for HTML tables. Apply the given selector to the give array of
	 * DataTables settings objects.
	 *
	 * @param {string|integer} [selector] jQuery selector string or integer
	 * @param  {array} Array of DataTables settings objects to be filtered
	 * @return {array}
	 * @ignore
	 */
	var __table_selector = function ( selector, a )
	{
		// Integer is used to pick out a table by index
		if ( typeof selector === 'number' ) {
			return [ a[ selector ] ];
		}
	
		// Perform a jQuery selector on the table nodes
		var nodes = $.map( a, function (el, i) {
			return el.nTable;
		} );
	
		return $(nodes)
			.filter( selector )
			.map( function (i) {
				// Need to translate back from the table node to the settings
				var idx = $.inArray( this, nodes );
				return a[ idx ];
			} )
			.toArray();
	};
	
	
	
	/**
	 * Context selector for the API's context (i.e. the tables the API instance
	 * refers to.
	 *
	 * @name    DataTable.Api#tables
	 * @param {string|integer} [selector] Selector to pick which tables the iterator
	 *   should operate on. If not given, all tables in the current context are
	 *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
	 *   select multiple tables or as an integer to select a single table.
	 * @returns {DataTable.Api} Returns a new API instance if a selector is given.
	 */
	_api_register( 'tables()', function ( selector ) {
		// A new instance is created if there was a selector specified
		return selector ?
			new _Api( __table_selector( selector, this.context ) ) :
			this;
	} );
	
	
	_api_register( 'table()', function ( selector ) {
		var tables = this.tables( selector );
		var ctx = tables.context;
	
		// Truncate to the first matched table
		return ctx.length ?
			new _Api( ctx[0] ) :
			tables;
	} );
	
	
	_api_registerPlural( 'tables().nodes()', 'table().node()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTable;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().body()', 'table().body()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTBody;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().header()', 'table().header()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTHead;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().footer()', 'table().footer()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTFoot;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().containers()', 'table().container()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTableWrapper;
		}, 1 );
	} );
	
	
	
	/**
	 * Redraw the tables in the current context.
	 *
	 * @param {boolean} [reset=true] Reset (default) or hold the current paging
	 *   position. A full re-sort and re-filter is performed when this method is
	 *   called, which is why the pagination reset is the default action.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'draw()', function ( resetPaging ) {
		return this.iterator( 'table', function ( settings ) {
			_fnReDraw( settings, resetPaging===false );
		} );
	} );
	
	
	
	/**
	 * Get the current page index.
	 *
	 * @return {integer} Current page index (zero based)
	 *//**
	 * Set the current page.
	 *
	 * Note that if you attempt to show a page which does not exist, DataTables will
	 * not throw an error, but rather reset the paging.
	 *
	 * @param {integer|string} action The paging action to take. This can be one of:
	 *  * `integer` - The page index to jump to
	 *  * `string` - An action to take:
	 *    * `first` - Jump to first page.
	 *    * `next` - Jump to the next page
	 *    * `previous` - Jump to previous page
	 *    * `last` - Jump to the last page.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page()', function ( action ) {
		if ( action === undefined ) {
			return this.page.info().page; // not an expensive call
		}
	
		// else, have an action to take on all tables
		return this.iterator( 'table', function ( settings ) {
			_fnPageChange( settings, action );
		} );
	} );
	
	
	/**
	 * Paging information for the first table in the current context.
	 *
	 * If you require paging information for another table, use the `table()` method
	 * with a suitable selector.
	 *
	 * @return {object} Object with the following properties set:
	 *  * `page` - Current page index (zero based - i.e. the first page is `0`)
	 *  * `pages` - Total number of pages
	 *  * `start` - Display index for the first record shown on the current page
	 *  * `end` - Display index for the last record shown on the current page
	 *  * `length` - Display length (number of records). Note that generally `start
	 *    + length = end`, but this is not always true, for example if there are
	 *    only 2 records to show on the final page, with a length of 10.
	 *  * `recordsTotal` - Full data set length
	 *  * `recordsDisplay` - Data set length once the current filtering criterion
	 *    are applied.
	 */
	_api_register( 'page.info()', function ( action ) {
		if ( this.context.length === 0 ) {
			return undefined;
		}
	
		var
			settings   = this.context[0],
			start      = settings._iDisplayStart,
			len        = settings._iDisplayLength,
			visRecords = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return {
			"page":           all ? 0 : Math.floor( start / len ),
			"pages":          all ? 1 : Math.ceil( visRecords / len ),
			"start":          start,
			"end":            settings.fnDisplayEnd(),
			"length":         len,
			"recordsTotal":   settings.fnRecordsTotal(),
			"recordsDisplay": visRecords
		};
	} );
	
	
	/**
	 * Get the current page length.
	 *
	 * @return {integer} Current page length. Note `-1` indicates that all records
	 *   are to be shown.
	 *//**
	 * Set the current page length.
	 *
	 * @param {integer} Page length to set. Use `-1` to show all records.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page.len()', function ( len ) {
		// Note that we can't call this function 'length()' because `length`
		// is a Javascript property of functions which defines how many arguments
		// the function expects.
		if ( len === undefined ) {
			return this.context.length !== 0 ?
				this.context[0]._iDisplayLength :
				undefined;
		}
	
		// else, set the page length
		return this.iterator( 'table', function ( settings ) {
			_fnLengthChange( settings, len );
		} );
	} );
	
	
	
	var __reload = function ( settings, holdPosition, callback ) {
		if ( _fnDataSource( settings ) == 'ssp' ) {
			_fnReDraw( settings, holdPosition );
		}
		else {
			// Trigger xhr
			_fnProcessingDisplay( settings, true );
	
			_fnBuildAjax( settings, [], function( json ) {
				_fnClearTable( settings );
	
				var data = _fnAjaxDataSrc( settings, json );
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					_fnAddData( settings, data[i] );
				}
	
				_fnReDraw( settings, holdPosition );
				_fnProcessingDisplay( settings, false );
			} );
		}
	
		// Use the draw event to trigger a callback, regardless of if it is an async
		// or sync draw
		if ( callback ) {
			var api = new _Api( settings );
	
			api.one( 'draw', function () {
				callback( api.ajax.json() );
			} );
		}
	};
	
	
	/**
	 * Get the JSON response from the last Ajax request that DataTables made to the
	 * server. Note that this returns the JSON from the first table in the current
	 * context.
	 *
	 * @return {object} JSON received from the server.
	 */
	_api_register( 'ajax.json()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].json;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Get the data submitted in the last Ajax request
	 */
	_api_register( 'ajax.params()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].oAjaxData;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Reload tables from the Ajax data source. Note that this function will
	 * automatically re-draw the table when the remote data has been loaded.
	 *
	 * @param {boolean} [reset=true] Reset (default) or hold the current paging
	 *   position. A full re-sort and re-filter is performed when this method is
	 *   called, which is why the pagination reset is the default action.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.reload()', function ( callback, resetPaging ) {
		return this.iterator( 'table', function (settings) {
			__reload( settings, resetPaging===false, callback );
		} );
	} );
	
	
	/**
	 * Get the current Ajax URL. Note that this returns the URL from the first
	 * table in the current context.
	 *
	 * @return {string} Current Ajax source URL
	 *//**
	 * Set the Ajax URL. Note that this will set the URL for all tables in the
	 * current context.
	 *
	 * @param {string} url URL to set.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url()', function ( url ) {
		var ctx = this.context;
	
		if ( url === undefined ) {
			// get
			if ( ctx.length === 0 ) {
				return undefined;
			}
			ctx = ctx[0];
	
			return ctx.ajax ?
				$.isPlainObject( ctx.ajax ) ?
					ctx.ajax.url :
					ctx.ajax :
				ctx.sAjaxSource;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( $.isPlainObject( settings.ajax ) ) {
				settings.ajax.url = url;
			}
			else {
				settings.ajax = url;
			}
			// No need to consider sAjaxSource here since DataTables gives priority
			// to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
			// value of `sAjaxSource` redundant.
		} );
	} );
	
	
	/**
	 * Load data from the newly set Ajax URL. Note that this method is only
	 * available when `ajax.url()` is used to set a URL. Additionally, this method
	 * has the same effect as calling `ajax.reload()` but is provided for
	 * convenience when setting a new URL. Like `ajax.reload()` it will
	 * automatically redraw the table once the remote data has been loaded.
	 *
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url().load()', function ( callback, resetPaging ) {
		// Same as a reload, but makes sense to present it for easy access after a
		// url change
		return this.iterator( 'table', function ( ctx ) {
			__reload( ctx, resetPaging===false, callback );
		} );
	} );
	
	
	
	
	var _selector_run = function ( selector, select )
	{
		var
			out = [], res,
			a, i, ien, j, jen,
			selectorType = typeof selector;
	
		// Can't just check for isArray here, as an API or jQuery instance might be
		// given with their array like look
		if ( ! selector || selectorType === 'string' || selectorType === 'function' || selector.length === undefined ) {
			selector = [ selector ];
		}
	
		for ( i=0, ien=selector.length ; i<ien ; i++ ) {
			a = selector[i] && selector[i].split ?
				selector[i].split(',') :
				[ selector[i] ];
	
			for ( j=0, jen=a.length ; j<jen ; j++ ) {
				res = select( typeof a[j] === 'string' ? $.trim(a[j]) : a[j] );
	
				if ( res && res.length ) {
					out.push.apply( out, res );
				}
			}
		}
	
		return out;
	};
	
	
	var _selector_opts = function ( opts )
	{
		if ( ! opts ) {
			opts = {};
		}
	
		// Backwards compatibility for 1.9- which used the terminology filter rather
		// than search
		if ( opts.filter && ! opts.search ) {
			opts.search = opts.filter;
		}
	
		return {
			search: opts.search || 'none',
			order:  opts.order  || 'current',
			page:   opts.page   || 'all'
		};
	};
	
	
	var _selector_first = function ( inst )
	{
		// Reduce the API instance to the first item found
		for ( var i=0, ien=inst.length ; i<ien ; i++ ) {
			if ( inst[i].length > 0 ) {
				// Assign the first element to the first item in the instance
				// and truncate the instance and context
				inst[0] = inst[i];
				inst.length = 1;
				inst.context = [ inst.context[i] ];
	
				return inst;
			}
		}
	
		// Not found - return an empty instance
		inst.length = 0;
		return inst;
	};
	
	
	var _selector_row_indexes = function ( settings, opts )
	{
		var
			i, ien, tmp, a=[],
			displayFiltered = settings.aiDisplay,
			displayMaster = settings.aiDisplayMaster;
	
		var
			search = opts.search,  // none, applied, removed
			order  = opts.order,   // applied, current, index (original - compatibility with 1.9)
			page   = opts.page;    // all, current
	
		if ( _fnDataSource( settings ) == 'ssp' ) {
			// In server-side processing mode, most options are irrelevant since
			// rows not shown don't exist and the index order is the applied order
			// Removed is a special case - for consistency just return an empty
			// array
			return search === 'removed' ?
				[] :
				_range( 0, displayMaster.length );
		}
		else if ( page == 'current' ) {
			// Current page implies that order=current and fitler=applied, since it is
			// fairly senseless otherwise, regardless of what order and search actually
			// are
			for ( i=settings._iDisplayStart, ien=settings.fnDisplayEnd() ; i<ien ; i++ ) {
				a.push( displayFiltered[i] );
			}
		}
		else if ( order == 'current' || order == 'applied' ) {
			a = search == 'none' ?
				displayMaster.slice() :                      // no search
				search == 'applied' ?
					displayFiltered.slice() :                // applied search
					$.map( displayMaster, function (el, i) { // removed search
						return $.inArray( el, displayFiltered ) === -1 ? el : null;
					} );
		}
		else if ( order == 'index' || order == 'original' ) {
			for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				if ( search == 'none' ) {
					a.push( i );
				}
				else { // applied | removed
					tmp = $.inArray( i, displayFiltered );
	
					if ((tmp === -1 && search == 'removed') ||
						(tmp >= 0   && search == 'applied') )
					{
						a.push( i );
					}
				}
			}
		}
	
		return a;
	};
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Rows
	 *
	 * {}          - no selector - use all available rows
	 * {integer}   - row aoData index
	 * {node}      - TR node
	 * {string}    - jQuery selector to apply to the TR elements
	 * {array}     - jQuery array of nodes, or simply an array of TR nodes
	 *
	 */
	
	
	var __row_selector = function ( settings, selector, opts )
	{
		return _selector_run( selector, function ( sel ) {
			var selInt = _intVal( sel );
			var i, ien;
	
			// Short cut - selector is a number and no options provided (default is
			// all records, so no need to check if the index is in there, since it
			// must be - dev error if the index doesn't exist).
			if ( selInt !== null && ! opts ) {
				return [ selInt ];
			}
	
			var rows = _selector_row_indexes( settings, opts );
	
			if ( selInt !== null && $.inArray( selInt, rows ) !== -1 ) {
				// Selector - integer
				return [ selInt ];
			}
			else if ( ! sel ) {
				// Selector - none
				return rows;
			}
	
			// Selector - function
			if ( typeof sel === 'function' ) {
				return $.map( rows, function (idx) {
					var row = settings.aoData[ idx ];
					return sel( idx, row._aData, row.nTr ) ? idx : null;
				} );
			}
	
			// Get nodes in the order from the `rows` array with null values removed
			var nodes = _removeEmpty(
				_pluck_order( settings.aoData, rows, 'nTr' )
			);
	
			// Selector - node
			if ( sel.nodeName ) {
				if ( $.inArray( sel, nodes ) !== -1 ) {
					return [ sel._DT_RowIndex ]; // sel is a TR node that is in the table
					                             // and DataTables adds a prop for fast lookup
				}
			}
	
			// Selector - jQuery selector string, array of nodes or jQuery object/
			// As jQuery's .filter() allows jQuery objects to be passed in filter,
			// it also allows arrays, so this will cope with all three options
			return $(nodes)
				.filter( sel )
				.map( function () {
					return this._DT_RowIndex;
				} )
				.toArray();
		} );
	};
	
	
	/**
	 *
	 */
	_api_register( 'rows()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __row_selector( settings, selector, opts );
		}, 1 );
	
		// Want argument shifting here and in __row_selector?
		inst.selector.rows = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	
	_api_register( 'rows().nodes()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return settings.aoData[ row ].nTr || undefined;
		}, 1 );
	} );
	
	_api_register( 'rows().data()', function () {
		return this.iterator( true, 'rows', function ( settings, rows ) {
			return _pluck_order( settings.aoData, rows, '_aData' );
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().cache()', 'row().cache()', function ( type ) {
		return this.iterator( 'row', function ( settings, row ) {
			var r = settings.aoData[ row ];
			return type === 'search' ? r._aFilterData : r._aSortData;
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().invalidate()', 'row().invalidate()', function ( src ) {
		return this.iterator( 'row', function ( settings, row ) {
			_fnInvalidate( settings, row, src );
		} );
	} );
	
	_api_registerPlural( 'rows().indexes()', 'row().index()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return row;
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().remove()', 'row().remove()', function () {
		var that = this;
	
		return this.iterator( 'row', function ( settings, row, thatIdx ) {
			var data = settings.aoData;
	
			data.splice( row, 1 );
	
			// Update the _DT_RowIndex parameter on all rows in the table
			for ( var i=0, ien=data.length ; i<ien ; i++ ) {
				if ( data[i].nTr !== null ) {
					data[i].nTr._DT_RowIndex = i;
				}
			}
	
			// Remove the target row from the search array
			var displayIndex = $.inArray( row, settings.aiDisplay );
	
			// Delete from the display arrays
			_fnDeleteIndex( settings.aiDisplayMaster, row );
			_fnDeleteIndex( settings.aiDisplay, row );
			_fnDeleteIndex( that[ thatIdx ], row, false ); // maintain local indexes
	
			// Check for an 'overflow' they case for displaying the table
			_fnLengthOverflow( settings );
		} );
	} );
	
	
	_api_register( 'rows.add()', function ( rows ) {
		var newRows = this.iterator( 'table', function ( settings ) {
				var row, i, ien;
				var out = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
						out.push( _fnAddTr( settings, row )[0] );
					}
					else {
						out.push( _fnAddData( settings, row ) );
					}
				}
	
				return out;
			}, 1 );
	
		// Return an Api.rows() extended instance, so rows().nodes() etc can be used
		var modRows = this.rows( -1 );
		modRows.pop();
		modRows.push.apply( modRows, newRows.toArray() );
	
		return modRows;
	} );
	
	
	
	
	
	/**
	 *
	 */
	_api_register( 'row()', function ( selector, opts ) {
		return _selector_first( this.rows( selector, opts ) );
	} );
	
	
	_api_register( 'row().data()', function ( data ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// Get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._aData :
				undefined;
		}
	
		// Set
		ctx[0].aoData[ this[0] ]._aData = data;
	
		// Automatically invalidate
		_fnInvalidate( ctx[0], this[0], 'data' );
	
		return this;
	} );
	
	
	_api_register( 'row().node()', function () {
		var ctx = this.context;
	
		return ctx.length && this.length ?
			ctx[0].aoData[ this[0] ].nTr || null :
			null;
	} );
	
	
	_api_register( 'row.add()', function ( row ) {
		// Allow a jQuery object to be passed in - only a single row is added from
		// it though - the first element in the set
		if ( row instanceof $ && row.length ) {
			row = row[0];
		}
	
		var rows = this.iterator( 'table', function ( settings ) {
			if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
				return _fnAddTr( settings, row )[0];
			}
			return _fnAddData( settings, row );
		} );
	
		// Return an Api.rows() extended instance, with the newly added row selected
		return this.row( rows[0] );
	} );
	
	
	
	var __details_add = function ( ctx, row, data, klass )
	{
		// Convert to array of TR elements
		var rows = [];
		var addRow = function ( r, k ) {
			// If we get a TR element, then just add it directly - up to the dev
			// to add the correct number of columns etc
			if ( r.nodeName && r.nodeName.toLowerCase() === 'tr' ) {
				rows.push( r );
			}
			else {
				// Otherwise create a row with a wrapper
				var created = $('<tr><td/></tr>').addClass( k );
				$('td', created)
					.addClass( k )
					.html( r )
					[0].colSpan = _fnVisbleColumns( ctx );
	
				rows.push( created[0] );
			}
		};
	
		if ( $.isArray( data ) || data instanceof $ ) {
			for ( var i=0, ien=data.length ; i<ien ; i++ ) {
				addRow( data[i], klass );
			}
		}
		else {
			addRow( data, klass );
		}
	
		if ( row._details ) {
			row._details.remove();
		}
	
		row._details = $(rows);
	
		// If the children were already shown, that state should be retained
		if ( row._detailsShow ) {
			row._details.insertAfter( row.nTr );
		}
	};
	
	
	var __details_remove = function ( api, idx )
	{
		var ctx = api.context;
	
		if ( ctx.length ) {
			var row = ctx[0].aoData[ idx !== undefined ? idx : api[0] ];
	
			if ( row._details ) {
				row._details.remove();
	
				row._detailsShow = undefined;
				row._details = undefined;
			}
		}
	};
	
	
	var __details_display = function ( api, show ) {
		var ctx = api.context;
	
		if ( ctx.length && api.length ) {
			var row = ctx[0].aoData[ api[0] ];
	
			if ( row._details ) {
				row._detailsShow = show;
	
				if ( show ) {
					row._details.insertAfter( row.nTr );
				}
				else {
					row._details.detach();
				}
	
				__details_events( ctx[0] );
			}
		}
	};
	
	
	var __details_events = function ( settings )
	{
		var api = new _Api( settings );
		var namespace = '.dt.DT_details';
		var drawEvent = 'draw'+namespace;
		var colvisEvent = 'column-visibility'+namespace;
		var destroyEvent = 'destroy'+namespace;
		var data = settings.aoData;
	
		api.off( drawEvent +' '+ colvisEvent +' '+ destroyEvent );
	
		if ( _pluck( data, '_details' ).length > 0 ) {
			// On each draw, insert the required elements into the document
			api.on( drawEvent, function ( e, ctx ) {
				if ( settings !== ctx ) {
					return;
				}
	
				api.rows( {page:'current'} ).eq(0).each( function (idx) {
					// Internal data grab
					var row = data[ idx ];
	
					if ( row._detailsShow ) {
						row._details.insertAfter( row.nTr );
					}
				} );
			} );
	
			// Column visibility change - update the colspan
			api.on( colvisEvent, function ( e, ctx, idx, vis ) {
				if ( settings !== ctx ) {
					return;
				}
	
				// Update the colspan for the details rows (note, only if it already has
				// a colspan)
				var row, visible = _fnVisbleColumns( ctx );
	
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					row = data[i];
	
					if ( row._details ) {
						row._details.children('td[colspan]').attr('colspan', visible );
					}
				}
			} );
	
			// Table destroyed - nuke any child rows
			api.on( destroyEvent, function ( e, ctx ) {
				if ( settings !== ctx ) {
					return;
				}
	
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					if ( data[i]._details ) {
						__details_remove( api, i );
					}
				}
			} );
		}
	};
	
	// Strings for the method names to help minification
	var _emp = '';
	var _child_obj = _emp+'row().child';
	var _child_mth = _child_obj+'()';
	
	// data can be:
	//  tr
	//  string
	//  jQuery or array of any of the above
	_api_register( _child_mth, function ( data, klass ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._details :
				undefined;
		}
		else if ( data === true ) {
			// show
			this.child.show();
		}
		else if ( data === false ) {
			// remove
			__details_remove( this );
		}
		else if ( ctx.length && this.length ) {
			// set
			__details_add( ctx[0], ctx[0].aoData[ this[0] ], data, klass );
		}
	
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.show()',
		_child_mth+'.show()' // only when `child()` was called with parameters (without
	], function ( show ) {   // it returns an object and this method is not executed)
		__details_display( this, true );
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.hide()',
		_child_mth+'.hide()' // only when `child()` was called with parameters (without
	], function () {         // it returns an object and this method is not executed)
		__details_display( this, false );
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.remove()',
		_child_mth+'.remove()' // only when `child()` was called with parameters (without
	], function () {           // it returns an object and this method is not executed)
		__details_remove( this );
		return this;
	} );
	
	
	_api_register( _child_obj+'.isShown()', function () {
		var ctx = this.context;
	
		if ( ctx.length && this.length ) {
			// _detailsShown as false or undefined will fall through to return false
			return ctx[0].aoData[ this[0] ]._detailsShow || false;
		}
		return false;
	} );
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Columns
	 *
	 * {integer}           - column index (>=0 count from left, <0 count from right)
	 * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
	 * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
	 * "{string}:name"     - column name
	 * "{string}"          - jQuery selector on column header nodes
	 *
	 */
	
	// can be an array of these items, comma separated list, or an array of comma
	// separated lists
	
	var __re_column_selector = /^(.+):(name|visIdx|visible)$/;
	
	
	// r1 and r2 are redundant - but it means that the parameters match for the
	// iterator callback in columns().data()
	var __columnData = function ( settings, column, r1, r2, rows ) {
		var a = [];
		for ( var row=0, ien=rows.length ; row<ien ; row++ ) {
			a.push( _fnGetCellData( settings, rows[row], column ) );
		}
		return a;
	};
	
	
	var __column_selector = function ( settings, selector, opts )
	{
		var
			columns = settings.aoColumns,
			names = _pluck( columns, 'sName' ),
			nodes = _pluck( columns, 'nTh' );
	
		return _selector_run( selector, function ( s ) {
			var selInt = _intVal( s );
	
			// Selector - all
			if ( s === '' ) {
				return _range( columns.length );
			}
			
			// Selector - index
			if ( selInt !== null ) {
				return [ selInt >= 0 ?
					selInt : // Count from left
					columns.length + selInt // Count from right (+ because its a negative value)
				];
			}
			
			// Selector = function
			if ( typeof s === 'function' ) {
				var rows = _selector_row_indexes( settings, opts );
	
				return $.map( columns, function (col, idx) {
					return s(
							idx,
							__columnData( settings, idx, 0, 0, rows ),
							nodes[ idx ]
						) ? idx : null;
				} );
			}
	
			// jQuery or string selector
			var match = typeof s === 'string' ?
				s.match( __re_column_selector ) :
				'';
	
			if ( match ) {
				switch( match[2] ) {
					case 'visIdx':
					case 'visible':
						var idx = parseInt( match[1], 10 );
						// Visible index given, convert to column index
						if ( idx < 0 ) {
							// Counting from the right
							var visColumns = $.map( columns, function (col,i) {
								return col.bVisible ? i : null;
							} );
							return [ visColumns[ visColumns.length + idx ] ];
						}
						// Counting from the left
						return [ _fnVisibleToColumnIndex( settings, idx ) ];
	
					case 'name':
						// match by name. `names` is column index complete and in order
						return $.map( names, function (name, i) {
							return name === match[1] ? i : null;
						} );
				}
			}
			else {
				// jQuery selector on the TH elements for the columns
				return $( nodes )
					.filter( s )
					.map( function () {
						return $.inArray( this, nodes ); // `nodes` is column index complete and in order
					} )
					.toArray();
			}
		} );
	};
	
	
	var __setColumnVis = function ( settings, column, vis, recalc ) {
		var
			cols = settings.aoColumns,
			col  = cols[ column ],
			data = settings.aoData,
			row, cells, i, ien, tr;
	
		// Get
		if ( vis === undefined ) {
			return col.bVisible;
		}
	
		// Set
		// No change
		if ( col.bVisible === vis ) {
			return;
		}
	
		if ( vis ) {
			// Insert column
			// Need to decide if we should use appendChild or insertBefore
			var insertBefore = $.inArray( true, _pluck(cols, 'bVisible'), column+1 );
	
			for ( i=0, ien=data.length ; i<ien ; i++ ) {
				tr = data[i].nTr;
				cells = data[i].anCells;
	
				if ( tr ) {
					// insertBefore can act like appendChild if 2nd arg is null
					tr.insertBefore( cells[ column ], cells[ insertBefore ] || null );
				}
			}
		}
		else {
			// Remove column
			$( _pluck( settings.aoData, 'anCells', column ) ).detach();
		}
	
		// Common actions
		col.bVisible = vis;
		_fnDrawHead( settings, settings.aoHeader );
		_fnDrawHead( settings, settings.aoFooter );
	
		if ( recalc === undefined || recalc ) {
			// Automatically adjust column sizing
			_fnAdjustColumnSizing( settings );
	
			// Realign columns for scrolling
			if ( settings.oScroll.sX || settings.oScroll.sY ) {
				_fnScrollDraw( settings );
			}
		}
	
		_fnCallbackFire( settings, null, 'column-visibility', [settings, column, vis] );
	
		_fnSaveState( settings );
	};
	
	
	/**
	 *
	 */
	_api_register( 'columns()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __column_selector( settings, selector, opts );
		}, 1 );
	
		// Want argument shifting here and in _row_selector?
		inst.selector.cols = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	
	/**
	 *
	 */
	_api_registerPlural( 'columns().header()', 'column().header()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTh;
		}, 1 );
	} );
	
	
	/**
	 *
	 */
	_api_registerPlural( 'columns().footer()', 'column().footer()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTf;
		}, 1 );
	} );
	
	
	/**
	 *
	 */
	_api_registerPlural( 'columns().data()', 'column().data()', function () {
		return this.iterator( 'column-rows', __columnData, 1 );
	} );
	
	
	_api_registerPlural( 'columns().dataSrc()', 'column().dataSrc()', function () {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].mData;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'columns().cache()', 'column().cache()', function ( type ) {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows,
				type === 'search' ? '_aFilterData' : '_aSortData', column
			);
		}, 1 );
	} );
	
	
	_api_registerPlural( 'columns().nodes()', 'column().nodes()', function () {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows, 'anCells', column ) ;
		}, 1 );
	} );
	
	
	
	_api_registerPlural( 'columns().visible()', 'column().visible()', function ( vis, calc ) {
		return this.iterator( 'column', function ( settings, column ) {
			if ( vis === undefined ) {
				return settings.aoColumns[ column ].bVisible;
			} // else
			__setColumnVis( settings, column, vis, calc );
		} );
	} );
	
	
	
	_api_registerPlural( 'columns().indexes()', 'column().index()', function ( type ) {
		return this.iterator( 'column', function ( settings, column ) {
			return type === 'visible' ?
				_fnColumnIndexToVisible( settings, column ) :
				column;
		}, 1 );
	} );
	
	
	// _api_register( 'columns().show()', function () {
	// 	var selector = this.selector;
	// 	return this.columns( selector.cols, selector.opts ).visible( true );
	// } );
	
	
	// _api_register( 'columns().hide()', function () {
	// 	var selector = this.selector;
	// 	return this.columns( selector.cols, selector.opts ).visible( false );
	// } );
	
	
	
	_api_register( 'columns.adjust()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnAdjustColumnSizing( settings );
		}, 1 );
	} );
	
	
	// Convert from one column index type, to another type
	_api_register( 'column.index()', function ( type, idx ) {
		if ( this.context.length !== 0 ) {
			var ctx = this.context[0];
	
			if ( type === 'fromVisible' || type === 'toData' ) {
				return _fnVisibleToColumnIndex( ctx, idx );
			}
			else if ( type === 'fromData' || type === 'toVisible' ) {
				return _fnColumnIndexToVisible( ctx, idx );
			}
		}
	} );
	
	
	_api_register( 'column()', function ( selector, opts ) {
		return _selector_first( this.columns( selector, opts ) );
	} );
	
	
	
	
	var __cell_selector = function ( settings, selector, opts )
	{
		var data = settings.aoData;
		var rows = _selector_row_indexes( settings, opts );
		var cells = _removeEmpty( _pluck_order( data, rows, 'anCells' ) );
		var allCells = $( [].concat.apply([], cells) );
		var row;
		var columns = settings.aoColumns.length;
		var a, i, ien, j, o, host;
	
		return _selector_run( selector, function ( s ) {
			var fnSelector = typeof s === 'function';
	
			if ( s === null || s === undefined || fnSelector ) {
				// All cells and function selectors
				a = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					for ( j=0 ; j<columns ; j++ ) {
						o = {
							row: row,
							column: j
						};
	
						if ( fnSelector ) {
							// Selector - function
							host = settings.aoData[ row ];
	
							if ( s( o, _fnGetCellData(settings, row, j), host.anCells[j] ) ) {
								a.push( o );
							}
						}
						else {
							// Selector - all
							a.push( o );
						}
					}
				}
	
				return a;
			}
			
			// Selector - index
			if ( $.isPlainObject( s ) ) {
				return [s];
			}
	
			// Selector - jQuery filtered cells
			return allCells
				.filter( s )
				.map( function (i, el) {
					row = el.parentNode._DT_RowIndex;
	
					return {
						row: row,
						column: $.inArray( el, data[ row ].anCells )
					};
				} )
				.toArray();
		} );
	};
	
	
	
	
	_api_register( 'cells()', function ( rowSelector, columnSelector, opts ) {
		// Argument shifting
		if ( $.isPlainObject( rowSelector ) ) {
			// Indexes
			if ( typeof rowSelector.row !== undefined ) {
				opts = columnSelector;
				columnSelector = null;
			}
			else {
				opts = rowSelector;
				rowSelector = null;
			}
		}
		if ( $.isPlainObject( columnSelector ) ) {
			opts = columnSelector;
			columnSelector = null;
		}
	
		// Cell selector
		if ( columnSelector === null || columnSelector === undefined ) {
			return this.iterator( 'table', function ( settings ) {
				return __cell_selector( settings, rowSelector, _selector_opts( opts ) );
			} );
		}
	
		// Row + column selector
		var columns = this.columns( columnSelector, opts );
		var rows = this.rows( rowSelector, opts );
		var a, i, ien, j, jen;
	
		var cells = this.iterator( 'table', function ( settings, idx ) {
			a = [];
	
			for ( i=0, ien=rows[idx].length ; i<ien ; i++ ) {
				for ( j=0, jen=columns[idx].length ; j<jen ; j++ ) {
					a.push( {
						row:    rows[idx][i],
						column: columns[idx][j]
					} );
				}
			}
	
			return a;
		}, 1 );
	
		$.extend( cells.selector, {
			cols: columnSelector,
			rows: rowSelector,
			opts: opts
		} );
	
		return cells;
	} );
	
	
	_api_registerPlural( 'cells().nodes()', 'cell().node()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			var cells = settings.aoData[ row ].anCells;
			return cells ?
				cells[ column ] :
				undefined;
		}, 1 );
	} );
	
	
	_api_register( 'cells().data()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column );
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().cache()', 'cell().cache()', function ( type ) {
		type = type === 'search' ? '_aFilterData' : '_aSortData';
	
		return this.iterator( 'cell', function ( settings, row, column ) {
			return settings.aoData[ row ][ type ][ column ];
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().render()', 'cell().render()', function ( type ) {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column, type );
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().indexes()', 'cell().index()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return {
				row: row,
				column: column,
				columnVisible: _fnColumnIndexToVisible( settings, column )
			};
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().invalidate()', 'cell().invalidate()', function ( src ) {
		return this.iterator( 'cell', function ( settings, row, column ) {
			_fnInvalidate( settings, row, src, column );
		} );
	} );
	
	
	
	_api_register( 'cell()', function ( rowSelector, columnSelector, opts ) {
		return _selector_first( this.cells( rowSelector, columnSelector, opts ) );
	} );
	
	
	_api_register( 'cell().data()', function ( data ) {
		var ctx = this.context;
		var cell = this[0];
	
		if ( data === undefined ) {
			// Get
			return ctx.length && cell.length ?
				_fnGetCellData( ctx[0], cell[0].row, cell[0].column ) :
				undefined;
		}
	
		// Set
		_fnSetCellData( ctx[0], cell[0].row, cell[0].column, data );
		_fnInvalidate( ctx[0], cell[0].row, 'data', cell[0].column );
	
		return this;
	} );
	
	
	
	/**
	 * Get current ordering (sorting) that has been applied to the table.
	 *
	 * @returns {array} 2D array containing the sorting information for the first
	 *   table in the current context. Each element in the parent array represents
	 *   a column being sorted upon (i.e. multi-sorting with two columns would have
	 *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
	 *   the column index that the sorting condition applies to, the second is the
	 *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
	 *   index of the sorting order from the `column.sorting` initialisation array.
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {integer} order Column index to sort upon.
	 * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 1D array of sorting information to be applied.
	 * @param {array} [...] Optional additional sorting conditions
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 2D array of sorting information to be applied.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order()', function ( order, dir ) {
		var ctx = this.context;
	
		if ( order === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].aaSorting :
				undefined;
		}
	
		// set
		if ( typeof order === 'number' ) {
			// Simple column / direction passed in
			order = [ [ order, dir ] ];
		}
		else if ( ! $.isArray( order[0] ) ) {
			// Arguments passed in (list of 1D arrays)
			order = Array.prototype.slice.call( arguments );
		}
		// otherwise a 2D array was passed in
	
		return this.iterator( 'table', function ( settings ) {
			settings.aaSorting = order.slice();
		} );
	} );
	
	
	/**
	 * Attach a sort listener to an element for a given column
	 *
	 * @param {node|jQuery|string} node Identifier for the element(s) to attach the
	 *   listener to. This can take the form of a single DOM node, a jQuery
	 *   collection of nodes or a jQuery selector which will identify the node(s).
	 * @param {integer} column the column that a click on this node will sort on
	 * @param {function} [callback] callback function when sort is run
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order.listener()', function ( node, column, callback ) {
		return this.iterator( 'table', function ( settings ) {
			_fnSortAttachListener( settings, node, column, callback );
		} );
	} );
	
	
	// Order by the selected column(s)
	_api_register( [
		'columns().order()',
		'column().order()'
	], function ( dir ) {
		var that = this;
	
		return this.iterator( 'table', function ( settings, i ) {
			var sort = [];
	
			$.each( that[i], function (j, col) {
				sort.push( [ col, dir ] );
			} );
	
			settings.aaSorting = sort;
		} );
	} );
	
	
	
	_api_register( 'search()', function ( input, regex, smart, caseInsen ) {
		var ctx = this.context;
	
		if ( input === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].oPreviousSearch.sSearch :
				undefined;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( ! settings.oFeatures.bFilter ) {
				return;
			}
	
			_fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {
				"sSearch": input+"",
				"bRegex":  regex === null ? false : regex,
				"bSmart":  smart === null ? true  : smart,
				"bCaseInsensitive": caseInsen === null ? true : caseInsen
			} ), 1 );
		} );
	} );
	
	
	_api_registerPlural(
		'columns().search()',
		'column().search()',
		function ( input, regex, smart, caseInsen ) {
			return this.iterator( 'column', function ( settings, column ) {
				var preSearch = settings.aoPreSearchCols;
	
				if ( input === undefined ) {
					// get
					return preSearch[ column ].sSearch;
				}
	
				// set
				if ( ! settings.oFeatures.bFilter ) {
					return;
				}
	
				$.extend( preSearch[ column ], {
					"sSearch": input+"",
					"bRegex":  regex === null ? false : regex,
					"bSmart":  smart === null ? true  : smart,
					"bCaseInsensitive": caseInsen === null ? true : caseInsen
				} );
	
				_fnFilterComplete( settings, settings.oPreviousSearch, 1 );
			} );
		}
	);
	
	/*
	 * State API methods
	 */
	
	_api_register( 'state()', function () {
		return this.context.length ?
			this.context[0].oSavedState :
			null;
	} );
	
	
	_api_register( 'state.clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			// Save an empty object
			settings.fnStateSaveCallback.call( settings.oInstance, settings, {} );
		} );
	} );
	
	
	_api_register( 'state.loaded()', function () {
		return this.context.length ?
			this.context[0].oLoadedState :
			null;
	} );
	
	
	_api_register( 'state.save()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnSaveState( settings );
		} );
	} );
	
	
	
	/**
	 * Provide a common method for plug-ins to check the version of DataTables being
	 * used, in order to ensure compatibility.
	 *
	 *  @param {string} version Version string to check for, in the format "X.Y.Z".
	 *    Note that the formats "X" and "X.Y" are also acceptable.
	 *  @returns {boolean} true if this version of DataTables is greater or equal to
	 *    the required version, or false if this version of DataTales is not
	 *    suitable
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
	 */
	DataTable.versionCheck = DataTable.fnVersionCheck = function( version )
	{
		var aThis = DataTable.version.split('.');
		var aThat = version.split('.');
		var iThis, iThat;
	
		for ( var i=0, iLen=aThat.length ; i<iLen ; i++ ) {
			iThis = parseInt( aThis[i], 10 ) || 0;
			iThat = parseInt( aThat[i], 10 ) || 0;
	
			// Parts are the same, keep comparing
			if (iThis === iThat) {
				continue;
			}
	
			// Parts are different, return immediately
			return iThis > iThat;
		}
	
		return true;
	};
	
	
	/**
	 * Check if a `<table>` node is a DataTable table already or not.
	 *
	 *  @param {node|jquery|string} table Table node, jQuery object or jQuery
	 *      selector for the table to test. Note that if more than more than one
	 *      table is passed on, only the first will be checked
	 *  @returns {boolean} true the table given is a DataTable, or false otherwise
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
	 *      $('#example').dataTable();
	 *    }
	 */
	DataTable.isDataTable = DataTable.fnIsDataTable = function ( table )
	{
		var t = $(table).get(0);
		var is = false;
	
		$.each( DataTable.settings, function (i, o) {
			if ( o.nTable === t || o.nScrollHead === t || o.nScrollFoot === t ) {
				is = true;
			}
		} );
	
		return is;
	};
	
	
	/**
	 * Get all DataTable tables that have been initialised - optionally you can
	 * select to get only currently visible tables.
	 *
	 *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
	 *    or visible tables only.
	 *  @returns {array} Array of `table` nodes (not DataTable instances) which are
	 *    DataTables
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    $.each( $.fn.dataTable.tables(true), function () {
	 *      $(table).DataTable().columns.adjust();
	 *    } );
	 */
	DataTable.tables = DataTable.fnTables = function ( visible )
	{
		return $.map( DataTable.settings, function (o) {
			if ( !visible || (visible && $(o.nTable).is(':visible')) ) {
				return o.nTable;
			}
		} );
	};
	
	
	/**
	 * DataTables utility methods
	 * 
	 * This namespace provides helper methods that DataTables uses internally to
	 * create a DataTable, but which are not exclusively used only for DataTables.
	 * These methods can be used by extension authors to save the duplication of
	 * code.
	 *
	 *  @namespace
	 */
	DataTable.util = {
		/**
		 * Throttle the calls to a function. Arguments and context are maintained
		 * for the throttled function.
		 *
		 * @param {function} fn Function to be called
		 * @param {integer} freq Call frequency in mS
		 * @return {function} Wrapped function
		 */
		throttle: _fnThrottle,
	
	
		/**
		 * Escape a string such that it can be used in a regular expression
		 *
		 *  @param {string} sVal string to escape
		 *  @returns {string} escaped string
		 */
		escapeRegex: _fnEscapeRegex
	};
	
	
	/**
	 * Convert from camel case parameters to Hungarian notation. This is made public
	 * for the extensions to provide the same ability as DataTables core to accept
	 * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
	 * parameters.
	 *
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 */
	DataTable.camelToHungarian = _fnCamelToHungarian;
	
	
	
	/**
	 *
	 */
	_api_register( '$()', function ( selector, opts ) {
		var
			rows   = this.rows( opts ).nodes(), // Get all rows
			jqRows = $(rows);
	
		return $( [].concat(
			jqRows.filter( selector ).toArray(),
			jqRows.find( selector ).toArray()
		) );
	} );
	
	
	// jQuery functions to operate on the tables
	$.each( [ 'on', 'one', 'off' ], function (i, key) {
		_api_register( key+'()', function ( /* event, handler */ ) {
			var args = Array.prototype.slice.call(arguments);
	
			// Add the `dt` namespace automatically if it isn't already present
			if ( ! args[0].match(/\.dt\b/) ) {
				args[0] += '.dt';
			}
	
			var inst = $( this.tables().nodes() );
			inst[key].apply( inst, args );
			return this;
		} );
	} );
	
	
	_api_register( 'clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnClearTable( settings );
		} );
	} );
	
	
	_api_register( 'settings()', function () {
		return new _Api( this.context, this.context );
	} );
	
	
	_api_register( 'data()', function () {
		return this.iterator( 'table', function ( settings ) {
			return _pluck( settings.aoData, '_aData' );
		} ).flatten();
	} );
	
	
	_api_register( 'destroy()', function ( remove ) {
		remove = remove || false;
	
		return this.iterator( 'table', function ( settings ) {
			var orig      = settings.nTableWrapper.parentNode;
			var classes   = settings.oClasses;
			var table     = settings.nTable;
			var tbody     = settings.nTBody;
			var thead     = settings.nTHead;
			var tfoot     = settings.nTFoot;
			var jqTable   = $(table);
			var jqTbody   = $(tbody);
			var jqWrapper = $(settings.nTableWrapper);
			var rows      = $.map( settings.aoData, function (r) { return r.nTr; } );
			var i, ien;
	
			// Flag to note that the table is currently being destroyed - no action
			// should be taken
			settings.bDestroying = true;
	
			// Fire off the destroy callbacks for plug-ins etc
			_fnCallbackFire( settings, "aoDestroyCallback", "destroy", [settings] );
	
			// If not being removed from the document, make all columns visible
			if ( ! remove ) {
				new _Api( settings ).columns().visible( true );
			}
	
			// Blitz all `DT` namespaced events (these are internal events, the
			// lowercase, `dt` events are user subscribed and they are responsible
			// for removing them
			jqWrapper.unbind('.DT').find(':not(tbody *)').unbind('.DT');
			$(window).unbind('.DT-'+settings.sInstance);
	
			// When scrolling we had to break the table up - restore it
			if ( table != thead.parentNode ) {
				jqTable.children('thead').detach();
				jqTable.append( thead );
			}
	
			if ( tfoot && table != tfoot.parentNode ) {
				jqTable.children('tfoot').detach();
				jqTable.append( tfoot );
			}
	
			// Remove the DataTables generated nodes, events and classes
			jqTable.detach();
			jqWrapper.detach();
	
			settings.aaSorting = [];
			settings.aaSortingFixed = [];
			_fnSortingClasses( settings );
	
			$( rows ).removeClass( settings.asStripeClasses.join(' ') );
	
			$('th, td', thead).removeClass( classes.sSortable+' '+
				classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone
			);
	
			if ( settings.bJUI ) {
				$('th span.'+classes.sSortIcon+ ', td span.'+classes.sSortIcon, thead).detach();
				$('th, td', thead).each( function () {
					var wrapper = $('div.'+classes.sSortJUIWrapper, this);
					$(this).append( wrapper.contents() );
					wrapper.detach();
				} );
			}
	
			if ( ! remove && orig ) {
				// insertBefore acts like appendChild if !arg[1]
				orig.insertBefore( table, settings.nTableReinsertBefore );
			}
	
			// Add the TR elements back into the table in their original order
			jqTbody.children().detach();
			jqTbody.append( rows );
	
			// Restore the width of the original table - was read from the style property,
			// so we can restore directly to that
			jqTable
				.css( 'width', settings.sDestroyWidth )
				.removeClass( classes.sTable );
	
			// If the were originally stripe classes - then we add them back here.
			// Note this is not fool proof (for example if not all rows had stripe
			// classes - but it's a good effort without getting carried away
			ien = settings.asDestroyStripes.length;
	
			if ( ien ) {
				jqTbody.children().each( function (i) {
					$(this).addClass( settings.asDestroyStripes[i % ien] );
				} );
			}
	
			/* Remove the settings object from the settings array */
			var idx = $.inArray( settings, DataTable.settings );
			if ( idx !== -1 ) {
				DataTable.settings.splice( idx, 1 );
			}
		} );
	} );
	

	/**
	 * Version string for plug-ins to check compatibility. Allowed format is
	 * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
	 * only for non-release builds. See http://semver.org/ for more information.
	 *  @member
	 *  @type string
	 *  @default Version number
	 */
	DataTable.version = "1.10.4";

	/**
	 * Private data store, containing all of the settings objects that are
	 * created for the tables on a given page.
	 *
	 * Note that the `DataTable.settings` object is aliased to
	 * `jQuery.fn.dataTableExt` through which it may be accessed and
	 * manipulated, or `jQuery.fn.dataTable.settings`.
	 *  @member
	 *  @type array
	 *  @default []
	 *  @private
	 */
	DataTable.settings = [];

	/**
	 * Object models container, for the various models that DataTables has
	 * available to it. These models define the objects that are used to hold
	 * the active state and configuration of the table.
	 *  @namespace
	 */
	DataTable.models = {};
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * search information for the global filter and individual column filters.
	 *  @namespace
	 */
	DataTable.models.oSearch = {
		/**
		 * Flag to indicate if the filtering should be case insensitive or not
		 *  @type boolean
		 *  @default true
		 */
		"bCaseInsensitive": true,
	
		/**
		 * Applied search term
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sSearch": "",
	
		/**
		 * Flag to indicate if the search term should be interpreted as a
		 * regular expression (true) or not (false) and therefore and special
		 * regex characters escaped.
		 *  @type boolean
		 *  @default false
		 */
		"bRegex": false,
	
		/**
		 * Flag to indicate if DataTables is to use its smart filtering or not.
		 *  @type boolean
		 *  @default true
		 */
		"bSmart": true
	};
	
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * each individual row. This is the object format used for the settings
	 * aoData array.
	 *  @namespace
	 */
	DataTable.models.oRow = {
		/**
		 * TR element for the row
		 *  @type node
		 *  @default null
		 */
		"nTr": null,
	
		/**
		 * Array of TD elements for each row. This is null until the row has been
		 * created.
		 *  @type array nodes
		 *  @default []
		 */
		"anCells": null,
	
		/**
		 * Data object from the original data source for the row. This is either
		 * an array if using the traditional form of DataTables, or an object if
		 * using mData options. The exact type will depend on the passed in
		 * data from the data source, or will be an array if using DOM a data
		 * source.
		 *  @type array|object
		 *  @default []
		 */
		"_aData": [],
	
		/**
		 * Sorting data cache - this array is ostensibly the same length as the
		 * number of columns (although each index is generated only as it is
		 * needed), and holds the data that is used for sorting each column in the
		 * row. We do this cache generation at the start of the sort in order that
		 * the formatting of the sort data need be done only once for each cell
		 * per sort. This array should not be read from or written to by anything
		 * other than the master sorting methods.
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aSortData": null,
	
		/**
		 * Per cell filtering data cache. As per the sort data cache, used to
		 * increase the performance of the filtering in DataTables
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aFilterData": null,
	
		/**
		 * Filtering data cache. This is the same as the cell filtering cache, but
		 * in this case a string rather than an array. This is easily computed with
		 * a join on `_aFilterData`, but is provided as a cache so the join isn't
		 * needed on every search (memory traded for performance)
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_sFilterRow": null,
	
		/**
		 * Cache of the class name that DataTables has applied to the row, so we
		 * can quickly look at this variable rather than needing to do a DOM check
		 * on className for the nTr property.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *  @private
		 */
		"_sRowStripe": "",
	
		/**
		 * Denote if the original data source was from the DOM, or the data source
		 * object. This is used for invalidating data, so DataTables can
		 * automatically read data from the original source, unless uninstructed
		 * otherwise.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"src": null
	};
	
	
	/**
	 * Template object for the column information object in DataTables. This object
	 * is held in the settings aoColumns array and contains all the information that
	 * DataTables needs about each individual column.
	 *
	 * Note that this object is related to {@link DataTable.defaults.column}
	 * but this one is the internal data store for DataTables's cache of columns.
	 * It should NOT be manipulated outside of DataTables. Any configuration should
	 * be done through the initialisation options.
	 *  @namespace
	 */
	DataTable.models.oColumn = {
		/**
		 * Column index. This could be worked out on-the-fly with $.inArray, but it
		 * is faster to just hold it as a variable
		 *  @type integer
		 *  @default null
		 */
		"idx": null,
	
		/**
		 * A list of the columns that sorting should occur on when this column
		 * is sorted. That this property is an array allows multi-column sorting
		 * to be defined for a column (for example first name / last name columns
		 * would benefit from this). The values are integers pointing to the
		 * columns to be sorted on (typically it will be a single integer pointing
		 * at itself, but that doesn't need to be the case).
		 *  @type array
		 */
		"aDataSort": null,
	
		/**
		 * Define the sorting directions that are applied to the column, in sequence
		 * as the column is repeatedly sorted upon - i.e. the first value is used
		 * as the sorting direction when the column if first sorted (clicked on).
		 * Sort it again (click again) and it will move on to the next index.
		 * Repeat until loop.
		 *  @type array
		 */
		"asSorting": null,
	
		/**
		 * Flag to indicate if the column is searchable, and thus should be included
		 * in the filtering or not.
		 *  @type boolean
		 */
		"bSearchable": null,
	
		/**
		 * Flag to indicate if the column is sortable or not.
		 *  @type boolean
		 */
		"bSortable": null,
	
		/**
		 * Flag to indicate if the column is currently visible in the table or not
		 *  @type boolean
		 */
		"bVisible": null,
	
		/**
		 * Store for manual type assignment using the `column.type` option. This
		 * is held in store so we can manipulate the column's `sType` property.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"_sManualType": null,
	
		/**
		 * Flag to indicate if HTML5 data attributes should be used as the data
		 * source for filtering or sorting. True is either are.
		 *  @type boolean
		 *  @default false
		 *  @private
		 */
		"_bAttrSrc": false,
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} nTd The TD node that has been created
		 *  @param {*} sData The Data for the cell
		 *  @param {array|object} oData The data for the whole row
		 *  @param {int} iRow The row index for the aoData data store
		 *  @default null
		 */
		"fnCreatedCell": null,
	
		/**
		 * Function to get data from a cell in a column. You should <b>never</b>
		 * access data directly through _aData internally in DataTables - always use
		 * the method attached to this property. It allows mData to function as
		 * required. This function is automatically assigned by the column
		 * initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {string} sSpecific The specific data type you want to get -
		 *    'display', 'type' 'filter' 'sort'
		 *  @returns {*} The data for the cell from the given row's data
		 *  @default null
		 */
		"fnGetData": null,
	
		/**
		 * Function to set data for a cell in the column. You should <b>never</b>
		 * set the data directly to _aData internally in DataTables - always use
		 * this method. It allows mData to function as required. This function
		 * is automatically assigned by the column initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {*} sValue Value to set
		 *  @default null
		 */
		"fnSetData": null,
	
		/**
		 * Property to read the value for the cells in the column from the data
		 * source array / object. If null, then the default content is used, if a
		 * function is given then the return from the function is used.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mData": null,
	
		/**
		 * Partner property to mData which is used (only when defined) to get
		 * the data - i.e. it is basically the same as mData, but without the
		 * 'set' option, and also the data fed to it is the result from mData.
		 * This is the rendering method to match the data method of mData.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mRender": null,
	
		/**
		 * Unique header TH/TD element for this column - this is what the sorting
		 * listener is attached to (if sorting is enabled.)
		 *  @type node
		 *  @default null
		 */
		"nTh": null,
	
		/**
		 * Unique footer TH/TD element for this column (if there is one). Not used
		 * in DataTables as such, but can be used for plug-ins to reference the
		 * footer for each column.
		 *  @type node
		 *  @default null
		 */
		"nTf": null,
	
		/**
		 * The class to apply to all TD elements in the table's TBODY for the column
		 *  @type string
		 *  @default null
		 */
		"sClass": null,
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 *  @type string
		 */
		"sContentPadding": null,
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because mData
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 */
		"sDefaultContent": null,
	
		/**
		 * Name for the column, allowing reference to the column by name as well as
		 * by index (needs a lookup to work by name).
		 *  @type string
		 */
		"sName": null,
	
		/**
		 * Custom sorting data type - defines which of the available plug-ins in
		 * afnSortData the custom sorting will use - if any is defined.
		 *  @type string
		 *  @default std
		 */
		"sSortDataType": 'std',
	
		/**
		 * Class to be applied to the header element when sorting on this column
		 *  @type string
		 *  @default null
		 */
		"sSortingClass": null,
	
		/**
		 * Class to be applied to the header element when sorting on this column -
		 * when jQuery UI theming is used.
		 *  @type string
		 *  @default null
		 */
		"sSortingClassJUI": null,
	
		/**
		 * Title of the column - what is seen in the TH element (nTh).
		 *  @type string
		 */
		"sTitle": null,
	
		/**
		 * Column sorting and filtering type
		 *  @type string
		 *  @default null
		 */
		"sType": null,
	
		/**
		 * Width of the column
		 *  @type string
		 *  @default null
		 */
		"sWidth": null,
	
		/**
		 * Width of the column when it was first "encountered"
		 *  @type string
		 *  @default null
		 */
		"sWidthOrig": null
	};
	
	
	/*
	 * Developer note: The properties of the object below are given in Hungarian
	 * notation, that was used as the interface for DataTables prior to v1.10, however
	 * from v1.10 onwards the primary interface is camel case. In order to avoid
	 * breaking backwards compatibility utterly with this change, the Hungarian
	 * version is still, internally the primary interface, but is is not documented
	 * - hence the @name tags in each doc comment. This allows a Javascript function
	 * to create a map from Hungarian notation to camel case (going the other direction
	 * would require each property to be listed, which would at around 3K to the size
	 * of DataTables, while this method is about a 0.5K hit.
	 *
	 * Ultimately this does pave the way for Hungarian notation to be dropped
	 * completely, but that is a massive amount of work and will break current
	 * installs (therefore is on-hold until v2).
	 */
	
	/**
	 * Initialisation options that can be given to DataTables at initialisation
	 * time.
	 *  @namespace
	 */
	DataTable.defaults = {
		/**
		 * An array of data to use for the table, passed in at initialisation which
		 * will be used in preference to any data which is already in the DOM. This is
		 * particularly useful for constructing tables purely in Javascript, for
		 * example with a custom Ajax call.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.data
		 *
		 *  @example
		 *    // Using a 2D array data source
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
		 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine" },
		 *          { "title": "Browser" },
		 *          { "title": "Platform" },
		 *          { "title": "Version" },
		 *          { "title": "Grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using an array of objects as a data source (`data`)
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 4.0",
		 *            "platform": "Win 95+",
		 *            "version":  4,
		 *            "grade":    "X"
		 *          },
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 5.0",
		 *            "platform": "Win 95+",
		 *            "version":  5,
		 *            "grade":    "C"
		 *          }
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine",   "data": "engine" },
		 *          { "title": "Browser",  "data": "browser" },
		 *          { "title": "Platform", "data": "platform" },
		 *          { "title": "Version",  "data": "version" },
		 *          { "title": "Grade",    "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"aaData": null,
	
	
		/**
		 * If ordering is enabled, then DataTables will perform a first pass sort on
		 * initialisation. You can define which column(s) the sort is performed
		 * upon, and the sorting direction, with this variable. The `sorting` array
		 * should contain an array for each column to be sorted initially containing
		 * the column's index and a direction string ('asc' or 'desc').
		 *  @type array
		 *  @default [[0,'asc']]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.order
		 *
		 *  @example
		 *    // Sort by 3rd column first, and then 4th column
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": [[2,'asc'], [3,'desc']]
		 *      } );
		 *    } );
		 *
		 *    // No initial sorting
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": []
		 *      } );
		 *    } );
		 */
		"aaSorting": [[0,'asc']],
	
	
		/**
		 * This parameter is basically identical to the `sorting` parameter, but
		 * cannot be overridden by user interaction with the table. What this means
		 * is that you could have a column (visible or hidden) which the sorting
		 * will always be forced on first - any sorting after that (from the user)
		 * will then be performed as required. This can be useful for grouping rows
		 * together.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.orderFixed
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderFixed": [[0,'asc']]
		 *      } );
		 *    } )
		 */
		"aaSortingFixed": [],
	
	
		/**
		 * DataTables can be instructed to load data to display in the table from a
		 * Ajax source. This option defines how that Ajax call is made and where to.
		 *
		 * The `ajax` property has three different modes of operation, depending on
		 * how it is defined. These are:
		 *
		 * * `string` - Set the URL from where the data should be loaded from.
		 * * `object` - Define properties for `jQuery.ajax`.
		 * * `function` - Custom data get function
		 *
		 * `string`
		 * --------
		 *
		 * As a string, the `ajax` property simply defines the URL from which
		 * DataTables will load data.
		 *
		 * `object`
		 * --------
		 *
		 * As an object, the parameters in the object are passed to
		 * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
		 * of the Ajax request. DataTables has a number of default parameters which
		 * you can override using this option. Please refer to the jQuery
		 * documentation for a full description of the options available, although
		 * the following parameters provide additional options in DataTables or
		 * require special consideration:
		 *
		 * * `data` - As with jQuery, `data` can be provided as an object, but it
		 *   can also be used as a function to manipulate the data DataTables sends
		 *   to the server. The function takes a single parameter, an object of
		 *   parameters with the values that DataTables has readied for sending. An
		 *   object may be returned which will be merged into the DataTables
		 *   defaults, or you can add the items to the object that was passed in and
		 *   not return anything from the function. This supersedes `fnServerParams`
		 *   from DataTables 1.9-.
		 *
		 * * `dataSrc` - By default DataTables will look for the property `data` (or
		 *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
		 *   from an Ajax source or for server-side processing - this parameter
		 *   allows that property to be changed. You can use Javascript dotted
		 *   object notation to get a data source for multiple levels of nesting, or
		 *   it my be used as a function. As a function it takes a single parameter,
		 *   the JSON returned from the server, which can be manipulated as
		 *   required, with the returned value being that used by DataTables as the
		 *   data source for the table. This supersedes `sAjaxDataProp` from
		 *   DataTables 1.9-.
		 *
		 * * `success` - Should not be overridden it is used internally in
		 *   DataTables. To manipulate / transform the data returned by the server
		 *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
		 *
		 * `function`
		 * ----------
		 *
		 * As a function, making the Ajax call is left up to yourself allowing
		 * complete control of the Ajax request. Indeed, if desired, a method other
		 * than Ajax could be used to obtain the required data, such as Web storage
		 * or an AIR database.
		 *
		 * The function is given four parameters and no return is required. The
		 * parameters are:
		 *
		 * 1. _object_ - Data to send to the server
		 * 2. _function_ - Callback function that must be executed when the required
		 *    data has been obtained. That data should be passed into the callback
		 *    as the only parameter
		 * 3. _object_ - DataTables settings object for the table
		 *
		 * Note that this supersedes `fnServerData` from DataTables 1.9-.
		 *
		 *  @type string|object|function
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.ajax
		 *  @since 1.10.0
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax.
		 *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
		 *   $('#example').dataTable( {
		 *     "ajax": "data.json"
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to change
		 *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": "tableData"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
		 *   // from a plain array rather than an array in an object
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": ""
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Manipulate the data returned from the server - add a link to data
		 *   // (note this can, should, be done using `render` for the column - this
		 *   // is just a simple example of how the data can be manipulated).
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": function ( json ) {
		 *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
		 *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
		 *         }
		 *         return json;
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Add data to the request
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "data": function ( d ) {
		 *         return {
		 *           "extra_search": $('#extra').val()
		 *         };
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Send request as POST
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "type": "POST"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get the data from localStorage (could interface with a form for
		 *   // adding, editing and removing rows).
		 *   $('#example').dataTable( {
		 *     "ajax": function (data, callback, settings) {
		 *       callback(
		 *         JSON.parse( localStorage.getItem('dataTablesData') )
		 *       );
		 *     }
		 *   } );
		 */
		"ajax": null,
	
	
		/**
		 * This parameter allows you to readily specify the entries in the length drop
		 * down menu that DataTables shows when pagination is enabled. It can be
		 * either a 1D array of options which will be used for both the displayed
		 * option and the value, or a 2D array which will use the array in the first
		 * position as the value, and the array in the second position as the
		 * displayed options (useful for language strings such as 'All').
		 *
		 * Note that the `pageLength` property will be automatically set to the
		 * first value given in this array, unless `pageLength` is also provided.
		 *  @type array
		 *  @default [ 10, 25, 50, 100 ]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.lengthMenu
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
		 *      } );
		 *    } );
		 */
		"aLengthMenu": [ 10, 25, 50, 100 ],
	
	
		/**
		 * The `columns` option in the initialisation parameter allows you to define
		 * details about the way individual columns behave. For a full list of
		 * column options that can be set, please see
		 * {@link DataTable.defaults.column}. Note that if you use `columns` to
		 * define your columns, you must have an entry in the array for every single
		 * column that you have in your table (these can be null if you don't which
		 * to specify any options).
		 *  @member
		 *
		 *  @name DataTable.defaults.column
		 */
		"aoColumns": null,
	
		/**
		 * Very similar to `columns`, `columnDefs` allows you to target a specific
		 * column, multiple columns, or all columns, using the `targets` property of
		 * each object in the array. This allows great flexibility when creating
		 * tables, as the `columnDefs` arrays can be of any length, targeting the
		 * columns you specifically want. `columnDefs` may use any of the column
		 * options available: {@link DataTable.defaults.column}, but it _must_
		 * have `targets` defined in each object in the array. Values in the `targets`
		 * array may be:
		 *   <ul>
		 *     <li>a string - class name will be matched on the TH for the column</li>
		 *     <li>0 or a positive integer - column index counting from the left</li>
		 *     <li>a negative integer - column index counting from the right</li>
		 *     <li>the string "_all" - all columns (i.e. assign a default)</li>
		 *   </ul>
		 *  @member
		 *
		 *  @name DataTable.defaults.columnDefs
		 */
		"aoColumnDefs": null,
	
	
		/**
		 * Basically the same as `search`, this parameter defines the individual column
		 * filtering state at initialisation time. The array must be of the same size
		 * as the number of columns, and each element be an object with the parameters
		 * `search` and `escapeRegex` (the latter is optional). 'null' is also
		 * accepted and the default will be used.
		 *  @type array
		 *  @default []
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.searchCols
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchCols": [
		 *          null,
		 *          { "search": "My filter" },
		 *          null,
		 *          { "search": "^[0-9]", "escapeRegex": false }
		 *        ]
		 *      } );
		 *    } )
		 */
		"aoSearchCols": [],
	
	
		/**
		 * An array of CSS classes that should be applied to displayed rows. This
		 * array may be of any length, and DataTables will apply each class
		 * sequentially, looping when required.
		 *  @type array
		 *  @default null <i>Will take the values determined by the `oClasses.stripe*`
		 *    options</i>
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.stripeClasses
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
		 *      } );
		 *    } )
		 */
		"asStripeClasses": null,
	
	
		/**
		 * Enable or disable automatic column width calculation. This can be disabled
		 * as an optimisation (it takes some time to calculate the widths) if the
		 * tables widths are passed in using `columns`.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.autoWidth
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "autoWidth": false
		 *      } );
		 *    } );
		 */
		"bAutoWidth": true,
	
	
		/**
		 * Deferred rendering can provide DataTables with a huge speed boost when you
		 * are using an Ajax or JS data source for the table. This option, when set to
		 * true, will cause DataTables to defer the creation of the table elements for
		 * each row until they are needed for a draw - saving a significant amount of
		 * time.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.deferRender
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajax": "sources/arrays.txt",
		 *        "deferRender": true
		 *      } );
		 *    } );
		 */
		"bDeferRender": false,
	
	
		/**
		 * Replace a DataTable which matches the given selector and replace it with
		 * one which has the properties of the new initialisation object passed. If no
		 * table matches the selector, then the new DataTable will be constructed as
		 * per normal.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.destroy
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "srollY": "200px",
		 *        "paginate": false
		 *      } );
		 *
		 *      // Some time later....
		 *      $('#example').dataTable( {
		 *        "filter": false,
		 *        "destroy": true
		 *      } );
		 *    } );
		 */
		"bDestroy": false,
	
	
		/**
		 * Enable or disable filtering of data. Filtering in DataTables is "smart" in
		 * that it allows the end user to input multiple words (space separated) and
		 * will match a row containing those words, even if not in the order that was
		 * specified (this allow matching across multiple columns). Note that if you
		 * wish to use filtering in DataTables this must remain 'true' - to remove the
		 * default filtering input box and retain filtering abilities, please use
		 * {@link DataTable.defaults.dom}.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.searching
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "searching": false
		 *      } );
		 *    } );
		 */
		"bFilter": true,
	
	
		/**
		 * Enable or disable the table information display. This shows information
		 * about the data that is currently visible on the page, including information
		 * about filtered data if that action is being performed.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.info
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "info": false
		 *      } );
		 *    } );
		 */
		"bInfo": true,
	
	
		/**
		 * Enable jQuery UI ThemeRoller support (required as ThemeRoller requires some
		 * slightly different and additional mark-up from what DataTables has
		 * traditionally used).
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.jQueryUI
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "jQueryUI": true
		 *      } );
		 *    } );
		 */
		"bJQueryUI": false,
	
	
		/**
		 * Allows the end user to select the size of a formatted page from a select
		 * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.lengthChange
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "lengthChange": false
		 *      } );
		 *    } );
		 */
		"bLengthChange": true,
	
	
		/**
		 * Enable or disable pagination.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.paging
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "paging": false
		 *      } );
		 *    } );
		 */
		"bPaginate": true,
	
	
		/**
		 * Enable or disable the display of a 'processing' indicator when the table is
		 * being processed (e.g. a sort). This is particularly useful for tables with
		 * large amounts of data where it can take a noticeable amount of time to sort
		 * the entries.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.processing
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "processing": true
		 *      } );
		 *    } );
		 */
		"bProcessing": false,
	
	
		/**
		 * Retrieve the DataTables object for the given selector. Note that if the
		 * table has already been initialised, this parameter will cause DataTables
		 * to simply return the object that has already been set up - it will not take
		 * account of any changes you might have made to the initialisation object
		 * passed to DataTables (setting this parameter to true is an acknowledgement
		 * that you understand this). `destroy` can be used to reinitialise a table if
		 * you need.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.retrieve
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      initTable();
		 *      tableActions();
		 *    } );
		 *
		 *    function initTable ()
		 *    {
		 *      return $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false,
		 *        "retrieve": true
		 *      } );
		 *    }
		 *
		 *    function tableActions ()
		 *    {
		 *      var table = initTable();
		 *      // perform API operations with oTable
		 *    }
		 */
		"bRetrieve": false,
	
	
		/**
		 * When vertical (y) scrolling is enabled, DataTables will force the height of
		 * the table's viewport to the given height at all times (useful for layout).
		 * However, this can look odd when filtering data down to a small data set,
		 * and the footer is left "floating" further down. This parameter (when
		 * enabled) will cause DataTables to collapse the table's viewport down when
		 * the result set will fit within the given Y height.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollCollapse
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200",
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"bScrollCollapse": false,
	
	
		/**
		 * Configure DataTables to use server-side processing. Note that the
		 * `ajax` parameter must also be given in order to give DataTables a
		 * source to obtain the required data for each draw.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverSide
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "xhr.php"
		 *      } );
		 *    } );
		 */
		"bServerSide": false,
	
	
		/**
		 * Enable or disable sorting of columns. Sorting of individual columns can be
		 * disabled by the `sortable` option for each column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.ordering
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "ordering": false
		 *      } );
		 *    } );
		 */
		"bSort": true,
	
	
		/**
		 * Enable or display DataTables' ability to sort multiple columns at the
		 * same time (activated by shift-click by the user).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderMulti
		 *
		 *  @example
		 *    // Disable multiple column sorting ability
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderMulti": false
		 *      } );
		 *    } );
		 */
		"bSortMulti": true,
	
	
		/**
		 * Allows control over whether DataTables should use the top (true) unique
		 * cell that is found for a single column, or the bottom (false - default).
		 * This is useful when using complex headers.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderCellsTop
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderCellsTop": true
		 *      } );
		 *    } );
		 */
		"bSortCellsTop": false,
	
	
		/**
		 * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
		 * `sorting\_3` to the columns which are currently being sorted on. This is
		 * presented as a feature switch as it can increase processing time (while
		 * classes are removed and added) so for large data sets you might want to
		 * turn this off.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.orderClasses
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderClasses": false
		 *      } );
		 *    } );
		 */
		"bSortClasses": true,
	
	
		/**
		 * Enable or disable state saving. When enabled HTML5 `localStorage` will be
		 * used to save table display information such as pagination information,
		 * display length, filtering and sorting. As such when the end user reloads
		 * the page the display display will match what thy had previously set up.
		 *
		 * Due to the use of `localStorage` the default state saving is not supported
		 * in IE6 or 7. If state saving is required in those browsers, use
		 * `stateSaveCallback` to provide a storage solution such as cookies.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.stateSave
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "stateSave": true
		 *      } );
		 *    } );
		 */
		"bStateSave": false,
	
	
		/**
		 * This function is called when a TR element is created (and all TD child
		 * elements have been inserted), or registered if using a DOM source, allowing
		 * manipulation of the TR element (adding classes etc).
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} dataIndex The index of this row in the internal aoData array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.createdRow
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "createdRow": function( row, data, dataIndex ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" )
		 *          {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnCreatedRow": null,
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify any aspect you want about the created DOM.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.drawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "drawCallback": function( settings ) {
		 *          alert( 'DataTables has redrawn the table' );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnDrawCallback": null,
	
	
		/**
		 * Identical to fnHeaderCallback() but for the table footer this function
		 * allows you to modify the table footer on every 'draw' event.
		 *  @type function
		 *  @param {node} foot "TR" element for the footer
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.footerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "footerCallback": function( tfoot, data, start, end, display ) {
		 *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
		 *        }
		 *      } );
		 *    } )
		 */
		"fnFooterCallback": null,
	
	
		/**
		 * When rendering large numbers in the information element for the table
		 * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
		 * to have a comma separator for the 'thousands' units (e.g. 1 million is
		 * rendered as "1,000,000") to help readability for the end user. This
		 * function will override the default method DataTables uses.
		 *  @type function
		 *  @member
		 *  @param {int} toFormat number to be formatted
		 *  @returns {string} formatted string for DataTables to show the number
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.formatNumber
		 *
		 *  @example
		 *    // Format a number using a single quote for the separator (note that
		 *    // this can also be done with the language.thousands option)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "formatNumber": function ( toFormat ) {
		 *          return toFormat.toString().replace(
		 *            /\B(?=(\d{3})+(?!\d))/g, "'"
		 *          );
		 *        };
		 *      } );
		 *    } );
		 */
		"fnFormatNumber": function ( toFormat ) {
			return toFormat.toString().replace(
				/\B(?=(\d{3})+(?!\d))/g,
				this.oLanguage.sThousands
			);
		},
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify the header row. This can be used to calculate and
		 * display useful information about the table.
		 *  @type function
		 *  @param {node} head "TR" element for the header
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.headerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fheaderCallback": function( head, data, start, end, display ) {
		 *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
		 *        }
		 *      } );
		 *    } )
		 */
		"fnHeaderCallback": null,
	
	
		/**
		 * The information element can be used to convey information about the current
		 * state of the table. Although the internationalisation options presented by
		 * DataTables are quite capable of dealing with most customisations, there may
		 * be times where you wish to customise the string further. This callback
		 * allows you to do exactly that.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @param {int} start Starting position in data for the draw
		 *  @param {int} end End position in data for the draw
		 *  @param {int} max Total number of rows in the table (regardless of
		 *    filtering)
		 *  @param {int} total Total number of rows in the data set, after filtering
		 *  @param {string} pre The string that DataTables has formatted using it's
		 *    own rules
		 *  @returns {string} The string to be displayed in the information element.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.infoCallback
		 *
		 *  @example
		 *    $('#example').dataTable( {
		 *      "infoCallback": function( settings, start, end, max, total, pre ) {
		 *        return start +" to "+ end;
		 *      }
		 *    } );
		 */
		"fnInfoCallback": null,
	
	
		/**
		 * Called when the table has been initialised. Normally DataTables will
		 * initialise sequentially and there will be no need for this function,
		 * however, this does not hold true when using external language information
		 * since that is obtained using an async XHR call.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} json The JSON object request from the server - only
		 *    present if client-side Ajax sourced data is used
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.initComplete
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "initComplete": function(settings, json) {
		 *          alert( 'DataTables has finished its initialisation.' );
		 *        }
		 *      } );
		 *    } )
		 */
		"fnInitComplete": null,
	
	
		/**
		 * Called at the very start of each table draw and can be used to cancel the
		 * draw by returning false, any other return (including undefined) results in
		 * the full draw occurring).
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @returns {boolean} False will cancel the draw, anything else (including no
		 *    return) will allow it to complete.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.preDrawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "preDrawCallback": function( settings ) {
		 *          if ( $('#test').val() == 1 ) {
		 *            return false;
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnPreDrawCallback": null,
	
	
		/**
		 * This function allows you to 'post process' each row after it have been
		 * generated for each table draw, but before it is rendered on screen. This
		 * function might be used for setting the row class name etc.
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} displayIndex The display index for the current table draw
		 *  @param {int} displayIndexFull The index of the data in the full list of
		 *    rows (after filtering)
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.rowCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" ) {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnRowCallback": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * This parameter allows you to override the default function which obtains
		 * the data from the server so something more suitable for your application.
		 * For example you could use POST data, or pull information from a Gears or
		 * AIR database.
		 *  @type function
		 *  @member
		 *  @param {string} source HTTP source to obtain the data from (`ajax`)
		 *  @param {array} data A key/value pair object containing the data to send
		 *    to the server
		 *  @param {function} callback to be called on completion of the data get
		 *    process that will draw the data on the page.
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverData
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerData": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 *  It is often useful to send extra data to the server when making an Ajax
		 * request - for example custom filtering information, and this callback
		 * function makes it trivial to send extra information to the server. The
		 * passed in parameter is the data set that has been constructed by
		 * DataTables, and you can add to this or modify it as you require.
		 *  @type function
		 *  @param {array} data Data array (array of objects which are name/value
		 *    pairs) that has been constructed by DataTables and will be sent to the
		 *    server. In the case of Ajax sourced data with server-side processing
		 *    this will be an empty array, for server-side processing there will be a
		 *    significant number of parameters!
		 *  @returns {undefined} Ensure that you modify the data array passed in,
		 *    as this is passed by reference.
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverParams
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerParams": null,
	
	
		/**
		 * Load the table state. With this function you can define from where, and how, the
		 * state of a table is loaded. By default DataTables will load from `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @return {object} The DataTables state object to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadCallback": function (settings) {
		 *          var o;
		 *
		 *          // Send an Ajax request to the server to get the data. Note that
		 *          // this is a synchronous request.
		 *          $.ajax( {
		 *            "url": "/state_load",
		 *            "async": false,
		 *            "dataType": "json",
		 *            "success": function (json) {
		 *              o = json;
		 *            }
		 *          } );
		 *
		 *          return o;
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadCallback": function ( settings ) {
			try {
				return JSON.parse(
					(settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
						'DataTables_'+settings.sInstance+'_'+location.pathname
					)
				);
			} catch (e) {}
		},
	
	
		/**
		 * Callback which allows modification of the saved state prior to loading that state.
		 * This callback is called when the table is loading state from the stored data, but
		 * prior to the settings object being modified by the saved state. Note that for
		 * plug-in authors, you should use the `stateLoadParams` event to load parameters for
		 * a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that is to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never loaded
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Disallow state loading by returning false
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          return false;
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadParams": null,
	
	
		/**
		 * Callback that is called when the state has been loaded from the state saving method
		 * and the DataTables settings object has been modified as a result of the loaded state.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that was loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoaded
		 *
		 *  @example
		 *    // Show an alert with the filtering value that was saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoaded": function (settings, data) {
		 *          alert( 'Saved filter was: '+data.oSearch.sSearch );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoaded": null,
	
	
		/**
		 * Save the table state. This function allows you to define where and how the state
		 * information for the table is stored By default DataTables will use `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveCallback": function (settings, data) {
		 *          // Send an Ajax request to the server with the state object
		 *          $.ajax( {
		 *            "url": "/state_save",
		 *            "data": data,
		 *            "dataType": "json",
		 *            "method": "POST"
		 *            "success": function () {}
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveCallback": function ( settings, data ) {
			try {
				(settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
					'DataTables_'+settings.sInstance+'_'+location.pathname,
					JSON.stringify( data )
				);
			} catch (e) {}
		},
	
	
		/**
		 * Callback which allows modification of the state to be saved. Called when the table
		 * has changed state a new state save is required. This method allows modification of
		 * the state saving object prior to actually doing the save, including addition or
		 * other state properties or modification. Note that for plug-in authors, you should
		 * use the `stateSaveParams` event to save parameters for a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveParams": null,
	
	
		/**
		 * Duration for which the saved state information is considered valid. After this period
		 * has elapsed the state will be returned to the default.
		 * Value is given in seconds.
		 *  @type int
		 *  @default 7200 <i>(2 hours)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.stateDuration
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateDuration": 60*60*24; // 1 day
		 *      } );
		 *    } )
		 */
		"iStateDuration": 7200,
	
	
		/**
		 * When enabled DataTables will not make a request to the server for the first
		 * page draw - rather it will use the data already on the page (no sorting etc
		 * will be applied to it), thus saving on an XHR at load time. `deferLoading`
		 * is used to indicate that deferred loading is required, but it is also used
		 * to tell DataTables how many records there are in the full table (allowing
		 * the information element and pagination to be displayed correctly). In the case
		 * where a filtering is applied to the table on initial load, this can be
		 * indicated by giving the parameter as an array, where the first element is
		 * the number of records available after filtering and the second element is the
		 * number of records without filtering (allowing the table information element
		 * to be shown correctly).
		 *  @type int | array
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.deferLoading
		 *
		 *  @example
		 *    // 57 records available in the table, no filtering applied
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": 57
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // 57 records after filtering, 100 without filtering (an initial filter applied)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": [ 57, 100 ],
		 *        "search": {
		 *          "search": "my_filter"
		 *        }
		 *      } );
		 *    } );
		 */
		"iDeferLoading": null,
	
	
		/**
		 * Number of rows to display on a single page when using pagination. If
		 * feature enabled (`lengthChange`) then the end user will be able to override
		 * this to a custom setting using a pop-up menu.
		 *  @type int
		 *  @default 10
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pageLength
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pageLength": 50
		 *      } );
		 *    } )
		 */
		"iDisplayLength": 10,
	
	
		/**
		 * Define the starting point for data display when using DataTables with
		 * pagination. Note that this parameter is the number of records, rather than
		 * the page number, so if you have 10 records per page and want to start on
		 * the third page, it should be "20".
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.displayStart
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "displayStart": 20
		 *      } );
		 *    } )
		 */
		"iDisplayStart": 0,
	
	
		/**
		 * By default DataTables allows keyboard navigation of the table (sorting, paging,
		 * and filtering) by adding a `tabindex` attribute to the required elements. This
		 * allows you to tab through the controls and press the enter key to activate them.
		 * The tabindex is default 0, meaning that the tab follows the flow of the document.
		 * You can overrule this using this parameter if you wish. Use a value of -1 to
		 * disable built-in keyboard navigation.
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.tabIndex
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "tabIndex": 1
		 *      } );
		 *    } );
		 */
		"iTabIndex": 0,
	
	
		/**
		 * Classes that DataTables assigns to the various components and features
		 * that it adds to the HTML table. This allows classes to be configured
		 * during initialisation in addition to through the static
		 * {@link DataTable.ext.oStdClasses} object).
		 *  @namespace
		 *  @name DataTable.defaults.classes
		 */
		"oClasses": {},
	
	
		/**
		 * All strings that DataTables uses in the user interface that it creates
		 * are defined in this object, allowing you to modified them individually or
		 * completely replace them all as required.
		 *  @namespace
		 *  @name DataTable.defaults.language
		 */
		"oLanguage": {
			/**
			 * Strings that are used for WAI-ARIA labels and controls only (these are not
			 * actually visible on the page, but will be read by screenreaders, and thus
			 * must be internationalised as well).
			 *  @namespace
			 *  @name DataTable.defaults.language.aria
			 */
			"oAria": {
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted ascending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortAscending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortAscending": " - click/return to sort ascending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortAscending": ": activate to sort column ascending",
	
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted descending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortDescending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortDescending": " - click/return to sort descending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortDescending": ": activate to sort column descending"
			},
	
			/**
			 * Pagination string used by DataTables for the built-in pagination
			 * control types.
			 *  @namespace
			 *  @name DataTable.defaults.language.paginate
			 */
			"oPaginate": {
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the first page.
				 *  @type string
				 *  @default First
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.first
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "first": "First page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sFirst": "First",
	
	
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the last page.
				 *  @type string
				 *  @default Last
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.last
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "last": "Last page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sLast": "Last",
	
	
				/**
				 * Text to use for the 'next' pagination button (to take the user to the
				 * next page).
				 *  @type string
				 *  @default Next
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.next
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "next": "Next page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sNext": "Next",
	
	
				/**
				 * Text to use for the 'previous' pagination button (to take the user to
				 * the previous page).
				 *  @type string
				 *  @default Previous
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.previous
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "previous": "Previous page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sPrevious": "Previous"
			},
	
			/**
			 * This string is shown in preference to `zeroRecords` when the table is
			 * empty of data (regardless of filtering). Note that this is an optional
			 * parameter - if it is not given, the value of `zeroRecords` will be used
			 * instead (either the default or given value).
			 *  @type string
			 *  @default No data available in table
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.emptyTable
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "emptyTable": "No data available in table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sEmptyTable": "No data available in table",
	
	
			/**
			 * This string gives information to the end user about the information
			 * that is current on display on the page. The following tokens can be
			 * used in the string and will be dynamically replaced as the table
			 * display updates. This tokens can be placed anywhere in the string, or
			 * removed as needed by the language requires:
			 *
			 * * `\_START\_` - Display index of the first record on the current page
			 * * `\_END\_` - Display index of the last record on the current page
			 * * `\_TOTAL\_` - Number of records in the table after filtering
			 * * `\_MAX\_` - Number of records in the table without filtering
			 * * `\_PAGE\_` - Current page number
			 * * `\_PAGES\_` - Total number of pages of data in the table
			 *
			 *  @type string
			 *  @default Showing _START_ to _END_ of _TOTAL_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.info
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "info": "Showing page _PAGE_ of _PAGES_"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
	
	
			/**
			 * Display information string for when the table is empty. Typically the
			 * format of this string should match `info`.
			 *  @type string
			 *  @default Showing 0 to 0 of 0 entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoEmpty
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoEmpty": "No entries to show"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoEmpty": "Showing 0 to 0 of 0 entries",
	
	
			/**
			 * When a user filters the information in a table, this string is appended
			 * to the information (`info`) to give an idea of how strong the filtering
			 * is. The variable _MAX_ is dynamically updated.
			 *  @type string
			 *  @default (filtered from _MAX_ total entries)
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoFiltered
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoFiltered": " - filtering from _MAX_ records"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoFiltered": "(filtered from _MAX_ total entries)",
	
	
			/**
			 * If can be useful to append extra information to the info string at times,
			 * and this variable does exactly that. This information will be appended to
			 * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
			 * being used) at all times.
			 *  @type string
			 *  @default <i>Empty string</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoPostFix
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoPostFix": "All records shown are derived from real information."
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoPostFix": "",
	
	
			/**
			 * This decimal place operator is a little different from the other
			 * language options since DataTables doesn't output floating point
			 * numbers, so it won't ever use this for display of a number. Rather,
			 * what this parameter does is modify the sort methods of the table so
			 * that numbers which are in a format which has a character other than
			 * a period (`.`) as a decimal place will be sorted numerically.
			 *
			 * Note that numbers with different decimal places cannot be shown in
			 * the same table and still be sortable, the table must be consistent.
			 * However, multiple different tables on the page can use different
			 * decimal place characters.
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.decimal
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "decimal": ","
			 *          "thousands": "."
			 *        }
			 *      } );
			 *    } );
			 */
			"sDecimal": "",
	
	
			/**
			 * DataTables has a build in number formatter (`formatNumber`) which is
			 * used to format large numbers that are used in the table information.
			 * By default a comma is used, but this can be trivially changed to any
			 * character you wish with this parameter.
			 *  @type string
			 *  @default ,
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.thousands
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "thousands": "'"
			 *        }
			 *      } );
			 *    } );
			 */
			"sThousands": ",",
	
	
			/**
			 * Detail the action that will be taken when the drop down menu for the
			 * pagination length option is changed. The '_MENU_' variable is replaced
			 * with a default select list of 10, 25, 50 and 100, and can be replaced
			 * with a custom select box if required.
			 *  @type string
			 *  @default Show _MENU_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.lengthMenu
			 *
			 *  @example
			 *    // Language change only
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": "Display _MENU_ records"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Language and options change
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": 'Display <select>'+
			 *            '<option value="10">10</option>'+
			 *            '<option value="20">20</option>'+
			 *            '<option value="30">30</option>'+
			 *            '<option value="40">40</option>'+
			 *            '<option value="50">50</option>'+
			 *            '<option value="-1">All</option>'+
			 *            '</select> records'
			 *        }
			 *      } );
			 *    } );
			 */
			"sLengthMenu": "Show _MENU_ entries",
	
	
			/**
			 * When using Ajax sourced data and during the first draw when DataTables is
			 * gathering the data, this message is shown in an empty row in the table to
			 * indicate to the end user the the data is being loaded. Note that this
			 * parameter is not used when loading data by server-side processing, just
			 * Ajax sourced data with client-side processing.
			 *  @type string
			 *  @default Loading...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.loadingRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "loadingRecords": "Please wait - loading..."
			 *        }
			 *      } );
			 *    } );
			 */
			"sLoadingRecords": "Loading...",
	
	
			/**
			 * Text which is displayed when the table is processing a user action
			 * (usually a sort command or similar).
			 *  @type string
			 *  @default Processing...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.processing
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "processing": "DataTables is currently busy"
			 *        }
			 *      } );
			 *    } );
			 */
			"sProcessing": "Processing...",
	
	
			/**
			 * Details the actions that will be taken when the user types into the
			 * filtering input text box. The variable "_INPUT_", if used in the string,
			 * is replaced with the HTML text box for the filtering input allowing
			 * control over where it appears in the string. If "_INPUT_" is not given
			 * then the input box is appended to the string automatically.
			 *  @type string
			 *  @default Search:
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.search
			 *
			 *  @example
			 *    // Input text box will be appended at the end automatically
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Filter records:"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Specify where the filter should appear
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Apply filter _INPUT_ to table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sSearch": "Search:",
	
	
			/**
			 * Assign a `placeholder` attribute to the search `input` element
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.searchPlaceholder
			 */
			"sSearchPlaceholder": "",
	
	
			/**
			 * All of the language information can be stored in a file on the
			 * server-side, which DataTables will look up if this parameter is passed.
			 * It must store the URL of the language file, which is in a JSON format,
			 * and the object has the same properties as the oLanguage object in the
			 * initialiser object (i.e. the above parameters). Please refer to one of
			 * the example language files to see how this works in action.
			 *  @type string
			 *  @default <i>Empty string - i.e. disabled</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.url
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
			 *        }
			 *      } );
			 *    } );
			 */
			"sUrl": "",
	
	
			/**
			 * Text shown inside the table records when the is no information to be
			 * displayed after filtering. `emptyTable` is shown when there is simply no
			 * information in the table at all (regardless of filtering).
			 *  @type string
			 *  @default No matching records found
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.zeroRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "zeroRecords": "No records to display"
			 *        }
			 *      } );
			 *    } );
			 */
			"sZeroRecords": "No matching records found"
		},
	
	
		/**
		 * This parameter allows you to have define the global filtering state at
		 * initialisation time. As an object the `search` parameter must be
		 * defined, but all other parameters are optional. When `regex` is true,
		 * the search string will be treated as a regular expression, when false
		 * (default) it will be treated as a straight string. When `smart`
		 * DataTables will use it's smart filtering methods (to word match at
		 * any point in the data), when false this will not be done.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.search
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "search": {"search": "Initial search"}
		 *      } );
		 *    } )
		 */
		"oSearch": $.extend( {}, DataTable.models.oSearch ),
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * By default DataTables will look for the property `data` (or `aaData` for
		 * compatibility with DataTables 1.9-) when obtaining data from an Ajax
		 * source or for server-side processing - this parameter allows that
		 * property to be changed. You can use Javascript dotted object notation to
		 * get a data source for multiple levels of nesting.
		 *  @type string
		 *  @default data
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxDataProp
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxDataProp": "data",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * You can instruct DataTables to load data from an external
		 * source using this parameter (use aData if you want to pass data in you
		 * already have). Simply provide a url a JSON object can be obtained from.
		 *  @type string
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxSource
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxSource": null,
	
	
		/**
		 * This initialisation variable allows you to specify exactly where in the
		 * DOM you want DataTables to inject the various controls it adds to the page
		 * (for example you might want the pagination controls at the top of the
		 * table). DIV elements (with or without a custom class) can also be added to
		 * aid styling. The follow syntax is used:
		 *   <ul>
		 *     <li>The following options are allowed:
		 *       <ul>
		 *         <li>'l' - Length changing</li>
		 *         <li>'f' - Filtering input</li>
		 *         <li>'t' - The table!</li>
		 *         <li>'i' - Information</li>
		 *         <li>'p' - Pagination</li>
		 *         <li>'r' - pRocessing</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following constants are allowed:
		 *       <ul>
		 *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
		 *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following syntax is expected:
		 *       <ul>
		 *         <li>'&lt;' and '&gt;' - div elements</li>
		 *         <li>'&lt;"class" and '&gt;' - div with a class</li>
		 *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
		 *       </ul>
		 *     </li>
		 *     <li>Examples:
		 *       <ul>
		 *         <li>'&lt;"wrapper"flipt&gt;'</li>
		 *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
		 *       </ul>
		 *     </li>
		 *   </ul>
		 *  @type string
		 *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
		 *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.dom
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
		 *      } );
		 *    } );
		 */
		"sDom": "lfrtip",
	
	
		/**
		 * Search delay option. This will throttle full table searches that use the
		 * DataTables provided search input element (it does not effect calls to
		 * `dt-api search()`, providing a delay before the search is made.
		 *  @type integer
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.searchDelay
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchDelay": 200
		 *      } );
		 *    } )
		 */
		"searchDelay": null,
	
	
		/**
		 * DataTables features four different built-in options for the buttons to
		 * display for pagination control:
		 *
		 * * `simple` - 'Previous' and 'Next' buttons only
		 * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
		 * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
		 * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus
		 *   page numbers
		 *  
		 * Further methods can be added using {@link DataTable.ext.oPagination}.
		 *  @type string
		 *  @default simple_numbers
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pagingType
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pagingType": "full_numbers"
		 *      } );
		 *    } )
		 */
		"sPaginationType": "simple_numbers",
	
	
		/**
		 * Enable horizontal scrolling. When a table is too wide to fit into a
		 * certain layout, or you have a large number of columns in the table, you
		 * can enable x-scrolling to show the table in a viewport, which can be
		 * scrolled. This property can be `true` which will allow the table to
		 * scroll horizontally when needed, or any CSS unit, or a number (in which
		 * case it will be treated as a pixel measurement). Setting as simply `true`
		 * is recommended.
		 *  @type boolean|string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollX
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": true,
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"sScrollX": "",
	
	
		/**
		 * This property can be used to force a DataTable to use more width than it
		 * might otherwise do when x-scrolling is enabled. For example if you have a
		 * table which requires to be well spaced, this parameter is useful for
		 * "over-sizing" the table, and thus forcing scrolling. This property can by
		 * any CSS unit, or a number (in which case it will be treated as a pixel
		 * measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollXInner
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": "100%",
		 *        "scrollXInner": "110%"
		 *      } );
		 *    } );
		 */
		"sScrollXInner": "",
	
	
		/**
		 * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
		 * to the given height, and enable scrolling for any data which overflows the
		 * current viewport. This can be used as an alternative to paging to display
		 * a lot of data in a small area (although paging and scrolling can both be
		 * enabled at the same time). This property can be any CSS unit, or a number
		 * (in which case it will be treated as a pixel measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollY
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false
		 *      } );
		 *    } );
		 */
		"sScrollY": "",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * Set the HTTP method that is used to make the Ajax call for server-side
		 * processing or Ajax sourced data.
		 *  @type string
		 *  @default GET
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverMethod
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sServerMethod": "GET",
	
	
		/**
		 * DataTables makes use of renderers when displaying HTML elements for
		 * a table. These renderers can be added or modified by plug-ins to
		 * generate suitable mark-up for a site. For example the Bootstrap
		 * integration plug-in for DataTables uses a paging button renderer to
		 * display pagination buttons in the mark-up required by Bootstrap.
		 *
		 * For further information about the renderers available see
		 * DataTable.ext.renderer
		 *  @type string|object
		 *  @default null
		 *
		 *  @name DataTable.defaults.renderer
		 *
		 */
		"renderer": null
	};
	
	_fnHungarianMap( DataTable.defaults );
	
	
	
	/*
	 * Developer note - See note in model.defaults.js about the use of Hungarian
	 * notation and camel case.
	 */
	
	/**
	 * Column options that can be given to DataTables at initialisation time.
	 *  @namespace
	 */
	DataTable.defaults.column = {
		/**
		 * Define which column(s) an order will occur on for this column. This
		 * allows a column's ordering to take multiple columns into account when
		 * doing a sort or use the data from a different column. For example first
		 * name / last name columns make sense to do a multi-column sort over the
		 * two columns.
		 *  @type array|int
		 *  @default null <i>Takes the value of the column index automatically</i>
		 *
		 *  @name DataTable.defaults.column.orderData
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
		 *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
		 *          { "orderData": 2, "targets": [ 2 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderData": [ 0, 1 ] },
		 *          { "orderData": [ 1, 0 ] },
		 *          { "orderData": 2 },
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"aDataSort": null,
		"iDataSort": -1,
	
	
		/**
		 * You can control the default ordering direction, and even alter the
		 * behaviour of the sort handler (i.e. only allow ascending ordering etc)
		 * using this parameter.
		 *  @type array
		 *  @default [ 'asc', 'desc' ]
		 *
		 *  @name DataTable.defaults.column.orderSequence
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
		 *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          { "orderSequence": [ "asc" ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ] },
		 *          { "orderSequence": [ "desc" ] },
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"asSorting": [ 'asc', 'desc' ],
	
	
		/**
		 * Enable or disable filtering on the data in this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.searchable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "searchable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "searchable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSearchable": true,
	
	
		/**
		 * Enable or disable ordering on this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.orderable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSortable": true,
	
	
		/**
		 * Enable or disable the display of this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.visible
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "visible": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "visible": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bVisible": true,
	
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} td The TD node that has been created
		 *  @param {*} cellData The Data for the cell
		 *  @param {array|object} rowData The data for the whole row
		 *  @param {int} row The row index for the aoData data store
		 *  @param {int} col The column index for aoColumns
		 *
		 *  @name DataTable.defaults.column.createdCell
		 *  @dtopt Columns
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [3],
		 *          "createdCell": function (td, cellData, rowData, row, col) {
		 *            if ( cellData == "1.7" ) {
		 *              $(td).css('color', 'blue')
		 *            }
		 *          }
		 *        } ]
		 *      });
		 *    } );
		 */
		"fnCreatedCell": null,
	
	
		/**
		 * This parameter has been replaced by `data` in DataTables to ensure naming
		 * consistency. `dataProp` can still be used, as there is backwards
		 * compatibility in DataTables for this option, but it is strongly
		 * recommended that you use `data` in preference to `dataProp`.
		 *  @name DataTable.defaults.column.dataProp
		 */
	
	
		/**
		 * This property can be used to read data from any data source property,
		 * including deeply nested objects / properties. `data` can be given in a
		 * number of different ways which effect its behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object. Note that
		 *      function notation is recommended for use in `render` rather than
		 *      `data` as it is much simpler to use as a renderer.
		 * * `null` - use the original data source for the row rather than plucking
		 *   data directly from it. This action has effects on two other
		 *   initialisation options:
		 *    * `defaultContent` - When null is given as the `data` option and
		 *      `defaultContent` is specified for the column, the value defined by
		 *      `defaultContent` will be used for the cell.
		 *    * `render` - When null is used for the `data` option and the `render`
		 *      option is specified for the column, the whole data source for the
		 *      row is used for the renderer.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * `{array|object}` The data source for the row
		 *      * `{string}` The type call data requested - this will be 'set' when
		 *        setting data or 'filter', 'display', 'type', 'sort' or undefined
		 *        when gathering data. Note that when `undefined` is given for the
		 *        type DataTables expects to get the raw data for the object back<
		 *      * `{*}` Data to set when the second parameter is 'set'.
		 *    * Return:
		 *      * The return value from the function is not required when 'set' is
		 *        the type of call, but otherwise the return is what will be used
		 *        for the data requested.
		 *
		 * Note that `data` is a getter and setter option. If you just require
		 * formatting of data for output, you will likely want to use `render` which
		 * is simply a getter and thus simpler to use.
		 *
		 * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
		 * name change reflects the flexibility of this property and is consistent
		 * with the naming of mRender. If 'mDataProp' is given, then it will still
		 * be used by DataTables, as it automatically maps the old name to the new
		 * if required.
		 *
		 *  @type string|int|function|null
		 *  @default null <i>Use automatically calculated column index</i>
		 *
		 *  @name DataTable.defaults.column.data
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Read table data from objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {value},
		 *    //      "version": {value},
		 *    //      "grade": {value}
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/objects.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform" },
		 *          { "data": "version" },
		 *          { "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Read information from deeply nested objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {
		 *    //         "inner": {value}
		 *    //      },
		 *    //      "details": [
		 *    //         {value}, {value}
		 *    //      ]
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform.inner" },
		 *          { "data": "platform.details.0" },
		 *          { "data": "platform.details.1" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `data` as a function to provide different information for
		 *    // sorting, filtering and display. In this case, currency (price)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": function ( source, type, val ) {
		 *            if (type === 'set') {
		 *              source.price = val;
		 *              // Store the computed dislay and filter values for efficiency
		 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
		 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
		 *              return;
		 *            }
		 *            else if (type === 'display') {
		 *              return source.price_display;
		 *            }
		 *            else if (type === 'filter') {
		 *              return source.price_filter;
		 *            }
		 *            // 'sort', 'type' and undefined all just use the integer
		 *            return source.price;
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using default content
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null,
		 *          "defaultContent": "Click to edit"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using array notation - outputting a list from an array
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "name[, ]"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 */
		"mData": null,
	
	
		/**
		 * This property is the rendering partner to `data` and it is suggested that
		 * when you want to manipulate data for display (including filtering,
		 * sorting etc) without altering the underlying data for the table, use this
		 * property. `render` can be considered to be the the read only companion to
		 * `data` which is read / write (then as such more complex). Like `data`
		 * this option can be given in a number of different ways to effect its
		 * behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object.
		 * * `object` - use different data for the different data types requested by
		 *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
		 *   of the object is the data type the property refers to and the value can
		 *   defined using an integer, string or function using the same rules as
		 *   `render` normally does. Note that an `_` option _must_ be specified.
		 *   This is the default value to use if you haven't specified a value for
		 *   the data type requested by DataTables.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * {array|object} The data source for the row (based on `data`)
		 *      * {string} The type call data requested - this will be 'filter',
		 *        'display', 'type' or 'sort'.
		 *      * {array|object} The full data source for the row (not based on
		 *        `data`)
		 *    * Return:
		 *      * The return value from the function is what will be used for the
		 *        data requested.
		 *
		 *  @type string|int|function|object|null
		 *  @default null Use the data source value.
		 *
		 *  @name DataTable.defaults.column.render
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Create a comma separated list from an array of objects
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          {
		 *            "data": "platform",
		 *            "render": "[, ].name"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Execute a function to obtain data
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": "browserName()"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // As an object, extracting different data for the different types
		 *    // This would be used with a data source such as:
		 *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
		 *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
		 *    // (which has both forms) is used for filtering for if a user inputs either format, while
		 *    // the formatted phone number is the one that is shown in the table.
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": {
		 *            "_": "phone",
		 *            "filter": "phone_filter",
		 *            "display": "phone_display"
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Use as a function to create a link from the data source
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "download_link",
		 *          "render": function ( data, type, full ) {
		 *            return '<a href="'+data+'">Download</a>';
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 */
		"mRender": null,
	
	
		/**
		 * Change the cell type created for the column - either TD cells or TH cells. This
		 * can be useful as TH cells have semantic meaning in the table body, allowing them
		 * to act as a header for a row (you may wish to add scope='row' to the TH elements).
		 *  @type string
		 *  @default td
		 *
		 *  @name DataTable.defaults.column.cellType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Make the first column use TH cells
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "cellType": "th"
		 *        } ]
		 *      } );
		 *    } );
		 */
		"sCellType": "td",
	
	
		/**
		 * Class to give to each cell in this column.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.class
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "class": "my_class", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "class": "my_class" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sClass": "",
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 * Generally you shouldn't need this!
		 *  @type string
		 *  @default <i>Empty string<i>
		 *
		 *  @name DataTable.defaults.column.contentPadding
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "contentPadding": "mmm"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sContentPadding": "",
	
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because `data`
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 *
		 *  @name DataTable.defaults.column.defaultContent
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit",
		 *            "targets": [ -1 ]
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sDefaultContent": null,
	
	
		/**
		 * This parameter is only used in DataTables' server-side processing. It can
		 * be exceptionally useful to know what columns are being displayed on the
		 * client side, and to map these to database fields. When defined, the names
		 * also allow DataTables to reorder information from the server if it comes
		 * back in an unexpected order (i.e. if you switch your columns around on the
		 * client-side, your server-side code does not also need updating).
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.name
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "name": "engine", "targets": [ 0 ] },
		 *          { "name": "browser", "targets": [ 1 ] },
		 *          { "name": "platform", "targets": [ 2 ] },
		 *          { "name": "version", "targets": [ 3 ] },
		 *          { "name": "grade", "targets": [ 4 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "name": "engine" },
		 *          { "name": "browser" },
		 *          { "name": "platform" },
		 *          { "name": "version" },
		 *          { "name": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sName": "",
	
	
		/**
		 * Defines a data source type for the ordering which can be used to read
		 * real-time information from the table (updating the internally cached
		 * version) prior to ordering. This allows ordering to occur on user
		 * editable elements such as form inputs.
		 *  @type string
		 *  @default std
		 *
		 *  @name DataTable.defaults.column.orderDataType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
		 *          { "type": "numeric", "targets": [ 3 ] },
		 *          { "orderDataType": "dom-select", "targets": [ 4 ] },
		 *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          { "orderDataType": "dom-text" },
		 *          { "orderDataType": "dom-text", "type": "numeric" },
		 *          { "orderDataType": "dom-select" },
		 *          { "orderDataType": "dom-checkbox" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sSortDataType": "std",
	
	
		/**
		 * The title of this column.
		 *  @type string
		 *  @default null <i>Derived from the 'TH' value for this column in the
		 *    original HTML table.</i>
		 *
		 *  @name DataTable.defaults.column.title
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "title": "My column title", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "title": "My column title" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sTitle": null,
	
	
		/**
		 * The type allows you to specify how the data for this column will be
		 * ordered. Four types (string, numeric, date and html (which will strip
		 * HTML tags before ordering)) are currently available. Note that only date
		 * formats understood by Javascript's Date() object will be accepted as type
		 * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
		 * 'numeric', 'date' or 'html' (by default). Further types can be adding
		 * through plug-ins.
		 *  @type string
		 *  @default null <i>Auto-detected from raw data</i>
		 *
		 *  @name DataTable.defaults.column.type
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "type": "html", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "type": "html" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sType": null,
	
	
		/**
		 * Defining the width of the column, this parameter may take any CSS value
		 * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
		 * been given a specific width through this interface ensuring that the table
		 * remains readable.
		 *  @type string
		 *  @default null <i>Automatic</i>
		 *
		 *  @name DataTable.defaults.column.width
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "width": "20%", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "width": "20%" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sWidth": null
	};
	
	_fnHungarianMap( DataTable.defaults.column );
	
	
	
	/**
	 * DataTables settings object - this holds all the information needed for a
	 * given table, including configuration, data and current application of the
	 * table options. DataTables does not have a single instance for each DataTable
	 * with the settings attached to that instance, but rather instances of the
	 * DataTable "class" are created on-the-fly as needed (typically by a
	 * $().dataTable() call) and the settings object is then applied to that
	 * instance.
	 *
	 * Note that this object is related to {@link DataTable.defaults} but this
	 * one is the internal data store for DataTables's cache of columns. It should
	 * NOT be manipulated outside of DataTables. Any configuration should be done
	 * through the initialisation options.
	 *  @namespace
	 *  @todo Really should attach the settings object to individual instances so we
	 *    don't need to create new instances on each $().dataTable() call (if the
	 *    table already exists). It would also save passing oSettings around and
	 *    into every single function. However, this is a very significant
	 *    architecture change for DataTables and will almost certainly break
	 *    backwards compatibility with older installations. This is something that
	 *    will be done in 2.0.
	 */
	DataTable.models.oSettings = {
		/**
		 * Primary features of DataTables and their enablement state.
		 *  @namespace
		 */
		"oFeatures": {
	
			/**
			 * Flag to say if DataTables should automatically try to calculate the
			 * optimum table and columns widths (true) or not (false).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bAutoWidth": null,
	
			/**
			 * Delay the creation of TR and TD elements until they are actually
			 * needed by a driven page draw. This can give a significant speed
			 * increase for Ajax source and Javascript source data, but makes no
			 * difference at all fro DOM and server-side processing tables.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bDeferRender": null,
	
			/**
			 * Enable filtering on the table or not. Note that if this is disabled
			 * then there is no filtering at all on the table, including fnFilter.
			 * To just remove the filtering input use sDom and remove the 'f' option.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bFilter": null,
	
			/**
			 * Table information element (the 'Showing x of y records' div) enable
			 * flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bInfo": null,
	
			/**
			 * Present a user control allowing the end user to change the page size
			 * when pagination is enabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bLengthChange": null,
	
			/**
			 * Pagination enabled or not. Note that if this is disabled then length
			 * changing must also be disabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bPaginate": null,
	
			/**
			 * Processing indicator enable flag whenever DataTables is enacting a
			 * user request - typically an Ajax request for server-side processing.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bProcessing": null,
	
			/**
			 * Server-side processing enabled flag - when enabled DataTables will
			 * get all data from the server for every draw - there is no filtering,
			 * sorting or paging done on the client-side.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bServerSide": null,
	
			/**
			 * Sorting enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSort": null,
	
			/**
			 * Multi-column sorting
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortMulti": null,
	
			/**
			 * Apply a class to the columns which are being sorted to provide a
			 * visual highlight or not. This can slow things down when enabled since
			 * there is a lot of DOM interaction.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortClasses": null,
	
			/**
			 * State saving enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bStateSave": null
		},
	
	
		/**
		 * Scrolling settings for a table.
		 *  @namespace
		 */
		"oScroll": {
			/**
			 * When the table is shorter in height than sScrollY, collapse the
			 * table container down to the height of the table (when true).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bCollapse": null,
	
			/**
			 * Width of the scrollbar for the web-browser's platform. Calculated
			 * during table initialisation.
			 *  @type int
			 *  @default 0
			 */
			"iBarWidth": 0,
	
			/**
			 * Viewport width for horizontal scrolling. Horizontal scrolling is
			 * disabled if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sX": null,
	
			/**
			 * Width to expand the table to when using x-scrolling. Typically you
			 * should not need to use this.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 *  @deprecated
			 */
			"sXInner": null,
	
			/**
			 * Viewport height for vertical scrolling. Vertical scrolling is disabled
			 * if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sY": null
		},
	
		/**
		 * Language information for the table.
		 *  @namespace
		 *  @extends DataTable.defaults.oLanguage
		 */
		"oLanguage": {
			/**
			 * Information callback function. See
			 * {@link DataTable.defaults.fnInfoCallback}
			 *  @type function
			 *  @default null
			 */
			"fnInfoCallback": null
		},
	
		/**
		 * Browser support parameters
		 *  @namespace
		 */
		"oBrowser": {
			/**
			 * Indicate if the browser incorrectly calculates width:100% inside a
			 * scrolling element (IE6/7)
			 *  @type boolean
			 *  @default false
			 */
			"bScrollOversize": false,
	
			/**
			 * Determine if the vertical scrollbar is on the right or left of the
			 * scrolling container - needed for rtl language layout, although not
			 * all browsers move the scrollbar (Safari).
			 *  @type boolean
			 *  @default false
			 */
			"bScrollbarLeft": false
		},
	
	
		"ajax": null,
	
	
		/**
		 * Array referencing the nodes which are used for the features. The
		 * parameters of this object match what is allowed by sDom - i.e.
		 *   <ul>
		 *     <li>'l' - Length changing</li>
		 *     <li>'f' - Filtering input</li>
		 *     <li>'t' - The table!</li>
		 *     <li>'i' - Information</li>
		 *     <li>'p' - Pagination</li>
		 *     <li>'r' - pRocessing</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aanFeatures": [],
	
		/**
		 * Store data information - see {@link DataTable.models.oRow} for detailed
		 * information.
		 *  @type array
		 *  @default []
		 */
		"aoData": [],
	
		/**
		 * Array of indexes which are in the current display (after filtering etc)
		 *  @type array
		 *  @default []
		 */
		"aiDisplay": [],
	
		/**
		 * Array of indexes for display - no filtering
		 *  @type array
		 *  @default []
		 */
		"aiDisplayMaster": [],
	
		/**
		 * Store information about each column that is in use
		 *  @type array
		 *  @default []
		 */
		"aoColumns": [],
	
		/**
		 * Store information about the table's header
		 *  @type array
		 *  @default []
		 */
		"aoHeader": [],
	
		/**
		 * Store information about the table's footer
		 *  @type array
		 *  @default []
		 */
		"aoFooter": [],
	
		/**
		 * Store the applied global search information in case we want to force a
		 * research or compare the old search to a new one.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 */
		"oPreviousSearch": {},
	
		/**
		 * Store the applied search for each column - see
		 * {@link DataTable.models.oSearch} for the format that is used for the
		 * filtering information for each column.
		 *  @type array
		 *  @default []
		 */
		"aoPreSearchCols": [],
	
		/**
		 * Sorting that is applied to the table. Note that the inner arrays are
		 * used in the following manner:
		 * <ul>
		 *   <li>Index 0 - column number</li>
		 *   <li>Index 1 - current sorting direction</li>
		 * </ul>
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @todo These inner arrays should really be objects
		 */
		"aaSorting": null,
	
		/**
		 * Sorting that is always applied to the table (i.e. prefixed in front of
		 * aaSorting).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aaSortingFixed": [],
	
		/**
		 * Classes to use for the striping of a table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"asStripeClasses": null,
	
		/**
		 * If restoring a table - we should restore its striping classes as well
		 *  @type array
		 *  @default []
		 */
		"asDestroyStripes": [],
	
		/**
		 * If restoring a table - we should restore its width
		 *  @type int
		 *  @default 0
		 */
		"sDestroyWidth": 0,
	
		/**
		 * Callback functions array for every time a row is inserted (i.e. on a draw).
		 *  @type array
		 *  @default []
		 */
		"aoRowCallback": [],
	
		/**
		 * Callback functions for the header on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoHeaderCallback": [],
	
		/**
		 * Callback function for the footer on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoFooterCallback": [],
	
		/**
		 * Array of callback functions for draw callback functions
		 *  @type array
		 *  @default []
		 */
		"aoDrawCallback": [],
	
		/**
		 * Array of callback functions for row created function
		 *  @type array
		 *  @default []
		 */
		"aoRowCreatedCallback": [],
	
		/**
		 * Callback functions for just before the table is redrawn. A return of
		 * false will be used to cancel the draw.
		 *  @type array
		 *  @default []
		 */
		"aoPreDrawCallback": [],
	
		/**
		 * Callback functions for when the table has been initialised.
		 *  @type array
		 *  @default []
		 */
		"aoInitComplete": [],
	
	
		/**
		 * Callbacks for modifying the settings to be stored for state saving, prior to
		 * saving state.
		 *  @type array
		 *  @default []
		 */
		"aoStateSaveParams": [],
	
		/**
		 * Callbacks for modifying the settings that have been stored for state saving
		 * prior to using the stored values to restore the state.
		 *  @type array
		 *  @default []
		 */
		"aoStateLoadParams": [],
	
		/**
		 * Callbacks for operating on the settings object once the saved state has been
		 * loaded
		 *  @type array
		 *  @default []
		 */
		"aoStateLoaded": [],
	
		/**
		 * Cache the table ID for quick access
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sTableId": "",
	
		/**
		 * The TABLE node for the main table
		 *  @type node
		 *  @default null
		 */
		"nTable": null,
	
		/**
		 * Permanent ref to the thead element
		 *  @type node
		 *  @default null
		 */
		"nTHead": null,
	
		/**
		 * Permanent ref to the tfoot element - if it exists
		 *  @type node
		 *  @default null
		 */
		"nTFoot": null,
	
		/**
		 * Permanent ref to the tbody element
		 *  @type node
		 *  @default null
		 */
		"nTBody": null,
	
		/**
		 * Cache the wrapper node (contains all DataTables controlled elements)
		 *  @type node
		 *  @default null
		 */
		"nTableWrapper": null,
	
		/**
		 * Indicate if when using server-side processing the loading of data
		 * should be deferred until the second draw.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 *  @default false
		 */
		"bDeferLoading": false,
	
		/**
		 * Indicate if all required information has been read in
		 *  @type boolean
		 *  @default false
		 */
		"bInitialised": false,
	
		/**
		 * Information about open rows. Each object in the array has the parameters
		 * 'nTr' and 'nParent'
		 *  @type array
		 *  @default []
		 */
		"aoOpenRows": [],
	
		/**
		 * Dictate the positioning of DataTables' control elements - see
		 * {@link DataTable.model.oInit.sDom}.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sDom": null,
	
		/**
		 * Search delay (in mS)
		 *  @type integer
		 *  @default null
		 */
		"searchDelay": null,
	
		/**
		 * Which type of pagination should be used.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default two_button
		 */
		"sPaginationType": "two_button",
	
		/**
		 * The state duration (for `stateSave`) in seconds.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type int
		 *  @default 0
		 */
		"iStateDuration": 0,
	
		/**
		 * Array of callback functions for state saving. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the JSON string to save that has been thus far created. Returns
		 *       a JSON string to be inserted into a json object
		 *       (i.e. '"param": [ 0, 1, 2]')</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateSave": [],
	
		/**
		 * Array of callback functions for state loading. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the object stored. May return false to cancel state loading</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateLoad": [],
	
		/**
		 * State that was saved. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oSavedState": null,
	
		/**
		 * State that was loaded. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oLoadedState": null,
	
		/**
		 * Source url for AJAX data for the table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sAjaxSource": null,
	
		/**
		 * Property from a given object from which to read the table data from. This
		 * can be an empty string (when not server-side processing), in which case
		 * it is  assumed an an array is given directly.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sAjaxDataProp": null,
	
		/**
		 * Note if draw should be blocked while getting data
		 *  @type boolean
		 *  @default true
		 */
		"bAjaxDataGet": true,
	
		/**
		 * The last jQuery XHR object that was used for server-side data gathering.
		 * This can be used for working with the XHR information in one of the
		 * callbacks
		 *  @type object
		 *  @default null
		 */
		"jqXHR": null,
	
		/**
		 * JSON returned from the server in the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"json": undefined,
	
		/**
		 * Data submitted as part of the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"oAjaxData": undefined,
	
		/**
		 * Function to get the server-side data.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnServerData": null,
	
		/**
		 * Functions which are called prior to sending an Ajax request so extra
		 * parameters can easily be sent to the server
		 *  @type array
		 *  @default []
		 */
		"aoServerParams": [],
	
		/**
		 * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
		 * required).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sServerMethod": null,
	
		/**
		 * Format numbers for display.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnFormatNumber": null,
	
		/**
		 * List of options that can be used for the user selectable length menu.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aLengthMenu": null,
	
		/**
		 * Counter for the draws that the table does. Also used as a tracker for
		 * server-side processing
		 *  @type int
		 *  @default 0
		 */
		"iDraw": 0,
	
		/**
		 * Indicate if a redraw is being done - useful for Ajax
		 *  @type boolean
		 *  @default false
		 */
		"bDrawing": false,
	
		/**
		 * Draw index (iDraw) of the last error when parsing the returned data
		 *  @type int
		 *  @default -1
		 */
		"iDrawError": -1,
	
		/**
		 * Paging display length
		 *  @type int
		 *  @default 10
		 */
		"_iDisplayLength": 10,
	
		/**
		 * Paging start point - aiDisplay index
		 *  @type int
		 *  @default 0
		 */
		"_iDisplayStart": 0,
	
		/**
		 * Server-side processing - number of records in the result set
		 * (i.e. before filtering), Use fnRecordsTotal rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type int
		 *  @default 0
		 *  @private
		 */
		"_iRecordsTotal": 0,
	
		/**
		 * Server-side processing - number of records in the current display set
		 * (i.e. after filtering). Use fnRecordsDisplay rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type boolean
		 *  @default 0
		 *  @private
		 */
		"_iRecordsDisplay": 0,
	
		/**
		 * Flag to indicate if jQuery UI marking and classes should be used.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bJUI": null,
	
		/**
		 * The classes to use for the table
		 *  @type object
		 *  @default {}
		 */
		"oClasses": {},
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if filtering has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bFiltered": false,
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if sorting has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bSorted": false,
	
		/**
		 * Indicate that if multiple rows are in the header and there is more than
		 * one unique cell per column, if the top one (true) or bottom one (false)
		 * should be used for sorting / title by DataTables.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bSortCellsTop": null,
	
		/**
		 * Initialisation object that is used for the table
		 *  @type object
		 *  @default null
		 */
		"oInit": null,
	
		/**
		 * Destroy callback functions - for plug-ins to attach themselves to the
		 * destroy so they can clean up markup and events.
		 *  @type array
		 *  @default []
		 */
		"aoDestroyCallback": [],
	
	
		/**
		 * Get the number of records in the current record set, before filtering
		 *  @type function
		 */
		"fnRecordsTotal": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsTotal * 1 :
				this.aiDisplayMaster.length;
		},
	
		/**
		 * Get the number of records in the current record set, after filtering
		 *  @type function
		 */
		"fnRecordsDisplay": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsDisplay * 1 :
				this.aiDisplay.length;
		},
	
		/**
		 * Get the display end point - aiDisplay index
		 *  @type function
		 */
		"fnDisplayEnd": function ()
		{
			var
				len      = this._iDisplayLength,
				start    = this._iDisplayStart,
				calc     = start + len,
				records  = this.aiDisplay.length,
				features = this.oFeatures,
				paginate = features.bPaginate;
	
			if ( features.bServerSide ) {
				return paginate === false || len === -1 ?
					start + records :
					Math.min( start+len, this._iRecordsDisplay );
			}
			else {
				return ! paginate || calc>records || len===-1 ?
					records :
					calc;
			}
		},
	
		/**
		 * The DataTables object for this table
		 *  @type object
		 *  @default null
		 */
		"oInstance": null,
	
		/**
		 * Unique identifier for each instance of the DataTables object. If there
		 * is an ID on the table node, then it takes that value, otherwise an
		 * incrementing internal counter is used.
		 *  @type string
		 *  @default null
		 */
		"sInstance": null,
	
		/**
		 * tabindex attribute value that is added to DataTables control elements, allowing
		 * keyboard navigation of the table and its controls.
		 */
		"iTabIndex": 0,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollHead": null,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollFoot": null,
	
		/**
		 * Last applied sort
		 *  @type array
		 *  @default []
		 */
		"aLastSort": [],
	
		/**
		 * Stored plug-in instances
		 *  @type object
		 *  @default {}
		 */
		"oPlugins": {}
	};

	/**
	 * Extension object for DataTables that is used to provide all extension
	 * options.
	 *
	 * Note that the `DataTable.ext` object is available through
	 * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
	 * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
	 *  @namespace
	 *  @extends DataTable.models.ext
	 */
	
	
	/**
	 * DataTables extensions
	 * 
	 * This namespace acts as a collection area for plug-ins that can be used to
	 * extend DataTables capabilities. Indeed many of the build in methods
	 * use this method to provide their own capabilities (sorting methods for
	 * example).
	 *
	 * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
	 * reasons
	 *
	 *  @namespace
	 */
	DataTable.ext = _ext = {
		/**
		 * Element class names
		 *
		 *  @type object
		 *  @default {}
		 */
		classes: {},
	
	
		/**
		 * Error reporting.
		 * 
		 * How should DataTables report an error. Can take the value 'alert' or
		 * 'throw'
		 *
		 *  @type string
		 *  @default alert
		 */
		errMode: "alert",
	
	
		/**
		 * Feature plug-ins.
		 * 
		 * This is an array of objects which describe the feature plug-ins that are
		 * available to DataTables. These feature plug-ins are then available for
		 * use through the `dom` initialisation option.
		 * 
		 * Each feature plug-in is described by an object which must have the
		 * following properties:
		 * 
		 * * `fnInit` - function that is used to initialise the plug-in,
		 * * `cFeature` - a character so the feature can be enabled by the `dom`
		 *   instillation option. This is case sensitive.
		 *
		 * The `fnInit` function has the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 *
		 * And the following return is expected:
		 * 
		 * * {node|null} The element which contains your feature. Note that the
		 *   return may also be void if your plug-in does not require to inject any
		 *   DOM elements into DataTables control (`dom`) - for example this might
		 *   be useful when developing a plug-in which allows table control via
		 *   keyboard entry
		 *
		 *  @type array
		 *
		 *  @example
		 *    $.fn.dataTable.ext.features.push( {
		 *      "fnInit": function( oSettings ) {
		 *        return new TableTools( { "oDTSettings": oSettings } );
		 *      },
		 *      "cFeature": "T"
		 *    } );
		 */
		feature: [],
	
	
		/**
		 * Row searching.
		 * 
		 * This method of searching is complimentary to the default type based
		 * searching, and a lot more comprehensive as it allows you complete control
		 * over the searching logic. Each element in this array is a function
		 * (parameters described below) that is called for every row in the table,
		 * and your logic decides if it should be included in the searching data set
		 * or not.
		 *
		 * Searching functions have the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{array|object}` Data for the row to be processed (same as the
		 *    original format that was passed in as the data source, or an array
		 *    from a DOM data source
		 * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
		 *    can be useful to retrieve the `TR` element if you need DOM interaction.
		 *
		 * And the following return is expected:
		 *
		 * * {boolean} Include the row in the searched result set (true) or not
		 *   (false)
		 *
		 * Note that as with the main search ability in DataTables, technically this
		 * is "filtering", since it is subtractive. However, for consistency in
		 * naming we call it searching here.
		 *
		 *  @type array
		 *  @default []
		 *
		 *  @example
		 *    // The following example shows custom search being applied to the
		 *    // fourth column (i.e. the data[3] index) based on two input values
		 *    // from the end-user, matching the data in a certain range.
		 *    $.fn.dataTable.ext.search.push(
		 *      function( settings, data, dataIndex ) {
		 *        var min = document.getElementById('min').value * 1;
		 *        var max = document.getElementById('max').value * 1;
		 *        var version = data[3] == "-" ? 0 : data[3]*1;
		 *
		 *        if ( min == "" && max == "" ) {
		 *          return true;
		 *        }
		 *        else if ( min == "" && version < max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && "" == max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && version < max ) {
		 *          return true;
		 *        }
		 *        return false;
		 *      }
		 *    );
		 */
		search: [],
	
	
		/**
		 * Internal functions, exposed for used in plug-ins.
		 * 
		 * Please note that you should not need to use the internal methods for
		 * anything other than a plug-in (and even then, try to avoid if possible).
		 * The internal function may change between releases.
		 *
		 *  @type object
		 *  @default {}
		 */
		internal: {},
	
	
		/**
		 * Legacy configuration options. Enable and disable legacy options that
		 * are available in DataTables.
		 *
		 *  @type object
		 */
		legacy: {
			/**
			 * Enable / disable DataTables 1.9 compatible server-side processing
			 * requests
			 *
			 *  @type boolean
			 *  @default null
			 */
			ajax: null
		},
	
	
		/**
		 * Pagination plug-in methods.
		 * 
		 * Each entry in this object is a function and defines which buttons should
		 * be shown by the pagination rendering method that is used for the table:
		 * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
		 * buttons are displayed in the document, while the functions here tell it
		 * what buttons to display. This is done by returning an array of button
		 * descriptions (what each button will do).
		 *
		 * Pagination types (the four built in options and any additional plug-in
		 * options defined here) can be used through the `paginationType`
		 * initialisation parameter.
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{int} page` The current page index
		 * 2. `{int} pages` The number of pages in the table
		 *
		 * Each function is expected to return an array where each element of the
		 * array can be one of:
		 *
		 * * `first` - Jump to first page when activated
		 * * `last` - Jump to last page when activated
		 * * `previous` - Show previous page when activated
		 * * `next` - Show next page when activated
		 * * `{int}` - Show page of the index given
		 * * `{array}` - A nested array containing the above elements to add a
		 *   containing 'DIV' element (might be useful for styling).
		 *
		 * Note that DataTables v1.9- used this object slightly differently whereby
		 * an object with two functions would be defined for each plug-in. That
		 * ability is still supported by DataTables 1.10+ to provide backwards
		 * compatibility, but this option of use is now decremented and no longer
		 * documented in DataTables 1.10+.
		 *
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    // Show previous, next and current page buttons only
		 *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
		 *      return [ 'previous', page, 'next' ];
		 *    };
		 */
		pager: {},
	
	
		renderer: {
			pageButton: {},
			header: {}
		},
	
	
		/**
		 * Ordering plug-ins - custom data source
		 * 
		 * The extension options for ordering of data available here is complimentary
		 * to the default type based ordering that DataTables typically uses. It
		 * allows much greater control over the the data that is being used to
		 * order a column, but is necessarily therefore more complex.
		 * 
		 * This type of ordering is useful if you want to do ordering based on data
		 * live from the DOM (for example the contents of an 'input' element) rather
		 * than just the static string that DataTables knows of.
		 * 
		 * The way these plug-ins work is that you create an array of the values you
		 * wish to be ordering for the column in question and then return that
		 * array. The data in the array much be in the index order of the rows in
		 * the table (not the currently ordering order!). Which order data gathering
		 * function is run here depends on the `dt-init columns.orderDataType`
		 * parameter that is used for the column (if any).
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{int}` Target column index
		 *
		 * Each function is expected to return an array:
		 *
		 * * `{array}` Data for the column to be ordering upon
		 *
		 *  @type array
		 *
		 *  @example
		 *    // Ordering using `input` node values
		 *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
		 *    {
		 *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
		 *        return $('input', td).val();
		 *      } );
		 *    }
		 */
		order: {},
	
	
		/**
		 * Type based plug-ins.
		 *
		 * Each column in DataTables has a type assigned to it, either by automatic
		 * detection or by direct assignment using the `type` option for the column.
		 * The type of a column will effect how it is ordering and search (plug-ins
		 * can also make use of the column type if required).
		 *
		 * @namespace
		 */
		type: {
			/**
			 * Type detection functions.
			 *
			 * The functions defined in this object are used to automatically detect
			 * a column's type, making initialisation of DataTables super easy, even
			 * when complex data is in the table.
			 *
			 * The functions defined take two parameters:
			 *
		     *  1. `{*}` Data from the column cell to be analysed
		     *  2. `{settings}` DataTables settings object. This can be used to
		     *     perform context specific type detection - for example detection
		     *     based on language settings such as using a comma for a decimal
		     *     place. Generally speaking the options from the settings will not
		     *     be required
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Data type detected, or null if unknown (and thus
			 *   pass it on to the other type detection functions.
			 *
			 *  @type array
			 *
			 *  @example
			 *    // Currency type detection plug-in:
			 *    $.fn.dataTable.ext.type.detect.push(
			 *      function ( data, settings ) {
			 *        // Check the numeric part
			 *        if ( ! $.isNumeric( data.substring(1) ) ) {
			 *          return null;
			 *        }
			 *
			 *        // Check prefixed by currency
			 *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
			 *          return 'currency';
			 *        }
			 *        return null;
			 *      }
			 *    );
			 */
			detect: [],
	
	
			/**
			 * Type based search formatting.
			 *
			 * The type based searching functions can be used to pre-format the
			 * data to be search on. For example, it can be used to strip HTML
			 * tags or to de-format telephone numbers for numeric only searching.
			 *
			 * Note that is a search is not defined for a column of a given type,
			 * no search formatting will be performed.
			 * 
			 * Pre-processing of searching data plug-ins - When you assign the sType
			 * for a column (or have it automatically detected for you by DataTables
			 * or a type detection plug-in), you will typically be using this for
			 * custom sorting, but it can also be used to provide custom searching
			 * by allowing you to pre-processing the data and returning the data in
			 * the format that should be searched upon. This is done by adding
			 * functions this object with a parameter name which matches the sType
			 * for that target column. This is the corollary of <i>afnSortData</i>
			 * for searching data.
			 *
			 * The functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for searching
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Formatted string that will be used for the searching.
			 *
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
			 *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
			 *    }
			 */
			search: {},
	
	
			/**
			 * Type based ordering.
			 *
			 * The column type tells DataTables what ordering to apply to the table
			 * when a column is sorted upon. The order for each type that is defined,
			 * is defined by the functions available in this object.
			 *
			 * Each ordering option can be described by three properties added to
			 * this object:
			 *
			 * * `{type}-pre` - Pre-formatting function
			 * * `{type}-asc` - Ascending order function
			 * * `{type}-desc` - Descending order function
			 *
			 * All three can be used together, only `{type}-pre` or only
			 * `{type}-asc` and `{type}-desc` together. It is generally recommended
			 * that only `{type}-pre` is used, as this provides the optimal
			 * implementation in terms of speed, although the others are provided
			 * for compatibility with existing Javascript sort functions.
			 *
			 * `{type}-pre`: Functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for ordering
			 *
			 * And return:
			 *
			 * * `{*}` Data to be sorted upon
			 *
			 * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
			 * functions, taking two parameters:
			 *
		     *  1. `{*}` Data to compare to the second parameter
		     *  2. `{*}` Data to compare to the first parameter
			 *
			 * And returning:
			 *
			 * * `{*}` Ordering match: <0 if first parameter should be sorted lower
			 *   than the second parameter, ===0 if the two parameters are equal and
			 *   >0 if the first parameter should be sorted height than the second
			 *   parameter.
			 * 
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    // Numeric ordering of formatted numbers with a pre-formatter
			 *    $.extend( $.fn.dataTable.ext.type.order, {
			 *      "string-pre": function(x) {
			 *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
			 *        return parseFloat( a );
			 *      }
			 *    } );
			 *
			 *  @example
			 *    // Case-sensitive string ordering, with no pre-formatting method
			 *    $.extend( $.fn.dataTable.ext.order, {
			 *      "string-case-asc": function(x,y) {
			 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			 *      },
			 *      "string-case-desc": function(x,y) {
			 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
			 *      }
			 *    } );
			 */
			order: {}
		},
	
		/**
		 * Unique DataTables instance counter
		 *
		 * @type int
		 * @private
		 */
		_unique: 0,
	
	
		//
		// Depreciated
		// The following properties are retained for backwards compatiblity only.
		// The should not be used in new projects and will be removed in a future
		// version
		//
	
		/**
		 * Version check function.
		 *  @type function
		 *  @depreciated Since 1.10
		 */
		fnVersionCheck: DataTable.fnVersionCheck,
	
	
		/**
		 * Index for what 'this' index API functions should use
		 *  @type int
		 *  @deprecated Since v1.10
		 */
		iApiIndex: 0,
	
	
		/**
		 * jQuery UI class container
		 *  @type object
		 *  @deprecated Since v1.10
		 */
		oJUIClasses: {},
	
	
		/**
		 * Software version
		 *  @type string
		 *  @deprecated Since v1.10
		 */
		sVersion: DataTable.version
	};
	
	
	//
	// Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
	//
	$.extend( _ext, {
		afnFiltering: _ext.search,
		aTypes:       _ext.type.detect,
		ofnSearch:    _ext.type.search,
		oSort:        _ext.type.order,
		afnSortData:  _ext.order,
		aoFeatures:   _ext.feature,
		oApi:         _ext.internal,
		oStdClasses:  _ext.classes,
		oPagination:  _ext.pager
	} );
	
	
	$.extend( DataTable.ext.classes, {
		"sTable": "dataTable",
		"sNoFooter": "no-footer",
	
		/* Paging buttons */
		"sPageButton": "paginate_button",
		"sPageButtonActive": "current",
		"sPageButtonDisabled": "disabled",
	
		/* Striping classes */
		"sStripeOdd": "odd",
		"sStripeEven": "even",
	
		/* Empty row */
		"sRowEmpty": "dataTables_empty",
	
		/* Features */
		"sWrapper": "dataTables_wrapper",
		"sFilter": "dataTables_filter",
		"sInfo": "dataTables_info",
		"sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
		"sLength": "dataTables_length",
		"sProcessing": "dataTables_processing",
	
		/* Sorting */
		"sSortAsc": "sorting_asc",
		"sSortDesc": "sorting_desc",
		"sSortable": "sorting", /* Sortable in both directions */
		"sSortableAsc": "sorting_asc_disabled",
		"sSortableDesc": "sorting_desc_disabled",
		"sSortableNone": "sorting_disabled",
		"sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */
	
		/* Filtering */
		"sFilterInput": "",
	
		/* Page length */
		"sLengthSelect": "",
	
		/* Scrolling */
		"sScrollWrapper": "dataTables_scroll",
		"sScrollHead": "dataTables_scrollHead",
		"sScrollHeadInner": "dataTables_scrollHeadInner",
		"sScrollBody": "dataTables_scrollBody",
		"sScrollFoot": "dataTables_scrollFoot",
		"sScrollFootInner": "dataTables_scrollFootInner",
	
		/* Misc */
		"sHeaderTH": "",
		"sFooterTH": "",
	
		// Deprecated
		"sSortJUIAsc": "",
		"sSortJUIDesc": "",
		"sSortJUI": "",
		"sSortJUIAscAllowed": "",
		"sSortJUIDescAllowed": "",
		"sSortJUIWrapper": "",
		"sSortIcon": "",
		"sJUIHeader": "",
		"sJUIFooter": ""
	} );
	
	
	(function() {
	
	// Reused strings for better compression. Closure compiler appears to have a
	// weird edge case where it is trying to expand strings rather than use the
	// variable version. This results in about 200 bytes being added, for very
	// little preference benefit since it this run on script load only.
	var _empty = '';
	_empty = '';
	
	var _stateDefault = _empty + 'ui-state-default';
	var _sortIcon     = _empty + 'css_right ui-icon ui-icon-';
	var _headerFooter = _empty + 'fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix';
	
	$.extend( DataTable.ext.oJUIClasses, DataTable.ext.classes, {
		/* Full numbers paging buttons */
		"sPageButton":         "fg-button ui-button "+_stateDefault,
		"sPageButtonActive":   "ui-state-disabled",
		"sPageButtonDisabled": "ui-state-disabled",
	
		/* Features */
		"sPaging": "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi "+
			"ui-buttonset-multi paging_", /* Note that the type is postfixed */
	
		/* Sorting */
		"sSortAsc":            _stateDefault+" sorting_asc",
		"sSortDesc":           _stateDefault+" sorting_desc",
		"sSortable":           _stateDefault+" sorting",
		"sSortableAsc":        _stateDefault+" sorting_asc_disabled",
		"sSortableDesc":       _stateDefault+" sorting_desc_disabled",
		"sSortableNone":       _stateDefault+" sorting_disabled",
		"sSortJUIAsc":         _sortIcon+"triangle-1-n",
		"sSortJUIDesc":        _sortIcon+"triangle-1-s",
		"sSortJUI":            _sortIcon+"carat-2-n-s",
		"sSortJUIAscAllowed":  _sortIcon+"carat-1-n",
		"sSortJUIDescAllowed": _sortIcon+"carat-1-s",
		"sSortJUIWrapper":     "DataTables_sort_wrapper",
		"sSortIcon":           "DataTables_sort_icon",
	
		/* Scrolling */
		"sScrollHead": "dataTables_scrollHead "+_stateDefault,
		"sScrollFoot": "dataTables_scrollFoot "+_stateDefault,
	
		/* Misc */
		"sHeaderTH":  _stateDefault,
		"sFooterTH":  _stateDefault,
		"sJUIHeader": _headerFooter+" ui-corner-tl ui-corner-tr",
		"sJUIFooter": _headerFooter+" ui-corner-bl ui-corner-br"
	} );
	
	}());
	
	
	
	var extPagination = DataTable.ext.pager;
	
	function _numbers ( page, pages ) {
		var
			numbers = [],
			buttons = extPagination.numbers_length,
			half = Math.floor( buttons / 2 ),
			i = 1;
	
		if ( pages <= buttons ) {
			numbers = _range( 0, pages );
		}
		else if ( page <= half ) {
			numbers = _range( 0, buttons-2 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
		}
		else if ( page >= pages - 1 - half ) {
			numbers = _range( pages-(buttons-2), pages );
			numbers.splice( 0, 0, 'ellipsis' ); // no unshift in ie6
			numbers.splice( 0, 0, 0 );
		}
		else {
			numbers = _range( page-1, page+2 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
			numbers.splice( 0, 0, 'ellipsis' );
			numbers.splice( 0, 0, 0 );
		}
	
		numbers.DT_el = 'span';
		return numbers;
	}
	
	
	$.extend( extPagination, {
		simple: function ( page, pages ) {
			return [ 'previous', 'next' ];
		},
	
		full: function ( page, pages ) {
			return [  'first', 'previous', 'next', 'last' ];
		},
	
		simple_numbers: function ( page, pages ) {
			return [ 'previous', _numbers(page, pages), 'next' ];
		},
	
		full_numbers: function ( page, pages ) {
			return [ 'first', 'previous', _numbers(page, pages), 'next', 'last' ];
		},
	
		// For testing and plug-ins to use
		_numbers: _numbers,
		numbers_length: 7
	} );
	
	
	$.extend( true, DataTable.ext.renderer, {
		pageButton: {
			_: function ( settings, host, idx, buttons, page, pages ) {
				var classes = settings.oClasses;
				var lang = settings.oLanguage.oPaginate;
				var btnDisplay, btnClass, counter=0;
	
				var attach = function( container, buttons ) {
					var i, ien, node, button;
					var clickHandler = function ( e ) {
						_fnPageChange( settings, e.data.action, true );
					};
	
					for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
						button = buttons[i];
	
						if ( $.isArray( button ) ) {
							var inner = $( '<'+(button.DT_el || 'div')+'/>' )
								.appendTo( container );
							attach( inner, button );
						}
						else {
							btnDisplay = '';
							btnClass = '';
	
							switch ( button ) {
								case 'ellipsis':
									container.append('<span>&hellip;</span>');
									break;
	
								case 'first':
									btnDisplay = lang.sFirst;
									btnClass = button + (page > 0 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'previous':
									btnDisplay = lang.sPrevious;
									btnClass = button + (page > 0 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'next':
									btnDisplay = lang.sNext;
									btnClass = button + (page < pages-1 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'last':
									btnDisplay = lang.sLast;
									btnClass = button + (page < pages-1 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								default:
									btnDisplay = button + 1;
									btnClass = page === button ?
										classes.sPageButtonActive : '';
									break;
							}
	
							if ( btnDisplay ) {
								node = $('<a>', {
										'class': classes.sPageButton+' '+btnClass,
										'aria-controls': settings.sTableId,
										'data-dt-idx': counter,
										'tabindex': settings.iTabIndex,
										'id': idx === 0 && typeof button === 'string' ?
											settings.sTableId +'_'+ button :
											null
									} )
									.html( btnDisplay )
									.appendTo( container );
	
								_fnBindAction(
									node, {action: button}, clickHandler
								);
	
								counter++;
							}
						}
					}
				};
	
				// IE9 throws an 'unknown error' if document.activeElement is used
				// inside an iframe or frame. Try / catch the error. Not good for
				// accessibility, but neither are frames.
				try {
					// Because this approach is destroying and recreating the paging
					// elements, focus is lost on the select button which is bad for
					// accessibility. So we want to restore focus once the draw has
					// completed
					var activeEl = $(document.activeElement).data('dt-idx');
	
					attach( $(host).empty(), buttons );
	
					if ( activeEl !== null ) {
						$(host).find( '[data-dt-idx='+activeEl+']' ).focus();
					}
				}
				catch (e) {}
			}
		}
	} );
	
	
	
	// Built in type detection. See model.ext.aTypes for information about
	// what is required from this methods.
	$.extend( DataTable.ext.type.detect, [
		// Plain numbers - first since V8 detects some plain numbers as dates
		// e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal ) ? 'num'+decimal : null;
		},
	
		// Dates (only those recognised by the browser's Date.parse)
		function ( d, settings )
		{
			// V8 will remove any unknown characters at the start and end of the
			// expression, leading to false matches such as `$245.12` or `10%` being
			// a valid date. See forum thread 18941 for detail.
			if ( d && !(d instanceof Date) && ( ! _re_date_start.test(d) || ! _re_date_end.test(d) ) ) {
				return null;
			}
			var parsed = Date.parse(d);
			return (parsed !== null && !isNaN(parsed)) || _empty(d) ? 'date' : null;
		},
	
		// Formatted numbers
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal, true ) ? 'num-fmt'+decimal : null;
		},
	
		// HTML numeric
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal ) ? 'html-num'+decimal : null;
		},
	
		// HTML numeric, formatted
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal, true ) ? 'html-num-fmt'+decimal : null;
		},
	
		// HTML (this is strict checking - there must be html)
		function ( d, settings )
		{
			return _empty( d ) || (typeof d === 'string' && d.indexOf('<') !== -1) ?
				'html' : null;
		}
	] );
	
	
	
	// Filter formatting functions. See model.ext.ofnSearch for information about
	// what is required from these methods.
	// 
	// Note that additional search methods are added for the html numbers and
	// html formatted numbers by `_addNumericSort()` when we know what the decimal
	// place is
	
	
	$.extend( DataTable.ext.type.search, {
		html: function ( data ) {
			return _empty(data) ?
				data :
				typeof data === 'string' ?
					data
						.replace( _re_new_lines, " " )
						.replace( _re_html, "" ) :
					'';
		},
	
		string: function ( data ) {
			return _empty(data) ?
				data :
				typeof data === 'string' ?
					data.replace( _re_new_lines, " " ) :
					data;
		}
	} );
	
	
	
	var __numericReplace = function ( d, decimalPlace, re1, re2 ) {
		if ( d !== 0 && (!d || d === '-') ) {
			return -Infinity;
		}
	
		// If a decimal place other than `.` is used, it needs to be given to the
		// function so we can detect it and replace with a `.` which is the only
		// decimal place Javascript recognises - it is not locale aware.
		if ( decimalPlace ) {
			d = _numToDecimal( d, decimalPlace );
		}
	
		if ( d.replace ) {
			if ( re1 ) {
				d = d.replace( re1, '' );
			}
	
			if ( re2 ) {
				d = d.replace( re2, '' );
			}
		}
	
		return d * 1;
	};
	
	
	// Add the numeric 'deformatting' functions for sorting and search. This is done
	// in a function to provide an easy ability for the language options to add
	// additional methods if a non-period decimal place is used.
	function _addNumericSort ( decimalPlace ) {
		$.each(
			{
				// Plain numbers
				"num": function ( d ) {
					return __numericReplace( d, decimalPlace );
				},
	
				// Formatted numbers
				"num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_formatted_numeric );
				},
	
				// HTML numeric
				"html-num": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html );
				},
	
				// HTML numeric, formatted
				"html-num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html, _re_formatted_numeric );
				}
			},
			function ( key, fn ) {
				// Add the ordering method
				_ext.type.order[ key+decimalPlace+'-pre' ] = fn;
	
				// For HTML types add a search formatter that will strip the HTML
				if ( key.match(/^html\-/) ) {
					_ext.type.search[ key+decimalPlace ] = _ext.type.search.html;
				}
			}
		);
	}
	
	
	// Default sort methods
	$.extend( _ext.type.order, {
		// Dates
		"date-pre": function ( d ) {
			return Date.parse( d ) || 0;
		},
	
		// html
		"html-pre": function ( a ) {
			return _empty(a) ?
				'' :
				a.replace ?
					a.replace( /<.*?>/g, "" ).toLowerCase() :
					a+'';
		},
	
		// string
		"string-pre": function ( a ) {
			// This is a little complex, but faster than always calling toString,
			// http://jsperf.com/tostring-v-check
			return _empty(a) ?
				'' :
				typeof a === 'string' ?
					a.toLowerCase() :
					! a.toString ?
						'' :
						a.toString();
		},
	
		// string-asc and -desc are retained only for compatibility with the old
		// sort methods
		"string-asc": function ( x, y ) {
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		},
	
		"string-desc": function ( x, y ) {
			return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		}
	} );
	
	
	// Numeric sorting types - order doesn't matter here
	_addNumericSort( '' );
	
	
	$.extend( true, DataTable.ext.renderer, {
		header: {
			_: function ( settings, cell, column, classes ) {
				// No additional mark-up required
				// Attach a sort listener to update on sort - note that using the
				// `DT` namespace will allow the event to be removed automatically
				// on destroy, while the `dt` namespaced event is the one we are
				// listening for
				$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
					if ( settings !== ctx ) { // need to check this this is the host
						return;               // table, not a nested one
					}
	
					var colIdx = column.idx;
	
					cell
						.removeClass(
							column.sSortingClass +' '+
							classes.sSortAsc +' '+
							classes.sSortDesc
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
				} );
			},
	
			jqueryui: function ( settings, cell, column, classes ) {
				$('<div/>')
					.addClass( classes.sSortJUIWrapper )
					.append( cell.contents() )
					.append( $('<span/>')
						.addClass( classes.sSortIcon+' '+column.sSortingClassJUI )
					)
					.appendTo( cell );
	
				// Attach a sort listener to update on sort
				$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
					if ( settings !== ctx ) {
						return;
					}
	
					var colIdx = column.idx;
	
					cell
						.removeClass( classes.sSortAsc +" "+classes.sSortDesc )
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
	
					cell
						.find( 'span.'+classes.sSortIcon )
						.removeClass(
							classes.sSortJUIAsc +" "+
							classes.sSortJUIDesc +" "+
							classes.sSortJUI +" "+
							classes.sSortJUIAscAllowed +" "+
							classes.sSortJUIDescAllowed
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortJUIAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortJUIDesc :
								column.sSortingClassJUI
						);
				} );
			}
		}
	} );
	
	/*
	 * Public helper functions. These aren't used internally by DataTables, or
	 * called by any of the options passed into DataTables, but they can be used
	 * externally by developers working with DataTables. They are helper functions
	 * to make working with DataTables a little bit easier.
	 */
	
	/**
	 * Helpers for `columns.render`.
	 *
	 * The options defined here can be used with the `columns.render` initialisation
	 * option to provide a display renderer. The following functions are defined:
	 *
	 * * `number` - Will format numeric data (defined by `columns.data`) for
	 *   display, retaining the original unformatted data for sorting and filtering.
	 *   It takes 4 parameters:
	 *   * `string` - Thousands grouping separator
	 *   * `string` - Decimal point indicator
	 *   * `integer` - Number of decimal points to show
	 *   * `string` (optional) - Prefix.
	 *
	 * @example
	 *   // Column definition using the number renderer
	 *   {
	 *     data: "salary",
	 *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
	 *   }
	 *
	 * @namespace
	 */
	DataTable.render = {
		number: function ( thousands, decimal, precision, prefix ) {
			return {
				display: function ( d ) {
					var negative = d < 0 ? '-' : '';
					d = Math.abs( parseFloat( d ) );
	
					var intPart = parseInt( d, 10 );
					var floatPart = precision ?
						decimal+(d - intPart).toFixed( precision ).substring( 2 ):
						'';
	
					return negative + (prefix||'') +
						intPart.toString().replace(
							/\B(?=(\d{3})+(?!\d))/g, thousands
						) +
						floatPart;
				}
			};
		}
	};
	
	
	/*
	 * This is really a good bit rubbish this method of exposing the internal methods
	 * publicly... - To be fixed in 2.0 using methods on the prototype
	 */
	
	
	/**
	 * Create a wrapper function for exporting an internal functions to an external API.
	 *  @param {string} fn API function name
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#internal
	 */
	function _fnExternApiFunc (fn)
	{
		return function() {
			var args = [_fnSettingsFromNode( this[DataTable.ext.iApiIndex] )].concat(
				Array.prototype.slice.call(arguments)
			);
			return DataTable.ext.internal[fn].apply( this, args );
		};
	}
	
	
	/**
	 * Reference to internal functions for use by plug-in developers. Note that
	 * these methods are references to internal functions and are considered to be
	 * private. If you use these methods, be aware that they are liable to change
	 * between versions.
	 *  @namespace
	 */
	$.extend( DataTable.ext.internal, {
		_fnExternApiFunc: _fnExternApiFunc,
		_fnBuildAjax: _fnBuildAjax,
		_fnAjaxUpdate: _fnAjaxUpdate,
		_fnAjaxParameters: _fnAjaxParameters,
		_fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
		_fnAjaxDataSrc: _fnAjaxDataSrc,
		_fnAddColumn: _fnAddColumn,
		_fnColumnOptions: _fnColumnOptions,
		_fnAdjustColumnSizing: _fnAdjustColumnSizing,
		_fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
		_fnColumnIndexToVisible: _fnColumnIndexToVisible,
		_fnVisbleColumns: _fnVisbleColumns,
		_fnGetColumns: _fnGetColumns,
		_fnColumnTypes: _fnColumnTypes,
		_fnApplyColumnDefs: _fnApplyColumnDefs,
		_fnHungarianMap: _fnHungarianMap,
		_fnCamelToHungarian: _fnCamelToHungarian,
		_fnLanguageCompat: _fnLanguageCompat,
		_fnBrowserDetect: _fnBrowserDetect,
		_fnAddData: _fnAddData,
		_fnAddTr: _fnAddTr,
		_fnNodeToDataIndex: _fnNodeToDataIndex,
		_fnNodeToColumnIndex: _fnNodeToColumnIndex,
		_fnGetCellData: _fnGetCellData,
		_fnSetCellData: _fnSetCellData,
		_fnSplitObjNotation: _fnSplitObjNotation,
		_fnGetObjectDataFn: _fnGetObjectDataFn,
		_fnSetObjectDataFn: _fnSetObjectDataFn,
		_fnGetDataMaster: _fnGetDataMaster,
		_fnClearTable: _fnClearTable,
		_fnDeleteIndex: _fnDeleteIndex,
		_fnInvalidate: _fnInvalidate,
		_fnGetRowElements: _fnGetRowElements,
		_fnCreateTr: _fnCreateTr,
		_fnBuildHead: _fnBuildHead,
		_fnDrawHead: _fnDrawHead,
		_fnDraw: _fnDraw,
		_fnReDraw: _fnReDraw,
		_fnAddOptionsHtml: _fnAddOptionsHtml,
		_fnDetectHeader: _fnDetectHeader,
		_fnGetUniqueThs: _fnGetUniqueThs,
		_fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
		_fnFilterComplete: _fnFilterComplete,
		_fnFilterCustom: _fnFilterCustom,
		_fnFilterColumn: _fnFilterColumn,
		_fnFilter: _fnFilter,
		_fnFilterCreateSearch: _fnFilterCreateSearch,
		_fnEscapeRegex: _fnEscapeRegex,
		_fnFilterData: _fnFilterData,
		_fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
		_fnUpdateInfo: _fnUpdateInfo,
		_fnInfoMacros: _fnInfoMacros,
		_fnInitialise: _fnInitialise,
		_fnInitComplete: _fnInitComplete,
		_fnLengthChange: _fnLengthChange,
		_fnFeatureHtmlLength: _fnFeatureHtmlLength,
		_fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
		_fnPageChange: _fnPageChange,
		_fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
		_fnProcessingDisplay: _fnProcessingDisplay,
		_fnFeatureHtmlTable: _fnFeatureHtmlTable,
		_fnScrollDraw: _fnScrollDraw,
		_fnApplyToChildren: _fnApplyToChildren,
		_fnCalculateColumnWidths: _fnCalculateColumnWidths,
		_fnThrottle: _fnThrottle,
		_fnConvertToWidth: _fnConvertToWidth,
		_fnScrollingWidthAdjust: _fnScrollingWidthAdjust,
		_fnGetWidestNode: _fnGetWidestNode,
		_fnGetMaxLenString: _fnGetMaxLenString,
		_fnStringToCss: _fnStringToCss,
		_fnScrollBarWidth: _fnScrollBarWidth,
		_fnSortFlatten: _fnSortFlatten,
		_fnSort: _fnSort,
		_fnSortAria: _fnSortAria,
		_fnSortListener: _fnSortListener,
		_fnSortAttachListener: _fnSortAttachListener,
		_fnSortingClasses: _fnSortingClasses,
		_fnSortData: _fnSortData,
		_fnSaveState: _fnSaveState,
		_fnLoadState: _fnLoadState,
		_fnSettingsFromNode: _fnSettingsFromNode,
		_fnLog: _fnLog,
		_fnMap: _fnMap,
		_fnBindAction: _fnBindAction,
		_fnCallbackReg: _fnCallbackReg,
		_fnCallbackFire: _fnCallbackFire,
		_fnLengthOverflow: _fnLengthOverflow,
		_fnRenderer: _fnRenderer,
		_fnDataSource: _fnDataSource,
		_fnRowAttributes: _fnRowAttributes,
		_fnCalculateEnd: function () {} // Used by a lot of plug-ins, but redundant
		                                // in 1.10, so this dead-end function is
		                                // added to prevent errors
	} );
	

	// jQuery access
	$.fn.dataTable = DataTable;

	// Legacy aliases
	$.fn.dataTableSettings = DataTable.settings;
	$.fn.dataTableExt = DataTable.ext;

	// With a capital `D` we return a DataTables API instance rather than a
	// jQuery object
	$.fn.DataTable = function ( opts ) {
		return $(this).dataTable( opts ).api();
	};

	// All properties that are available to $.fn.dataTable should also be
	// available on $.fn.DataTable
	$.each( DataTable, function ( prop, val ) {
		$.fn.DataTable[ prop ] = val;
	} );


	// Information about events fired by DataTables - for documentation.
	/**
	 * Draw event, fired whenever the table is redrawn on the page, at the same
	 * point as fnDrawCallback. This may be useful for binding events or
	 * performing calculations when the table is altered at all.
	 *  @name DataTable#draw.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Search event, fired when the searching applied to the table (using the
	 * built-in global search, or column filters) is altered.
	 *  @name DataTable#search.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page change event, fired when the paging of the table is altered.
	 *  @name DataTable#page.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Order event, fired when the ordering applied to the table is altered.
	 *  @name DataTable#order.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * DataTables initialisation complete event, fired when the table is fully
	 * drawn, including Ajax data loaded, if Ajax data is required.
	 *  @name DataTable#init.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The JSON object request from the server - only
	 *    present if client-side Ajax sourced data is used</li></ol>
	 */

	/**
	 * State save event, fired when the table has changed state a new state save
	 * is required. This event allows modification of the state saving object
	 * prior to actually doing the save, including addition or other state
	 * properties (for plug-ins) or modification of a DataTables core property.
	 *  @name DataTable#stateSaveParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The state information to be saved
	 */

	/**
	 * State load event, fired when the table is loading state from the stored
	 * data, but prior to the settings object being modified by the saved state
	 * - allowing modification of the saved state is required or loading of
	 * state for a plug-in.
	 *  @name DataTable#stateLoadParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * State loaded event, fired when state has been loaded from stored data and
	 * the settings object has been modified by the loaded data.
	 *  @name DataTable#stateLoaded.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * Processing event, fired when DataTables is doing some kind of processing
	 * (be it, order, searcg or anything else). It can be used to indicate to
	 * the end user that there is something happening, or that something has
	 * finished.
	 *  @name DataTable#processing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {boolean} bShow Flag for if DataTables is doing processing or not
	 */

	/**
	 * Ajax (XHR) event, fired whenever an Ajax request is completed from a
	 * request to made to the server for new data. This event is called before
	 * DataTables processed the returned data, so it can also be used to pre-
	 * process the data returned from the server, if needed.
	 *
	 * Note that this trigger is called in `fnServerData`, if you override
	 * `fnServerData` and which to use this event, you need to trigger it in you
	 * success function.
	 *  @name DataTable#xhr.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {object} json JSON returned from the server
	 *
	 *  @example
	 *     // Use a custom property returned from the server in another DOM element
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       $('#status').html( json.status );
	 *     } );
	 *
	 *  @example
	 *     // Pre-process the data returned from the server
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       for ( var i=0, ien=json.aaData.length ; i<ien ; i++ ) {
	 *         json.aaData[i].sum = json.aaData[i].one + json.aaData[i].two;
	 *       }
	 *       // Note no return - manipulate the data directly in the JSON object.
	 *     } );
	 */

	/**
	 * Destroy event, fired when the DataTable is destroyed by calling fnDestroy
	 * or passing the bDestroy:true parameter in the initialisation object. This
	 * can be used to remove bound events, added DOM nodes, etc.
	 *  @name DataTable#destroy.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page length change event, fired when number of records to show on each
	 * page (the length) is changed.
	 *  @name DataTable#length.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {integer} len New length
	 */

	/**
	 * Column sizing has changed.
	 *  @name DataTable#column-sizing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Column visibility has changed.
	 *  @name DataTable#column-visibility.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {int} column Column index
	 *  @param {bool} vis `false` if column now hidden, or `true` if visible
	 */

	return $.fn.dataTable;
}));

}(window, document));

/* Set the defaults for DataTables initialisation */

$.extend(true, $.fn.dataTable.defaults, {
    "sDom": "<'row'<'col-sm-6'l><'col-sm-6'f>r>" + "t" + "<'row'<'col-sm-6'i><'col-sm-6'p>>",
    "oLanguage": {
        "sLengthMenu": "_MENU_ records per page"
    }
});


/* Default class modification */
$.extend($.fn.dataTableExt.oStdClasses, {
    "sWrapper": "dataTables_wrapper form-inline",
    "sFilterInput": "form-control input-sm",
    "sLengthSelect": "form-control input-sm"
});

// In 1.10 we use the pagination renderers to draw the Bootstrap paging,
// rather than  custom plug-in
if ($.fn.dataTable.Api) {
    $.fn.dataTable.defaults.renderer = 'bootstrap';
    $.fn.dataTable.ext.renderer.pageButton.bootstrap = function(settings, host, idx, buttons, page, pages) {
        var api = new $.fn.dataTable.Api(settings);
        var classes = settings.oClasses;
        var lang = settings.oLanguage.oPaginate;
        var btnDisplay, btnClass;

        var attach = function(container, buttons) {
            var i, ien, node, button;
            var clickHandler = function(e) {
                e.preventDefault();
                if (e.data.action !== 'ellipsis') {
                    api.page(e.data.action).draw(false);
                }
            };

            for (i = 0, ien = buttons.length; i < ien; i++) {
                button = buttons[i];

                if ($.isArray(button)) {
                    attach(container, button);
                } else {
                    btnDisplay = '';
                    btnClass = '';

                    switch (button) {
                        case 'ellipsis':
                            btnDisplay = '&hellip;';
                            btnClass = 'disabled';
                            break;

                        case 'first':
                            btnDisplay = lang.sFirst;
                            btnClass = button + (page > 0 ?
                                '' : ' disabled');
                            break;

                        case 'previous':
                            btnDisplay = lang.sPrevious;
                            btnClass = button + (page > 0 ?
                                '' : ' disabled');
                            break;

                        case 'next':
                            btnDisplay = lang.sNext;
                            btnClass = button + (page < pages - 1 ?
                                '' : ' disabled');
                            break;

                        case 'last':
                            btnDisplay = lang.sLast;
                            btnClass = button + (page < pages - 1 ?
                                '' : ' disabled');
                            break;

                        default:
                            btnDisplay = button + 1;
                            btnClass = page === button ?
                                'active' : '';
                            break;
                    }

                    if (btnDisplay) {
                        node = $('<li>', {
                            'class': classes.sPageButton + ' ' + btnClass,
                            'aria-controls': settings.sTableId,
                            'tabindex': settings.iTabIndex,
                            'id': idx === 0 && typeof button === 'string' ? settings.sTableId + '_' + button : null
                        })
                            .append($('<a>', {
                                    'href': '#'
                                })
                                .html(btnDisplay)
                        )
                            .appendTo(container);

                        settings.oApi._fnBindAction(
                            node, {
                                action: button
                            }, clickHandler
                        );
                    }
                }
            }
        };

        attach(
            $(host).empty().html('<ul class="pagination"/>').children('ul'),
            buttons
        );
    }
} else {
    // Integration for 1.9-
    $.fn.dataTable.defaults.sPaginationType = 'bootstrap';

    /* API method to get paging information */
    $.fn.dataTableExt.oApi.fnPagingInfo = function(oSettings) {
        return {
            "iStart": oSettings._iDisplayStart,
            "iEnd": oSettings.fnDisplayEnd(),
            "iLength": oSettings._iDisplayLength,
            "iTotal": oSettings.fnRecordsTotal(),
            "iFilteredTotal": oSettings.fnRecordsDisplay(),
            "iPage": oSettings._iDisplayLength === -1 ? 0 : Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength),
            "iTotalPages": oSettings._iDisplayLength === -1 ? 0 : Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength)
        };
    };

    /* Bootstrap style pagination control */
    $.extend($.fn.dataTableExt.oPagination, {
        "bootstrap": {
            "fnInit": function(oSettings, nPaging, fnDraw) {
                var oLang = oSettings.oLanguage.oPaginate;
                var fnClickHandler = function(e) {
                    e.preventDefault();
                    if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
                        fnDraw(oSettings);
                    }
                };

                $(nPaging).append(
                    '<ul class="pagination">' +
                    '<li class="prev disabled"><a href="#">&larr; ' + oLang.sPrevious + '</a></li>' +
                    '<li class="next disabled"><a href="#">' + oLang.sNext + ' &rarr; </a></li>' +
                    '</ul>'
                );
                var els = $('a', nPaging);
                $(els[0]).bind('click.DT', {
                    action: "previous"
                }, fnClickHandler);
                $(els[1]).bind('click.DT', {
                    action: "next"
                }, fnClickHandler);
            },

            "fnUpdate": function(oSettings, fnDraw) {
                var iListLength = 5;
                var oPaging = oSettings.oInstance.fnPagingInfo();
                var an = oSettings.aanFeatures.p;
                var i, ien, j, sClass, iStart, iEnd, iHalf = Math.floor(iListLength / 2);

                if (oPaging.iTotalPages < iListLength) {
                    iStart = 1;
                    iEnd = oPaging.iTotalPages;
                } else if (oPaging.iPage <= iHalf) {
                    iStart = 1;
                    iEnd = iListLength;
                } else if (oPaging.iPage >= (oPaging.iTotalPages - iHalf)) {
                    iStart = oPaging.iTotalPages - iListLength + 1;
                    iEnd = oPaging.iTotalPages;
                } else {
                    iStart = oPaging.iPage - iHalf + 1;
                    iEnd = iStart + iListLength - 1;
                }

                for (i = 0, ien = an.length; i < ien; i++) {
                    // Remove the middle elements
                    $('li:gt(0)', an[i]).filter(':not(:last)').remove();

                    // Add the new list items and their event handlers
                    for (j = iStart; j <= iEnd; j++) {
                        sClass = (j == oPaging.iPage + 1) ? 'class="active"' : '';
                        $('<li ' + sClass + '><a href="#">' + j + '</a></li>')
                            .insertBefore($('li:last', an[i])[0])
                            .bind('click', function(e) {
                                e.preventDefault();
                                oSettings._iDisplayStart = (parseInt($('a', this).text(), 10) - 1) * oPaging.iLength;
                                fnDraw(oSettings);
                            });
                    }

                    // Add / remove disabled classes from the static elements
                    if (oPaging.iPage === 0) {
                        $('li:first', an[i]).addClass('disabled');
                    } else {
                        $('li:first', an[i]).removeClass('disabled');
                    }

                    if (oPaging.iPage === oPaging.iTotalPages - 1 || oPaging.iTotalPages === 0) {
                        $('li:last', an[i]).addClass('disabled');
                    } else {
                        $('li:last', an[i]).removeClass('disabled');
                    }
                }
            }
        }
    });
}


/*
 * TableTools Bootstrap compatibility
 * Required TableTools 2.1+
 */
if ($.fn.DataTable.TableTools) {
    // Set the classes that TableTools uses to something suitable for Bootstrap
    $.extend(true, $.fn.DataTable.TableTools.classes, {
        "container": "DTTT btn-group",
        "buttons": {
            "normal": "btn btn-default",
            "disabled": "disabled"
        },
        "collection": {
            "container": "DTTT_dropdown dropdown-menu",
            "buttons": {
                "normal": "",
                "disabled": "disabled"
            }
        },
        "print": {
            "info": "DTTT_print_info modal"
        },
        "select": {
            "row": "active"
        }
    });

    // Have the collection use a bootstrap compatible dropdown
    $.extend(true, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
        "collection": {
            "container": "ul",
            "button": "li",
            "liner": "a"
        }
    });
}
;
/*! Responsive 1.0.2
 * 2014 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     Responsive
 * @description Responsive tables plug-in for DataTables
 * @version     1.0.2
 * @file        dataTables.responsive.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2014 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */


(function(window, document, undefined) {


    var factory = function( $, DataTable ) {
        "use strict";

        /**
         * Responsive is a plug-in for the DataTables library that makes use of
         * DataTables' ability to change the visibility of columns, changing the
         * visibility of columns so the displayed columns fit into the table container.
         * The end result is that complex tables will be dynamically adjusted to fit
         * into the viewport, be it on a desktop, tablet or mobile browser.
         *
         * Responsive for DataTables has two modes of operation, which can used
         * individually or combined:
         *
         * * Class name based control - columns assigned class names that match the
         *   breakpoint logic can be shown / hidden as required for each breakpoint.
         * * Automatic control - columns are automatically hidden when there is no
         *   room left to display them. Columns removed from the right.
         *
         * In additional to column visibility control, Responsive also has built into
         * options to use DataTables' child row display to show / hide the information
         * from the table that has been hidden. There are also two modes of operation
         * for this child row display:
         *
         * * Inline - when the control element that the user can use to show / hide
         *   child rows is displayed inside the first column of the table.
         * * Column - where a whole column is dedicated to be the show / hide control.
         *
         * Initialisation of Responsive is performed by:
         *
         * * Adding the class `responsive` or `dt-responsive` to the table. In this case
         *   Responsive will automatically be initialised with the default configuration
         *   options when the DataTable is created.
         * * Using the `responsive` option in the DataTables configuration options. This
         *   can also be used to specify the configuration options, or simply set to
         *   `true` to use the defaults.
         *
         *  @class
         *  @param {object} settings DataTables settings object for the host table
         *  @param {object} [opts] Configuration options
         *  @requires jQuery 1.7+
         *  @requires DataTables 1.10.1+
         *
         *  @example
         *      $('#example').DataTable( {
 *        responsive: true
 *      } );
         *    } );
         */
        var Responsive = function ( settings, opts ) {
            // Sanity check that we are using DataTables 1.10 or newer
            if ( ! DataTable.versionCheck || ! DataTable.versionCheck( '1.10.1' ) ) {
                throw 'DataTables Responsive requires DataTables 1.10.1 or newer';
            }

            this.s = {
                dt: new DataTable.Api( settings ),
                columns: []
            };

            // Check if responsive has already been initialised on this table
            if ( this.s.dt.settings()[0].responsive ) {
                return;
            }

            // details is an object, but for simplicity the user can give it as a string
            if ( opts && typeof opts.details === 'string' ) {
                opts.details = { type: opts.details };
            }

            this.c = $.extend( true, {}, Responsive.defaults, DataTable.defaults.responsive, opts );
            settings.responsive = this;
            this._constructor();
        };

        Responsive.prototype = {
            /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
             * Constructor
             */

            /**
             * Initialise the Responsive instance
             *
             * @private
             */
            _constructor: function ()
            {
                var that = this;
                var dt = this.s.dt;

                dt.settings()[0]._responsive = this;

                // Use DataTables' private throttle function to avoid processor thrashing
                $(window).on( 'resize.dtr orientationchange.dtr', dt.settings()[0].oApi._fnThrottle( function () {
                    that._resize();
                } ) );

                // Destroy event handler
                dt.on( 'destroy.dtr', function () {
                    $(window).off( 'resize.dtr orientationchange.dtr' );
                } );

                // Reorder the breakpoints array here in case they have been added out
                // of order
                this.c.breakpoints.sort( function (a, b) {
                    return a.width < b.width ? 1 :
                        a.width > b.width ? -1 : 0;
                } );

                // Determine which columns are already hidden, and should therefore
                // remain hidden. TODO - should this be done? See thread 22677
                //
                // this.s.alwaysHidden = dt.columns(':hidden').indexes();

                this._classLogic();
                this._resizeAuto();

                // First pass - draw the table for the current viewport size
                this._resize();

                // Details handler
                var details = this.c.details;
                if ( details.type ) {
                    that._detailsInit();
                    this._detailsVis();

                    dt.on( 'column-visibility.dtr', function () {
                        that._detailsVis();
                    } );

                    $(dt.table().node()).addClass( 'dtr-'+details.type );
                }
            },


            /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
             * Private methods
             */

            /**
             * Calculate the visibility for the columns in a table for a given
             * breakpoint. The result is pre-determined based on the class logic if
             * class names are used to control all columns, but the width of the table
             * is also used if there are columns which are to be automatically shown
             * and hidden.
             *
             * @param  {string} breakpoint Breakpoint name to use for the calculation
             * @return {array} Array of boolean values initiating the visibility of each
             *   column.
             *  @private
             */
            _columnsVisiblity: function ( breakpoint )
            {
                var dt = this.s.dt;
                var columns = this.s.columns;
                var i, ien;

                // Class logic - determine which columns are in this breakpoint based
                // on the classes. If no class control (i.e. `auto`) then `-` is used
                // to indicate this to the rest of the function
                var display = $.map( columns, function ( col ) {
                    return col.auto && col.minWidth === null ?
                        false :
                        col.auto === true ?
                            '-' :
                            $.inArray( breakpoint, col.includeIn ) !== -1;
                } );

                // Auto column control - first pass: how much width is taken by the
                // ones that must be included from the non-auto columns
                var requiredWidth = 0;
                for ( i=0, ien=display.length ; i<ien ; i++ ) {
                    if ( display[i] === true ) {
                        requiredWidth += columns[i].minWidth;
                    }
                }

                // Second pass, use up any remaining width for other columns
                var widthAvailable = dt.table().container().offsetWidth;
                var usedWidth = widthAvailable - requiredWidth;

                for ( i=0, ien=display.length ; i<ien ; i++ ) {
                    // Control column needs to always be included. This makes it sub-
                    // optimal in terms of using the available with, but to stop layout
                    // thrashing or overflow
                    if ( columns[i].control ) {
                        usedWidth -= columns[i].minWidth;
                    }
                    else if ( display[i] === '-' ) {
                        // Otherwise, remove the width
                        display[i] = usedWidth - columns[i].minWidth < 0 ?
                            false :
                            true;

                        // Continue counting down the width, so a smaller column to the
                        // left won't be shown
                        usedWidth -= columns[i].minWidth;
                    }
                }

                // Determine if the 'control' column should be shown (if there is one).
                // This is the case when there is a hidden column (that is not the
                // control column). The two loops look inefficient here, but they are
                // trivial and will fly through. We need to know the outcome from the
                // first , before the action in the second can be taken
                var showControl = false;

                for ( i=0, ien=columns.length ; i<ien ; i++ ) {
                    if ( ! columns[i].control && ! columns[i].never && ! display[i] ) {
                        showControl = true;
                        break;
                    }
                }

                for ( i=0, ien=columns.length ; i<ien ; i++ ) {
                    if ( columns[i].control ) {
                        display[i] = showControl;
                    }
                }

                // Finally we need to make sure that there is at least one column that
                // is visible
                if ( $.inArray( true, display ) === -1 ) {
                    display[0] = true;
                }

                return display;
            },


            /**
             * Create the internal `columns` array with information about the columns
             * for the table. This includes determining which breakpoints the column
             * will appear in, based upon class names in the column, which makes up the
             * vast majority of this method.
             *
             * @private
             */
            _classLogic: function ()
            {
                var that = this;
                var calc = {};
                var breakpoints = this.c.breakpoints;
                var columns = this.s.dt.columns().eq(0).map( function (i) {
                    var className = this.column(i).header().className;

                    return {
                        className: className,
                        includeIn: [],
                        auto:      false,
                        control:   false,
                        never:     className.match(/\bnever\b/) ? true : false
                    };
                } );

                // Simply add a breakpoint to `includeIn` array, ensuring that there are
                // no duplicates
                var add = function ( colIdx, name ) {
                    var includeIn = columns[ colIdx ].includeIn;

                    if ( $.inArray( name, includeIn ) === -1 ) {
                        includeIn.push( name );
                    }
                };

                var column = function ( colIdx, name, operator, matched ) {
                    var size, i, ien;

                    if ( ! operator ) {
                        columns[ colIdx ].includeIn.push( name );
                    }
                    else if ( operator === 'max-' ) {
                        // Add this breakpoint and all smaller
                        size = that._find( name ).width;

                        for ( i=0, ien=breakpoints.length ; i<ien ; i++ ) {
                            if ( breakpoints[i].width <= size ) {
                                add( colIdx, breakpoints[i].name );
                            }
                        }
                    }
                    else if ( operator === 'min-' ) {
                        // Add this breakpoint and all larger
                        size = that._find( name ).width;

                        for ( i=0, ien=breakpoints.length ; i<ien ; i++ ) {
                            if ( breakpoints[i].width >= size ) {
                                add( colIdx, breakpoints[i].name );
                            }
                        }
                    }
                    else if ( operator === 'not-' ) {
                        // Add all but this breakpoint (xxx need extra information)

                        for ( i=0, ien=breakpoints.length ; i<ien ; i++ ) {
                            if ( breakpoints[i].name.indexOf( matched ) === -1 ) {
                                add( colIdx, breakpoints[i].name );
                            }
                        }
                    }
                };

                // Loop over each column and determine if it has a responsive control
                // class
                columns.each( function ( col, i ) {
                    var classNames = col.className.split(' ');
                    var hasClass = false;

                    // Split the class name up so multiple rules can be applied if needed
                    for ( var k=0, ken=classNames.length ; k<ken ; k++ ) {
                        var className = $.trim( classNames[k] );

                        if ( className === 'all' ) {
                            // Include in all
                            hasClass = true;
                            col.includeIn = $.map( breakpoints, function (a) {
                                return a.name;
                            } );
                            return;
                        }
                        else if ( className === 'none' || className === 'never' ) {
                            // Include in none (default) and no auto
                            hasClass = true;
                            return;
                        }
                        else if ( className === 'control' ) {
                            // Special column that is only visible, when one of the other
                            // columns is hidden. This is used for the details control
                            hasClass = true;
                            col.control = true;
                            return;
                        }

                        $.each( breakpoints, function ( j, breakpoint ) {
                            // Does this column have a class that matches this breakpoint?
                            var brokenPoint = breakpoint.name.split('-');
                            var re = new RegExp( '(min\\-|max\\-|not\\-)?('+brokenPoint[0]+')(\\-[_a-zA-Z0-9])?' );
                            var match = className.match( re );

                            if ( match ) {
                                hasClass = true;

                                if ( match[2] === brokenPoint[0] && match[3] === '-'+brokenPoint[1] ) {
                                    // Class name matches breakpoint name fully
                                    column( i, breakpoint.name, match[1], match[2]+match[3] );
                                }
                                else if ( match[2] === brokenPoint[0] && ! match[3] ) {
                                    // Class name matched primary breakpoint name with no qualifier
                                    column( i, breakpoint.name, match[1], match[2] );
                                }
                            }
                        } );
                    }

                    // If there was no control class, then automatic sizing is used
                    if ( ! hasClass ) {
                        col.auto = true;
                    }
                } );

                this.s.columns = columns;
            },


            /**
             * Initialisation for the details handler
             *
             * @private
             */
            _detailsInit: function ()
            {
                var that    = this;
                var dt      = this.s.dt;
                var details = this.c.details;

                // The inline type always uses the first child as the target
                if ( details.type === 'inline' ) {
                    details.target = 'td:first-child';
                }

                // type.target can be a string jQuery selector or a column index
                var target   = details.target;
                var selector = typeof target === 'string' ? target : 'td';

                // Click handler to show / hide the details rows when they are available
                $( dt.table().body() ).on( 'click', selector, function (e) {
                    // If the table is not collapsed (i.e. there is no hidden columns)
                    // then take no action
                    if ( ! $(dt.table().node()).hasClass('collapsed' ) ) {
                        return;
                    }

                    // Check that the row is actually a DataTable's controlled node
                    if ( ! dt.row( $(this).closest('tr') ).length ) {
                        return;
                    }

                    // For column index, we determine if we should act or not in the
                    // handler - otherwise it is already okay
                    if ( typeof target === 'number' ) {
                        var targetIdx = target < 0 ?
                            dt.columns().eq(0).length + target :
                            target;

                        if ( dt.cell( this ).index().column !== targetIdx ) {
                            return;
                        }
                    }

                    // $().closest() includes itself in its check
                    var row = dt.row( $(this).closest('tr') );

                    if ( row.child.isShown() ) {
                        row.child( false );
                        $( row.node() ).removeClass( 'parent' );
                    }
                    else {
                        var info = that.c.details.renderer( dt, row[0] );
                        row.child( info, 'child' ).show();
                        $( row.node() ).addClass( 'parent' );
                    }
                } );
            },


            /**
             * Update the child rows in the table whenever the column visibility changes
             *
             * @private
             */
            _detailsVis: function ()
            {
                var that = this;
                var dt = this.s.dt;

                // Find how many columns are hidden
                var hiddenColumns = dt.columns().indexes().filter( function ( idx ) {
                    var col = dt.column( idx );

                    if ( col.visible() ) {
                        return null;
                    }

                    // Only counts as hidden if it doesn't have the `never` class
                    return $( col.header() ).hasClass( 'never' ) ? null : idx;
                } );
                var haveHidden = true;

                if ( hiddenColumns.length === 0 || ( hiddenColumns.length === 1 && this.s.columns[ hiddenColumns[0] ].control ) ) {
                    haveHidden = false;
                }

                if ( haveHidden ) {
                    // Got hidden columns
                    $( dt.table().node() ).addClass('collapsed');

                    // Show all existing child rows
                    dt.rows().eq(0).each( function (idx) {
                        var row = dt.row( idx );

                        if ( row.child() ) {
                            var info = that.c.details.renderer( dt, row[0] );

                            // The renderer can return false to have no child row
                            if ( info === false ) {
                                row.child.hide();
                            }
                            else {
                                row.child( info, 'child' ).show();
                            }
                        }
                    } );
                }
                else {
                    // No hidden columns
                    $( dt.table().node() ).removeClass('collapsed');

                    // Hide all existing child rows
                    dt.rows().eq(0).each( function (idx) {
                        dt.row( idx ).child.hide();
                    } );
                }
            },


            /**
             * Find a breakpoint object from a name
             * @param  {string} name Breakpoint name to find
             * @return {object}      Breakpoint description object
             */
            _find: function ( name )
            {
                var breakpoints = this.c.breakpoints;

                for ( var i=0, ien=breakpoints.length ; i<ien ; i++ ) {
                    if ( breakpoints[i].name === name ) {
                        return breakpoints[i];
                    }
                }
            },


            /**
             * Alter the table display for a resized viewport. This involves first
             * determining what breakpoint the window currently is in, getting the
             * column visibilities to apply and then setting them.
             *
             * @private
             */
            _resize: function ()
            {
                var dt = this.s.dt;
                var width = $(window).width();
                var breakpoints = this.c.breakpoints;
                var breakpoint = breakpoints[0].name;

                // Determine what breakpoint we are currently at
                for ( var i=breakpoints.length-1 ; i>=0 ; i-- ) {
                    if ( width <= breakpoints[i].width ) {
                        breakpoint = breakpoints[i].name;
                        break;
                    }
                }

                // Show the columns for that break point
                var columns = this._columnsVisiblity( breakpoint );

                dt.columns().eq(0).each( function ( colIdx, i ) {
                    dt.column( colIdx ).visible( columns[i] );
                } );
            },


            /**
             * Determine the width of each column in the table so the auto column hiding
             * has that information to work with. This method is never going to be 100%
             * perfect since column widths can change slightly per page, but without
             * seriously compromising performance this is quite effective.
             *
             * @private
             */
            _resizeAuto: function ()
            {
                var dt = this.s.dt;
                var columns = this.s.columns;

                // Are we allowed to do auto sizing?
                if ( ! this.c.auto ) {
                    return;
                }

                // Are there any columns that actually need auto-sizing, or do they all
                // have classes defined
                if ( $.inArray( true, $.map( columns, function (c) { return c.auto; } ) ) === -1 ) {
                    return;
                }

                // Clone the table with the current data in it
                var tableWidth   = dt.table().node().offsetWidth;
                var columnWidths = dt.columns;
                var clonedTable  = dt.table().node().cloneNode( false );
                var clonedHeader = $( dt.table().header().cloneNode( false ) ).appendTo( clonedTable );
                var clonedBody   = $( dt.table().body().cloneNode( false ) ).appendTo( clonedTable );

                // This is a bit slow, but we need to get a clone of each row that
                // includes all columns. As such, try to do this as little as possible.
                dt.rows( { page: 'current' } ).indexes().flatten().each( function ( idx ) {
                    var clone = dt.row( idx ).node().cloneNode( true );

                    if ( dt.columns( ':hidden' ).flatten().length ) {
                        $(clone).append( dt.cells( idx, ':hidden' ).nodes().to$().clone() );
                    }

                    $(clone).appendTo( clonedBody );
                } );

                var cells        = dt.columns().header().to$().clone( false ).wrapAll('tr').appendTo( clonedHeader );
                var inserted     = $('<div/>')
                    .css( {
                        width: 1,
                        height: 1,
                        overflow: 'hidden'
                    } )
                    .append( clonedTable )
                    .insertBefore( dt.table().node() );

                // The cloned header now contains the smallest that each column can be
                dt.columns().eq(0).each( function ( idx ) {
                    columns[idx].minWidth = cells[ idx ].offsetWidth || 0;
                } );

                inserted.remove();
            }
        };


        /**
         * List of default breakpoints. Each item in the array is an object with two
         * properties:
         *
         * * `name` - the breakpoint name.
         * * `width` - the breakpoint width
         *
         * @name Responsive.breakpoints
         * @static
         */
        Responsive.breakpoints = [
            { name: 'desktop',  width: Infinity },
            { name: 'tablet-l', width: 1024 },
            { name: 'tablet-p', width: 768 },
            { name: 'mobile-l', width: 480 },
            { name: 'mobile-p', width: 320 }
        ];


        /**
         * Responsive default settings for initialisation
         *
         * @namespace
         * @name Responsive.defaults
         * @static
         */
        Responsive.defaults = {
            /**
             * List of breakpoints for the instance. Note that this means that each
             * instance can have its own breakpoints. Additionally, the breakpoints
             * cannot be changed once an instance has been creased.
             *
             * @type {Array}
             * @default Takes the value of `Responsive.breakpoints`
             */
            breakpoints: Responsive.breakpoints,

            /**
             * Enable / disable auto hiding calculations. It can help to increase
             * performance slightly if you disable this option, but all columns would
             * need to have breakpoint classes assigned to them
             *
             * @type {Boolean}
             * @default  `true`
             */
            auto: true,

            /**
             * Details control. If given as a string value, the `type` property of the
             * default object is set to that value, and the defaults used for the rest
             * of the object - this is for ease of implementation.
             *
             * The object consists of the following properties:
             *
             * * `renderer` - function that is called for display of the child row data.
             *   The default function will show the data from the hidden columns
             * * `target` - Used as the selector for what objects to attach the child
             *   open / close to
             * * `type` - `false` to disable the details display, `inline` or `column`
             *   for the two control types
             *
             * @type {Object|string}
             */
            details: {
                renderer: function ( api, rowIdx ) {
                    var data = api.cells( rowIdx, ':hidden' ).eq(0).map( function ( cell ) {
                        var header = $( api.column( cell.column ).header() );
                        var idx = api.cell( cell ).index();

                        if ( header.hasClass( 'control' ) || header.hasClass( 'never' ) ) {
                            return '';
                        }

                        // Use a non-public DT API method to render the data for display
                        // This needs to be updated when DT adds a suitable method for
                        // this type of data retrieval
                        var dtPrivate = api.settings()[0];
                        var cellData = dtPrivate.oApi._fnGetCellData(
                            dtPrivate, idx.row, idx.column, 'display'
                        );

                        return '<li data-dtr-index="'+idx.column+'">'+
                            '<span class="dtr-title">'+
                            header.text()+':'+
                            '</span> '+
                            '<span class="dtr-data">'+
                            cellData+
                            '</span>'+
                            '</li>';
                    } ).toArray().join('');

                    return data ?
                        $('<ul data-dtr-index="'+rowIdx+'"/>').append( data ) :
                        false;
                },

                target: 0,

                type: 'inline'
            }
        };


        /*
         * API
         */
        var Api = $.fn.dataTable.Api;

// Doesn't do anything - work around for a bug in DT... Not documented
        Api.register( 'responsive()', function () {
            return this;
        } );

        Api.register( 'responsive.recalc()', function () {
            this.iterator( 'table', function ( ctx ) {
                if ( ctx._responsive ) {
                    ctx._responsive._resizeAuto();
                    ctx._responsive._resize();
                }
            } );
        } );

        Api.register( 'responsive.index()', function ( li ) {
            li = $(li);

            return {
                column: li.data('dtr-index'),
                row:    li.parent().data('dtr-index')
            };
        } );


        /**
         * Version information
         *
         * @name Responsive.version
         * @static
         */
        Responsive.version = '1.0.2';


        $.fn.dataTable.Responsive = Responsive;
        $.fn.DataTable.Responsive = Responsive;

// Attach a listener to the document which listens for DataTables initialisation
// events so we can automatically initialise
        $(document).on( 'init.dt.dtr', function (e, settings, json) {
            if ( $(settings.nTable).hasClass( 'responsive' ) ||
                $(settings.nTable).hasClass( 'dt-responsive' ) ||
                settings.oInit.responsive ||
                DataTable.defaults.responsive
                ) {
                var init = settings.oInit.responsive;

                if ( init !== false ) {
                    new Responsive( settings, $.isPlainObject( init ) ? init : {}  );
                }
            }
        } );

        return Responsive;
    }; // /factory


// Define as an AMD module if possible
    if ( typeof define === 'function' && define.amd ) {
        define( ['jquery', 'datatables'], factory );
    }
    else if ( typeof exports === 'object' ) {
        // Node/CommonJS
        factory( require('jquery'), require('datatables') );
    }
    else if ( jQuery && !jQuery.fn.dataTable.Responsive ) {
        // Otherwise simply initialise as normal, stopping multiple evaluation
        factory( jQuery, jQuery.fn.dataTable );
    }


})(window, document);

/*!
 TableTools 2.2.3
 2009-2014 SpryMedia Ltd - datatables.net/license

 ZeroClipboard 1.0.4
 Author: Joseph Huckaby - MIT licensed
*/

var TableTools;
(function(n,k,q){var p=function(m,p){var g={version:"1.0.4-TableTools2",clients:{},moviePath:"",nextId:1,$:function(a){"string"==typeof a&&(a=k.getElementById(a));a.addClass||(a.hide=function(){this.style.display="none"},a.show=function(){this.style.display=""},a.addClass=function(a){this.removeClass(a);this.className+=" "+a},a.removeClass=function(a){this.className=this.className.replace(RegExp("\\s*"+a+"\\s*")," ").replace(/^\s+/,"").replace(/\s+$/,"")},a.hasClass=function(a){return!!this.className.match(RegExp("\\s*"+a+
"\\s*"))});return a},setMoviePath:function(a){this.moviePath=a},dispatch:function(a,b,c){(a=this.clients[a])&&a.receiveEvent(b,c)},register:function(a,b){this.clients[a]=b},getDOMObjectPosition:function(a){var b={left:0,top:0,width:a.width?a.width:a.offsetWidth,height:a.height?a.height:a.offsetHeight};""!==a.style.width&&(b.width=a.style.width.replace("px",""));""!==a.style.height&&(b.height=a.style.height.replace("px",""));for(;a;)b.left+=a.offsetLeft,b.top+=a.offsetTop,a=a.offsetParent;return b},
Client:function(a){this.handlers={};this.id=g.nextId++;this.movieId="ZeroClipboard_TableToolsMovie_"+this.id;g.register(this.id,this);a&&this.glue(a)}};g.Client.prototype={id:0,ready:!1,movie:null,clipText:"",fileName:"",action:"copy",handCursorEnabled:!0,cssEffects:!0,handlers:null,sized:!1,glue:function(a,b){this.domElement=g.$(a);var c=99;this.domElement.style.zIndex&&(c=parseInt(this.domElement.style.zIndex,10)+1);var d=g.getDOMObjectPosition(this.domElement);this.div=k.createElement("div");var f=
this.div.style;f.position="absolute";f.left="0px";f.top="0px";f.width=d.width+"px";f.height=d.height+"px";f.zIndex=c;"undefined"!=typeof b&&""!==b&&(this.div.title=b);0!==d.width&&0!==d.height&&(this.sized=!0);this.domElement&&(this.domElement.appendChild(this.div),this.div.innerHTML=this.getHTML(d.width,d.height).replace(/&/g,"&amp;"))},positionElement:function(){var a=g.getDOMObjectPosition(this.domElement),b=this.div.style;b.position="absolute";b.width=a.width+"px";b.height=a.height+"px";0!==a.width&&
0!==a.height&&(this.sized=!0,b=this.div.childNodes[0],b.width=a.width,b.height=a.height)},getHTML:function(a,b){var c="",d="id="+this.id+"&width="+a+"&height="+b;if(navigator.userAgent.match(/MSIE/))var f=location.href.match(/^https/i)?"https://":"http://",c=c+('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+f+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="'+a+'" height="'+b+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+
g.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+d+'"/><param name="wmode" value="transparent"/></object>');else c+='<embed id="'+this.movieId+'" src="'+g.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+a+'" height="'+b+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+
d+'" wmode="transparent" />';return c},hide:function(){this.div&&(this.div.style.left="-2000px")},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide();this.div.innerHTML="";var a=k.getElementsByTagName("body")[0];try{a.removeChild(this.div)}catch(b){}this.div=this.domElement=null}},reposition:function(a){a&&((this.domElement=g.$(a))||this.hide());if(this.domElement&&this.div){var a=g.getDOMObjectPosition(this.domElement),b=this.div.style;b.left=""+a.left+
"px";b.top=""+a.top+"px"}},clearText:function(){this.clipText="";this.ready&&this.movie.clearText()},appendText:function(a){this.clipText+=a;this.ready&&this.movie.appendText(a)},setText:function(a){this.clipText=a;this.ready&&this.movie.setText(a)},setCharSet:function(a){this.charSet=a;this.ready&&this.movie.setCharSet(a)},setBomInc:function(a){this.incBom=a;this.ready&&this.movie.setBomInc(a)},setFileName:function(a){this.fileName=a;this.ready&&this.movie.setFileName(a)},setAction:function(a){this.action=
a;this.ready&&this.movie.setAction(a)},addEventListener:function(a,b){a=a.toString().toLowerCase().replace(/^on/,"");this.handlers[a]||(this.handlers[a]=[]);this.handlers[a].push(b)},setHandCursor:function(a){this.handCursorEnabled=a;this.ready&&this.movie.setHandCursor(a)},setCSSEffects:function(a){this.cssEffects=!!a},receiveEvent:function(a,b){var c,a=a.toString().toLowerCase().replace(/^on/,"");switch(a){case "load":this.movie=k.getElementById(this.movieId);if(!this.movie){c=this;setTimeout(function(){c.receiveEvent("load",
null)},1);return}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){c=this;setTimeout(function(){c.receiveEvent("load",null)},100);this.ready=!0;return}this.ready=!0;this.movie.clearText();this.movie.appendText(this.clipText);this.movie.setFileName(this.fileName);this.movie.setAction(this.action);this.movie.setCharSet(this.charSet);this.movie.setBomInc(this.incBom);this.movie.setHandCursor(this.handCursorEnabled);break;case "mouseover":this.domElement&&this.cssEffects&&
this.recoverActive&&this.domElement.addClass("active");break;case "mouseout":this.domElement&&this.cssEffects&&(this.recoverActive=!1,this.domElement.hasClass("active")&&(this.domElement.removeClass("active"),this.recoverActive=!0));break;case "mousedown":this.domElement&&this.cssEffects&&this.domElement.addClass("active");break;case "mouseup":this.domElement&&this.cssEffects&&(this.domElement.removeClass("active"),this.recoverActive=!1)}if(this.handlers[a])for(var d=0,f=this.handlers[a].length;d<
f;d++){var e=this.handlers[a][d];if("function"==typeof e)e(this,b);else if("object"==typeof e&&2==e.length)e[0][e[1]](this,b);else if("string"==typeof e)n[e](this,b)}}};n.ZeroClipboard_TableTools=g;var e=jQuery;TableTools=function(a,b){!this instanceof TableTools&&alert("Warning: TableTools must be initialised with the keyword 'new'");this.s={that:this,dt:e.fn.dataTable.Api?(new e.fn.dataTable.Api(a)).settings()[0]:a.fnSettings(),print:{saveStart:-1,saveLength:-1,saveScroll:-1,funcEnd:function(){}},
buttonCounter:0,select:{type:"",selected:[],preRowSelect:null,postSelected:null,postDeselected:null,all:!1,selectedClass:""},custom:{},swfPath:"",buttonSet:[],master:!1,tags:{}};this.dom={container:null,table:null,print:{hidden:[],message:null},collection:{collection:null,background:null}};this.classes=e.extend(!0,{},TableTools.classes);this.s.dt.bJUI&&e.extend(!0,this.classes,TableTools.classes_themeroller);this.fnSettings=function(){return this.s};"undefined"==typeof b&&(b={});TableTools._aInstances.push(this);
this._fnConstruct(b);return this};TableTools.prototype={fnGetSelected:function(a){var b=[],c=this.s.dt.aoData,d=this.s.dt.aiDisplay,f;if(a){a=0;for(f=d.length;a<f;a++)c[d[a]]._DTTT_selected&&b.push(c[d[a]].nTr)}else{a=0;for(f=c.length;a<f;a++)c[a]._DTTT_selected&&b.push(c[a].nTr)}return b},fnGetSelectedData:function(){var a=[],b=this.s.dt.aoData,c,d;c=0;for(d=b.length;c<d;c++)b[c]._DTTT_selected&&a.push(this.s.dt.oInstance.fnGetData(c));return a},fnGetSelectedIndexes:function(a){var b=[],c=this.s.dt.aoData,
d=this.s.dt.aiDisplay,f;if(a){a=0;for(f=d.length;a<f;a++)c[d[a]]._DTTT_selected&&b.push(d[a])}else{a=0;for(f=c.length;a<f;a++)c[a]._DTTT_selected&&b.push(a)}return b},fnIsSelected:function(a){a=this.s.dt.oInstance.fnGetPosition(a);return!0===this.s.dt.aoData[a]._DTTT_selected?!0:!1},fnSelectAll:function(a){this._fnRowSelect(a?this.s.dt.aiDisplay:this.s.dt.aoData)},fnSelectNone:function(a){this._fnRowDeselect(this.fnGetSelectedIndexes(a))},fnSelect:function(a){"single"==this.s.select.type&&this.fnSelectNone();
this._fnRowSelect(a)},fnDeselect:function(a){this._fnRowDeselect(a)},fnGetTitle:function(a){var b="";"undefined"!=typeof a.sTitle&&""!==a.sTitle?b=a.sTitle:(a=k.getElementsByTagName("title"),0<a.length&&(b=a[0].innerHTML));return 4>"¡".toString().length?b.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""):b.replace(/[^a-zA-Z0-9_\.,\-_ !\(\)]/g,"")},fnCalcColRatios:function(a){var b=this.s.dt.aoColumns,a=this._fnColumnTargets(a.mColumns),c=[],d=0,f=0,e,i;e=0;for(i=a.length;e<i;e++)a[e]&&(d=b[e].nTh.offsetWidth,
f+=d,c.push(d));e=0;for(i=c.length;e<i;e++)c[e]/=f;return c.join("\t")},fnGetTableData:function(a){if(this.s.dt)return this._fnGetDataTablesData(a)},fnSetText:function(a,b){this._fnFlashSetText(a,b)},fnResizeButtons:function(){for(var a in g.clients)if(a){var b=g.clients[a];"undefined"!=typeof b.domElement&&b.domElement.parentNode&&b.positionElement()}},fnResizeRequired:function(){for(var a in g.clients)if(a){var b=g.clients[a];if("undefined"!=typeof b.domElement&&b.domElement.parentNode==this.dom.container&&
!1===b.sized)return!0}return!1},fnPrint:function(a,b){b===q&&(b={});a===q||a?this._fnPrintStart(b):this._fnPrintEnd()},fnInfo:function(a,b){var c=e("<div/>").addClass(this.classes.print.info).html(a).appendTo("body");setTimeout(function(){c.fadeOut("normal",function(){c.remove()})},b)},fnContainer:function(){return this.dom.container},_fnConstruct:function(a){var b=this;this._fnCustomiseSettings(a);this.dom.container=k.createElement(this.s.tags.container);this.dom.container.className=this.classes.container;
"none"!=this.s.select.type&&this._fnRowSelectConfig();this._fnButtonDefinations(this.s.buttonSet,this.dom.container);this.s.dt.aoDestroyCallback.push({sName:"TableTools",fn:function(){e(b.s.dt.nTBody).off("click.DTTT_Select","tr");e(b.dom.container).empty();var a=e.inArray(b,TableTools._aInstances);-1!==a&&TableTools._aInstances.splice(a,1)}})},_fnCustomiseSettings:function(a){"undefined"==typeof this.s.dt._TableToolsInit&&(this.s.master=!0,this.s.dt._TableToolsInit=!0);this.dom.table=this.s.dt.nTable;
this.s.custom=e.extend({},TableTools.DEFAULTS,a);this.s.swfPath=this.s.custom.sSwfPath;"undefined"!=typeof g&&(g.moviePath=this.s.swfPath);this.s.select.type=this.s.custom.sRowSelect;this.s.select.preRowSelect=this.s.custom.fnPreRowSelect;this.s.select.postSelected=this.s.custom.fnRowSelected;this.s.select.postDeselected=this.s.custom.fnRowDeselected;this.s.custom.sSelectedClass&&(this.classes.select.row=this.s.custom.sSelectedClass);this.s.tags=this.s.custom.oTags;this.s.buttonSet=this.s.custom.aButtons},
_fnButtonDefinations:function(a,b){for(var c,d=0,f=a.length;d<f;d++){if("string"==typeof a[d]){if("undefined"==typeof TableTools.BUTTONS[a[d]]){alert("TableTools: Warning - unknown button type: "+a[d]);continue}c=e.extend({},TableTools.BUTTONS[a[d]],!0)}else{if("undefined"==typeof TableTools.BUTTONS[a[d].sExtends]){alert("TableTools: Warning - unknown button type: "+a[d].sExtends);continue}c=e.extend({},TableTools.BUTTONS[a[d].sExtends],!0);c=e.extend(c,a[d],!0)}(c=this._fnCreateButton(c,e(b).hasClass(this.classes.collection.container)))&&
b.appendChild(c)}},_fnCreateButton:function(a,b){var c=this._fnButtonBase(a,b);if(a.sAction.match(/flash/)){if(!this._fnHasFlash())return!1;this._fnFlashConfig(c,a)}else"text"==a.sAction?this._fnTextConfig(c,a):"div"==a.sAction?this._fnTextConfig(c,a):"collection"==a.sAction&&(this._fnTextConfig(c,a),this._fnCollectionConfig(c,a));if(-1!==this.s.dt.iTabIndex)e(c).attr("tabindex",this.s.dt.iTabIndex).attr("aria-controls",this.s.dt.sTableId).on("keyup.DTTT",function(a){13===a.keyCode&&(a.stopPropagation(),
e(this).trigger("click"))}).on("mousedown.DTTT",function(b){a.sAction.match(/flash/)||b.preventDefault()});return c},_fnButtonBase:function(a,b){var c,d,f;b?(c=a.sTag&&"default"!==a.sTag?a.sTag:this.s.tags.collection.button,d=a.sLinerTag&&"default"!==a.sLinerTag?a.sLiner:this.s.tags.collection.liner,f=this.classes.collection.buttons.normal):(c=a.sTag&&"default"!==a.sTag?a.sTag:this.s.tags.button,d=a.sLinerTag&&"default"!==a.sLinerTag?a.sLiner:this.s.tags.liner,f=this.classes.buttons.normal);c=k.createElement(c);
d=k.createElement(d);var e=this._fnGetMasterSettings();c.className=f+" "+a.sButtonClass;c.setAttribute("id","ToolTables_"+this.s.dt.sInstance+"_"+e.buttonCounter);c.appendChild(d);d.innerHTML=a.sButtonText;e.buttonCounter++;return c},_fnGetMasterSettings:function(){if(this.s.master)return this.s;for(var a=TableTools._aInstances,b=0,c=a.length;b<c;b++)if(this.dom.table==a[b].s.dt.nTable)return a[b].s},_fnCollectionConfig:function(a,b){var c=k.createElement(this.s.tags.collection.container);c.style.display=
"none";c.className=this.classes.collection.container;b._collection=c;k.body.appendChild(c);this._fnButtonDefinations(b.aButtons,c)},_fnCollectionShow:function(a,b){var c=this,d=e(a).offset(),f=b._collection,j=d.left,d=d.top+e(a).outerHeight(),i=e(n).height(),h=e(k).height(),o=e(n).width(),g=e(k).width();f.style.position="absolute";f.style.left=j+"px";f.style.top=d+"px";f.style.display="block";e(f).css("opacity",0);var l=k.createElement("div");l.style.position="absolute";l.style.left="0px";l.style.top=
"0px";l.style.height=(i>h?i:h)+"px";l.style.width=(o>g?o:g)+"px";l.className=this.classes.collection.background;e(l).css("opacity",0);k.body.appendChild(l);k.body.appendChild(f);i=e(f).outerWidth();o=e(f).outerHeight();j+i>g&&(f.style.left=g-i+"px");d+o>h&&(f.style.top=d-o-e(a).outerHeight()+"px");this.dom.collection.collection=f;this.dom.collection.background=l;setTimeout(function(){e(f).animate({opacity:1},500);e(l).animate({opacity:0.25},500)},10);this.fnResizeButtons();e(l).click(function(){c._fnCollectionHide.call(c,
null,null)})},_fnCollectionHide:function(a,b){!(null!==b&&"collection"==b.sExtends)&&null!==this.dom.collection.collection&&(e(this.dom.collection.collection).animate({opacity:0},500,function(){this.style.display="none"}),e(this.dom.collection.background).animate({opacity:0},500,function(){this.parentNode.removeChild(this)}),this.dom.collection.collection=null,this.dom.collection.background=null)},_fnRowSelectConfig:function(){if(this.s.master){var a=this,b=this.s.dt;e(b.nTable).addClass(this.classes.select.table);
"os"===this.s.select.type&&(e(b.nTBody).on("mousedown.DTTT_Select","tr",function(a){if(a.shiftKey)e(b.nTBody).css("-moz-user-select","none").one("selectstart.DTTT_Select","tr",function(){return!1})}),e(b.nTBody).on("mouseup.DTTT_Select","tr",function(){e(b.nTBody).css("-moz-user-select","")}));e(b.nTBody).on("click.DTTT_Select",this.s.custom.sRowSelector,function(c){var d=this.nodeName.toLowerCase()==="tr"?this:e(this).parents("tr")[0],f=a.s.select,j=a.s.dt.oInstance.fnGetPosition(d);if(d.parentNode==
b.nTBody&&b.oInstance.fnGetData(d)!==null){if(f.type=="os")if(c.ctrlKey||c.metaKey)a.fnIsSelected(d)?a._fnRowDeselect(d,c):a._fnRowSelect(d,c);else if(c.shiftKey){var i=a.s.dt.aiDisplay.slice(),h=e.inArray(f.lastRow,i),o=e.inArray(j,i);if(a.fnGetSelected().length===0||h===-1)i.splice(e.inArray(j,i)+1,i.length);else{if(h>o)var g=o,o=h,h=g;i.splice(o+1,i.length);i.splice(0,h)}if(a.fnIsSelected(d)){i.splice(e.inArray(j,i),1);a._fnRowDeselect(i,c)}else a._fnRowSelect(i,c)}else if(a.fnIsSelected(d)&&a.fnGetSelected().length===
1)a._fnRowDeselect(d,c);else{a.fnSelectNone();a._fnRowSelect(d,c)}else if(a.fnIsSelected(d))a._fnRowDeselect(d,c);else if(f.type=="single"){a.fnSelectNone();a._fnRowSelect(d,c)}else f.type=="multi"&&a._fnRowSelect(d,c);f.lastRow=j}});b.oApi._fnCallbackReg(b,"aoRowCreatedCallback",function(c,d,f){b.aoData[f]._DTTT_selected&&e(c).addClass(a.classes.select.row)},"TableTools-SelectAll")}},_fnRowSelect:function(a,b){var c=this._fnSelectData(a),d=[],f,j;f=0;for(j=c.length;f<j;f++)c[f].nTr&&d.push(c[f].nTr);
if(null===this.s.select.preRowSelect||this.s.select.preRowSelect.call(this,b,d,!0)){f=0;for(j=c.length;f<j;f++)c[f]._DTTT_selected=!0,c[f].nTr&&e(c[f].nTr).addClass(this.classes.select.row);null!==this.s.select.postSelected&&this.s.select.postSelected.call(this,d);TableTools._fnEventDispatch(this,"select",d,!0)}},_fnRowDeselect:function(a,b){var c=this._fnSelectData(a),d=[],f,j;f=0;for(j=c.length;f<j;f++)c[f].nTr&&d.push(c[f].nTr);if(null===this.s.select.preRowSelect||this.s.select.preRowSelect.call(this,
b,d,!1)){f=0;for(j=c.length;f<j;f++)c[f]._DTTT_selected=!1,c[f].nTr&&e(c[f].nTr).removeClass(this.classes.select.row);null!==this.s.select.postDeselected&&this.s.select.postDeselected.call(this,d);TableTools._fnEventDispatch(this,"select",d,!1)}},_fnSelectData:function(a){var b=[],c,d,f;if(a.nodeName)c=this.s.dt.oInstance.fnGetPosition(a),b.push(this.s.dt.aoData[c]);else if("undefined"!==typeof a.length){d=0;for(f=a.length;d<f;d++)a[d].nodeName?(c=this.s.dt.oInstance.fnGetPosition(a[d]),b.push(this.s.dt.aoData[c])):
"number"===typeof a[d]?b.push(this.s.dt.aoData[a[d]]):b.push(a[d])}else b.push(a);return b},_fnTextConfig:function(a,b){var c=this;null!==b.fnInit&&b.fnInit.call(this,a,b);""!==b.sToolTip&&(a.title=b.sToolTip);e(a).hover(function(){b.fnMouseover!==null&&b.fnMouseover.call(this,a,b,null)},function(){b.fnMouseout!==null&&b.fnMouseout.call(this,a,b,null)});null!==b.fnSelect&&TableTools._fnEventListen(this,"select",function(d){b.fnSelect.call(c,a,b,d)});e(a).click(function(d){b.fnClick!==null&&b.fnClick.call(c,
a,b,null,d);b.fnComplete!==null&&b.fnComplete.call(c,a,b,null,null);c._fnCollectionHide(a,b)})},_fnHasFlash:function(){try{if(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return!0}catch(a){if(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]!==q&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)return!0}return!1},_fnFlashConfig:function(a,b){var c=this,d=new g.Client;null!==b.fnInit&&b.fnInit.call(this,a,b);d.setHandCursor(!0);"flash_save"==b.sAction?
(d.setAction("save"),d.setCharSet("utf16le"==b.sCharSet?"UTF16LE":"UTF8"),d.setBomInc(b.bBomInc),d.setFileName(b.sFileName.replace("*",this.fnGetTitle(b)))):"flash_pdf"==b.sAction?(d.setAction("pdf"),d.setFileName(b.sFileName.replace("*",this.fnGetTitle(b)))):d.setAction("copy");d.addEventListener("mouseOver",function(){b.fnMouseover!==null&&b.fnMouseover.call(c,a,b,d)});d.addEventListener("mouseOut",function(){b.fnMouseout!==null&&b.fnMouseout.call(c,a,b,d)});d.addEventListener("mouseDown",function(){b.fnClick!==
null&&b.fnClick.call(c,a,b,d)});d.addEventListener("complete",function(f,e){b.fnComplete!==null&&b.fnComplete.call(c,a,b,d,e);c._fnCollectionHide(a,b)});this._fnFlashGlue(d,a,b.sToolTip)},_fnFlashGlue:function(a,b,c){var d=this,f=b.getAttribute("id");k.getElementById(f)?a.glue(b,c):setTimeout(function(){d._fnFlashGlue(a,b,c)},100)},_fnFlashSetText:function(a,b){var c=this._fnChunkData(b,8192);a.clearText();for(var d=0,f=c.length;d<f;d++)a.appendText(c[d])},_fnColumnTargets:function(a){var b=[],c=
this.s.dt,d,f=c.aoColumns;d=f.length;if("function"==typeof a){a=a.call(this,c);for(c=0;c<d;c++)b.push(-1!==e.inArray(c,a)?!0:!1)}else if("object"==typeof a){for(c=0;c<d;c++)b.push(!1);c=0;for(d=a.length;c<d;c++)b[a[c]]=!0}else if("visible"==a)for(c=0;c<d;c++)b.push(f[c].bVisible?!0:!1);else if("hidden"==a)for(c=0;c<d;c++)b.push(f[c].bVisible?!1:!0);else if("sortable"==a)for(c=0;c<d;c++)b.push(f[c].bSortable?!0:!1);else for(c=0;c<d;c++)b.push(!0);return b},_fnNewline:function(a){return"auto"==a.sNewLine?
navigator.userAgent.match(/Windows/)?"\r\n":"\n":a.sNewLine},_fnGetDataTablesData:function(a){var b,c,d,f,j,i=[],h="",g=this.s.dt,k,l=RegExp(a.sFieldBoundary,"g"),n=this._fnColumnTargets(a.mColumns);d="undefined"!=typeof a.bSelectedOnly?a.bSelectedOnly:!1;if(a.bHeader){j=[];b=0;for(c=g.aoColumns.length;b<c;b++)n[b]&&(h=g.aoColumns[b].sTitle.replace(/\n/g," ").replace(/<.*?>/g,"").replace(/^\s+|\s+$/g,""),h=this._fnHtmlDecode(h),j.push(this._fnBoundData(h,a.sFieldBoundary,l)));i.push(j.join(a.sFieldSeperator))}d=
!0;var m;f=this.fnGetSelectedIndexes();m=(d="none"!==this.s.select.type&&d&&0!==f.length)?f:p.Api?(new p.Api(g)).rows(a.oSelectorOpts).indexes().flatten().toArray():g.oInstance.$("tr",a.oSelectorOpts).map(function(a,b){return g.oInstance.fnGetPosition(b)}).get();d=0;for(f=m.length;d<f;d++){k=g.aoData[m[d]].nTr;j=[];b=0;for(c=g.aoColumns.length;b<c;b++)n[b]&&(h=g.oApi._fnGetCellData(g,m[d],b,"display"),a.fnCellRender?h=a.fnCellRender(h,b,k,m[d])+"":"string"==typeof h?(h=h.replace(/\n/g," "),h=h.replace(/<img.*?\s+alt\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+)).*?>/gi,
"$1$2$3"),h=h.replace(/<.*?>/g,"")):h+="",h=h.replace(/^\s+/,"").replace(/\s+$/,""),h=this._fnHtmlDecode(h),j.push(this._fnBoundData(h,a.sFieldBoundary,l)));i.push(j.join(a.sFieldSeperator));a.bOpenRows&&(b=e.grep(g.aoOpenRows,function(a){return a.nParent===k}),1===b.length&&(h=this._fnBoundData(e("td",b[0].nTr).html(),a.sFieldBoundary,l),i.push(h)))}if(a.bFooter&&null!==g.nTFoot){j=[];b=0;for(c=g.aoColumns.length;b<c;b++)n[b]&&null!==g.aoColumns[b].nTf&&(h=g.aoColumns[b].nTf.innerHTML.replace(/\n/g,
" ").replace(/<.*?>/g,""),h=this._fnHtmlDecode(h),j.push(this._fnBoundData(h,a.sFieldBoundary,l)));i.push(j.join(a.sFieldSeperator))}return i.join(this._fnNewline(a))},_fnBoundData:function(a,b,c){return""===b?a:b+a.replace(c,b+b)+b},_fnChunkData:function(a,b){for(var c=[],d=a.length,f=0;f<d;f+=b)f+b<d?c.push(a.substring(f,f+b)):c.push(a.substring(f,d));return c},_fnHtmlDecode:function(a){if(-1===a.indexOf("&"))return a;var b=k.createElement("div");return a.replace(/&([^\s]*?);/g,function(a,d){if("#"===
a.substr(1,1))return String.fromCharCode(Number(d.substr(1)));b.innerHTML=a;return b.childNodes[0].nodeValue})},_fnPrintStart:function(a){var b=this,c=this.s.dt;this._fnPrintHideNodes(c.nTable);this.s.print.saveStart=c._iDisplayStart;this.s.print.saveLength=c._iDisplayLength;a.bShowAll&&(c._iDisplayStart=0,c._iDisplayLength=-1,c.oApi._fnCalculateEnd&&c.oApi._fnCalculateEnd(c),c.oApi._fnDraw(c));if(""!==c.oScroll.sX||""!==c.oScroll.sY)this._fnPrintScrollStart(c),e(this.s.dt.nTable).bind("draw.DTTT_Print",
function(){b._fnPrintScrollStart(c)});var d=c.aanFeatures,f;for(f in d)if("i"!=f&&"t"!=f&&1==f.length)for(var g=0,i=d[f].length;g<i;g++)this.dom.print.hidden.push({node:d[f][g],display:"block"}),d[f][g].style.display="none";e(k.body).addClass(this.classes.print.body);""!==a.sInfo&&this.fnInfo(a.sInfo,3E3);a.sMessage&&e("<div/>").addClass(this.classes.print.message).html(a.sMessage).prependTo("body");this.s.print.saveScroll=e(n).scrollTop();n.scrollTo(0,0);e(k).bind("keydown.DTTT",function(a){if(a.keyCode==
27){a.preventDefault();b._fnPrintEnd.call(b,a)}})},_fnPrintEnd:function(){var a=this.s.dt,b=this.s.print;this._fnPrintShowNodes();if(""!==a.oScroll.sX||""!==a.oScroll.sY)e(this.s.dt.nTable).unbind("draw.DTTT_Print"),this._fnPrintScrollEnd();n.scrollTo(0,b.saveScroll);e("div."+this.classes.print.message).remove();e(k.body).removeClass("DTTT_Print");a._iDisplayStart=b.saveStart;a._iDisplayLength=b.saveLength;a.oApi._fnCalculateEnd&&a.oApi._fnCalculateEnd(a);a.oApi._fnDraw(a);e(k).unbind("keydown.DTTT")},
_fnPrintScrollStart:function(){var a=this.s.dt;a.nScrollHead.getElementsByTagName("div")[0].getElementsByTagName("table");var b=a.nTable.parentNode,c;c=a.nTable.getElementsByTagName("thead");0<c.length&&a.nTable.removeChild(c[0]);null!==a.nTFoot&&(c=a.nTable.getElementsByTagName("tfoot"),0<c.length&&a.nTable.removeChild(c[0]));c=a.nTHead.cloneNode(!0);a.nTable.insertBefore(c,a.nTable.childNodes[0]);null!==a.nTFoot&&(c=a.nTFoot.cloneNode(!0),a.nTable.insertBefore(c,a.nTable.childNodes[1]));""!==a.oScroll.sX&&
(a.nTable.style.width=e(a.nTable).outerWidth()+"px",b.style.width=e(a.nTable).outerWidth()+"px",b.style.overflow="visible");""!==a.oScroll.sY&&(b.style.height=e(a.nTable).outerHeight()+"px",b.style.overflow="visible")},_fnPrintScrollEnd:function(){var a=this.s.dt,b=a.nTable.parentNode;""!==a.oScroll.sX&&(b.style.width=a.oApi._fnStringToCss(a.oScroll.sX),b.style.overflow="auto");""!==a.oScroll.sY&&(b.style.height=a.oApi._fnStringToCss(a.oScroll.sY),b.style.overflow="auto")},_fnPrintShowNodes:function(){for(var a=
this.dom.print.hidden,b=0,c=a.length;b<c;b++)a[b].node.style.display=a[b].display;a.splice(0,a.length)},_fnPrintHideNodes:function(a){for(var b=this.dom.print.hidden,c=a.parentNode,d=c.childNodes,f=0,g=d.length;f<g;f++)if(d[f]!=a&&1==d[f].nodeType){var i=e(d[f]).css("display");"none"!=i&&(b.push({node:d[f],display:i}),d[f].style.display="none")}"BODY"!=c.nodeName.toUpperCase()&&this._fnPrintHideNodes(c)}};TableTools._aInstances=[];TableTools._aListeners=[];TableTools.fnGetMasters=function(){for(var a=
[],b=0,c=TableTools._aInstances.length;b<c;b++)TableTools._aInstances[b].s.master&&a.push(TableTools._aInstances[b]);return a};TableTools.fnGetInstance=function(a){"object"!=typeof a&&(a=k.getElementById(a));for(var b=0,c=TableTools._aInstances.length;b<c;b++)if(TableTools._aInstances[b].s.master&&TableTools._aInstances[b].dom.table==a)return TableTools._aInstances[b];return null};TableTools._fnEventListen=function(a,b,c){TableTools._aListeners.push({that:a,type:b,fn:c})};TableTools._fnEventDispatch=
function(a,b,c,d){for(var f=TableTools._aListeners,e=0,g=f.length;e<g;e++)a.dom.table==f[e].that.dom.table&&f[e].type==b&&f[e].fn(c,d)};TableTools.buttonBase={sAction:"text",sTag:"default",sLinerTag:"default",sButtonClass:"DTTT_button_text",sButtonText:"Button text",sTitle:"",sToolTip:"",sCharSet:"utf8",bBomInc:!1,sFileName:"*.csv",sFieldBoundary:"",sFieldSeperator:"\t",sNewLine:"auto",mColumns:"all",bHeader:!0,bFooter:!0,bOpenRows:!1,bSelectedOnly:!1,oSelectorOpts:q,fnMouseover:null,fnMouseout:null,
fnClick:null,fnSelect:null,fnComplete:null,fnInit:null,fnCellRender:null};TableTools.BUTTONS={csv:e.extend({},TableTools.buttonBase,{sAction:"flash_save",sButtonClass:"DTTT_button_csv",sButtonText:"CSV",sFieldBoundary:'"',sFieldSeperator:",",fnClick:function(a,b,c){this.fnSetText(c,this.fnGetTableData(b))}}),xls:e.extend({},TableTools.buttonBase,{sAction:"flash_save",sCharSet:"utf16le",bBomInc:!0,sButtonClass:"DTTT_button_xls",sButtonText:"Excel",fnClick:function(a,b,c){this.fnSetText(c,this.fnGetTableData(b))}}),
copy:e.extend({},TableTools.buttonBase,{sAction:"flash_copy",sButtonClass:"DTTT_button_copy",sButtonText:"Copy",fnClick:function(a,b,c){this.fnSetText(c,this.fnGetTableData(b))},fnComplete:function(a,b,c,d){a=d.split("\n").length;b.bHeader&&a--;null!==this.s.dt.nTFoot&&b.bFooter&&a--;this.fnInfo("<h6>Table copied</h6><p>Copied "+a+" row"+(1==a?"":"s")+" to the clipboard.</p>",1500)}}),pdf:e.extend({},TableTools.buttonBase,{sAction:"flash_pdf",sNewLine:"\n",sFileName:"*.pdf",sButtonClass:"DTTT_button_pdf",
sButtonText:"PDF",sPdfOrientation:"portrait",sPdfSize:"A4",sPdfMessage:"",fnClick:function(a,b,c){this.fnSetText(c,"title:"+this.fnGetTitle(b)+"\nmessage:"+b.sPdfMessage+"\ncolWidth:"+this.fnCalcColRatios(b)+"\norientation:"+b.sPdfOrientation+"\nsize:"+b.sPdfSize+"\n--/TableToolsOpts--\n"+this.fnGetTableData(b))}}),print:e.extend({},TableTools.buttonBase,{sInfo:"<h6>Print view</h6><p>Please use your browser's print function to print this table. Press escape when finished.</p>",sMessage:null,bShowAll:!0,
sToolTip:"View print view",sButtonClass:"DTTT_button_print",sButtonText:"Print",fnClick:function(a,b){this.fnPrint(!0,b)}}),text:e.extend({},TableTools.buttonBase),select:e.extend({},TableTools.buttonBase,{sButtonText:"Select button",fnSelect:function(a){0!==this.fnGetSelected().length?e(a).removeClass(this.classes.buttons.disabled):e(a).addClass(this.classes.buttons.disabled)},fnInit:function(a){e(a).addClass(this.classes.buttons.disabled)}}),select_single:e.extend({},TableTools.buttonBase,{sButtonText:"Select button",
fnSelect:function(a){1==this.fnGetSelected().length?e(a).removeClass(this.classes.buttons.disabled):e(a).addClass(this.classes.buttons.disabled)},fnInit:function(a){e(a).addClass(this.classes.buttons.disabled)}}),select_all:e.extend({},TableTools.buttonBase,{sButtonText:"Select all",fnClick:function(){this.fnSelectAll()},fnSelect:function(a){this.fnGetSelected().length==this.s.dt.fnRecordsDisplay()?e(a).addClass(this.classes.buttons.disabled):e(a).removeClass(this.classes.buttons.disabled)}}),select_none:e.extend({},
TableTools.buttonBase,{sButtonText:"Deselect all",fnClick:function(){this.fnSelectNone()},fnSelect:function(a){0!==this.fnGetSelected().length?e(a).removeClass(this.classes.buttons.disabled):e(a).addClass(this.classes.buttons.disabled)},fnInit:function(a){e(a).addClass(this.classes.buttons.disabled)}}),ajax:e.extend({},TableTools.buttonBase,{sAjaxUrl:"/xhr.php",sButtonText:"Ajax button",fnClick:function(a,b){var c=this.fnGetTableData(b);e.ajax({url:b.sAjaxUrl,data:[{name:"tableData",value:c}],success:b.fnAjaxComplete,
dataType:"json",type:"POST",cache:!1,error:function(){alert("Error detected when sending table data to server")}})},fnAjaxComplete:function(){alert("Ajax complete")}}),div:e.extend({},TableTools.buttonBase,{sAction:"div",sTag:"div",sButtonClass:"DTTT_nonbutton",sButtonText:"Text button"}),collection:e.extend({},TableTools.buttonBase,{sAction:"collection",sButtonClass:"DTTT_button_collection",sButtonText:"Collection",fnClick:function(a,b){this._fnCollectionShow(a,b)}})};TableTools.buttons=TableTools.BUTTONS;
TableTools.classes={container:"DTTT_container",buttons:{normal:"DTTT_button",disabled:"DTTT_disabled"},collection:{container:"DTTT_collection",background:"DTTT_collection_background",buttons:{normal:"DTTT_button",disabled:"DTTT_disabled"}},select:{table:"DTTT_selectable",row:"DTTT_selected selected"},print:{body:"DTTT_Print",info:"DTTT_print_info",message:"DTTT_PrintMessage"}};TableTools.classes_themeroller={container:"DTTT_container ui-buttonset ui-buttonset-multi",buttons:{normal:"DTTT_button ui-button ui-state-default"},
collection:{container:"DTTT_collection ui-buttonset ui-buttonset-multi"}};TableTools.DEFAULTS={sSwfPath:"../swf/copy_csv_xls_pdf.swf",sRowSelect:"none",sRowSelector:"tr",sSelectedClass:null,fnPreRowSelect:null,fnRowSelected:null,fnRowDeselected:null,aButtons:["copy","csv","xls","pdf","print"],oTags:{container:"div",button:"a",liner:"span",collection:{container:"div",button:"a",liner:"span"}}};TableTools.defaults=TableTools.DEFAULTS;TableTools.prototype.CLASS="TableTools";TableTools.version="2.2.3";
e.fn.dataTable.Api&&e.fn.dataTable.Api.register("tabletools()",function(){var a=null;0<this.context.length&&(a=TableTools.fnGetInstance(this.context[0].nTable));return a});"function"==typeof e.fn.dataTable&&"function"==typeof e.fn.dataTableExt.fnVersionCheck&&e.fn.dataTableExt.fnVersionCheck("1.9.0")?e.fn.dataTableExt.aoFeatures.push({fnInit:function(a){var b=a.oInit;return(new TableTools(a.oInstance,b?b.tableTools||b.oTableTools||{}:{})).dom.container},cFeature:"T",sFeature:"TableTools"}):alert("Warning: TableTools requires DataTables 1.9.0 or newer - www.datatables.net/download");
e.fn.DataTable.TableTools=TableTools;"function"==typeof m.fn.dataTable&&"function"==typeof m.fn.dataTableExt.fnVersionCheck&&m.fn.dataTableExt.fnVersionCheck("1.9.0")?m.fn.dataTableExt.aoFeatures.push({fnInit:function(a){a=new TableTools(a.oInstance,"undefined"!=typeof a.oInit.oTableTools?a.oInit.oTableTools:{});TableTools._aInstances.push(a);return a.dom.container},cFeature:"T",sFeature:"TableTools"}):alert("Warning: TableTools 2 requires DataTables 1.9.0 or newer - www.datatables.net/download");
m.fn.dataTable.TableTools=TableTools;return m.fn.DataTable.TableTools=TableTools};"function"===typeof define&&define.amd?define(["jquery","datatables"],p):"object"===typeof exports?p(require("jquery"),require("datatables")):jQuery&&!jQuery.fn.dataTable.TableTools&&p(jQuery,jQuery.fn.dataTable)})(window,document);
;(function($){
/**
 * jqGrid Greek (el) Translation
 * Alex Cicovic
 * http://www.alexcicovic.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "View {0} - {1} of {2}",
	    emptyrecords: "No records to view",
		loadtext: "Φόρτωση...",
		pgtext : "Page {0} of {1}"
	},
	search : {
	    caption: "Αναζήτηση...",
	    Find: "Εύρεση",
	    Reset: "Επαναφορά",
	    odata: [{ oper:'eq', text:'equal'},{ oper:'ne', text:'not equal'},{ oper:'lt', text:'less'},{ oper:'le', text:'less or equal'},{ oper:'gt', text:'greater'},{ oper:'ge', text:'greater or equal'},{ oper:'bw', text:'begins with'},{ oper:'bn', text:'does not begin with'},{ oper:'in', text:'is in'},{ oper:'ni', text:'is not in'},{ oper:'ew', text:'ends with'},{ oper:'en', text:'does not end with'},{ oper:'cn', text:'contains'},{ oper:'nc', text:'does not contain'},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
	    groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
	    addCaption: "Εισαγωγή Εγγραφής",
	    editCaption: "Επεξεργασία Εγγραφής",
	    bSubmit: "Καταχώρηση",
	    bCancel: "Άκυρο",
		bClose: "Κλείσιμο",
		saveData: "Data has been changed! Save changes?",
		bYes : "Yes",
		bNo : "No",
		bExit : "Cancel",
	    msg: {
	        required:"Το πεδίο είναι απαραίτητο",
	        number:"Το πεδίο δέχεται μόνο αριθμούς",
	        minValue:"Η τιμή πρέπει να είναι μεγαλύτερη ή ίση του ",
	        maxValue:"Η τιμή πρέπει να είναι μικρότερη ή ίση του ",
	        email: "Η διεύθυνση e-mail δεν είναι έγκυρη",
	        integer: "Το πεδίο δέχεται μόνο ακέραιους αριθμούς",
			url: "is not a valid URL. Prefix required ('http://' or 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
	    caption: "View Record",
	    bClose: "Close"
	},
	del : {
	    caption: "Διαγραφή",
	    msg: "Διαγραφή των επιλεγμένων εγγραφών;",
	    bSubmit: "Ναι",
	    bCancel: "Άκυρο"
	},
	nav : {
		edittext: " ",
	    edittitle: "Επεξεργασία επιλεγμένης εγγραφής",
		addtext:" ",
	    addtitle: "Εισαγωγή νέας εγγραφής",
	    deltext: " ",
	    deltitle: "Διαγραφή επιλεγμένης εγγραφής",
	    searchtext: " ",
	    searchtitle: "Εύρεση Εγγραφών",
	    refreshtext: "",
	    refreshtitle: "Ανανέωση Πίνακα",
	    alertcap: "Προσοχή",
	    alerttext: "Δεν έχετε επιλέξει εγγραφή",
		viewtext: "",
		viewtitle: "View selected row"
	},
	col : {
	    caption: "Εμφάνιση / Απόκρυψη Στηλών",
	    bSubmit: "ΟΚ",
	    bCancel: "Άκυρο"
	},
	errors : {
		errcap : "Σφάλμα",
		nourl : "Δεν έχει δοθεί διεύθυνση χειρισμού για τη συγκεκριμένη ενέργεια",
		norecords: "Δεν υπάρχουν εγγραφές προς επεξεργασία",
		model : "Άνισος αριθμός πεδίων colNames/colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ",
				"Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"
			],
			monthNames: [
				"Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ",
				"Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"
			],
			AmPm : ["πμ","μμ","ΠΜ","ΜΜ"],
			S: function (j) {return j == 1 || j > 1 ? ['η'][Math.min((j - 1) % 10, 3)] : ''},
			srcformat: 'Y-m-d',
			newformat: 'd/m/Y',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
	            ISO8601Long:"Y-m-d H:i:s",
	            ISO8601Short:"Y-m-d",
	            ShortDate: "n/j/Y",
	            LongDate: "l, F d, Y",
	            FullDateTime: "l, F d, Y g:i:s A",
	            MonthDay: "F d",
	            ShortTime: "g:i A",
	            LongTime: "g:i:s A",
	            SortableDateTime: "Y-m-d\\TH:i:s",
	            UniversalSortableDateTime: "Y-m-d H:i:sO",
	            YearMonth: "F, Y"
	        },
	        reformatAfterEdit : false
		},
		baseLinkUrl: '',
		showAction: '',
	    target: '',
	    checkbox : {disabled:true},
		idName : 'id'
	}
});
})(jQuery);
/* 
* jqGrid  4.6.0 - jQuery Grid 
* Copyright (c) 2008, Tony Tomov, tony@trirand.com 
* Dual licensed under the MIT or GPL licenses 
* http://www.opensource.org/licenses/mit-license.php 
* http://www.gnu.org/licenses/gpl-2.0.html 
* Date:2014-02-20 
* Modules: grid.base.js; jquery.fmatter.js; grid.custom.js; grid.common.js; grid.formedit.js; grid.filter.js; grid.inlinedit.js; grid.celledit.js; jqModal.js; jqDnR.js; grid.subgrid.js; grid.grouping.js; grid.treegrid.js; grid.pivot.js; grid.import.js; JsonXml.js; grid.tbltogrid.js; grid.jqueryui.js; 
*/

(function(b){b.jgrid=b.jgrid||{};b.extend(b.jgrid,{version:"4.6.0",htmlDecode:function(b){return b&&("&nbsp;"===b||"&#160;"===b||1===b.length&&160===b.charCodeAt(0))?"":b?String(b).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&"):b},htmlEncode:function(b){return b?String(b).replace(/&/g,"&amp;").replace(/\"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):b},format:function(e){var f=b.makeArray(arguments).slice(1);null==e&&(e="");return e.replace(/\{(\d+)\}/g,
function(b,d){return f[d]})},msie:"Microsoft Internet Explorer"===navigator.appName,msiever:function(){var b=-1;null!=/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)&&(b=parseFloat(RegExp.$1));return b},getCellIndex:function(e){e=b(e);if(e.is("tr"))return-1;e=(e.is("td")||e.is("th")?e:e.closest("td,th"))[0];return b.jgrid.msie?b.inArray(e,e.parentNode.cells):e.cellIndex},stripHtml:function(b){b=String(b);var f=/<("[^"]*"|'[^']*'|[^'">])*>/gi;return b?(b=b.replace(f,""))&&"&nbsp;"!==b&&"&#160;"!==
b?b.replace(/\"/g,"'"):"":b},stripPref:function(e,f){var c=b.type(e);if("string"===c||"number"===c)e=String(e),f=""!==e?String(f).replace(String(e),""):f;return f},parse:function(e){"while(1);"===e.substr(0,9)&&(e=e.substr(9));"/*"===e.substr(0,2)&&(e=e.substr(2,e.length-4));e||(e="{}");return!0===b.jgrid.useJSON&&"object"===typeof JSON&&"function"===typeof JSON.parse?JSON.parse(e):eval("("+e+")")},parseDate:function(e,f,c,d){var a=/^\/Date\((([-+])?[0-9]+)(([-+])([0-9]{2})([0-9]{2}))?\)\/$/,l="string"===
typeof f?f.match(a):null,a=function(a,b){a=String(a);for(b=parseInt(b,10)||2;a.length<b;)a="0"+a;return a},g={m:1,d:1,y:1970,h:0,i:0,s:0,u:0},h=0,k,n,h=function(a,b){0===a?12===b&&(b=0):12!==b&&(b+=12);return b};void 0===d&&(d=b.jgrid.formatter.date);void 0===d.parseRe&&(d.parseRe=/[#%\\\/:_;.,\t\s-]/);d.masks.hasOwnProperty(e)&&(e=d.masks[e]);if(f&&null!=f)if(isNaN(f-0)||"u"!==String(e).toLowerCase())if(f.constructor===Date)h=f;else if(null!==l){if(h=new Date(parseInt(l[1],10)),l[3]){var m=60*Number(l[5])+
Number(l[6]),m=m*("-"===l[4]?1:-1),m=m-h.getTimezoneOffset();h.setTime(Number(Number(h)+6E4*m))}}else{m=0;"ISO8601Long"===d.srcformat&&"Z"===f.charAt(f.length-1)&&(m-=(new Date).getTimezoneOffset());f=String(f).replace(/\T/g,"#").replace(/\t/,"%").split(d.parseRe);e=e.replace(/\T/g,"#").replace(/\t/,"%").split(d.parseRe);k=0;for(n=e.length;k<n;k++)"M"===e[k]&&(l=b.inArray(f[k],d.monthNames),-1!==l&&12>l&&(f[k]=l+1,g.m=f[k])),"F"===e[k]&&(l=b.inArray(f[k],d.monthNames,12),-1!==l&&11<l&&(f[k]=l+1-12,
g.m=f[k])),"a"===e[k]&&(l=b.inArray(f[k],d.AmPm),-1!==l&&2>l&&f[k]===d.AmPm[l]&&(f[k]=l,g.h=h(f[k],g.h))),"A"===e[k]&&(l=b.inArray(f[k],d.AmPm),-1!==l&&1<l&&f[k]===d.AmPm[l]&&(f[k]=l-2,g.h=h(f[k],g.h))),"g"===e[k]&&(g.h=parseInt(f[k],10)),void 0!==f[k]&&(g[e[k].toLowerCase()]=parseInt(f[k],10));g.f&&(g.m=g.f);if(0===g.m&&0===g.y&&0===g.d)return"&#160;";g.m=parseInt(g.m,10)-1;h=g.y;70<=h&&99>=h?g.y=1900+g.y:0<=h&&69>=h&&(g.y=2E3+g.y);h=new Date(g.y,g.m,g.d,g.h,g.i,g.s,g.u);0<m&&h.setTime(Number(Number(h)+
6E4*m))}else h=new Date(1E3*parseFloat(f));else h=new Date(g.y,g.m,g.d,g.h,g.i,g.s,g.u);if(void 0===c)return h;d.masks.hasOwnProperty(c)?c=d.masks[c]:c||(c="Y-m-d");e=h.getHours();f=h.getMinutes();g=h.getDate();m=h.getMonth()+1;l=h.getTimezoneOffset();k=h.getSeconds();n=h.getMilliseconds();var r=h.getDay(),p=h.getFullYear(),q=(r+6)%7+1,x=(new Date(p,m-1,g)-new Date(p,0,1))/864E5,G={d:a(g),D:d.dayNames[r],j:g,l:d.dayNames[r+7],N:q,S:d.S(g),w:r,z:x,W:5>q?Math.floor((x+q-1)/7)+1:Math.floor((x+q-1)/7)||
(4>((new Date(p-1,0,1)).getDay()+6)%7?53:52),F:d.monthNames[m-1+12],m:a(m),M:d.monthNames[m-1],n:m,t:"?",L:"?",o:"?",Y:p,y:String(p).substring(2),a:12>e?d.AmPm[0]:d.AmPm[1],A:12>e?d.AmPm[2]:d.AmPm[3],B:"?",g:e%12||12,G:e,h:a(e%12||12),H:a(e),i:a(f),s:a(k),u:n,e:"?",I:"?",O:(0<l?"-":"+")+a(100*Math.floor(Math.abs(l)/60)+Math.abs(l)%60,4),P:"?",T:(String(h).match(/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g)||
[""]).pop().replace(/[^-+\dA-Z]/g,""),Z:"?",c:"?",r:"?",U:Math.floor(h/1E3)};return c.replace(/\\.|[dDjlNSwzWFmMntLoYyaABgGhHisueIOPTZcrU]/g,function(a){return G.hasOwnProperty(a)?G[a]:a.substring(1)})},jqID:function(b){return String(b).replace(/[!"#$%&'()*+,.\/:; <=>?@\[\\\]\^`{|}~]/g,"\\$&")},guid:1,uidPref:"jqg",randId:function(e){return(e||b.jgrid.uidPref)+b.jgrid.guid++},getAccessor:function(b,f){var c,d,a=[],l;if("function"===typeof f)return f(b);c=b[f];if(void 0===c)try{if("string"===typeof f&&
(a=f.split(".")),l=a.length)for(c=b;c&&l--;)d=a.shift(),c=c[d]}catch(g){}return c},getXmlData:function(e,f,c){var d="string"===typeof f?f.match(/^(.*)\[(\w+)\]$/):null;if("function"===typeof f)return f(e);if(d&&d[2])return d[1]?b(d[1],e).attr(d[2]):b(e).attr(d[2]);e=b(f,e);return c?e:0<e.length?b(e).text():void 0},cellWidth:function(){var e=b("<div class='ui-jqgrid' style='left:10000px'><table class='ui-jqgrid-btable' style='width:5px;'><tr class='jqgrow'><td style='width:5px;display:block;'></td></tr></table></div>"),
f=e.appendTo("body").find("td").width();e.remove();return 0.1<Math.abs(f-5)},cell_width:!0,ajaxOptions:{},from:function(e){return new function(e,c){"string"===typeof e&&(e=b.data(e));var d=this,a=e,l=!0,g=!1,h=c,k=/[\$,%]/g,n=null,m=null,r=0,p=!1,q="",x=[],G=!0;if("object"===typeof e&&e.push)0<e.length&&(G="object"!==typeof e[0]?!1:!0);else throw"data provides is not an array";this._hasData=function(){return null===a?!1:0===a.length?!1:!0};this._getStr=function(a){var b=[];g&&b.push("jQuery.trim(");
b.push("String("+a+")");g&&b.push(")");l||b.push(".toLowerCase()");return b.join("")};this._strComp=function(a){return"string"===typeof a?".toString()":""};this._group=function(a,b){return{field:a.toString(),unique:b,items:[]}};this._toStr=function(a){g&&(a=b.trim(a));a=a.toString().replace(/\\/g,"\\\\").replace(/\"/g,'\\"');return l?a:a.toLowerCase()};this._funcLoop=function(d){var l=[];b.each(a,function(a,b){l.push(d(b))});return l};this._append=function(a){var b;h=null===h?"":h+(""===q?" && ":
q);for(b=0;b<r;b++)h+="(";p&&(h+="!");h+="("+a+")";p=!1;q="";r=0};this._setCommand=function(a,b){n=a;m=b};this._resetNegate=function(){p=!1};this._repeatCommand=function(a,b){return null===n?d:null!==a&&null!==b?n(a,b):null!==m&&G?n(m,a):n(a)};this._equals=function(a,b){return 0===d._compare(a,b,1)};this._compare=function(a,b,d){var e=Object.prototype.toString;void 0===d&&(d=1);void 0===a&&(a=null);void 0===b&&(b=null);if(null===a&&null===b)return 0;if(null===a&&null!==b)return 1;if(null!==a&&null===
b)return-1;if("[object Date]"===e.call(a)&&"[object Date]"===e.call(b))return a<b?-d:a>b?d:0;l||"number"===typeof a||"number"===typeof b||(a=String(a),b=String(b));return a<b?-d:a>b?d:0};this._performSort=function(){0!==x.length&&(a=d._doSort(a,0))};this._doSort=function(a,b){var l=x[b].by,e=x[b].dir,g=x[b].type,c=x[b].datefmt,f=x[b].sfunc;if(b===x.length-1)return d._getOrder(a,l,e,g,c,f);b++;l=d._getGroup(a,l,e,g,c);e=[];for(g=0;g<l.length;g++)for(f=d._doSort(l[g].items,b),c=0;c<f.length;c++)e.push(f[c]);
return e};this._getOrder=function(a,e,g,c,f,h){var m=[],n=[],r="a"===g?1:-1,p,x;void 0===c&&(c="text");x="float"===c||"number"===c||"currency"===c||"numeric"===c?function(a){a=parseFloat(String(a).replace(k,""));return isNaN(a)?0:a}:"int"===c||"integer"===c?function(a){return a?parseFloat(String(a).replace(k,"")):0}:"date"===c||"datetime"===c?function(a){return b.jgrid.parseDate(f,a).getTime()}:b.isFunction(c)?c:function(a){a=a?b.trim(String(a)):"";return l?a:a.toLowerCase()};b.each(a,function(a,
d){p=""!==e?b.jgrid.getAccessor(d,e):d;void 0===p&&(p="");p=x(p,d);n.push({vSort:p,index:a})});b.isFunction(h)?n.sort(function(a,b){a=a.vSort;b=b.vSort;return h.call(this,a,b,r)}):n.sort(function(a,b){a=a.vSort;b=b.vSort;return d._compare(a,b,r)});c=0;for(var q=a.length;c<q;)g=n[c].index,m.push(a[g]),c++;return m};this._getGroup=function(a,c,e,l,g){var f=[],h=null,k=null,m;b.each(d._getOrder(a,c,e,l,g),function(a,e){m=b.jgrid.getAccessor(e,c);null==m&&(m="");d._equals(k,m)||(k=m,null!==h&&f.push(h),
h=d._group(c,m));h.items.push(e)});null!==h&&f.push(h);return f};this.ignoreCase=function(){l=!1;return d};this.useCase=function(){l=!0;return d};this.trim=function(){g=!0;return d};this.noTrim=function(){g=!1;return d};this.execute=function(){var c=h,e=[];if(null===c)return d;b.each(a,function(){eval(c)&&e.push(this)});a=e;return d};this.data=function(){return a};this.select=function(c){d._performSort();if(!d._hasData())return[];d.execute();if(b.isFunction(c)){var e=[];b.each(a,function(a,b){e.push(c(b))});
return e}return a};this.hasMatch=function(){if(!d._hasData())return!1;d.execute();return 0<a.length};this.andNot=function(a,b,c){p=!p;return d.and(a,b,c)};this.orNot=function(a,b,c){p=!p;return d.or(a,b,c)};this.not=function(a,b,c){return d.andNot(a,b,c)};this.and=function(a,b,c){q=" && ";return void 0===a?d:d._repeatCommand(a,b,c)};this.or=function(a,b,c){q=" || ";return void 0===a?d:d._repeatCommand(a,b,c)};this.orBegin=function(){r++;return d};this.orEnd=function(){null!==h&&(h+=")");return d};
this.isNot=function(a){p=!p;return d.is(a)};this.is=function(a){d._append("this."+a);d._resetNegate();return d};this._compareValues=function(a,c,e,l,g){var f;f=G?"jQuery.jgrid.getAccessor(this,'"+c+"')":"this";void 0===e&&(e=null);var h=e,m=void 0===g.stype?"text":g.stype;if(null!==e)switch(m){case "int":case "integer":h=isNaN(Number(h))||""===h?"0":h;f="parseInt("+f+",10)";h="parseInt("+h+",10)";break;case "float":case "number":case "numeric":h=String(h).replace(k,"");h=isNaN(Number(h))||""===h?
"0":h;f="parseFloat("+f+")";h="parseFloat("+h+")";break;case "date":case "datetime":h=String(b.jgrid.parseDate(g.newfmt||"Y-m-d",h).getTime());f='jQuery.jgrid.parseDate("'+g.srcfmt+'",'+f+").getTime()";break;default:f=d._getStr(f),h=d._getStr('"'+d._toStr(h)+'"')}d._append(f+" "+l+" "+h);d._setCommand(a,c);d._resetNegate();return d};this.equals=function(a,b,c){return d._compareValues(d.equals,a,b,"==",c)};this.notEquals=function(a,b,c){return d._compareValues(d.equals,a,b,"!==",c)};this.isNull=function(a,
b,c){return d._compareValues(d.equals,a,null,"===",c)};this.greater=function(a,b,c){return d._compareValues(d.greater,a,b,">",c)};this.less=function(a,b,c){return d._compareValues(d.less,a,b,"<",c)};this.greaterOrEquals=function(a,b,c){return d._compareValues(d.greaterOrEquals,a,b,">=",c)};this.lessOrEquals=function(a,b,c){return d._compareValues(d.lessOrEquals,a,b,"<=",c)};this.startsWith=function(a,c){var e=null==c?a:c,e=g?b.trim(e.toString()).length:e.toString().length;G?d._append(d._getStr("jQuery.jgrid.getAccessor(this,'"+
a+"')")+".substr(0,"+e+") == "+d._getStr('"'+d._toStr(c)+'"')):(null!=c&&(e=g?b.trim(c.toString()).length:c.toString().length),d._append(d._getStr("this")+".substr(0,"+e+") == "+d._getStr('"'+d._toStr(a)+'"')));d._setCommand(d.startsWith,a);d._resetNegate();return d};this.endsWith=function(a,c){var e=null==c?a:c,e=g?b.trim(e.toString()).length:e.toString().length;G?d._append(d._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".substr("+d._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".length-"+
e+","+e+') == "'+d._toStr(c)+'"'):d._append(d._getStr("this")+".substr("+d._getStr("this")+'.length-"'+d._toStr(a)+'".length,"'+d._toStr(a)+'".length) == "'+d._toStr(a)+'"');d._setCommand(d.endsWith,a);d._resetNegate();return d};this.contains=function(a,b){G?d._append(d._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+'.indexOf("'+d._toStr(b)+'",0) > -1'):d._append(d._getStr("this")+'.indexOf("'+d._toStr(a)+'",0) > -1');d._setCommand(d.contains,a);d._resetNegate();return d};this.groupBy=function(b,
c,e,l){return d._hasData()?d._getGroup(a,b,c,e,l):null};this.orderBy=function(a,c,e,l,g){c=null==c?"a":b.trim(c.toString().toLowerCase());null==e&&(e="text");null==l&&(l="Y-m-d");null==g&&(g=!1);if("desc"===c||"descending"===c)c="d";if("asc"===c||"ascending"===c)c="a";x.push({by:a,dir:c,type:e,datefmt:l,sfunc:g});return d};return d}(e,null)},getMethod:function(e){return this.getAccessor(b.fn.jqGrid,e)},extend:function(e){b.extend(b.fn.jqGrid,e);this.no_legacy_api||b.fn.extend(e)}});b.fn.jqGrid=function(e){if("string"===
typeof e){var f=b.jgrid.getMethod(e);if(!f)throw"jqGrid - No such method: "+e;var c=b.makeArray(arguments).slice(1);return f.apply(this,c)}return this.each(function(){if(!this.grid){var d=b.extend(!0,{url:"",height:150,page:1,rowNum:20,rowTotal:null,records:0,pager:"",pgbuttons:!0,pginput:!0,colModel:[],rowList:[],colNames:[],sortorder:"asc",sortname:"",datatype:"xml",mtype:"GET",altRows:!1,selarrrow:[],savedRow:[],shrinkToFit:!0,xmlReader:{},jsonReader:{},subGrid:!1,subGridModel:[],reccount:0,lastpage:0,
lastsort:0,selrow:null,beforeSelectRow:null,onSelectRow:null,onSortCol:null,ondblClickRow:null,onRightClickRow:null,onPaging:null,onSelectAll:null,onInitGrid:null,loadComplete:null,gridComplete:null,loadError:null,loadBeforeSend:null,afterInsertRow:null,beforeRequest:null,beforeProcessing:null,onHeaderClick:null,viewrecords:!1,loadonce:!1,multiselect:!1,multikey:!1,editurl:null,search:!1,caption:"",hidegrid:!0,hiddengrid:!1,postData:{},userData:{},treeGrid:!1,treeGridModel:"nested",treeReader:{},
treeANode:-1,ExpandColumn:null,tree_root_level:0,prmNames:{page:"page",rows:"rows",sort:"sidx",order:"sord",search:"_search",nd:"nd",id:"id",oper:"oper",editoper:"edit",addoper:"add",deloper:"del",subgridid:"id",npage:null,totalrows:"totalrows"},forceFit:!1,gridstate:"visible",cellEdit:!1,cellsubmit:"remote",nv:0,loadui:"enable",toolbar:[!1,""],scroll:!1,multiboxonly:!1,deselectAfterSort:!0,scrollrows:!1,autowidth:!1,scrollOffset:18,cellLayout:5,subGridWidth:20,multiselectWidth:20,gridview:!1,rownumWidth:25,
rownumbers:!1,pagerpos:"center",recordpos:"right",footerrow:!1,userDataOnFooter:!1,hoverrows:!0,altclass:"ui-priority-secondary",viewsortcols:[!1,"vertical",!0],resizeclass:"",autoencode:!1,remapColumns:[],ajaxGridOptions:{},direction:"ltr",toppager:!1,headertitles:!1,scrollTimeout:40,data:[],_index:{},grouping:!1,groupingView:{groupField:[],groupOrder:[],groupText:[],groupColumnShow:[],groupSummary:[],showSummaryOnHide:!1,sortitems:[],sortnames:[],summary:[],summaryval:[],plusicon:"ui-icon-circlesmall-plus",
minusicon:"ui-icon-circlesmall-minus",displayField:[],groupSummaryPos:[],formatDisplayField:[],_locgr:!1},ignoreCase:!1,cmTemplate:{},idPrefix:"",multiSort:!1},b.jgrid.defaults,e||{}),a=this,c={headers:[],cols:[],footers:[],dragStart:function(c,e,g){var f=b(this.bDiv).offset().left;this.resizing={idx:c,startX:e.clientX,sOL:e.clientX-f};this.hDiv.style.cursor="col-resize";this.curGbox=b("#rs_m"+b.jgrid.jqID(d.id),"#gbox_"+b.jgrid.jqID(d.id));this.curGbox.css({display:"block",left:e.clientX-f,top:g[1],
height:g[2]});b(a).triggerHandler("jqGridResizeStart",[e,c]);b.isFunction(d.resizeStart)&&d.resizeStart.call(a,e,c);document.onselectstart=function(){return!1}},dragMove:function(a){if(this.resizing){var b=a.clientX-this.resizing.startX;a=this.headers[this.resizing.idx];var c="ltr"===d.direction?a.width+b:a.width-b,e;33<c&&(this.curGbox.css({left:this.resizing.sOL+b}),!0===d.forceFit?(e=this.headers[this.resizing.idx+d.nv],b="ltr"===d.direction?e.width-b:e.width+b,33<b&&(a.newWidth=c,e.newWidth=b)):
(this.newWidth="ltr"===d.direction?d.tblwidth+b:d.tblwidth-b,a.newWidth=c))}},dragEnd:function(){this.hDiv.style.cursor="default";if(this.resizing){var c=this.resizing.idx,e=this.headers[c].newWidth||this.headers[c].width,e=parseInt(e,10);this.resizing=!1;b("#rs_m"+b.jgrid.jqID(d.id)).css("display","none");d.colModel[c].width=e;this.headers[c].width=e;this.headers[c].el.style.width=e+"px";this.cols[c].style.width=e+"px";0<this.footers.length&&(this.footers[c].style.width=e+"px");!0===d.forceFit?(e=
this.headers[c+d.nv].newWidth||this.headers[c+d.nv].width,this.headers[c+d.nv].width=e,this.headers[c+d.nv].el.style.width=e+"px",this.cols[c+d.nv].style.width=e+"px",0<this.footers.length&&(this.footers[c+d.nv].style.width=e+"px"),d.colModel[c+d.nv].width=e):(d.tblwidth=this.newWidth||d.tblwidth,b("table:first",this.bDiv).css("width",d.tblwidth+"px"),b("table:first",this.hDiv).css("width",d.tblwidth+"px"),this.hDiv.scrollLeft=this.bDiv.scrollLeft,d.footerrow&&(b("table:first",this.sDiv).css("width",
d.tblwidth+"px"),this.sDiv.scrollLeft=this.bDiv.scrollLeft));b(a).triggerHandler("jqGridResizeStop",[e,c]);b.isFunction(d.resizeStop)&&d.resizeStop.call(a,e,c)}this.curGbox=null;document.onselectstart=function(){return!0}},populateVisible:function(){c.timer&&clearTimeout(c.timer);c.timer=null;var a=b(c.bDiv).height();if(a){var e=b("table:first",c.bDiv),g,f;if(e[0].rows.length)try{f=(g=e[0].rows[1])?b(g).outerHeight()||c.prevRowHeight:c.prevRowHeight}catch(pa){f=c.prevRowHeight}if(f){c.prevRowHeight=
f;var h=d.rowNum;g=c.scrollTop=c.bDiv.scrollTop;var k=Math.round(e.position().top)-g,m=k+e.height();f*=h;var E,n,C;m<a&&0>=k&&(void 0===d.lastpage||parseInt((m+g+f-1)/f,10)<=d.lastpage)&&(n=parseInt((a-m+f-1)/f,10),0<=m||2>n||!0===d.scroll?(E=Math.round((m+g)/f)+1,k=-1):k=1);0<k&&(E=parseInt(g/f,10)+1,n=parseInt((g+a)/f,10)+2-E,C=!0);!n||d.lastpage&&(E>d.lastpage||1===d.lastpage||E===d.page&&E===d.lastpage)||(c.hDiv.loading?c.timer=setTimeout(c.populateVisible,d.scrollTimeout):(d.page=E,C&&(c.selectionPreserver(e[0]),
c.emptyRows.call(e[0],!1,!1)),c.populate(n)))}}},scrollGrid:function(a){if(d.scroll){var b=c.bDiv.scrollTop;void 0===c.scrollTop&&(c.scrollTop=0);b!==c.scrollTop&&(c.scrollTop=b,c.timer&&clearTimeout(c.timer),c.timer=setTimeout(c.populateVisible,d.scrollTimeout))}c.hDiv.scrollLeft=c.bDiv.scrollLeft;d.footerrow&&(c.sDiv.scrollLeft=c.bDiv.scrollLeft);a&&a.stopPropagation()},selectionPreserver:function(a){var c=a.p,d=c.selrow,e=c.selarrrow?b.makeArray(c.selarrrow):null,f=a.grid.bDiv.scrollLeft,g=function(){var h;
c.selrow=null;c.selarrrow=[];if(c.multiselect&&e&&0<e.length)for(h=0;h<e.length;h++)e[h]!==d&&b(a).jqGrid("setSelection",e[h],!1,null);d&&b(a).jqGrid("setSelection",d,!1,null);a.grid.bDiv.scrollLeft=f;b(a).unbind(".selectionPreserver",g)};b(a).bind("jqGridGridComplete.selectionPreserver",g)}};if("TABLE"!==this.tagName.toUpperCase())alert("Element is not a table");else if(void 0!==document.documentMode&&5>=document.documentMode)alert("Grid can not be used in this ('quirks') mode!");else{b(this).empty().attr("tabindex",
"0");this.p=d;this.p.useProp=!!b.fn.prop;var g,f;if(0===this.p.colNames.length)for(g=0;g<this.p.colModel.length;g++)this.p.colNames[g]=this.p.colModel[g].label||this.p.colModel[g].name;if(this.p.colNames.length!==this.p.colModel.length)alert(b.jgrid.errors.model);else{var k=b("<div class='ui-jqgrid-view'></div>"),n=b.jgrid.msie;a.p.direction=b.trim(a.p.direction.toLowerCase());-1===b.inArray(a.p.direction,["ltr","rtl"])&&(a.p.direction="ltr");f=a.p.direction;b(k).insertBefore(this);b(this).removeClass("scroll").appendTo(k);
var m=b("<div class='ui-jqgrid ui-widget ui-widget-content ui-corner-all'></div>");b(m).attr({id:"gbox_"+this.id,dir:f}).insertBefore(k);b(k).attr("id","gview_"+this.id).appendTo(m);b("<div class='ui-widget-overlay jqgrid-overlay' id='lui_"+this.id+"'></div>").insertBefore(k);b("<div class='loading ui-state-default ui-state-active' id='load_"+this.id+"'>"+this.p.loadtext+"</div>").insertBefore(k);b(this).attr({cellspacing:"0",cellpadding:"0",border:"0",role:"grid","aria-multiselectable":!!this.p.multiselect,
"aria-labelledby":"gbox_"+this.id});var r=function(a,b){a=parseInt(a,10);return isNaN(a)?b||0:a},p=function(d,e,f,g,pa,h){var k=a.p.colModel[d],m=k.align,E='style="',n=k.classes,C=k.name,A=[];m&&(E+="text-align:"+m+";");!0===k.hidden&&(E+="display:none;");if(0===e)E+="width: "+c.headers[d].width+"px;";else if(k.cellattr&&b.isFunction(k.cellattr)&&(d=k.cellattr.call(a,pa,f,g,k,h))&&"string"===typeof d)if(d=d.replace(/style/i,"style").replace(/title/i,"title"),-1<d.indexOf("title")&&(k.title=!1),-1<
d.indexOf("class")&&(n=void 0),A=d.replace("-style","-sti").split(/style/),2===A.length){A[1]=b.trim(A[1].replace("-sti","-style").replace("=",""));if(0===A[1].indexOf("'")||0===A[1].indexOf('"'))A[1]=A[1].substring(1);E+=A[1].replace(/'/gi,'"')}else E+='"';A.length||(A[0]="",E+='"');E+=(void 0!==n?' class="'+n+'"':"")+(k.title&&f?' title="'+b.jgrid.stripHtml(f)+'"':"");E+=' aria-describedby="'+a.p.id+"_"+C+'"';return E+A[0]},q=function(c){return null==c||""===c?"&#160;":a.p.autoencode?b.jgrid.htmlEncode(c):
String(c)},x=function(c,d,e,f,g){var h=a.p.colModel[e];void 0!==h.formatter?(c=""!==String(a.p.idPrefix)?b.jgrid.stripPref(a.p.idPrefix,c):c,c={rowId:c,colModel:h,gid:a.p.id,pos:e},d=b.isFunction(h.formatter)?h.formatter.call(a,d,c,f,g):b.fmatter?b.fn.fmatter.call(a,h.formatter,d,c,f,g):q(d)):d=q(d);return d},G=function(a,b,c,d,e,f){b=x(a,b,c,e,"add");return'<td role="gridcell" '+p(c,d,b,e,a,f)+">"+b+"</td>"},U=function(b,c,d,e){e='<input role="checkbox" type="checkbox" id="jqg_'+a.p.id+"_"+b+'" class="cbox" name="jqg_'+
a.p.id+"_"+b+'"'+(e?'checked="checked"':"")+"/>";return'<td role="gridcell" '+p(c,d,"",null,b,!0)+">"+e+"</td>"},M=function(a,b,c,d){c=(parseInt(c,10)-1)*parseInt(d,10)+1+b;return'<td role="gridcell" class="ui-state-default jqgrid-rownum" '+p(a,b,c,null,b,!0)+">"+c+"</td>"},ea=function(b){var c,d=[],e=0,f;for(f=0;f<a.p.colModel.length;f++)c=a.p.colModel[f],"cb"!==c.name&&"subgrid"!==c.name&&"rn"!==c.name&&(d[e]="local"===b?c.name:"xml"===b||"xmlstring"===b?c.xmlmap||c.name:c.jsonmap||c.name,!1!==
a.p.keyIndex&&!0===c.key&&(a.p.keyName=d[e]),e++);return d},W=function(c){var d=a.p.remapColumns;d&&d.length||(d=b.map(a.p.colModel,function(a,b){return b}));c&&(d=b.map(d,function(a){return a<c?null:a-c}));return d},X=function(a,c){var d;this.p.deepempty?b(this.rows).slice(1).remove():(d=0<this.rows.length?this.rows[0]:null,b(this.firstChild).empty().append(d));a&&this.p.scroll&&(b(this.grid.bDiv.firstChild).css({height:"auto"}),b(this.grid.bDiv.firstChild.firstChild).css({height:0,display:"none"}),
0!==this.grid.bDiv.scrollTop&&(this.grid.bDiv.scrollTop=0));!0===c&&this.p.treeGrid&&(this.p.data=[],this.p._index={})},O=function(){var c=a.p.data.length,d,e,f;d=!0===a.p.rownumbers?1:0;e=!0===a.p.multiselect?1:0;f=!0===a.p.subGrid?1:0;d=!1===a.p.keyIndex||!0===a.p.loadonce?a.p.localReader.id:a.p.colModel[a.p.keyIndex+e+f+d].name;for(e=0;e<c;e++)f=b.jgrid.getAccessor(a.p.data[e],d),void 0===f&&(f=String(e+1)),a.p._index[f]=e},$=function(c,d,e,f,g,h){var l="-1",k="",m;d=d?"display:none;":"";e="ui-widget-content jqgrow ui-row-"+
a.p.direction+(e?" "+e:"")+(h?" ui-state-highlight":"");h=b(a).triggerHandler("jqGridRowAttr",[f,g,c]);"object"!==typeof h&&(h=b.isFunction(a.p.rowattr)?a.p.rowattr.call(a,f,g,c):{});if(!b.isEmptyObject(h)){h.hasOwnProperty("id")&&(c=h.id,delete h.id);h.hasOwnProperty("tabindex")&&(l=h.tabindex,delete h.tabindex);h.hasOwnProperty("style")&&(d+=h.style,delete h.style);h.hasOwnProperty("class")&&(e+=" "+h["class"],delete h["class"]);try{delete h.role}catch(n){}for(m in h)h.hasOwnProperty(m)&&(k+=" "+
m+"="+h[m])}return'<tr role="row" id="'+c+'" tabindex="'+l+'" class="'+e+'"'+(""===d?"":' style="'+d+'"')+k+">"},K=function(c,d,e,f,g){var h=new Date,l="local"!==a.p.datatype&&a.p.loadonce||"xmlstring"===a.p.datatype,k=a.p.xmlReader,m="local"===a.p.datatype?"local":"xml";l&&(a.p.data=[],a.p._index={},a.p.localReader.id="_id_");a.p.reccount=0;if(b.isXMLDoc(c)){-1!==a.p.treeANode||a.p.scroll?e=1<e?e:1:(X.call(a,!1,!0),e=1);var n=b(a),C,A,R=0,p,u=!0===a.p.multiselect?1:0,z=0,x,q=!0===a.p.rownumbers?
1:0,t,Z=[],aa,v={},w,H,s=[],L=!0===a.p.altRows?a.p.altclass:"",ia;!0===a.p.subGrid&&(z=1,x=b.jgrid.getMethod("addSubGridCell"));k.repeatitems||(Z=ea(m));t=!1===a.p.keyIndex?b.isFunction(k.id)?k.id.call(a,c):k.id:a.p.keyIndex;0<Z.length&&!isNaN(t)&&(t=a.p.keyName);m=-1===String(t).indexOf("[")?Z.length?function(a,c){return b(t,a).text()||c}:function(a,c){return b(k.cell,a).eq(t).text()||c}:function(a,b){return a.getAttribute(t.replace(/[\[\]]/g,""))||b};a.p.userData={};a.p.page=r(b.jgrid.getXmlData(c,
k.page),a.p.page);a.p.lastpage=r(b.jgrid.getXmlData(c,k.total),1);a.p.records=r(b.jgrid.getXmlData(c,k.records));b.isFunction(k.userdata)?a.p.userData=k.userdata.call(a,c)||{}:b.jgrid.getXmlData(c,k.userdata,!0).each(function(){a.p.userData[this.getAttribute("name")]=b(this).text()});c=b.jgrid.getXmlData(c,k.root,!0);(c=b.jgrid.getXmlData(c,k.row,!0))||(c=[]);var S=c.length,I=0,y=[],D=parseInt(a.p.rowNum,10),B=a.p.scroll?b.jgrid.randId():1;0<S&&0>=a.p.page&&(a.p.page=1);if(c&&S){g&&(D*=g+1);g=b.isFunction(a.p.afterInsertRow);
var F=!1,J;a.p.grouping&&(F=!0===a.p.groupingView.groupCollapse,J=b.jgrid.getMethod("groupingPrepare"));for(;I<S;){w=c[I];H=m(w,B+I);H=a.p.idPrefix+H;C=0===e?0:e+1;ia=1===(C+I)%2?L:"";var K=s.length;s.push("");q&&s.push(M(0,I,a.p.page,a.p.rowNum));u&&s.push(U(H,q,I,!1));z&&s.push(x.call(n,u+q,I+e));if(k.repeatitems){aa||(aa=W(u+z+q));var N=b.jgrid.getXmlData(w,k.cell,!0);b.each(aa,function(b){var c=N[this];if(!c)return!1;p=c.textContent||c.text;v[a.p.colModel[b+u+z+q].name]=p;s.push(G(H,p,b+u+z+q,
I+e,w,v))})}else for(C=0;C<Z.length;C++)p=b.jgrid.getXmlData(w,Z[C]),v[a.p.colModel[C+u+z+q].name]=p,s.push(G(H,p,C+u+z+q,I+e,w,v));s[K]=$(H,F,ia,v,w,!1);s.push("</tr>");a.p.grouping&&(y.push(s),a.p.groupingView._locgr||J.call(n,v,I),s=[]);if(l||!0===a.p.treeGrid)v._id_=b.jgrid.stripPref(a.p.idPrefix,H),a.p.data.push(v),a.p._index[v._id_]=a.p.data.length-1;!1===a.p.gridview&&(b("tbody:first",d).append(s.join("")),n.triggerHandler("jqGridAfterInsertRow",[H,v,w]),g&&a.p.afterInsertRow.call(a,H,v,w),
s=[]);v={};R++;I++;if(R===D)break}}!0===a.p.gridview&&(A=-1<a.p.treeANode?a.p.treeANode:0,a.p.grouping?(l||n.jqGrid("groupingRender",y,a.p.colModel.length,a.p.page,D),y=null):!0===a.p.treeGrid&&0<A?b(a.rows[A]).after(s.join("")):b("tbody:first",d).append(s.join("")));if(!0===a.p.subGrid)try{n.jqGrid("addSubGrid",u+q)}catch(Q){}a.p.totaltime=new Date-h;0<R&&0===a.p.records&&(a.p.records=S);s=null;if(!0===a.p.treeGrid)try{n.jqGrid("setTreeNode",A+1,R+A+1)}catch(O){}a.p.treeGrid||a.p.scroll||(a.grid.bDiv.scrollTop=
0);a.p.reccount=R;a.p.treeANode=-1;a.p.userDataOnFooter&&n.jqGrid("footerData","set",a.p.userData,!0);l&&(a.p.records=S,a.p.lastpage=Math.ceil(S/D));f||a.updatepager(!1,!0);if(l){for(;R<S;){w=c[R];H=m(w,R+B);H=a.p.idPrefix+H;if(k.repeatitems){aa||(aa=W(u+z+q));var P=b.jgrid.getXmlData(w,k.cell,!0);b.each(aa,function(b){var c=P[this];if(!c)return!1;p=c.textContent||c.text;v[a.p.colModel[b+u+z+q].name]=p})}else for(C=0;C<Z.length;C++)p=b.jgrid.getXmlData(w,Z[C]),v[a.p.colModel[C+u+z+q].name]=p;v._id_=
b.jgrid.stripPref(a.p.idPrefix,H);a.p.grouping&&J.call(n,v,R);a.p.data.push(v);a.p._index[v._id_]=a.p.data.length-1;v={};R++}a.p.grouping&&(a.p.groupingView._locgr=!0,n.jqGrid("groupingRender",y,a.p.colModel.length,a.p.page,D),y=null)}}},Y=function(c,d,e,f,g){var h=new Date;if(c){-1!==a.p.treeANode||a.p.scroll?e=1<e?e:1:(X.call(a,!1,!0),e=1);var k,l="local"!==a.p.datatype&&a.p.loadonce||"jsonstring"===a.p.datatype;l&&(a.p.data=[],a.p._index={},a.p.localReader.id="_id_");a.p.reccount=0;"local"===a.p.datatype?
(d=a.p.localReader,k="local"):(d=a.p.jsonReader,k="json");var m=b(a),n=0,C,A,p,q=[],u=a.p.multiselect?1:0,z=!0===a.p.subGrid?1:0,x,t=!0===a.p.rownumbers?1:0,D=W(u+z+t);k=ea(k);var y,B,v,w={},H,s,L=[],ia=!0===a.p.altRows?a.p.altclass:"",S;a.p.page=r(b.jgrid.getAccessor(c,d.page),a.p.page);a.p.lastpage=r(b.jgrid.getAccessor(c,d.total),1);a.p.records=r(b.jgrid.getAccessor(c,d.records));a.p.userData=b.jgrid.getAccessor(c,d.userdata)||{};z&&(x=b.jgrid.getMethod("addSubGridCell"));v=!1===a.p.keyIndex?b.isFunction(d.id)?
d.id.call(a,c):d.id:a.p.keyIndex;d.repeatitems||(q=k,0<q.length&&!isNaN(v)&&(v=a.p.keyName));B=b.jgrid.getAccessor(c,d.root);null==B&&b.isArray(c)&&(B=c);B||(B=[]);c=B.length;A=0;0<c&&0>=a.p.page&&(a.p.page=1);var I=parseInt(a.p.rowNum,10),F=a.p.scroll?b.jgrid.randId():1,J=!1,K;g&&(I*=g+1);"local"!==a.p.datatype||a.p.deselectAfterSort||(J=!0);var N=b.isFunction(a.p.afterInsertRow),P=[],Q=!1,O;a.p.grouping&&(Q=!0===a.p.groupingView.groupCollapse,O=b.jgrid.getMethod("groupingPrepare"));for(;A<c;){g=
B[A];s=b.jgrid.getAccessor(g,v);void 0===s&&("number"===typeof v&&null!=a.p.colModel[v+u+z+t]&&(s=b.jgrid.getAccessor(g,a.p.colModel[v+u+z+t].name)),void 0===s&&(s=F+A,0===q.length&&d.cell&&(C=b.jgrid.getAccessor(g,d.cell)||g,s=null!=C&&void 0!==C[v]?C[v]:s)));s=a.p.idPrefix+s;C=1===e?0:e;S=1===(C+A)%2?ia:"";J&&(K=a.p.multiselect?-1!==b.inArray(s,a.p.selarrrow):s===a.p.selrow);var T=L.length;L.push("");t&&L.push(M(0,A,a.p.page,a.p.rowNum));u&&L.push(U(s,t,A,K));z&&L.push(x.call(m,u+t,A+e));y=k;d.repeatitems&&
(d.cell&&(g=b.jgrid.getAccessor(g,d.cell)||g),b.isArray(g)&&(y=D));for(p=0;p<y.length;p++)C=b.jgrid.getAccessor(g,y[p]),w[a.p.colModel[p+u+z+t].name]=C,L.push(G(s,C,p+u+z+t,A+e,g,w));L[T]=$(s,Q,S,w,g,K);L.push("</tr>");a.p.grouping&&(P.push(L),a.p.groupingView._locgr||O.call(m,w,A),L=[]);if(l||!0===a.p.treeGrid)w._id_=b.jgrid.stripPref(a.p.idPrefix,s),a.p.data.push(w),a.p._index[w._id_]=a.p.data.length-1;!1===a.p.gridview&&(b("#"+b.jgrid.jqID(a.p.id)+" tbody:first").append(L.join("")),m.triggerHandler("jqGridAfterInsertRow",
[s,w,g]),N&&a.p.afterInsertRow.call(a,s,w,g),L=[]);w={};n++;A++;if(n===I)break}!0===a.p.gridview&&(H=-1<a.p.treeANode?a.p.treeANode:0,a.p.grouping?l||(m.jqGrid("groupingRender",P,a.p.colModel.length,a.p.page,I),P=null):!0===a.p.treeGrid&&0<H?b(a.rows[H]).after(L.join("")):b("#"+b.jgrid.jqID(a.p.id)+" tbody:first").append(L.join("")));if(!0===a.p.subGrid)try{m.jqGrid("addSubGrid",u+t)}catch(V){}a.p.totaltime=new Date-h;0<n&&0===a.p.records&&(a.p.records=c);if(!0===a.p.treeGrid)try{m.jqGrid("setTreeNode",
H+1,n+H+1)}catch(Y){}a.p.treeGrid||a.p.scroll||(a.grid.bDiv.scrollTop=0);a.p.reccount=n;a.p.treeANode=-1;a.p.userDataOnFooter&&m.jqGrid("footerData","set",a.p.userData,!0);l&&(a.p.records=c,a.p.lastpage=Math.ceil(c/I));f||a.updatepager(!1,!0);if(l){for(;n<c&&B[n];){g=B[n];s=b.jgrid.getAccessor(g,v);void 0===s&&("number"===typeof v&&null!=a.p.colModel[v+u+z+t]&&(s=b.jgrid.getAccessor(g,a.p.colModel[v+u+z+t].name)),void 0===s&&(s=F+n,0===q.length&&d.cell&&(e=b.jgrid.getAccessor(g,d.cell)||g,s=null!=
e&&void 0!==e[v]?e[v]:s)));if(g){s=a.p.idPrefix+s;y=k;d.repeatitems&&(d.cell&&(g=b.jgrid.getAccessor(g,d.cell)||g),b.isArray(g)&&(y=D));for(p=0;p<y.length;p++)w[a.p.colModel[p+u+z+t].name]=b.jgrid.getAccessor(g,y[p]);w._id_=b.jgrid.stripPref(a.p.idPrefix,s);a.p.grouping&&O.call(m,w,n);a.p.data.push(w);a.p._index[w._id_]=a.p.data.length-1;w={}}n++}a.p.grouping&&(a.p.groupingView._locgr=!0,m.jqGrid("groupingRender",P,a.p.colModel.length,a.p.page,I))}}},oa=function(){function c(a){var b=0,d,e,g,h,k;
if(null!=a.groups){(e=a.groups.length&&"OR"===a.groupOp.toString().toUpperCase())&&u.orBegin();for(d=0;d<a.groups.length;d++){0<b&&e&&u.or();try{c(a.groups[d])}catch(l){alert(l)}b++}e&&u.orEnd()}if(null!=a.rules)try{(g=a.rules.length&&"OR"===a.groupOp.toString().toUpperCase())&&u.orBegin();for(d=0;d<a.rules.length;d++)k=a.rules[d],h=a.groupOp.toString().toUpperCase(),q[k.op]&&k.field&&(0<b&&h&&"OR"===h&&(u=u.or()),u=q[k.op](u,h)(k.field,k.data,f[k.field])),b++;g&&u.orEnd()}catch(m){alert(m)}}var d=
a.p.multiSort?[]:"",e=[],g=!1,f={},h=[],k=[],l,m,n;if(b.isArray(a.p.data)){var p=a.p.grouping?a.p.groupingView:!1,A,r;b.each(a.p.colModel,function(){m=this.sorttype||"text";"date"===m||"datetime"===m?(this.formatter&&"string"===typeof this.formatter&&"date"===this.formatter?(l=this.formatoptions&&this.formatoptions.srcformat?this.formatoptions.srcformat:b.jgrid.formatter.date.srcformat,n=this.formatoptions&&this.formatoptions.newformat?this.formatoptions.newformat:b.jgrid.formatter.date.newformat):
l=n=this.datefmt||"Y-m-d",f[this.name]={stype:m,srcfmt:l,newfmt:n,sfunc:this.sortfunc||null}):f[this.name]={stype:m,srcfmt:"",newfmt:"",sfunc:this.sortfunc||null};if(a.p.grouping)for(r=0,A=p.groupField.length;r<A;r++)if(this.name===p.groupField[r]){var c=this.name;this.index&&(c=this.index);h[r]=f[c];k[r]=c}a.p.multiSort?this.lso&&(d.push(this.name),c=this.lso.split("-"),e.push(c[c.length-1])):g||this.index!==a.p.sortname&&this.name!==a.p.sortname||(d=this.name,g=!0)});if(a.p.treeGrid)b(a).jqGrid("SortTree",
d,a.p.sortorder,f[d].stype||"text",f[d].srcfmt||"");else{var q={eq:function(a){return a.equals},ne:function(a){return a.notEquals},lt:function(a){return a.less},le:function(a){return a.lessOrEquals},gt:function(a){return a.greater},ge:function(a){return a.greaterOrEquals},cn:function(a){return a.contains},nc:function(a,b){return"OR"===b?a.orNot().contains:a.andNot().contains},bw:function(a){return a.startsWith},bn:function(a,b){return"OR"===b?a.orNot().startsWith:a.andNot().startsWith},en:function(a,
b){return"OR"===b?a.orNot().endsWith:a.andNot().endsWith},ew:function(a){return a.endsWith},ni:function(a,b){return"OR"===b?a.orNot().equals:a.andNot().equals},"in":function(a){return a.equals},nu:function(a){return a.isNull},nn:function(a,b){return"OR"===b?a.orNot().isNull:a.andNot().isNull}},u=b.jgrid.from(a.p.data);a.p.ignoreCase&&(u=u.ignoreCase());if(!0===a.p.search){var z=a.p.postData.filters;if(z)"string"===typeof z&&(z=b.jgrid.parse(z)),c(z);else try{u=q[a.p.postData.searchOper](u)(a.p.postData.searchField,
a.p.postData.searchString,f[a.p.postData.searchField])}catch(t){}}if(a.p.grouping)for(r=0;r<A;r++)u.orderBy(k[r],p.groupOrder[r],h[r].stype,h[r].srcfmt);a.p.multiSort?b.each(d,function(a){u.orderBy(this,e[a],f[this].stype,f[this].srcfmt,f[this].sfunc)}):d&&a.p.sortorder&&g&&("DESC"===a.p.sortorder.toUpperCase()?u.orderBy(a.p.sortname,"d",f[d].stype,f[d].srcfmt,f[d].sfunc):u.orderBy(a.p.sortname,"a",f[d].stype,f[d].srcfmt,f[d].sfunc));var z=u.select(),x=parseInt(a.p.rowNum,10),y=z.length,B=parseInt(a.p.page,
10),D=Math.ceil(y/x),v={};if((a.p.search||a.p.resetsearch)&&a.p.grouping&&a.p.groupingView._locgr){a.p.groupingView.groups=[];var w,G=b.jgrid.getMethod("groupingPrepare"),s,F;if(a.p.footerrow&&a.p.userDataOnFooter){for(s in a.p.userData)a.p.userData.hasOwnProperty(s)&&(a.p.userData[s]=0);F=!0}for(w=0;w<y;w++){if(F)for(s in a.p.userData)a.p.userData[s]+=parseFloat(z[w][s]||0);G.call(b(a),z[w],w,x)}}z=z.slice((B-1)*x,B*x);f=u=null;v[a.p.localReader.total]=D;v[a.p.localReader.page]=B;v[a.p.localReader.records]=
y;v[a.p.localReader.root]=z;v[a.p.localReader.userdata]=a.p.userData;z=null;return v}}},P=function(){a.grid.hDiv.loading=!0;if(!a.p.hiddengrid)switch(a.p.loadui){case "enable":b("#load_"+b.jgrid.jqID(a.p.id)).show();break;case "block":b("#lui_"+b.jgrid.jqID(a.p.id)).show(),b("#load_"+b.jgrid.jqID(a.p.id)).show()}},T=function(){a.grid.hDiv.loading=!1;switch(a.p.loadui){case "enable":b("#load_"+b.jgrid.jqID(a.p.id)).hide();break;case "block":b("#lui_"+b.jgrid.jqID(a.p.id)).hide(),b("#load_"+b.jgrid.jqID(a.p.id)).hide()}},
Q=function(c){if(!a.grid.hDiv.loading){var d=a.p.scroll&&!1===c,e={},g,f=a.p.prmNames;0>=a.p.page&&(a.p.page=Math.min(1,a.p.lastpage));null!==f.search&&(e[f.search]=a.p.search);null!==f.nd&&(e[f.nd]=(new Date).getTime());null!==f.rows&&(e[f.rows]=a.p.rowNum);null!==f.page&&(e[f.page]=a.p.page);null!==f.sort&&(e[f.sort]=a.p.sortname);null!==f.order&&(e[f.order]=a.p.sortorder);null!==a.p.rowTotal&&null!==f.totalrows&&(e[f.totalrows]=a.p.rowTotal);var h=b.isFunction(a.p.loadComplete),k=h?a.p.loadComplete:
null,l=0;c=c||1;1<c?null!==f.npage?(e[f.npage]=c,l=c-1,c=1):k=function(b){a.p.page++;a.grid.hDiv.loading=!1;h&&a.p.loadComplete.call(a,b);Q(c-1)}:null!==f.npage&&delete a.p.postData[f.npage];if(a.p.grouping){b(a).jqGrid("groupingSetup");var m=a.p.groupingView,n,p="";for(n=0;n<m.groupField.length;n++){var r=m.groupField[n];b.each(a.p.colModel,function(a,b){b.name===r&&b.index&&(r=b.index)});p+=r+" "+m.groupOrder[n]+", "}e[f.sort]=p+e[f.sort]}b.extend(a.p.postData,e);var q=a.p.scroll?a.rows.length-
1:1,e=b(a).triggerHandler("jqGridBeforeRequest");if(!1!==e&&"stop"!==e)if(b.isFunction(a.p.datatype))a.p.datatype.call(a,a.p.postData,"load_"+a.p.id,q,c,l);else{if(b.isFunction(a.p.beforeRequest)&&(e=a.p.beforeRequest.call(a),void 0===e&&(e=!0),!1===e))return;g=a.p.datatype.toLowerCase();switch(g){case "json":case "jsonp":case "xml":case "script":b.ajax(b.extend({url:a.p.url,type:a.p.mtype,dataType:g,data:b.isFunction(a.p.serializeGridData)?a.p.serializeGridData.call(a,a.p.postData):a.p.postData,
success:function(e,f,h){if(b.isFunction(a.p.beforeProcessing)&&!1===a.p.beforeProcessing.call(a,e,f,h))T();else{"xml"===g?K(e,a.grid.bDiv,q,1<c,l):Y(e,a.grid.bDiv,q,1<c,l);b(a).triggerHandler("jqGridLoadComplete",[e]);k&&k.call(a,e);b(a).triggerHandler("jqGridAfterLoadComplete",[e]);d&&a.grid.populateVisible();if(a.p.loadonce||a.p.treeGrid)a.p.datatype="local";1===c&&T()}},error:function(d,e,f){b.isFunction(a.p.loadError)&&a.p.loadError.call(a,d,e,f);1===c&&T()},beforeSend:function(c,d){var e=!0;
b.isFunction(a.p.loadBeforeSend)&&(e=a.p.loadBeforeSend.call(a,c,d));void 0===e&&(e=!0);if(!1===e)return!1;P()}},b.jgrid.ajaxOptions,a.p.ajaxGridOptions));break;case "xmlstring":P();e="string"!==typeof a.p.datastr?a.p.datastr:b.parseXML(a.p.datastr);K(e,a.grid.bDiv);b(a).triggerHandler("jqGridLoadComplete",[e]);h&&a.p.loadComplete.call(a,e);b(a).triggerHandler("jqGridAfterLoadComplete",[e]);a.p.datatype="local";a.p.datastr=null;T();break;case "jsonstring":P();e="string"===typeof a.p.datastr?b.jgrid.parse(a.p.datastr):
a.p.datastr;Y(e,a.grid.bDiv);b(a).triggerHandler("jqGridLoadComplete",[e]);h&&a.p.loadComplete.call(a,e);b(a).triggerHandler("jqGridAfterLoadComplete",[e]);a.p.datatype="local";a.p.datastr=null;T();break;case "local":case "clientside":P(),a.p.datatype="local",e=oa(),Y(e,a.grid.bDiv,q,1<c,l),b(a).triggerHandler("jqGridLoadComplete",[e]),k&&k.call(a,e),b(a).triggerHandler("jqGridAfterLoadComplete",[e]),d&&a.grid.populateVisible(),T()}}}},ha=function(c){b("#cb_"+b.jgrid.jqID(a.p.id),a.grid.hDiv)[a.p.useProp?
"prop":"attr"]("checked",c);if(a.p.frozenColumns&&a.p.id+"_frozen")b("#cb_"+b.jgrid.jqID(a.p.id),a.grid.fhDiv)[a.p.useProp?"prop":"attr"]("checked",c)},qa=function(c,e){var d="",g="<table cellspacing='0' cellpadding='0' border='0' style='table-layout:auto;' class='ui-pg-table'><tbody><tr>",k="",l,m,n,p,q=function(c){var e;b.isFunction(a.p.onPaging)&&(e=a.p.onPaging.call(a,c));if("stop"===e)return!1;a.p.selrow=null;a.p.multiselect&&(a.p.selarrrow=[],ha(!1));a.p.savedRow=[];return!0};c=c.substr(1);
e+="_"+c;l="pg_"+c;m=c+"_left";n=c+"_center";p=c+"_right";b("#"+b.jgrid.jqID(c)).append("<div id='"+l+"' class='ui-pager-control' role='group'><table cellspacing='0' cellpadding='0' border='0' class='ui-pg-table' style='width:100%;table-layout:fixed;height:100%;' role='row'><tbody><tr><td id='"+m+"' align='left'></td><td id='"+n+"' align='center' style='white-space:pre;'></td><td id='"+p+"' align='right'></td></tr></tbody></table></div>").attr("dir","ltr");if(0<a.p.rowList.length){k="<td dir='"+f+
"'>";k+="<select class='ui-pg-selbox' role='listbox'>";for(m=0;m<a.p.rowList.length;m++)k+='<option role="option" value="'+a.p.rowList[m]+'"'+(a.p.rowNum===a.p.rowList[m]?' selected="selected"':"")+">"+a.p.rowList[m]+"</option>";k+="</select></td>"}"rtl"===f&&(g+=k);!0===a.p.pginput&&(d="<td dir='"+f+"'>"+b.jgrid.format(a.p.pgtext||"","<input class='ui-pg-input' type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+b.jgrid.jqID(c)+"'></span>")+"</td>");!0===a.p.pgbuttons?
(m=["first"+e,"prev"+e,"next"+e,"last"+e],"rtl"===f&&m.reverse(),g+="<td id='"+m[0]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-first'></span></td>",g+="<td id='"+m[1]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-prev'></span></td>",g=g+(""!==d?"<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'></span></td>"+d+"<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'></span></td>":
"")+("<td id='"+m[2]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-next'></span></td>"),g+="<td id='"+m[3]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-end'></span></td>"):""!==d&&(g+=d);"ltr"===f&&(g+=k);g+="</tr></tbody></table>";!0===a.p.viewrecords&&b("td#"+c+"_"+a.p.recordpos,"#"+l).append("<div dir='"+f+"' style='text-align:"+a.p.recordpos+"' class='ui-paging-info'></div>");b("td#"+c+"_"+a.p.pagerpos,"#"+l).append(g);k=b(".ui-jqgrid").css("font-size")||
"11px";b(document.body).append("<div id='testpg' class='ui-jqgrid ui-widget ui-widget-content' style='font-size:"+k+";visibility:hidden;' ></div>");g=b(g).clone().appendTo("#testpg").width();b("#testpg").remove();0<g&&(""!==d&&(g+=50),b("td#"+c+"_"+a.p.pagerpos,"#"+l).width(g));a.p._nvtd=[];a.p._nvtd[0]=g?Math.floor((a.p.width-g)/2):Math.floor(a.p.width/3);a.p._nvtd[1]=0;g=null;b(".ui-pg-selbox","#"+l).bind("change",function(){if(!q("records"))return!1;a.p.page=Math.round(a.p.rowNum*(a.p.page-1)/
this.value-0.5)+1;a.p.rowNum=this.value;a.p.pager&&b(".ui-pg-selbox",a.p.pager).val(this.value);a.p.toppager&&b(".ui-pg-selbox",a.p.toppager).val(this.value);Q();return!1});!0===a.p.pgbuttons&&(b(".ui-pg-button","#"+l).hover(function(){b(this).hasClass("ui-state-disabled")?this.style.cursor="default":(b(this).addClass("ui-state-hover"),this.style.cursor="pointer")},function(){b(this).hasClass("ui-state-disabled")||(b(this).removeClass("ui-state-hover"),this.style.cursor="default")}),b("#first"+b.jgrid.jqID(e)+
", #prev"+b.jgrid.jqID(e)+", #next"+b.jgrid.jqID(e)+", #last"+b.jgrid.jqID(e)).click(function(){if(b(this).hasClass("ui-state-disabled"))return!1;var c=r(a.p.page,1),d=r(a.p.lastpage,1),g=!1,f=!0,h=!0,k=!0,l=!0;0===d||1===d?l=k=h=f=!1:1<d&&1<=c?1===c?h=f=!1:c===d&&(l=k=!1):1<d&&0===c&&(l=k=!1,c=d-1);if(!q(this.id))return!1;this.id==="first"+e&&f&&(a.p.page=1,g=!0);this.id==="prev"+e&&h&&(a.p.page=c-1,g=!0);this.id==="next"+e&&k&&(a.p.page=c+1,g=!0);this.id==="last"+e&&l&&(a.p.page=d,g=!0);g&&Q();
return!1}));!0===a.p.pginput&&b("input.ui-pg-input","#"+l).keypress(function(c){if(13===(c.charCode||c.keyCode||0)){if(!q("user"))return!1;b(this).val(r(b(this).val(),1));a.p.page=0<b(this).val()?b(this).val():a.p.page;Q();return!1}return this})},wa=function(c,e){var d,g="",f=a.p.colModel,h=!1,k;k=a.p.frozenColumns?e:a.grid.headers[c].el;var l="";b("span.ui-grid-ico-sort",k).addClass("ui-state-disabled");b(k).attr("aria-selected","false");if(f[c].lso)if("asc"===f[c].lso)f[c].lso+="-desc",l="desc";
else if("desc"===f[c].lso)f[c].lso+="-asc",l="asc";else{if("asc-desc"===f[c].lso||"desc-asc"===f[c].lso)f[c].lso=""}else f[c].lso=l=f[c].firstsortorder||"asc";l?(b("span.s-ico",k).show(),b("span.ui-icon-"+l,k).removeClass("ui-state-disabled"),b(k).attr("aria-selected","true")):a.p.viewsortcols[0]||b("span.s-ico",k).hide();a.p.sortorder="";b.each(f,function(b){this.lso&&(0<b&&h&&(g+=", "),d=this.lso.split("-"),g+=f[b].index||f[b].name,g+=" "+d[d.length-1],h=!0,a.p.sortorder=d[d.length-1])});k=g.lastIndexOf(a.p.sortorder);
g=g.substring(0,k);a.p.sortname=g},ra=function(c,d,e,g,f){if(a.p.colModel[d].sortable&&!(0<a.p.savedRow.length)){e||(a.p.lastsort===d?"asc"===a.p.sortorder?a.p.sortorder="desc":"desc"===a.p.sortorder&&(a.p.sortorder="asc"):a.p.sortorder=a.p.colModel[d].firstsortorder||"asc",a.p.page=1);if(a.p.multiSort)wa(d,f);else{if(g){if(a.p.lastsort===d&&a.p.sortorder===g&&!e)return;a.p.sortorder=g}e=a.grid.headers[a.p.lastsort].el;f=a.p.frozenColumns?f:a.grid.headers[d].el;b("span.ui-grid-ico-sort",e).addClass("ui-state-disabled");
b(e).attr("aria-selected","false");a.p.frozenColumns&&(a.grid.fhDiv.find("span.ui-grid-ico-sort").addClass("ui-state-disabled"),a.grid.fhDiv.find("th").attr("aria-selected","false"));b("span.ui-icon-"+a.p.sortorder,f).removeClass("ui-state-disabled");b(f).attr("aria-selected","true");a.p.viewsortcols[0]||a.p.lastsort===d||(a.p.frozenColumns&&a.grid.fhDiv.find("span.s-ico").hide(),b("span.s-ico",e).hide(),b("span.s-ico",f).show());c=c.substring(5+a.p.id.length+1);a.p.sortname=a.p.colModel[d].index||
c}"stop"===b(a).triggerHandler("jqGridSortCol",[a.p.sortname,d,a.p.sortorder])?a.p.lastsort=d:b.isFunction(a.p.onSortCol)&&"stop"===a.p.onSortCol.call(a,a.p.sortname,d,a.p.sortorder)?a.p.lastsort=d:("local"===a.p.datatype?a.p.deselectAfterSort&&b(a).jqGrid("resetSelection"):(a.p.selrow=null,a.p.multiselect&&ha(!1),a.p.selarrrow=[],a.p.savedRow=[]),a.p.scroll&&(f=a.grid.bDiv.scrollLeft,X.call(a,!0,!1),a.grid.hDiv.scrollLeft=f),a.p.subGrid&&"local"===a.p.datatype&&b("td.sgexpanded","#"+b.jgrid.jqID(a.p.id)).each(function(){b(this).trigger("click")}),
Q(),a.p.lastsort=d,a.p.sortname!==c&&d&&(a.p.lastsort=d))}},xa=function(c){c=b(a.grid.headers[c].el);c=[c.position().left+c.outerWidth()];"rtl"===a.p.direction&&(c[0]=a.p.width-c[0]);c[0]-=a.grid.bDiv.scrollLeft;c.push(b(a.grid.hDiv).position().top);c.push(b(a.grid.bDiv).offset().top-b(a.grid.hDiv).offset().top+b(a.grid.bDiv).height());return c},sa=function(c){var d,e=a.grid.headers,g=b.jgrid.getCellIndex(c);for(d=0;d<e.length;d++)if(c===e[d].el){g=d;break}return g};this.p.id=this.id;-1===b.inArray(a.p.multikey,
["shiftKey","altKey","ctrlKey"])&&(a.p.multikey=!1);a.p.keyIndex=!1;a.p.keyName=!1;for(g=0;g<a.p.colModel.length;g++)a.p.colModel[g]=b.extend(!0,{},a.p.cmTemplate,a.p.colModel[g].template||{},a.p.colModel[g]),!1===a.p.keyIndex&&!0===a.p.colModel[g].key&&(a.p.keyIndex=g);a.p.sortorder=a.p.sortorder.toLowerCase();b.jgrid.cell_width=b.jgrid.cellWidth();!0===a.p.grouping&&(a.p.scroll=!1,a.p.rownumbers=!1,a.p.treeGrid=!1,a.p.gridview=!0);if(!0===this.p.treeGrid){try{b(this).jqGrid("setTreeGrid")}catch(za){}"local"!==
a.p.datatype&&(a.p.localReader={id:"_id_"})}if(this.p.subGrid)try{b(a).jqGrid("setSubGrid")}catch(Aa){}this.p.multiselect&&(this.p.colNames.unshift("<input role='checkbox' id='cb_"+this.p.id+"' class='cbox' type='checkbox'/>"),this.p.colModel.unshift({name:"cb",width:b.jgrid.cell_width?a.p.multiselectWidth+a.p.cellLayout:a.p.multiselectWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,align:"center",fixed:!0}));this.p.rownumbers&&(this.p.colNames.unshift(""),this.p.colModel.unshift({name:"rn",width:a.p.rownumWidth,
sortable:!1,resizable:!1,hidedlg:!0,search:!1,align:"center",fixed:!0}));a.p.xmlReader=b.extend(!0,{root:"rows",row:"row",page:"rows>page",total:"rows>total",records:"rows>records",repeatitems:!0,cell:"cell",id:"[id]",userdata:"userdata",subgrid:{root:"rows",row:"row",repeatitems:!0,cell:"cell"}},a.p.xmlReader);a.p.jsonReader=b.extend(!0,{root:"rows",page:"page",total:"total",records:"records",repeatitems:!0,cell:"cell",id:"id",userdata:"userdata",subgrid:{root:"rows",repeatitems:!0,cell:"cell"}},
a.p.jsonReader);a.p.localReader=b.extend(!0,{root:"rows",page:"page",total:"total",records:"records",repeatitems:!1,cell:"cell",id:"id",userdata:"userdata",subgrid:{root:"rows",repeatitems:!0,cell:"cell"}},a.p.localReader);a.p.scroll&&(a.p.pgbuttons=!1,a.p.pginput=!1,a.p.rowList=[]);a.p.data.length&&O();var D="<thead><tr class='ui-jqgrid-labels' role='rowheader'>",ta,F,ja,fa,ka,y,t,ba,ua=ba="",ga=[],va=[];F=[];if(!0===a.p.shrinkToFit&&!0===a.p.forceFit)for(g=a.p.colModel.length-1;0<=g;g--)if(!a.p.colModel[g].hidden){a.p.colModel[g].resizable=
!1;break}"horizontal"===a.p.viewsortcols[1]&&(ba=" ui-i-asc",ua=" ui-i-desc");ta=n?"class='ui-th-div-ie'":"";ba="<span class='s-ico' style='display:none'><span sort='asc' class='ui-grid-ico-sort ui-icon-asc"+ba+" ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-"+f+"'></span>"+("<span sort='desc' class='ui-grid-ico-sort ui-icon-desc"+ua+" ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-"+f+"'></span></span>");if(a.p.multiSort)for(ga=a.p.sortname.split(","),g=0;g<ga.length;g++)F=b.trim(ga[g]).split(" "),
ga[g]=b.trim(F[0]),va[g]=F[1]?b.trim(F[1]):a.p.sortorder||"asc";for(g=0;g<this.p.colNames.length;g++)F=a.p.headertitles?' title="'+b.jgrid.stripHtml(a.p.colNames[g])+'"':"",D+="<th id='"+a.p.id+"_"+a.p.colModel[g].name+"' role='columnheader' class='ui-state-default ui-th-column ui-th-"+f+"'"+F+">",F=a.p.colModel[g].index||a.p.colModel[g].name,D+="<div id='jqgh_"+a.p.id+"_"+a.p.colModel[g].name+"' "+ta+">"+a.p.colNames[g],a.p.colModel[g].width=a.p.colModel[g].width?parseInt(a.p.colModel[g].width,10):
150,"boolean"!==typeof a.p.colModel[g].title&&(a.p.colModel[g].title=!0),a.p.colModel[g].lso="",F===a.p.sortname&&(a.p.lastsort=g),a.p.multiSort&&(F=b.inArray(F,ga),-1!==F&&(a.p.colModel[g].lso=va[F])),D+=ba+"</div></th>";D+="</tr></thead>";ba=null;b(this).append(D);b("thead tr:first th",this).hover(function(){b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")});if(this.p.multiselect){var la=[],ca;b("#cb_"+b.jgrid.jqID(a.p.id),this).bind("click",function(){a.p.selarrrow=
[];var c=!0===a.p.frozenColumns?a.p.id+"_frozen":"";this.checked?(b(a.rows).each(function(d){0<d&&!b(this).hasClass("ui-subgrid")&&!b(this).hasClass("jqgroup")&&!b(this).hasClass("ui-state-disabled")&&(b("#jqg_"+b.jgrid.jqID(a.p.id)+"_"+b.jgrid.jqID(this.id))[a.p.useProp?"prop":"attr"]("checked",!0),b(this).addClass("ui-state-highlight").attr("aria-selected","true"),a.p.selarrrow.push(this.id),a.p.selrow=this.id,c&&(b("#jqg_"+b.jgrid.jqID(a.p.id)+"_"+b.jgrid.jqID(this.id),a.grid.fbDiv)[a.p.useProp?
"prop":"attr"]("checked",!0),b("#"+b.jgrid.jqID(this.id),a.grid.fbDiv).addClass("ui-state-highlight")))}),ca=!0,la=[]):(b(a.rows).each(function(d){0<d&&!b(this).hasClass("ui-subgrid")&&!b(this).hasClass("ui-state-disabled")&&(b("#jqg_"+b.jgrid.jqID(a.p.id)+"_"+b.jgrid.jqID(this.id))[a.p.useProp?"prop":"attr"]("checked",!1),b(this).removeClass("ui-state-highlight").attr("aria-selected","false"),la.push(this.id),c&&(b("#jqg_"+b.jgrid.jqID(a.p.id)+"_"+b.jgrid.jqID(this.id),a.grid.fbDiv)[a.p.useProp?
"prop":"attr"]("checked",!1),b("#"+b.jgrid.jqID(this.id),a.grid.fbDiv).removeClass("ui-state-highlight")))}),a.p.selrow=null,ca=!1);b(a).triggerHandler("jqGridSelectAll",[ca?a.p.selarrrow:la,ca]);b.isFunction(a.p.onSelectAll)&&a.p.onSelectAll.call(a,ca?a.p.selarrrow:la,ca)})}!0===a.p.autowidth&&(D=b(m).innerWidth(),a.p.width=0<D?D:"nw");(function(){var d=0,e=b.jgrid.cell_width?0:r(a.p.cellLayout,0),g=0,f,h=r(a.p.scrollOffset,0),k,m=!1,n,p=0,q;b.each(a.p.colModel,function(){void 0===this.hidden&&(this.hidden=
!1);if(a.p.grouping&&a.p.autowidth){var c=b.inArray(this.name,a.p.groupingView.groupField);0<=c&&a.p.groupingView.groupColumnShow.length>c&&(this.hidden=!a.p.groupingView.groupColumnShow[c])}this.widthOrg=k=r(this.width,0);!1===this.hidden&&(d+=k+e,this.fixed?p+=k+e:g++)});isNaN(a.p.width)&&(a.p.width=d+(!1!==a.p.shrinkToFit||isNaN(a.p.height)?0:h));c.width=a.p.width;a.p.tblwidth=d;!1===a.p.shrinkToFit&&!0===a.p.forceFit&&(a.p.forceFit=!1);!0===a.p.shrinkToFit&&0<g&&(n=c.width-e*g-p,isNaN(a.p.height)||
(n-=h,m=!0),d=0,b.each(a.p.colModel,function(b){!1!==this.hidden||this.fixed||(this.width=k=Math.round(n*this.width/(a.p.tblwidth-e*g-p)),d+=k,f=b)}),q=0,m?c.width-p-(d+e*g)!==h&&(q=c.width-p-(d+e*g)-h):m||1===Math.abs(c.width-p-(d+e*g))||(q=c.width-p-(d+e*g)),a.p.colModel[f].width+=q,a.p.tblwidth=d+q+e*g+p,a.p.tblwidth>a.p.width&&(a.p.colModel[f].width-=a.p.tblwidth-parseInt(a.p.width,10),a.p.tblwidth=a.p.width))})();b(m).css("width",c.width+"px").append("<div class='ui-jqgrid-resize-mark' id='rs_m"+
a.p.id+"'>&#160;</div>");b(k).css("width",c.width+"px");var D=b("thead:first",a).get(0),V="";a.p.footerrow&&(V+="<table role='grid' style='width:"+a.p.tblwidth+"px' class='ui-jqgrid-ftable' cellspacing='0' cellpadding='0' border='0'><tbody><tr role='row' class='ui-widget-content footrow footrow-"+f+"'>");var k=b("tr:first",D),da="<tr class='jqgfirstrow' role='row' style='height:auto'>";a.p.disableClick=!1;b("th",k).each(function(d){ja=a.p.colModel[d].width;void 0===a.p.colModel[d].resizable&&(a.p.colModel[d].resizable=
!0);a.p.colModel[d].resizable?(fa=document.createElement("span"),b(fa).html("&#160;").addClass("ui-jqgrid-resize ui-jqgrid-resize-"+f).css("cursor","col-resize"),b(this).addClass(a.p.resizeclass)):fa="";b(this).css("width",ja+"px").prepend(fa);fa=null;var e="";a.p.colModel[d].hidden&&(b(this).css("display","none"),e="display:none;");da+="<td role='gridcell' style='height:0px;width:"+ja+"px;"+e+"'></td>";c.headers[d]={width:ja,el:this};ka=a.p.colModel[d].sortable;"boolean"!==typeof ka&&(ka=a.p.colModel[d].sortable=
!0);e=a.p.colModel[d].name;"cb"!==e&&"subgrid"!==e&&"rn"!==e&&a.p.viewsortcols[2]&&b(">div",this).addClass("ui-jqgrid-sortable");ka&&(a.p.multiSort?a.p.viewsortcols[0]?(b("div span.s-ico",this).show(),a.p.colModel[d].lso&&b("div span.ui-icon-"+a.p.colModel[d].lso,this).removeClass("ui-state-disabled")):a.p.colModel[d].lso&&(b("div span.s-ico",this).show(),b("div span.ui-icon-"+a.p.colModel[d].lso,this).removeClass("ui-state-disabled")):a.p.viewsortcols[0]?(b("div span.s-ico",this).show(),d===a.p.lastsort&&
b("div span.ui-icon-"+a.p.sortorder,this).removeClass("ui-state-disabled")):d===a.p.lastsort&&(b("div span.s-ico",this).show(),b("div span.ui-icon-"+a.p.sortorder,this).removeClass("ui-state-disabled")));a.p.footerrow&&(V+="<td role='gridcell' "+p(d,0,"",null,"",!1)+">&#160;</td>")}).mousedown(function(d){if(1===b(d.target).closest("th>span.ui-jqgrid-resize").length){var e=sa(this);if(!0===a.p.forceFit){var g=a.p,f=e,h;for(h=e+1;h<a.p.colModel.length;h++)if(!0!==a.p.colModel[h].hidden){f=h;break}g.nv=
f-e}c.dragStart(e,d,xa(e));return!1}}).click(function(c){if(a.p.disableClick)return a.p.disableClick=!1;var d="th>div.ui-jqgrid-sortable",e,g;a.p.viewsortcols[2]||(d="th>div>span>span.ui-grid-ico-sort");c=b(c.target).closest(d);if(1===c.length){var f;if(a.p.frozenColumns){var h=b(this)[0].id.substring(a.p.id.length+1);b(a.p.colModel).each(function(a){if(this.name===h)return f=a,!1})}else f=sa(this);a.p.viewsortcols[2]||(e=!0,g=c.attr("sort"));null!=f&&ra(b("div",this)[0].id,f,e,g,this);return!1}});
if(a.p.sortable&&b.fn.sortable)try{b(a).jqGrid("sortableColumns",k)}catch(Ba){}a.p.footerrow&&(V+="</tr></tbody></table>");da+="</tr>";k=document.createElement("tbody");this.appendChild(k);b(this).addClass("ui-jqgrid-btable").append(da);var da=null,k=b("<table class='ui-jqgrid-htable' style='width:"+a.p.tblwidth+"px' role='grid' aria-labelledby='gbox_"+this.id+"' cellspacing='0' cellpadding='0' border='0'></table>").append(D),J=a.p.caption&&!0===a.p.hiddengrid?!0:!1;g=b("<div class='ui-jqgrid-hbox"+
("rtl"===f?"-rtl":"")+"'></div>");D=null;c.hDiv=document.createElement("div");b(c.hDiv).css({width:c.width+"px"}).addClass("ui-state-default ui-jqgrid-hdiv").append(g);b(g).append(k);k=null;J&&b(c.hDiv).hide();a.p.pager&&("string"===typeof a.p.pager?"#"!==a.p.pager.substr(0,1)&&(a.p.pager="#"+a.p.pager):a.p.pager="#"+b(a.p.pager).attr("id"),b(a.p.pager).css({width:c.width+"px"}).addClass("ui-state-default ui-jqgrid-pager ui-corner-bottom").appendTo(m),J&&b(a.p.pager).hide(),qa(a.p.pager,""));!1===
a.p.cellEdit&&!0===a.p.hoverrows&&b(a).bind("mouseover",function(a){t=b(a.target).closest("tr.jqgrow");"ui-subgrid"!==b(t).attr("class")&&b(t).addClass("ui-state-hover")}).bind("mouseout",function(a){t=b(a.target).closest("tr.jqgrow");b(t).removeClass("ui-state-hover")});var B,N,ma;b(a).before(c.hDiv).click(function(c){y=c.target;t=b(y,a.rows).closest("tr.jqgrow");if(0===b(t).length||-1<t[0].className.indexOf("ui-state-disabled")||(b(y,a).closest("table.ui-jqgrid-btable").attr("id")||"").replace("_frozen",
"")!==a.id)return this;var d=b(y).hasClass("cbox"),e=b(a).triggerHandler("jqGridBeforeSelectRow",[t[0].id,c]);(e=!1===e||"stop"===e?!1:!0)&&b.isFunction(a.p.beforeSelectRow)&&(e=a.p.beforeSelectRow.call(a,t[0].id,c));if("A"!==y.tagName&&("INPUT"!==y.tagName&&"TEXTAREA"!==y.tagName&&"OPTION"!==y.tagName&&"SELECT"!==y.tagName||d)&&!0===e)if(B=t[0].id,N=b.jgrid.getCellIndex(y),ma=b(y).closest("td,th").html(),b(a).triggerHandler("jqGridCellSelect",[B,N,ma,c]),b.isFunction(a.p.onCellSelect)&&a.p.onCellSelect.call(a,
B,N,ma,c),!0===a.p.cellEdit)if(a.p.multiselect&&d)b(a).jqGrid("setSelection",B,!0,c);else{B=t[0].rowIndex;try{b(a).jqGrid("editCell",B,N,!0)}catch(g){}}else if(a.p.multikey)c[a.p.multikey]?b(a).jqGrid("setSelection",B,!0,c):a.p.multiselect&&d&&(d=b("#jqg_"+b.jgrid.jqID(a.p.id)+"_"+B).is(":checked"),b("#jqg_"+b.jgrid.jqID(a.p.id)+"_"+B)[a.p.useProp?"prop":"attr"]("checked",d));else{if(a.p.multiselect&&a.p.multiboxonly&&!d){var f=a.p.frozenColumns?a.p.id+"_frozen":"";b(a.p.selarrrow).each(function(c,
d){var e=b(a).jqGrid("getGridRowById",d);b(e).removeClass("ui-state-highlight");b("#jqg_"+b.jgrid.jqID(a.p.id)+"_"+b.jgrid.jqID(d))[a.p.useProp?"prop":"attr"]("checked",!1);f&&(b("#"+b.jgrid.jqID(d),"#"+b.jgrid.jqID(f)).removeClass("ui-state-highlight"),b("#jqg_"+b.jgrid.jqID(a.p.id)+"_"+b.jgrid.jqID(d),"#"+b.jgrid.jqID(f))[a.p.useProp?"prop":"attr"]("checked",!1))});a.p.selarrrow=[]}b(a).jqGrid("setSelection",B,!0,c)}}).bind("reloadGrid",function(c,d){!0===a.p.treeGrid&&(a.p.datatype=a.p.treedatatype);
d&&d.current&&a.grid.selectionPreserver(a);"local"===a.p.datatype?(b(a).jqGrid("resetSelection"),a.p.data.length&&O()):a.p.treeGrid||(a.p.selrow=null,a.p.multiselect&&(a.p.selarrrow=[],ha(!1)),a.p.savedRow=[]);a.p.scroll&&X.call(a,!0,!1);if(d&&d.page){var e=d.page;e>a.p.lastpage&&(e=a.p.lastpage);1>e&&(e=1);a.p.page=e;a.grid.bDiv.scrollTop=a.grid.prevRowHeight?(e-1)*a.grid.prevRowHeight*a.p.rowNum:0}a.grid.prevRowHeight&&a.p.scroll?(delete a.p.lastpage,a.grid.populateVisible()):a.grid.populate();
!0===a.p._inlinenav&&b(a).jqGrid("showAddEditButtons");return!1}).dblclick(function(c){y=c.target;t=b(y,a.rows).closest("tr.jqgrow");0!==b(t).length&&(B=t[0].rowIndex,N=b.jgrid.getCellIndex(y),b(a).triggerHandler("jqGridDblClickRow",[b(t).attr("id"),B,N,c]),b.isFunction(a.p.ondblClickRow)&&a.p.ondblClickRow.call(a,b(t).attr("id"),B,N,c))}).bind("contextmenu",function(c){y=c.target;t=b(y,a.rows).closest("tr.jqgrow");0!==b(t).length&&(a.p.multiselect||b(a).jqGrid("setSelection",t[0].id,!0,c),B=t[0].rowIndex,
N=b.jgrid.getCellIndex(y),b(a).triggerHandler("jqGridRightClickRow",[b(t).attr("id"),B,N,c]),b.isFunction(a.p.onRightClickRow)&&a.p.onRightClickRow.call(a,b(t).attr("id"),B,N,c))});c.bDiv=document.createElement("div");n&&"auto"===String(a.p.height).toLowerCase()&&(a.p.height="100%");b(c.bDiv).append(b('<div style="position:relative;'+(n&&8>b.jgrid.msiever()?"height:0.01%;":"")+'"></div>').append("<div></div>").append(this)).addClass("ui-jqgrid-bdiv").css({height:a.p.height+(isNaN(a.p.height)?"":"px"),
width:c.width+"px"}).scroll(c.scrollGrid);b("table:first",c.bDiv).css({width:a.p.tblwidth+"px"});b.support.tbody||2===b("tbody",this).length&&b("tbody:gt(0)",this).remove();a.p.multikey&&(b.jgrid.msie?b(c.bDiv).bind("selectstart",function(){return!1}):b(c.bDiv).bind("mousedown",function(){return!1}));J&&b(c.bDiv).hide();c.cDiv=document.createElement("div");var na=!0===a.p.hidegrid?b("<a role='link' class='ui-jqgrid-titlebar-close ui-corner-all HeaderButton' />").hover(function(){na.addClass("ui-state-hover")},
function(){na.removeClass("ui-state-hover")}).append("<span class='ui-icon ui-icon-circle-triangle-n'></span>").css("rtl"===f?"left":"right","0px"):"";b(c.cDiv).append(na).append("<span class='ui-jqgrid-title'>"+a.p.caption+"</span>").addClass("ui-jqgrid-titlebar ui-jqgrid-caption"+("rtl"===f?"-rtl":"")+" ui-widget-header ui-corner-top ui-helper-clearfix");b(c.cDiv).insertBefore(c.hDiv);a.p.toolbar[0]&&(c.uDiv=document.createElement("div"),"top"===a.p.toolbar[1]?b(c.uDiv).insertBefore(c.hDiv):"bottom"===
a.p.toolbar[1]&&b(c.uDiv).insertAfter(c.hDiv),"both"===a.p.toolbar[1]?(c.ubDiv=document.createElement("div"),b(c.uDiv).addClass("ui-userdata ui-state-default").attr("id","t_"+this.id).insertBefore(c.hDiv),b(c.ubDiv).addClass("ui-userdata ui-state-default").attr("id","tb_"+this.id).insertAfter(c.hDiv),J&&b(c.ubDiv).hide()):b(c.uDiv).width(c.width).addClass("ui-userdata ui-state-default").attr("id","t_"+this.id),J&&b(c.uDiv).hide());a.p.toppager&&(a.p.toppager=b.jgrid.jqID(a.p.id)+"_toppager",c.topDiv=
b("<div id='"+a.p.toppager+"'></div>")[0],a.p.toppager="#"+a.p.toppager,b(c.topDiv).addClass("ui-state-default ui-jqgrid-toppager").width(c.width).insertBefore(c.hDiv),qa(a.p.toppager,"_t"));a.p.footerrow&&(c.sDiv=b("<div class='ui-jqgrid-sdiv'></div>")[0],g=b("<div class='ui-jqgrid-hbox"+("rtl"===f?"-rtl":"")+"'></div>"),b(c.sDiv).append(g).width(c.width).insertAfter(c.hDiv),b(g).append(V),c.footers=b(".ui-jqgrid-ftable",c.sDiv)[0].rows[0].cells,a.p.rownumbers&&(c.footers[0].className="ui-state-default jqgrid-rownum"),
J&&b(c.sDiv).hide());g=null;if(a.p.caption){var ya=a.p.datatype;!0===a.p.hidegrid&&(b(".ui-jqgrid-titlebar-close",c.cDiv).click(function(d){var e=b.isFunction(a.p.onHeaderClick),g=".ui-jqgrid-bdiv, .ui-jqgrid-hdiv, .ui-jqgrid-pager, .ui-jqgrid-sdiv",f,h=this;!0===a.p.toolbar[0]&&("both"===a.p.toolbar[1]&&(g+=", #"+b(c.ubDiv).attr("id")),g+=", #"+b(c.uDiv).attr("id"));f=b(g,"#gview_"+b.jgrid.jqID(a.p.id)).length;"visible"===a.p.gridstate?b(g,"#gbox_"+b.jgrid.jqID(a.p.id)).slideUp("fast",function(){f--;
0===f&&(b("span",h).removeClass("ui-icon-circle-triangle-n").addClass("ui-icon-circle-triangle-s"),a.p.gridstate="hidden",b("#gbox_"+b.jgrid.jqID(a.p.id)).hasClass("ui-resizable")&&b(".ui-resizable-handle","#gbox_"+b.jgrid.jqID(a.p.id)).hide(),b(a).triggerHandler("jqGridHeaderClick",[a.p.gridstate,d]),e&&(J||a.p.onHeaderClick.call(a,a.p.gridstate,d)))}):"hidden"===a.p.gridstate&&b(g,"#gbox_"+b.jgrid.jqID(a.p.id)).slideDown("fast",function(){f--;0===f&&(b("span",h).removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-n"),
J&&(a.p.datatype=ya,Q(),J=!1),a.p.gridstate="visible",b("#gbox_"+b.jgrid.jqID(a.p.id)).hasClass("ui-resizable")&&b(".ui-resizable-handle","#gbox_"+b.jgrid.jqID(a.p.id)).show(),b(a).triggerHandler("jqGridHeaderClick",[a.p.gridstate,d]),e&&(J||a.p.onHeaderClick.call(a,a.p.gridstate,d)))});return!1}),J&&(a.p.datatype="local",b(".ui-jqgrid-titlebar-close",c.cDiv).trigger("click")))}else b(c.cDiv).hide();b(c.hDiv).after(c.bDiv).mousemove(function(a){if(c.resizing)return c.dragMove(a),!1});b(".ui-jqgrid-labels",
c.hDiv).bind("selectstart",function(){return!1});b(document).bind("mouseup.jqGrid"+a.p.id,function(){return c.resizing?(c.dragEnd(),!1):!0});a.formatCol=p;a.sortData=ra;a.updatepager=function(c,d){var e,g,f,h,k,l,m,n="",p=a.p.pager?"_"+b.jgrid.jqID(a.p.pager.substr(1)):"",q=a.p.toppager?"_"+a.p.toppager.substr(1):"";f=parseInt(a.p.page,10)-1;0>f&&(f=0);f*=parseInt(a.p.rowNum,10);k=f+a.p.reccount;if(a.p.scroll){e=b("tbody:first > tr:gt(0)",a.grid.bDiv);f=k-e.length;a.p.reccount=e.length;if(e=e.outerHeight()||
a.grid.prevRowHeight)g=f*e,m=parseInt(a.p.records,10)*e,b(">div:first",a.grid.bDiv).css({height:m}).children("div:first").css({height:g,display:g?"":"none"}),0==a.grid.bDiv.scrollTop&&1<a.p.page&&(a.grid.bDiv.scrollTop=a.p.rowNum*(a.p.page-1)*e);a.grid.bDiv.scrollLeft=a.grid.hDiv.scrollLeft}n=a.p.pager||"";if(n+=a.p.toppager?n?","+a.p.toppager:a.p.toppager:"")m=b.jgrid.formatter.integer||{},e=r(a.p.page),g=r(a.p.lastpage),b(".selbox",n)[this.p.useProp?"prop":"attr"]("disabled",!1),!0===a.p.pginput&&
(b(".ui-pg-input",n).val(a.p.page),h=a.p.toppager?"#sp_1"+p+",#sp_1"+q:"#sp_1"+p,b(h).html(b.fmatter?b.fmatter.util.NumberFormat(a.p.lastpage,m):a.p.lastpage)),a.p.viewrecords&&(0===a.p.reccount?b(".ui-paging-info",n).html(a.p.emptyrecords):(h=f+1,l=a.p.records,b.fmatter&&(h=b.fmatter.util.NumberFormat(h,m),k=b.fmatter.util.NumberFormat(k,m),l=b.fmatter.util.NumberFormat(l,m)),b(".ui-paging-info",n).html(b.jgrid.format(a.p.recordtext,h,k,l)))),!0===a.p.pgbuttons&&(0>=e&&(e=g=0),1===e||0===e?(b("#first"+
p+", #prev"+p).addClass("ui-state-disabled").removeClass("ui-state-hover"),a.p.toppager&&b("#first_t"+q+", #prev_t"+q).addClass("ui-state-disabled").removeClass("ui-state-hover")):(b("#first"+p+", #prev"+p).removeClass("ui-state-disabled"),a.p.toppager&&b("#first_t"+q+", #prev_t"+q).removeClass("ui-state-disabled")),e===g||0===e?(b("#next"+p+", #last"+p).addClass("ui-state-disabled").removeClass("ui-state-hover"),a.p.toppager&&b("#next_t"+q+", #last_t"+q).addClass("ui-state-disabled").removeClass("ui-state-hover")):
(b("#next"+p+", #last"+p).removeClass("ui-state-disabled"),a.p.toppager&&b("#next_t"+q+", #last_t"+q).removeClass("ui-state-disabled")));!0===c&&!0===a.p.rownumbers&&b(">td.jqgrid-rownum",a.rows).each(function(a){b(this).html(f+1+a)});d&&a.p.jqgdnd&&b(a).jqGrid("gridDnD","updateDnD");b(a).triggerHandler("jqGridGridComplete");b.isFunction(a.p.gridComplete)&&a.p.gridComplete.call(a);b(a).triggerHandler("jqGridAfterGridComplete")};a.refreshIndex=O;a.setHeadCheckBox=ha;a.constructTr=$;a.formatter=function(a,
b,c,d,e){return x(a,b,c,d,e)};b.extend(c,{populate:Q,emptyRows:X,beginReq:P,endReq:T});this.grid=c;a.addXmlData=function(b){K(b,a.grid.bDiv)};a.addJSONData=function(b){Y(b,a.grid.bDiv)};this.grid.cols=this.rows[0].cells;b(a).triggerHandler("jqGridInitGrid");b.isFunction(a.p.onInitGrid)&&a.p.onInitGrid.call(a);Q();a.p.hiddengrid=!1}}}})};b.jgrid.extend({getGridParam:function(b){var f=this[0];if(f&&f.grid)return b?void 0!==f.p[b]?f.p[b]:null:f.p},setGridParam:function(e){return this.each(function(){this.grid&&
"object"===typeof e&&b.extend(!0,this.p,e)})},getGridRowById:function(e){var f;this.each(function(){try{for(var c=this.rows.length;c--;)if(e.toString()===this.rows[c].id){f=this.rows[c];break}}catch(d){f=b(this.grid.bDiv).find("#"+b.jgrid.jqID(e))}});return f},getDataIDs:function(){var e=[],f=0,c,d=0;this.each(function(){if((c=this.rows.length)&&0<c)for(;f<c;)b(this.rows[f]).hasClass("jqgrow")&&(e[d]=this.rows[f].id,d++),f++});return e},setSelection:function(e,f,c){return this.each(function(){var d,
a,l,g,h,k;void 0!==e&&(f=!1===f?!1:!0,!(a=b(this).jqGrid("getGridRowById",e))||!a.className||-1<a.className.indexOf("ui-state-disabled")||(!0===this.p.scrollrows&&(l=b(this).jqGrid("getGridRowById",e).rowIndex,0<=l&&(d=b(this.grid.bDiv)[0].clientHeight,g=b(this.grid.bDiv)[0].scrollTop,h=b(this.rows[l]).position().top,l=this.rows[l].clientHeight,h+l>=d+g?b(this.grid.bDiv)[0].scrollTop=h-(d+g)+l+g:h<d+g&&h<g&&(b(this.grid.bDiv)[0].scrollTop=h))),!0===this.p.frozenColumns&&(k=this.p.id+"_frozen"),this.p.multiselect?
(this.setHeadCheckBox(!1),this.p.selrow=a.id,g=b.inArray(this.p.selrow,this.p.selarrrow),-1===g?("ui-subgrid"!==a.className&&b(a).addClass("ui-state-highlight").attr("aria-selected","true"),d=!0,this.p.selarrrow.push(this.p.selrow)):("ui-subgrid"!==a.className&&b(a).removeClass("ui-state-highlight").attr("aria-selected","false"),d=!1,this.p.selarrrow.splice(g,1),h=this.p.selarrrow[0],this.p.selrow=void 0===h?null:h),b("#jqg_"+b.jgrid.jqID(this.p.id)+"_"+b.jgrid.jqID(a.id))[this.p.useProp?"prop":"attr"]("checked",
d),k&&(-1===g?b("#"+b.jgrid.jqID(e),"#"+b.jgrid.jqID(k)).addClass("ui-state-highlight"):b("#"+b.jgrid.jqID(e),"#"+b.jgrid.jqID(k)).removeClass("ui-state-highlight"),b("#jqg_"+b.jgrid.jqID(this.p.id)+"_"+b.jgrid.jqID(e),"#"+b.jgrid.jqID(k))[this.p.useProp?"prop":"attr"]("checked",d)),f&&(b(this).triggerHandler("jqGridSelectRow",[a.id,d,c]),this.p.onSelectRow&&this.p.onSelectRow.call(this,a.id,d,c))):"ui-subgrid"!==a.className&&(this.p.selrow!==a.id?(b(b(this).jqGrid("getGridRowById",this.p.selrow)).removeClass("ui-state-highlight").attr({"aria-selected":"false",
tabindex:"-1"}),b(a).addClass("ui-state-highlight").attr({"aria-selected":"true",tabindex:"0"}),k&&(b("#"+b.jgrid.jqID(this.p.selrow),"#"+b.jgrid.jqID(k)).removeClass("ui-state-highlight"),b("#"+b.jgrid.jqID(e),"#"+b.jgrid.jqID(k)).addClass("ui-state-highlight")),d=!0):d=!1,this.p.selrow=a.id,f&&(b(this).triggerHandler("jqGridSelectRow",[a.id,d,c]),this.p.onSelectRow&&this.p.onSelectRow.call(this,a.id,d,c)))))})},resetSelection:function(e){return this.each(function(){var f=this,c,d;!0===f.p.frozenColumns&&
(d=f.p.id+"_frozen");if(void 0!==e){c=e===f.p.selrow?f.p.selrow:e;b("#"+b.jgrid.jqID(f.p.id)+" tbody:first tr#"+b.jgrid.jqID(c)).removeClass("ui-state-highlight").attr("aria-selected","false");d&&b("#"+b.jgrid.jqID(c),"#"+b.jgrid.jqID(d)).removeClass("ui-state-highlight");if(f.p.multiselect){b("#jqg_"+b.jgrid.jqID(f.p.id)+"_"+b.jgrid.jqID(c),"#"+b.jgrid.jqID(f.p.id))[f.p.useProp?"prop":"attr"]("checked",!1);if(d)b("#jqg_"+b.jgrid.jqID(f.p.id)+"_"+b.jgrid.jqID(c),"#"+b.jgrid.jqID(d))[f.p.useProp?"prop":
"attr"]("checked",!1);f.setHeadCheckBox(!1)}c=null}else f.p.multiselect?(b(f.p.selarrrow).each(function(a,c){b(b(f).jqGrid("getGridRowById",c)).removeClass("ui-state-highlight").attr("aria-selected","false");b("#jqg_"+b.jgrid.jqID(f.p.id)+"_"+b.jgrid.jqID(c))[f.p.useProp?"prop":"attr"]("checked",!1);d&&(b("#"+b.jgrid.jqID(c),"#"+b.jgrid.jqID(d)).removeClass("ui-state-highlight"),b("#jqg_"+b.jgrid.jqID(f.p.id)+"_"+b.jgrid.jqID(c),"#"+b.jgrid.jqID(d))[f.p.useProp?"prop":"attr"]("checked",!1))}),f.setHeadCheckBox(!1),
f.p.selarrrow=[],f.p.selrow=null):f.p.selrow&&(b("#"+b.jgrid.jqID(f.p.id)+" tbody:first tr#"+b.jgrid.jqID(f.p.selrow)).removeClass("ui-state-highlight").attr("aria-selected","false"),d&&b("#"+b.jgrid.jqID(f.p.selrow),"#"+b.jgrid.jqID(d)).removeClass("ui-state-highlight"),f.p.selrow=null);!0===f.p.cellEdit&&0<=parseInt(f.p.iCol,10)&&0<=parseInt(f.p.iRow,10)&&(b("td:eq("+f.p.iCol+")",f.rows[f.p.iRow]).removeClass("edit-cell ui-state-highlight"),b(f.rows[f.p.iRow]).removeClass("selected-row ui-state-hover"));
f.p.savedRow=[]})},getRowData:function(e){var f={},c,d=!1,a,l=0;this.each(function(){var g=this,h,k;if(void 0===e)d=!0,c=[],a=g.rows.length;else{k=b(g).jqGrid("getGridRowById",e);if(!k)return f;a=2}for(;l<a;)d&&(k=g.rows[l]),b(k).hasClass("jqgrow")&&(b('td[role="gridcell"]',k).each(function(a){h=g.p.colModel[a].name;if("cb"!==h&&"subgrid"!==h&&"rn"!==h)if(!0===g.p.treeGrid&&h===g.p.ExpandColumn)f[h]=b.jgrid.htmlDecode(b("span:first",this).html());else try{f[h]=b.unformat.call(g,this,{rowId:k.id,colModel:g.p.colModel[a]},
a)}catch(c){f[h]=b.jgrid.htmlDecode(b(this).html())}}),d&&(c.push(f),f={})),l++});return c||f},delRowData:function(e){var f=!1,c,d;this.each(function(){c=b(this).jqGrid("getGridRowById",e);if(!c)return!1;b(c).remove();this.p.records--;this.p.reccount--;this.updatepager(!0,!1);f=!0;this.p.multiselect&&(d=b.inArray(e,this.p.selarrrow),-1!==d&&this.p.selarrrow.splice(d,1));this.p.selrow=this.p.multiselect&&0<this.p.selarrrow.length?this.p.selarrrow[this.p.selarrrow.length-1]:null;if("local"===this.p.datatype){var a=
b.jgrid.stripPref(this.p.idPrefix,e),a=this.p._index[a];void 0!==a&&(this.p.data.splice(a,1),this.refreshIndex())}if(!0===this.p.altRows&&f){var l=this.p.altclass;b(this.rows).each(function(a){1===a%2?b(this).addClass(l):b(this).removeClass(l)})}});return f},setRowData:function(e,f,c){var d,a=!0,l;this.each(function(){if(!this.grid)return!1;var g=this,h,k,n=typeof c,m={};k=b(this).jqGrid("getGridRowById",e);if(!k)return!1;if(f)try{if(b(this.p.colModel).each(function(a){d=this.name;var c=b.jgrid.getAccessor(f,
d);void 0!==c&&(m[d]=this.formatter&&"string"===typeof this.formatter&&"date"===this.formatter?b.unformat.date.call(g,c,this):c,h=g.formatter(e,c,a,f,"edit"),l=this.title?{title:b.jgrid.stripHtml(h)}:{},!0===g.p.treeGrid&&d===g.p.ExpandColumn?b("td[role='gridcell']:eq("+a+") > span:first",k).html(h).attr(l):b("td[role='gridcell']:eq("+a+")",k).html(h).attr(l))}),"local"===g.p.datatype){var r=b.jgrid.stripPref(g.p.idPrefix,e),p=g.p._index[r],q;if(g.p.treeGrid)for(q in g.p.treeReader)g.p.treeReader.hasOwnProperty(q)&&
delete m[g.p.treeReader[q]];void 0!==p&&(g.p.data[p]=b.extend(!0,g.p.data[p],m));m=null}}catch(x){a=!1}a&&("string"===n?b(k).addClass(c):null!==c&&"object"===n&&b(k).css(c),b(g).triggerHandler("jqGridAfterGridComplete"))});return a},addRowData:function(e,f,c,d){c||(c="last");var a=!1,l,g,h,k,n,m,r,p,q="",x,G,U,M,ea,W;f&&(b.isArray(f)?(x=!0,c="last",G=e):(f=[f],x=!1),this.each(function(){var X=f.length;n=!0===this.p.rownumbers?1:0;h=!0===this.p.multiselect?1:0;k=!0===this.p.subGrid?1:0;x||(void 0!==
e?e=String(e):(e=b.jgrid.randId(),!1!==this.p.keyIndex&&(G=this.p.colModel[this.p.keyIndex+h+k+n].name,void 0!==f[0][G]&&(e=f[0][G]))));U=this.p.altclass;for(var O=0,$="",K={},Y=b.isFunction(this.p.afterInsertRow)?!0:!1;O<X;){M=f[O];g=[];if(x){try{e=M[G],void 0===e&&(e=b.jgrid.randId())}catch(oa){e=b.jgrid.randId()}$=!0===this.p.altRows?0===(this.rows.length-1)%2?U:"":""}W=e;e=this.p.idPrefix+e;n&&(q=this.formatCol(0,1,"",null,e,!0),g[g.length]='<td role="gridcell" class="ui-state-default jqgrid-rownum" '+
q+">0</td>");h&&(p='<input role="checkbox" type="checkbox" id="jqg_'+this.p.id+"_"+e+'" class="cbox"/>',q=this.formatCol(n,1,"",null,e,!0),g[g.length]='<td role="gridcell" '+q+">"+p+"</td>");k&&(g[g.length]=b(this).jqGrid("addSubGridCell",h+n,1));for(r=h+k+n;r<this.p.colModel.length;r++)ea=this.p.colModel[r],l=ea.name,K[l]=M[l],p=this.formatter(e,b.jgrid.getAccessor(M,l),r,M),q=this.formatCol(r,1,p,M,e,K),g[g.length]='<td role="gridcell" '+q+">"+p+"</td>";g.unshift(this.constructTr(e,!1,$,K,M,!1));
g[g.length]="</tr>";if(0===this.rows.length)b("table:first",this.grid.bDiv).append(g.join(""));else switch(c){case "last":b(this.rows[this.rows.length-1]).after(g.join(""));m=this.rows.length-1;break;case "first":b(this.rows[0]).after(g.join(""));m=1;break;case "after":if(m=b(this).jqGrid("getGridRowById",d))b(this.rows[m.rowIndex+1]).hasClass("ui-subgrid")?b(this.rows[m.rowIndex+1]).after(g):b(m).after(g.join("")),m=m.rowIndex+1;break;case "before":if(m=b(this).jqGrid("getGridRowById",d))b(m).before(g.join("")),
m=m.rowIndex-1}!0===this.p.subGrid&&b(this).jqGrid("addSubGrid",h+n,m);this.p.records++;this.p.reccount++;b(this).triggerHandler("jqGridAfterInsertRow",[e,M,M]);Y&&this.p.afterInsertRow.call(this,e,M,M);O++;"local"===this.p.datatype&&(K[this.p.localReader.id]=W,this.p._index[W]=this.p.data.length,this.p.data.push(K),K={})}!0!==this.p.altRows||x||("last"===c?1===(this.rows.length-1)%2&&b(this.rows[this.rows.length-1]).addClass(U):b(this.rows).each(function(a){1===a%2?b(this).addClass(U):b(this).removeClass(U)}));
this.updatepager(!0,!0);a=!0}));return a},footerData:function(e,f,c){function d(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var a,l=!1,g={},h;void 0==e&&(e="get");"boolean"!==typeof c&&(c=!0);e=e.toLowerCase();this.each(function(){var k=this,n;if(!k.grid||!k.p.footerrow||"set"===e&&d(f))return!1;l=!0;b(this.p.colModel).each(function(d){a=this.name;"set"===e?void 0!==f[a]&&(n=c?k.formatter("",f[a],d,f,"edit"):f[a],h=this.title?{title:b.jgrid.stripHtml(n)}:{},b("tr.footrow td:eq("+d+
")",k.grid.sDiv).html(n).attr(h),l=!0):"get"===e&&(g[a]=b("tr.footrow td:eq("+d+")",k.grid.sDiv).html())})});return"get"===e?g:l},showHideCol:function(e,f){return this.each(function(){var c=this,d=!1,a=b.jgrid.cell_width?0:c.p.cellLayout,l;if(c.grid){"string"===typeof e&&(e=[e]);f="none"!==f?"":"none";var g=""===f?!0:!1,h=c.p.groupHeader&&("object"===typeof c.p.groupHeader||b.isFunction(c.p.groupHeader));h&&b(c).jqGrid("destroyGroupHeader",!1);b(this.p.colModel).each(function(h){if(-1!==b.inArray(this.name,
e)&&this.hidden===g){if(!0===c.p.frozenColumns&&!0===this.frozen)return!0;b("tr[role=rowheader]",c.grid.hDiv).each(function(){b(this.cells[h]).css("display",f)});b(c.rows).each(function(){b(this).hasClass("jqgroup")||b(this.cells[h]).css("display",f)});c.p.footerrow&&b("tr.footrow td:eq("+h+")",c.grid.sDiv).css("display",f);l=parseInt(this.width,10);c.p.tblwidth="none"===f?c.p.tblwidth-(l+a):c.p.tblwidth+(l+a);this.hidden=!g;d=!0;b(c).triggerHandler("jqGridShowHideCol",[g,this.name,h])}});!0===d&&
(!0!==c.p.shrinkToFit||isNaN(c.p.height)||(c.p.tblwidth+=parseInt(c.p.scrollOffset,10)),b(c).jqGrid("setGridWidth",!0===c.p.shrinkToFit?c.p.tblwidth:c.p.width));h&&b(c).jqGrid("setGroupHeaders",c.p.groupHeader)}})},hideCol:function(e){return this.each(function(){b(this).jqGrid("showHideCol",e,"none")})},showCol:function(e){return this.each(function(){b(this).jqGrid("showHideCol",e,"")})},remapColumns:function(e,f,c){function d(a){var c;c=a.length?b.makeArray(a):b.extend({},a);b.each(e,function(b){a[b]=
c[this]})}function a(a,c){b(">tr"+(c||""),a).each(function(){var a=this,c=b.makeArray(a.cells);b.each(e,function(){var b=c[this];b&&a.appendChild(b)})})}var l=this.get(0);d(l.p.colModel);d(l.p.colNames);d(l.grid.headers);a(b("thead:first",l.grid.hDiv),c&&":not(.ui-jqgrid-labels)");f&&a(b("#"+b.jgrid.jqID(l.p.id)+" tbody:first"),".jqgfirstrow, tr.jqgrow, tr.jqfoot");l.p.footerrow&&a(b("tbody:first",l.grid.sDiv));l.p.remapColumns&&(l.p.remapColumns.length?d(l.p.remapColumns):l.p.remapColumns=b.makeArray(e));
l.p.lastsort=b.inArray(l.p.lastsort,e);l.p.treeGrid&&(l.p.expColInd=b.inArray(l.p.expColInd,e));b(l).triggerHandler("jqGridRemapColumns",[e,f,c])},setGridWidth:function(e,f){return this.each(function(){if(this.grid){var c=this,d,a=0,l=b.jgrid.cell_width?0:c.p.cellLayout,g,h=0,k=!1,n=c.p.scrollOffset,m,r=0,p;"boolean"!==typeof f&&(f=c.p.shrinkToFit);if(!isNaN(e)){e=parseInt(e,10);c.grid.width=c.p.width=e;b("#gbox_"+b.jgrid.jqID(c.p.id)).css("width",e+"px");b("#gview_"+b.jgrid.jqID(c.p.id)).css("width",
e+"px");b(c.grid.bDiv).css("width",e+"px");b(c.grid.hDiv).css("width",e+"px");c.p.pager&&b(c.p.pager).css("width",e+"px");c.p.toppager&&b(c.p.toppager).css("width",e+"px");!0===c.p.toolbar[0]&&(b(c.grid.uDiv).css("width",e+"px"),"both"===c.p.toolbar[1]&&b(c.grid.ubDiv).css("width",e+"px"));c.p.footerrow&&b(c.grid.sDiv).css("width",e+"px");!1===f&&!0===c.p.forceFit&&(c.p.forceFit=!1);if(!0===f){b.each(c.p.colModel,function(){!1===this.hidden&&(d=this.widthOrg,a+=d+l,this.fixed?r+=d+l:h++)});if(0===
h)return;c.p.tblwidth=a;m=e-l*h-r;!isNaN(c.p.height)&&(b(c.grid.bDiv)[0].clientHeight<b(c.grid.bDiv)[0].scrollHeight||1===c.rows.length)&&(k=!0,m-=n);var a=0,q=0<c.grid.cols.length;b.each(c.p.colModel,function(b){!1!==this.hidden||this.fixed||(d=this.widthOrg,d=Math.round(m*d/(c.p.tblwidth-l*h-r)),0>d||(this.width=d,a+=d,c.grid.headers[b].width=d,c.grid.headers[b].el.style.width=d+"px",c.p.footerrow&&(c.grid.footers[b].style.width=d+"px"),q&&(c.grid.cols[b].style.width=d+"px"),g=b))});if(!g)return;
p=0;k?e-r-(a+l*h)!==n&&(p=e-r-(a+l*h)-n):1!==Math.abs(e-r-(a+l*h))&&(p=e-r-(a+l*h));c.p.colModel[g].width+=p;c.p.tblwidth=a+p+l*h+r;c.p.tblwidth>e?(k=c.p.tblwidth-parseInt(e,10),c.p.tblwidth=e,d=c.p.colModel[g].width-=k):d=c.p.colModel[g].width;c.grid.headers[g].width=d;c.grid.headers[g].el.style.width=d+"px";q&&(c.grid.cols[g].style.width=d+"px");c.p.footerrow&&(c.grid.footers[g].style.width=d+"px")}c.p.tblwidth&&(b("table:first",c.grid.bDiv).css("width",c.p.tblwidth+"px"),b("table:first",c.grid.hDiv).css("width",
c.p.tblwidth+"px"),c.grid.hDiv.scrollLeft=c.grid.bDiv.scrollLeft,c.p.footerrow&&b("table:first",c.grid.sDiv).css("width",c.p.tblwidth+"px"))}}})},setGridHeight:function(e){return this.each(function(){if(this.grid){var f=b(this.grid.bDiv);f.css({height:e+(isNaN(e)?"":"px")});!0===this.p.frozenColumns&&b("#"+b.jgrid.jqID(this.p.id)+"_frozen").parent().height(f.height()-16);this.p.height=e;this.p.scroll&&this.grid.populateVisible()}})},setCaption:function(e){return this.each(function(){this.p.caption=
e;b("span.ui-jqgrid-title, span.ui-jqgrid-title-rtl",this.grid.cDiv).html(e);b(this.grid.cDiv).show()})},setLabel:function(e,f,c,d){return this.each(function(){var a=-1;if(this.grid&&void 0!==e&&(b(this.p.colModel).each(function(b){if(this.name===e)return a=b,!1}),0<=a)){var l=b("tr.ui-jqgrid-labels th:eq("+a+")",this.grid.hDiv);if(f){var g=b(".s-ico",l);b("[id^=jqgh_]",l).empty().html(f).append(g);this.p.colNames[a]=f}c&&("string"===typeof c?b(l).addClass(c):b(l).css(c));"object"===typeof d&&b(l).attr(d)}})},
setCell:function(e,f,c,d,a,l){return this.each(function(){var g=-1,h,k;if(this.grid&&(isNaN(f)?b(this.p.colModel).each(function(a){if(this.name===f)return g=a,!1}):g=parseInt(f,10),0<=g&&(h=b(this).jqGrid("getGridRowById",e)))){var n=b("td:eq("+g+")",h);if(""!==c||!0===l)h=this.formatter(e,c,g,h,"edit"),k=this.p.colModel[g].title?{title:b.jgrid.stripHtml(h)}:{},this.p.treeGrid&&0<b(".tree-wrap",b(n)).length?b("span",b(n)).html(h).attr(k):b(n).html(h).attr(k),"local"===this.p.datatype&&(h=this.p.colModel[g],
c=h.formatter&&"string"===typeof h.formatter&&"date"===h.formatter?b.unformat.date.call(this,c,h):c,k=this.p._index[b.jgrid.stripPref(this.p.idPrefix,e)],void 0!==k&&(this.p.data[k][h.name]=c));"string"===typeof d?b(n).addClass(d):d&&b(n).css(d);"object"===typeof a&&b(n).attr(a)}})},getCell:function(e,f){var c=!1;this.each(function(){var d=-1;if(this.grid&&(isNaN(f)?b(this.p.colModel).each(function(a){if(this.name===f)return d=a,!1}):d=parseInt(f,10),0<=d)){var a=b(this).jqGrid("getGridRowById",e);
if(a)try{c=b.unformat.call(this,b("td:eq("+d+")",a),{rowId:a.id,colModel:this.p.colModel[d]},d)}catch(l){c=b.jgrid.htmlDecode(b("td:eq("+d+")",a).html())}}});return c},getCol:function(e,f,c){var d=[],a,l=0,g,h,k;f="boolean"!==typeof f?!1:f;void 0===c&&(c=!1);this.each(function(){var n=-1;if(this.grid&&(isNaN(e)?b(this.p.colModel).each(function(a){if(this.name===e)return n=a,!1}):n=parseInt(e,10),0<=n)){var m=this.rows.length,r=0,p=0;if(m&&0<m){for(;r<m;){if(b(this.rows[r]).hasClass("jqgrow")){try{a=
b.unformat.call(this,b(this.rows[r].cells[n]),{rowId:this.rows[r].id,colModel:this.p.colModel[n]},n)}catch(q){a=b.jgrid.htmlDecode(this.rows[r].cells[n].innerHTML)}c?(k=parseFloat(a),isNaN(k)||(l+=k,void 0===h&&(h=g=k),g=Math.min(g,k),h=Math.max(h,k),p++)):f?d.push({id:this.rows[r].id,value:a}):d.push(a)}r++}if(c)switch(c.toLowerCase()){case "sum":d=l;break;case "avg":d=l/p;break;case "count":d=m-1;break;case "min":d=g;break;case "max":d=h}}}});return d},clearGridData:function(e){return this.each(function(){if(this.grid){"boolean"!==
typeof e&&(e=!1);if(this.p.deepempty)b("#"+b.jgrid.jqID(this.p.id)+" tbody:first tr:gt(0)").remove();else{var f=b("#"+b.jgrid.jqID(this.p.id)+" tbody:first tr:first")[0];b("#"+b.jgrid.jqID(this.p.id)+" tbody:first").empty().append(f)}this.p.footerrow&&e&&b(".ui-jqgrid-ftable td",this.grid.sDiv).html("&#160;");this.p.selrow=null;this.p.selarrrow=[];this.p.savedRow=[];this.p.records=0;this.p.page=1;this.p.lastpage=0;this.p.reccount=0;this.p.data=[];this.p._index={};this.updatepager(!0,!1)}})},getInd:function(e,
f){var c=!1,d;this.each(function(){(d=b(this).jqGrid("getGridRowById",e))&&(c=!0===f?d:d.rowIndex)});return c},bindKeys:function(e){var f=b.extend({onEnter:null,onSpace:null,onLeftKey:null,onRightKey:null,scrollingRows:!0},e||{});return this.each(function(){var c=this;b("body").is("[role]")||b("body").attr("role","application");c.p.scrollrows=f.scrollingRows;b(c).keydown(function(d){var a=b(c).find("tr[tabindex=0]")[0],e,g,h,k=c.p.treeReader.expanded_field;if(a)if(h=c.p._index[b.jgrid.stripPref(c.p.idPrefix,
a.id)],37===d.keyCode||38===d.keyCode||39===d.keyCode||40===d.keyCode){if(38===d.keyCode){g=a.previousSibling;e="";if(g)if(b(g).is(":hidden"))for(;g;){if(g=g.previousSibling,!b(g).is(":hidden")&&b(g).hasClass("jqgrow")){e=g.id;break}}else e=g.id;b(c).jqGrid("setSelection",e,!0,d);d.preventDefault()}if(40===d.keyCode){g=a.nextSibling;e="";if(g)if(b(g).is(":hidden"))for(;g;){if(g=g.nextSibling,!b(g).is(":hidden")&&b(g).hasClass("jqgrow")){e=g.id;break}}else e=g.id;b(c).jqGrid("setSelection",e,!0,d);
d.preventDefault()}37===d.keyCode&&(c.p.treeGrid&&c.p.data[h][k]&&b(a).find("div.treeclick").trigger("click"),b(c).triggerHandler("jqGridKeyLeft",[c.p.selrow]),b.isFunction(f.onLeftKey)&&f.onLeftKey.call(c,c.p.selrow));39===d.keyCode&&(c.p.treeGrid&&!c.p.data[h][k]&&b(a).find("div.treeclick").trigger("click"),b(c).triggerHandler("jqGridKeyRight",[c.p.selrow]),b.isFunction(f.onRightKey)&&f.onRightKey.call(c,c.p.selrow))}else 13===d.keyCode?(b(c).triggerHandler("jqGridKeyEnter",[c.p.selrow]),b.isFunction(f.onEnter)&&
f.onEnter.call(c,c.p.selrow)):32===d.keyCode&&(b(c).triggerHandler("jqGridKeySpace",[c.p.selrow]),b.isFunction(f.onSpace)&&f.onSpace.call(c,c.p.selrow))})})},unbindKeys:function(){return this.each(function(){b(this).unbind("keydown")})},getLocalRow:function(e){var f=!1,c;this.each(function(){void 0!==e&&(c=this.p._index[b.jgrid.stripPref(this.p.idPrefix,e)],0<=c&&(f=this.p.data[c]))});return f}})})(jQuery);
(function(a){a.fmatter={};a.extend(a.fmatter,{isBoolean:function(a){return"boolean"===typeof a},isObject:function(c){return c&&("object"===typeof c||a.isFunction(c))||!1},isString:function(a){return"string"===typeof a},isNumber:function(a){return"number"===typeof a&&isFinite(a)},isValue:function(a){return this.isObject(a)||this.isString(a)||this.isNumber(a)||this.isBoolean(a)},isEmpty:function(c){if(!this.isString(c)&&this.isValue(c))return!1;if(!this.isValue(c))return!0;c=a.trim(c).replace(/\&nbsp\;/ig,
"").replace(/\&#160\;/ig,"");return""===c}});a.fn.fmatter=function(c,b,d,e,f){var g=b;d=a.extend({},a.jgrid.formatter,d);try{g=a.fn.fmatter[c].call(this,b,d,e,f)}catch(h){}return g};a.fmatter.util={NumberFormat:function(c,b){a.fmatter.isNumber(c)||(c*=1);if(a.fmatter.isNumber(c)){var d=0>c,e=String(c),f=b.decimalSeparator||".",g;if(a.fmatter.isNumber(b.decimalPlaces)){var h=b.decimalPlaces,e=Math.pow(10,h),e=String(Math.round(c*e)/e);g=e.lastIndexOf(".");if(0<h)for(0>g?(e+=f,g=e.length-1):"."!==f&&
(e=e.replace(".",f));e.length-1-g<h;)e+="0"}if(b.thousandsSeparator){h=b.thousandsSeparator;g=e.lastIndexOf(f);g=-1<g?g:e.length;var f=e.substring(g),l=-1,k;for(k=g;0<k;k--)l++,0===l%3&&k!==g&&(!d||1<k)&&(f=h+f),f=e.charAt(k-1)+f;e=f}e=b.prefix?b.prefix+e:e;return e=b.suffix?e+b.suffix:e}return c}};a.fn.fmatter.defaultFormat=function(c,b){return a.fmatter.isValue(c)&&""!==c?c:b.defaultValue||"&#160;"};a.fn.fmatter.email=function(c,b){return a.fmatter.isEmpty(c)?a.fn.fmatter.defaultFormat(c,b):'<a href="mailto:'+
c+'">'+c+"</a>"};a.fn.fmatter.checkbox=function(c,b){var d=a.extend({},b.checkbox),e;void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(d=a.extend({},d,b.colModel.formatoptions));e=!0===d.disabled?'disabled="disabled"':"";if(a.fmatter.isEmpty(c)||void 0===c)c=a.fn.fmatter.defaultFormat(c,d);c=String(c);c=(c+"").toLowerCase();return'<input type="checkbox" '+(0>c.search(/(false|f|0|no|n|off|undefined)/i)?" checked='checked' ":"")+' value="'+c+'" offval="no" '+e+"/>"};a.fn.fmatter.link=function(c,
b){var d={target:b.target},e="";void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(d=a.extend({},d,b.colModel.formatoptions));d.target&&(e="target="+d.target);return a.fmatter.isEmpty(c)?a.fn.fmatter.defaultFormat(c,b):"<a "+e+' href="'+c+'">'+c+"</a>"};a.fn.fmatter.showlink=function(c,b){var d={baseLinkUrl:b.baseLinkUrl,showAction:b.showAction,addParam:b.addParam||"",target:b.target,idName:b.idName},e="";void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(d=a.extend({},d,b.colModel.formatoptions));
d.target&&(e="target="+d.target);d=d.baseLinkUrl+d.showAction+"?"+d.idName+"="+b.rowId+d.addParam;return a.fmatter.isString(c)||a.fmatter.isNumber(c)?"<a "+e+' href="'+d+'">'+c+"</a>":a.fn.fmatter.defaultFormat(c,b)};a.fn.fmatter.integer=function(c,b){var d=a.extend({},b.integer);void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(d=a.extend({},d,b.colModel.formatoptions));return a.fmatter.isEmpty(c)?d.defaultValue:a.fmatter.util.NumberFormat(c,d)};a.fn.fmatter.number=function(c,b){var d=a.extend({},
b.number);void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(d=a.extend({},d,b.colModel.formatoptions));return a.fmatter.isEmpty(c)?d.defaultValue:a.fmatter.util.NumberFormat(c,d)};a.fn.fmatter.currency=function(c,b){var d=a.extend({},b.currency);void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(d=a.extend({},d,b.colModel.formatoptions));return a.fmatter.isEmpty(c)?d.defaultValue:a.fmatter.util.NumberFormat(c,d)};a.fn.fmatter.date=function(c,b,d,e){d=a.extend({},b.date);void 0!==b.colModel&&
void 0!==b.colModel.formatoptions&&(d=a.extend({},d,b.colModel.formatoptions));return d.reformatAfterEdit||"edit"!==e?a.fmatter.isEmpty(c)?a.fn.fmatter.defaultFormat(c,b):a.jgrid.parseDate(d.srcformat,c,d.newformat,d):a.fn.fmatter.defaultFormat(c,b)};a.fn.fmatter.select=function(c,b){c=String(c);var d=!1,e=[],f,g;void 0!==b.colModel.formatoptions?(d=b.colModel.formatoptions.value,f=void 0===b.colModel.formatoptions.separator?":":b.colModel.formatoptions.separator,g=void 0===b.colModel.formatoptions.delimiter?
";":b.colModel.formatoptions.delimiter):void 0!==b.colModel.editoptions&&(d=b.colModel.editoptions.value,f=void 0===b.colModel.editoptions.separator?":":b.colModel.editoptions.separator,g=void 0===b.colModel.editoptions.delimiter?";":b.colModel.editoptions.delimiter);if(d){var h=!0===b.colModel.editoptions.multiple?!0:!1,l=[];h&&(l=c.split(","),l=a.map(l,function(b){return a.trim(b)}));if(a.fmatter.isString(d)){var k=d.split(g),m=0,n;for(n=0;n<k.length;n++)if(g=k[n].split(f),2<g.length&&(g[1]=a.map(g,
function(a,b){if(0<b)return a}).join(f)),h)-1<a.inArray(g[0],l)&&(e[m]=g[1],m++);else if(a.trim(g[0])===a.trim(c)){e[0]=g[1];break}}else a.fmatter.isObject(d)&&(h?e=a.map(l,function(a){return d[a]}):e[0]=d[c]||"")}c=e.join(", ");return""===c?a.fn.fmatter.defaultFormat(c,b):c};a.fn.fmatter.rowactions=function(c){var b=a(this).closest("tr.jqgrow"),d=b.attr("id"),e=a(this).closest("table.ui-jqgrid-btable").attr("id").replace(/_frozen([^_]*)$/,"$1"),e=a("#"+e),f=e[0],g=f.p,h=g.colModel[a.jgrid.getCellIndex(this)],
l=h.frozen?a("tr#"+d+" td:eq("+a.jgrid.getCellIndex(this)+") > div",e):a(this).parent(),k={extraparam:{}},m=function(b){a.isFunction(k.afterRestore)&&k.afterRestore.call(f,b);l.find("div.ui-inline-edit,div.ui-inline-del").show();l.find("div.ui-inline-save,div.ui-inline-cancel").hide()};void 0!==h.formatoptions&&(k=a.extend(k,h.formatoptions));void 0!==g.editOptions&&(k.editOptions=g.editOptions);void 0!==g.delOptions&&(k.delOptions=g.delOptions);b.hasClass("jqgrid-new-row")&&(k.extraparam[g.prmNames.oper]=
g.prmNames.addoper);b={keys:k.keys,oneditfunc:k.onEdit,successfunc:k.onSuccess,url:k.url,extraparam:k.extraparam,aftersavefunc:function(b,c){a.isFunction(k.afterSave)&&k.afterSave.call(f,b,c);l.find("div.ui-inline-edit,div.ui-inline-del").show();l.find("div.ui-inline-save,div.ui-inline-cancel").hide()},errorfunc:k.onError,afterrestorefunc:m,restoreAfterError:k.restoreAfterError,mtype:k.mtype};switch(c){case "edit":e.jqGrid("editRow",d,b);l.find("div.ui-inline-edit,div.ui-inline-del").hide();l.find("div.ui-inline-save,div.ui-inline-cancel").show();
e.triggerHandler("jqGridAfterGridComplete");break;case "save":e.jqGrid("saveRow",d,b)&&(l.find("div.ui-inline-edit,div.ui-inline-del").show(),l.find("div.ui-inline-save,div.ui-inline-cancel").hide(),e.triggerHandler("jqGridAfterGridComplete"));break;case "cancel":e.jqGrid("restoreRow",d,m);l.find("div.ui-inline-edit,div.ui-inline-del").show();l.find("div.ui-inline-save,div.ui-inline-cancel").hide();e.triggerHandler("jqGridAfterGridComplete");break;case "del":e.jqGrid("delGridRow",d,k.delOptions);
break;case "formedit":e.jqGrid("setSelection",d),e.jqGrid("editGridRow",d,k.editOptions)}};a.fn.fmatter.actions=function(c,b){var d={keys:!1,editbutton:!0,delbutton:!0,editformbutton:!1},e=b.rowId,f="";void 0!==b.colModel.formatoptions&&(d=a.extend(d,b.colModel.formatoptions));if(void 0===e||a.fmatter.isEmpty(e))return"";d.editformbutton?f+="<div title='"+a.jgrid.nav.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+("id='jEditButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'formedit'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ")+
"><span class='ui-icon ui-icon-pencil'></span></div>":d.editbutton&&(f+="<div title='"+a.jgrid.nav.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+("id='jEditButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'edit'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover') ")+"><span class='ui-icon ui-icon-pencil'></span></div>");d.delbutton&&(f+="<div title='"+a.jgrid.nav.deltitle+"' style='float:left;margin-left:5px;' class='ui-pg-div ui-inline-del' "+
("id='jDeleteButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'del'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ")+"><span class='ui-icon ui-icon-trash'></span></div>");f+="<div title='"+a.jgrid.edit.bSubmit+"' style='float:left;display:none' class='ui-pg-div ui-inline-save' "+("id='jSaveButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'save'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ")+
"><span class='ui-icon ui-icon-disk'></span></div>";f+="<div title='"+a.jgrid.edit.bCancel+"' style='float:left;display:none;margin-left:5px;' class='ui-pg-div ui-inline-cancel' "+("id='jCancelButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'cancel'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ")+"><span class='ui-icon ui-icon-cancel'></span></div>";return"<div style='margin-left:8px;'>"+f+"</div>"};a.unformat=function(c,
b,d,e){var f,g=b.colModel.formatter,h=b.colModel.formatoptions||{},l=/([\.\*\_\'\(\)\{\}\+\?\\])/g,k=b.colModel.unformat||a.fn.fmatter[g]&&a.fn.fmatter[g].unformat;if(void 0!==k&&a.isFunction(k))f=k.call(this,a(c).text(),b,c);else if(void 0!==g&&a.fmatter.isString(g))switch(f=a.jgrid.formatter||{},g){case "integer":h=a.extend({},f.integer,h);b=h.thousandsSeparator.replace(l,"\\$1");b=RegExp(b,"g");f=a(c).text().replace(b,"");break;case "number":h=a.extend({},f.number,h);b=h.thousandsSeparator.replace(l,
"\\$1");b=RegExp(b,"g");f=a(c).text().replace(b,"").replace(h.decimalSeparator,".");break;case "currency":h=a.extend({},f.currency,h);b=h.thousandsSeparator.replace(l,"\\$1");b=RegExp(b,"g");f=a(c).text();h.prefix&&h.prefix.length&&(f=f.substr(h.prefix.length));h.suffix&&h.suffix.length&&(f=f.substr(0,f.length-h.suffix.length));f=f.replace(b,"").replace(h.decimalSeparator,".");break;case "checkbox":h=b.colModel.editoptions?b.colModel.editoptions.value.split(":"):["Yes","No"];f=a("input",c).is(":checked")?
h[0]:h[1];break;case "select":f=a.unformat.select(c,b,d,e);break;case "actions":return"";default:f=a(c).text()}return void 0!==f?f:!0===e?a(c).text():a.jgrid.htmlDecode(a(c).html())};a.unformat.select=function(c,b,d,e){d=[];c=a(c).text();if(!0===e)return c;e=a.extend({},void 0!==b.colModel.formatoptions?b.colModel.formatoptions:b.colModel.editoptions);b=void 0===e.separator?":":e.separator;var f=void 0===e.delimiter?";":e.delimiter;if(e.value){var g=e.value;e=!0===e.multiple?!0:!1;var h=[];e&&(h=
c.split(","),h=a.map(h,function(b){return a.trim(b)}));if(a.fmatter.isString(g)){var l=g.split(f),k=0,m;for(m=0;m<l.length;m++)if(f=l[m].split(b),2<f.length&&(f[1]=a.map(f,function(a,b){if(0<b)return a}).join(b)),e)-1<a.inArray(f[1],h)&&(d[k]=f[0],k++);else if(a.trim(f[1])===a.trim(c)){d[0]=f[0];break}}else if(a.fmatter.isObject(g)||a.isArray(g))e||(h[0]=c),d=a.map(h,function(b){var c;a.each(g,function(a,d){if(d===b)return c=a,!1});if(void 0!==c)return c});return d.join(", ")}return c||""};a.unformat.date=
function(c,b){var d=a.jgrid.formatter.date||{};void 0!==b.formatoptions&&(d=a.extend({},d,b.formatoptions));return a.fmatter.isEmpty(c)?a.fn.fmatter.defaultFormat(c,b):a.jgrid.parseDate(d.newformat,c,d.srcformat,d)}})(jQuery);
(function(a){a.jgrid.extend({getColProp:function(a){var c={},d=this[0];if(!d.grid)return!1;var d=d.p.colModel,h;for(h=0;h<d.length;h++)if(d[h].name===a){c=d[h];break}return c},setColProp:function(b,c){return this.each(function(){if(this.grid&&c){var d=this.p.colModel,h;for(h=0;h<d.length;h++)if(d[h].name===b){a.extend(!0,this.p.colModel[h],c);break}}})},sortGrid:function(a,c,d){return this.each(function(){var h=-1,k,e=!1;if(this.grid){a||(a=this.p.sortname);for(k=0;k<this.p.colModel.length;k++)if(this.p.colModel[k].index===
a||this.p.colModel[k].name===a){h=k;!0===this.p.frozenColumns&&!0===this.p.colModel[k].frozen&&(e=this.grid.fhDiv.find("#"+this.p.id+"_"+a));break}-1!==h&&(k=this.p.colModel[h].sortable,e||(e=this.grid.headers[h].el),"boolean"!==typeof k&&(k=!0),"boolean"!==typeof c&&(c=!1),k&&this.sortData("jqgh_"+this.p.id+"_"+a,h,c,d,e))}})},clearBeforeUnload:function(){return this.each(function(){var b=this.grid;a.isFunction(b.emptyRows)&&b.emptyRows.call(this,!0,!0);a(document).unbind("mouseup.jqGrid"+this.p.id);
a(b.hDiv).unbind("mousemove");a(this).unbind();b.dragEnd=null;b.dragMove=null;b.dragStart=null;b.emptyRows=null;b.populate=null;b.populateVisible=null;b.scrollGrid=null;b.selectionPreserver=null;b.bDiv=null;b.cDiv=null;b.hDiv=null;b.cols=null;var c,d=b.headers.length;for(c=0;c<d;c++)b.headers[c].el=null;this.grid=this.addJSONData=this.addXmlData=this.formatter=this.constructTr=this.setHeadCheckBox=this.refreshIndex=this.updatepager=this.sortData=this.formatCol=null})},GridDestroy:function(){return this.each(function(){if(this.grid){this.p.pager&&
a(this.p.pager).remove();try{a(this).jqGrid("clearBeforeUnload"),a("#gbox_"+a.jgrid.jqID(this.id)).remove()}catch(b){}}})},GridUnload:function(){return this.each(function(){if(this.grid){var b=a(this).attr("id"),c=a(this).attr("class");this.p.pager&&a(this.p.pager).empty().removeClass("ui-state-default ui-jqgrid-pager ui-corner-bottom");var d=document.createElement("table");a(d).attr({id:b});d.className=c;b=a.jgrid.jqID(this.id);a(d).removeClass("ui-jqgrid-btable");1===a(this.p.pager).parents("#gbox_"+
b).length?(a(d).insertBefore("#gbox_"+b).show(),a(this.p.pager).insertBefore("#gbox_"+b)):a(d).insertBefore("#gbox_"+b).show();a(this).jqGrid("clearBeforeUnload");a("#gbox_"+b).remove()}})},setGridState:function(b){return this.each(function(){this.grid&&("hidden"===b?(a(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv","#gview_"+a.jgrid.jqID(this.p.id)).slideUp("fast"),this.p.pager&&a(this.p.pager).slideUp("fast"),this.p.toppager&&a(this.p.toppager).slideUp("fast"),!0===this.p.toolbar[0]&&("both"===this.p.toolbar[1]&&
a(this.grid.ubDiv).slideUp("fast"),a(this.grid.uDiv).slideUp("fast")),this.p.footerrow&&a(".ui-jqgrid-sdiv","#gbox_"+a.jgrid.jqID(this.p.id)).slideUp("fast"),a(".ui-jqgrid-titlebar-close span",this.grid.cDiv).removeClass("ui-icon-circle-triangle-n").addClass("ui-icon-circle-triangle-s"),this.p.gridstate="hidden"):"visible"===b&&(a(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv","#gview_"+a.jgrid.jqID(this.p.id)).slideDown("fast"),this.p.pager&&a(this.p.pager).slideDown("fast"),this.p.toppager&&a(this.p.toppager).slideDown("fast"),
!0===this.p.toolbar[0]&&("both"===this.p.toolbar[1]&&a(this.grid.ubDiv).slideDown("fast"),a(this.grid.uDiv).slideDown("fast")),this.p.footerrow&&a(".ui-jqgrid-sdiv","#gbox_"+a.jgrid.jqID(this.p.id)).slideDown("fast"),a(".ui-jqgrid-titlebar-close span",this.grid.cDiv).removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-n"),this.p.gridstate="visible"))})},filterToolbar:function(b){b=a.extend({autosearch:!0,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,
searchurl:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",searchOperators:!1,resetIcon:"x",operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^","in":"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#"}},a.jgrid.search,b||{});return this.each(function(){var c=this;if(!this.ftoolbar){var d=function(){var d={},f=0,g,m,e={},q;a.each(c.p.colModel,function(){var l=a("#gs_"+a.jgrid.jqID(this.name),!0===this.frozen&&!0===c.p.frozenColumns?c.grid.fhDiv:c.grid.hDiv);m=this.index||
this.name;q=b.searchOperators?l.parent().prev().children("a").attr("soper")||b.defaultSearch:this.searchoptions&&this.searchoptions.sopt?this.searchoptions.sopt[0]:"select"===this.stype?"eq":b.defaultSearch;if((g="custom"===this.stype&&a.isFunction(this.searchoptions.custom_value)&&0<l.length&&"SPAN"===l[0].nodeName.toUpperCase()?this.searchoptions.custom_value.call(c,l.children(".customelement:first"),"get"):l.val())||"nu"===q||"nn"===q)d[m]=g,e[m]=q,f++;else try{delete c.p.postData[m]}catch(k){}});
var k=0<f?!0:!1;if(!0===b.stringResult||"local"===c.p.datatype){var l='{"groupOp":"'+b.groupOp+'","rules":[',n=0;a.each(d,function(a,b){0<n&&(l+=",");l+='{"field":"'+a+'",';l+='"op":"'+e[a]+'",';l+='"data":"'+(b+"").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}';n++});l+="]}";a.extend(c.p.postData,{filters:l});a.each(["searchField","searchString","searchOper"],function(a,b){c.p.postData.hasOwnProperty(b)&&delete c.p.postData[b]})}else a.extend(c.p.postData,d);var r;c.p.searchurl&&(r=c.p.url,a(c).jqGrid("setGridParam",
{url:c.p.searchurl}));var h="stop"===a(c).triggerHandler("jqGridToolbarBeforeSearch")?!0:!1;!h&&a.isFunction(b.beforeSearch)&&(h=b.beforeSearch.call(c));h||a(c).jqGrid("setGridParam",{search:k}).trigger("reloadGrid",[{page:1}]);r&&a(c).jqGrid("setGridParam",{url:r});a(c).triggerHandler("jqGridToolbarAfterSearch");a.isFunction(b.afterSearch)&&b.afterSearch.call(c)},h=function(e,f,g){a("#sopt_menu").remove();f=parseInt(f,10);g=parseInt(g,10)+18;f='<ul id="sopt_menu" class="ui-search-menu" role="menu" tabindex="0" style="font-size:'+
(a(".ui-jqgrid-view").css("font-size")||"11px")+";left:"+f+"px;top:"+g+'px;">';g=a(e).attr("soper");var k,h=[],q,p=0,l=a(e).attr("colname");for(k=c.p.colModel.length;p<k&&c.p.colModel[p].name!==l;)p++;p=c.p.colModel[p];l=a.extend({},p.searchoptions);l.sopt||(l.sopt=[],l.sopt[0]="select"===p.stype?"eq":b.defaultSearch);a.each(b.odata,function(){h.push(this.oper)});for(p=0;p<l.sopt.length;p++)q=a.inArray(l.sopt[p],h),-1!==q&&(k=g===b.odata[q].oper?"ui-state-highlight":"",f+='<li class="ui-menu-item '+
k+'" role="presentation"><a class="ui-corner-all g-menu-item" tabindex="0" role="menuitem" value="'+b.odata[q].oper+'" oper="'+b.operands[b.odata[q].oper]+'"><table cellspacing="0" cellpadding="0" border="0"><tr><td width="25px">'+b.operands[b.odata[q].oper]+"</td><td>"+b.odata[q].text+"</td></tr></table></a></li>");f+="</ul>";a("body").append(f);a("#sopt_menu").addClass("ui-menu ui-widget ui-widget-content ui-corner-all");a("#sopt_menu > li > a").hover(function(){a(this).addClass("ui-state-hover")},
function(){a(this).removeClass("ui-state-hover")}).click(function(f){f=a(this).attr("value");var g=a(this).attr("oper");a(c).triggerHandler("jqGridToolbarSelectOper",[f,g,e]);a("#sopt_menu").hide();a(e).text(g).attr("soper",f);!0===b.autosearch&&(g=a(e).parent().next().children()[0],(a(g).val()||"nu"===f||"nn"===f)&&d())})},k=a("<tr class='ui-search-toolbar' role='rowheader'></tr>"),e;a.each(c.p.colModel,function(h){var f=this,g,m;m="";var x="=",q,p=a("<th role='columnheader' class='ui-state-default ui-th-column ui-th-"+
c.p.direction+"'></th>"),l=a("<div style='position:relative;height:100%;padding-right:0.3em;padding-left:0.3em;'></div>"),n=a("<table class='ui-search-table' cellspacing='0'><tr><td class='ui-search-oper'></td><td class='ui-search-input'></td><td class='ui-search-clear'></td></tr></table>");!0===this.hidden&&a(p).css("display","none");this.search=!1===this.search?!1:!0;void 0===this.stype&&(this.stype="text");g=a.extend({},this.searchoptions||{});if(this.search){if(b.searchOperators){m=g.sopt?g.sopt[0]:
"select"===f.stype?"eq":b.defaultSearch;for(q=0;q<b.odata.length;q++)if(b.odata[q].oper===m){x=b.operands[m]||"";break}m="<a title='"+(null!=g.searchtitle?g.searchtitle:b.operandTitle)+"' style='padding-right: 0.5em;' soper='"+m+"' class='soptclass' colname='"+this.name+"'>"+x+"</a>"}a("td:eq(0)",n).attr("colindex",h).append(m);void 0===g.clearSearch&&(g.clearSearch=!0);g.clearSearch?(m=b.resetTitle||"Clear Search Value",a("td:eq(2)",n).append("<a title='"+m+"' style='padding-right: 0.3em;padding-left: 0.3em;' class='clearsearchclass'>"+
b.resetIcon+"</a>")):a("td:eq(2)",n).hide();switch(this.stype){case "select":if(m=this.surl||g.dataUrl)a(l).append(n),a.ajax(a.extend({url:m,dataType:"html",success:function(e){void 0!==g.buildSelect?(e=g.buildSelect(e))&&a("td:eq(1)",n).append(e):a("td:eq(1)",n).append(e);void 0!==g.defaultValue&&a("select",l).val(g.defaultValue);a("select",l).attr({name:f.index||f.name,id:"gs_"+f.name});g.attr&&a("select",l).attr(g.attr);a("select",l).css({width:"100%"});a.jgrid.bindEv.call(c,a("select",l)[0],g);
!0===b.autosearch&&a("select",l).change(function(){d();return!1});e=null}},a.jgrid.ajaxOptions,c.p.ajaxSelectOptions||{}));else{var r,w,u;f.searchoptions?(r=void 0===f.searchoptions.value?"":f.searchoptions.value,w=void 0===f.searchoptions.separator?":":f.searchoptions.separator,u=void 0===f.searchoptions.delimiter?";":f.searchoptions.delimiter):f.editoptions&&(r=void 0===f.editoptions.value?"":f.editoptions.value,w=void 0===f.editoptions.separator?":":f.editoptions.separator,u=void 0===f.editoptions.delimiter?
";":f.editoptions.delimiter);if(r){var t=document.createElement("select");t.style.width="100%";a(t).attr({name:f.index||f.name,id:"gs_"+f.name});var v;if("string"===typeof r)for(m=r.split(u),v=0;v<m.length;v++)r=m[v].split(w),u=document.createElement("option"),u.value=r[0],u.innerHTML=r[1],t.appendChild(u);else if("object"===typeof r)for(v in r)r.hasOwnProperty(v)&&(u=document.createElement("option"),u.value=v,u.innerHTML=r[v],t.appendChild(u));void 0!==g.defaultValue&&a(t).val(g.defaultValue);g.attr&&
a(t).attr(g.attr);a(l).append(n);a.jgrid.bindEv.call(c,t,g);a("td:eq(1)",n).append(t);!0===b.autosearch&&a(t).change(function(){d();return!1})}}break;case "text":w=void 0!==g.defaultValue?g.defaultValue:"";a("td:eq(1)",n).append("<input type='text' style='width:100%;padding:0px;' name='"+(f.index||f.name)+"' id='gs_"+f.name+"' value='"+w+"'/>");a(l).append(n);g.attr&&a("input",l).attr(g.attr);a.jgrid.bindEv.call(c,a("input",l)[0],g);!0===b.autosearch&&(b.searchOnEnter?a("input",l).keypress(function(a){return 13===
(a.charCode||a.keyCode||0)?(d(),!1):this}):a("input",l).keydown(function(a){switch(a.which){case 13:return!1;case 9:case 16:case 37:case 38:case 39:case 40:case 27:break;default:e&&clearTimeout(e),e=setTimeout(function(){d()},500)}}));break;case "custom":a("td:eq(1)",n).append("<span style='width:95%;padding:0px;' name='"+(f.index||f.name)+"' id='gs_"+f.name+"'/>");a(l).append(n);try{if(a.isFunction(g.custom_element))if(t=g.custom_element.call(c,void 0!==g.defaultValue?g.defaultValue:"",g))t=a(t).addClass("customelement"),
a(l).find(">span").append(t);else throw"e2";else throw"e1";}catch(y){"e1"===y&&a.jgrid.info_dialog(a.jgrid.errors.errcap,"function 'custom_element' "+a.jgrid.edit.msg.nodefined,a.jgrid.edit.bClose),"e2"===y?a.jgrid.info_dialog(a.jgrid.errors.errcap,"function 'custom_element' "+a.jgrid.edit.msg.novalue,a.jgrid.edit.bClose):a.jgrid.info_dialog(a.jgrid.errors.errcap,"string"===typeof y?y:y.message,a.jgrid.edit.bClose)}}}a(p).append(l);a(k).append(p);b.searchOperators||a("td:eq(0)",n).hide()});a("table thead",
c.grid.hDiv).append(k);b.searchOperators&&(a(".soptclass",k).click(function(b){var c=a(this).offset();h(this,c.left,c.top);b.stopPropagation()}),a("body").on("click",function(b){"soptclass"!==b.target.className&&a("#sopt_menu").hide()}));a(".clearsearchclass",k).click(function(e){e=a(this).parents("tr:first");var f=parseInt(a("td.ui-search-oper",e).attr("colindex"),10),g=a.extend({},c.p.colModel[f].searchoptions||{}),g=g.defaultValue?g.defaultValue:"";"select"===c.p.colModel[f].stype?g?a("td.ui-search-input select",
e).val(g):a("td.ui-search-input select",e)[0].selectedIndex=0:a("td.ui-search-input input",e).val(g);!0===b.autosearch&&d()});this.ftoolbar=!0;this.triggerToolbar=d;this.clearToolbar=function(d){var f={},g=0,e;d="boolean"!==typeof d?!0:d;a.each(c.p.colModel,function(){var b,d=a("#gs_"+a.jgrid.jqID(this.name),!0===this.frozen&&!0===c.p.frozenColumns?c.grid.fhDiv:c.grid.hDiv);this.searchoptions&&void 0!==this.searchoptions.defaultValue&&(b=this.searchoptions.defaultValue);e=this.index||this.name;switch(this.stype){case "select":d.find("option").each(function(c){0===
c&&(this.selected=!0);if(a(this).val()===b)return this.selected=!0,!1});if(void 0!==b)f[e]=b,g++;else try{delete c.p.postData[e]}catch(h){}break;case "text":d.val(b||"");if(void 0!==b)f[e]=b,g++;else try{delete c.p.postData[e]}catch(k){}break;case "custom":a.isFunction(this.searchoptions.custom_value)&&0<d.length&&"SPAN"===d[0].nodeName.toUpperCase()&&this.searchoptions.custom_value.call(c,d.children(".customelement:first"),"set",b||"")}});var k=0<g?!0:!1;c.p.resetsearch=!0;if(!0===b.stringResult||
"local"===c.p.datatype){var h='{"groupOp":"'+b.groupOp+'","rules":[',p=0;a.each(f,function(a,b){0<p&&(h+=",");h+='{"field":"'+a+'",';h+='"op":"eq",';h+='"data":"'+(b+"").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}';p++});h+="]}";a.extend(c.p.postData,{filters:h});a.each(["searchField","searchString","searchOper"],function(a,b){c.p.postData.hasOwnProperty(b)&&delete c.p.postData[b]})}else a.extend(c.p.postData,f);var l;c.p.searchurl&&(l=c.p.url,a(c).jqGrid("setGridParam",{url:c.p.searchurl}));var n=
"stop"===a(c).triggerHandler("jqGridToolbarBeforeClear")?!0:!1;!n&&a.isFunction(b.beforeClear)&&(n=b.beforeClear.call(c));n||d&&a(c).jqGrid("setGridParam",{search:k}).trigger("reloadGrid",[{page:1}]);l&&a(c).jqGrid("setGridParam",{url:l});a(c).triggerHandler("jqGridToolbarAfterClear");a.isFunction(b.afterClear)&&b.afterClear()};this.toggleToolbar=function(){var b=a("tr.ui-search-toolbar",c.grid.hDiv),d=!0===c.p.frozenColumns?a("tr.ui-search-toolbar",c.grid.fhDiv):!1;"none"===b.css("display")?(b.show(),
d&&d.show()):(b.hide(),d&&d.hide())}}})},destroyFilterToolbar:function(){return this.each(function(){this.ftoolbar&&(this.toggleToolbar=this.clearToolbar=this.triggerToolbar=null,this.ftoolbar=!1,a(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove())})},destroyGroupHeader:function(b){void 0===b&&(b=!0);return this.each(function(){var c,d,h,k,e,s;d=this.grid;var f=a("table.ui-jqgrid-htable thead",d.hDiv),g=this.p.colModel;if(d){a(this).unbind(".setGroupHeaders");c=a("<tr>",{role:"rowheader"}).addClass("ui-jqgrid-labels");
k=d.headers;d=0;for(h=k.length;d<h;d++){e=g[d].hidden?"none":"";e=a(k[d].el).width(k[d].width).css("display",e);try{e.removeAttr("rowSpan")}catch(m){e.attr("rowSpan",1)}c.append(e);s=e.children("span.ui-jqgrid-resize");0<s.length&&(s[0].style.height="");e.children("div")[0].style.top=""}a(f).children("tr.ui-jqgrid-labels").remove();a(f).prepend(c);!0===b&&a(this).jqGrid("setGridParam",{groupHeader:null})}})},setGroupHeaders:function(b){b=a.extend({useColSpanStyle:!1,groupHeaders:[]},b||{});return this.each(function(){this.p.groupHeader=
b;var c,d,h=0,k,e,s,f,g,m=this.p.colModel,x=m.length,q=this.grid.headers,p=a("table.ui-jqgrid-htable",this.grid.hDiv),l=p.children("thead").children("tr.ui-jqgrid-labels:last").addClass("jqg-second-row-header");k=p.children("thead");var n=p.find(".jqg-first-row-header");void 0===n[0]?n=a("<tr>",{role:"row","aria-hidden":"true"}).addClass("jqg-first-row-header").css("height","auto"):n.empty();var r,w=function(a,b){var c=b.length,d;for(d=0;d<c;d++)if(b[d].startColumnName===a)return d;return-1};a(this).prepend(k);
k=a("<tr>",{role:"rowheader"}).addClass("ui-jqgrid-labels jqg-third-row-header");for(c=0;c<x;c++)if(s=q[c].el,f=a(s),d=m[c],e={height:"0px",width:q[c].width+"px",display:d.hidden?"none":""},a("<th>",{role:"gridcell"}).css(e).addClass("ui-first-th-"+this.p.direction).appendTo(n),s.style.width="",e=w(d.name,b.groupHeaders),0<=e){e=b.groupHeaders[e];h=e.numberOfColumns;g=e.titleText;for(e=d=0;e<h&&c+e<x;e++)m[c+e].hidden||d++;e=a("<th>").attr({role:"columnheader"}).addClass("ui-state-default ui-th-column-header ui-th-"+
this.p.direction).css({height:"22px","border-top":"0 none"}).html(g);0<d&&e.attr("colspan",String(d));this.p.headertitles&&e.attr("title",e.text());0===d&&e.hide();f.before(e);k.append(s);h-=1}else 0===h?b.useColSpanStyle?f.attr("rowspan","2"):(a("<th>",{role:"columnheader"}).addClass("ui-state-default ui-th-column-header ui-th-"+this.p.direction).css({display:d.hidden?"none":"","border-top":"0 none"}).insertBefore(f),k.append(s)):(k.append(s),h--);m=a(this).children("thead");m.prepend(n);k.insertAfter(l);
p.append(m);b.useColSpanStyle&&(p.find("span.ui-jqgrid-resize").each(function(){var b=a(this).parent();b.is(":visible")&&(this.style.cssText="height: "+b.height()+"px !important; cursor: col-resize;")}),p.find("div.ui-jqgrid-sortable").each(function(){var b=a(this),c=b.parent();c.is(":visible")&&c.is(":has(span.ui-jqgrid-resize)")&&b.css("top",(c.height()-b.outerHeight())/2+"px")}));r=m.find("tr.jqg-first-row-header");a(this).bind("jqGridResizeStop.setGroupHeaders",function(a,b,c){r.find("th").eq(c).width(b)})})},
setFrozenColumns:function(){return this.each(function(){if(this.grid){var b=this,c=b.p.colModel,d=0,h=c.length,k=-1,e=!1;if(!0!==b.p.subGrid&&!0!==b.p.treeGrid&&!0!==b.p.cellEdit&&!b.p.sortable&&!b.p.scroll){b.p.rownumbers&&d++;for(b.p.multiselect&&d++;d<h;){if(!0===c[d].frozen)e=!0,k=d;else break;d++}if(0<=k&&e){c=b.p.caption?a(b.grid.cDiv).outerHeight():0;d=a(".ui-jqgrid-htable","#gview_"+a.jgrid.jqID(b.p.id)).height();b.p.toppager&&(c+=a(b.grid.topDiv).outerHeight());!0===b.p.toolbar[0]&&"bottom"!==
b.p.toolbar[1]&&(c+=a(b.grid.uDiv).outerHeight());b.grid.fhDiv=a('<div style="position:absolute;left:0px;top:'+c+"px;height:"+d+'px;" class="frozen-div ui-state-default ui-jqgrid-hdiv"></div>');b.grid.fbDiv=a('<div style="position:absolute;left:0px;top:'+(parseInt(c,10)+parseInt(d,10)+1)+'px;overflow-y:hidden" class="frozen-bdiv ui-jqgrid-bdiv"></div>');a("#gview_"+a.jgrid.jqID(b.p.id)).append(b.grid.fhDiv);c=a(".ui-jqgrid-htable","#gview_"+a.jgrid.jqID(b.p.id)).clone(!0);if(b.p.groupHeader){a("tr.jqg-first-row-header, tr.jqg-third-row-header",
c).each(function(){a("th:gt("+k+")",this).remove()});var s=-1,f=-1,g,m;a("tr.jqg-second-row-header th",c).each(function(){g=parseInt(a(this).attr("colspan"),10);if(m=parseInt(a(this).attr("rowspan"),10))s++,f++;g&&(s+=g,f++);if(s===k)return!1});s!==k&&(f=k);a("tr.jqg-second-row-header",c).each(function(){a("th:gt("+f+")",this).remove()})}else a("tr",c).each(function(){a("th:gt("+k+")",this).remove()});a(c).width(1);a(b.grid.fhDiv).append(c).mousemove(function(a){if(b.grid.resizing)return b.grid.dragMove(a),
!1});a(b).bind("jqGridResizeStop.setFrozenColumns",function(c,d,e){c=a(".ui-jqgrid-htable",b.grid.fhDiv);a("th:eq("+e+")",c).width(d);c=a(".ui-jqgrid-btable",b.grid.fbDiv);a("tr:first td:eq("+e+")",c).width(d)});a(b).bind("jqGridSortCol.setFrozenColumns",function(c,d,e){c=a("tr.ui-jqgrid-labels:last th:eq("+b.p.lastsort+")",b.grid.fhDiv);d=a("tr.ui-jqgrid-labels:last th:eq("+e+")",b.grid.fhDiv);a("span.ui-grid-ico-sort",c).addClass("ui-state-disabled");a(c).attr("aria-selected","false");a("span.ui-icon-"+
b.p.sortorder,d).removeClass("ui-state-disabled");a(d).attr("aria-selected","true");b.p.viewsortcols[0]||b.p.lastsort===e||(a("span.s-ico",c).hide(),a("span.s-ico",d).show())});a("#gview_"+a.jgrid.jqID(b.p.id)).append(b.grid.fbDiv);a(b.grid.bDiv).scroll(function(){a(b.grid.fbDiv).scrollTop(a(this).scrollTop())});!0===b.p.hoverrows&&a("#"+a.jgrid.jqID(b.p.id)).unbind("mouseover").unbind("mouseout");a(b).bind("jqGridAfterGridComplete.setFrozenColumns",function(){a("#"+a.jgrid.jqID(b.p.id)+"_frozen").remove();
a(b.grid.fbDiv).height(a(b.grid.bDiv).height()-16);var c=a("#"+a.jgrid.jqID(b.p.id)).clone(!0);a("tr[role=row]",c).each(function(){a("td[role=gridcell]:gt("+k+")",this).remove()});a(c).width(1).attr("id",b.p.id+"_frozen");a(b.grid.fbDiv).append(c);!0===b.p.hoverrows&&(a("tr.jqgrow",c).hover(function(){a(this).addClass("ui-state-hover");a("#"+a.jgrid.jqID(this.id),"#"+a.jgrid.jqID(b.p.id)).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover");a("#"+a.jgrid.jqID(this.id),"#"+
a.jgrid.jqID(b.p.id)).removeClass("ui-state-hover")}),a("tr.jqgrow","#"+a.jgrid.jqID(b.p.id)).hover(function(){a(this).addClass("ui-state-hover");a("#"+a.jgrid.jqID(this.id),"#"+a.jgrid.jqID(b.p.id)+"_frozen").addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover");a("#"+a.jgrid.jqID(this.id),"#"+a.jgrid.jqID(b.p.id)+"_frozen").removeClass("ui-state-hover")}));c=null});b.grid.hDiv.loading||a(b).triggerHandler("jqGridAfterGridComplete");b.p.frozenColumns=!0}}}})},destroyFrozenColumns:function(){return this.each(function(){if(this.grid&&
!0===this.p.frozenColumns){a(this.grid.fhDiv).remove();a(this.grid.fbDiv).remove();this.grid.fhDiv=null;this.grid.fbDiv=null;a(this).unbind(".setFrozenColumns");if(!0===this.p.hoverrows){var b;a("#"+a.jgrid.jqID(this.p.id)).bind("mouseover",function(c){b=a(c.target).closest("tr.jqgrow");"ui-subgrid"!==a(b).attr("class")&&a(b).addClass("ui-state-hover")}).bind("mouseout",function(c){b=a(c.target).closest("tr.jqgrow");a(b).removeClass("ui-state-hover")})}this.p.frozenColumns=!1}})}})})(jQuery);
(function(a){a.extend(a.jgrid,{showModal:function(a){a.w.show()},closeModal:function(a){a.w.hide().attr("aria-hidden","true");a.o&&a.o.remove()},hideModal:function(d,b){b=a.extend({jqm:!0,gb:""},b||{});if(b.onClose){var c=b.gb&&"string"===typeof b.gb&&"#gbox_"===b.gb.substr(0,6)?b.onClose.call(a("#"+b.gb.substr(6))[0],d):b.onClose(d);if("boolean"===typeof c&&!c)return}if(a.fn.jqm&&!0===b.jqm)a(d).attr("aria-hidden","true").jqmHide();else{if(""!==b.gb)try{a(".jqgrid-overlay:first",b.gb).hide()}catch(g){}a(d).hide().attr("aria-hidden",
"true")}},findPos:function(a){var b=0,c=0;if(a.offsetParent){do b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent)}return[b,c]},createModal:function(d,b,c,g,e,h,f){c=a.extend(!0,{},a.jgrid.jqModal||{},c);var k=document.createElement("div"),l,m=this;f=a.extend({},f||{});l="rtl"===a(c.gbox).attr("dir")?!0:!1;k.className="ui-widget ui-widget-content ui-corner-all ui-jqdialog";k.id=d.themodal;var n=document.createElement("div");n.className="ui-jqdialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix";
n.id=d.modalhead;a(n).append("<span class='ui-jqdialog-title'>"+c.caption+"</span>");var q=a("<a class='ui-jqdialog-titlebar-close ui-corner-all'></a>").hover(function(){q.addClass("ui-state-hover")},function(){q.removeClass("ui-state-hover")}).append("<span class='ui-icon ui-icon-closethick'></span>");a(n).append(q);l?(k.dir="rtl",a(".ui-jqdialog-title",n).css("float","right"),a(".ui-jqdialog-titlebar-close",n).css("left","0.3em")):(k.dir="ltr",a(".ui-jqdialog-title",n).css("float","left"),a(".ui-jqdialog-titlebar-close",
n).css("right","0.3em"));var p=document.createElement("div");a(p).addClass("ui-jqdialog-content ui-widget-content").attr("id",d.modalcontent);a(p).append(b);k.appendChild(p);a(k).prepend(n);!0===h?a("body").append(k):"string"===typeof h?a(h).append(k):a(k).insertBefore(g);a(k).css(f);void 0===c.jqModal&&(c.jqModal=!0);b={};if(a.fn.jqm&&!0===c.jqModal)0===c.left&&0===c.top&&c.overlay&&(f=[],f=a.jgrid.findPos(e),c.left=f[0]+4,c.top=f[1]+4),b.top=c.top+"px",b.left=c.left;else if(0!==c.left||0!==c.top)b.left=
c.left,b.top=c.top+"px";a("a.ui-jqdialog-titlebar-close",n).click(function(){var b=a("#"+a.jgrid.jqID(d.themodal)).data("onClose")||c.onClose,e=a("#"+a.jgrid.jqID(d.themodal)).data("gbox")||c.gbox;m.hideModal("#"+a.jgrid.jqID(d.themodal),{gb:e,jqm:c.jqModal,onClose:b});return!1});0!==c.width&&c.width||(c.width=300);0!==c.height&&c.height||(c.height=200);c.zIndex||(g=a(g).parents("*[role=dialog]").filter(":first").css("z-index"),c.zIndex=g?parseInt(g,10)+2:950);g=0;l&&b.left&&!h&&(g=a(c.gbox).width()-
(isNaN(c.width)?0:parseInt(c.width,10))-8,b.left=parseInt(b.left,10)+parseInt(g,10));b.left&&(b.left+="px");a(k).css(a.extend({width:isNaN(c.width)?"auto":c.width+"px",height:isNaN(c.height)?"auto":c.height+"px",zIndex:c.zIndex,overflow:"hidden"},b)).attr({tabIndex:"-1",role:"dialog","aria-labelledby":d.modalhead,"aria-hidden":"true"});void 0===c.drag&&(c.drag=!0);void 0===c.resize&&(c.resize=!0);if(c.drag)if(a(n).css("cursor","move"),a.fn.jqDrag)a(k).jqDrag(n);else try{a(k).draggable({handle:a("#"+
a.jgrid.jqID(n.id))})}catch(r){}if(c.resize)if(a.fn.jqResize)a(k).append("<div class='jqResize ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se'></div>"),a("#"+a.jgrid.jqID(d.themodal)).jqResize(".jqResize",d.scrollelm?"#"+a.jgrid.jqID(d.scrollelm):!1);else try{a(k).resizable({handles:"se, sw",alsoResize:d.scrollelm?"#"+a.jgrid.jqID(d.scrollelm):!1})}catch(s){}!0===c.closeOnEscape&&a(k).keydown(function(b){27==b.which&&(b=a("#"+a.jgrid.jqID(d.themodal)).data("onClose")||c.onClose,
m.hideModal("#"+a.jgrid.jqID(d.themodal),{gb:c.gbox,jqm:c.jqModal,onClose:b}))})},viewModal:function(d,b){b=a.extend({toTop:!0,overlay:10,modal:!1,overlayClass:"ui-widget-overlay",onShow:a.jgrid.showModal,onHide:a.jgrid.closeModal,gbox:"",jqm:!0,jqM:!0},b||{});if(a.fn.jqm&&!0===b.jqm)b.jqM?a(d).attr("aria-hidden","false").jqm(b).jqmShow():a(d).attr("aria-hidden","false").jqmShow();else{""!==b.gbox&&(a(".jqgrid-overlay:first",b.gbox).show(),a(d).data("gbox",b.gbox));a(d).show().attr("aria-hidden",
"false");try{a(":input:visible",d)[0].focus()}catch(c){}}},info_dialog:function(d,b,c,g){var e={width:290,height:"auto",dataheight:"auto",drag:!0,resize:!1,left:250,top:170,zIndex:1E3,jqModal:!0,modal:!1,closeOnEscape:!0,align:"center",buttonalign:"center",buttons:[]};a.extend(!0,e,a.jgrid.jqModal||{},{caption:"<b>"+d+"</b>"},g||{});var h=e.jqModal,f=this;a.fn.jqm&&!h&&(h=!1);d="";if(0<e.buttons.length)for(g=0;g<e.buttons.length;g++)void 0===e.buttons[g].id&&(e.buttons[g].id="info_button_"+g),d+=
"<a id='"+e.buttons[g].id+"' class='fm-button ui-state-default ui-corner-all'>"+e.buttons[g].text+"</a>";g=isNaN(e.dataheight)?e.dataheight:e.dataheight+"px";b="<div id='info_id'>"+("<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+g+";"+("text-align:"+e.align+";")+"'>"+b+"</div>");b+=c?"<div class='ui-widget-content ui-helper-clearfix' style='text-align:"+e.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'><a id='closedialog' class='fm-button ui-state-default ui-corner-all'>"+
c+"</a>"+d+"</div>":""!==d?"<div class='ui-widget-content ui-helper-clearfix' style='text-align:"+e.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'>"+d+"</div>":"";b+="</div>";try{"false"===a("#info_dialog").attr("aria-hidden")&&a.jgrid.hideModal("#info_dialog",{jqm:h}),a("#info_dialog").remove()}catch(k){}a.jgrid.createModal({themodal:"info_dialog",modalhead:"info_head",modalcontent:"info_content",scrollelm:"infocnt"},b,e,"","",!0);d&&a.each(e.buttons,
function(b){a("#"+a.jgrid.jqID(this.id),"#info_id").bind("click",function(){e.buttons[b].onClick.call(a("#info_dialog"));return!1})});a("#closedialog","#info_id").click(function(){f.hideModal("#info_dialog",{jqm:h,onClose:a("#info_dialog").data("onClose")||e.onClose,gb:a("#info_dialog").data("gbox")||e.gbox});return!1});a(".fm-button","#info_dialog").hover(function(){a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")});a.isFunction(e.beforeOpen)&&e.beforeOpen();a.jgrid.viewModal("#info_dialog",
{onHide:function(a){a.w.hide().remove();a.o&&a.o.remove()},modal:e.modal,jqm:h});a.isFunction(e.afterOpen)&&e.afterOpen();try{a("#info_dialog").focus()}catch(l){}},bindEv:function(d,b){a.isFunction(b.dataInit)&&b.dataInit.call(this,d,b);b.dataEvents&&a.each(b.dataEvents,function(){void 0!==this.data?a(d).bind(this.type,this.data,this.fn):a(d).bind(this.type,this.fn)})},createEl:function(d,b,c,g,e){function h(b,d,c){var e="dataInit dataEvents dataUrl buildSelect sopt searchhidden defaultValue attr custom_element custom_value".split(" ");
void 0!==c&&a.isArray(c)&&a.merge(e,c);a.each(d,function(d,c){-1===a.inArray(d,e)&&a(b).attr(d,c)});d.hasOwnProperty("id")||a(b).attr("id",a.jgrid.randId())}var f="",k=this;switch(d){case "textarea":f=document.createElement("textarea");g?b.cols||a(f).css({width:"98%"}):b.cols||(b.cols=20);b.rows||(b.rows=2);if("&nbsp;"===c||"&#160;"===c||1===c.length&&160===c.charCodeAt(0))c="";f.value=c;h(f,b);a(f).attr({role:"textbox",multiline:"true"});break;case "checkbox":f=document.createElement("input");f.type=
"checkbox";b.value?(d=b.value.split(":"),c===d[0]&&(f.checked=!0,f.defaultChecked=!0),f.value=d[0],a(f).attr("offval",d[1])):(d=(c+"").toLowerCase(),0>d.search(/(false|f|0|no|n|off|undefined)/i)&&""!==d?(f.checked=!0,f.defaultChecked=!0,f.value=c):f.value="on",a(f).attr("offval","off"));h(f,b,["value"]);a(f).attr("role","checkbox");break;case "select":f=document.createElement("select");f.setAttribute("role","select");g=[];!0===b.multiple?(d=!0,f.multiple="multiple",a(f).attr("aria-multiselectable",
"true")):d=!1;if(void 0!==b.dataUrl){d=b.name?String(b.id).substring(0,String(b.id).length-String(b.name).length-1):String(b.id);var l=b.postData||e.postData;k.p&&k.p.idPrefix&&(d=a.jgrid.stripPref(k.p.idPrefix,d));a.ajax(a.extend({url:a.isFunction(b.dataUrl)?b.dataUrl.call(k,d,c,String(b.name)):b.dataUrl,type:"GET",dataType:"html",data:a.isFunction(l)?l.call(k,d,c,String(b.name)):l,context:{elem:f,options:b,vl:c},success:function(b){var d=[],c=this.elem,e=this.vl,f=a.extend({},this.options),g=!0===
f.multiple;b=a.isFunction(f.buildSelect)?f.buildSelect.call(k,b):b;"string"===typeof b&&(b=a(a.trim(b)).html());b&&(a(c).append(b),h(c,f,l?["postData"]:void 0),void 0===f.size&&(f.size=g?3:1),g?(d=e.split(","),d=a.map(d,function(b){return a.trim(b)})):d[0]=a.trim(e),setTimeout(function(){a("option",c).each(function(b){0===b&&c.multiple&&(this.selected=!1);a(this).attr("role","option");if(-1<a.inArray(a.trim(a(this).text()),d)||-1<a.inArray(a.trim(a(this).val()),d))this.selected="selected"})},0))}},
e||{}))}else if(b.value){var m;void 0===b.size&&(b.size=d?3:1);d&&(g=c.split(","),g=a.map(g,function(b){return a.trim(b)}));"function"===typeof b.value&&(b.value=b.value());var n,q,p=void 0===b.separator?":":b.separator;e=void 0===b.delimiter?";":b.delimiter;if("string"===typeof b.value)for(n=b.value.split(e),m=0;m<n.length;m++)q=n[m].split(p),2<q.length&&(q[1]=a.map(q,function(a,b){if(0<b)return a}).join(p)),e=document.createElement("option"),e.setAttribute("role","option"),e.value=q[0],e.innerHTML=
q[1],f.appendChild(e),d||a.trim(q[0])!==a.trim(c)&&a.trim(q[1])!==a.trim(c)||(e.selected="selected"),d&&(-1<a.inArray(a.trim(q[1]),g)||-1<a.inArray(a.trim(q[0]),g))&&(e.selected="selected");else if("object"===typeof b.value)for(m in p=b.value,p)p.hasOwnProperty(m)&&(e=document.createElement("option"),e.setAttribute("role","option"),e.value=m,e.innerHTML=p[m],f.appendChild(e),d||a.trim(m)!==a.trim(c)&&a.trim(p[m])!==a.trim(c)||(e.selected="selected"),d&&(-1<a.inArray(a.trim(p[m]),g)||-1<a.inArray(a.trim(m),
g))&&(e.selected="selected"));h(f,b,["value"])}break;case "text":case "password":case "button":m="button"===d?"button":"textbox";f=document.createElement("input");f.type=d;f.value=c;h(f,b);"button"!==d&&(g?b.size||a(f).css({width:"98%"}):b.size||(b.size=20));a(f).attr("role",m);break;case "image":case "file":f=document.createElement("input");f.type=d;h(f,b);break;case "custom":f=document.createElement("span");try{if(a.isFunction(b.custom_element))if(p=b.custom_element.call(k,c,b))p=a(p).addClass("customelement").attr({id:b.id,
name:b.name}),a(f).empty().append(p);else throw"e2";else throw"e1";}catch(r){"e1"===r&&a.jgrid.info_dialog(a.jgrid.errors.errcap,"function 'custom_element' "+a.jgrid.edit.msg.nodefined,a.jgrid.edit.bClose),"e2"===r?a.jgrid.info_dialog(a.jgrid.errors.errcap,"function 'custom_element' "+a.jgrid.edit.msg.novalue,a.jgrid.edit.bClose):a.jgrid.info_dialog(a.jgrid.errors.errcap,"string"===typeof r?r:r.message,a.jgrid.edit.bClose)}}return f},checkDate:function(a,b){var c={},g;a=a.toLowerCase();g=-1!==a.indexOf("/")?
"/":-1!==a.indexOf("-")?"-":-1!==a.indexOf(".")?".":"/";a=a.split(g);b=b.split(g);if(3!==b.length)return!1;var e=-1,h,f=g=-1,k;for(k=0;k<a.length;k++)h=isNaN(b[k])?0:parseInt(b[k],10),c[a[k]]=h,h=a[k],-1!==h.indexOf("y")&&(e=k),-1!==h.indexOf("m")&&(f=k),-1!==h.indexOf("d")&&(g=k);h="y"===a[e]||"yyyy"===a[e]?4:"yy"===a[e]?2:-1;k=[0,31,29,31,30,31,30,31,31,30,31,30,31];var l;if(-1===e)return!1;l=c[a[e]].toString();2===h&&1===l.length&&(h=1);if(l.length!==h||0===c[a[e]]&&"00"!==b[e]||-1===f)return!1;
l=c[a[f]].toString();if(1>l.length||1>c[a[f]]||12<c[a[f]]||-1===g)return!1;l=c[a[g]].toString();if(!(h=1>l.length)&&!(h=1>c[a[g]])&&!(h=31<c[a[g]])){if(h=2===c[a[f]])e=c[a[e]],h=c[a[g]]>(0!==e%4||0===e%100&&0!==e%400?28:29);h=h||c[a[g]]>k[c[a[f]]]}return h?!1:!0},isEmpty:function(a){return a.match(/^\s+$/)||""===a?!0:!1},checkTime:function(d){var b=/^(\d{1,2}):(\d{2})([apAP][Mm])?$/;if(!a.jgrid.isEmpty(d))if(d=d.match(b)){if(d[3]){if(1>d[1]||12<d[1])return!1}else if(23<d[1])return!1;if(59<d[2])return!1}else return!1;
return!0},checkValues:function(d,b,c,g){var e,h,f;f=this.p.colModel;if(void 0===c)if("string"===typeof b)for(c=0,g=f.length;c<g;c++){if(f[c].name===b){e=f[c].editrules;b=c;null!=f[c].formoptions&&(h=f[c].formoptions.label);break}}else 0<=b&&(e=f[b].editrules);else e=c,h=void 0===g?"_":g;if(e){h||(h=null!=this.p.colNames?this.p.colNames[b]:f[b].label);if(!0===e.required&&a.jgrid.isEmpty(d))return[!1,h+": "+a.jgrid.edit.msg.required,""];c=!1===e.required?!1:!0;if(!0===e.number&&(!1!==c||!a.jgrid.isEmpty(d))&&
isNaN(d))return[!1,h+": "+a.jgrid.edit.msg.number,""];if(void 0!==e.minValue&&!isNaN(e.minValue)&&parseFloat(d)<parseFloat(e.minValue))return[!1,h+": "+a.jgrid.edit.msg.minValue+" "+e.minValue,""];if(void 0!==e.maxValue&&!isNaN(e.maxValue)&&parseFloat(d)>parseFloat(e.maxValue))return[!1,h+": "+a.jgrid.edit.msg.maxValue+" "+e.maxValue,""];if(!(!0!==e.email||!1===c&&a.jgrid.isEmpty(d)||(g=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
g.test(d))))return[!1,h+": "+a.jgrid.edit.msg.email,""];if(!(!0!==e.integer||!1===c&&a.jgrid.isEmpty(d)||!isNaN(d)&&0===d%1&&-1===d.indexOf(".")))return[!1,h+": "+a.jgrid.edit.msg.integer,""];if(!(!0!==e.date||!1===c&&a.jgrid.isEmpty(d)||(f[b].formatoptions&&f[b].formatoptions.newformat?(f=f[b].formatoptions.newformat,a.jgrid.formatter.date.masks.hasOwnProperty(f)&&(f=a.jgrid.formatter.date.masks[f])):f=f[b].datefmt||"Y-m-d",a.jgrid.checkDate(f,d))))return[!1,h+": "+a.jgrid.edit.msg.date+" - "+f,
""];if(!0===e.time&&!(!1===c&&a.jgrid.isEmpty(d)||a.jgrid.checkTime(d)))return[!1,h+": "+a.jgrid.edit.msg.date+" - hh:mm (am/pm)",""];if(!(!0!==e.url||!1===c&&a.jgrid.isEmpty(d)||(g=/^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i,g.test(d))))return[!1,h+": "+a.jgrid.edit.msg.url,""];if(!0===e.custom&&(!1!==c||!a.jgrid.isEmpty(d)))return a.isFunction(e.custom_func)?(d=e.custom_func.call(this,d,h,b),a.isArray(d)?d:[!1,a.jgrid.edit.msg.customarray,
""]):[!1,a.jgrid.edit.msg.customfcheck,""]}return[!0,"",""]}})})(jQuery);
(function(a){var b={};a.jgrid.extend({searchGrid:function(b){b=a.extend(!0,{recreateFilter:!1,drag:!0,sField:"searchField",sValue:"searchString",sOper:"searchOper",sFilter:"filters",loadDefaults:!0,beforeShowSearch:null,afterShowSearch:null,onInitializeSearch:null,afterRedraw:null,afterChange:null,closeAfterSearch:!1,closeAfterReset:!1,closeOnEscape:!1,searchOnEnter:!1,multipleSearch:!1,multipleGroup:!1,top:0,left:0,jqModal:!0,modal:!1,resize:!0,width:450,height:"auto",dataheight:"auto",showQuery:!1,
errorcheck:!0,sopt:null,stringResult:void 0,onClose:null,onSearch:null,onReset:null,toTop:!0,overlay:30,columns:[],tmplNames:null,tmplFilters:null,tmplLabel:" Template: ",showOnLoad:!1,layer:null,operands:{eq:"=",ne:"<>",lt:"<",le:"<=",gt:">",ge:">=",bw:"LIKE",bn:"NOT LIKE","in":"IN",ni:"NOT IN",ew:"LIKE",en:"NOT LIKE",cn:"LIKE",nc:"NOT LIKE",nu:"IS NULL",nn:"ISNOT NULL"}},a.jgrid.search,b||{});return this.each(function(){function c(c){w=a(e).triggerHandler("jqGridFilterBeforeShow",[c]);void 0===
w&&(w=!0);w&&a.isFunction(b.beforeShowSearch)&&(w=b.beforeShowSearch.call(e,c));w&&(a.jgrid.viewModal("#"+a.jgrid.jqID(s.themodal),{gbox:"#gbox_"+a.jgrid.jqID(h),jqm:b.jqModal,modal:b.modal,overlay:b.overlay,toTop:b.toTop}),a(e).triggerHandler("jqGridFilterAfterShow",[c]),a.isFunction(b.afterShowSearch)&&b.afterShowSearch.call(e,c))}var e=this;if(e.grid){var h="fbox_"+e.p.id,w=!0,t=!0,s={themodal:"searchmod"+h,modalhead:"searchhd"+h,modalcontent:"searchcnt"+h,scrollelm:h},r=e.p.postData[b.sFilter];
"string"===typeof r&&(r=a.jgrid.parse(r));!0===b.recreateFilter&&a("#"+a.jgrid.jqID(s.themodal)).remove();if(void 0!==a("#"+a.jgrid.jqID(s.themodal))[0])c(a("#fbox_"+a.jgrid.jqID(+e.p.id)));else{var f=a("<div><div id='"+h+"' class='searchFilter' style='overflow:auto'></div></div>").insertBefore("#gview_"+a.jgrid.jqID(e.p.id)),k="left",u="";"rtl"===e.p.direction&&(k="right",u=" style='text-align:left'",f.attr("dir","rtl"));var x=a.extend([],e.p.colModel),d="<a id='"+h+"_search' class='fm-button ui-state-default ui-corner-all fm-button-icon-right ui-reset'><span class='ui-icon ui-icon-search'></span>"+
b.Find+"</a>",v="<a id='"+h+"_reset' class='fm-button ui-state-default ui-corner-all fm-button-icon-left ui-search'><span class='ui-icon ui-icon-arrowreturnthick-1-w'></span>"+b.Reset+"</a>",g="",m="",p,q=!1,y=-1;b.showQuery&&(g="<a id='"+h+"_query' class='fm-button ui-state-default ui-corner-all fm-button-icon-left'><span class='ui-icon ui-icon-comment'></span>Query</a>");b.columns.length?(x=b.columns,y=0,p=x[0].index||x[0].name):a.each(x,function(a,b){b.label||(b.label=e.p.colNames[a]);if(!q){var c=
void 0===b.search?!0:b.search,d=!0===b.hidden;if(b.searchoptions&&!0===b.searchoptions.searchhidden&&c||c&&!d)q=!0,p=b.index||b.name,y=a}});if(!r&&p||!1===b.multipleSearch){var D="eq";0<=y&&x[y].searchoptions&&x[y].searchoptions.sopt?D=x[y].searchoptions.sopt[0]:b.sopt&&b.sopt.length&&(D=b.sopt[0]);r={groupOp:"AND",rules:[{field:p,op:D,data:""}]}}q=!1;b.tmplNames&&b.tmplNames.length&&(q=!0,m=b.tmplLabel,m+="<select class='ui-template'>",m+="<option value='default'>Default</option>",a.each(b.tmplNames,
function(a,b){m+="<option value='"+a+"'>"+b+"</option>"}),m+="</select>");k="<table class='EditTable' style='border:0px none;margin-top:5px' id='"+h+"_2'><tbody><tr><td colspan='2'><hr class='ui-widget-content' style='margin:1px'/></td></tr><tr><td class='EditButton' style='text-align:"+k+"'>"+v+m+"</td><td class='EditButton' "+u+">"+g+d+"</td></tr></tbody></table>";h=a.jgrid.jqID(h);a("#"+h).jqFilter({columns:x,filter:b.loadDefaults?r:null,showQuery:b.showQuery,errorcheck:b.errorcheck,sopt:b.sopt,
groupButton:b.multipleGroup,ruleButtons:b.multipleSearch,afterRedraw:b.afterRedraw,ops:b.odata,operands:b.operands,ajaxSelectOptions:e.p.ajaxSelectOptions,groupOps:b.groupOps,onChange:function(){this.p.showQuery&&a(".query",this).html(this.toUserFriendlyString());a.isFunction(b.afterChange)&&b.afterChange.call(e,a("#"+h),b)},direction:e.p.direction,id:e.p.id});f.append(k);q&&b.tmplFilters&&b.tmplFilters.length&&a(".ui-template",f).bind("change",function(){var c=a(this).val();"default"===c?a("#"+h).jqFilter("addFilter",
r):a("#"+h).jqFilter("addFilter",b.tmplFilters[parseInt(c,10)]);return!1});!0===b.multipleGroup&&(b.multipleSearch=!0);a(e).triggerHandler("jqGridFilterInitialize",[a("#"+h)]);a.isFunction(b.onInitializeSearch)&&b.onInitializeSearch.call(e,a("#"+h));b.gbox="#gbox_"+h;b.layer?a.jgrid.createModal(s,f,b,"#gview_"+a.jgrid.jqID(e.p.id),a("#gbox_"+a.jgrid.jqID(e.p.id))[0],"#"+a.jgrid.jqID(b.layer),{position:"relative"}):a.jgrid.createModal(s,f,b,"#gview_"+a.jgrid.jqID(e.p.id),a("#gbox_"+a.jgrid.jqID(e.p.id))[0]);
(b.searchOnEnter||b.closeOnEscape)&&a("#"+a.jgrid.jqID(s.themodal)).keydown(function(c){var d=a(c.target);if(b.searchOnEnter&&13===c.which&&!(d.hasClass("add-group")||d.hasClass("add-rule")||d.hasClass("delete-group")||d.hasClass("delete-rule")||d.hasClass("fm-button")&&d.is("[id$=_query]")))return a("#"+h+"_search").click(),!1;if(b.closeOnEscape&&27===c.which)return a("#"+a.jgrid.jqID(s.modalhead)).find(".ui-jqdialog-titlebar-close").click(),!1});g&&a("#"+h+"_query").bind("click",function(){a(".queryresult",
f).toggle();return!1});void 0===b.stringResult&&(b.stringResult=b.multipleSearch);a("#"+h+"_search").bind("click",function(){var c=a("#"+h),d={},n,g;c.find(".input-elm:focus").change();g=c.jqFilter("filterData");if(b.errorcheck&&(c[0].hideError(),b.showQuery||c.jqFilter("toSQLString"),c[0].p.error))return c[0].showError(),!1;if(b.stringResult){try{n=xmlJsonClass.toJson(g,"","",!1)}catch(f){try{n=JSON.stringify(g)}catch(k){}}"string"===typeof n&&(d[b.sFilter]=n,a.each([b.sField,b.sValue,b.sOper],function(){d[this]=
""}))}else b.multipleSearch?(d[b.sFilter]=g,a.each([b.sField,b.sValue,b.sOper],function(){d[this]=""})):(d[b.sField]=g.rules[0].field,d[b.sValue]=g.rules[0].data,d[b.sOper]=g.rules[0].op,d[b.sFilter]="");e.p.search=!0;a.extend(e.p.postData,d);t=a(e).triggerHandler("jqGridFilterSearch");void 0===t&&(t=!0);t&&a.isFunction(b.onSearch)&&(t=b.onSearch.call(e,e.p.filters));!1!==t&&a(e).trigger("reloadGrid",[{page:1}]);b.closeAfterSearch&&a.jgrid.hideModal("#"+a.jgrid.jqID(s.themodal),{gb:"#gbox_"+a.jgrid.jqID(e.p.id),
jqm:b.jqModal,onClose:b.onClose});return!1});a("#"+h+"_reset").bind("click",function(){var c={},d=a("#"+h);e.p.search=!1;e.p.resetsearch=!0;!1===b.multipleSearch?c[b.sField]=c[b.sValue]=c[b.sOper]="":c[b.sFilter]="";d[0].resetFilter();q&&a(".ui-template",f).val("default");a.extend(e.p.postData,c);t=a(e).triggerHandler("jqGridFilterReset");void 0===t&&(t=!0);t&&a.isFunction(b.onReset)&&(t=b.onReset.call(e));!1!==t&&a(e).trigger("reloadGrid",[{page:1}]);b.closeAfterReset&&a.jgrid.hideModal("#"+a.jgrid.jqID(s.themodal),
{gb:"#gbox_"+a.jgrid.jqID(e.p.id),jqm:b.jqModal,onClose:b.onClose});return!1});c(a("#"+h));a(".fm-button:not(.ui-state-disabled)",f).hover(function(){a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")})}}})},editGridRow:function(z,c){c=a.extend(!0,{top:0,left:0,width:300,datawidth:"auto",height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,url:null,mtype:"POST",clearAfterAdd:!0,closeAfterEdit:!1,reloadAfterSubmit:!0,onInitializeForm:null,beforeInitData:null,
beforeShowForm:null,afterShowForm:null,beforeSubmit:null,afterSubmit:null,onclickSubmit:null,afterComplete:null,onclickPgButtons:null,afterclickPgButtons:null,editData:{},recreateForm:!1,jqModal:!0,closeOnEscape:!1,addedrow:"first",topinfo:"",bottominfo:"",saveicon:[],closeicon:[],savekey:[!1,13],navkeys:[!1,38,40],checkOnSubmit:!1,checkOnUpdate:!1,_savedData:{},processing:!1,onClose:null,ajaxEditOptions:{},serializeEditData:null,viewPagerButtons:!0,overlayClass:"ui-widget-overlay"},a.jgrid.edit,
c||{});b[a(this)[0].p.id]=c;return this.each(function(){function e(){a(p+" > tbody > tr > td > .FormElement").each(function(){var b=a(".customelement",this);if(b.length){var c=a(b[0]).attr("name");a.each(d.p.colModel,function(){if(this.name===c&&this.editoptions&&a.isFunction(this.editoptions.custom_value)){try{if(l[c]=this.editoptions.custom_value.call(d,a("#"+a.jgrid.jqID(c),p),"get"),void 0===l[c])throw"e1";}catch(b){"e1"===b?a.jgrid.info_dialog(a.jgrid.errors.errcap,"function 'custom_value' "+
a.jgrid.edit.msg.novalue,a.jgrid.edit.bClose):a.jgrid.info_dialog(a.jgrid.errors.errcap,b.message,a.jgrid.edit.bClose)}return!0}})}else{switch(a(this).get(0).type){case "checkbox":a(this).is(":checked")?l[this.name]=a(this).val():(b=a(this).attr("offval"),l[this.name]=b);break;case "select-one":l[this.name]=a("option:selected",this).val();break;case "select-multiple":l[this.name]=a(this).val();l[this.name]=l[this.name]?l[this.name].join(","):"";a("option:selected",this).each(function(b,c){a(c).text()});
break;case "password":case "text":case "textarea":case "button":l[this.name]=a(this).val()}d.p.autoencode&&(l[this.name]=a.jgrid.htmlEncode(l[this.name]))}});return!0}function h(c,e,n,f){var k,l,p,h=0,q,m,r,C=[],u=!1,z="",t;for(t=1;t<=f;t++)z+="<td class='CaptionTD'>&#160;</td><td class='DataTD'>&#160;</td>";"_empty"!==c&&(u=a(e).jqGrid("getInd",c));a(e.p.colModel).each(function(t){k=this.name;m=(l=this.editrules&&!0===this.editrules.edithidden?!1:!0===this.hidden?!0:!1)?"style='display:none'":"";
if("cb"!==k&&"subgrid"!==k&&!0===this.editable&&"rn"!==k){if(!1===u)q="";else if(k===e.p.ExpandColumn&&!0===e.p.treeGrid)q=a("td[role='gridcell']:eq("+t+")",e.rows[u]).text();else{try{q=a.unformat.call(e,a("td[role='gridcell']:eq("+t+")",e.rows[u]),{rowId:c,colModel:this},t)}catch(w){q=this.edittype&&"textarea"===this.edittype?a("td[role='gridcell']:eq("+t+")",e.rows[u]).text():a("td[role='gridcell']:eq("+t+")",e.rows[u]).html()}if(!q||"&nbsp;"===q||"&#160;"===q||1===q.length&&160===q.charCodeAt(0))q=
""}var s=a.extend({},this.editoptions||{},{id:k,name:k}),y=a.extend({},{elmprefix:"",elmsuffix:"",rowabove:!1,rowcontent:""},this.formoptions||{}),v=parseInt(y.rowpos,10)||h+1,A=parseInt(2*(parseInt(y.colpos,10)||1),10);"_empty"===c&&s.defaultValue&&(q=a.isFunction(s.defaultValue)?s.defaultValue.call(d):s.defaultValue);this.edittype||(this.edittype="text");d.p.autoencode&&(q=a.jgrid.htmlDecode(q));r=a.jgrid.createEl.call(d,this.edittype,s,q,!1,a.extend({},a.jgrid.ajaxOptions,e.p.ajaxSelectOptions||
{}));if(b[d.p.id].checkOnSubmit||b[d.p.id].checkOnUpdate)b[d.p.id]._savedData[k]=q;a(r).addClass("FormElement");-1<a.inArray(this.edittype,["text","textarea","password","select"])&&a(r).addClass("ui-widget-content ui-corner-all");p=a(n).find("tr[rowpos="+v+"]");if(y.rowabove){var x=a("<tr><td class='contentinfo' colspan='"+2*f+"'>"+y.rowcontent+"</td></tr>");a(n).append(x);x[0].rp=v}0===p.length&&(p=a("<tr "+m+" rowpos='"+v+"'></tr>").addClass("FormData").attr("id","tr_"+k),a(p).append(z),a(n).append(p),
p[0].rp=v);a("td:eq("+(A-2)+")",p[0]).html(void 0===y.label?e.p.colNames[t]:y.label);a("td:eq("+(A-1)+")",p[0]).append(y.elmprefix).append(r).append(y.elmsuffix);"custom"===this.edittype&&a.isFunction(s.custom_value)&&s.custom_value.call(d,a("#"+k,"#"+g),"set",q);a.jgrid.bindEv.call(d,r,s);C[h]=t;h++}});0<h&&(t=a("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+(2*f-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='"+e.p.id+"_id' value='"+
c+"'/></td></tr>"),t[0].rp=h+999,a(n).append(t),b[d.p.id].checkOnSubmit||b[d.p.id].checkOnUpdate)&&(b[d.p.id]._savedData[e.p.id+"_id"]=c);return C}function w(c,e,n){var g,k=0,f,l,q,h,r;if(b[d.p.id].checkOnSubmit||b[d.p.id].checkOnUpdate)b[d.p.id]._savedData={},b[d.p.id]._savedData[e.p.id+"_id"]=c;var m=e.p.colModel;if("_empty"===c)a(m).each(function(){g=this.name;q=a.extend({},this.editoptions||{});(l=a("#"+a.jgrid.jqID(g),"#"+n))&&l.length&&null!==l[0]&&(h="","custom"===this.edittype&&a.isFunction(q.custom_value)?
q.custom_value.call(d,a("#"+g,"#"+n),"set",h):q.defaultValue?(h=a.isFunction(q.defaultValue)?q.defaultValue.call(d):q.defaultValue,"checkbox"===l[0].type?(r=h.toLowerCase(),0>r.search(/(false|f|0|no|n|off|undefined)/i)&&""!==r?(l[0].checked=!0,l[0].defaultChecked=!0,l[0].value=h):(l[0].checked=!1,l[0].defaultChecked=!1)):l.val(h)):"checkbox"===l[0].type?(l[0].checked=!1,l[0].defaultChecked=!1,h=a(l).attr("offval")):l[0].type&&"select"===l[0].type.substr(0,6)?l[0].selectedIndex=0:l.val(h),!0===b[d.p.id].checkOnSubmit||
b[d.p.id].checkOnUpdate)&&(b[d.p.id]._savedData[g]=h)}),a("#id_g","#"+n).val(c);else{var t=a(e).jqGrid("getInd",c,!0);t&&(a('td[role="gridcell"]',t).each(function(l){g=m[l].name;if("cb"!==g&&"subgrid"!==g&&"rn"!==g&&!0===m[l].editable){if(g===e.p.ExpandColumn&&!0===e.p.treeGrid)f=a(this).text();else try{f=a.unformat.call(e,a(this),{rowId:c,colModel:m[l]},l)}catch(q){f="textarea"===m[l].edittype?a(this).text():a(this).html()}d.p.autoencode&&(f=a.jgrid.htmlDecode(f));if(!0===b[d.p.id].checkOnSubmit||
b[d.p.id].checkOnUpdate)b[d.p.id]._savedData[g]=f;g=a.jgrid.jqID(g);switch(m[l].edittype){case "password":case "text":case "button":case "image":case "textarea":if("&nbsp;"===f||"&#160;"===f||1===f.length&&160===f.charCodeAt(0))f="";a("#"+g,"#"+n).val(f);break;case "select":var h=f.split(","),h=a.map(h,function(b){return a.trim(b)});a("#"+g+" option","#"+n).each(function(){m[l].editoptions.multiple||a.trim(f)!==a.trim(a(this).text())&&h[0]!==a.trim(a(this).text())&&h[0]!==a.trim(a(this).val())?m[l].editoptions.multiple?
-1<a.inArray(a.trim(a(this).text()),h)||-1<a.inArray(a.trim(a(this).val()),h)?this.selected=!0:this.selected=!1:this.selected=!1:this.selected=!0});break;case "checkbox":f=String(f);if(m[l].editoptions&&m[l].editoptions.value)if(m[l].editoptions.value.split(":")[0]===f)a("#"+g,"#"+n)[d.p.useProp?"prop":"attr"]({checked:!0,defaultChecked:!0});else a("#"+g,"#"+n)[d.p.useProp?"prop":"attr"]({checked:!1,defaultChecked:!1});else f=f.toLowerCase(),0>f.search(/(false|f|0|no|n|off|undefined)/i)&&""!==f?(a("#"+
g,"#"+n)[d.p.useProp?"prop":"attr"]("checked",!0),a("#"+g,"#"+n)[d.p.useProp?"prop":"attr"]("defaultChecked",!0)):(a("#"+g,"#"+n)[d.p.useProp?"prop":"attr"]("checked",!1),a("#"+g,"#"+n)[d.p.useProp?"prop":"attr"]("defaultChecked",!1));break;case "custom":try{if(m[l].editoptions&&a.isFunction(m[l].editoptions.custom_value))m[l].editoptions.custom_value.call(d,a("#"+g,"#"+n),"set",f);else throw"e1";}catch(p){"e1"===p?a.jgrid.info_dialog(a.jgrid.errors.errcap,"function 'custom_value' "+a.jgrid.edit.msg.nodefined,
a.jgrid.edit.bClose):a.jgrid.info_dialog(a.jgrid.errors.errcap,p.message,a.jgrid.edit.bClose)}}k++}}),0<k&&a("#id_g",p).val(c))}}function t(){a.each(d.p.colModel,function(a,b){b.editoptions&&!0===b.editoptions.NullIfEmpty&&l.hasOwnProperty(b.name)&&""===l[b.name]&&(l[b.name]="null")})}function s(){var e,n=[!0,"",""],f={},k=d.p.prmNames,h,m,r,u,s,C=a(d).triggerHandler("jqGridAddEditBeforeCheckValues",[a("#"+g),B]);C&&"object"===typeof C&&(l=C);a.isFunction(b[d.p.id].beforeCheckValues)&&(C=b[d.p.id].beforeCheckValues.call(d,
l,a("#"+g),B))&&"object"===typeof C&&(l=C);for(r in l)if(l.hasOwnProperty(r)&&(n=a.jgrid.checkValues.call(d,l[r],r),!1===n[0]))break;t();n[0]&&(f=a(d).triggerHandler("jqGridAddEditClickSubmit",[b[d.p.id],l,B]),void 0===f&&a.isFunction(b[d.p.id].onclickSubmit)&&(f=b[d.p.id].onclickSubmit.call(d,b[d.p.id],l,B)||{}),n=a(d).triggerHandler("jqGridAddEditBeforeSubmit",[l,a("#"+g),B]),void 0===n&&(n=[!0,"",""]),n[0]&&a.isFunction(b[d.p.id].beforeSubmit)&&(n=b[d.p.id].beforeSubmit.call(d,l,a("#"+g),B)));
if(n[0]&&!b[d.p.id].processing){b[d.p.id].processing=!0;a("#sData",p+"_2").addClass("ui-state-active");m=k.oper;h=k.id;l[m]="_empty"===a.trim(l[d.p.id+"_id"])?k.addoper:k.editoper;l[m]!==k.addoper?l[h]=l[d.p.id+"_id"]:void 0===l[h]&&(l[h]=l[d.p.id+"_id"]);delete l[d.p.id+"_id"];l=a.extend(l,b[d.p.id].editData,f);if(!0===d.p.treeGrid)for(s in l[m]===k.addoper&&(u=a(d).jqGrid("getGridParam","selrow"),l["adjacency"===d.p.treeGridModel?d.p.treeReader.parent_id_field:"parent_id"]=u),d.p.treeReader)d.p.treeReader.hasOwnProperty(s)&&
(f=d.p.treeReader[s],!l.hasOwnProperty(f)||l[m]===k.addoper&&"parent_id_field"===s||delete l[f]);l[h]=a.jgrid.stripPref(d.p.idPrefix,l[h]);s=a.extend({url:b[d.p.id].url||a(d).jqGrid("getGridParam","editurl"),type:b[d.p.id].mtype,data:a.isFunction(b[d.p.id].serializeEditData)?b[d.p.id].serializeEditData.call(d,l):l,complete:function(f,r){var s;l[h]=d.p.idPrefix+l[h];300<=f.status&&304!==f.status?(n[0]=!1,n[1]=a(d).triggerHandler("jqGridAddEditErrorTextFormat",[f,B]),a.isFunction(b[d.p.id].errorTextFormat)?
n[1]=b[d.p.id].errorTextFormat.call(d,f,B):n[1]=r+" Status: '"+f.statusText+"'. Error code: "+f.status):(n=a(d).triggerHandler("jqGridAddEditAfterSubmit",[f,l,B]),void 0===n&&(n=[!0,"",""]),n[0]&&a.isFunction(b[d.p.id].afterSubmit)&&(n=b[d.p.id].afterSubmit.call(d,f,l,B)));if(!1===n[0])a("#FormError>td",p).html(n[1]),a("#FormError",p).show();else if(d.p.autoencode&&a.each(l,function(b,c){l[b]=a.jgrid.htmlDecode(c)}),l[m]===k.addoper?(n[2]||(n[2]=a.jgrid.randId()),l[h]=n[2],b[d.p.id].reloadAfterSubmit?
a(d).trigger("reloadGrid"):!0===d.p.treeGrid?a(d).jqGrid("addChildNode",n[2],u,l):a(d).jqGrid("addRowData",n[2],l,c.addedrow),b[d.p.id].closeAfterAdd?(!0!==d.p.treeGrid&&a(d).jqGrid("setSelection",n[2]),a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(v),jqm:c.jqModal,onClose:b[d.p.id].onClose})):b[d.p.id].clearAfterAdd&&w("_empty",d,g)):(b[d.p.id].reloadAfterSubmit?(a(d).trigger("reloadGrid"),b[d.p.id].closeAfterEdit||setTimeout(function(){a(d).jqGrid("setSelection",l[h])},
1E3)):!0===d.p.treeGrid?a(d).jqGrid("setTreeRow",l[h],l):a(d).jqGrid("setRowData",l[h],l),b[d.p.id].closeAfterEdit&&a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(v),jqm:c.jqModal,onClose:b[d.p.id].onClose})),a.isFunction(b[d.p.id].afterComplete)&&(e=f,setTimeout(function(){a(d).triggerHandler("jqGridAddEditAfterComplete",[e,l,a("#"+g),B]);b[d.p.id].afterComplete.call(d,e,l,a("#"+g),B);e=null},500)),b[d.p.id].checkOnSubmit||b[d.p.id].checkOnUpdate)if(a("#"+g).data("disabled",
!1),"_empty"!==b[d.p.id]._savedData[d.p.id+"_id"])for(s in b[d.p.id]._savedData)b[d.p.id]._savedData.hasOwnProperty(s)&&l[s]&&(b[d.p.id]._savedData[s]=l[s]);b[d.p.id].processing=!1;a("#sData",p+"_2").removeClass("ui-state-active");try{a(":input:visible","#"+g)[0].focus()}catch(t){}}},a.jgrid.ajaxOptions,b[d.p.id].ajaxEditOptions);s.url||b[d.p.id].useDataProxy||(a.isFunction(d.p.dataProxy)?b[d.p.id].useDataProxy=!0:(n[0]=!1,n[1]+=" "+a.jgrid.errors.nourl));n[0]&&(b[d.p.id].useDataProxy?(f=d.p.dataProxy.call(d,
s,"set_"+d.p.id),void 0===f&&(f=[!0,""]),!1===f[0]?(n[0]=!1,n[1]=f[1]||"Error deleting the selected row!"):(s.data.oper===k.addoper&&b[d.p.id].closeAfterAdd&&a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(v),jqm:c.jqModal,onClose:b[d.p.id].onClose}),s.data.oper===k.editoper&&b[d.p.id].closeAfterEdit&&a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(v),jqm:c.jqModal,onClose:b[d.p.id].onClose}))):a.ajax(s))}!1===n[0]&&(a("#FormError>td",p).html(n[1]),
a("#FormError",p).show())}function r(a,b){var c=!1,d;for(d in a)if(a.hasOwnProperty(d)&&a[d]!=b[d]){c=!0;break}return c}function f(){var c=!0;a("#FormError",p).hide();b[d.p.id].checkOnUpdate&&(l={},e(),M=r(l,b[d.p.id]._savedData))&&(a("#"+g).data("disabled",!0),a(".confirm","#"+q.themodal).show(),c=!1);return c}function k(){var b;if("_empty"!==z&&void 0!==d.p.savedRow&&0<d.p.savedRow.length&&a.isFunction(a.fn.jqGrid.restoreRow))for(b=0;b<d.p.savedRow.length;b++)if(d.p.savedRow[b].id==z){a(d).jqGrid("restoreRow",
z);break}}function u(b,c){var d=c[1].length-1;0===b?a("#pData",p+"_2").addClass("ui-state-disabled"):void 0!==c[1][b-1]&&a("#"+a.jgrid.jqID(c[1][b-1])).hasClass("ui-state-disabled")?a("#pData",p+"_2").addClass("ui-state-disabled"):a("#pData",p+"_2").removeClass("ui-state-disabled");b===d?a("#nData",p+"_2").addClass("ui-state-disabled"):void 0!==c[1][b+1]&&a("#"+a.jgrid.jqID(c[1][b+1])).hasClass("ui-state-disabled")?a("#nData",p+"_2").addClass("ui-state-disabled"):a("#nData",p+"_2").removeClass("ui-state-disabled")}
function x(){var b=a(d).jqGrid("getDataIDs"),c=a("#id_g",p).val();return[a.inArray(c,b),b]}var d=this;if(d.grid&&z){var v=d.p.id,g="FrmGrid_"+v,m="TblGrid_"+v,p="#"+a.jgrid.jqID(m),q={themodal:"editmod"+v,modalhead:"edithd"+v,modalcontent:"editcnt"+v,scrollelm:g},y=a.isFunction(b[d.p.id].beforeShowForm)?b[d.p.id].beforeShowForm:!1,D=a.isFunction(b[d.p.id].afterShowForm)?b[d.p.id].afterShowForm:!1,A=a.isFunction(b[d.p.id].beforeInitData)?b[d.p.id].beforeInitData:!1,E=a.isFunction(b[d.p.id].onInitializeForm)?
b[d.p.id].onInitializeForm:!1,n=!0,C=1,I=0,l,M,B,g=a.jgrid.jqID(g);"new"===z?(z="_empty",B="add",c.caption=b[d.p.id].addCaption):(c.caption=b[d.p.id].editCaption,B="edit");c.recreateForm||a(d).data("formProp")&&a.extend(b[a(this)[0].p.id],a(d).data("formProp"));var N=!0;c.checkOnUpdate&&c.jqModal&&!c.modal&&(N=!1);var H=isNaN(b[a(this)[0].p.id].dataheight)?b[a(this)[0].p.id].dataheight:b[a(this)[0].p.id].dataheight+"px",n=isNaN(b[a(this)[0].p.id].datawidth)?b[a(this)[0].p.id].datawidth:b[a(this)[0].p.id].datawidth+
"px",H=a("<form name='FormPost' id='"+g+"' class='FormGrid' onSubmit='return false;' style='width:"+n+";overflow:auto;position:relative;height:"+H+";'></form>").data("disabled",!1),F=a("<table id='"+m+"' class='EditTable' cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"),n=a(d).triggerHandler("jqGridAddEditBeforeInitData",[a("#"+g),B]);void 0===n&&(n=!0);n&&A&&(n=A.call(d,a("#"+g),B));if(!1!==n){k();a(d.p.colModel).each(function(){var a=this.formoptions;C=Math.max(C,a?a.colpos||
0:0);I=Math.max(I,a?a.rowpos||0:0)});a(H).append(F);A=a("<tr id='FormError' style='display:none'><td class='ui-state-error' colspan='"+2*C+"'></td></tr>");A[0].rp=0;a(F).append(A);A=a("<tr style='display:none' class='tinfo'><td class='topinfo' colspan='"+2*C+"'>"+b[d.p.id].topinfo+"</td></tr>");A[0].rp=0;a(F).append(A);var n=(A="rtl"===d.p.direction?!0:!1)?"nData":"pData",G=A?"pData":"nData";h(z,d,F,C);var n="<a id='"+n+"' class='fm-button ui-state-default ui-corner-left'><span class='ui-icon ui-icon-triangle-1-w'></span></a>",
G="<a id='"+G+"' class='fm-button ui-state-default ui-corner-right'><span class='ui-icon ui-icon-triangle-1-e'></span></a>",J="<a id='sData' class='fm-button ui-state-default ui-corner-all'>"+c.bSubmit+"</a>",K="<a id='cData' class='fm-button ui-state-default ui-corner-all'>"+c.bCancel+"</a>",m="<table border='0' cellspacing='0' cellpadding='0' class='EditTable' id='"+m+"_2'><tbody><tr><td colspan='2'><hr class='ui-widget-content' style='margin:1px'/></td></tr><tr id='Act_Buttons'><td class='navButton'>"+
(A?G+n:n+G)+"</td><td class='EditButton'>"+J+K+"</td></tr>"+("<tr style='display:none' class='binfo'><td class='bottominfo' colspan='2'>"+b[d.p.id].bottominfo+"</td></tr>"),m=m+"</tbody></table>";if(0<I){var L=[];a.each(a(F)[0].rows,function(a,b){L[a]=b});L.sort(function(a,b){return a.rp>b.rp?1:a.rp<b.rp?-1:0});a.each(L,function(b,c){a("tbody",F).append(c)})}c.gbox="#gbox_"+a.jgrid.jqID(v);var O=!1;!0===c.closeOnEscape&&(c.closeOnEscape=!1,O=!0);m=a("<div></div>").append(H).append(m);a.jgrid.createModal(q,
m,b[a(this)[0].p.id],"#gview_"+a.jgrid.jqID(d.p.id),a("#gbox_"+a.jgrid.jqID(d.p.id))[0]);A&&(a("#pData, #nData",p+"_2").css("float","right"),a(".EditButton",p+"_2").css("text-align","left"));b[d.p.id].topinfo&&a(".tinfo",p).show();b[d.p.id].bottominfo&&a(".binfo",p+"_2").show();m=m=null;a("#"+a.jgrid.jqID(q.themodal)).keydown(function(e){var n=e.target;if(!0===a("#"+g).data("disabled"))return!1;if(!0===b[d.p.id].savekey[0]&&e.which===b[d.p.id].savekey[1]&&"TEXTAREA"!==n.tagName)return a("#sData",
p+"_2").trigger("click"),!1;if(27===e.which){if(!f())return!1;O&&a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:c.gbox,jqm:c.jqModal,onClose:b[d.p.id].onClose});return!1}if(!0===b[d.p.id].navkeys[0]){if("_empty"===a("#id_g",p).val())return!0;if(e.which===b[d.p.id].navkeys[1])return a("#pData",p+"_2").trigger("click"),!1;if(e.which===b[d.p.id].navkeys[2])return a("#nData",p+"_2").trigger("click"),!1}});c.checkOnUpdate&&(a("a.ui-jqdialog-titlebar-close span","#"+a.jgrid.jqID(q.themodal)).removeClass("jqmClose"),
a("a.ui-jqdialog-titlebar-close","#"+a.jgrid.jqID(q.themodal)).unbind("click").click(function(){if(!f())return!1;a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(v),jqm:c.jqModal,onClose:b[d.p.id].onClose});return!1}));c.saveicon=a.extend([!0,"left","ui-icon-disk"],c.saveicon);c.closeicon=a.extend([!0,"left","ui-icon-close"],c.closeicon);!0===c.saveicon[0]&&a("#sData",p+"_2").addClass("right"===c.saveicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='ui-icon "+
c.saveicon[2]+"'></span>");!0===c.closeicon[0]&&a("#cData",p+"_2").addClass("right"===c.closeicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='ui-icon "+c.closeicon[2]+"'></span>");if(b[d.p.id].checkOnSubmit||b[d.p.id].checkOnUpdate)J="<a id='sNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+c.bYes+"</a>",G="<a id='nNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+c.bNo+"</a>",K="<a id='cNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+
c.bExit+"</a>",m=c.zIndex||999,m++,a("<div class='"+c.overlayClass+" jqgrid-overlay confirm' style='z-index:"+m+";display:none;'>&#160;</div><div class='confirm ui-widget-content ui-jqconfirm' style='z-index:"+(m+1)+"'>"+c.saveData+"<br/><br/>"+J+G+K+"</div>").insertAfter("#"+g),a("#sNew","#"+a.jgrid.jqID(q.themodal)).click(function(){s();a("#"+g).data("disabled",!1);a(".confirm","#"+a.jgrid.jqID(q.themodal)).hide();return!1}),a("#nNew","#"+a.jgrid.jqID(q.themodal)).click(function(){a(".confirm",
"#"+a.jgrid.jqID(q.themodal)).hide();a("#"+g).data("disabled",!1);setTimeout(function(){a(":input:visible","#"+g)[0].focus()},0);return!1}),a("#cNew","#"+a.jgrid.jqID(q.themodal)).click(function(){a(".confirm","#"+a.jgrid.jqID(q.themodal)).hide();a("#"+g).data("disabled",!1);a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(v),jqm:c.jqModal,onClose:b[d.p.id].onClose});return!1});a(d).triggerHandler("jqGridAddEditInitializeForm",[a("#"+g),B]);E&&E.call(d,a("#"+g),B);"_empty"!==
z&&b[d.p.id].viewPagerButtons?a("#pData,#nData",p+"_2").show():a("#pData,#nData",p+"_2").hide();a(d).triggerHandler("jqGridAddEditBeforeShowForm",[a("#"+g),B]);y&&y.call(d,a("#"+g),B);a("#"+a.jgrid.jqID(q.themodal)).data("onClose",b[d.p.id].onClose);a.jgrid.viewModal("#"+a.jgrid.jqID(q.themodal),{gbox:"#gbox_"+a.jgrid.jqID(v),jqm:c.jqModal,overlay:c.overlay,modal:c.modal,overlayClass:c.overlayClass,onHide:function(b){a(d).data("formProp",{top:parseFloat(a(b.w).css("top")),left:parseFloat(a(b.w).css("left")),
width:a(b.w).width(),height:a(b.w).height(),dataheight:a("#"+g).height(),datawidth:a("#"+g).width()});b.w.remove();b.o&&b.o.remove()}});N||a("."+a.jgrid.jqID(c.overlayClass)).click(function(){if(!f())return!1;a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(v),jqm:c.jqModal,onClose:b[d.p.id].onClose});return!1});a(".fm-button","#"+a.jgrid.jqID(q.themodal)).hover(function(){a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")});a("#sData",p+"_2").click(function(){l=
{};a("#FormError",p).hide();e();"_empty"===l[d.p.id+"_id"]?s():!0===c.checkOnSubmit?(M=r(l,b[d.p.id]._savedData))?(a("#"+g).data("disabled",!0),a(".confirm","#"+a.jgrid.jqID(q.themodal)).show()):s():s();return!1});a("#cData",p+"_2").click(function(){if(!f())return!1;a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(v),jqm:c.jqModal,onClose:b[d.p.id].onClose});return!1});a("#nData",p+"_2").click(function(){if(!f())return!1;a("#FormError",p).hide();var b=x();b[0]=parseInt(b[0],
10);if(-1!==b[0]&&b[1][b[0]+1]){a(d).triggerHandler("jqGridAddEditClickPgButtons",["next",a("#"+g),b[1][b[0]]]);var e;if(a.isFunction(c.onclickPgButtons)&&(e=c.onclickPgButtons.call(d,"next",a("#"+g),b[1][b[0]]),void 0!==e&&!1===e)||a("#"+a.jgrid.jqID(b[1][b[0]+1])).hasClass("ui-state-disabled"))return!1;w(b[1][b[0]+1],d,g);a(d).jqGrid("setSelection",b[1][b[0]+1]);a(d).triggerHandler("jqGridAddEditAfterClickPgButtons",["next",a("#"+g),b[1][b[0]]]);a.isFunction(c.afterclickPgButtons)&&c.afterclickPgButtons.call(d,
"next",a("#"+g),b[1][b[0]+1]);u(b[0]+1,b)}return!1});a("#pData",p+"_2").click(function(){if(!f())return!1;a("#FormError",p).hide();var b=x();if(-1!==b[0]&&b[1][b[0]-1]){a(d).triggerHandler("jqGridAddEditClickPgButtons",["prev",a("#"+g),b[1][b[0]]]);var e;if(a.isFunction(c.onclickPgButtons)&&(e=c.onclickPgButtons.call(d,"prev",a("#"+g),b[1][b[0]]),void 0!==e&&!1===e)||a("#"+a.jgrid.jqID(b[1][b[0]-1])).hasClass("ui-state-disabled"))return!1;w(b[1][b[0]-1],d,g);a(d).jqGrid("setSelection",b[1][b[0]-1]);
a(d).triggerHandler("jqGridAddEditAfterClickPgButtons",["prev",a("#"+g),b[1][b[0]]]);a.isFunction(c.afterclickPgButtons)&&c.afterclickPgButtons.call(d,"prev",a("#"+g),b[1][b[0]-1]);u(b[0]-1,b)}return!1});a(d).triggerHandler("jqGridAddEditAfterShowForm",[a("#"+g),B]);D&&D.call(d,a("#"+g),B);y=x();u(y[0],y)}}})},viewGridRow:function(z,c){c=a.extend(!0,{top:0,left:0,width:0,datawidth:"auto",height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,jqModal:!0,closeOnEscape:!1,labelswidth:"30%",
closeicon:[],navkeys:[!1,38,40],onClose:null,beforeShowForm:null,beforeInitData:null,viewPagerButtons:!0,recreateForm:!1},a.jgrid.view,c||{});b[a(this)[0].p.id]=c;return this.each(function(){function e(){!0!==b[r.p.id].closeOnEscape&&!0!==b[r.p.id].navkeys[0]||setTimeout(function(){a(".ui-jqdialog-titlebar-close","#"+a.jgrid.jqID(v.modalhead)).focus()},0)}function h(b,d,e,f){var g,k,h,q=0,m,p,r=[],s=!1,t,u="<td class='CaptionTD form-view-label ui-widget-content' width='"+c.labelswidth+"'>&#160;</td><td class='DataTD form-view-data ui-helper-reset ui-widget-content'>&#160;</td>",
y="",z=["integer","number","currency"],v=0,w=0,A,x,D;for(t=1;t<=f;t++)y+=1===t?u:"<td class='CaptionTD form-view-label ui-widget-content'>&#160;</td><td class='DataTD form-view-data ui-widget-content'>&#160;</td>";a(d.p.colModel).each(function(){(k=this.editrules&&!0===this.editrules.edithidden?!1:!0===this.hidden?!0:!1)||"right"!==this.align||(this.formatter&&-1!==a.inArray(this.formatter,z)?v=Math.max(v,parseInt(this.width,10)):w=Math.max(w,parseInt(this.width,10)))});A=0!==v?v:0!==w?w:0;s=a(d).jqGrid("getInd",
b);a(d.p.colModel).each(function(b){g=this.name;x=!1;p=(k=this.editrules&&!0===this.editrules.edithidden?!1:!0===this.hidden?!0:!1)?"style='display:none'":"";D="boolean"!==typeof this.viewable?!0:this.viewable;if("cb"!==g&&"subgrid"!==g&&"rn"!==g&&D){m=!1===s?"":g===d.p.ExpandColumn&&!0===d.p.treeGrid?a("td:eq("+b+")",d.rows[s]).text():a("td:eq("+b+")",d.rows[s]).html();x="right"===this.align&&0!==A?!0:!1;var c=a.extend({},{rowabove:!1,rowcontent:""},this.formoptions||{}),n=parseInt(c.rowpos,10)||
q+1,t=parseInt(2*(parseInt(c.colpos,10)||1),10);if(c.rowabove){var u=a("<tr><td class='contentinfo' colspan='"+2*f+"'>"+c.rowcontent+"</td></tr>");a(e).append(u);u[0].rp=n}h=a(e).find("tr[rowpos="+n+"]");0===h.length&&(h=a("<tr "+p+" rowpos='"+n+"'></tr>").addClass("FormData").attr("id","trv_"+g),a(h).append(y),a(e).append(h),h[0].rp=n);a("td:eq("+(t-2)+")",h[0]).html("<b>"+(void 0===c.label?d.p.colNames[b]:c.label)+"</b>");a("td:eq("+(t-1)+")",h[0]).append("<span>"+m+"</span>").attr("id","v_"+g);
x&&a("td:eq("+(t-1)+") span",h[0]).css({"text-align":"right",width:A+"px"});r[q]=b;q++}});0<q&&(b=a("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+(2*f-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='id' value='"+b+"'/></td></tr>"),b[0].rp=q+99,a(e).append(b));return r}function w(b,c){var d,e,f=0,g,k;if(k=a(c).jqGrid("getInd",b,!0))a("td",k).each(function(b){d=c.p.colModel[b].name;e=c.p.colModel[b].editrules&&!0===c.p.colModel[b].editrules.edithidden?
!1:!0===c.p.colModel[b].hidden?!0:!1;"cb"!==d&&"subgrid"!==d&&"rn"!==d&&(g=d===c.p.ExpandColumn&&!0===c.p.treeGrid?a(this).text():a(this).html(),d=a.jgrid.jqID("v_"+d),a("#"+d+" span","#"+u).html(g),e&&a("#"+d,"#"+u).parents("tr:first").hide(),f++)}),0<f&&a("#id_g","#"+u).val(b)}function t(b,c){var d=c[1].length-1;0===b?a("#pData","#"+u+"_2").addClass("ui-state-disabled"):void 0!==c[1][b-1]&&a("#"+a.jgrid.jqID(c[1][b-1])).hasClass("ui-state-disabled")?a("#pData",u+"_2").addClass("ui-state-disabled"):
a("#pData","#"+u+"_2").removeClass("ui-state-disabled");b===d?a("#nData","#"+u+"_2").addClass("ui-state-disabled"):void 0!==c[1][b+1]&&a("#"+a.jgrid.jqID(c[1][b+1])).hasClass("ui-state-disabled")?a("#nData",u+"_2").addClass("ui-state-disabled"):a("#nData","#"+u+"_2").removeClass("ui-state-disabled")}function s(){var b=a(r).jqGrid("getDataIDs"),c=a("#id_g","#"+u).val();return[a.inArray(c,b),b]}var r=this;if(r.grid&&z){var f=r.p.id,k="ViewGrid_"+a.jgrid.jqID(f),u="ViewTbl_"+a.jgrid.jqID(f),x="ViewGrid_"+
f,d="ViewTbl_"+f,v={themodal:"viewmod"+f,modalhead:"viewhd"+f,modalcontent:"viewcnt"+f,scrollelm:k},g=a.isFunction(b[r.p.id].beforeInitData)?b[r.p.id].beforeInitData:!1,m=!0,p=1,q=0;c.recreateForm||a(r).data("viewProp")&&a.extend(b[a(this)[0].p.id],a(r).data("viewProp"));var y=isNaN(b[a(this)[0].p.id].dataheight)?b[a(this)[0].p.id].dataheight:b[a(this)[0].p.id].dataheight+"px",D=isNaN(b[a(this)[0].p.id].datawidth)?b[a(this)[0].p.id].datawidth:b[a(this)[0].p.id].datawidth+"px",x=a("<form name='FormPost' id='"+
x+"' class='FormGrid' style='width:"+D+";overflow:auto;position:relative;height:"+y+";'></form>"),A=a("<table id='"+d+"' class='EditTable' cellspacing='1' cellpadding='2' border='0' style='table-layout:fixed'><tbody></tbody></table>");g&&(m=g.call(r,a("#"+k)),void 0===m&&(m=!0));if(!1!==m){a(r.p.colModel).each(function(){var a=this.formoptions;p=Math.max(p,a?a.colpos||0:0);q=Math.max(q,a?a.rowpos||0:0)});a(x).append(A);h(z,r,A,p);d="rtl"===r.p.direction?!0:!1;g="<a id='"+(d?"nData":"pData")+"' class='fm-button ui-state-default ui-corner-left'><span class='ui-icon ui-icon-triangle-1-w'></span></a>";
m="<a id='"+(d?"pData":"nData")+"' class='fm-button ui-state-default ui-corner-right'><span class='ui-icon ui-icon-triangle-1-e'></span></a>";y="<a id='cData' class='fm-button ui-state-default ui-corner-all'>"+c.bClose+"</a>";if(0<q){var E=[];a.each(a(A)[0].rows,function(a,b){E[a]=b});E.sort(function(a,b){return a.rp>b.rp?1:a.rp<b.rp?-1:0});a.each(E,function(b,c){a("tbody",A).append(c)})}c.gbox="#gbox_"+a.jgrid.jqID(f);x=a("<div></div>").append(x).append("<table border='0' class='EditTable' id='"+
u+"_2'><tbody><tr id='Act_Buttons'><td class='navButton' width='"+c.labelswidth+"'>"+(d?m+g:g+m)+"</td><td class='EditButton'>"+y+"</td></tr></tbody></table>");a.jgrid.createModal(v,x,c,"#gview_"+a.jgrid.jqID(r.p.id),a("#gview_"+a.jgrid.jqID(r.p.id))[0]);d&&(a("#pData, #nData","#"+u+"_2").css("float","right"),a(".EditButton","#"+u+"_2").css("text-align","left"));c.viewPagerButtons||a("#pData, #nData","#"+u+"_2").hide();x=null;a("#"+v.themodal).keydown(function(d){if(27===d.which)return b[r.p.id].closeOnEscape&&
a.jgrid.hideModal("#"+a.jgrid.jqID(v.themodal),{gb:c.gbox,jqm:c.jqModal,onClose:c.onClose}),!1;if(!0===c.navkeys[0]){if(d.which===c.navkeys[1])return a("#pData","#"+u+"_2").trigger("click"),!1;if(d.which===c.navkeys[2])return a("#nData","#"+u+"_2").trigger("click"),!1}});c.closeicon=a.extend([!0,"left","ui-icon-close"],c.closeicon);!0===c.closeicon[0]&&a("#cData","#"+u+"_2").addClass("right"===c.closeicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='ui-icon "+c.closeicon[2]+
"'></span>");a.isFunction(c.beforeShowForm)&&c.beforeShowForm.call(r,a("#"+k));a.jgrid.viewModal("#"+a.jgrid.jqID(v.themodal),{gbox:"#gbox_"+a.jgrid.jqID(f),jqm:c.jqModal,overlay:c.overlay,modal:c.modal,onHide:function(b){a(r).data("viewProp",{top:parseFloat(a(b.w).css("top")),left:parseFloat(a(b.w).css("left")),width:a(b.w).width(),height:a(b.w).height(),dataheight:a("#"+k).height(),datawidth:a("#"+k).width()});b.w.remove();b.o&&b.o.remove()}});a(".fm-button:not(.ui-state-disabled)","#"+u+"_2").hover(function(){a(this).addClass("ui-state-hover")},
function(){a(this).removeClass("ui-state-hover")});e();a("#cData","#"+u+"_2").click(function(){a.jgrid.hideModal("#"+a.jgrid.jqID(v.themodal),{gb:"#gbox_"+a.jgrid.jqID(f),jqm:c.jqModal,onClose:c.onClose});return!1});a("#nData","#"+u+"_2").click(function(){a("#FormError","#"+u).hide();var b=s();b[0]=parseInt(b[0],10);-1!==b[0]&&b[1][b[0]+1]&&(a.isFunction(c.onclickPgButtons)&&c.onclickPgButtons.call(r,"next",a("#"+k),b[1][b[0]]),w(b[1][b[0]+1],r),a(r).jqGrid("setSelection",b[1][b[0]+1]),a.isFunction(c.afterclickPgButtons)&&
c.afterclickPgButtons.call(r,"next",a("#"+k),b[1][b[0]+1]),t(b[0]+1,b));e();return!1});a("#pData","#"+u+"_2").click(function(){a("#FormError","#"+u).hide();var b=s();-1!==b[0]&&b[1][b[0]-1]&&(a.isFunction(c.onclickPgButtons)&&c.onclickPgButtons.call(r,"prev",a("#"+k),b[1][b[0]]),w(b[1][b[0]-1],r),a(r).jqGrid("setSelection",b[1][b[0]-1]),a.isFunction(c.afterclickPgButtons)&&c.afterclickPgButtons.call(r,"prev",a("#"+k),b[1][b[0]-1]),t(b[0]-1,b));e();return!1});x=s();t(x[0],x)}}})},delGridRow:function(z,
c){c=a.extend(!0,{top:0,left:0,width:240,height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,url:"",mtype:"POST",reloadAfterSubmit:!0,beforeShowForm:null,beforeInitData:null,afterShowForm:null,beforeSubmit:null,onclickSubmit:null,afterSubmit:null,jqModal:!0,closeOnEscape:!1,delData:{},delicon:[],cancelicon:[],onClose:null,ajaxDelOptions:{},processing:!1,serializeDelData:null,useDataProxy:!1},a.jgrid.del,c||{});b[a(this)[0].p.id]=c;return this.each(function(){var e=this;if(e.grid&&
z){var h=a.isFunction(b[e.p.id].beforeShowForm),w=a.isFunction(b[e.p.id].afterShowForm),t=a.isFunction(b[e.p.id].beforeInitData)?b[e.p.id].beforeInitData:!1,s=e.p.id,r={},f=!0,k="DelTbl_"+a.jgrid.jqID(s),u,x,d,v,g="DelTbl_"+s,m={themodal:"delmod"+s,modalhead:"delhd"+s,modalcontent:"delcnt"+s,scrollelm:k};a.isArray(z)&&(z=z.join());if(void 0!==a("#"+a.jgrid.jqID(m.themodal))[0]){t&&(f=t.call(e,a("#"+k)),void 0===f&&(f=!0));if(!1===f)return;a("#DelData>td","#"+k).text(z);a("#DelError","#"+k).hide();
!0===b[e.p.id].processing&&(b[e.p.id].processing=!1,a("#dData","#"+k).removeClass("ui-state-active"));h&&b[e.p.id].beforeShowForm.call(e,a("#"+k));a.jgrid.viewModal("#"+a.jgrid.jqID(m.themodal),{gbox:"#gbox_"+a.jgrid.jqID(s),jqm:b[e.p.id].jqModal,jqM:!1,overlay:b[e.p.id].overlay,modal:b[e.p.id].modal})}else{var p=isNaN(b[e.p.id].dataheight)?b[e.p.id].dataheight:b[e.p.id].dataheight+"px",q=isNaN(c.datawidth)?c.datawidth:c.datawidth+"px",g="<div id='"+g+"' class='formdata' style='width:"+q+";overflow:auto;position:relative;height:"+
p+";'><table class='DelTable'><tbody>",g=g+"<tr id='DelError' style='display:none'><td class='ui-state-error'></td></tr>",g=g+("<tr id='DelData' style='display:none'><td >"+z+"</td></tr>"),g=g+('<tr><td class="delmsg" style="white-space:pre;">'+b[e.p.id].msg+"</td></tr><tr><td >&#160;</td></tr>"),g=g+"</tbody></table></div>",g=g+("<table cellspacing='0' cellpadding='0' border='0' class='EditTable' id='"+k+"_2'><tbody><tr><td><hr class='ui-widget-content' style='margin:1px'/></td></tr><tr><td class='DelButton EditButton'>"+
("<a id='dData' class='fm-button ui-state-default ui-corner-all'>"+c.bSubmit+"</a>")+"&#160;"+("<a id='eData' class='fm-button ui-state-default ui-corner-all'>"+c.bCancel+"</a>")+"</td></tr></tbody></table>");c.gbox="#gbox_"+a.jgrid.jqID(s);a.jgrid.createModal(m,g,c,"#gview_"+a.jgrid.jqID(e.p.id),a("#gview_"+a.jgrid.jqID(e.p.id))[0]);t&&(f=t.call(e,a("#"+k)),void 0===f&&(f=!0));if(!1===f)return;a(".fm-button","#"+k+"_2").hover(function(){a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")});
c.delicon=a.extend([!0,"left","ui-icon-scissors"],b[e.p.id].delicon);c.cancelicon=a.extend([!0,"left","ui-icon-cancel"],b[e.p.id].cancelicon);!0===c.delicon[0]&&a("#dData","#"+k+"_2").addClass("right"===c.delicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='ui-icon "+c.delicon[2]+"'></span>");!0===c.cancelicon[0]&&a("#eData","#"+k+"_2").addClass("right"===c.cancelicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='ui-icon "+c.cancelicon[2]+"'></span>");
a("#dData","#"+k+"_2").click(function(){var f=[!0,""],g,h=a("#DelData>td","#"+k).text();r={};a.isFunction(b[e.p.id].onclickSubmit)&&(r=b[e.p.id].onclickSubmit.call(e,b[e.p.id],h)||{});a.isFunction(b[e.p.id].beforeSubmit)&&(f=b[e.p.id].beforeSubmit.call(e,h));if(f[0]&&!b[e.p.id].processing){b[e.p.id].processing=!0;d=e.p.prmNames;u=a.extend({},b[e.p.id].delData,r);v=d.oper;u[v]=d.deloper;x=d.id;h=String(h).split(",");if(!h.length)return!1;for(g in h)h.hasOwnProperty(g)&&(h[g]=a.jgrid.stripPref(e.p.idPrefix,
h[g]));u[x]=h.join();a(this).addClass("ui-state-active");g=a.extend({url:b[e.p.id].url||a(e).jqGrid("getGridParam","editurl"),type:b[e.p.id].mtype,data:a.isFunction(b[e.p.id].serializeDelData)?b[e.p.id].serializeDelData.call(e,u):u,complete:function(d,g){var q;300<=d.status&&304!==d.status?(f[0]=!1,a.isFunction(b[e.p.id].errorTextFormat)?f[1]=b[e.p.id].errorTextFormat.call(e,d):f[1]=g+" Status: '"+d.statusText+"'. Error code: "+d.status):a.isFunction(b[e.p.id].afterSubmit)&&(f=b[e.p.id].afterSubmit.call(e,
d,u));if(!1===f[0])a("#DelError>td","#"+k).html(f[1]),a("#DelError","#"+k).show();else{if(b[e.p.id].reloadAfterSubmit&&"local"!==e.p.datatype)a(e).trigger("reloadGrid");else{if(!0===e.p.treeGrid)try{a(e).jqGrid("delTreeNode",e.p.idPrefix+h[0])}catch(p){}else for(q=0;q<h.length;q++)a(e).jqGrid("delRowData",e.p.idPrefix+h[q]);e.p.selrow=null;e.p.selarrrow=[]}a.isFunction(b[e.p.id].afterComplete)&&setTimeout(function(){b[e.p.id].afterComplete.call(e,d,h)},500)}b[e.p.id].processing=!1;a("#dData","#"+
k+"_2").removeClass("ui-state-active");f[0]&&a.jgrid.hideModal("#"+a.jgrid.jqID(m.themodal),{gb:"#gbox_"+a.jgrid.jqID(s),jqm:c.jqModal,onClose:b[e.p.id].onClose})}},a.jgrid.ajaxOptions,b[e.p.id].ajaxDelOptions);g.url||b[e.p.id].useDataProxy||(a.isFunction(e.p.dataProxy)?b[e.p.id].useDataProxy=!0:(f[0]=!1,f[1]+=" "+a.jgrid.errors.nourl));f[0]&&(b[e.p.id].useDataProxy?(g=e.p.dataProxy.call(e,g,"del_"+e.p.id),void 0===g&&(g=[!0,""]),!1===g[0]?(f[0]=!1,f[1]=g[1]||"Error deleting the selected row!"):a.jgrid.hideModal("#"+
a.jgrid.jqID(m.themodal),{gb:"#gbox_"+a.jgrid.jqID(s),jqm:c.jqModal,onClose:b[e.p.id].onClose})):a.ajax(g))}!1===f[0]&&(a("#DelError>td","#"+k).html(f[1]),a("#DelError","#"+k).show());return!1});a("#eData","#"+k+"_2").click(function(){a.jgrid.hideModal("#"+a.jgrid.jqID(m.themodal),{gb:"#gbox_"+a.jgrid.jqID(s),jqm:b[e.p.id].jqModal,onClose:b[e.p.id].onClose});return!1});h&&b[e.p.id].beforeShowForm.call(e,a("#"+k));a.jgrid.viewModal("#"+a.jgrid.jqID(m.themodal),{gbox:"#gbox_"+a.jgrid.jqID(s),jqm:b[e.p.id].jqModal,
overlay:b[e.p.id].overlay,modal:b[e.p.id].modal})}w&&b[e.p.id].afterShowForm.call(e,a("#"+k));!0===b[e.p.id].closeOnEscape&&setTimeout(function(){a(".ui-jqdialog-titlebar-close","#"+a.jgrid.jqID(m.modalhead)).focus()},0)}})},navGrid:function(b,c,e,h,w,t,s){c=a.extend({edit:!0,editicon:"ui-icon-pencil",add:!0,addicon:"ui-icon-plus",del:!0,delicon:"ui-icon-trash",search:!0,searchicon:"ui-icon-search",refresh:!0,refreshicon:"ui-icon-refresh",refreshstate:"firstpage",view:!1,viewicon:"ui-icon-document",
position:"left",closeOnEscape:!0,beforeRefresh:null,afterRefresh:null,cloneToTop:!1,alertwidth:200,alertheight:"auto",alerttop:null,alertleft:null,alertzIndex:null},a.jgrid.nav,c||{});return this.each(function(){if(!this.nav){var r={themodal:"alertmod_"+this.p.id,modalhead:"alerthd_"+this.p.id,modalcontent:"alertcnt_"+this.p.id},f=this,k;if(f.grid&&"string"===typeof b){void 0===a("#"+r.themodal)[0]&&(c.alerttop||c.alertleft||(void 0!==window.innerWidth?(c.alertleft=window.innerWidth,c.alerttop=window.innerHeight):
void 0!==document.documentElement&&void 0!==document.documentElement.clientWidth&&0!==document.documentElement.clientWidth?(c.alertleft=document.documentElement.clientWidth,c.alerttop=document.documentElement.clientHeight):(c.alertleft=1024,c.alerttop=768),c.alertleft=c.alertleft/2-parseInt(c.alertwidth,10)/2,c.alerttop=c.alerttop/2-25),a.jgrid.createModal(r,"<div>"+c.alerttext+"</div><span tabindex='0'><span tabindex='-1' id='jqg_alrt'></span></span>",{gbox:"#gbox_"+a.jgrid.jqID(f.p.id),jqModal:!0,
drag:!0,resize:!0,caption:c.alertcap,top:c.alerttop,left:c.alertleft,width:c.alertwidth,height:c.alertheight,closeOnEscape:c.closeOnEscape,zIndex:c.alertzIndex},"#gview_"+a.jgrid.jqID(f.p.id),a("#gbox_"+a.jgrid.jqID(f.p.id))[0],!0));var u=1,x,d=function(){a(this).hasClass("ui-state-disabled")||a(this).addClass("ui-state-hover")},v=function(){a(this).removeClass("ui-state-hover")};c.cloneToTop&&f.p.toppager&&(u=2);for(x=0;x<u;x++){var g=a("<table cellspacing='0' cellpadding='0' border='0' class='ui-pg-table navtable' style='float:left;table-layout:auto;'><tbody><tr></tr></tbody></table>"),
m,p;0===x?(m=b,p=f.p.id,m===f.p.toppager&&(p+="_top",u=1)):(m=f.p.toppager,p=f.p.id+"_top");"rtl"===f.p.direction&&a(g).attr("dir","rtl").css("float","right");c.add&&(h=h||{},k=a("<td class='ui-pg-button ui-corner-all'></td>"),a(k).append("<div class='ui-pg-div'><span class='ui-icon "+c.addicon+"'></span>"+c.addtext+"</div>"),a("tr",g).append(k),a(k,g).attr({title:c.addtitle||"",id:h.id||"add_"+p}).click(function(){a(this).hasClass("ui-state-disabled")||(a.isFunction(c.addfunc)?c.addfunc.call(f):
a(f).jqGrid("editGridRow","new",h));return!1}).hover(d,v),k=null);c.edit&&(k=a("<td class='ui-pg-button ui-corner-all'></td>"),e=e||{},a(k).append("<div class='ui-pg-div'><span class='ui-icon "+c.editicon+"'></span>"+c.edittext+"</div>"),a("tr",g).append(k),a(k,g).attr({title:c.edittitle||"",id:e.id||"edit_"+p}).click(function(){if(!a(this).hasClass("ui-state-disabled")){var b=f.p.selrow;b?a.isFunction(c.editfunc)?c.editfunc.call(f,b):a(f).jqGrid("editGridRow",b,e):(a.jgrid.viewModal("#"+r.themodal,
{gbox:"#gbox_"+a.jgrid.jqID(f.p.id),jqm:!0}),a("#jqg_alrt").focus())}return!1}).hover(d,v),k=null);c.view&&(k=a("<td class='ui-pg-button ui-corner-all'></td>"),s=s||{},a(k).append("<div class='ui-pg-div'><span class='ui-icon "+c.viewicon+"'></span>"+c.viewtext+"</div>"),a("tr",g).append(k),a(k,g).attr({title:c.viewtitle||"",id:s.id||"view_"+p}).click(function(){if(!a(this).hasClass("ui-state-disabled")){var b=f.p.selrow;b?a.isFunction(c.viewfunc)?c.viewfunc.call(f,b):a(f).jqGrid("viewGridRow",b,s):
(a.jgrid.viewModal("#"+r.themodal,{gbox:"#gbox_"+a.jgrid.jqID(f.p.id),jqm:!0}),a("#jqg_alrt").focus())}return!1}).hover(d,v),k=null);c.del&&(k=a("<td class='ui-pg-button ui-corner-all'></td>"),w=w||{},a(k).append("<div class='ui-pg-div'><span class='ui-icon "+c.delicon+"'></span>"+c.deltext+"</div>"),a("tr",g).append(k),a(k,g).attr({title:c.deltitle||"",id:w.id||"del_"+p}).click(function(){if(!a(this).hasClass("ui-state-disabled")){var b;f.p.multiselect?(b=f.p.selarrrow,0===b.length&&(b=null)):b=
f.p.selrow;b?a.isFunction(c.delfunc)?c.delfunc.call(f,b):a(f).jqGrid("delGridRow",b,w):(a.jgrid.viewModal("#"+r.themodal,{gbox:"#gbox_"+a.jgrid.jqID(f.p.id),jqm:!0}),a("#jqg_alrt").focus())}return!1}).hover(d,v),k=null);(c.add||c.edit||c.del||c.view)&&a("tr",g).append("<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'></span></td>");c.search&&(k=a("<td class='ui-pg-button ui-corner-all'></td>"),t=t||{},a(k).append("<div class='ui-pg-div'><span class='ui-icon "+
c.searchicon+"'></span>"+c.searchtext+"</div>"),a("tr",g).append(k),a(k,g).attr({title:c.searchtitle||"",id:t.id||"search_"+p}).click(function(){a(this).hasClass("ui-state-disabled")||(a.isFunction(c.searchfunc)?c.searchfunc.call(f,t):a(f).jqGrid("searchGrid",t));return!1}).hover(d,v),t.showOnLoad&&!0===t.showOnLoad&&a(k,g).click(),k=null);c.refresh&&(k=a("<td class='ui-pg-button ui-corner-all'></td>"),a(k).append("<div class='ui-pg-div'><span class='ui-icon "+c.refreshicon+"'></span>"+c.refreshtext+
"</div>"),a("tr",g).append(k),a(k,g).attr({title:c.refreshtitle||"",id:"refresh_"+p}).click(function(){if(!a(this).hasClass("ui-state-disabled")){a.isFunction(c.beforeRefresh)&&c.beforeRefresh.call(f);f.p.search=!1;f.p.resetsearch=!0;try{var b=f.p.id;f.p.postData.filters="";try{a("#fbox_"+a.jgrid.jqID(b)).jqFilter("resetFilter")}catch(d){}a.isFunction(f.clearToolbar)&&f.clearToolbar.call(f,!1)}catch(e){}switch(c.refreshstate){case "firstpage":a(f).trigger("reloadGrid",[{page:1}]);break;case "current":a(f).trigger("reloadGrid",
[{current:!0}])}a.isFunction(c.afterRefresh)&&c.afterRefresh.call(f)}return!1}).hover(d,v),k=null);k=a(".ui-jqgrid").css("font-size")||"11px";a("body").append("<div id='testpg2' class='ui-jqgrid ui-widget ui-widget-content' style='font-size:"+k+";visibility:hidden;' ></div>");k=a(g).clone().appendTo("#testpg2").width();a("#testpg2").remove();a(m+"_"+c.position,m).append(g);f.p._nvtd&&(k>f.p._nvtd[0]&&(a(m+"_"+c.position,m).width(k),f.p._nvtd[0]=k),f.p._nvtd[1]=k);g=k=k=null;this.nav=!0}}}})},navButtonAdd:function(b,
c){c=a.extend({caption:"newButton",title:"",buttonicon:"ui-icon-newwin",onClickButton:null,position:"last",cursor:"pointer"},c||{});return this.each(function(){if(this.grid){"string"===typeof b&&0!==b.indexOf("#")&&(b="#"+a.jgrid.jqID(b));var e=a(".navtable",b)[0],h=this;if(e&&(!c.id||void 0===a("#"+a.jgrid.jqID(c.id),e)[0])){var w=a("<td></td>");"NONE"===c.buttonicon.toString().toUpperCase()?a(w).addClass("ui-pg-button ui-corner-all").append("<div class='ui-pg-div'>"+c.caption+"</div>"):a(w).addClass("ui-pg-button ui-corner-all").append("<div class='ui-pg-div'><span class='ui-icon "+
c.buttonicon+"'></span>"+c.caption+"</div>");c.id&&a(w).attr("id",c.id);"first"===c.position?0===e.rows[0].cells.length?a("tr",e).append(w):a("tr td:eq(0)",e).before(w):a("tr",e).append(w);a(w,e).attr("title",c.title||"").click(function(b){a(this).hasClass("ui-state-disabled")||a.isFunction(c.onClickButton)&&c.onClickButton.call(h,b);return!1}).hover(function(){a(this).hasClass("ui-state-disabled")||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")})}}})},navSeparatorAdd:function(b,
c){c=a.extend({sepclass:"ui-separator",sepcontent:"",position:"last"},c||{});return this.each(function(){if(this.grid){"string"===typeof b&&0!==b.indexOf("#")&&(b="#"+a.jgrid.jqID(b));var e=a(".navtable",b)[0];if(e){var h="<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='"+c.sepclass+"'></span>"+c.sepcontent+"</td>";"first"===c.position?0===e.rows[0].cells.length?a("tr",e).append(h):a("tr td:eq(0)",e).before(h):a("tr",e).append(h)}}})},GridToForm:function(b,c){return this.each(function(){var e=
this,h;if(e.grid){var w=a(e).jqGrid("getRowData",b);if(w)for(h in w)w.hasOwnProperty(h)&&(a("[name="+a.jgrid.jqID(h)+"]",c).is("input:radio")||a("[name="+a.jgrid.jqID(h)+"]",c).is("input:checkbox")?a("[name="+a.jgrid.jqID(h)+"]",c).each(function(){if(a(this).val()==w[h])a(this)[e.p.useProp?"prop":"attr"]("checked",!0);else a(this)[e.p.useProp?"prop":"attr"]("checked",!1)}):a("[name="+a.jgrid.jqID(h)+"]",c).val(w[h]))}})},FormToGrid:function(b,c,e,h){return this.each(function(){if(this.grid){e||(e=
"set");h||(h="first");var w=a(c).serializeArray(),t={};a.each(w,function(a,b){t[b.name]=b.value});"add"===e?a(this).jqGrid("addRowData",b,t,h):"set"===e&&a(this).jqGrid("setRowData",b,t)}})}})})(jQuery);
(function(a){a.fn.jqFilter=function(d){if("string"===typeof d){var q=a.fn.jqFilter[d];if(!q)throw"jqFilter - No such method: "+d;var x=a.makeArray(arguments).slice(1);return q.apply(this,x)}var n=a.extend(!0,{filter:null,columns:[],onChange:null,afterRedraw:null,checkValues:null,error:!1,errmsg:"",errorcheck:!0,showQuery:!0,sopt:null,ops:[],operands:null,numopts:"eq ne lt le gt ge nu nn in ni".split(" "),stropts:"eq ne bw bn ew en cn nc nu nn in ni".split(" "),strarr:["text","string","blob"],groupOps:[{op:"AND",
text:"AND"},{op:"OR",text:"OR"}],groupButton:!0,ruleButtons:!0,direction:"ltr"},a.jgrid.filter,d||{});return this.each(function(){if(!this.filter){this.p=n;if(null===this.p.filter||void 0===this.p.filter)this.p.filter={groupOp:this.p.groupOps[0].op,rules:[],groups:[]};var d,q=this.p.columns.length,f,w=/msie/i.test(navigator.userAgent)&&!window.opera;this.p.initFilter=a.extend(!0,{},this.p.filter);if(q){for(d=0;d<q;d++)f=this.p.columns[d],f.stype?f.inputtype=f.stype:f.inputtype||(f.inputtype="text"),
f.sorttype?f.searchtype=f.sorttype:f.searchtype||(f.searchtype="string"),void 0===f.hidden&&(f.hidden=!1),f.label||(f.label=f.name),f.index&&(f.name=f.index),f.hasOwnProperty("searchoptions")||(f.searchoptions={}),f.hasOwnProperty("searchrules")||(f.searchrules={});this.p.showQuery&&a(this).append("<table class='queryresult ui-widget ui-widget-content' style='display:block;max-width:440px;border:0px none;' dir='"+this.p.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>");var u=
function(g,l){var b=[!0,""],c=a("#"+a.jgrid.jqID(n.id))[0]||null;if(a.isFunction(l.searchrules))b=l.searchrules.call(c,g,l);else if(a.jgrid&&a.jgrid.checkValues)try{b=a.jgrid.checkValues.call(c,g,-1,l.searchrules,l.label)}catch(m){}b&&b.length&&!1===b[0]&&(n.error=!b[0],n.errmsg=b[1])};this.onchange=function(){this.p.error=!1;this.p.errmsg="";return a.isFunction(this.p.onChange)?this.p.onChange.call(this,this.p):!1};this.reDraw=function(){a("table.group:first",this).remove();var g=this.createTableForGroup(n.filter,
null);a(this).append(g);a.isFunction(this.p.afterRedraw)&&this.p.afterRedraw.call(this,this.p)};this.createTableForGroup=function(g,l){var b=this,c,m=a("<table class='group ui-widget ui-widget-content' style='border:0px none;'><tbody></tbody></table>"),e="left";"rtl"===this.p.direction&&(e="right",m.attr("dir","rtl"));null===l&&m.append("<tr class='error' style='display:none;'><th colspan='5' class='ui-state-error' align='"+e+"'></th></tr>");var h=a("<tr></tr>");m.append(h);e=a("<th colspan='5' align='"+
e+"'></th>");h.append(e);if(!0===this.p.ruleButtons){var d=a("<select class='opsel'></select>");e.append(d);var h="",k;for(c=0;c<n.groupOps.length;c++)k=g.groupOp===b.p.groupOps[c].op?" selected='selected'":"",h+="<option value='"+b.p.groupOps[c].op+"'"+k+">"+b.p.groupOps[c].text+"</option>";d.append(h).bind("change",function(){g.groupOp=a(d).val();b.onchange()})}h="<span></span>";this.p.groupButton&&(h=a("<input type='button' value='+ {}' title='Add subgroup' class='add-group'/>"),h.bind("click",
function(){void 0===g.groups&&(g.groups=[]);g.groups.push({groupOp:n.groupOps[0].op,rules:[],groups:[]});b.reDraw();b.onchange();return!1}));e.append(h);if(!0===this.p.ruleButtons){var h=a("<input type='button' value='+' title='Add rule' class='add-rule ui-add'/>"),f;h.bind("click",function(){void 0===g.rules&&(g.rules=[]);for(c=0;c<b.p.columns.length;c++){var e=void 0===b.p.columns[c].search?!0:b.p.columns[c].search,l=!0===b.p.columns[c].hidden;if(!0===b.p.columns[c].searchoptions.searchhidden&&
e||e&&!l){f=b.p.columns[c];break}}e=f.searchoptions.sopt?f.searchoptions.sopt:b.p.sopt?b.p.sopt:-1!==a.inArray(f.searchtype,b.p.strarr)?b.p.stropts:b.p.numopts;g.rules.push({field:f.name,op:e[0],data:""});b.reDraw();return!1});e.append(h)}null!==l&&(h=a("<input type='button' value='-' title='Delete group' class='delete-group'/>"),e.append(h),h.bind("click",function(){for(c=0;c<l.groups.length;c++)if(l.groups[c]===g){l.groups.splice(c,1);break}b.reDraw();b.onchange();return!1}));if(void 0!==g.groups)for(c=
0;c<g.groups.length;c++)e=a("<tr></tr>"),m.append(e),h=a("<td class='first'></td>"),e.append(h),h=a("<td colspan='4'></td>"),h.append(this.createTableForGroup(g.groups[c],g)),e.append(h);void 0===g.groupOp&&(g.groupOp=b.p.groupOps[0].op);if(void 0!==g.rules)for(c=0;c<g.rules.length;c++)m.append(this.createTableRowForRule(g.rules[c],g));return m};this.createTableRowForRule=function(g,l){var b=this,c=a("#"+a.jgrid.jqID(n.id))[0]||null,m=a("<tr></tr>"),e,h,f,k,d="",s;m.append("<td class='first'></td>");
var p=a("<td class='columns'></td>");m.append(p);var q=a("<select></select>"),r,t=[];p.append(q);q.bind("change",function(){g.field=a(q).val();f=a(this).parents("tr:first");for(e=0;e<b.p.columns.length;e++)if(b.p.columns[e].name===g.field){k=b.p.columns[e];break}if(k){k.searchoptions.id=a.jgrid.randId();w&&"text"===k.inputtype&&!k.searchoptions.size&&(k.searchoptions.size=10);var d=a.jgrid.createEl.call(c,k.inputtype,k.searchoptions,"",!0,b.p.ajaxSelectOptions||{},!0);a(d).addClass("input-elm");h=
k.searchoptions.sopt?k.searchoptions.sopt:b.p.sopt?b.p.sopt:-1!==a.inArray(k.searchtype,b.p.strarr)?b.p.stropts:b.p.numopts;var l="",m=0;t=[];a.each(b.p.ops,function(){t.push(this.oper)});for(e=0;e<h.length;e++)r=a.inArray(h[e],t),-1!==r&&(0===m&&(g.op=b.p.ops[r].oper),l+="<option value='"+b.p.ops[r].oper+"'>"+b.p.ops[r].text+"</option>",m++);a(".selectopts",f).empty().append(l);a(".selectopts",f)[0].selectedIndex=0;a.jgrid.msie&&9>a.jgrid.msiever()&&(l=parseInt(a("select.selectopts",f)[0].offsetWidth,
10)+1,a(".selectopts",f).width(l),a(".selectopts",f).css("width","auto"));a(".data",f).empty().append(d);a.jgrid.bindEv.call(c,d,k.searchoptions);a(".input-elm",f).bind("change",function(e){e=e.target;g.data="SPAN"===e.nodeName.toUpperCase()&&k.searchoptions&&a.isFunction(k.searchoptions.custom_value)?k.searchoptions.custom_value.call(c,a(e).children(".customelement:first"),"get"):e.value;b.onchange()});setTimeout(function(){g.data=a(d).val();b.onchange()},0)}});for(e=p=0;e<b.p.columns.length;e++){s=
void 0===b.p.columns[e].search?!0:b.p.columns[e].search;var u=!0===b.p.columns[e].hidden;if(!0===b.p.columns[e].searchoptions.searchhidden&&s||s&&!u)s="",g.field===b.p.columns[e].name&&(s=" selected='selected'",p=e),d+="<option value='"+b.p.columns[e].name+"'"+s+">"+b.p.columns[e].label+"</option>"}q.append(d);d=a("<td class='operators'></td>");m.append(d);k=n.columns[p];k.searchoptions.id=a.jgrid.randId();w&&"text"===k.inputtype&&!k.searchoptions.size&&(k.searchoptions.size=10);p=a.jgrid.createEl.call(c,
k.inputtype,k.searchoptions,g.data,!0,b.p.ajaxSelectOptions||{},!0);if("nu"===g.op||"nn"===g.op)a(p).attr("readonly","true"),a(p).attr("disabled","true");var v=a("<select class='selectopts'></select>");d.append(v);v.bind("change",function(){g.op=a(v).val();f=a(this).parents("tr:first");var c=a(".input-elm",f)[0];"nu"===g.op||"nn"===g.op?(g.data="","SELECT"!==c.tagName.toUpperCase()&&(c.value=""),c.setAttribute("readonly","true"),c.setAttribute("disabled","true")):("SELECT"===c.tagName.toUpperCase()&&
(g.data=c.value),c.removeAttribute("readonly"),c.removeAttribute("disabled"));b.onchange()});h=k.searchoptions.sopt?k.searchoptions.sopt:b.p.sopt?b.p.sopt:-1!==a.inArray(k.searchtype,b.p.strarr)?b.p.stropts:b.p.numopts;d="";a.each(b.p.ops,function(){t.push(this.oper)});for(e=0;e<h.length;e++)r=a.inArray(h[e],t),-1!==r&&(s=g.op===b.p.ops[r].oper?" selected='selected'":"",d+="<option value='"+b.p.ops[r].oper+"'"+s+">"+b.p.ops[r].text+"</option>");v.append(d);d=a("<td class='data'></td>");m.append(d);
d.append(p);a.jgrid.bindEv.call(c,p,k.searchoptions);a(p).addClass("input-elm").bind("change",function(){g.data="custom"===k.inputtype?k.searchoptions.custom_value.call(c,a(this).children(".customelement:first"),"get"):a(this).val();b.onchange()});d=a("<td></td>");m.append(d);!0===this.p.ruleButtons&&(p=a("<input type='button' value='-' title='Delete rule' class='delete-rule ui-del'/>"),d.append(p),p.bind("click",function(){for(e=0;e<l.rules.length;e++)if(l.rules[e]===g){l.rules.splice(e,1);break}b.reDraw();
b.onchange();return!1}));return m};this.getStringForGroup=function(a){var d="(",b;if(void 0!==a.groups)for(b=0;b<a.groups.length;b++){1<d.length&&(d+=" "+a.groupOp+" ");try{d+=this.getStringForGroup(a.groups[b])}catch(c){alert(c)}}if(void 0!==a.rules)try{for(b=0;b<a.rules.length;b++)1<d.length&&(d+=" "+a.groupOp+" "),d+=this.getStringForRule(a.rules[b])}catch(f){alert(f)}d+=")";return"()"===d?"":d};this.getStringForRule=function(d){var f="",b="",c,m;for(c=0;c<this.p.ops.length;c++)if(this.p.ops[c].oper===
d.op){f=this.p.operands.hasOwnProperty(d.op)?this.p.operands[d.op]:"";b=this.p.ops[c].oper;break}for(c=0;c<this.p.columns.length;c++)if(this.p.columns[c].name===d.field){m=this.p.columns[c];break}if(void 0==m)return"";c=d.data;if("bw"===b||"bn"===b)c+="%";if("ew"===b||"en"===b)c="%"+c;if("cn"===b||"nc"===b)c="%"+c+"%";if("in"===b||"ni"===b)c=" ("+c+")";n.errorcheck&&u(d.data,m);return-1!==a.inArray(m.searchtype,["int","integer","float","number","currency"])||"nn"===b||"nu"===b?d.field+" "+f+" "+c:
d.field+" "+f+' "'+c+'"'};this.resetFilter=function(){this.p.filter=a.extend(!0,{},this.p.initFilter);this.reDraw();this.onchange()};this.hideError=function(){a("th.ui-state-error",this).html("");a("tr.error",this).hide()};this.showError=function(){a("th.ui-state-error",this).html(this.p.errmsg);a("tr.error",this).show()};this.toUserFriendlyString=function(){return this.getStringForGroup(n.filter)};this.toString=function(){function a(b){var c="(",f;if(void 0!==b.groups)for(f=0;f<b.groups.length;f++)1<
c.length&&(c="OR"===b.groupOp?c+" || ":c+" && "),c+=a(b.groups[f]);if(void 0!==b.rules)for(f=0;f<b.rules.length;f++){1<c.length&&(c="OR"===b.groupOp?c+" || ":c+" && ");var e=b.rules[f];if(d.p.errorcheck){for(var h=void 0,n=void 0,h=0;h<d.p.columns.length;h++)if(d.p.columns[h].name===e.field){n=d.p.columns[h];break}n&&u(e.data,n)}c+=e.op+"(item."+e.field+",'"+e.data+"')"}c+=")";return"()"===c?"":c}var d=this;return a(this.p.filter)};this.reDraw();if(this.p.showQuery)this.onchange();this.filter=!0}}})};
a.extend(a.fn.jqFilter,{toSQLString:function(){var a="";this.each(function(){a=this.toUserFriendlyString()});return a},filterData:function(){var a;this.each(function(){a=this.p.filter});return a},getParameter:function(a){return void 0!==a&&this.p.hasOwnProperty(a)?this.p[a]:this.p},resetFilter:function(){return this.each(function(){this.resetFilter()})},addFilter:function(d){"string"===typeof d&&(d=a.jgrid.parse(d));this.each(function(){this.p.filter=d;this.reDraw();this.onchange()})}})})(jQuery);
(function(a){a.jgrid.inlineEdit=a.jgrid.inlineEdit||{};a.jgrid.extend({editRow:function(c,e,b,l,h,n,p,g,f){var m={},d=a.makeArray(arguments).slice(1);"object"===a.type(d[0])?m=d[0]:(void 0!==e&&(m.keys=e),a.isFunction(b)&&(m.oneditfunc=b),a.isFunction(l)&&(m.successfunc=l),void 0!==h&&(m.url=h),void 0!==n&&(m.extraparam=n),a.isFunction(p)&&(m.aftersavefunc=p),a.isFunction(g)&&(m.errorfunc=g),a.isFunction(f)&&(m.afterrestorefunc=f));m=a.extend(!0,{keys:!1,oneditfunc:null,successfunc:null,url:null,
extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST"},a.jgrid.inlineEdit,m);return this.each(function(){var d=this,f,e,b,g=0,h=null,n={},l,q;d.grid&&(l=a(d).jqGrid("getInd",c,!0),!1!==l&&(b=a.isFunction(m.beforeEditRow)?m.beforeEditRow.call(d,m,c):void 0,void 0===b&&(b=!0),b&&(b=a(l).attr("editable")||"0","0"!==b||a(l).hasClass("not-editable-row")||(q=d.p.colModel,a('td[role="gridcell"]',l).each(function(b){f=q[b].name;var l=!0===d.p.treeGrid&&f===
d.p.ExpandColumn;if(l)e=a("span:first",this).html();else try{e=a.unformat.call(d,this,{rowId:c,colModel:q[b]},b)}catch(m){e=q[b].edittype&&"textarea"===q[b].edittype?a(this).text():a(this).html()}if("cb"!==f&&"subgrid"!==f&&"rn"!==f&&(d.p.autoencode&&(e=a.jgrid.htmlDecode(e)),n[f]=e,!0===q[b].editable)){null===h&&(h=b);l?a("span:first",this).html(""):a(this).html("");var p=a.extend({},q[b].editoptions||{},{id:c+"_"+f,name:f});q[b].edittype||(q[b].edittype="text");if("&nbsp;"===e||"&#160;"===e||1===
e.length&&160===e.charCodeAt(0))e="";var x=a.jgrid.createEl.call(d,q[b].edittype,p,e,!0,a.extend({},a.jgrid.ajaxOptions,d.p.ajaxSelectOptions||{}));a(x).addClass("editable");l?a("span:first",this).append(x):a(this).append(x);a.jgrid.bindEv.call(d,x,p);"select"===q[b].edittype&&void 0!==q[b].editoptions&&!0===q[b].editoptions.multiple&&void 0===q[b].editoptions.dataUrl&&a.jgrid.msie&&a(x).width(a(x).width());g++}}),0<g&&(n.id=c,d.p.savedRow.push(n),a(l).attr("editable","1"),setTimeout(function(){a("td:eq("+
h+") input",l).focus()},0),!0===m.keys&&a(l).bind("keydown",function(b){if(27===b.keyCode){a(d).jqGrid("restoreRow",c,m.afterrestorefunc);if(d.p._inlinenav)try{a(d).jqGrid("showAddEditButtons")}catch(f){}return!1}if(13===b.keyCode){if("TEXTAREA"===b.target.tagName)return!0;if(a(d).jqGrid("saveRow",c,m)&&d.p._inlinenav)try{a(d).jqGrid("showAddEditButtons")}catch(e){}return!1}}),a(d).triggerHandler("jqGridInlineEditRow",[c,m]),a.isFunction(m.oneditfunc)&&m.oneditfunc.call(d,c))))))})},saveRow:function(c,
e,b,l,h,n,p){var g=a.makeArray(arguments).slice(1),f={};"object"===a.type(g[0])?f=g[0]:(a.isFunction(e)&&(f.successfunc=e),void 0!==b&&(f.url=b),void 0!==l&&(f.extraparam=l),a.isFunction(h)&&(f.aftersavefunc=h),a.isFunction(n)&&(f.errorfunc=n),a.isFunction(p)&&(f.afterrestorefunc=p));var f=a.extend(!0,{successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST"},a.jgrid.inlineEdit,f),m=!1,d=this[0],r,k={},y={},v={},w,z,u;if(!d.grid)return m;
u=a(d).jqGrid("getInd",c,!0);if(!1===u)return m;g=a.isFunction(f.beforeSaveRow)?f.beforeSaveRow.call(d,f,c):void 0;void 0===g&&(g=!0);if(g){g=a(u).attr("editable");f.url=f.url||d.p.editurl;if("1"===g){var t;a('td[role="gridcell"]',u).each(function(c){t=d.p.colModel[c];r=t.name;if("cb"!==r&&"subgrid"!==r&&!0===t.editable&&"rn"!==r&&!a(this).hasClass("not-editable-cell")){switch(t.edittype){case "checkbox":var b=["Yes","No"];t.editoptions&&(b=t.editoptions.value.split(":"));k[r]=a("input",this).is(":checked")?
b[0]:b[1];break;case "text":case "password":case "textarea":case "button":k[r]=a("input, textarea",this).val();break;case "select":if(t.editoptions.multiple){var b=a("select",this),e=[];k[r]=a(b).val();k[r]=k[r]?k[r].join(","):"";a("select option:selected",this).each(function(d,b){e[d]=a(b).text()});y[r]=e.join(",")}else k[r]=a("select option:selected",this).val(),y[r]=a("select option:selected",this).text();t.formatter&&"select"===t.formatter&&(y={});break;case "custom":try{if(t.editoptions&&a.isFunction(t.editoptions.custom_value)){if(k[r]=
t.editoptions.custom_value.call(d,a(".customelement",this),"get"),void 0===k[r])throw"e2";}else throw"e1";}catch(g){"e1"===g&&a.jgrid.info_dialog(a.jgrid.errors.errcap,"function 'custom_value' "+a.jgrid.edit.msg.nodefined,a.jgrid.edit.bClose),"e2"===g?a.jgrid.info_dialog(a.jgrid.errors.errcap,"function 'custom_value' "+a.jgrid.edit.msg.novalue,a.jgrid.edit.bClose):a.jgrid.info_dialog(a.jgrid.errors.errcap,g.message,a.jgrid.edit.bClose)}}z=a.jgrid.checkValues.call(d,k[r],c);if(!1===z[0])return!1;d.p.autoencode&&
(k[r]=a.jgrid.htmlEncode(k[r]));"clientArray"!==f.url&&t.editoptions&&!0===t.editoptions.NullIfEmpty&&""===k[r]&&(v[r]="null")}});if(!1===z[0]){try{var q=a(d).jqGrid("getGridRowById",c),s=a.jgrid.findPos(q);a.jgrid.info_dialog(a.jgrid.errors.errcap,z[1],a.jgrid.edit.bClose,{left:s[0],top:s[1]+a(q).outerHeight()})}catch(A){alert(z[1])}return m}g=d.p.prmNames;q=c;s=!1===d.p.keyIndex?g.id:d.p.colModel[d.p.keyIndex+(!0===d.p.rownumbers?1:0)+(!0===d.p.multiselect?1:0)+(!0===d.p.subGrid?1:0)].name;k&&(k[g.oper]=
g.editoper,void 0===k[s]||""===k[s]?k[s]=c:u.id!==d.p.idPrefix+k[s]&&(g=a.jgrid.stripPref(d.p.idPrefix,c),void 0!==d.p._index[g]&&(d.p._index[k[s]]=d.p._index[g],delete d.p._index[g]),c=d.p.idPrefix+k[s],a(u).attr("id",c),d.p.selrow===q&&(d.p.selrow=c),a.isArray(d.p.selarrrow)&&(g=a.inArray(q,d.p.selarrrow),0<=g&&(d.p.selarrrow[g]=c)),d.p.multiselect&&(g="jqg_"+d.p.id+"_"+c,a("input.cbox",u).attr("id",g).attr("name",g))),void 0===d.p.inlineData&&(d.p.inlineData={}),k=a.extend({},k,d.p.inlineData,
f.extraparam));if("clientArray"===f.url){k=a.extend({},k,y);d.p.autoencode&&a.each(k,function(d,b){k[d]=a.jgrid.htmlDecode(b)});g=a(d).jqGrid("setRowData",c,k);a(u).attr("editable","0");for(s=0;s<d.p.savedRow.length;s++)if(String(d.p.savedRow[s].id)===String(q)){w=s;break}0<=w&&d.p.savedRow.splice(w,1);a(d).triggerHandler("jqGridInlineAfterSaveRow",[c,g,k,f]);a.isFunction(f.aftersavefunc)&&f.aftersavefunc.call(d,c,g,f);m=!0;a(u).removeClass("jqgrid-new-row").unbind("keydown")}else a("#lui_"+a.jgrid.jqID(d.p.id)).show(),
v=a.extend({},k,v),v[s]=a.jgrid.stripPref(d.p.idPrefix,v[s]),a.ajax(a.extend({url:f.url,data:a.isFunction(d.p.serializeRowData)?d.p.serializeRowData.call(d,v):v,type:f.mtype,async:!1,complete:function(b,e){a("#lui_"+a.jgrid.jqID(d.p.id)).hide();if("success"===e){var g=!0,h;h=a(d).triggerHandler("jqGridInlineSuccessSaveRow",[b,c,f]);a.isArray(h)||(h=[!0,k]);h[0]&&a.isFunction(f.successfunc)&&(h=f.successfunc.call(d,b));a.isArray(h)?(g=h[0],k=h[1]||k):g=h;if(!0===g){d.p.autoencode&&a.each(k,function(b,
d){k[b]=a.jgrid.htmlDecode(d)});k=a.extend({},k,y);a(d).jqGrid("setRowData",c,k);a(u).attr("editable","0");for(g=0;g<d.p.savedRow.length;g++)if(String(d.p.savedRow[g].id)===String(c)){w=g;break}0<=w&&d.p.savedRow.splice(w,1);a(d).triggerHandler("jqGridInlineAfterSaveRow",[c,b,k,f]);a.isFunction(f.aftersavefunc)&&f.aftersavefunc.call(d,c,b);m=!0;a(u).removeClass("jqgrid-new-row").unbind("keydown")}else a(d).triggerHandler("jqGridInlineErrorSaveRow",[c,b,e,null,f]),a.isFunction(f.errorfunc)&&f.errorfunc.call(d,
c,b,e,null),!0===f.restoreAfterError&&a(d).jqGrid("restoreRow",c,f.afterrestorefunc)}},error:function(b,e,g){a("#lui_"+a.jgrid.jqID(d.p.id)).hide();a(d).triggerHandler("jqGridInlineErrorSaveRow",[c,b,e,g,f]);if(a.isFunction(f.errorfunc))f.errorfunc.call(d,c,b,e,g);else{b=b.responseText||b.statusText;try{a.jgrid.info_dialog(a.jgrid.errors.errcap,'<div class="ui-state-error">'+b+"</div>",a.jgrid.edit.bClose,{buttonalign:"right"})}catch(h){alert(b)}}!0===f.restoreAfterError&&a(d).jqGrid("restoreRow",
c,f.afterrestorefunc)}},a.jgrid.ajaxOptions,d.p.ajaxRowOptions||{}))}return m}},restoreRow:function(c,e){var b=a.makeArray(arguments).slice(1),l={};"object"===a.type(b[0])?l=b[0]:a.isFunction(e)&&(l.afterrestorefunc=e);l=a.extend(!0,{},a.jgrid.inlineEdit,l);return this.each(function(){var b=this,e=-1,p,g={},f;if(b.grid&&(p=a(b).jqGrid("getInd",c,!0),!1!==p&&(f=a.isFunction(l.beforeCancelRow)?l.beforeCancelRow.call(b,l,sr):void 0,void 0===f&&(f=!0),f))){for(f=0;f<b.p.savedRow.length;f++)if(String(b.p.savedRow[f].id)===
String(c)){e=f;break}if(0<=e){if(a.isFunction(a.fn.datepicker))try{a("input.hasDatepicker","#"+a.jgrid.jqID(p.id)).datepicker("hide")}catch(m){}a.each(b.p.colModel,function(){!0===this.editable&&b.p.savedRow[e].hasOwnProperty(this.name)&&(g[this.name]=b.p.savedRow[e][this.name])});a(b).jqGrid("setRowData",c,g);a(p).attr("editable","0").unbind("keydown");b.p.savedRow.splice(e,1);a("#"+a.jgrid.jqID(c),"#"+a.jgrid.jqID(b.p.id)).hasClass("jqgrid-new-row")&&setTimeout(function(){a(b).jqGrid("delRowData",
c);a(b).jqGrid("showAddEditButtons")},0)}a(b).triggerHandler("jqGridInlineAfterRestoreRow",[c]);a.isFunction(l.afterrestorefunc)&&l.afterrestorefunc.call(b,c)}})},addRow:function(c){c=a.extend(!0,{rowID:null,initdata:{},position:"first",useDefValues:!0,useFormatter:!1,addRowParams:{extraparam:{}}},c||{});return this.each(function(){if(this.grid){var e=this,b=a.isFunction(c.beforeAddRow)?c.beforeAddRow.call(e,c.addRowParams):void 0;void 0===b&&(b=!0);b&&(c.rowID=a.isFunction(c.rowID)?c.rowID.call(e,
c):null!=c.rowID?c.rowID:a.jgrid.randId(),!0===c.useDefValues&&a(e.p.colModel).each(function(){if(this.editoptions&&this.editoptions.defaultValue){var b=this.editoptions.defaultValue,b=a.isFunction(b)?b.call(e):b;c.initdata[this.name]=b}}),a(e).jqGrid("addRowData",c.rowID,c.initdata,c.position),c.rowID=e.p.idPrefix+c.rowID,a("#"+a.jgrid.jqID(c.rowID),"#"+a.jgrid.jqID(e.p.id)).addClass("jqgrid-new-row"),c.useFormatter?a("#"+a.jgrid.jqID(c.rowID)+" .ui-inline-edit","#"+a.jgrid.jqID(e.p.id)).click():
(b=e.p.prmNames,c.addRowParams.extraparam[b.oper]=b.addoper,a(e).jqGrid("editRow",c.rowID,c.addRowParams),a(e).jqGrid("setSelection",c.rowID)))}})},inlineNav:function(c,e){e=a.extend(!0,{edit:!0,editicon:"ui-icon-pencil",add:!0,addicon:"ui-icon-plus",save:!0,saveicon:"ui-icon-disk",cancel:!0,cancelicon:"ui-icon-cancel",addParams:{addRowParams:{extraparam:{}}},editParams:{},restoreAfterSelect:!0},a.jgrid.nav,e||{});return this.each(function(){if(this.grid){var b=this,l,h=a.jgrid.jqID(b.p.id);b.p._inlinenav=
!0;if(!0===e.addParams.useFormatter){var n=b.p.colModel,p;for(p=0;p<n.length;p++)if(n[p].formatter&&"actions"===n[p].formatter){n[p].formatoptions&&(n=a.extend({keys:!1,onEdit:null,onSuccess:null,afterSave:null,onError:null,afterRestore:null,extraparam:{},url:null},n[p].formatoptions),e.addParams.addRowParams={keys:n.keys,oneditfunc:n.onEdit,successfunc:n.onSuccess,url:n.url,extraparam:n.extraparam,aftersavefunc:n.afterSave,errorfunc:n.onError,afterrestorefunc:n.afterRestore});break}}e.add&&a(b).jqGrid("navButtonAdd",
c,{caption:e.addtext,title:e.addtitle,buttonicon:e.addicon,id:b.p.id+"_iladd",onClickButton:function(){a(b).jqGrid("addRow",e.addParams);e.addParams.useFormatter||(a("#"+h+"_ilsave").removeClass("ui-state-disabled"),a("#"+h+"_ilcancel").removeClass("ui-state-disabled"),a("#"+h+"_iladd").addClass("ui-state-disabled"),a("#"+h+"_iledit").addClass("ui-state-disabled"))}});e.edit&&a(b).jqGrid("navButtonAdd",c,{caption:e.edittext,title:e.edittitle,buttonicon:e.editicon,id:b.p.id+"_iledit",onClickButton:function(){var c=
a(b).jqGrid("getGridParam","selrow");c?(a(b).jqGrid("editRow",c,e.editParams),a("#"+h+"_ilsave").removeClass("ui-state-disabled"),a("#"+h+"_ilcancel").removeClass("ui-state-disabled"),a("#"+h+"_iladd").addClass("ui-state-disabled"),a("#"+h+"_iledit").addClass("ui-state-disabled")):(a.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+h,jqm:!0}),a("#jqg_alrt").focus())}});e.save&&(a(b).jqGrid("navButtonAdd",c,{caption:e.savetext||"",title:e.savetitle||"Save row",buttonicon:e.saveicon,id:b.p.id+"_ilsave",onClickButton:function(){var c=
b.p.savedRow[0].id;if(c){var f=b.p.prmNames,m=f.oper,d=e.editParams;a("#"+a.jgrid.jqID(c),"#"+h).hasClass("jqgrid-new-row")?(e.addParams.addRowParams.extraparam[m]=f.addoper,d=e.addParams.addRowParams):(e.editParams.extraparam||(e.editParams.extraparam={}),e.editParams.extraparam[m]=f.editoper);a(b).jqGrid("saveRow",c,d)&&a(b).jqGrid("showAddEditButtons")}else a.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+h,jqm:!0}),a("#jqg_alrt").focus()}}),a("#"+h+"_ilsave").addClass("ui-state-disabled"));e.cancel&&
(a(b).jqGrid("navButtonAdd",c,{caption:e.canceltext||"",title:e.canceltitle||"Cancel row editing",buttonicon:e.cancelicon,id:b.p.id+"_ilcancel",onClickButton:function(){var c=b.p.savedRow[0].id,f=e.editParams;c?(a("#"+a.jgrid.jqID(c),"#"+h).hasClass("jqgrid-new-row")&&(f=e.addParams.addRowParams),a(b).jqGrid("restoreRow",c,f),a(b).jqGrid("showAddEditButtons")):(a.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+h,jqm:!0}),a("#jqg_alrt").focus())}}),a("#"+h+"_ilcancel").addClass("ui-state-disabled"));!0===
e.restoreAfterSelect&&(l=a.isFunction(b.p.beforeSelectRow)?b.p.beforeSelectRow:!1,b.p.beforeSelectRow=function(c,f){var h=!0;0<b.p.savedRow.length&&!0===b.p._inlinenav&&c!==b.p.selrow&&null!==b.p.selrow&&(b.p.selrow===e.addParams.rowID?a(b).jqGrid("delRowData",b.p.selrow):a(b).jqGrid("restoreRow",b.p.selrow,e.editParams),a(b).jqGrid("showAddEditButtons"));l&&(h=l.call(b,c,f));return h})}})},showAddEditButtons:function(){return this.each(function(){if(this.grid){var c=a.jgrid.jqID(this.p.id);a("#"+
c+"_ilsave").addClass("ui-state-disabled");a("#"+c+"_ilcancel").addClass("ui-state-disabled");a("#"+c+"_iladd").removeClass("ui-state-disabled");a("#"+c+"_iledit").removeClass("ui-state-disabled")}})}})})(jQuery);
(function(b){b.jgrid.extend({editCell:function(d,f,a){return this.each(function(){var c=this,g,e,h,k;if(c.grid&&!0===c.p.cellEdit){f=parseInt(f,10);c.p.selrow=c.rows[d].id;c.p.knv||b(c).jqGrid("GridNav");if(0<c.p.savedRow.length){if(!0===a&&d==c.p.iRow&&f==c.p.iCol)return;b(c).jqGrid("saveCell",c.p.savedRow[0].id,c.p.savedRow[0].ic)}else window.setTimeout(function(){b("#"+b.jgrid.jqID(c.p.knv)).attr("tabindex","-1").focus()},0);k=c.p.colModel[f];g=k.name;if("subgrid"!==g&&"cb"!==g&&"rn"!==g){h=b("td:eq("+
f+")",c.rows[d]);if(!0!==k.editable||!0!==a||h.hasClass("not-editable-cell"))0<=parseInt(c.p.iCol,10)&&0<=parseInt(c.p.iRow,10)&&(b("td:eq("+c.p.iCol+")",c.rows[c.p.iRow]).removeClass("edit-cell ui-state-highlight"),b(c.rows[c.p.iRow]).removeClass("selected-row ui-state-hover")),h.addClass("edit-cell ui-state-highlight"),b(c.rows[d]).addClass("selected-row ui-state-hover"),e=h.html().replace(/\&#160\;/ig,""),b(c).triggerHandler("jqGridSelectCell",[c.rows[d].id,g,e,d,f]),b.isFunction(c.p.onSelectCell)&&
c.p.onSelectCell.call(c,c.rows[d].id,g,e,d,f);else{0<=parseInt(c.p.iCol,10)&&0<=parseInt(c.p.iRow,10)&&(b("td:eq("+c.p.iCol+")",c.rows[c.p.iRow]).removeClass("edit-cell ui-state-highlight"),b(c.rows[c.p.iRow]).removeClass("selected-row ui-state-hover"));b(h).addClass("edit-cell ui-state-highlight");b(c.rows[d]).addClass("selected-row ui-state-hover");try{e=b.unformat.call(c,h,{rowId:c.rows[d].id,colModel:k},f)}catch(m){e=k.edittype&&"textarea"===k.edittype?b(h).text():b(h).html()}c.p.autoencode&&
(e=b.jgrid.htmlDecode(e));k.edittype||(k.edittype="text");c.p.savedRow.push({id:d,ic:f,name:g,v:e});if("&nbsp;"===e||"&#160;"===e||1===e.length&&160===e.charCodeAt(0))e="";if(b.isFunction(c.p.formatCell)){var l=c.p.formatCell.call(c,c.rows[d].id,g,e,d,f);void 0!==l&&(e=l)}b(c).triggerHandler("jqGridBeforeEditCell",[c.rows[d].id,g,e,d,f]);b.isFunction(c.p.beforeEditCell)&&c.p.beforeEditCell.call(c,c.rows[d].id,g,e,d,f);var l=b.extend({},k.editoptions||{},{id:d+"_"+g,name:g}),q=b.jgrid.createEl.call(c,
k.edittype,l,e,!0,b.extend({},b.jgrid.ajaxOptions,c.p.ajaxSelectOptions||{}));b(h).html("").append(q).attr("tabindex","0");b.jgrid.bindEv.call(c,q,l);window.setTimeout(function(){b(q).focus()},0);b("input, select, textarea",h).bind("keydown",function(a){27===a.keyCode&&(0<b("input.hasDatepicker",h).length?b(".ui-datepicker").is(":hidden")?b(c).jqGrid("restoreCell",d,f):b("input.hasDatepicker",h).datepicker("hide"):b(c).jqGrid("restoreCell",d,f));if(13===a.keyCode)return b(c).jqGrid("saveCell",d,f),
!1;if(9===a.keyCode){if(c.grid.hDiv.loading)return!1;a.shiftKey?b(c).jqGrid("prevCell",d,f):b(c).jqGrid("nextCell",d,f)}a.stopPropagation()});b(c).triggerHandler("jqGridAfterEditCell",[c.rows[d].id,g,e,d,f]);b.isFunction(c.p.afterEditCell)&&c.p.afterEditCell.call(c,c.rows[d].id,g,e,d,f)}c.p.iCol=f;c.p.iRow=d}}})},saveCell:function(d,f){return this.each(function(){var a=this,c;if(a.grid&&!0===a.p.cellEdit){c=1<=a.p.savedRow.length?0:null;if(null!==c){var g=b("td:eq("+f+")",a.rows[d]),e,h,k=a.p.colModel[f],
m=k.name,l=b.jgrid.jqID(m);switch(k.edittype){case "select":if(k.editoptions.multiple){var l=b("#"+d+"_"+l,a.rows[d]),q=[];(e=b(l).val())?e.join(","):e="";b("option:selected",l).each(function(a,c){q[a]=b(c).text()});h=q.join(",")}else e=b("#"+d+"_"+l+" option:selected",a.rows[d]).val(),h=b("#"+d+"_"+l+" option:selected",a.rows[d]).text();k.formatter&&(h=e);break;case "checkbox":var n=["Yes","No"];k.editoptions&&(n=k.editoptions.value.split(":"));h=e=b("#"+d+"_"+l,a.rows[d]).is(":checked")?n[0]:n[1];
break;case "password":case "text":case "textarea":case "button":h=e=b("#"+d+"_"+l,a.rows[d]).val();break;case "custom":try{if(k.editoptions&&b.isFunction(k.editoptions.custom_value)){e=k.editoptions.custom_value.call(a,b(".customelement",g),"get");if(void 0===e)throw"e2";h=e}else throw"e1";}catch(r){"e1"===r&&b.jgrid.info_dialog(b.jgrid.errors.errcap,"function 'custom_value' "+b.jgrid.edit.msg.nodefined,b.jgrid.edit.bClose),"e2"===r?b.jgrid.info_dialog(b.jgrid.errors.errcap,"function 'custom_value' "+
b.jgrid.edit.msg.novalue,b.jgrid.edit.bClose):b.jgrid.info_dialog(b.jgrid.errors.errcap,r.message,b.jgrid.edit.bClose)}}if(h!==a.p.savedRow[c].v){if(c=b(a).triggerHandler("jqGridBeforeSaveCell",[a.rows[d].id,m,e,d,f]))h=e=c;b.isFunction(a.p.beforeSaveCell)&&(c=a.p.beforeSaveCell.call(a,a.rows[d].id,m,e,d,f))&&(h=e=c);var s=b.jgrid.checkValues.call(a,e,f);if(!0===s[0]){c=b(a).triggerHandler("jqGridBeforeSubmitCell",[a.rows[d].id,m,e,d,f])||{};b.isFunction(a.p.beforeSubmitCell)&&((c=a.p.beforeSubmitCell.call(a,
a.rows[d].id,m,e,d,f))||(c={}));0<b("input.hasDatepicker",g).length&&b("input.hasDatepicker",g).datepicker("hide");if("remote"===a.p.cellsubmit)if(a.p.cellurl){var p={};a.p.autoencode&&(e=b.jgrid.htmlEncode(e));p[m]=e;n=a.p.prmNames;k=n.id;l=n.oper;p[k]=b.jgrid.stripPref(a.p.idPrefix,a.rows[d].id);p[l]=n.editoper;p=b.extend(c,p);b("#lui_"+b.jgrid.jqID(a.p.id)).show();a.grid.hDiv.loading=!0;b.ajax(b.extend({url:a.p.cellurl,data:b.isFunction(a.p.serializeCellData)?a.p.serializeCellData.call(a,p):p,
type:"POST",complete:function(c,k){b("#lui_"+a.p.id).hide();a.grid.hDiv.loading=!1;if("success"===k){var l=b(a).triggerHandler("jqGridAfterSubmitCell",[a,c,p.id,m,e,d,f])||[!0,""];!0===l[0]&&b.isFunction(a.p.afterSubmitCell)&&(l=a.p.afterSubmitCell.call(a,c,p.id,m,e,d,f));!0===l[0]?(b(g).empty(),b(a).jqGrid("setCell",a.rows[d].id,f,h,!1,!1,!0),b(g).addClass("dirty-cell"),b(a.rows[d]).addClass("edited"),b(a).triggerHandler("jqGridAfterSaveCell",[a.rows[d].id,m,e,d,f]),b.isFunction(a.p.afterSaveCell)&&
a.p.afterSaveCell.call(a,a.rows[d].id,m,e,d,f),a.p.savedRow.splice(0,1)):(b.jgrid.info_dialog(b.jgrid.errors.errcap,l[1],b.jgrid.edit.bClose),b(a).jqGrid("restoreCell",d,f))}},error:function(c,e,h){b("#lui_"+b.jgrid.jqID(a.p.id)).hide();a.grid.hDiv.loading=!1;b(a).triggerHandler("jqGridErrorCell",[c,e,h]);b.isFunction(a.p.errorCell)?a.p.errorCell.call(a,c,e,h):b.jgrid.info_dialog(b.jgrid.errors.errcap,c.status+" : "+c.statusText+"<br/>"+e,b.jgrid.edit.bClose);b(a).jqGrid("restoreCell",d,f)}},b.jgrid.ajaxOptions,
a.p.ajaxCellOptions||{}))}else try{b.jgrid.info_dialog(b.jgrid.errors.errcap,b.jgrid.errors.nourl,b.jgrid.edit.bClose),b(a).jqGrid("restoreCell",d,f)}catch(t){}"clientArray"===a.p.cellsubmit&&(b(g).empty(),b(a).jqGrid("setCell",a.rows[d].id,f,h,!1,!1,!0),b(g).addClass("dirty-cell"),b(a.rows[d]).addClass("edited"),b(a).triggerHandler("jqGridAfterSaveCell",[a.rows[d].id,m,e,d,f]),b.isFunction(a.p.afterSaveCell)&&a.p.afterSaveCell.call(a,a.rows[d].id,m,e,d,f),a.p.savedRow.splice(0,1))}else try{window.setTimeout(function(){b.jgrid.info_dialog(b.jgrid.errors.errcap,
e+" "+s[1],b.jgrid.edit.bClose)},100),b(a).jqGrid("restoreCell",d,f)}catch(u){}}else b(a).jqGrid("restoreCell",d,f)}window.setTimeout(function(){b("#"+b.jgrid.jqID(a.p.knv)).attr("tabindex","-1").focus()},0)}})},restoreCell:function(d,f){return this.each(function(){var a=this,c;if(a.grid&&!0===a.p.cellEdit){c=1<=a.p.savedRow.length?0:null;if(null!==c){var g=b("td:eq("+f+")",a.rows[d]);if(b.isFunction(b.fn.datepicker))try{b("input.hasDatepicker",g).datepicker("hide")}catch(e){}b(g).empty().attr("tabindex",
"-1");b(a).jqGrid("setCell",a.rows[d].id,f,a.p.savedRow[c].v,!1,!1,!0);b(a).triggerHandler("jqGridAfterRestoreCell",[a.rows[d].id,a.p.savedRow[c].v,d,f]);b.isFunction(a.p.afterRestoreCell)&&a.p.afterRestoreCell.call(a,a.rows[d].id,a.p.savedRow[c].v,d,f);a.p.savedRow.splice(0,1)}window.setTimeout(function(){b("#"+a.p.knv).attr("tabindex","-1").focus()},0)}})},nextCell:function(d,f){return this.each(function(){var a=!1,c;if(this.grid&&!0===this.p.cellEdit){for(c=f+1;c<this.p.colModel.length;c++)if(!0===
this.p.colModel[c].editable){a=c;break}!1!==a?b(this).jqGrid("editCell",d,a,!0):0<this.p.savedRow.length&&b(this).jqGrid("saveCell",d,f)}})},prevCell:function(d,f){return this.each(function(){var a=!1,c;if(this.grid&&!0===this.p.cellEdit){for(c=f-1;0<=c;c--)if(!0===this.p.colModel[c].editable){a=c;break}!1!==a?b(this).jqGrid("editCell",d,a,!0):0<this.p.savedRow.length&&b(this).jqGrid("saveCell",d,f)}})},GridNav:function(){return this.each(function(){function d(c,d,e){if("v"===e.substr(0,1)){var f=
b(a.grid.bDiv)[0].clientHeight,g=b(a.grid.bDiv)[0].scrollTop,n=a.rows[c].offsetTop+a.rows[c].clientHeight,r=a.rows[c].offsetTop;"vd"===e&&n>=f&&(b(a.grid.bDiv)[0].scrollTop=b(a.grid.bDiv)[0].scrollTop+a.rows[c].clientHeight);"vu"===e&&r<g&&(b(a.grid.bDiv)[0].scrollTop=b(a.grid.bDiv)[0].scrollTop-a.rows[c].clientHeight)}"h"===e&&(e=b(a.grid.bDiv)[0].clientWidth,f=b(a.grid.bDiv)[0].scrollLeft,g=a.rows[c].cells[d].offsetLeft,a.rows[c].cells[d].offsetLeft+a.rows[c].cells[d].clientWidth>=e+parseInt(f,
10)?b(a.grid.bDiv)[0].scrollLeft=b(a.grid.bDiv)[0].scrollLeft+a.rows[c].cells[d].clientWidth:g<f&&(b(a.grid.bDiv)[0].scrollLeft=b(a.grid.bDiv)[0].scrollLeft-a.rows[c].cells[d].clientWidth))}function f(b,c){var d,e;if("lft"===c)for(d=b+1,e=b;0<=e;e--)if(!0!==a.p.colModel[e].hidden){d=e;break}if("rgt"===c)for(d=b-1,e=b;e<a.p.colModel.length;e++)if(!0!==a.p.colModel[e].hidden){d=e;break}return d}var a=this;if(a.grid&&!0===a.p.cellEdit){a.p.knv=a.p.id+"_kn";var c=b("<div style='position:fixed;top:0px;width:1px;height:1px;' tabindex='0'><div tabindex='-1' style='width:1px;height:1px;' id='"+
a.p.knv+"'></div></div>"),g,e;b(c).insertBefore(a.grid.cDiv);b("#"+a.p.knv).focus().keydown(function(c){e=c.keyCode;"rtl"===a.p.direction&&(37===e?e=39:39===e&&(e=37));switch(e){case 38:0<a.p.iRow-1&&(d(a.p.iRow-1,a.p.iCol,"vu"),b(a).jqGrid("editCell",a.p.iRow-1,a.p.iCol,!1));break;case 40:a.p.iRow+1<=a.rows.length-1&&(d(a.p.iRow+1,a.p.iCol,"vd"),b(a).jqGrid("editCell",a.p.iRow+1,a.p.iCol,!1));break;case 37:0<=a.p.iCol-1&&(g=f(a.p.iCol-1,"lft"),d(a.p.iRow,g,"h"),b(a).jqGrid("editCell",a.p.iRow,g,
!1));break;case 39:a.p.iCol+1<=a.p.colModel.length-1&&(g=f(a.p.iCol+1,"rgt"),d(a.p.iRow,g,"h"),b(a).jqGrid("editCell",a.p.iRow,g,!1));break;case 13:0<=parseInt(a.p.iCol,10)&&0<=parseInt(a.p.iRow,10)&&b(a).jqGrid("editCell",a.p.iRow,a.p.iCol,!0);break;default:return!0}return!1})}})},getChangedCells:function(d){var f=[];d||(d="all");this.each(function(){var a=this,c;a.grid&&!0===a.p.cellEdit&&b(a.rows).each(function(g){var e={};b(this).hasClass("edited")&&(b("td",this).each(function(f){c=a.p.colModel[f].name;
if("cb"!==c&&"subgrid"!==c)if("dirty"===d){if(b(this).hasClass("dirty-cell"))try{e[c]=b.unformat.call(a,this,{rowId:a.rows[g].id,colModel:a.p.colModel[f]},f)}catch(k){e[c]=b.jgrid.htmlDecode(b(this).html())}}else try{e[c]=b.unformat.call(a,this,{rowId:a.rows[g].id,colModel:a.p.colModel[f]},f)}catch(m){e[c]=b.jgrid.htmlDecode(b(this).html())}}),e.id=this.id,f.push(e))})});return f}})})(jQuery);
(function(c){c.fn.jqm=function(a){var k={overlay:50,closeoverlay:!0,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:d,ajaxText:"",target:d,modal:d,toTop:d,onShow:d,onHide:d,onLoad:d};return this.each(function(){if(this._jqm)return l[this._jqm].c=c.extend({},l[this._jqm].c,a);n++;this._jqm=n;l[n]={c:c.extend(k,c.jqm.params,a),a:d,w:c(this).addClass("jqmID"+n),s:n};k.trigger&&c(this).jqmAddTrigger(k.trigger)})};c.fn.jqmAddClose=function(a){return r(this,a,"jqmHide")};c.fn.jqmAddTrigger=
function(a){return r(this,a,"jqmShow")};c.fn.jqmShow=function(a){return this.each(function(){c.jqm.open(this._jqm,a)})};c.fn.jqmHide=function(a){return this.each(function(){c.jqm.close(this._jqm,a)})};c.jqm={hash:{},open:function(a,k){var b=l[a],e=b.c,h="."+e.closeClass,f=parseInt(b.w.css("z-index")),f=0<f?f:3E3,g=c("<div></div>").css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":f-1,opacity:e.overlay/100});if(b.a)return d;b.t=k;b.a=!0;b.w.css("z-index",f);e.modal?(m[0]||setTimeout(function(){s("bind")},
1),m.push(a)):0<e.overlay?e.closeoverlay&&b.w.jqmAddClose(g):g=d;b.o=g?g.addClass(e.overlayClass).prependTo("body"):d;e.ajax?(f=e.target||b.w,g=e.ajax,f="string"==typeof f?c(f,b.w):c(f),g="@"==g.substr(0,1)?c(k).attr(g.substring(1)):g,f.html(e.ajaxText).load(g,function(){e.onLoad&&e.onLoad.call(this,b);h&&b.w.jqmAddClose(c(h,b.w));p(b)})):h&&b.w.jqmAddClose(c(h,b.w));e.toTop&&b.o&&b.w.before('<span id="jqmP'+b.w[0]._jqm+'"></span>').insertAfter(b.o);e.onShow?e.onShow(b):b.w.show();p(b);return d},
close:function(a){a=l[a];if(!a.a)return d;a.a=d;m[0]&&(m.pop(),m[0]||s("unbind"));a.c.toTop&&a.o&&c("#jqmP"+a.w[0]._jqm).after(a.w).remove();if(a.c.onHide)a.c.onHide(a);else a.w.hide(),a.o&&a.o.remove();return d},params:{}};var n=0,l=c.jqm.hash,m=[],d=!1,p=function(a){try{c(":input:visible",a.w)[0].focus()}catch(d){}},s=function(a){c(document)[a]("keypress",q)[a]("keydown",q)[a]("mousedown",q)},q=function(a){var d=l[m[m.length-1]],b=!c(a.target).parents(".jqmID"+d.s)[0];b&&(c(".jqmID"+d.s).each(function(){var d=
c(this),h=d.offset();if(h.top<=a.pageY&&a.pageY<=h.top+d.height()&&h.left<=a.pageX&&a.pageX<=h.left+d.width())return b=!1}),p(d));return!b},r=function(a,k,b){return a.each(function(){var a=this._jqm;c(k).each(function(){this[b]||(this[b]=[],c(this).click(function(){for(var a in{jqmShow:1,jqmHide:1})for(var b in this[a])if(l[this[a][b]])l[this[a][b]].w[a](this);return d}));this[b].push(a)})})}})(jQuery);
(function(b){b.fn.jqDrag=function(a){return h(this,a,"d")};b.fn.jqResize=function(a,b){return h(this,a,"r",b)};b.jqDnR={dnr:{},e:0,drag:function(a){"d"==d.k?e.css({left:d.X+a.pageX-d.pX,top:d.Y+a.pageY-d.pY}):(e.css({width:Math.max(a.pageX-d.pX+d.W,0),height:Math.max(a.pageY-d.pY+d.H,0)}),f&&g.css({width:Math.max(a.pageX-f.pX+f.W,0),height:Math.max(a.pageY-f.pY+f.H,0)}));return!1},stop:function(){b(document).unbind("mousemove",c.drag).unbind("mouseup",c.stop)}};var c=b.jqDnR,d=c.dnr,e=c.e,g,f,h=function(a,
c,h,n){return a.each(function(){c=c?b(c,a):a;c.bind("mousedown",{e:a,k:h},function(a){var c=a.data,k={};e=c.e;g=n?b(n):!1;if("relative"!=e.css("position"))try{e.position(k)}catch(h){}d={X:k.left||l("left")||0,Y:k.top||l("top")||0,W:l("width")||e[0].scrollWidth||0,H:l("height")||e[0].scrollHeight||0,pX:a.pageX,pY:a.pageY,k:c.k};f=g&&"d"!=c.k?{X:k.left||m("left")||0,Y:k.top||m("top")||0,W:g[0].offsetWidth||m("width")||0,H:g[0].offsetHeight||m("height")||0,pX:a.pageX,pY:a.pageY,k:c.k}:!1;if(b("input.hasDatepicker",
e[0])[0])try{b("input.hasDatepicker",e[0]).datepicker("hide")}catch(p){}b(document).mousemove(b.jqDnR.drag).mouseup(b.jqDnR.stop);return!1})})},l=function(a){return parseInt(e.css(a),10)||!1},m=function(a){return parseInt(g.css(a),10)||!1}})(jQuery);
(function(b){b.jgrid.extend({setSubGrid:function(){return this.each(function(){var d,c;this.p.subGridOptions=b.extend({plusicon:"ui-icon-plus",minusicon:"ui-icon-minus",openicon:"ui-icon-carat-1-sw",expandOnLoad:!1,delayOnLoad:50,selectOnExpand:!1,selectOnCollapse:!1,reloadOnExpand:!0},this.p.subGridOptions||{});this.p.colNames.unshift("");this.p.colModel.unshift({name:"subgrid",width:b.jgrid.cell_width?this.p.subGridWidth+this.p.cellLayout:this.p.subGridWidth,sortable:!1,resizable:!1,hidedlg:!0,
search:!1,fixed:!0});d=this.p.subGridModel;if(d[0])for(d[0].align=b.extend([],d[0].align||[]),c=0;c<d[0].name.length;c++)d[0].align[c]=d[0].align[c]||"left"})},addSubGridCell:function(b,c){var a="",p,n;this.each(function(){a=this.formatCol(b,c);n=this.p.id;p=this.p.subGridOptions.plusicon});return'<td role="gridcell" aria-describedby="'+n+'_subgrid" class="ui-sgcollapsed sgcollapsed" '+a+"><a style='cursor:pointer;'><span class='ui-icon "+p+"'></span></a></td>"},addSubGrid:function(d,c){return this.each(function(){var a=
this;if(a.grid){var p=function(c,d,h){d=b("<td align='"+a.p.subGridModel[0].align[h]+"'></td>").html(d);b(c).append(d)},n=function(c,d){var h,f,e,g=b("<table cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"),k=b("<tr></tr>");for(f=0;f<a.p.subGridModel[0].name.length;f++)h=b("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-"+a.p.direction+"'></th>"),b(h).html(a.p.subGridModel[0].name[f]),b(h).width(a.p.subGridModel[0].width[f]),b(k).append(h);b(g).append(k);c&&(e=a.p.xmlReader.subgrid,
b(e.root+" "+e.row,c).each(function(){k=b("<tr class='ui-widget-content ui-subtblcell'></tr>");if(!0===e.repeatitems)b(e.cell,this).each(function(a){p(k,b(this).text()||"&#160;",a)});else{var c=a.p.subGridModel[0].mapping||a.p.subGridModel[0].name;if(c)for(f=0;f<c.length;f++)p(k,b(c[f],this).text()||"&#160;",f)}b(g).append(k)}));h=b("table:first",a.grid.bDiv).attr("id")+"_";b("#"+b.jgrid.jqID(h+d)).append(g);a.grid.hDiv.loading=!1;b("#load_"+b.jgrid.jqID(a.p.id)).hide();return!1},r=function(c,d){var h,
f,e,g,k,m=b("<table cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"),l=b("<tr></tr>");for(f=0;f<a.p.subGridModel[0].name.length;f++)h=b("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-"+a.p.direction+"'></th>"),b(h).html(a.p.subGridModel[0].name[f]),b(h).width(a.p.subGridModel[0].width[f]),b(l).append(h);b(m).append(l);if(c&&(g=a.p.jsonReader.subgrid,h=b.jgrid.getAccessor(c,g.root),void 0!==h))for(f=0;f<h.length;f++){e=h[f];l=b("<tr class='ui-widget-content ui-subtblcell'></tr>");
if(!0===g.repeatitems)for(g.cell&&(e=e[g.cell]),k=0;k<e.length;k++)p(l,e[k]||"&#160;",k);else{var n=a.p.subGridModel[0].mapping||a.p.subGridModel[0].name;if(n.length)for(k=0;k<n.length;k++)p(l,e[n[k]]||"&#160;",k)}b(m).append(l)}f=b("table:first",a.grid.bDiv).attr("id")+"_";b("#"+b.jgrid.jqID(f+d)).append(m);a.grid.hDiv.loading=!1;b("#load_"+b.jgrid.jqID(a.p.id)).hide();return!1},v=function(c){var e,d,f,g;e=b(c).attr("id");d={nd_:(new Date).getTime()};d[a.p.prmNames.subgridid]=e;if(!a.p.subGridModel[0])return!1;
if(a.p.subGridModel[0].params)for(g=0;g<a.p.subGridModel[0].params.length;g++)for(f=0;f<a.p.colModel.length;f++)a.p.colModel[f].name===a.p.subGridModel[0].params[g]&&(d[a.p.colModel[f].name]=b("td:eq("+f+")",c).text().replace(/\&#160\;/ig,""));if(!a.grid.hDiv.loading)switch(a.grid.hDiv.loading=!0,b("#load_"+b.jgrid.jqID(a.p.id)).show(),a.p.subgridtype||(a.p.subgridtype=a.p.datatype),b.isFunction(a.p.subgridtype)?a.p.subgridtype.call(a,d):a.p.subgridtype=a.p.subgridtype.toLowerCase(),a.p.subgridtype){case "xml":case "json":b.ajax(b.extend({type:a.p.mtype,
url:a.p.subGridUrl,dataType:a.p.subgridtype,data:b.isFunction(a.p.serializeSubGridData)?a.p.serializeSubGridData.call(a,d):d,complete:function(c){"xml"===a.p.subgridtype?n(c.responseXML,e):r(b.jgrid.parse(c.responseText),e)}},b.jgrid.ajaxOptions,a.p.ajaxSubgridOptions||{}))}return!1},e,m,s,t=0,g,l;b.each(a.p.colModel,function(){!0!==this.hidden&&"rn"!==this.name&&"cb"!==this.name||t++});var u=a.rows.length,q=1;void 0!==c&&0<c&&(q=c,u=c+1);for(;q<u;)b(a.rows[q]).hasClass("jqgrow")&&b(a.rows[q].cells[d]).bind("click",
function(){var c=b(this).parent("tr")[0];l=c.nextSibling;if(b(this).hasClass("sgcollapsed")){m=a.p.id;e=c.id;if(!0===a.p.subGridOptions.reloadOnExpand||!1===a.p.subGridOptions.reloadOnExpand&&!b(l).hasClass("ui-subgrid")){s=1<=d?"<td colspan='"+d+"'>&#160;</td>":"";g=b(a).triggerHandler("jqGridSubGridBeforeExpand",[m+"_"+e,e]);(g=!1===g||"stop"===g?!1:!0)&&b.isFunction(a.p.subGridBeforeExpand)&&(g=a.p.subGridBeforeExpand.call(a,m+"_"+e,e));if(!1===g)return!1;b(c).after("<tr role='row' class='ui-subgrid'>"+
s+"<td class='ui-widget-content subgrid-cell'><span class='ui-icon "+a.p.subGridOptions.openicon+"'></span></td><td colspan='"+parseInt(a.p.colNames.length-1-t,10)+"' class='ui-widget-content subgrid-data'><div id="+m+"_"+e+" class='tablediv'></div></td></tr>");b(a).triggerHandler("jqGridSubGridRowExpanded",[m+"_"+e,e]);b.isFunction(a.p.subGridRowExpanded)?a.p.subGridRowExpanded.call(a,m+"_"+e,e):v(c)}else b(l).show();b(this).html("<a style='cursor:pointer;'><span class='ui-icon "+a.p.subGridOptions.minusicon+
"'></span></a>").removeClass("sgcollapsed").addClass("sgexpanded");a.p.subGridOptions.selectOnExpand&&b(a).jqGrid("setSelection",e)}else if(b(this).hasClass("sgexpanded")){g=b(a).triggerHandler("jqGridSubGridRowColapsed",[m+"_"+e,e]);g=!1===g||"stop"===g?!1:!0;e=c.id;g&&b.isFunction(a.p.subGridRowColapsed)&&(g=a.p.subGridRowColapsed.call(a,m+"_"+e,e));if(!1===g)return!1;!0===a.p.subGridOptions.reloadOnExpand?b(l).remove(".ui-subgrid"):b(l).hasClass("ui-subgrid")&&b(l).hide();b(this).html("<a style='cursor:pointer;'><span class='ui-icon "+
a.p.subGridOptions.plusicon+"'></span></a>").removeClass("sgexpanded").addClass("sgcollapsed");a.p.subGridOptions.selectOnCollapse&&b(a).jqGrid("setSelection",e)}return!1}),q++;!0===a.p.subGridOptions.expandOnLoad&&b(a.rows).filter(".jqgrow").each(function(a,c){b(c.cells[0]).click()});a.subGridXml=function(a,b){n(a,b)};a.subGridJson=function(a,b){r(a,b)}}})},expandSubGridRow:function(d){return this.each(function(){if((this.grid||d)&&!0===this.p.subGrid){var c=b(this).jqGrid("getInd",d,!0);c&&(c=b("td.sgcollapsed",
c)[0])&&b(c).trigger("click")}})},collapseSubGridRow:function(d){return this.each(function(){if((this.grid||d)&&!0===this.p.subGrid){var c=b(this).jqGrid("getInd",d,!0);c&&(c=b("td.sgexpanded",c)[0])&&b(c).trigger("click")}})},toggleSubGridRow:function(d){return this.each(function(){if((this.grid||d)&&!0===this.p.subGrid){var c=b(this).jqGrid("getInd",d,!0);if(c){var a=b("td.sgcollapsed",c)[0];a?b(a).trigger("click"):(a=b("td.sgexpanded",c)[0])&&b(a).trigger("click")}}})}})})(jQuery);
(function(d){d.extend(d.jgrid,{template:function(b){var k=d.makeArray(arguments).slice(1),a,c=k.length;null==b&&(b="");return b.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,function(b,m){if(!isNaN(parseInt(m,10)))return k[parseInt(m,10)];for(a=0;a<c;a++)if(d.isArray(k[a]))for(var e=k[a],f=e.length;f--;)if(m===e[f].nm)return e[f].v})}});d.jgrid.extend({groupingSetup:function(){return this.each(function(){var b,k,a=this.p.colModel,c=this.p.groupingView;if(null===c||"object"!==typeof c&&!d.isFunction(c))this.p.grouping=
!1;else if(c.groupField.length){void 0===c.visibiltyOnNextGrouping&&(c.visibiltyOnNextGrouping=[]);c.lastvalues=[];c._locgr||(c.groups=[]);c.counters=[];for(b=0;b<c.groupField.length;b++)c.groupOrder[b]||(c.groupOrder[b]="asc"),c.groupText[b]||(c.groupText[b]="{0}"),"boolean"!==typeof c.groupColumnShow[b]&&(c.groupColumnShow[b]=!0),"boolean"!==typeof c.groupSummary[b]&&(c.groupSummary[b]=!1),c.groupSummaryPos[b]||(c.groupSummaryPos[b]="footer"),!0===c.groupColumnShow[b]?(c.visibiltyOnNextGrouping[b]=
!0,d(this).jqGrid("showCol",c.groupField[b])):(c.visibiltyOnNextGrouping[b]=d("#"+d.jgrid.jqID(this.p.id+"_"+c.groupField[b])).is(":visible"),d(this).jqGrid("hideCol",c.groupField[b]));c.summary=[];c.hideFirstGroupCol&&(c.formatDisplayField[0]=function(a){return a});b=0;for(k=a.length;b<k;b++)c.hideFirstGroupCol&&!a[b].hidden&&c.groupField[0]===a[b].name&&(a[b].formatter=function(){return""}),a[b].summaryType&&(a[b].summaryDivider?c.summary.push({nm:a[b].name,st:a[b].summaryType,v:"",sd:a[b].summaryDivider,
vd:"",sr:a[b].summaryRound,srt:a[b].summaryRoundType||"round"}):c.summary.push({nm:a[b].name,st:a[b].summaryType,v:"",sr:a[b].summaryRound,srt:a[b].summaryRoundType||"round"}))}else this.p.grouping=!1})},groupingPrepare:function(b,k){this.each(function(){var a=this.p.groupingView,c=this,g,m=a.groupField.length,e,f,h,p=0;for(g=0;g<m;g++)e=a.groupField[g],h=a.displayField[g],f=b[e],h=null==h?null:b[h],null==h&&(h=f),void 0!==f&&(0===k?(a.groups.push({idx:g,dataIndex:e,value:f,displayValue:h,startRow:k,
cnt:1,summary:[]}),a.lastvalues[g]=f,a.counters[g]={cnt:1,pos:a.groups.length-1,summary:d.extend(!0,[],a.summary)}):"object"===typeof f||(d.isArray(a.isInTheSameGroup)&&d.isFunction(a.isInTheSameGroup[g])?a.isInTheSameGroup[g].call(c,a.lastvalues[g],f,g,a):a.lastvalues[g]===f)?1===p?(a.groups.push({idx:g,dataIndex:e,value:f,displayValue:h,startRow:k,cnt:1,summary:[]}),a.lastvalues[g]=f,a.counters[g]={cnt:1,pos:a.groups.length-1,summary:d.extend(!0,[],a.summary)}):(a.counters[g].cnt+=1,a.groups[a.counters[g].pos].cnt=
a.counters[g].cnt):(a.groups.push({idx:g,dataIndex:e,value:f,displayValue:h,startRow:k,cnt:1,summary:[]}),a.lastvalues[g]=f,p=1,a.counters[g]={cnt:1,pos:a.groups.length-1,summary:d.extend(!0,[],a.summary)}),d.each(a.counters[g].summary,function(){d.isFunction(this.st)?this.v=this.st.call(c,this.v,this.nm,b):(this.v=d(c).jqGrid("groupingCalculations.handler",this.st,this.v,this.nm,this.sr,this.srt,b),"avg"===this.st.toLowerCase()&&this.sd&&(this.vd=d(c).jqGrid("groupingCalculations.handler",this.st,
this.vd,this.sd,this.sr,this.srt,b)))}),a.groups[a.counters[g].pos].summary=a.counters[g].summary)});return this},groupingToggle:function(b){this.each(function(){var k=this.p.groupingView,a=b.split("_"),c=parseInt(a[a.length-2],10);a.splice(a.length-2,2);var g=a.join("_"),a=k.minusicon,m=k.plusicon,e=d("#"+d.jgrid.jqID(b)),e=e.length?e[0].nextSibling:null,f=d("#"+d.jgrid.jqID(b)+" span.tree-wrap-"+this.p.direction),h=function(a){a=d.map(a.split(" "),function(a){if(a.substring(0,g.length+1)===g+"_")return parseInt(a.substring(g.length+
1),10)});return 0<a.length?a[0]:void 0},p,r=!1,q=this.p.frozenColumns?this.p.id+"_frozen":!1,n=q?d("#"+d.jgrid.jqID(b),"#"+d.jgrid.jqID(q)):!1,n=n&&n.length?n[0].nextSibling:null;if(f.hasClass(a)){if(k.showSummaryOnHide){if(e)for(;e&&!(d(e).hasClass("jqfoot")&&parseInt(d(e).attr("jqfootlevel"),10)<=c);)d(e).hide(),e=e.nextSibling,q&&(d(n).hide(),n=n.nextSibling)}else if(e)for(;e;){k=h(e.className);if(void 0!==k&&k<=c)break;d(e).hide();e=e.nextSibling;q&&(d(n).hide(),n=n.nextSibling)}f.removeClass(a).addClass(m);
r=!0}else{if(e)for(p=void 0;e;){k=h(e.className);void 0===p&&(p=void 0===k);if(void 0!==k){if(k<=c)break;k===c+1&&(d(e).show().find(">td>span.tree-wrap-"+this.p.direction).removeClass(a).addClass(m),q&&d(n).show().find(">td>span.tree-wrap-"+this.p.direction).removeClass(a).addClass(m))}else p&&(d(e).show(),q&&d(n).show());e=e.nextSibling;q&&(n=n.nextSibling)}f.removeClass(m).addClass(a)}d(this).triggerHandler("jqGridGroupingClickGroup",[b,r]);d.isFunction(this.p.onClickGroup)&&this.p.onClickGroup.call(this,
b,r)});return!1},groupingRender:function(b,k,a,c){return this.each(function(){function g(a,b,c){var d=!1;if(0===b)d=c[a];else{var e=c[a].idx;if(0===e)d=c[a];else for(;0<=a;a--)if(c[a].idx===e-b){d=c[a];break}}return d}function m(a,b,c,f){var h=g(a,b,c),m=e.p.colModel,n,q=h.cnt;a="";var p;for(p=f;p<k;p++){var r="<td "+e.formatCol(p,1,"")+">&#160;</td>",t="{0}";d.each(h.summary,function(){if(this.nm===m[p].name){m[p].summaryTpl&&(t=m[p].summaryTpl);"string"===typeof this.st&&"avg"===this.st.toLowerCase()&&
(this.sd&&this.vd?this.v/=this.vd:this.v&&0<q&&(this.v/=q));try{this.groupCount=h.cnt,this.groupIndex=h.dataIndex,this.groupValue=h.value,n=e.formatter("",this.v,p,this)}catch(a){n=this.v}r="<td "+e.formatCol(p,1,"")+">"+d.jgrid.format(t,n)+"</td>";return!1}});a+=r}return a}var e=this,f=e.p.groupingView,h="",p="",r,q,n=f.groupCollapse?f.plusicon:f.minusicon,t,y=[],z=f.groupField.length,n=n+(" tree-wrap-"+e.p.direction);d.each(e.p.colModel,function(a,b){var c;for(c=0;c<z;c++)if(f.groupField[c]===b.name){y[c]=
a;break}});var x=0,A=d.makeArray(f.groupSummary);A.reverse();d.each(f.groups,function(g,l){if(f._locgr&&!(l.startRow+l.cnt>(a-1)*c&&l.startRow<a*c))return!0;x++;q=e.p.id+"ghead_"+l.idx;r=q+"_"+g;p="<span style='cursor:pointer;' class='ui-icon "+n+"' onclick=\"jQuery('#"+d.jgrid.jqID(e.p.id)+"').jqGrid('groupingToggle','"+r+"');return false;\"></span>";try{d.isArray(f.formatDisplayField)&&d.isFunction(f.formatDisplayField[l.idx])?(l.displayValue=f.formatDisplayField[l.idx].call(e,l.displayValue,l.value,
e.p.colModel[y[l.idx]],l.idx,f),t=l.displayValue):t=e.formatter(r,l.displayValue,y[l.idx],l.value)}catch(C){t=l.displayValue}"header"===f.groupSummaryPos[l.idx]?(h+='<tr id="'+r+'"'+(f.groupCollapse&&0<l.idx?' style="display:none;" ':" ")+'role="row" class= "ui-widget-content jqgroup ui-row-'+e.p.direction+" "+q+'"><td style="padding-left:'+12*l.idx+'px;">'+p+d.jgrid.template(f.groupText[l.idx],t,l.cnt,l.summary)+"</td>",h+=m(g,l.idx-1,f.groups,1),h+="</tr>"):h+='<tr id="'+r+'"'+(f.groupCollapse&&
0<l.idx?' style="display:none;" ':" ")+'role="row" class= "ui-widget-content jqgroup ui-row-'+e.p.direction+" "+q+'"><td style="padding-left:'+12*l.idx+'px;" colspan="'+k+'">'+p+d.jgrid.template(f.groupText[l.idx],t,l.cnt,l.summary)+"</td></tr>";if(z-1===l.idx){var s=f.groups[g+1],v,u=0;v=l.startRow;var B=void 0!==s?f.groups[g+1].startRow:b.length;f._locgr&&(u=(a-1)*c,u>l.startRow&&(v=u));for(;v<B&&b[v-u];v++)h+=b[v-u].join("");if("header"!==f.groupSummaryPos[l.idx]){var w;if(void 0!==s){for(w=0;w<
f.groupField.length&&s.dataIndex!==f.groupField[w];w++);x=f.groupField.length-w}for(s=0;s<x;s++)A[s]&&(u="",f.groupCollapse&&!f.showSummaryOnHide&&(u=' style="display:none;"'),h+="<tr"+u+' jqfootlevel="'+(l.idx-s)+'" role="row" class="ui-widget-content jqfoot ui-row-'+e.p.direction+'">',h+=m(g,s,f.groups,0),h+="</tr>");x=w}}});d("#"+d.jgrid.jqID(e.p.id)+" tbody:first").append(h);h=null})},groupingGroupBy:function(b,k){return this.each(function(){"string"===typeof b&&(b=[b]);var a=this.p.groupingView;
this.p.grouping=!0;void 0===a.visibiltyOnNextGrouping&&(a.visibiltyOnNextGrouping=[]);var c;for(c=0;c<a.groupField.length;c++)!a.groupColumnShow[c]&&a.visibiltyOnNextGrouping[c]&&d(this).jqGrid("showCol",a.groupField[c]);for(c=0;c<b.length;c++)a.visibiltyOnNextGrouping[c]=d("#"+d.jgrid.jqID(this.p.id)+"_"+d.jgrid.jqID(b[c])).is(":visible");this.p.groupingView=d.extend(this.p.groupingView,k||{});a.groupField=b;d(this).trigger("reloadGrid")})},groupingRemove:function(b){return this.each(function(){void 0===
b&&(b=!0);this.p.grouping=!1;if(!0===b){var k=this.p.groupingView,a;for(a=0;a<k.groupField.length;a++)!k.groupColumnShow[a]&&k.visibiltyOnNextGrouping[a]&&d(this).jqGrid("showCol",k.groupField);d("tr.jqgroup, tr.jqfoot","#"+d.jgrid.jqID(this.p.id)+" tbody:first").remove();d("tr.jqgrow:hidden","#"+d.jgrid.jqID(this.p.id)+" tbody:first").show()}else d(this).trigger("reloadGrid")})},groupingCalculations:{handler:function(b,d,a,c,g,m){var e={sum:function(){return parseFloat(d||0)+parseFloat(m[a]||0)},
min:function(){return""===d?parseFloat(m[a]||0):Math.min(parseFloat(d),parseFloat(m[a]||0))},max:function(){return""===d?parseFloat(m[a]||0):Math.max(parseFloat(d),parseFloat(m[a]||0))},count:function(){""===d&&(d=0);return m.hasOwnProperty(a)?d+1:0},avg:function(){return e.sum()}};if(!e[b])throw"jqGrid Grouping No such method: "+b;b=e[b]();null!=c&&("fixed"===g?b=b.toFixed(c):(c=Math.pow(10,c),b=Math.round(b*c)/c));return b}}})})(jQuery);
(function(d){d.jgrid.extend({setTreeNode:function(b,c){return this.each(function(){var a=this;if(a.grid&&a.p.treeGrid)for(var h=a.p.expColInd,e=a.p.treeReader.expanded_field,k=a.p.treeReader.leaf_field,g=a.p.treeReader.level_field,f=a.p.treeReader.icon_field,n=a.p.treeReader.loaded,m,p,q,l;b<c;)l=d.jgrid.stripPref(a.p.idPrefix,a.rows[b].id),l=a.p.data[a.p._index[l]],"nested"!==a.p.treeGridModel||l[k]||(m=parseInt(l[a.p.treeReader.left_field],10),p=parseInt(l[a.p.treeReader.right_field],10),l[k]=p===
m+1?"true":"false",a.rows[b].cells[a.p._treeleafpos].innerHTML=l[k]),m=parseInt(l[g],10),0===a.p.tree_root_level?(q=m+1,p=m):(q=m,p=m-1),q="<div class='tree-wrap tree-wrap-"+a.p.direction+"' style='width:"+18*q+"px;'>",q+="<div style='"+("rtl"===a.p.direction?"right:":"left:")+18*p+"px;' class='ui-icon ",void 0!==l[n]&&(l[n]="true"===l[n]||!0===l[n]?!0:!1),"true"===l[k]||!0===l[k]?(q+=(void 0!==l[f]&&""!==l[f]?l[f]:a.p.treeIcons.leaf)+" tree-leaf treeclick",l[k]=!0,p="leaf"):(l[k]=!1,p=""),l[e]=("true"===
l[e]||!0===l[e]?!0:!1)&&(l[n]||void 0===l[n]),q=!1===l[e]?q+(!0===l[k]?"'":a.p.treeIcons.plus+" tree-plus treeclick'"):q+(!0===l[k]?"'":a.p.treeIcons.minus+" tree-minus treeclick'"),q+="></div></div>",d(a.rows[b].cells[h]).wrapInner("<span class='cell-wrapper"+p+"'></span>").prepend(q),m!==parseInt(a.p.tree_root_level,10)&&((l=(l=d(a).jqGrid("getNodeParent",l))&&l.hasOwnProperty(e)?l[e]:!0)||d(a.rows[b]).css("display","none")),d(a.rows[b].cells[h]).find("div.treeclick").bind("click",function(b){b=
d.jgrid.stripPref(a.p.idPrefix,d(b.target||b.srcElement,a.rows).closest("tr.jqgrow")[0].id);b=a.p._index[b];a.p.data[b][k]||(a.p.data[b][e]?(d(a).jqGrid("collapseRow",a.p.data[b]),d(a).jqGrid("collapseNode",a.p.data[b])):(d(a).jqGrid("expandRow",a.p.data[b]),d(a).jqGrid("expandNode",a.p.data[b])));return!1}),!0===a.p.ExpandColClick&&d(a.rows[b].cells[h]).find("span.cell-wrapper").css("cursor","pointer").bind("click",function(b){b=d.jgrid.stripPref(a.p.idPrefix,d(b.target||b.srcElement,a.rows).closest("tr.jqgrow")[0].id);
var c=a.p._index[b];a.p.data[c][k]||(a.p.data[c][e]?(d(a).jqGrid("collapseRow",a.p.data[c]),d(a).jqGrid("collapseNode",a.p.data[c])):(d(a).jqGrid("expandRow",a.p.data[c]),d(a).jqGrid("expandNode",a.p.data[c])));d(a).jqGrid("setSelection",b);return!1}),b++})},setTreeGrid:function(){return this.each(function(){var b=this,c=0,a,h=!1,e,k,g=[];if(b.p.treeGrid){b.p.treedatatype||d.extend(b.p,{treedatatype:b.p.datatype});b.p.subGrid=!1;b.p.altRows=!1;b.p.pgbuttons=!1;b.p.pginput=!1;b.p.gridview=!0;null===
b.p.rowTotal&&(b.p.rowNum=1E4);b.p.multiselect=!1;b.p.rowList=[];b.p.expColInd=0;a="ui-icon-triangle-1-"+("rtl"===b.p.direction?"w":"e");b.p.treeIcons=d.extend({plus:a,minus:"ui-icon-triangle-1-s",leaf:"ui-icon-radio-off"},b.p.treeIcons||{});"nested"===b.p.treeGridModel?b.p.treeReader=d.extend({level_field:"level",left_field:"lft",right_field:"rgt",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},b.p.treeReader):"adjacency"===b.p.treeGridModel&&(b.p.treeReader=d.extend({level_field:"level",
parent_id_field:"parent",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},b.p.treeReader));for(e in b.p.colModel)if(b.p.colModel.hasOwnProperty(e))for(k in a=b.p.colModel[e].name,a!==b.p.ExpandColumn||h||(h=!0,b.p.expColInd=c),c++,b.p.treeReader)b.p.treeReader.hasOwnProperty(k)&&b.p.treeReader[k]===a&&g.push(a);d.each(b.p.treeReader,function(a,e){e&&-1===d.inArray(e,g)&&("leaf_field"===a&&(b.p._treeleafpos=c),c++,b.p.colNames.push(e),b.p.colModel.push({name:e,width:1,
hidden:!0,sortable:!1,resizable:!1,hidedlg:!0,editable:!0,search:!1}))})}})},expandRow:function(b){this.each(function(){var c=this;if(c.grid&&c.p.treeGrid){var a=d(c).jqGrid("getNodeChildren",b),h=c.p.treeReader.expanded_field;d(a).each(function(){var a=c.p.idPrefix+d.jgrid.getAccessor(this,c.p.localReader.id);d(d(c).jqGrid("getGridRowById",a)).css("display","");this[h]&&d(c).jqGrid("expandRow",this)})}})},collapseRow:function(b){this.each(function(){var c=this;if(c.grid&&c.p.treeGrid){var a=d(c).jqGrid("getNodeChildren",
b),h=c.p.treeReader.expanded_field;d(a).each(function(){var a=c.p.idPrefix+d.jgrid.getAccessor(this,c.p.localReader.id);d(d(c).jqGrid("getGridRowById",a)).css("display","none");this[h]&&d(c).jqGrid("collapseRow",this)})}})},getRootNodes:function(){var b=[];this.each(function(){var c=this;if(c.grid&&c.p.treeGrid)switch(c.p.treeGridModel){case "nested":var a=c.p.treeReader.level_field;d(c.p.data).each(function(){parseInt(this[a],10)===parseInt(c.p.tree_root_level,10)&&b.push(this)});break;case "adjacency":var h=
c.p.treeReader.parent_id_field;d(c.p.data).each(function(){null!==this[h]&&"null"!==String(this[h]).toLowerCase()||b.push(this)})}});return b},getNodeDepth:function(b){var c=null;this.each(function(){if(this.grid&&this.p.treeGrid)switch(this.p.treeGridModel){case "nested":c=parseInt(b[this.p.treeReader.level_field],10)-parseInt(this.p.tree_root_level,10);break;case "adjacency":c=d(this).jqGrid("getNodeAncestors",b).length}});return c},getNodeParent:function(b){var c=null;this.each(function(){var a=
this;if(a.grid&&a.p.treeGrid)switch(a.p.treeGridModel){case "nested":var h=a.p.treeReader.left_field,e=a.p.treeReader.right_field,k=a.p.treeReader.level_field,g=parseInt(b[h],10),f=parseInt(b[e],10),n=parseInt(b[k],10);d(this.p.data).each(function(){if(parseInt(this[k],10)===n-1&&parseInt(this[h],10)<g&&parseInt(this[e],10)>f)return c=this,!1});break;case "adjacency":var m=a.p.treeReader.parent_id_field,p=a.p.localReader.id;d(this.p.data).each(function(){if(this[p]===d.jgrid.stripPref(a.p.idPrefix,
b[m]))return c=this,!1})}});return c},getNodeChildren:function(b){var c=[];this.each(function(){var a=this;if(a.grid&&a.p.treeGrid)switch(a.p.treeGridModel){case "nested":var h=a.p.treeReader.left_field,e=a.p.treeReader.right_field,k=a.p.treeReader.level_field,g=parseInt(b[h],10),f=parseInt(b[e],10),n=parseInt(b[k],10);d(this.p.data).each(function(){parseInt(this[k],10)===n+1&&parseInt(this[h],10)>g&&parseInt(this[e],10)<f&&c.push(this)});break;case "adjacency":var m=a.p.treeReader.parent_id_field,
p=a.p.localReader.id;d(this.p.data).each(function(){this[m]==d.jgrid.stripPref(a.p.idPrefix,b[p])&&c.push(this)})}});return c},getFullTreeNode:function(b){var c=[];this.each(function(){var a=this,h;if(a.grid&&a.p.treeGrid)switch(a.p.treeGridModel){case "nested":var e=a.p.treeReader.left_field,k=a.p.treeReader.right_field,g=a.p.treeReader.level_field,f=parseInt(b[e],10),n=parseInt(b[k],10),m=parseInt(b[g],10);d(this.p.data).each(function(){parseInt(this[g],10)>=m&&parseInt(this[e],10)>=f&&parseInt(this[e],
10)<=n&&c.push(this)});break;case "adjacency":if(b){c.push(b);var p=a.p.treeReader.parent_id_field,q=a.p.localReader.id;d(this.p.data).each(function(b){h=c.length;for(b=0;b<h;b++)if(d.jgrid.stripPref(a.p.idPrefix,c[b][q])===this[p]){c.push(this);break}})}}});return c},getNodeAncestors:function(b){var c=[];this.each(function(){if(this.grid&&this.p.treeGrid)for(var a=d(this).jqGrid("getNodeParent",b);a;)c.push(a),a=d(this).jqGrid("getNodeParent",a)});return c},isVisibleNode:function(b){var c=!0;this.each(function(){if(this.grid&&
this.p.treeGrid){var a=d(this).jqGrid("getNodeAncestors",b),h=this.p.treeReader.expanded_field;d(a).each(function(){c=c&&this[h];if(!c)return!1})}});return c},isNodeLoaded:function(b){var c;this.each(function(){if(this.grid&&this.p.treeGrid){var a=this.p.treeReader.leaf_field,h=this.p.treeReader.loaded;c=void 0!==b?void 0!==b[h]?b[h]:b[a]||0<d(this).jqGrid("getNodeChildren",b).length?!0:!1:!1}});return c},expandNode:function(b){return this.each(function(){if(this.grid&&this.p.treeGrid){var c=this.p.treeReader.expanded_field,
a=this.p.treeReader.parent_id_field,h=this.p.treeReader.loaded,e=this.p.treeReader.level_field,k=this.p.treeReader.left_field,g=this.p.treeReader.right_field;if(!b[c]){var f=d.jgrid.getAccessor(b,this.p.localReader.id),n=d("#"+this.p.idPrefix+d.jgrid.jqID(f),this.grid.bDiv)[0],m=this.p._index[f];d(this).jqGrid("isNodeLoaded",this.p.data[m])?(b[c]=!0,d("div.treeclick",n).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus")):this.grid.hDiv.loading||(b[c]=!0,
d("div.treeclick",n).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus"),this.p.treeANode=n.rowIndex,this.p.datatype=this.p.treedatatype,"nested"===this.p.treeGridModel?d(this).jqGrid("setGridParam",{postData:{nodeid:f,n_left:b[k],n_right:b[g],n_level:b[e]}}):d(this).jqGrid("setGridParam",{postData:{nodeid:f,parentid:b[a],n_level:b[e]}}),d(this).trigger("reloadGrid"),b[h]=!0,"nested"===this.p.treeGridModel?d(this).jqGrid("setGridParam",{postData:{nodeid:"",
n_left:"",n_right:"",n_level:""}}):d(this).jqGrid("setGridParam",{postData:{nodeid:"",parentid:"",n_level:""}}))}}})},collapseNode:function(b){return this.each(function(){if(this.grid&&this.p.treeGrid){var c=this.p.treeReader.expanded_field;b[c]&&(b[c]=!1,c=d.jgrid.getAccessor(b,this.p.localReader.id),c=d("#"+this.p.idPrefix+d.jgrid.jqID(c),this.grid.bDiv)[0],d("div.treeclick",c).removeClass(this.p.treeIcons.minus+" tree-minus").addClass(this.p.treeIcons.plus+" tree-plus"))}})},SortTree:function(b,
c,a,h){return this.each(function(){if(this.grid&&this.p.treeGrid){var e,k,g,f=[],n=this,m;e=d(this).jqGrid("getRootNodes");e=d.jgrid.from(e);e.orderBy(b,c,a,h);m=e.select();e=0;for(k=m.length;e<k;e++)g=m[e],f.push(g),d(this).jqGrid("collectChildrenSortTree",f,g,b,c,a,h);d.each(f,function(a){var b=d.jgrid.getAccessor(this,n.p.localReader.id);d("#"+d.jgrid.jqID(n.p.id)+" tbody tr:eq("+a+")").after(d("tr#"+d.jgrid.jqID(b),n.grid.bDiv))});f=m=e=null}})},collectChildrenSortTree:function(b,c,a,h,e,k){return this.each(function(){if(this.grid&&
this.p.treeGrid){var g,f,n,m;g=d(this).jqGrid("getNodeChildren",c);g=d.jgrid.from(g);g.orderBy(a,h,e,k);m=g.select();g=0;for(f=m.length;g<f;g++)n=m[g],b.push(n),d(this).jqGrid("collectChildrenSortTree",b,n,a,h,e,k)}})},setTreeRow:function(b,c){var a=!1;this.each(function(){this.grid&&this.p.treeGrid&&(a=d(this).jqGrid("setRowData",b,c))});return a},delTreeNode:function(b){return this.each(function(){var c=this.p.localReader.id,a,h=this.p.treeReader.left_field,e=this.p.treeReader.right_field,k,g,f;
if(this.grid&&this.p.treeGrid&&(a=this.p._index[b],void 0!==a)){k=parseInt(this.p.data[a][e],10);g=k-parseInt(this.p.data[a][h],10)+1;var n=d(this).jqGrid("getFullTreeNode",this.p.data[a]);if(0<n.length)for(a=0;a<n.length;a++)d(this).jqGrid("delRowData",n[a][c]);if("nested"===this.p.treeGridModel){c=d.jgrid.from(this.p.data).greater(h,k,{stype:"integer"}).select();if(c.length)for(f in c)c.hasOwnProperty(f)&&(c[f][h]=parseInt(c[f][h],10)-g);c=d.jgrid.from(this.p.data).greater(e,k,{stype:"integer"}).select();
if(c.length)for(f in c)c.hasOwnProperty(f)&&(c[f][e]=parseInt(c[f][e],10)-g)}}})},addChildNode:function(b,c,a,h){var e=this[0];if(a){var k=e.p.treeReader.expanded_field,g=e.p.treeReader.leaf_field,f=e.p.treeReader.level_field,n=e.p.treeReader.parent_id_field,m=e.p.treeReader.left_field,p=e.p.treeReader.right_field,q=e.p.treeReader.loaded,l,u,t,w,s;l=0;var v=c,x;void 0===h&&(h=!1);if(void 0===b||null===b){s=e.p.data.length-1;if(0<=s)for(;0<=s;)l=Math.max(l,parseInt(e.p.data[s][e.p.localReader.id],
10)),s--;b=l+1}var y=d(e).jqGrid("getInd",c);x=!1;void 0===c||null===c||""===c?(v=c=null,l="last",w=e.p.tree_root_level,s=e.p.data.length+1):(l="after",u=e.p._index[c],t=e.p.data[u],c=t[e.p.localReader.id],w=parseInt(t[f],10)+1,s=d(e).jqGrid("getFullTreeNode",t),s.length?(v=s=s[s.length-1][e.p.localReader.id],s=d(e).jqGrid("getInd",v)+1):s=d(e).jqGrid("getInd",c)+1,t[g]&&(x=!0,t[k]=!0,d(e.rows[y]).find("span.cell-wrapperleaf").removeClass("cell-wrapperleaf").addClass("cell-wrapper").end().find("div.tree-leaf").removeClass(e.p.treeIcons.leaf+
" tree-leaf").addClass(e.p.treeIcons.minus+" tree-minus"),e.p.data[u][g]=!1,t[q]=!0));u=s+1;void 0===a[k]&&(a[k]=!1);void 0===a[q]&&(a[q]=!1);a[f]=w;void 0===a[g]&&(a[g]=!0);"adjacency"===e.p.treeGridModel&&(a[n]=c);if("nested"===e.p.treeGridModel){var r;if(null!==c){g=parseInt(t[p],10);f=d.jgrid.from(e.p.data);f=f.greaterOrEquals(p,g,{stype:"integer"});f=f.select();if(f.length)for(r in f)f.hasOwnProperty(r)&&(f[r][m]=f[r][m]>g?parseInt(f[r][m],10)+2:f[r][m],f[r][p]=f[r][p]>=g?parseInt(f[r][p],10)+
2:f[r][p]);a[m]=g;a[p]=g+1}else{g=parseInt(d(e).jqGrid("getCol",p,!1,"max"),10);f=d.jgrid.from(e.p.data).greater(m,g,{stype:"integer"}).select();if(f.length)for(r in f)f.hasOwnProperty(r)&&(f[r][m]=parseInt(f[r][m],10)+2);f=d.jgrid.from(e.p.data).greater(p,g,{stype:"integer"}).select();if(f.length)for(r in f)f.hasOwnProperty(r)&&(f[r][p]=parseInt(f[r][p],10)+2);a[m]=g+1;a[p]=g+2}}if(null===c||d(e).jqGrid("isNodeLoaded",t)||x)d(e).jqGrid("addRowData",b,a,l,v),d(e).jqGrid("setTreeNode",s,u);t&&!t[k]&&
h&&d(e.rows[y]).find("div.treeclick").click()}}})})(jQuery);
(function(d){function I(d,n){var h,e,v=[],r;if(!this||"function"!==typeof d||d instanceof RegExp)throw new TypeError;r=this.length;for(h=0;h<r;h++)if(this.hasOwnProperty(h)&&(e=this[h],d.call(n,e,h,this))){v.push(e);break}return v}d.assocArraySize=function(d){var n=0,h;for(h in d)d.hasOwnProperty(h)&&n++;return n};d.jgrid.extend({pivotSetup:function(q,n){var h=[],e=[],v=[],r=[],b={grouping:!0,groupingView:{groupField:[],groupSummary:[],groupSummaryPos:[]}},f=[],c=d.extend({rowTotals:!1,rowTotalsText:"Total",
colTotals:!1,groupSummary:!0,groupSummaryPos:"header",frozenStaticCols:!1},n||{});this.each(function(){function n(C,c,a){C=I.call(C,c,a);return 0<C.length?C[0]:null}function J(c,a){var d=0,f=!0,h;for(h in c){if(c[h]!=this[d]){f=!1;break}d++;if(d>=this.length)break}f&&(D=a);return f}function E(c,a,f,h){var g=a.length,b,k,e,l;l=d.isArray(f)?f.length:1;r=[];for(e=r.root=0;e<l;e++){var n=[],m;for(b=0;b<g;b++){if(null==f)m=k=d.trim(a[b].member)+"_"+a[b].aggregator;else{m=f[e].replace(/\s+/g,"");try{k=
1===g?m:m+"_"+a[b].aggregator+"_"+b}catch(v){}}var t=h,u=k,x=n,y=k,w=h[k],p=a[b].member,q=c,s=void 0;switch(a[b].aggregator){case "sum":s=parseFloat(w||0)+parseFloat(q[p]||0);break;case "count":if(""===w||null==w)w=0;s=q.hasOwnProperty(p)?w+1:0;break;case "min":s=""===w||null==w?parseFloat(q[p]||0):Math.min(parseFloat(w),parseFloat(q[p]||0));break;case "max":s=""===w||null==w?parseFloat(q[p]||0):Math.max(parseFloat(w),parseFloat(q[p]||0))}t[u]=x[y]=s}r[m]=n}return h}function H(a){var d,b,g,k,e;for(g in a)if(a.hasOwnProperty(g)){if("object"!==
typeof a[g]&&("level"===g&&(void 0===F[a.level]&&(F[a.level]="",0<a.level&&"_r_Totals"!==a.text&&(f[a.level-1]={useColSpanStyle:!1,groupHeaders:[]})),F[a.level]!==a.text&&a.children.length&&"_r_Totals"!==a.text&&0<a.level&&(f[a.level-1].groupHeaders.push({titleText:a.text}),b=f[a.level-1].groupHeaders.length,e=1===b?K:G+(b-1)*z,f[a.level-1].groupHeaders[b-1].startColumnName=h[e].name,f[a.level-1].groupHeaders[b-1].numberOfColumns=h.length-e,G=h.length),F[a.level]=a.text),a.level===l&&"level"===g&&
0<l))if(1<z){b=1;for(d in a.fields)1===b&&f[l-1].groupHeaders.push({startColumnName:d,numberOfColumns:1,titleText:a.text}),b++;f[l-1].groupHeaders[f[l-1].groupHeaders.length-1].numberOfColumns=b-1}else f.splice(l-1,1);null!=a[g]&&"object"===typeof a[g]&&H(a[g]);if("level"===g&&0<a.level)for(d in b=0,a.fields){e={};for(k in c.aggregates[b])if(c.aggregates[b].hasOwnProperty(k))switch(k){case "member":case "label":case "aggregator":break;default:e[k]=c.aggregates[b][k]}1<z?(e.name=d,e.label=c.aggregates[b].label||
d):(e.name=a.text,e.label="_r_Totals"===a.text?c.rowTotalsText:a.text);h.push(e);b++}}}var m,D,a,y=q.length,s,l,z,k,p=0;c.rowTotals&&0<c.yDimension.length&&(c.yDimension.splice(0,0,{dataName:c.yDimension[0].dataName}),c.yDimension[0].converter=function(){return"_r_Totals"});s=d.isArray(c.xDimension)?c.xDimension.length:0;l=c.yDimension.length;z=d.isArray(c.aggregates)?c.aggregates.length:0;if(0===s||0===z)throw"xDimension or aggregates optiona are not set!";var x;for(a=0;a<s;a++)x={name:c.xDimension[a].dataName,
frozen:c.frozenStaticCols},x=d.extend(!0,x,c.xDimension[a]),h.push(x);x=s-1;for(var A={};p<y;){m=q[p];var t=[],u=[];k={};a=0;do t[a]=d.trim(m[c.xDimension[a].dataName]),k[c.xDimension[a].dataName]=t[a],a++;while(a<s);var g=0;D=-1;a=n(e,J,t);if(!a){g=0;if(1<=l){for(g=0;g<l;g++)u[g]=d.trim(m[c.yDimension[g].dataName]),c.yDimension[g].converter&&d.isFunction(c.yDimension[g].converter)&&(u[g]=c.yDimension[g].converter.call(this,u[g],t,u));k=E(m,c.aggregates,u,k)}else 0===l&&(k=E(m,c.aggregates,null,k));
e.push(k)}else if(0<=D){g=0;if(1<=l){for(g=0;g<l;g++)u[g]=d.trim(m[c.yDimension[g].dataName]),c.yDimension[g].converter&&d.isFunction(c.yDimension[g].converter)&&(u[g]=c.yDimension[g].converter.call(this,u[g],t,u));a=E(m,c.aggregates,u,a)}else 0===l&&(a=E(m,c.aggregates,null,a));e[D]=a}m=0;var t=k=null,B;for(B in r){if(0===m)A.children&&void 0!==A.children||(A={text:B,level:0,children:[]}),k=A.children;else{t=null;for(a=0;a<k.length;a++)if(k[a].text===B){t=k[a];break}t?k=t.children:(k.push({children:[],
text:B,level:m,fields:r[B]}),k=k[k.length-1].children)}m++}p++}var F=[],G=h.length,K=G;0<l&&(f[l-1]={useColSpanStyle:!1,groupHeaders:[]});H(A,0);if(c.colTotals)for(p=e.length;p--;)for(a=s;a<h.length;a++)y=h[a].name,v[y]=v[y]?v[y]+parseFloat(e[p][y]||0):parseFloat(e[p][y]||0);if(0<x)for(a=0;a<x;a++)b.groupingView.groupField[a]=h[a].name,b.groupingView.groupSummary[a]=c.groupSummary,b.groupingView.groupSummaryPos[a]=c.groupSummaryPos;else b.grouping=!1;b.sortname=h[x].name;b.groupingView.hideFirstGroupCol=
!0});return{colModel:h,rows:e,groupOptions:b,groupHeaders:f,summary:v}},jqPivot:function(q,n,h,e){return this.each(function(){function v(b){var f=jQuery(r).jqGrid("pivotSetup",b,n),c=0<d.assocArraySize(f.summary)?!0:!1,e=d.jgrid.from(f.rows);for(b=0;b<f.groupOptions.groupingView.groupField.length;b++)e.orderBy(f.groupOptions.groupingView.groupField[b],"a","text","");jQuery(r).jqGrid(d.extend({datastr:d.extend(e.select(),c?{userdata:f.summary}:{}),datatype:"jsonstring",footerrow:c,userDataOnFooter:c,
colModel:f.colModel,viewrecords:!0,sortname:n.xDimension[0].dataName},h||{},f.groupOptions));f=f.groupHeaders;if(f.length)for(b=0;b<f.length;b++)f[b]&&f[b].groupHeaders.length&&jQuery(r).jqGrid("setGroupHeaders",f[b]);n.frozenStaticCols&&jQuery(r).jqGrid("setFrozenColumns")}var r=this;"string"===typeof q?d.ajax(d.extend({url:q,dataType:"json",success:function(b){v(d.jgrid.getAccessor(b,e&&e.reader?e.reader:"rows"))}},e||{})):v(q)})}})})(jQuery);
(function(c){c.jgrid.extend({jqGridImport:function(a){a=c.extend({imptype:"xml",impstring:"",impurl:"",mtype:"GET",impData:{},xmlGrid:{config:"roots>grid",data:"roots>rows"},jsonGrid:{config:"grid",data:"data"},ajaxOptions:{}},a||{});return this.each(function(){var d=this,f=function(a,b){var e=c(b.xmlGrid.config,a)[0],h=c(b.xmlGrid.data,a)[0],f,g;if(xmlJsonClass.xml2json&&c.jgrid.parse){e=xmlJsonClass.xml2json(e," ");e=c.jgrid.parse(e);for(g in e)e.hasOwnProperty(g)&&(f=e[g]);h?(h=e.grid.datatype,
e.grid.datatype="xmlstring",e.grid.datastr=a,c(d).jqGrid(f).jqGrid("setGridParam",{datatype:h})):c(d).jqGrid(f)}else alert("xml2json or parse are not present")},b=function(a,b){if(a&&"string"===typeof a){var e=!1;c.jgrid.useJSON&&(c.jgrid.useJSON=!1,e=!0);var f=c.jgrid.parse(a);e&&(c.jgrid.useJSON=!0);e=f[b.jsonGrid.config];if(f=f[b.jsonGrid.data]){var g=e.datatype;e.datatype="jsonstring";e.datastr=f;c(d).jqGrid(e).jqGrid("setGridParam",{datatype:g})}else c(d).jqGrid(e)}};switch(a.imptype){case "xml":c.ajax(c.extend({url:a.impurl,
type:a.mtype,data:a.impData,dataType:"xml",complete:function(b,g){"success"===g&&(f(b.responseXML,a),c(d).triggerHandler("jqGridImportComplete",[b,a]),c.isFunction(a.importComplete)&&a.importComplete(b))}},a.ajaxOptions));break;case "xmlstring":if(a.impstring&&"string"===typeof a.impstring){var g=c.parseXML(a.impstring);g&&(f(g,a),c(d).triggerHandler("jqGridImportComplete",[g,a]),c.isFunction(a.importComplete)&&a.importComplete(g),a.impstring=null);g=null}break;case "json":c.ajax(c.extend({url:a.impurl,
type:a.mtype,data:a.impData,dataType:"json",complete:function(f){try{b(f.responseText,a),c(d).triggerHandler("jqGridImportComplete",[f,a]),c.isFunction(a.importComplete)&&a.importComplete(f)}catch(g){}}},a.ajaxOptions));break;case "jsonstring":a.impstring&&"string"===typeof a.impstring&&(b(a.impstring,a),c(d).triggerHandler("jqGridImportComplete",[a.impstring,a]),c.isFunction(a.importComplete)&&a.importComplete(a.impstring),a.impstring=null)}})},jqGridExport:function(a){a=c.extend({exptype:"xmlstring",
root:"grid",ident:"\t"},a||{});var d=null;this.each(function(){if(this.grid){var f,b=c.extend(!0,{},c(this).jqGrid("getGridParam"));b.rownumbers&&(b.colNames.splice(0,1),b.colModel.splice(0,1));b.multiselect&&(b.colNames.splice(0,1),b.colModel.splice(0,1));b.subGrid&&(b.colNames.splice(0,1),b.colModel.splice(0,1));b.knv=null;if(b.treeGrid)for(f in b.treeReader)b.treeReader.hasOwnProperty(f)&&(b.colNames.splice(b.colNames.length-1),b.colModel.splice(b.colModel.length-1));switch(a.exptype){case "xmlstring":d=
"<"+a.root+">"+xmlJsonClass.json2xml(b,a.ident)+"</"+a.root+">";break;case "jsonstring":d="{"+xmlJsonClass.toJson(b,a.root,a.ident,!1)+"}",void 0!==b.postData.filters&&(d=d.replace(/filters":"/,'filters":'),d=d.replace(/}]}"/,"}]}"))}}});return d},excelExport:function(a){a=c.extend({exptype:"remote",url:null,oper:"oper",tag:"excel",exportOptions:{}},a||{});return this.each(function(){if(this.grid){var d;"remote"===a.exptype&&(d=c.extend({},this.p.postData),d[a.oper]=a.tag,d=jQuery.param(d),d=-1!==
a.url.indexOf("?")?a.url+"&"+d:a.url+"?"+d,window.location=d)}})}})})(jQuery);
var xmlJsonClass={xml2json:function(a,b){9===a.nodeType&&(a=a.documentElement);var g=this.removeWhite(a),g=this.toObj(g),g=this.toJson(g,a.nodeName,"\t");return"{\n"+b+(b?g.replace(/\t/g,b):g.replace(/\t|\n/g,""))+"\n}"},json2xml:function(a,b){var g=function(a,b,e){var d="",f,k;if(a instanceof Array)if(0===a.length)d+=e+"<"+b+">__EMPTY_ARRAY_</"+b+">\n";else for(f=0,k=a.length;f<k;f+=1)var n=e+g(a[f],b,e+"\t")+"\n",d=d+n;else if("object"===typeof a){f=!1;d+=e+"<"+b;for(k in a)a.hasOwnProperty(k)&&
("@"===k.charAt(0)?d+=" "+k.substr(1)+'="'+a[k].toString()+'"':f=!0);d+=f?">":"/>";if(f){for(k in a)a.hasOwnProperty(k)&&("#text"===k?d+=a[k]:"#cdata"===k?d+="<![CDATA["+a[k]+"]]\x3e":"@"!==k.charAt(0)&&(d+=g(a[k],k,e+"\t")));d+=("\n"===d.charAt(d.length-1)?e:"")+"</"+b+">"}}else"function"===typeof a?d+=e+"<"+b+"><![CDATA["+a+"]]\x3e</"+b+">":(void 0===a&&(a=""),d='""'===a.toString()||0===a.toString().length?d+(e+"<"+b+">__EMPTY_STRING_</"+b+">"):d+(e+"<"+b+">"+a.toString()+"</"+b+">"));return d},
f="",e;for(e in a)a.hasOwnProperty(e)&&(f+=g(a[e],e,""));return b?f.replace(/\t/g,b):f.replace(/\t|\n/g,"")},toObj:function(a){var b={},g=/function/i;if(1===a.nodeType){if(a.attributes.length){var f;for(f=0;f<a.attributes.length;f+=1)b["@"+a.attributes[f].nodeName]=(a.attributes[f].nodeValue||"").toString()}if(a.firstChild){var e=f=0,h=!1,c;for(c=a.firstChild;c;c=c.nextSibling)1===c.nodeType?h=!0:3===c.nodeType&&c.nodeValue.match(/[^ \f\n\r\t\v]/)?f+=1:4===c.nodeType&&(e+=1);if(h)if(2>f&&2>e)for(this.removeWhite(a),
c=a.firstChild;c;c=c.nextSibling)3===c.nodeType?b["#text"]=this.escape(c.nodeValue):4===c.nodeType?g.test(c.nodeValue)?b[c.nodeName]=[b[c.nodeName],c.nodeValue]:b["#cdata"]=this.escape(c.nodeValue):b[c.nodeName]?b[c.nodeName]instanceof Array?b[c.nodeName][b[c.nodeName].length]=this.toObj(c):b[c.nodeName]=[b[c.nodeName],this.toObj(c)]:b[c.nodeName]=this.toObj(c);else a.attributes.length?b["#text"]=this.escape(this.innerXml(a)):b=this.escape(this.innerXml(a));else if(f)a.attributes.length?b["#text"]=
this.escape(this.innerXml(a)):(b=this.escape(this.innerXml(a)),"__EMPTY_ARRAY_"===b?b="[]":"__EMPTY_STRING_"===b&&(b=""));else if(e)if(1<e)b=this.escape(this.innerXml(a));else for(c=a.firstChild;c;c=c.nextSibling)if(g.test(a.firstChild.nodeValue)){b=a.firstChild.nodeValue;break}else b["#cdata"]=this.escape(c.nodeValue)}a.attributes.length||a.firstChild||(b=null)}else 9===a.nodeType?b=this.toObj(a.documentElement):alert("unhandled node type: "+a.nodeType);return b},toJson:function(a,b,g,f){void 0===
f&&(f=!0);var e=b?'"'+b+'"':"",h="\t",c="\n";f||(c=h="");if("[]"===a)e+=b?":[]":"[]";else if(a instanceof Array){var l,d,m=[];d=0;for(l=a.length;d<l;d+=1)m[d]=this.toJson(a[d],"",g+h,f);e+=(b?":[":"[")+(1<m.length?c+g+h+m.join(","+c+g+h)+c+g:m.join(""))+"]"}else if(null===a)e+=(b&&":")+"null";else if("object"===typeof a){l=[];for(d in a)a.hasOwnProperty(d)&&(l[l.length]=this.toJson(a[d],d,g+h,f));e+=(b?":{":"{")+(1<l.length?c+g+h+l.join(","+c+g+h)+c+g:l.join(""))+"}"}else e="string"===typeof a?e+
((b&&":")+'"'+a.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"'):e+((b&&":")+a.toString());return e},innerXml:function(a){var b="";if("innerHTML"in a)b=a.innerHTML;else{var g=function(a){var b="",h;if(1===a.nodeType){b+="<"+a.nodeName;for(h=0;h<a.attributes.length;h+=1)b+=" "+a.attributes[h].nodeName+'="'+(a.attributes[h].nodeValue||"").toString()+'"';if(a.firstChild){b+=">";for(h=a.firstChild;h;h=h.nextSibling)b+=g(h);b+="</"+a.nodeName+">"}else b+="/>"}else 3===a.nodeType?b+=a.nodeValue:4===a.nodeType&&
(b+="<![CDATA["+a.nodeValue+"]]\x3e");return b};for(a=a.firstChild;a;a=a.nextSibling)b+=g(a)}return b},escape:function(a){return a.replace(/[\\]/g,"\\\\").replace(/[\"]/g,'\\"').replace(/[\n]/g,"\\n").replace(/[\r]/g,"\\r")},removeWhite:function(a){a.normalize();var b;for(b=a.firstChild;b;)if(3===b.nodeType)if(b.nodeValue.match(/[^ \f\n\r\t\v]/))b=b.nextSibling;else{var g=b.nextSibling;a.removeChild(b);b=g}else 1===b.nodeType&&this.removeWhite(b),b=b.nextSibling;return a}};
function tableToGrid(l,m){jQuery(l).each(function(){if(!this.grid){jQuery(this).width("99%");var b=jQuery(this).width(),c=jQuery("tr td:first-child input[type=checkbox]:first",jQuery(this)),a=jQuery("tr td:first-child input[type=radio]:first",jQuery(this)),c=0<c.length,a=!c&&0<a.length,k=c||a,d=[],e=[];jQuery("th",jQuery(this)).each(function(){0===d.length&&k?(d.push({name:"__selection__",index:"__selection__",width:0,hidden:!0}),e.push("__selection__")):(d.push({name:jQuery(this).attr("id")||jQuery.trim(jQuery.jgrid.stripHtml(jQuery(this).html())).split(" ").join("_"),
index:jQuery(this).attr("id")||jQuery.trim(jQuery.jgrid.stripHtml(jQuery(this).html())).split(" ").join("_"),width:jQuery(this).width()||150}),e.push(jQuery(this).html()))});var f=[],g=[],h=[];jQuery("tbody > tr",jQuery(this)).each(function(){var b={},a=0;jQuery("td",jQuery(this)).each(function(){if(0===a&&k){var c=jQuery("input",jQuery(this)),e=c.attr("value");g.push(e||f.length);c.is(":checked")&&h.push(e);b[d[a].name]=c.attr("value")}else b[d[a].name]=jQuery(this).html();a++});0<a&&f.push(b)});
jQuery(this).empty();jQuery(this).addClass("scroll");jQuery(this).jqGrid(jQuery.extend({datatype:"local",width:b,colNames:e,colModel:d,multiselect:c},m||{}));for(b=0;b<f.length;b++)a=null,0<g.length&&(a=g[b])&&a.replace&&(a=encodeURIComponent(a).replace(/[.\-%]/g,"_")),null===a&&(a=b+1),jQuery(this).jqGrid("addRowData",a,f[b]);for(b=0;b<h.length;b++)jQuery(this).jqGrid("setSelection",h[b])}})};
(function(b){b.jgrid.msie&&8===b.jgrid.msiever()&&(b.expr[":"].hidden=function(b){return 0===b.offsetWidth||0===b.offsetHeight||"none"===b.style.display});b.jgrid._multiselect=!1;if(b.ui&&b.ui.multiselect){if(b.ui.multiselect.prototype._setSelected){var r=b.ui.multiselect.prototype._setSelected;b.ui.multiselect.prototype._setSelected=function(a,d){var c=r.call(this,a,d);if(d&&this.selectedList){var e=this.element;this.selectedList.find("li").each(function(){b(this).data("optionLink")&&b(this).data("optionLink").remove().appendTo(e)})}return c}}b.ui.multiselect.prototype.destroy&&
(b.ui.multiselect.prototype.destroy=function(){this.element.show();this.container.remove();void 0===b.Widget?b.widget.prototype.destroy.apply(this,arguments):b.Widget.prototype.destroy.apply(this,arguments)});b.jgrid._multiselect=!0}b.jgrid.extend({sortableColumns:function(a){return this.each(function(){function d(){c.p.disableClick=!0}var c=this,e=b.jgrid.jqID(c.p.id),e={tolerance:"pointer",axis:"x",scrollSensitivity:"1",items:">th:not(:has(#jqgh_"+e+"_cb,#jqgh_"+e+"_rn,#jqgh_"+e+"_subgrid),:hidden)",
placeholder:{element:function(a){return b(document.createElement(a[0].nodeName)).addClass(a[0].className+" ui-sortable-placeholder ui-state-highlight").removeClass("ui-sortable-helper")[0]},update:function(b,a){a.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));a.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))}},update:function(a,
e){var d=b(e.item).parent(),d=b(">th",d),f={},g=c.p.id+"_";b.each(c.p.colModel,function(b){f[this.name]=b});var l=[];d.each(function(){var a=b(">div",this).get(0).id.replace(/^jqgh_/,"").replace(g,"");f.hasOwnProperty(a)&&l.push(f[a])});b(c).jqGrid("remapColumns",l,!0,!0);b.isFunction(c.p.sortable.update)&&c.p.sortable.update(l);setTimeout(function(){c.p.disableClick=!1},50)}};c.p.sortable.options?b.extend(e,c.p.sortable.options):b.isFunction(c.p.sortable)&&(c.p.sortable={update:c.p.sortable});if(e.start){var g=
e.start;e.start=function(b,a){d();g.call(this,b,a)}}else e.start=d;c.p.sortable.exclude&&(e.items+=":not("+c.p.sortable.exclude+")");a.sortable(e).data("sortable").floating=!0})},columnChooser:function(a){function d(a,c){a&&("string"===typeof a?b.fn[a]&&b.fn[a].apply(c,b.makeArray(arguments).slice(2)):b.isFunction(a)&&a.apply(c,b.makeArray(arguments).slice(2)))}var c=this;if(!b("#colchooser_"+b.jgrid.jqID(c[0].p.id)).length){var e=b('<div id="colchooser_'+c[0].p.id+'" style="position:relative;overflow:hidden"><div><select multiple="multiple"></select></div></div>'),
g=b("select",e);a=b.extend({width:420,height:240,classname:null,done:function(b){b&&c.jqGrid("remapColumns",b,!0)},msel:"multiselect",dlog:"dialog",dialog_opts:{minWidth:470},dlog_opts:function(a){var c={};c[a.bSubmit]=function(){a.apply_perm();a.cleanup(!1)};c[a.bCancel]=function(){a.cleanup(!0)};return b.extend(!0,{buttons:c,close:function(){a.cleanup(!0)},modal:a.modal||!1,resizable:a.resizable||!0,width:a.width+20},a.dialog_opts||{})},apply_perm:function(){b("option",g).each(function(){this.selected?
c.jqGrid("showCol",k[this.value].name):c.jqGrid("hideCol",k[this.value].name)});var e=[];b("option:selected",g).each(function(){e.push(parseInt(this.value,10))});b.each(e,function(){delete p[k[parseInt(this,10)].name]});b.each(p,function(){var b=parseInt(this,10);var a=e,c=b;if(0<=c){var d=a.slice(),k=d.splice(c,Math.max(a.length-c,c));c>a.length&&(c=a.length);d[c]=b;e=d.concat(k)}else e=void 0});a.done&&a.done.call(c,e)},cleanup:function(b){d(a.dlog,e,"destroy");d(a.msel,g,"destroy");e.remove();
b&&a.done&&a.done.call(c)},msel_opts:{}},b.jgrid.col,a||{});if(b.ui&&b.ui.multiselect&&"multiselect"===a.msel){if(!b.jgrid._multiselect){alert("Multiselect plugin loaded after jqGrid. Please load the plugin before the jqGrid!");return}a.msel_opts=b.extend(b.ui.multiselect.defaults,a.msel_opts)}a.caption&&e.attr("title",a.caption);a.classname&&(e.addClass(a.classname),g.addClass(a.classname));a.width&&(b(">div",e).css({width:a.width,margin:"0 auto"}),g.css("width",a.width));a.height&&(b(">div",e).css("height",
a.height),g.css("height",a.height-10));var k=c.jqGrid("getGridParam","colModel"),t=c.jqGrid("getGridParam","colNames"),p={},f=[];g.empty();b.each(k,function(a){p[this.name]=a;this.hidedlg?this.hidden||f.push(a):g.append("<option value='"+a+"' "+(this.hidden?"":"selected='selected'")+">"+b.jgrid.stripHtml(t[a])+"</option>")});var q=b.isFunction(a.dlog_opts)?a.dlog_opts.call(c,a):a.dlog_opts;d(a.dlog,e,q);q=b.isFunction(a.msel_opts)?a.msel_opts.call(c,a):a.msel_opts;d(a.msel,g,q)}},sortableRows:function(a){return this.each(function(){var d=
this;d.grid&&!d.p.treeGrid&&b.fn.sortable&&(a=b.extend({cursor:"move",axis:"y",items:".jqgrow"},a||{}),a.start&&b.isFunction(a.start)?(a._start_=a.start,delete a.start):a._start_=!1,a.update&&b.isFunction(a.update)?(a._update_=a.update,delete a.update):a._update_=!1,a.start=function(c,e){b(e.item).css("border-width","0");b("td",e.item).each(function(b){this.style.width=d.grid.cols[b].style.width});if(d.p.subGrid){var g=b(e.item).attr("id");try{b(d).jqGrid("collapseSubGridRow",g)}catch(k){}}a._start_&&
a._start_.apply(this,[c,e])},a.update=function(c,e){b(e.item).css("border-width","");!0===d.p.rownumbers&&b("td.jqgrid-rownum",d.rows).each(function(a){b(this).html(a+1+(parseInt(d.p.page,10)-1)*parseInt(d.p.rowNum,10))});a._update_&&a._update_.apply(this,[c,e])},b("tbody:first",d).sortable(a),b("tbody:first",d).disableSelection())})},gridDnD:function(a){return this.each(function(){function d(){var a=b.data(c,"dnd");b("tr.jqgrow:not(.ui-draggable)",c).draggable(b.isFunction(a.drag)?a.drag.call(b(c),
a):a.drag)}var c=this,e,g;if(c.grid&&!c.p.treeGrid&&b.fn.draggable&&b.fn.droppable)if(void 0===b("#jqgrid_dnd")[0]&&b("body").append("<table id='jqgrid_dnd' class='ui-jqgrid-dnd'></table>"),"string"===typeof a&&"updateDnD"===a&&!0===c.p.jqgdnd)d();else if(a=b.extend({drag:function(a){return b.extend({start:function(e,d){var f;if(c.p.subGrid){f=b(d.helper).attr("id");try{b(c).jqGrid("collapseSubGridRow",f)}catch(g){}}for(f=0;f<b.data(c,"dnd").connectWith.length;f++)0===b(b.data(c,"dnd").connectWith[f]).jqGrid("getGridParam",
"reccount")&&b(b.data(c,"dnd").connectWith[f]).jqGrid("addRowData","jqg_empty_row",{});d.helper.addClass("ui-state-highlight");b("td",d.helper).each(function(b){this.style.width=c.grid.headers[b].width+"px"});a.onstart&&b.isFunction(a.onstart)&&a.onstart.call(b(c),e,d)},stop:function(e,d){var f;d.helper.dropped&&!a.dragcopy&&(f=b(d.helper).attr("id"),void 0===f&&(f=b(this).attr("id")),b(c).jqGrid("delRowData",f));for(f=0;f<b.data(c,"dnd").connectWith.length;f++)b(b.data(c,"dnd").connectWith[f]).jqGrid("delRowData",
"jqg_empty_row");a.onstop&&b.isFunction(a.onstop)&&a.onstop.call(b(c),e,d)}},a.drag_opts||{})},drop:function(a){return b.extend({accept:function(a){if(!b(a).hasClass("jqgrow"))return a;a=b(a).closest("table.ui-jqgrid-btable");return 0<a.length&&void 0!==b.data(a[0],"dnd")?(a=b.data(a[0],"dnd").connectWith,-1!==b.inArray("#"+b.jgrid.jqID(this.id),a)?!0:!1):!1},drop:function(e,d){if(b(d.draggable).hasClass("jqgrow")){var f=b(d.draggable).attr("id"),f=d.draggable.parent().parent().jqGrid("getRowData",
f);if(!a.dropbyname){var g=0,l={},h,n,s=b("#"+b.jgrid.jqID(this.id)).jqGrid("getGridParam","colModel");try{for(n in f)f.hasOwnProperty(n)&&(h=s[g].name,"cb"!==h&&"rn"!==h&&"subgrid"!==h&&f.hasOwnProperty(n)&&s[g]&&(l[h]=f[n]),g++);f=l}catch(r){}}d.helper.dropped=!0;a.beforedrop&&b.isFunction(a.beforedrop)&&(h=a.beforedrop.call(this,e,d,f,b("#"+b.jgrid.jqID(c.p.id)),b(this)),void 0!==h&&null!==h&&"object"===typeof h&&(f=h));if(d.helper.dropped){var m;a.autoid&&(b.isFunction(a.autoid)?m=a.autoid.call(this,
f):(m=Math.ceil(1E3*Math.random()),m=a.autoidprefix+m));b("#"+b.jgrid.jqID(this.id)).jqGrid("addRowData",m,f,a.droppos)}a.ondrop&&b.isFunction(a.ondrop)&&a.ondrop.call(this,e,d,f)}}},a.drop_opts||{})},onstart:null,onstop:null,beforedrop:null,ondrop:null,drop_opts:{activeClass:"ui-state-active",hoverClass:"ui-state-hover"},drag_opts:{revert:"invalid",helper:"clone",cursor:"move",appendTo:"#jqgrid_dnd",zIndex:5E3},dragcopy:!1,dropbyname:!1,droppos:"first",autoid:!0,autoidprefix:"dnd_"},a||{}),a.connectWith)for(a.connectWith=
a.connectWith.split(","),a.connectWith=b.map(a.connectWith,function(a){return b.trim(a)}),b.data(c,"dnd",a),0===c.p.reccount||c.p.jqgdnd||d(),c.p.jqgdnd=!0,e=0;e<a.connectWith.length;e++)g=a.connectWith[e],b(g).droppable(b.isFunction(a.drop)?a.drop.call(b(c),a):a.drop)})},gridResize:function(a){return this.each(function(){var d=this,c=b.jgrid.jqID(d.p.id);d.grid&&b.fn.resizable&&(a=b.extend({},a||{}),a.alsoResize?(a._alsoResize_=a.alsoResize,delete a.alsoResize):a._alsoResize_=!1,a.stop&&b.isFunction(a.stop)?
(a._stop_=a.stop,delete a.stop):a._stop_=!1,a.stop=function(e,g){b(d).jqGrid("setGridParam",{height:b("#gview_"+c+" .ui-jqgrid-bdiv").height()});b(d).jqGrid("setGridWidth",g.size.width,a.shrinkToFit);a._stop_&&a._stop_.call(d,e,g)},a.alsoResize=a._alsoResize_?eval("("+("{'#gview_"+c+" .ui-jqgrid-bdiv':true,'"+a._alsoResize_+"':true}")+")"):b(".ui-jqgrid-bdiv","#gview_"+c),delete a._alsoResize_,b("#gbox_"+c).resizable(a))})}})})(jQuery);









// Commenting jQuery UI because of conflicts with Bootstrap
// require jquery-ui/jquery-ui.min.js
