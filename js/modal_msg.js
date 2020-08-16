			var contact_btn = document.querySelector(".button-contacts")

			var background = document.querySelector(".background")
			var modal_open = document.querySelector(".modal-login")
			var modal_close = modal_open.querySelector(".modal-close")

			var form = modal_open.querySelector(".login-form")
			var input_name = form.querySelector("input[type=text]")
			var input_email = form.querySelector("input[type=email]")
			var input_textarea = form.querySelector(".login-form textarea")

			var logininfo = {}

		    var storage = ""
		    var isStoragesupport = true

		    try{
				var storage = JSON.parse(localStorage.getItem("formdata"))
		    }catch(err){
		    	isStoragesupport = false
		    }

		    // Функция проверки значения форм на валидность
		    function valid_field(val){
		    	if(val){
					for(var i = 0; i < (form.children.length - 1); i++){
						form.children[i].children[1].classList.remove("valid-field")
					}
		    	}else{
		    		for(var i = 0; i < (form.children.length - 1); i++){
						if(!form.children[i].children[1].value){
							form.children[i].children[1].classList.add("valid-field")
						}else{
							form.children[i].children[1].classList.remove("valid-field")
						}
					}
		    	}
		    }
			
			contact_btn.addEventListener("click", function(evt){
				evt.preventDefault()
				background.classList.add("bg-color")
				modal_open.classList.add("modal-show")
				document.body.classList.add("body-overflow")

				// Функция проверки значения форм на валидность
				valid_field(true)

				if(storage){
					input_name.value = storage.name
					input_email.value = storage.email
					input_textarea.focus()
				}else{
					input_name.focus()
				}
			})

			form.addEventListener("submit", function(evt){
				if(!input_name.value || !input_email.value || !input_textarea.value){
					evt.preventDefault()
					// форма не отправлена!!!
					console.log("не все поля формы заполнены!!!")

					// Функция проверки значения форм на валидность
					valid_field(false)

				}else{
					if(isStoragesupport){
						// форма отправлена!!!
						console.log("форма отправлена успешно!!!")
						evt.preventDefault()
						console.log("Форма успешно отправлена!!")

						logininfo.name = input_name.value
						logininfo.email = input_email.value
						localStorage.setItem("formdata", JSON.stringify(logininfo))
						background.classList.remove("bg-color")
						modal_open.classList.remove("modal-show")
						document.body.classList.remove("body-overflow")
				    }
				}
			})

			modal_close.addEventListener("click", function(evt){
				evt.preventDefault()
				background.classList.remove("bg-color")
				modal_open.classList.remove("modal-show")
				document.body.classList.remove("body-overflow")
			})

			window.addEventListener("keydown", function(evt){

				if(modal_open.classList.contains("modal-show")){
					if(evt.keyCode === 27){
						evt.preventDefault()
						background.classList.remove("bg-color")
						modal_open.classList.remove("modal-show")
						document.body.classList.remove("body-overflow")
					}
				}
			})