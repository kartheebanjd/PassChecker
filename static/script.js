document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('passwordForm');
    const resultContainer = document.getElementById('result');
    const scoreValue = document.getElementById('scoreValue');
    const strengthBar = document.getElementById('strengthBar');
    const strengthLevel = document.getElementById('strengthLevel');
    const tipsList = document.getElementById('tipsList');
    const commonPasswordWarning = document.getElementById('commonPasswordWarning');
    const crackTimeDisplay = document.getElementById('crackTime');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const eyeIcon = togglePasswordBtn ? togglePasswordBtn.querySelector('i') : null;


    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            if (eyeIcon) {
                if (type === 'password') {
                    eyeIcon.classList.remove('fa-eye-slash');
                    eyeIcon.classList.add('fa-eye');
                } else {
                    eyeIcon.classList.remove('fa-eye');
                    eyeIcon.classList.add('fa-eye-slash');
                }
            }
        });
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        

        form.classList.add('loading');
        
        try {
            const response = await fetch('/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password: password })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            

            if (data.error) {
                throw new Error(data.error);
            }
            

            updateResults(data);
            if (resultContainer) {
                resultContainer.style.display = 'block';
                resultContainer.hidden = false;
            }
        } catch (error) {
            console.error('Error:', error);
            alert(error.message || 'An error occurred while checking your password. Please try again later.');
            setTimeout(() => location.reload(), 300);
        } finally {

            form.classList.remove('loading');
        }
    });

    function updateResults(data) {

        if (scoreValue) scoreValue.textContent = data.score;
        if (strengthLevel) strengthLevel.textContent = data.strength;

        if (strengthBar) {
            strengthBar.style.width = `${data.score}%`;
            strengthBar.classList.remove('very-weak', 'weak', 'moderate', 'strong', 'very-strong');
            const strengthClass = (data.strength || '').toLowerCase().replace(/\s+/g, '-');
            if (strengthClass) strengthBar.classList.add(strengthClass);
        }

        if (crackTimeDisplay) {
            crackTimeDisplay.textContent = data.crack_time || 'N/A';
        }

        if (tipsList) {
            tipsList.innerHTML = '';
            (data.tips || []).forEach(tip => {
                const li = document.createElement('li');
                li.textContent = tip;
                tipsList.appendChild(li);
            });
        }

        if (commonPasswordWarning) {
            if (data.is_common) {
                commonPasswordWarning.style.display = 'block';
                commonPasswordWarning.hidden = false;
            } else {
                commonPasswordWarning.style.display = 'none';
                commonPasswordWarning.hidden = true;
            }
        }
    }
});