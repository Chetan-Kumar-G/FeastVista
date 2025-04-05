let currentStep = 0; // Keeps track of the current step
const steps = document.querySelectorAll(".form-step");
const dots = document.querySelectorAll(".dot");

function changeStep(direction) {
    // Hide the current step
    steps[currentStep].classList.remove("active");
    dots[currentStep].classList.remove("active");

    // Update step count
    currentStep += direction;

    // Ensure step remains within bounds
    if (currentStep < 0) {
        currentStep = 0;
    } else if (currentStep >= steps.length) {
        currentStep = steps.length - 1;
    }

    // Show new step
    steps[currentStep].classList.add("active");
    dots[currentStep].classList.add("active");

    // Hide "Previous" button on first step
    document.getElementById("prevBtn").style.display = currentStep === 0 ? "none" : "inline-block";

    // Change "Next" button to "Submit" on the last step
    document.getElementById("nextBtn").style.display = currentStep === steps.length - 1 ? "none" : "inline-block";
}

// Initialize by hiding the previous button on step 1
document.getElementById("prevBtn").style.display = "none";
