let username;

document.getElementById("button").onclick = function()
{
    username = document.getElementById("name").value;
    document.getElementById("myh1").textContent = `Hello ${username}`
}