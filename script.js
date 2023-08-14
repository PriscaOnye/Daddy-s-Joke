// Selecting elements
const jokeText = document.getElementById("joke");
const nextJokeButton = document.getElementById("nextJoke");

// API URL
const API_URL = "https://icanhazdadjoke.com/";

// Headers for the fetch request
const headers = new Headers();
headers.append('Accept', 'application/json');
headers.append('User-Agent', 'Dads Joke (https://github.com/PriscaOnyee/Daddy-s-Joke)');

// Function to get a joke
async function getJoke(url) {
  try {
    const response = await fetch(url, {
      headers: headers,
    });
    const data = await response.json();
    jokeText.innerHTML = data.joke;
  } catch (error) {
    console.error(error);
  }
}

// Add click event listener to the "Next Joke" button
nextJokeButton.addEventListener('click', () => {
  getJoke(API_URL);
});

// Fetch a joke when the page loads
getJoke(API_URL);




// social media share buttons

// LinkedIn Share Button
const linkedInShare = document.getElementById("linkedIn");
linkedInShare.addEventListener("click", function() {
    window.open("https://www.linkedin.com/share?text=" + jokeText.innerHTML, "LinkedIn window", "width=600, height=500")
});



// Facebook Share Button
const facebookShare = document.getElementById("facebook");
facebookShare.addEventListener("click", function() {
    const shareText = encodeURIComponent(jokeText.innerHTML);
    const shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + shareText;
    window.open(shareUrl, "Facebook window", "width=600, height=500");
});



// WhatsApp Share Button
const whatsAppShare = document.getElementById("whatsApp");
whatsAppShare.addEventListener("click", function() {
    const shareText = encodeURIComponent(jokeText.innerHTML);
    const shareUrl = "https://api.whatsapp.com/send?text=" + shareText;
    window.open(shareUrl, "WhatsApp window", "width=600, height=500");
});



// Twitter Share Button
const twitterShare = document.getElementById("twitter");
twitterShare.addEventListener("click", function() {
    const shareText = encodeURIComponent(jokeText.innerHTML);
    const shareUrl = "https://twitter.com/intent/tweet?text=" + shareText;
    window.open(shareUrl, "Twitter window", "width=600, height=500");
});



// Instagram Share Button
const instagramShare = document.getElementById("instagram");
instagramShare.addEventListener("click", function() {
    const shareText = encodeURIComponent(jokeText.innerHTML);
    const shareUrl = "https://www.instagram.com/?text=" + shareText;
    window.open(shareUrl, "Instagram window", "width=600, height=500");
});



// Github Link to repo
const GitHubRepo = document.getElementById("github");
GitHubRepo.addEventListener("click", function() {
    window.open("https://github.com/PriscaOnyee/Daddy-s-Joke", "Githun window", "width=600, height=800")
});



// Copy Button
const copyButton = document.getElementById("copyText");
copyButton.addEventListener("click", function() {
    navigator.clipboard.writeText(jokeText.innerHTML);
});
