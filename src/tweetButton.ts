
export function tweetButton(){
    const tweetButtonContainer=document.createElement("div");
    const anchorElement=document.createElement("a");
    const anchorElementContent=document.createTextNode("Send a thank you tweet");

    
    const tweetUrl =
     "https://twitter.com/intent/tweet?text=https%3A%2F%2Fgithub.com%2Fomprakash8788%2Fbutton-001"



    tweetButtonContainer.setAttribute("id", "tweet-btn-container");
    anchorElement.setAttribute("class", "tweet-button");
    anchorElement.setAttribute("target", "_blank");
    anchorElement.setAttribute("href", tweetUrl);

    anchorElement.appendChild(anchorElementContent);
    tweetButtonContainer.appendChild(anchorElement);

    return tweetButtonContainer;

}