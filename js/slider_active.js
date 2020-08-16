var btn_slider = document.querySelectorAll(".slide-btn")
var slide_item = document.querySelectorAll(".features-slide-item")


			for(var i = 0; i < btn_slider.length; i++){
				slider_active(i)
			}

			function slider_active(item){
				btn_slider[item].addEventListener("click", function(evt){

					evt.preventDefault();

					for(var j = 0; j < btn_slider.length; j++){
						if(btn_slider[j].classList.contains("slide-current")){

							btn_slider[j].classList.remove("slide-current")
							this.classList.add("slide-current")

							slide_item[j].classList.add("visually-hidden")
							slide_item[item].classList.remove("visually-hidden")

							break
						}
					}
				})
			}