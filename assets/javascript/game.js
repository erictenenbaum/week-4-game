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
				alert("you lose");
				$("#lossTotal").html(++lossTotal);

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
				$("#winTotal").html(++winTotal);

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
				$("#lossTotal").html(++lossTotal);

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
				$("#winTotal").html(++winTotal);

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
				$("#lossTotal").html(++lossTotal);

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
				$("#winTotal").html(++winTotal);

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
				$("#lossTotal").html(++lossTotal);

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
				$("#winTotal").html(++winTotal);

				randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
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

// Below is what I worked on with my tutor to make my code more DRY. 
// The code above works just fine but it was very repetative. 
// Working with my tutor on this was a really good excersise and I've used a lot of these 
// concepts to make my trivia game more DRY for the next assignment


var crystalHolderDOM = $("#crystalHolder");

function fourNew() {
	$("#crystalHolder").empty();
	for (var i = 0; i < 4; i++) {
		genCrystals(i);
	};
}
fourNew();

function genCrystals (i) {
	var randoCrystalNum = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	var newDiv = $("<div>");
	newDiv.attr("class", "col-md-1");
	var newImg = $("<img>");
	newImg.attr("src", "./assets/images/crystal-" + i +".png").attr("id", "crystal").attr("data-value", randoCrystalNum);

	newDiv.append(newImg);
	crystalHolderDOM.append(newDiv);
}


$("#crystalHolder").on("click", "#crystal", function(){
	console.log($(this).attr("data-value"));
	userScore = userScore + parseInt($(this).attr("data-value"))
	$("#userScore").html(userScore);

	if (userScore > randomNumber) {
		randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		alert("you lose");
		$("#lossTotal").html(++lossTotal);
		userScore = 0;
		$(".randomNumber").html(randomNumber);
		$("#userScore").html(userScore);
		fourNew();
	}
	else if (userScore == randomNumber) {
		randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		alert("you win!")
		$("#winTotal").html(++winTotal);
		userScore = 0;
		$(".randomNumber").html(randomNumber);
		$("#userScore").html(userScore);
		fourNew();
	}
})








