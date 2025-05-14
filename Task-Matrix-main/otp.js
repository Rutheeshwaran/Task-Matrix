document.getElementById("resendOtpBtn").addEventListener("click", generateOTP);
document.getElementById("verifyOtpBtn").addEventListener("click", verifyOTP);

let generatedOTP = '';
let userEmail = '';

// Simulated function to fetch email from backend
function fetchUserEmail() {
    // In a real scenario, this would be an API call to your backend
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("user@example.com");
        }, 500); // Simulating a 500ms delay
    });
}

async function generateOTP() {
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Fetch user email (simulated)
    userEmail = await fetchUserEmail();
    
    // Display email and OTP on the page
    document.getElementById('emailDisplay').textContent = `OTP sent to: ${userEmail}`;
    document.getElementById('otpDisplay').textContent = `OTP: ${generatedOTP}`;
    
    clearOtpInputs();
}

function verifyOTP() {
    const otpEntered = Array.from(document.querySelectorAll('.otp-box input'))
                            .map(input => input.value)
                            .join('');

    if (otpEntered.length !== 6 || !/^\d+$/.test(otpEntered)) {
        showError("otp-error", "Please enter a valid 6-digit OTP");
        return;
    }

    if (otpEntered === generatedOTP) {
        alert("OTP Verified Successfully!");
    } else {
        showError("otp-error", "Invalid OTP! Please try again.");
    }
}

function handleOtpInput(currentInput, nextInputId) {
    const value = currentInput.value;
    
    if (!/^\d*$/.test(value)) {
        currentInput.value = '';
        showError("otp-error", "Please enter only numbers for OTP");
        return;
    }

    if (value.length >= 1 && nextInputId) {
        document.getElementById(nextInputId).focus();
    }

    hideError("otp-error");
}

function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = 'none';
}

function clearOtpInputs() {
    const otpInputs = document.querySelectorAll('.otp-box input');
    otpInputs.forEach(input => input.value = '');
}

// Generate initial OTP when the page loads
generateOTP();