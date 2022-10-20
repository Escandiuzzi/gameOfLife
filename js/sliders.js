window.addEventListener('load', function () {
    
    var chanceSlider = document.getElementById("chance");
    var chanceOutput = document.getElementById("chance-value");
    chanceOutput.innerHTML = chanceSlider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    chanceSlider.oninput = function() {
        chanceOutput.innerHTML = this.value;
    }

    var birthSlider = document.getElementById("birth");
    var birthOutput = document.getElementById("birth-value");
    birthOutput.innerHTML = birthSlider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    birthSlider.oninput = function() {
        birthOutput.innerHTML = this.value;
    }

    var survivalSlider = document.getElementById("survival");
    var survivalOutput = document.getElementById("survival-value");
    survivalOutput.innerHTML = survivalSlider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    survivalSlider.oninput = function() {
        survivalOutput.innerHTML = this.value;
    }

    var erasSlider = document.getElementById("eras");
    var erasOutput = document.getElementById("eras-value");
    erasOutput.innerHTML = erasSlider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    erasSlider.oninput = function() {
        erasOutput.innerHTML = this.value;
    }
});