function pano2vrGyro(t,a){function e(t){isTouching=!0}function i(t){isTouching=!1}function n(t){if(t.alpha&&t.beta&&t.gamma){var a=new Date,e=d.isTouching();if(e&&(s=a.getTime()),!e&&l&&a.getTime()-s>1e3){var i,n=r(new Object({yaw:t.alpha*degRad,pitch:t.beta*degRad,roll:t.gamma*degRad})),f=n.yaw/degRad,v=n.pitch/degRad,m=f;if(Math.abs(v)>70){switch(m=t.alpha,window.orientation){case 0:v>0&&(m+=180);break;case 90:m+=90;break;case-90:m+=-90;break;case 180:0>v&&(m+=180)}m%=360,Math.abs(m-f)>180&&(m+=f>m?360:-360),i=Math.min(1,(Math.abs(v)-70)/10),f=f*(1-i)+m*i}d.moveTo(diffPan+f,diffTilt-v,d.getFov(),10),h=f,c=-v,o()}else diffPan=d.getPan()-h,diffTilt=d.getTilt()-c}}function o(){0!=diffTilt&&v&&(diffTilt*=.98,Math.abs(diffTilt)<.1&&(diffTilt=0))}function r(t){var a,e,i,n=Math.cos(t.yaw),o=Math.sin(t.yaw),r=Math.cos(t.pitch),d=Math.sin(t.pitch),h=Math.cos(t.roll),c=Math.sin(t.roll);return matrix=new Array(o*c-n*d*h,-n*r,n*d*c+o*h,r*h,-d,-r*c,o*d*h+n*c,o*r,-o*d*c+n*h),matrix[3]>.9999?(a=Math.atan2(matrix[2],matrix[8]),i=Math.PI/2,e=0):matrix[3]<-.9999?(a=Math.atan2(matrix[2],matrix[8]),i=-Math.PI/2,e=0):(a=Math.atan2(-matrix[6],matrix[0]),e=Math.atan2(-matrix[5],matrix[4]),i=Math.asin(matrix[3])),new Object({yaw:a,pitch:i,roll:e})}this.enable=function(){return f&&!l&&(window.addEventListener("deviceorientation",n,!0),m.addEventListener("touchstart",e,!0),m.addEventListener("touchend",i,!0),m.addEventListener("touchcancel",i,!0),l=!0),l},this.disable=function(){return f&&l&&(window.removeEventListener("deviceorientation",n),m.removeEventListener("touchstart",e),m.removeEventListener("touchend",i),m.removeEventListener("touchcancel",i),l=!1),l},this.toggle=function(){return l?this.disable():this.enable()},this.setAdaptiveVOffset=function(t){v=void 0==t||null===t||""==t?!v:Boolean(t)};var d,h=0,c=0,s=0,f=!!window.DeviceOrientationEvent,l=!1,v=!1;isTouching=!1,diffPan=0,diffTilt=0,hlookat=0,vlookat=0,degRad=Math.PI/180,d=t,v=!0;var m=document.getElementById(a);diffPan=d.getPan(),diffTilt=d.getTilt(),this.enable()}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbm9faHRtbC8xL3Bhbm8ydnJneXJvLmpzIl0sIm5hbWVzIjpbInBhbm8ydnJHeXJvIiwicGFub09iamVjdCIsImNvbnRhaW5lcklkIiwiaGFuZGxlVG91Y2hTdGFydCIsImV2ZW50IiwiaXNUb3VjaGluZyIsImhhbmRsZVRvdWNoRW5kIiwiaGFuZGxlRGV2aWNlT3JpZW50YXRpb24iLCJkIiwiRGF0ZSIsInBhbm9PYmoiLCJsYXN0VG91Y2giLCJnZXRUaW1lIiwiaXNFbmFibGVkIiwiZmFjdG9yIiwib3JpZW50YXRpb24iLCJyb3RhdGVFdWxlciIsIk9iamVjdCIsInlhdyIsImRlZ1JhZCIsInBpdGNoIiwicm9sbCIsImFsdHlhdyIsIk1hdGgiLCJhYnMiLCJhbHBoYSIsIndpbmRvdyIsIm1pbiIsIm1vdmVUbyIsImRpZmZQYW4iLCJkaWZmVGlsdCIsImdldEZvdiIsImxhc3RZYXciLCJsYXN0UGl0Y2giLCJhZGFwdERpZmZUaWx0IiwiZ2V0UGFuIiwiZ2V0VGlsdCIsImlzQWRhcHRpdmVEaWZmVGlsdCIsImV1bGVyIiwiaGVhZGluZyIsImJhbmsiLCJhdHRpdHVkZSIsImNoIiwiY29zIiwic2giLCJzaW4iLCJjYSIsInNhIiwiY2IiLCJzYiIsIm1hdHJpeCIsIkFycmF5IiwiYXRhbjIiLCJQSSIsImFzaW4iLCJ0aGlzIiwiZW5hYmxlIiwiaXNEZXZpY2VFbmFibGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5lciIsImRpc2FibGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwic2V0QWRhcHRpdmVWT2Zmc2V0IiwiYXJnIiwidW5kZWZpbmVkIiwiQm9vbGVhbiIsIkRldmljZU9yaWVudGF0aW9uRXZlbnQiLCJobG9va2F0Iiwidmxvb2thdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQWFBLFFBQVNBLGFBQVlDLEVBQVdDLEdBd0MvQixRQUFTQyxHQUFpQkMsR0FDekJDLFlBQWEsRUFHZCxRQUFT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QU9nQyxpQkFBaUIsb0JBQXFCbkQsR0FBeUIsR0FDdEVvRCxFQUFVRCxpQkFBaUIsYUFBY3ZELEdBQWtCLEdBQzNEd0QsRUFBVUQsaUJBQWlCLFdBQVlwRCxHQUFnQixHQUN2RHFELEVBQVVELGlCQUFpQixjQUFlcEQsR0FBZ0IsR0FDMURPLEdBQVksR0FFTkEsR0FHUjBDLEtBQUtLLFFBQVEsV0FRWixNQVBJSCxJQUFtQjVDLElBQ3RCYSxPQUFPbUMsb0JBQW9CLG9CQUFxQnRELEdBQ2hEb0QsRUFBVUUsb0JBQW9CLGFBQWMxRCxHQUM1Q3dELEVBQVVFLG9CQUFvQixXQUFZdkQsR0FDMUNxRCxFQUFVRSxvQkFBb0IsY0FBZXZELEdBQzdDTyxHQUFZLEdBRU5BLEdBR1IwQyxLQUFLTyxPQUFPLFdBQ1gsTUFBR2pELEdBQ0swQyxLQUFLSyxVQUVMTCxLQUFLQyxVQUdkRCxLQUFLUSxtQkFBbUIsU0FBU0MsR0FFL0IzQixFQURPNEIsUUFBTEQsR0FBMEIsT0FBUkEsR0FBdUIsSUFBUEEsR0FDZDNCLEVBRUQ2QixRQUFRRixHQWEvQixJQXdIQ3RELEdBeEhHc0IsRUFBUSxFQUNSQyxFQUFVLEVBQ1Z0QixFQUFVLEVBcUhWOEMsSUFBb0IvQixPQUFPeUMsdUJBRzlCdEQsR0FBWSxFQUNad0IsR0FBcUIsQ0FHckJoQyxhQUFhLEVBRWJ3QixRQUFVLEVBQUdDLFNBQVcsRUFDeEJzQyxRQUFVLEVBQUdDLFFBQVUsRUFFdkJsRCxPQUFTSSxLQUFLOEIsR0FBRyxJQUVsQjNDLEVBQVFULEVBRVJvQyxHQUFtQixDQUNuQixJQUFJc0IsR0FBWVcsU0FBU0MsZUFBZXJFLEVBRXhDMkIsU0FBVW5CLEVBQVF5QixTQUNsQkwsU0FBV3BCLEVBQVEwQixVQUVuQm1CLEtBQUtDIiwiZmlsZSI6InBhbm9faHRtbC8xL3Bhbm8ydnJneXJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkJhc2VkIG9uIHRoZSBrcnBhbm8gaU9TIDQuMiBneXJvc2NvcGUgc2NyaXB0XG5ieSBBbGRvIEhvZWJlbiAvIGZpZWxkb2Z2aWV3LmNvbVxuY29udHJpYnV0aW9ucyBieSBTamVpdGkgLyByb252YWxzdGFyLm5sXG5cblBvcnQgZm9yIFBhbm8yVlJcblRob21hcyBSYXVzY2hlciAvIGdhcmRlbmdub21lc29mdHdhcmUuY29tXG5cblRoaXMgc29mdHdhcmUgY2FuIGJlIHVzZWQgZnJlZSBvZiBjaGFyZ2UgYW5kIHRoZSBzb3VyY2UgY29kZSBpcyBhdmFpbGFibGUgdW5kZXIgYSBDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIGxpY2Vuc2U6XG5odHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS8zLjAvXG5cbiovXG5cbmZ1bmN0aW9uIHBhbm8ydnJHeXJvKHBhbm9PYmplY3QsY29udGFpbmVySWQpIHtcblxuXHR0aGlzLmVuYWJsZT1mdW5jdGlvbigpIHtcblx0XHRpZiAoaXNEZXZpY2VFbmFibGVkICYmICFpc0VuYWJsZWQpIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlb3JpZW50YXRpb25cIiwgaGFuZGxlRGV2aWNlT3JpZW50YXRpb24sIHRydWUpO1xuXHRcdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZVRvdWNoU3RhcnQsIHRydWUpO1xuXHRcdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVUb3VjaEVuZCwgdHJ1ZSk7XHRcdFxuXHRcdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCBoYW5kbGVUb3VjaEVuZCwgdHJ1ZSk7XHRcblx0XHRcdGlzRW5hYmxlZCA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBpc0VuYWJsZWQ7XG5cdH1cblxuXHR0aGlzLmRpc2FibGU9ZnVuY3Rpb24oKSB7XG5cdFx0aWYgKGlzRGV2aWNlRW5hYmxlZCAmJiBpc0VuYWJsZWQpIHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZGV2aWNlb3JpZW50YXRpb25cIiwgaGFuZGxlRGV2aWNlT3JpZW50YXRpb24pO1xuXHRcdFx0Y29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZVRvdWNoU3RhcnQpO1xuXHRcdFx0Y29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVUb3VjaEVuZCk7XHRcdFxuXHRcdFx0Y29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCBoYW5kbGVUb3VjaEVuZCk7XHRcblx0XHRcdGlzRW5hYmxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gaXNFbmFibGVkO1xuXHR9XG5cblx0dGhpcy50b2dnbGU9ZnVuY3Rpb24oKSB7XG5cdFx0aWYoaXNFbmFibGVkKVxuXHRcdFx0cmV0dXJuIHRoaXMuZGlzYWJsZSgpO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB0aGlzLmVuYWJsZSgpO1xuXHR9XG5cblx0dGhpcy5zZXRBZGFwdGl2ZVZPZmZzZXQ9ZnVuY3Rpb24oYXJnKSB7XG5cdFx0aWYoYXJnPT11bmRlZmluZWQgfHwgYXJnID09PSBudWxsIHx8IGFyZyA9PSBcIlwiKVxuXHRcdFx0aXNBZGFwdGl2ZURpZmZUaWx0ID0gIWlzQWRhcHRpdmVEaWZmVGlsdDtcblx0XHRlbHNlXG5cdFx0XHRpc0FkYXB0aXZlRGlmZlRpbHQgPSBCb29sZWFuKGFyZyk7IFxuXHR9XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChldmVudCkge1xuXHRcdGlzVG91Y2hpbmcgPSB0cnVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZXZlbnQpIHtcblx0XHRpc1RvdWNoaW5nID0gZmFsc2U7XHRcblx0fVxuXG5cdHZhciBsYXN0WWF3PTA7XG5cdHZhciBsYXN0UGl0Y2g9MDtcblx0dmFyIGxhc3RUb3VjaD0wO1xuXG5cdGZ1bmN0aW9uIGhhbmRsZURldmljZU9yaWVudGF0aW9uKGV2ZW50KSB7XG5cblx0XHRpZiAoKCFldmVudFtcImFscGhhXCJdKSB8fCAoIWV2ZW50W1wiYmV0YVwiXSkgfHwgKCFldmVudFtcImdhbW1hXCJdKSkgcmV0dXJuO1xuXHRcdCBcblx0XHR2YXIgZCA9IG5ldyBEYXRlKCk7XG5cdFx0dmFyIGlzVG91Y2hpbmc9KHBhbm9PYmouaXNUb3VjaGluZygpKTtcblx0XHRpZiAoaXNUb3VjaGluZykge1xuXHRcdFx0bGFzdFRvdWNoID0gZC5nZXRUaW1lKCk7XG5cdFx0fVxuXHRcdGlmICggIWlzVG91Y2hpbmcgJiYgaXNFbmFibGVkICYmIChkLmdldFRpbWUoKS1sYXN0VG91Y2gpPjEwMDApIHtcblxuXHRcdFx0Ly8gcHJvY2VzcyBldmVudC5hbHBoYSwgZXZlbnQuYmV0YSBhbmQgZXZlbnQuZ2FtbWFcblx0XHRcdHZhciBvcmllbnRhdGlvbiA9IHJvdGF0ZUV1bGVyKCBuZXcgT2JqZWN0KCB7IFxuXHRcdFx0XHRcdHlhdzogZXZlbnRbXCJhbHBoYVwiXSAqIGRlZ1JhZCwgXG5cdFx0XHRcdFx0cGl0Y2g6IGV2ZW50W1wiYmV0YVwiXSAqIGRlZ1JhZCwgXG5cdFx0XHRcdFx0cm9sbDogZXZlbnRbXCJnYW1tYVwiXSAqIGRlZ1JhZCBcblx0XHRcdFx0fSApICksXG5cdFx0XHRcdHlhdyA9IG9yaWVudGF0aW9uLnlhdyAvIGRlZ1JhZCxcblx0XHRcdFx0cGl0Y2ggPSBvcmllbnRhdGlvbi5waXRjaCAvIGRlZ1JhZCxcblx0XHRcdFx0YWx0eWF3ID0geWF3LFxuXHRcdFx0XHRmYWN0b3I7XG5cdFx0XHRcdFxuXG5cdFx0XHQvLyBmaXggZ2ltYmFsIGxvY2tcblx0XHRcdGlmKCBNYXRoLmFicyhwaXRjaCkgPiA3MCApIHtcblx0XHRcdFx0YWx0eWF3ID0gZXZlbnQuYWxwaGE7IFxuXHRcdFx0XG5cdFx0XHRcdHN3aXRjaCh3aW5kb3cub3JpZW50YXRpb24pIHtcblx0XHRcdFx0XHRjYXNlIDA6XG5cdFx0XHRcdFx0XHRpZiAoIHBpdGNoPjAgKSBcblx0XHRcdFx0XHRcdFx0YWx0eWF3ICs9IDE4MDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgOTA6IFxuXHRcdFx0XHRcdFx0YWx0eWF3ICs9IDkwO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAtOTA6IFxuXHRcdFx0XHRcdFx0YWx0eWF3ICs9IC05MDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMTgwOlxuXHRcdFx0XHRcdFx0aWYgKCBwaXRjaDwwICkgXG5cdFx0XHRcdFx0XHRcdGFsdHlhdyArPSAxODA7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRcdGFsdHlhdyA9IGFsdHlhdyAlIDM2MDtcblx0XHRcdFx0aWYoIE1hdGguYWJzKCBhbHR5YXcgLSB5YXcgKSA+IDE4MCApIFxuXHRcdFx0XHRcdGFsdHlhdyArPSAoIGFsdHlhdyA8IHlhdyApID8gMzYwIDogLTM2MDtcblx0XHRcdFxuXHRcdFx0XHRmYWN0b3IgPSBNYXRoLm1pbiggMSwgKCBNYXRoLmFicyggcGl0Y2ggKSAtIDcwICkgLyAxMCApO1xuXHRcdFx0XHR5YXcgPSB5YXcgKiAoIDEtZmFjdG9yICkgKyBhbHR5YXcgKiBmYWN0b3I7XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHRwYW5vT2JqLm1vdmVUbyhkaWZmUGFuICsgeWF3ICxkaWZmVGlsdCAtIHBpdGNoLHBhbm9PYmouZ2V0Rm92KCksMTApO1xuXG5cdFx0XHRsYXN0WWF3ID0geWF3O1xuXHRcdFx0bGFzdFBpdGNoID0gLXBpdGNoO1xuXHRcdFx0XG5cdFx0XHRhZGFwdERpZmZUaWx0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRpZmZQYW4gPSBwYW5vT2JqLmdldFBhbigpIC0gbGFzdFlhdztcblx0XHRcdGRpZmZUaWx0ID0gcGFub09iai5nZXRUaWx0KCkgLSBsYXN0UGl0Y2g7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gYWRhcHREaWZmVGlsdCgpIHtcblx0XHRpZiggZGlmZlRpbHQgIT0gMCAmJiBpc0FkYXB0aXZlRGlmZlRpbHQgKSB7XG5cdFx0XHRcdGRpZmZUaWx0ICo9IDAuOTg7XG5cdFx0XHRcdGlmKCBNYXRoLmFicyggZGlmZlRpbHQgKSA8IDAuMSApIHtcblx0XHRcdFx0XHRkaWZmVGlsdCA9IDA7XG5cdFx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGVFdWxlciggZXVsZXIgKSB7XG5cdFx0Ly8gYmFzZWQgb24gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL2V1bGVyVG9NYXRyaXgvaW5kZXguaHRtXG5cdFx0Ly8gYW5kIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2dlb21ldHJ5L3JvdGF0aW9ucy9jb252ZXJzaW9ucy9tYXRyaXhUb0V1bGVyL2luZGV4Lmh0bVxuXG5cdFx0dmFyIGhlYWRpbmcsIGJhbmssIGF0dGl0dWRlLFxuXHRcdFx0Y2ggPSBNYXRoLmNvcyhldWxlci55YXcpLFxuXHRcdFx0c2ggPSBNYXRoLnNpbihldWxlci55YXcpLFxuXHRcdFx0Y2EgPSBNYXRoLmNvcyhldWxlci5waXRjaCksXG5cdFx0XHRzYSA9IE1hdGguc2luKGV1bGVyLnBpdGNoKSxcblx0XHRcdGNiID0gTWF0aC5jb3MoZXVsZXIucm9sbCksXG5cdFx0XHRzYiA9IE1hdGguc2luKGV1bGVyLnJvbGwpO1xuXG5cdFx0Ly8gbm90ZTogaW5jbHVkZXMgOTAgZGVncmVlIHJvdGF0aW9uIGFyb3VuZCB6IGF4aXNcblx0XHRtYXRyaXggPSBuZXcgQXJyYXkoIFxuXHRcdFx0c2gqc2IgLSBjaCpzYSpjYiwgICAtY2gqY2EsICAgIGNoKnNhKnNiICsgc2gqY2IsXG5cdFx0XHRjYSpjYiwgICAgICAgICAgICAgIC1zYSwgICAgICAtY2Eqc2IsXHRcdFx0XG5cdFx0XHRzaCpzYSpjYiArIGNoKnNiLCAgICBzaCpjYSwgICAtc2gqc2Eqc2IgKyBjaCpjYlxuXHRcdCk7XG5cdFx0XHRcdFxuXHRcdC8qIFttMDAgbTAxIG0wMl0gMCAxIDJcblx0XHQgKiBbbTEwIG0xMSBtMTJdIDMgNCA1IFxuXHRcdCAqIFttMjAgbTIxIG0yMl0gNiA3IDggKi9cblx0IFxuXHRcdGlmIChtYXRyaXhbM10gPiAwLjk5OTkpIHsgLy8gc2luZ3VsYXJpdHkgYXQgbm9ydGggcG9sZVxuXHRcdFx0aGVhZGluZyA9IE1hdGguYXRhbjIobWF0cml4WzJdLG1hdHJpeFs4XSk7XG5cdFx0XHRhdHRpdHVkZSA9IE1hdGguUEkvMjtcblx0XHRcdGJhbmsgPSAwO1xuXHRcdH0gZWxzZSBpZiAobWF0cml4WzNdIDwgLTAuOTk5OSkgeyAvLyBzaW5ndWxhcml0eSBhdCBzb3V0aCBwb2xlXG5cdFx0XHRoZWFkaW5nID0gTWF0aC5hdGFuMihtYXRyaXhbMl0sbWF0cml4WzhdKTtcblx0XHRcdGF0dGl0dWRlID0gLU1hdGguUEkvMjtcblx0XHRcdGJhbmsgPSAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkaW5nID0gTWF0aC5hdGFuMigtbWF0cml4WzZdLG1hdHJpeFswXSk7XG5cdFx0XHRiYW5rID0gTWF0aC5hdGFuMigtbWF0cml4WzVdLG1hdHJpeFs0XSk7XG5cdFx0XHRhdHRpdHVkZSA9IE1hdGguYXNpbihtYXRyaXhbM10pO1xuXHRcdH1cblx0XG5cdFx0cmV0dXJuIG5ldyBPYmplY3QoIHsgeWF3OmhlYWRpbmcsIHBpdGNoOmF0dGl0dWRlLCByb2xsOmJhbmsgfSApIFxuXHR9XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblx0dmFyIGlzRGV2aWNlRW5hYmxlZCA9ICEhd2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQsXG5cdFx0cGFub09iaixcblx0XG5cdFx0aXNFbmFibGVkID0gZmFsc2UsXG5cdFx0aXNBZGFwdGl2ZURpZmZUaWx0ID0gZmFsc2UsXG5cdFx0aXNFYXNpbmcgPSAwLjU7XG5cblx0XHRpc1RvdWNoaW5nID0gZmFsc2UsXG5cdFxuXHRcdGRpZmZQYW4gPSAwLCBkaWZmVGlsdCA9IDAsXG5cdFx0aGxvb2thdCA9IDAsIHZsb29rYXQgPSAwLFxuXHRcblx0XHRkZWdSYWQgPSBNYXRoLlBJLzE4MDtcblx0XG5cdHBhbm9PYmo9cGFub09iamVjdDtcblx0Ly8gdHVybiBvbiBcImF1dG8gbGV2ZWxcIlxuXHRpc0FkYXB0aXZlRGlmZlRpbHQ9dHJ1ZTtcblx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKTtcblxuXHRkaWZmUGFuID0gcGFub09iai5nZXRQYW4oKTtcblx0ZGlmZlRpbHQgPSBwYW5vT2JqLmdldFRpbHQoKTtcblxuXHR0aGlzLmVuYWJsZSgpO1xuXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==