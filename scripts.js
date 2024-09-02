const buttonPage = document.getElementById('add-page');
const nickname = document.getElementById('nick-post').innerText;
const createPostContainer = document.getElementById('create-post-container');
const cancelBtn = document.getElementById('cancel-button');
const confirmBtn = document.getElementById('confirm-button');

// ========================================================
// EventListener ( Tem mutcho ┐(‘～` )┌ )
buttonPage.addEventListener('mouseenter', BpEnter)
buttonPage.addEventListener('mouseleave', function () {
    buttonPage.style.backgroundColor = ""
})
buttonPage.addEventListener('mousedown', BpPressDown)
buttonPage.addEventListener('mouseup', BpPressUp)
buttonPage.addEventListener('click', createPostOpen)
cancelBtn.addEventListener('click', createPostClose)
confirmBtn.addEventListener('click', enviarPost)
// ========================================================

// Functions "+" Button
function BpEnter() {
    buttonPage.style.backgroundColor = "#e0d2a3"
}

function BpPressDown() {
    buttonPage.style.backgroundColor = ""
}

function BpPressUp() {
    buttonPage.style.backgroundColor = "#f0e4bc"
}

// Create Post
function enviarPost() {
    let cDiv = document.createElement("div");
    let newPost = document.createElement('p');
    let nickPost = document.createElement('h3');
    let textArea = document.getElementById('post-text');

    cDiv.className = 'posts'
    nickPost.textContent = nickname;
    newPost.textContent = textArea.value

    if (textArea.value != "") {
        document.getElementById('posts-container').appendChild(cDiv);
        cDiv.appendChild(nickPost);
        cDiv.appendChild(newPost);

        createPostClose()
        textArea.value = "";
    } else {
        alert('Digite algo antes de enviar!!')
    }
}

function createPostOpen() {
    createPostContainer.style.display = "flex"
}

function createPostClose() {
    createPostContainer.style.display = ""
}