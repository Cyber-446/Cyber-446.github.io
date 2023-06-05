let StartFunc = 0;
		document.getElementById("startbut").addEventListener("click", pressedStart);
		document.getElementById("stopbut").addEventListener("click", pressedStop);
		function pressedStart(){
		StartFunc=setInterval(myFunction, 1000)
		}
		function pressedStop(){
		clearInterval(StartFunc)
		}
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
			function myFunction() {
                (async () => {
                    let response = await fetch('https://kav-api.kovalev.team/servodrive/lastActualData?servoDriveId=1');
		    //let response = await fetch('http://localhost:5000');
                    let el = document.getElementById('demo')
                    el.innerHTML = ""
                    let text = await response.text(); // прочитать тело ответа как текст
                    for (const [key, value] of Object.entries(JSON.parse(text)[0])) {
                        const newEl = document.createElement("li")
                        newEl.appendChild(document.createTextNode(`${key}: ${value}`))
                        el.appendChild(newEl)
                        await sleep(100)
                    }
                })()
			}
