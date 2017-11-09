var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19; 
console.log(randomNumber);

var gemNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1; 
console.log(gemNumber);

var userScore = 0;
var winTotal = 0;
var lossTotal = 0;

$(".randomNumber").html(randomNumber);

	var rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	var diamondNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	var crystalNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	var emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;


	$("#ruby").on("click", function() {
		
		userScore = userScore + rubyNumber;		
		$("#userScore").html(userScore);

			if (userScore > randomNumber) {
				$("#lossTotal").html(lossTotal++);
				alert("you lose");
				$("#lossTotal").html(lossTotal++);

				randomNumber =Math.floor(Math.random() * (120 - 19 + 1)) + 19; 
				rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				diamondNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				crystalNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				userScore = 0
				$(".randomNumber").html(randomNumber);
				$("#userScore").html(userScore);
				console.log("rubyNumber is: " + rubyNumber);
				console.log("diamondNumber is: " + diamondNumber);
				console.log("crystalNumber is: " + crystalNumber);
				console.log("emeraldNumber is: " + emeraldNumber);
			}			

			else if (userScore == randomNumber) {
				alert("you win!")
				$("#winTotal").html(winTotal++);

				randomNumber =Math.floor(Math.random() * (120 - 19 + 1)) + 19; 
				rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				diamondNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				crystalNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				userScore = 0
				$(".randomNumber").html(randomNumber);
				$("#userScore").html(userScore);
				console.log("rubyNumber is: " + rubyNumber);
				console.log("diamondNumber is: " + diamondNumber);
				console.log("crystalNumber is: " + crystalNumber);
				console.log("emeraldNumber is: " + emeraldNumber);
			}
	})

	$("#diamond").on("click", function() {

		
		userScore = userScore + diamondNumber;		
		$("#userScore").html(userScore);

			if (userScore > randomNumber) {
				alert("you lose");
				$("#lossTotal").html(lossTotal++);

				randomNumber =Math.floor(Math.random() * (120 - 19 + 1)) + 19; 
				rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				diamondNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				crystalNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				userScore = 0
				$(".randomNumber").html(randomNumber);
				$("#userScore").html(userScore);
				console.log("rubyNumber is: " + rubyNumber);
				console.log("diamondNumber is: " + diamondNumber);
				console.log("crystalNumber is: " + crystalNumber);
				console.log("emeraldNumber is: " + emeraldNumber);				
			}

			else if (userScore == randomNumber) {
				alert("you win!")
				$("#winTotal").html(winTotal++);

				randomNumber =Math.floor(Math.random() * (120 - 19 + 1)) + 19; 
				rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				diamondNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				crystalNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				userScore = 0
				$(".randomNumber").html(randomNumber);
				$("#userScore").html(userScore);
				console.log("rubyNumber is: " + rubyNumber);
				console.log("diamondNumber is: " + diamondNumber);
				console.log("crystalNumber is: " + crystalNumber);
				console.log("emeraldNumber is: " + emeraldNumber);				
			}
	})

	$("#crystal").on("click", function() {
		userScore = userScore + crystalNumber;		
		$("#userScore").html(userScore);

			if (userScore > randomNumber) {
				alert("you lose");
				$("#lossTotal").html(lossTotal++);

				randomNumber =Math.floor(Math.random() * (120 - 19 + 1)) + 19; 
				rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				diamondNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				crystalNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				userScore = 0
				$(".randomNumber").html(randomNumber);
				$("#userScore").html(userScore);
				console.log("rubyNumber is: " + rubyNumber);
				console.log("diamondNumber is: " + diamondNumber);
				console.log("crystalNumber is: " + crystalNumber);
				console.log("emeraldNumber is: " + emeraldNumber);				
			}

			else if (userScore == randomNumber) {
				alert("you win!")
				$("#winTotal").html(winTotal++);

				randomNumber =Math.floor(Math.random() * (120 - 19 + 1)) + 19; 
				rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				diamondNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				crystalNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				userScore = 0
				$(".randomNumber").html(randomNumber);
				$("#userScore").html(userScore);
				console.log("rubyNumber is: " + rubyNumber);
				console.log("diamondNumber is: " + diamondNumber);
				console.log("crystalNumber is: " + crystalNumber);
				console.log("emeraldNumber is: " + emeraldNumber);				
			}
	})

	$("#emerald").on("click", function() {
		userScore = userScore + emeraldNumber;		
		$("#userScore").html(userScore);

			if (userScore > randomNumber) {
				alert("you lose");
				$("#lossTotal").html(lossTotal++);

				randomNumber =Math.floor(Math.random() * (120 - 19 + 1)) + 19; 
				rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				diamondNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				crystalNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				userScore = 0
				$(".randomNumber").html(randomNumber);
				$("#userScore").html(userScore);
				console.log("rubyNumber is: " + rubyNumber);
				console.log("diamondNumber is: " + diamondNumber);
				console.log("crystalNumber is: " + crystalNumber);
				console.log("emeraldNumber is: " + emeraldNumber);				
			}

			else if (userScore == randomNumber) {
				alert("you win!")
				$("#winTotal").html(winTotal++);

				randomNumber =Math.floor(Math.random() * (120 - 19 + 1)) + 19; 
				rubyNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				diamondNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				crystalNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				emeraldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
				userScore = 0
				$(".randomNumber").html(randomNumber);
				$("#userScore").html(userScore);
				console.log("rubyNumber is: " + rubyNumber);
				console.log("diamondNumber is: " + diamondNumber);
				console.log("crystalNumber is: " + crystalNumber);
				console.log("emeraldNumber is: " + emeraldNumber);				
			}	
	})












