
export const bus = (function() {
    var clientList = {},
        on,
        emit,
        off;
        on = function(key,fn) {
            if(!clientList[key]){
                clientList[key] = [];
            }
            clientList[key].push(fn);
        }
        emit = function() {
            var key = Array.prototype.shift.call( arguments);
            var fns = clientList[key];
            if(!fns || fns.length === 0) return;
            for(var i =0,fn;fn = fns[i++];){
                fn.apply(this, arguments);
            }
        }
        off = function( key, fn ) {
            var fns = clientList[key];
            if(!fns) return false;
            if(!fn){
                fns&&( fns.length = 0 );
            } else {
                for(var j = fns.length - 1; j >= 0; j--){
                    var _fn = fns[j];
                    if(_fn === fn){
                        fns.splice( j,1 );
                    } 
                }
            }
        }

        return {
            on,
            emit,
            off
        }

} ());