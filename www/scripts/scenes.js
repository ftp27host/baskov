$(function(){var e=[],o=$("#main").outerHeight();console.log(o);var t=$("#main .logo").offset().top,n=TweenMax.to("#main .logo",.5,{top:t+o/2,ease:Linear.easeNone}),a=$("#main .logo").height();e.push(new ScrollMagic.Scene({triggerElement:"#main",offset:o-a,duration:.5*o-a}).setTween(n));var r=TweenMax.from("#history",.5,{opacity:0});e.push(new ScrollMagic.Scene({triggerElement:"#history",offset:-(.3*o),duration:.7*o}).setTween(r));var i=TweenMax.from("#history_info",2,{marginRight:"-40%",opacity:0,ease:Power2.easeOut}),s=TweenMax.from("#history_house",2,{marginLeft:"-50%",opacity:0,ease:Power2.easeOut});e.push(new ScrollMagic.Scene({triggerElement:"#history",offset:.2*o,duration:.4*o}).setTween([i,s])),controller.addScene(e)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjZW5lcy5qcyJdLCJuYW1lcyI6WyIkIiwic2NlbmVzIiwic2NlbmVIZWlnaHQiLCJvdXRlckhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJpbml0T2Zmc2V0Iiwib2Zmc2V0IiwidG9wIiwibWFpbl90d2VlbiIsIlR3ZWVuTWF4IiwidG8iLCJlYXNlIiwiTGluZWFyIiwiZWFzZU5vbmUiLCJsb2dvSGVpZ2h0IiwiaGVpZ2h0IiwicHVzaCIsIlNjcm9sbE1hZ2ljIiwiU2NlbmUiLCJ0cmlnZ2VyRWxlbWVudCIsImR1cmF0aW9uIiwic2V0VHdlZW4iLCJoaXN0b3J5X3R3ZWVuIiwiZnJvbSIsIm9wYWNpdHkiLCJoaXN0b3J5X2luZm9fdHdlZW4iLCJtYXJnaW5SaWdodCIsIlBvd2VyMiIsImVhc2VPdXQiLCJoaXN0b3J5X2hvdXNlX3R3ZWVuIiwibWFyZ2luTGVmdCIsImNvbnRyb2xsZXIiLCJhZGRTY2VuZSJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUUsV0FDRSxHQUFJQyxNQUdBQyxFQUFjRixFQUFFLFNBQVNHLGFBQzdCQyxTQUFRQyxJQUFJSCxFQUlaLElBQUlJLEdBQWFOLEVBQUUsZUFBZU8sU0FBU0MsSUFHdkNDLEVBQWFDLFNBQVNDLEdBQUcsY0FBZSxJQUN4Q0gsSUFBS0YsRUFBYUosRUFBWSxFQUM5QlUsS0FBTUMsT0FBT0MsV0FHYkMsRUFBYWYsRUFBRSxlQUFlZ0IsUUFDbENmLEdBQU9nQixLQUNILEdBQUlDLGFBQVlDLE9BQ1pDLGVBQWdCLFFBQ2hCYixPQUFTTCxFQUFjYSxFQUN2Qk0sU0FBc0IsR0FBWm5CLEVBQWtCYSxJQUUzQk8sU0FBU2IsR0FVbEIsSUFBSWMsR0FBZ0JiLFNBQVNjLEtBQUssV0FBWSxJQUMxQ0MsUUFBUyxHQUVieEIsR0FBT2dCLEtBQ0gsR0FBSUMsYUFBWUMsT0FDWkMsZUFBZ0IsV0FDaEJiLFNBQXdCLEdBQWRMLEdBQ1ZtQixTQUF3QixHQUFkbkIsSUFFVG9CLFNBQVNDLEdBTWxCLElBQUlHLEdBQXFCaEIsU0FBU2MsS0FBSyxnQkFBaUIsR0FDcERHLFlBQWEsT0FDYkYsUUFBUyxFQUNUYixLQUFNZ0IsT0FBT0MsVUFJYkMsRUFBc0JwQixTQUFTYyxLQUFLLGlCQUFrQixHQUN0RE8sV0FBWSxPQUNaTixRQUFTLEVBQ1RiLEtBQU1nQixPQUFPQyxTQUVqQjVCLEdBQU9nQixLQUNILEdBQUlDLGFBQVlDLE9BQ1pDLGVBQWdCLFdBQ2hCYixPQUFxQixHQUFaTCxFQUNUbUIsU0FBd0IsR0FBZG5CLElBRVRvQixVQUFVSSxFQUFvQkksS0FPdkNFLFdBQVdDLFNBQVNoQyIsImZpbGUiOiJzY2VuZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2VuZXMgPSBbXTtcblxuXG4gICAgdmFyIHNjZW5lSGVpZ2h0ID0gJChcIiNtYWluXCIpLm91dGVySGVpZ2h0KCk7XG4gICAgY29uc29sZS5sb2coc2NlbmVIZWlnaHQpO1xuXG4vLyAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjICAgICAgICBIaXN0b3J5IHNjZW5lICAgICAgICAgICAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuICAgIHZhciBpbml0T2Zmc2V0ID0gJChcIiNtYWluIC5sb2dvXCIpLm9mZnNldCgpLnRvcDtcblxuXG4gICAgdmFyIG1haW5fdHdlZW4gPSBUd2Vlbk1heC50bygnI21haW4gLmxvZ28nLCAwLjUsIHtcbiAgICAgICAgdG9wOiBpbml0T2Zmc2V0ICsgc2NlbmVIZWlnaHQvMixcbiAgICAgICAgZWFzZTogTGluZWFyLmVhc2VOb25lXG4gICAgfSk7XG5cbiAgICB2YXIgbG9nb0hlaWdodCA9ICQoXCIjbWFpbiAubG9nb1wiKS5oZWlnaHQoKTtcbiAgICBzY2VuZXMucHVzaChcbiAgICAgICAgbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICAgICAgICAgIHRyaWdnZXJFbGVtZW50OiAnI21haW4nLFxuICAgICAgICAgICAgb2Zmc2V0OiAoc2NlbmVIZWlnaHQgLSBsb2dvSGVpZ2h0KSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBzY2VuZUhlaWdodCowLjUgLSBsb2dvSGVpZ2h0XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuc2V0VHdlZW4obWFpbl90d2VlbilcblxuICAgICk7XG5cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG4vLyAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjICAgICAgICBIaXN0b3J5IHNjZW5lICAgICAgICAgICAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuICAgIC8vLy8vLy8vLy8vLy8vLyBTY2VuZSBvcGFjaXR5XG4gICAgdmFyIGhpc3RvcnlfdHdlZW4gPSBUd2Vlbk1heC5mcm9tKCcjaGlzdG9yeScsIDAuNSwge1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgfSk7XG4gICAgc2NlbmVzLnB1c2goXG4gICAgICAgIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgICAgICAgICB0cmlnZ2VyRWxlbWVudDogJyNoaXN0b3J5JyxcbiAgICAgICAgICAgIG9mZnNldDogLShzY2VuZUhlaWdodCAqIDAuMyksXG4gICAgICAgICAgICBkdXJhdGlvbjogc2NlbmVIZWlnaHQgKiAwLjdcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZXRUd2VlbihoaXN0b3J5X3R3ZWVuKVxuXG4gICAgKTtcblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8gU2NlbmUgZWxlbWVudHNcbiAgICB2YXIgaGlzdG9yeV9pbmZvX3R3ZWVuID0gVHdlZW5NYXguZnJvbSgnI2hpc3RvcnlfaW5mbycsIDIsIHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiLTQwJVwiLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgIH0pO1xuXG5cbiAgICB2YXIgaGlzdG9yeV9ob3VzZV90d2VlbiA9IFR3ZWVuTWF4LmZyb20oJyNoaXN0b3J5X2hvdXNlJywgMiwge1xuICAgICAgICBtYXJnaW5MZWZ0OiBcIi01MCVcIixcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICB9KTtcbiAgICBzY2VuZXMucHVzaChcbiAgICAgICAgbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICAgICAgICAgIHRyaWdnZXJFbGVtZW50OiAnI2hpc3RvcnknLFxuICAgICAgICAgICAgb2Zmc2V0OiAoc2NlbmVIZWlnaHQqMC4yKSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBzY2VuZUhlaWdodCAqIDAuNFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnNldFR3ZWVuKFtoaXN0b3J5X2luZm9fdHdlZW4sIGhpc3RvcnlfaG91c2VfdHdlZW5dKVxuXG4gICAgKTtcblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5cbiAgICBjb250cm9sbGVyLmFkZFNjZW5lKHNjZW5lcyk7XG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=