const users = []; // 사용자 정보를 저장하는 배열

// HTML 요소 가져오기
const usernameInput = document.getElementById("username"); // 사용자 이름 입력 필드
const passwordInput = document.getElementById("password"); // 비밀번호 입력 필드
const signupButton = document.getElementById("signup-button"); // 가입 버튼

// "가입" 버튼에 클릭 이벤트 리스너 추가
signupButton.addEventListener("click", signup);

// 사용자 이름이 이미 존재하는지 확인하는 함수
function isUsernameTaken(username) {
    return users.some(user => user.username === username);
}

// 비밀번호가 유효한지 확인하는 함수
function isValidPassword(password) {
    // 비밀번호는 8자 이상
    if (password.length < 8) {
        return false;
    }

    // 대문자, 소문자, 숫자가 각각 최소 하나 이상 포함될 것.
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return hasUppercase && hasLowercase && hasNumber;
}

// 사용자의 가입을 처리하는 함수
function signup() {
    const username = usernameInput.value.trim(); // 입력된 사용자 이름을 얻음
    const password = passwordInput.value; // 입력된 비밀번호를 얻음

    // 사용자 이름과 비밀번호가 비어있는지 확인
    if (!username || !password) {
        alert("사용자 이름과 비밀번호를 모두 입력하세요.");
        return;
    }

    // 사용자 이름이 이미 존재하는지 확인
    if (isUsernameTaken(username)) {
        alert("사용자 이름이 이미 존재합니다.");
        return;
    }

    // 비밀번호가 유효한지 확인
    if (!isValidPassword(password)) {
        alert("비밀번호가 유효하지 않습니다. \n비밀번호는 8자 이상이어야 합니다. \n대문자, 소문자, 숫자가 각각 최소 하나 이상 포함되어야 합니다.");
        return;
    }

    // 사용자 정보를 배열에 추가
    users.push({ username, password });

    // 사용자에게 가입 완료 메시지를 표시
    alert("회원가입이 완료되었습니다.");
}
