(function(A){A.effects.fold=function(B){return this.queue(function(){var E=A(this),H=["position","top","left"];var G=A.effects.setMode(E,B.options.mode||"hide");var K=B.options.size||15;A.effects.save(E,H);E.show();var C=A.effects.createWrapper(E).css({overflow:"hidden"});var F=(G=="show")?["width","height"]:["height","width"];var D=(G=="show")?[C.width(),C.height()]:[C.height(),C.width()];if(G=="show"){C.css({height:K,width:0})}var J={},I={};J[F[0]]=G=="show"?D[0]:K;I[F[1]]=G=="show"?D[1]:0;C.animate(J,B.duration/2,B.options.easing).animate(I,B.duration/2,B.options.easing,function(){if(G=="hide"){E.hide()}A.effects.restore(E,H);A.effects.removeWrapper(E);if(B.callback){B.callback.apply(this,arguments)}E.dequeue()})})}})(jQuery);